import { BigNumber } from 'ethers';
import { DateTime } from 'luxon';
import { ITokenProfile } from '.';
export declare enum GrazingRangeType {
    AlpacaGrazinRange = 0,
    ScientixStakingPools = 1,
    LatteSwapMasterBarista = 2,
    MarsEcosystemLiquidityMiningMaster = 3
}
export declare type GrazingRangePool = {
    name: string;
    rewardToken: ITokenProfile;
    stakingToken: ITokenProfile;
    projectSiteUrl: string;
    campaignId: number;
    type: GrazingRangeType;
    claimNFTUrl: string;
};
export interface GrazingRangeDataRow extends GrazingRangePool {
    startDate: DateTime;
    endDate: DateTime;
    isStart: boolean;
    isCompleted: boolean;
    totalSupply: BigNumber;
    rewardPerBlock: BigNumber;
    approveNeeded?: boolean;
    userBalance?: BigNumber;
    stakedBalance?: BigNumber;
    underlyingStakedBalance?: BigNumber;
    pendingReward?: BigNumber;
    startBlock: BigNumber;
    endBlock: BigNumber;
    apy: BigNumber;
    yearlyApr: BigNumber;
    shareOfPool: BigNumber;
    tvl: BigNumber;
}
export declare type UserToken = {
    userToken: BigNumber;
    userLockedToken: BigNumber;
    userClaimableToken: BigNumber;
};
