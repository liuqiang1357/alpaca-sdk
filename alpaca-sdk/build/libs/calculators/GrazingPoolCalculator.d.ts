import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { GrazingRangePool } from '../../entity';
interface IGrazingPoolCalculator {
    create: (..._grazePools: GrazingRangePool[]) => Promise<GrazingPoolCalculator[]>;
}
export declare class GrazingPoolCalculatorFactory implements IGrazingPoolCalculator {
    private provider;
    constructor(_provider: Provider);
    create(..._grazePools: GrazingRangePool[]): Promise<GrazingPoolCalculator[]>;
}
export declare class AlpacaGrazingRangeCalculatorFactory implements IGrazingPoolCalculator {
    private provider;
    constructor(_provider: Provider);
    create(..._grazePools: GrazingRangePool[]): Promise<GrazingPoolCalculator[]>;
    private _create;
    private currentBlock;
    private getData;
}
export declare class ScientixGrazingRangeCalculatorFactory implements IGrazingPoolCalculator {
    private provider;
    constructor(_provider: Provider);
    create(..._grazePools: GrazingRangePool[]): Promise<GrazingPoolCalculator[]>;
    private _create;
    private currentBlock;
    private getData;
    private getRewardPerBlock;
    /**
     * Copied from https://github.com/ScientixFinance/scientix-contract/blob/513729b77d383a0e9e7f3e3f8a02f4068c0d1cae/contracts/libraries/pools/Pool.sol#L82
     */
    private getBlockReward;
}
export declare class LatteGrazingRangeCalculatorFactory implements IGrazingPoolCalculator {
    private provider;
    constructor(_provider: Provider);
    create(..._grazePools: GrazingRangePool[]): Promise<GrazingPoolCalculator[]>;
    private _create;
    private currentBlock;
    private getData;
}
export declare class MarsEcosystemGrazingRangeCalculatorFactory implements IGrazingPoolCalculator {
    private provider;
    constructor(_provider: Provider);
    create(..._grazePools: GrazingRangePool[]): Promise<GrazingPoolCalculator[]>;
    private _create;
    private currentBlock;
    private getData;
}
interface IData {
    grazePool: GrazingRangePool;
    rewardPerBlock: BigNumber;
    totalStakingToken: BigNumber;
    tvl: BigNumber;
    poolRewardValuePerBlock: BigNumber;
    startBlock: BigNumber;
    endBlock: BigNumber;
    currentBlock: BigNumber;
}
export declare class GrazingPoolCalculator {
    private data;
    constructor(_data: IData);
    get grazePool(): GrazingRangePool;
    get rewardPerBlock(): BigNumber;
    get totalStakingToken(): BigNumber;
    get tvl(): BigNumber;
    get startBlock(): BigNumber;
    get endBlock(): BigNumber;
    get currentBlock(): BigNumber;
    get hasStarted(): boolean;
    get hasEnded(): boolean;
    get isInCampaignPeriod(): boolean;
    get rewardValuePerBlock(): BigNumber;
    get rewardValuePerYear(): BigNumber;
    get rewardValuePerDay(): BigNumber;
    get yearlyRewardRate(): BigNumber;
    get yearlyRewardApr(): BigNumber;
    get dailyRewardRate(): BigNumber;
    get dailyRewardApr(): BigNumber;
    get apy(): BigNumber;
}
export {};
