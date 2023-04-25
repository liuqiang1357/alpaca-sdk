import { IMerkleDistributorInfo } from '../constants/merkle';
import { BigNumber, ContractTransaction } from 'ethers';
export interface IFarmReward {
    key: string;
    name: string;
    icon: string;
    rewardUnit: string;
    poolId: number;
    getPriceInUSD: () => Promise<BigNumber>;
}
export interface IFeaturedFarmReward extends IFarmReward {
    merkleAddress: string;
    merkleDistributorInfo: IMerkleDistributorInfo;
}
export interface FarmRewardData {
    rewardAmount: BigNumber;
    rewardPool: IFarmReward;
    claim: () => Promise<ContractTransaction>;
    claimable: boolean;
    hasClaimed?: boolean;
}
export interface FarmPendingRewardData {
    pendingRewardAmount: BigNumber;
    recalculating: boolean;
    rewardEnded: boolean;
}
export interface IGraphReward {
    id: string;
    accReward: string;
    latestRewardMultiplier: string;
    share: string;
    latestBlockTime: string;
}
export interface IGraphPoolInfo {
    id: string;
    startBlockTime: string;
    endBlockTime: string;
    rewardPerSec: string;
    totalAccReward: string;
    totalShare: string;
    multiplier: string;
    latestBlockTime: string;
}
export interface IGraphRewardData {
    lenderReward: IGraphReward;
    lenderPoolInfo: IGraphPoolInfo;
    borrowerReward: IGraphReward;
    borrowerPoolInfo: IGraphPoolInfo;
}
export interface IGraphRewardQuery {
    rewardId: string;
    lenderPoolInfoId: string;
    borrowerPoolInfoId: string;
}
