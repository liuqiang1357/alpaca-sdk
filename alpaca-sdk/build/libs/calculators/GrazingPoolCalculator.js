var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BigNumber } from '@ethersproject/bignumber';
import { Multicall__factory, ILiquidityMiningMaster__factory, StakingPools__factory, GrazingRange__factory, ERC20__factory, } from '@alpaca-finance/alpaca-contract/typechain';
import { MasterBarista__factory } from '@latteswap/latteswap-contract/compiled-typechain/factories/MasterBarista__factory';
import { calculateDailyCompoundAPY, calculateRewardValuePerYear } from '../../utils/calculation';
import { MaxUint256, One, WeiPerEther, Zero } from '@ethersproject/constants';
import { BatchContractCaller } from '../batchContractCaller';
import { GrazingRangeAddress, LatteSwapMasterBaristaAddress, MarsEcosystemLiquidityMiningMasterAddress, MulticallAddress, ScientixStakingPoolsAddress, } from '../../constants/contracts';
import { GrazingRangeType } from '../../entity';
import { maxBigNumber, minBigNumber } from '../../utils/math';
import { getTokenPrice } from '../getPrice';
import range from 'lodash.range';
import { isMainnet } from '../../utils/view';
import { convertToEther } from '../../utils/format';
export class GrazingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => __awaiter(this, void 0, void 0, function* () {
                switch (_grazePool.type) {
                    case GrazingRangeType.AlpacaGrazinRange: {
                        return (yield new AlpacaGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case GrazingRangeType.ScientixStakingPools: {
                        return (yield new ScientixGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case GrazingRangeType.LatteSwapMasterBarista: {
                        return (yield new LatteGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case GrazingRangeType.MarsEcosystemLiquidityMiningMaster: {
                        return (yield new MarsEcosystemGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    default:
                        throw new Error('GrazingPoolCalculator::calculate: unsupported grazing pool type');
                }
            })));
        });
    }
}
export class AlpacaGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazingPool) => this._create(_grazingPool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, totalReward, rewardPerBlock }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(BigNumber.from(_grazePool.campaignId)),
                getTokenPrice(_grazePool.stakingToken, this.provider),
                getTokenPrice(_grazePool.rewardToken, this.provider),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(WeiPerEther);
            const tokenDecimal = BigNumber.from(_grazePool.rewardToken.decimal);
            const rewardPerBlockEther = convertToEther(rewardPerBlock, tokenDecimal);
            const poolRewardValuePerBlock = rewardPerBlockEther.mul(rewardTokenPrice).div(WeiPerEther);
            // using this to return when totalReward is needed (support arbitrary token decimal)
            const totalRewardEther = convertToEther(totalReward, tokenDecimal);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock: rewardPerBlockEther,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(campaignId, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const grazingRange = GrazingRange__factory.connect(GrazingRangeAddress, this.provider);
            // get data
            const [{ startBlock, totalStaked }, rewardPerBlock, phaseCount] = yield new BatchContractCaller([
                {
                    contract: grazingRange,
                    functionName: 'campaignInfo',
                    params: [campaignId],
                },
                {
                    contract: grazingRange,
                    functionName: 'currentRewardPerBlock',
                    params: [campaignId],
                },
                {
                    contract: grazingRange,
                    functionName: 'rewardInfoLen',
                    params: [campaignId],
                },
            ]).multicall(multicall, blockNumber);
            // get an array of each phases data
            const campaignInfos = yield new BatchContractCaller(range(phaseCount.toNumber()).map((n) => ({
                contract: grazingRange,
                functionName: 'campaignRewardInfo',
                params: [campaignId, n],
            }))).multicall(multicall, blockNumber);
            // calculate total reward
            let startingBlock = startBlock;
            const totalReward = campaignInfos.reduce((acc, cur) => {
                const range = cur.endBlock.sub(startingBlock);
                startingBlock = cur.endBlock;
                return acc.add(cur.rewardPerBlock.mul(range));
            }, Zero);
            // calculate end block
            const endBlock = campaignInfos[phaseCount.toNumber() - 1].endBlock;
            return {
                startBlock,
                endBlock,
                totalStakingToken: totalStaked,
                totalReward,
                rewardPerBlock,
            };
        });
    }
}
export class ScientixGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => __awaiter(this, void 0, void 0, function* () { return this._create(_grazePool); })));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, totalStakingToken }, stakingTokenPrice, rewardTokenPrice, currentBlock] = yield Promise.all([
                this.getData(BigNumber.from(_grazePool.campaignId)),
                getTokenPrice(_grazePool.stakingToken, this.provider),
                getTokenPrice(_grazePool.rewardToken, this.provider).catch((e) => {
                    if (isMainnet())
                        throw e;
                    return Zero;
                }),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(WeiPerEther);
            const rewardPerBlock = yield this.getRewardPerBlock(_grazePool.campaignId, BigNumber.from(currentBlock));
            const poolRewardValuePerBlock = rewardPerBlock.mul(rewardTokenPrice).div(WeiPerEther);
            // The rwards never end
            const endBlock = MaxUint256;
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(campaignId, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const scientix = StakingPools__factory.connect(ScientixStakingPoolsAddress, this.provider);
            // get data
            const [startBlock, totalStakingToken] = yield new BatchContractCaller([
                {
                    contract: scientix,
                    functionName: 'startBlock',
                },
                {
                    contract: scientix,
                    functionName: 'getPoolTotalDeposited',
                    params: [campaignId],
                },
            ]).multicall(multicall, blockNumber);
            return {
                startBlock,
                totalStakingToken,
            };
        });
    }
    getRewardPerBlock(poolId, currentBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const [from, to] = [currentBlock, currentBlock.add(1)];
            return this.getBlockReward(BigNumber.from(poolId), from, to);
        });
    }
    /**
     * Copied from https://github.com/ScientixFinance/scientix-contract/blob/513729b77d383a0e9e7f3e3f8a02f4068c0d1cae/contracts/libraries/pools/Pool.sol#L82
     */
    getBlockReward(poolId, fromBlock, toBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const scientix = StakingPools__factory.connect(ScientixStakingPoolsAddress, this.provider);
            // get data
            const [rewardWeight, startBlock, blocksPerEpoch, totalReducedEpochs, rewardRate, reducedRewardRatePerEpoch, totalRewardWeight,] = yield new BatchContractCaller([
                {
                    contract: scientix,
                    functionName: 'getPoolRewardWeight',
                    params: [poolId],
                },
                {
                    contract: scientix,
                    functionName: 'startBlock',
                },
                {
                    contract: scientix,
                    functionName: 'blocksPerEpoch',
                },
                {
                    contract: scientix,
                    functionName: 'totalReducedEpochs',
                },
                {
                    contract: scientix,
                    functionName: 'rewardRate',
                },
                {
                    contract: scientix,
                    functionName: 'reducedRewardRatePerEpoch',
                },
                {
                    contract: scientix,
                    functionName: 'totalRewardWeight',
                },
            ]).multicall(multicall);
            const lastReductionBlock = startBlock.mul(blocksPerEpoch).mul(totalReducedEpochs);
            if (fromBlock.gte(lastReductionBlock)) {
                return rewardRate
                    .sub(reducedRewardRatePerEpoch.mul(totalReducedEpochs))
                    .mul(rewardWeight)
                    .div(totalRewardWeight)
                    .mul(toBlock.sub(fromBlock));
            }
            let totalRewards = Zero;
            if (toBlock.gt(lastReductionBlock)) {
                totalRewards = rewardRate
                    .sub(reducedRewardRatePerEpoch.mul(totalReducedEpochs))
                    .mul(rewardWeight)
                    .div(totalRewardWeight)
                    .mul(toBlock.sub(lastReductionBlock));
                toBlock = lastReductionBlock;
            }
            /**
             * Decalre function here to make a simple access to data that has already been fetched
             * Copied from https://github.com/ScientixFinance/scientix-contract/blob/513729b77d383a0e9e7f3e3f8a02f4068c0d1cae/contracts/libraries/pools/Pool.sol#L102
             */
            function getReduceBlockReward() {
                fromBlock = maxBigNumber(startBlock, fromBlock);
                if (fromBlock.gte(toBlock)) {
                    return Zero;
                }
                let epochBegin = startBlock.add(blocksPerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let epochEnd = epochBegin.add(blocksPerEpoch);
                let rewardPerBlock = rewardRate.sub(reducedRewardRatePerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let totalRewards = Zero;
                while (toBlock > epochBegin) {
                    const left = maxBigNumber(epochBegin, fromBlock);
                    const right = minBigNumber(epochEnd, toBlock);
                    if (right.gt(left)) {
                        const reward = rewardPerBlock.mul(rewardWeight).div(totalRewardWeight).mul(right.sub(left));
                        totalRewards = totalRewards.add(reward);
                    }
                    rewardPerBlock = rewardPerBlock.sub(reducedRewardRatePerEpoch);
                    epochBegin = epochEnd;
                    epochEnd = epochBegin.add(blocksPerEpoch);
                }
                return totalRewards;
            }
            const reducedBlockReward = getReduceBlockReward();
            return totalRewards.add(reducedBlockReward);
        });
    }
}
export class LatteGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => this._create(_grazePool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, allocPoint, totalAllocPoint, rewardPerBlock, bonusMultiplier, bonusEndBlock, }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(_grazePool),
                getTokenPrice(_grazePool.stakingToken, this.provider),
                getTokenPrice(_grazePool.rewardToken, this.provider),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(WeiPerEther);
            const isBonusPeriod = bonusEndBlock.gte(currentBlock);
            const multiplier = isBonusPeriod ? bonusMultiplier : One;
            const poolRewardValuePerBlock = rewardPerBlock
                .mul(multiplier)
                .mul(rewardTokenPrice)
                .mul(allocPoint)
                .div(totalAllocPoint)
                .div(WeiPerEther);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(_grazingPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const masterBarista = MasterBarista__factory.connect(LatteSwapMasterBaristaAddress, this.provider);
            const stakingToken = ERC20__factory.connect(_grazingPool.stakingToken.address, this.provider);
            const [
            // Time related variables
            startBlock, 
            // Staking token parameters
            totalStakingToken, 
            // Pool parameters
            { allocPoint }, totalAllocPoint, rewardPerBlock, bonusMultiplier, bonusEndBlock,] = yield new BatchContractCaller([
                // Time related variables
                {
                    contract: masterBarista,
                    functionName: 'startBlock',
                },
                // Staking token parameters
                {
                    contract: stakingToken,
                    functionName: 'balanceOf',
                    params: [masterBarista.address],
                },
                // Pool parameters
                {
                    contract: masterBarista,
                    functionName: 'poolInfo',
                    params: [stakingToken.address],
                },
                {
                    contract: masterBarista,
                    functionName: 'totalAllocPoint',
                },
                {
                    contract: masterBarista,
                    functionName: 'lattePerBlock',
                },
                {
                    contract: masterBarista,
                    functionName: 'bonusMultiplier',
                },
                {
                    contract: masterBarista,
                    functionName: 'bonusEndBlock',
                },
            ]).multicall(multicall);
            return {
                startBlock,
                endBlock: BigNumber.from(11932888),
                totalStakingToken,
                allocPoint,
                totalAllocPoint,
                rewardPerBlock,
                bonusMultiplier,
                bonusEndBlock,
            };
        });
    }
}
export class MarsEcosystemGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => this._create(_grazePool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, allocPoint, totalAllocPoint, rewardPerBlock, bonusMultiplier }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(_grazePool),
                getTokenPrice(_grazePool.stakingToken, this.provider),
                getTokenPrice(_grazePool.rewardToken, this.provider).catch((e) => {
                    if (isMainnet())
                        throw e;
                    return Zero;
                }),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(WeiPerEther);
            const poolRewardValuePerBlock = rewardPerBlock
                .mul(rewardTokenPrice)
                .mul(allocPoint)
                .div(totalAllocPoint)
                .div(WeiPerEther);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(_grazingPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const liquidityMiningMaster = ILiquidityMiningMaster__factory.connect(MarsEcosystemLiquidityMiningMasterAddress, this.provider);
            const stakingToken = ERC20__factory.connect(_grazingPool.stakingToken.address, this.provider);
            const [
            // Staking token parameters
            totalStakingToken, 
            // Pool parameters
            { allocPoint }, totalAllocPoint, rewardPerBlock, bonusMultiplier,] = yield new BatchContractCaller([
                // Staking token parameters
                {
                    contract: stakingToken,
                    functionName: 'balanceOf',
                    params: [liquidityMiningMaster.address],
                },
                // Pool parameters
                {
                    contract: liquidityMiningMaster,
                    functionName: 'poolInfo',
                    params: [_grazingPool.campaignId],
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'totalAllocPoint',
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'xmsPerBlock',
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'BONUS_MULTIPLIER',
                },
            ]).multicall(multicall);
            return {
                // 12561000
                startBlock: BigNumber.from(12561000),
                endBlock: BigNumber.from(13426700),
                totalStakingToken,
                allocPoint,
                totalAllocPoint,
                rewardPerBlock,
                bonusMultiplier,
            };
        });
    }
}
export class GrazingPoolCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get grazePool() {
        return this.data.grazePool;
    }
    get rewardPerBlock() {
        return this.data.rewardPerBlock;
    }
    get totalStakingToken() {
        return this.data.totalStakingToken;
    }
    get tvl() {
        return this.data.tvl;
    }
    get startBlock() {
        return this.data.startBlock;
    }
    get endBlock() {
        return this.data.endBlock;
    }
    get currentBlock() {
        return this.data.currentBlock;
    }
    get hasStarted() {
        return this.startBlock.lte(this.currentBlock);
    }
    get hasEnded() {
        return this.endBlock.lte(this.currentBlock);
    }
    get isInCampaignPeriod() {
        return this.hasStarted && !this.hasEnded;
    }
    get rewardValuePerBlock() {
        return this.isInCampaignPeriod ? this.data.poolRewardValuePerBlock : Zero;
    }
    get rewardValuePerYear() {
        return calculateRewardValuePerYear(this.data.poolRewardValuePerBlock);
    }
    get rewardValuePerDay() {
        return this.rewardValuePerYear.div(365);
    }
    get yearlyRewardRate() {
        if (this.tvl.isZero())
            return Zero;
        return this.rewardValuePerYear.mul(WeiPerEther).div(this.tvl);
    }
    get yearlyRewardApr() {
        return this.yearlyRewardRate.mul(100);
    }
    get dailyRewardRate() {
        return this.yearlyRewardRate.div(365);
    }
    get dailyRewardApr() {
        return this.dailyRewardRate.mul(100);
    }
    get apy() {
        return calculateDailyCompoundAPY(this.rewardValuePerBlock, this.tvl);
    }
}
