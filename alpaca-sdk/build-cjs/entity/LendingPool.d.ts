import { BigNumber } from '@ethersproject/bignumber';
import { DepositPool, GrazingRangeDataRow, StakePool } from '.';
export declare type LendingPool = {
    tokenName: string;
    tokenUnit: string;
    tokenIconUrl: string;
    tokenAddress: string;
    isTokenNative: boolean;
    isNew: boolean;
    ibName: string;
    ibUnit: string;
    ibVaultAddress: string;
    ibIconUrl: string;
    associatedStakingPool: StakePool;
    getPriceInUSD: () => Promise<BigNumber>;
};
export interface LendingPoolDataRow extends LendingPool {
    key: string;
    lendingApr?: BigNumber;
    stakingApr?: BigNumber;
    maxStakingAprGR?: GrazingRangeDataRow;
    protocolApr?: BigNumber;
    totalApr?: BigNumber;
    lendingApy?: BigNumber;
    stakingApy?: BigNumber;
    totalApy?: BigNumber;
    totalSupply: BigNumber;
    totalBorrow: BigNumber;
    utilization: BigNumber;
    ibTokenPerBaseToken: BigNumber;
    userTokenBalance?: BigNumber;
    userIbBalance?: BigNumber;
}
export interface LendingPoolInfo {
    tvl: BigNumber;
    pool?: DepositPool;
}
export declare type TotalPoolInfo = {
    supplyBalance: BigNumber;
    poolInfos: LendingPoolInfo[];
};
export declare type EarnDepositPageData = {
    userTokenBalance: BigNumber;
    approveNeeded: boolean;
    convertTokenAmountToIbAmount: (input: BigNumber) => BigNumber;
};
export declare type EarnWithdrawPageData = {
    userIbBalance: BigNumber;
    approveNeeded: boolean;
    floating: BigNumber;
    utilization: BigNumber;
    nonUtilization: BigNumber;
    poolSize: BigNumber;
    convertIbAmountToTokenAmount: (input: BigNumber) => BigNumber;
};
