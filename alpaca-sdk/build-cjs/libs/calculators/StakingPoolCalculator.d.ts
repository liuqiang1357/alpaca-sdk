import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { IStakePoolV2 } from '../../entity';
export declare class StakingPoolCalculatorFactory {
    private provider;
    constructor(_provider: Provider);
    create(..._stakePools: IStakePoolV2[]): Promise<StakingPoolCalculator[]>;
    private getOverallData;
    private getPoolData;
}
interface IData {
    stakePool: IStakePoolV2;
    totalStakingToken: BigNumber;
    tvl: BigNumber;
    poolRewardValuePerBlock: BigNumber;
    startBlock: BigNumber;
    currentBlock: BigNumber;
}
export declare class StakingPoolCalculator {
    private data;
    constructor(_data: IData);
    get stakePool(): IStakePoolV2;
    get tvl(): BigNumber;
    get hasStarted(): boolean;
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
