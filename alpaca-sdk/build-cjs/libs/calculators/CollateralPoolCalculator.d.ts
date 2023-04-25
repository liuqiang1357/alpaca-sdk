import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { CollateralPool } from '../../entity/CollateralPool';
import { CalculatorFactoryOptions } from './CalculatorFactoryOptions';
import { LendingPoolCalculator } from './LendingPoolCalculator';
import { StakingPoolCalculator } from './StakingPoolCalculator';
interface PoolConfig {
    totalDebtShare: BigNumber;
    debtAccumulatedRate: BigNumber;
    priceWithSafetyMargin: BigNumber;
    debtCeiling: BigNumber;
    debtFloor: BigNumber;
    priceFeed: string;
    liquidationRatio: BigNumber;
    stabilityFeeRate: BigNumber;
    lastAccumulationTime: BigNumber;
    adapter: string;
    closeFactorBps: BigNumber;
    liquidatorIncentiveBps: BigNumber;
    treasuryFeesBps: BigNumber;
    strategy: string;
}
export declare class CollateralPoolCalculatorFactory {
    private provider;
    private options;
    private lendingPoolCalculators?;
    private ibStakingPoolCalculators?;
    constructor(_provider: Provider, _options?: CalculatorFactoryOptions);
    setLendingPoolCalculators(_lendingPoolCalculators: LendingPoolCalculator[]): CollateralPoolCalculatorFactory;
    setIbStakingPoolCalculators(_ibStakingPoolCalculators: StakingPoolCalculator[]): CollateralPoolCalculatorFactory;
    create(..._collateralPools: CollateralPool[]): Promise<CollateralPoolCalculator[]>;
    createWithInjectedCalculators(_collateralPools: CollateralPool[], _lendingPoolCalculators: LendingPoolCalculator[], _ibStakingPoolCalculators: StakingPoolCalculator[]): Promise<CollateralPoolCalculator[]>;
    createOne(_collateralPool: CollateralPool, _lendingPoolCalculator: LendingPoolCalculator, _ibStakingPoolCalculator: StakingPoolCalculator): Promise<CollateralPoolCalculator>;
    private getData;
}
interface IData {
    poolConfig: PoolConfig;
    totalCollateralToken: BigNumber;
    treasuryFeeBps: BigNumber;
    totalStablecoinIssued: BigNumber;
    totalDebtCeiling: BigNumber;
}
export declare class CollateralPoolCalculator {
    private data;
    collateralPool: CollateralPool;
    lendingPoolCalculator: LendingPoolCalculator;
    ibStakingPoolCalculator: StakingPoolCalculator;
    constructor(_data: IData, _collateralPool: CollateralPool, _lendingPoolCalculator: LendingPoolCalculator, _ibStakingPoolCalculator: StakingPoolCalculator);
    get config(): PoolConfig;
    get tvl(): BigNumber;
    get yearlyPoolMaxStabilityFeeRate(): BigNumber;
    yearlyStabilityFeeRate(debtRatio: BigNumber): BigNumber;
    yearlyStabilityFeePercent(debtRatio: BigNumber): BigNumber;
    dailyStabilityFeeRate(debtRatio: BigNumber): BigNumber;
    dailyStabilityFeePercent(debtRatio: BigNumber): BigNumber;
    get yearlyStakingRate(): BigNumber;
    get yearlyStakingApr(): BigNumber;
    get dailyStakingRate(): BigNumber;
    get dailyStakingApr(): BigNumber;
    totalRate(debtRatio: BigNumber): BigNumber;
    totalApr(debtRatio: BigNumber): BigNumber;
    totalApy(debtRatio: BigNumber): BigNumber;
    get totalDebtValue(): BigNumber;
    get debtAvailable(): BigNumber;
    get maxDebtRatioRay(): BigNumber;
    get maxDebtRatio(): BigNumber;
    /**
     * Find maximum debt ratio in wad and apply safeMax buffer
     * @returns [wad]
     */
    get maxDebtRatioWithSafeMaxBuffer(): BigNumber;
    get maxDebtPercent(): BigNumber;
    get liquidationPenaltyRate(): BigNumber;
    get liquidationPenaltyPercent(): BigNumber;
    get minDebtPerPosition(): BigNumber;
    get collateralPrice(): BigNumber;
    get collateralPriceRay(): BigNumber;
    get mintableDebtValueCapacity(): BigNumber;
    mintableDebtValueCapacityWithBuffer(ceilingBuffer: BigNumber): BigNumber;
    /**
     * Convert Debt share to debt value
     * @param debtShare [wad]
     * @returns [rad]
     */
    debtShareToDebtValue(debtShare: BigNumber): BigNumber;
    /**
     * Convert Debt value to debt share
     * @param debtVaule [rad]
     * @returns [wad]
     */
    debtValueToDebtShare(debtVaule: BigNumber): BigNumber;
    /**
     * @param collateralAmount [wad]
     * @returns [rad]
     */
    collateralAmountToDebtValue(collateralAmount: BigNumber): BigNumber;
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @param ceilingBuffer [bps]
     * @returns [rad]
     */
    mintableDebtValue(collateralAmount: BigNumber, debtShare: BigNumber, ceilingBuffer?: BigNumber): BigNumber;
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @param ceilingBuffer [bps]
     * @returns [wad]
     */
    mintableStablecoin(collateralAmount: BigNumber, debtShare: BigNumber, ceilingBuffer?: BigNumber): BigNumber;
    /**
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    withdrawableCollateral(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    /**
     * Find debt ratio in ray
     * debtRatio = (totalDebtValue * WeiPerRad) / (totalLockedCollateral * currentCollateralTokenPrice) // [rad]
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [ray]
     */
    debtRatioRay(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    /**
     * Find debt ratio in wad
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    debtRatio(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    /**
     * Find liquidation price
     * liquidationPrice = (totalDebtValue * WeiPerRad) / (totalLockedCollateral * maxDebtRatio) // [rad]
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    liquidationPrice(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    /**
     * Find safetyBufferRatio wad
     * safetyBufferRatio = killFactor - debtRatio
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    safetyBufferRatio(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    /**
     * Find safetyBufferPercent wad
     * @param collateralAmount [wad]
     * @param debtShare [wad]
     * @returns [wad]
     */
    safetyBufferPercent(collateralAmount: BigNumber, debtShare: BigNumber): BigNumber;
    isPositionSafe(collateralAmount: BigNumber, debtShare: BigNumber): boolean;
    isPositionAtRisk(collateralAmount: BigNumber, debtShare: BigNumber): boolean;
    isPositionLiquidatable(collateralAmount: BigNumber, debtShare: BigNumber): boolean;
}
export {};
