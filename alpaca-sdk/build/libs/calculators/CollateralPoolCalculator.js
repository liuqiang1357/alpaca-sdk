var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { BasisPoint } from '../../constants';
import { BookKeeperAddress, CollateralPoolConfigAddress } from '../../constants/ausdContracts';
import { MulticallAddress } from '../../constants/contracts';
import { BatchContractCaller } from '../../libs/batchContractCaller';
import { compare } from '../../utils/address';
import { calculateSecondlyCompoundAPY, convertBpsToWei } from '../../utils/calculation';
import { parseFloatToBigNumber } from '../../utils/format';
import { formatRay, WeiPerBln, WeiPerRad, WeiPerRay, WeiPerWad } from '../../utils/unit';
import { BookKeeper__factory, IbTokenAdapter__factory, ICollateralPoolConfig__factory, } from '@alpaca-finance/alpaca-stablecoin/typechain';
import { LendingPoolCalculatorFactory } from './LendingPoolCalculator';
import { StakingPoolCalculatorFactory } from './StakingPoolCalculator';
import { ibStakingPoolsV2 } from '../../constants/stakingPool';
import { Zero } from '@ethersproject/constants';
import { formatBytes32String } from '@ethersproject/strings';
import { minBigNumber } from '../../utils/math';
export class CollateralPoolCalculatorFactory {
    constructor(_provider, _options) {
        this.provider = _provider;
        this.options = _options || {};
    }
    setLendingPoolCalculators(_lendingPoolCalculators) {
        this.lendingPoolCalculators = _lendingPoolCalculators;
        return this;
    }
    setIbStakingPoolCalculators(_ibStakingPoolCalculators) {
        this.ibStakingPoolCalculators = _ibStakingPoolCalculators;
        return this;
    }
    create(..._collateralPools) {
        return __awaiter(this, void 0, void 0, function* () {
            const [lendingPoolCalculators, ibStakingPoolCalculators] = yield Promise.all([
                this.lendingPoolCalculators
                    ? this.lendingPoolCalculators
                    : new LendingPoolCalculatorFactory(this.provider).create(..._collateralPools.map((c) => c.vault)),
                this.ibStakingPoolCalculators
                    ? this.ibStakingPoolCalculators
                    : new StakingPoolCalculatorFactory(this.provider).create(..._collateralPools.map((c) => ibStakingPoolsV2.find((s) => compare(s.stakingToken.address, c.vault.address)))),
            ]);
            return this.createWithInjectedCalculators(_collateralPools, lendingPoolCalculators, ibStakingPoolCalculators);
        });
    }
    createWithInjectedCalculators(_collateralPools, _lendingPoolCalculators, _ibStakingPoolCalculators) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_collateralPools.map((_collateralPool) => {
                const lendingPoolCalculator = _lendingPoolCalculators.find((cal) => compare(cal.vault.address, _collateralPool.vault.address));
                if (!lendingPoolCalculator)
                    throw new Error(`CollaterPoolCalculatorFactory::createWithInjectedCalculators: cannot find lendingPoolCalculator by vault(${_collateralPool.vault.address})`);
                const ibStakingPoolCalculator = _ibStakingPoolCalculators.find((cal) => compare(cal.stakePool.stakingToken.address, _collateralPool.vault.address));
                if (!ibStakingPoolCalculator)
                    throw new Error(`CollaterPoolCalculatorFactory::createWithInjectedCalculators: cannot find ibStakingPoolCalculator by ibToken(${_collateralPool.vault.address})`);
                return this.createOne(_collateralPool, lendingPoolCalculator, ibStakingPoolCalculator);
            }));
        });
    }
    createOne(_collateralPool, _lendingPoolCalculator, _ibStakingPoolCalculator) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getData(_collateralPool);
            return new CollateralPoolCalculator(data, _collateralPool, _lendingPoolCalculator, _ibStakingPoolCalculator);
        });
    }
    getData(_collateralPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const ibTokenAdapter = IbTokenAdapter__factory.connect(_collateralPool.adpaterAddress, this.provider);
            const collateralPoolConfig = ICollateralPoolConfig__factory.connect(CollateralPoolConfigAddress, this.provider);
            const bookKeeper = BookKeeper__factory.connect(BookKeeperAddress, this.provider);
            const caller = new BatchContractCaller([
                {
                    contract: collateralPoolConfig,
                    functionName: 'collateralPools',
                    params: [formatBytes32String(_collateralPool.poolId)],
                },
                {
                    contract: ibTokenAdapter,
                    functionName: 'netAssetValuation',
                },
                {
                    contract: ibTokenAdapter,
                    functionName: 'treasuryFeeBps',
                },
                {
                    contract: bookKeeper,
                    functionName: 'totalStablecoinIssued',
                },
                {
                    contract: bookKeeper,
                    functionName: 'totalDebtCeiling',
                },
            ]);
            const [poolConfig, totalCollateralToken, treasuryFeeBps, totalStablecoinIssued, totalDebtCeiling] = yield caller.multicall(multicall, this.options.blockNumber);
            return { poolConfig, totalCollateralToken, treasuryFeeBps, totalStablecoinIssued, totalDebtCeiling };
        });
    }
}
export class CollateralPoolCalculator {
    constructor(_data, _collateralPool, _lendingPoolCalculator, _ibStakingPoolCalculator) {
        this.data = _data;
        this.collateralPool = _collateralPool;
        this.lendingPoolCalculator = _lendingPoolCalculator;
        this.ibStakingPoolCalculator = _ibStakingPoolCalculator;
    }
    get config() {
        return this.data.poolConfig;
    }
    get tvl() {
        return this.data.totalCollateralToken.mul(this.lendingPoolCalculator.ibTokenPrice).div(WeiPerWad);
    }
    get yearlyPoolMaxStabilityFeeRate() {
        const secondlyFeeRate = parseFloat(formatRay(this.data.poolConfig.stabilityFeeRate)); //**31536000
        const yearlyRate = Math.pow(secondlyFeeRate, 31536000) - 1;
        return parseFloatToBigNumber(yearlyRate);
    }
    yearlyStabilityFeeRate(debtRatio) {
        return debtRatio.mul(this.yearlyPoolMaxStabilityFeeRate).div(WeiPerWad);
    }
    yearlyStabilityFeePercent(debtRatio) {
        return this.yearlyStabilityFeeRate(debtRatio).mul(100);
    }
    dailyStabilityFeeRate(debtRatio) {
        return this.yearlyStabilityFeeRate(debtRatio).div(365);
    }
    dailyStabilityFeePercent(debtRatio) {
        return this.dailyStabilityFeeRate(debtRatio).mul(100);
    }
    get yearlyStakingRate() {
        const inverseTreasuryBps = BasisPoint.sub(this.data.treasuryFeeBps);
        return this.ibStakingPoolCalculator.yearlyRewardRate.mul(inverseTreasuryBps).div(BasisPoint);
    }
    get yearlyStakingApr() {
        return this.yearlyStakingRate.mul(100);
    }
    get dailyStakingRate() {
        return this.yearlyStakingRate.div(365);
    }
    get dailyStakingApr() {
        return this.dailyStakingRate.mul(100);
    }
    totalRate(debtRatio) {
        return this.lendingPoolCalculator.yearlyLendingRate
            .add(this.yearlyStakingRate)
            .sub(this.yearlyStabilityFeeRate(debtRatio));
    }
    totalApr(debtRatio) {
        return this.totalRate(debtRatio).mul(100);
    }
    totalApy(debtRatio) {
        return calculateSecondlyCompoundAPY(this.totalRate(debtRatio));
    }
    get totalDebtValue() {
        return this.data.poolConfig.totalDebtShare.mul(this.data.poolConfig.debtAccumulatedRate).div(WeiPerRay);
    }
    get debtAvailable() {
        const debtCeilingWad = this.data.poolConfig.debtCeiling.div(WeiPerRay);
        return debtCeilingWad.sub(this.totalDebtValue);
    }
    get maxDebtRatioRay() {
        if (this.data.poolConfig.liquidationRatio.isZero())
            return Zero;
        // ex.
        // Liquidation Ratio = 145%
        // Debt Factor = 100/145 = 68%
        return WeiPerRay.mul(WeiPerRay).div(this.data.poolConfig.liquidationRatio);
    }
    get maxDebtRatio() {
        return this.maxDebtRatioRay.div(WeiPerBln);
    }
    /**
     * Find maximum debt ratio in wad and apply safeMax buffer
     * @returns [wad]
     */
    get maxDebtRatioWithSafeMaxBuffer() {
        const safeMaxBuffer = convertBpsToWei(this.collateralPool.safeMaxBufferBps);
        return this.maxDebtRatio.sub(safeMaxBuffer);
    }
    get maxDebtPercent() {
        return this.maxDebtRatio.mul(100);
    }
    get liquidationPenaltyRate() {
        const bps = this.data.poolConfig.liquidatorIncentiveBps.sub(BasisPoint);
        return bps.mul(WeiPerWad).div(BasisPoint);
    }
    get liquidationPenaltyPercent() {
        return this.liquidationPenaltyRate.mul(100);
    }
    get minDebtPerPosition() {
        return this.data.poolConfig.debtFloor.div(WeiPerRay);
    }
    get collateralPrice() {
        return this.collateralPriceRay.div(WeiPerBln);
    }
    get collateralPriceRay() {
        return this.config.priceWithSafetyMargin.mul(this.config.liquidationRatio).div(WeiPerRay);
    }
    get mintableDebtValueCapacity() {
        const poolDebtValueCap = this.config.debtCeiling.sub(this.config.totalDebtShare.mul(this.config.debtAccumulatedRate));
        const globalDebtValueCap = this.data.totalDebtCeiling.sub(this.data.totalStablecoinIssued);
        return minBigNumber(poolDebtValueCap, globalDebtValueCap);
    }
    mintableDebtValueCapacityWithBuffer(ceilingBuffer) {
        const inverseCeilingBuffer = BasisPoint.sub(ceilingBuffer);
        return this.mintableDebtValueCapacity.mul(inverseCeilingBuffer).div(BasisPoint);
    }
    /**
     * Convert Debt share to debt value
     * @param debtShare [wad]
     * @returns [rad]
     */
    debtShareToDebtValue(debtShare) {
        return debtShare.mul(this.data.poolConfig.debtAccumulatedRate);
    }
    /**
     * Convert Debt value to debt share
     * @param debtVaule [rad]
     * @returns [wad]
     */
    debtValueToDebtShare(debtVaule) {
        if (this.data.poolConfig.debtAccumulatedRate.isZero())
            return Zero;
        return debtVaule.div(this.data.poolConfig.debtAccumulatedRate);
    }
    /**
     * @param collateralAmount [wad]
     * @returns [rad]
     */
    collateralAmountToDebtValue(collateralAmount) {
        return collateralAmount.mul(this.config.priceWithSafetyMargin);
    }
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @param ceilingBuffer [bps]
     * @returns [rad]
     */
    mintableDebtValue(collateralAmount, debtShare, ceilingBuffer) {
        const _ceilingBuffer = ceilingBuffer || Zero;
        const debtValueCap = this.mintableDebtValueCapacityWithBuffer(_ceilingBuffer).sub(this.debtShareToDebtValue(debtShare));
        const debtValue = this.collateralAmountToDebtValue(collateralAmount).sub(this.debtShareToDebtValue(debtShare));
        return minBigNumber(debtValue, debtValueCap);
    }
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @param ceilingBuffer [bps]
     * @returns [wad]
     */
    mintableStablecoin(collateralAmount, debtShare, ceilingBuffer) {
        return this.mintableDebtValue(collateralAmount, debtShare, ceilingBuffer).div(WeiPerRay);
    }
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    withdrawableCollateral(collateralAmount, debtShare) {
        if (this.config.priceWithSafetyMargin.isZero())
            return Zero;
        const debtValue = this.collateralAmountToDebtValue(collateralAmount).sub(this.debtShareToDebtValue(debtShare));
        return debtValue.div(this.config.priceWithSafetyMargin);
    }
    /**
     * Find debt ratio in ray
     * debtRatio = (totalDebtValue * WeiPerRad) / (totalLockedCollateral * currentCollateralTokenPrice) // [rad]
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [ray]
     */
    debtRatioRay(collateralAmount, debtShare) {
        if (collateralAmount.isZero())
            return Zero;
        if (this.collateralPriceRay.isZero())
            return Zero;
        const debtValue = this.debtShareToDebtValue(debtShare); // [rad]
        return debtValue.mul(WeiPerRad).div(collateralAmount).div(this.collateralPriceRay).div(WeiPerWad);
    }
    /**
     * Find debt ratio in wad
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    debtRatio(collateralAmount, debtShare) {
        return this.debtRatioRay(collateralAmount, debtShare).div(WeiPerBln);
    }
    /**
     * Find liquidation price
     * liquidationPrice = (totalDebtValue * WeiPerRad) / (totalLockedCollateral * maxDebtRatio) // [rad]
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    liquidationPrice(collateralAmount, debtShare) {
        if (collateralAmount.isZero())
            return Zero;
        if (this.maxDebtRatioRay.isZero())
            return Zero;
        const debtValue = this.debtShareToDebtValue(debtShare); // [rad]
        return debtValue.mul(WeiPerRad).div(collateralAmount).div(this.maxDebtRatioRay).div(WeiPerRay);
    }
    /**
     * Find safetyBufferRatio wad
     * safetyBufferRatio = killFactor - debtRatio
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    safetyBufferRatio(collateralAmount, debtShare) {
        return this.maxDebtRatioRay.sub(this.debtRatioRay(collateralAmount, debtShare)).div(WeiPerBln);
    }
    /**
     * Find safetyBufferPercent wad
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    safetyBufferPercent(collateralAmount, debtShare) {
        return this.safetyBufferRatio(collateralAmount, debtShare).mul(100);
    }
    isPositionSafe(collateralAmount, debtShare) {
        const debtRatio = this.debtRatio(collateralAmount, debtShare);
        return debtRatio.lt(this.maxDebtRatioWithSafeMaxBuffer);
    }
    isPositionAtRisk(collateralAmount, debtShare) {
        const debtRatio = this.debtRatio(collateralAmount, debtShare);
        return debtRatio.gte(this.maxDebtRatioWithSafeMaxBuffer);
    }
    isPositionLiquidatable(collateralAmount, debtShare) {
        const debtRatio = this.debtRatio(collateralAmount, debtShare);
        return debtRatio.gte(this.maxDebtRatio);
    }
}
