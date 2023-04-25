export declare type IStakingApr = {
    sourceName: string;
    apr: string;
    stakingTokenSymbol: string;
    rewardTokenSymbol: string;
    stakingContract: string;
};
export declare type ILendingPool = {
    sourceName: string;
    symbol: string;
    baseTokenPerIbToken: string;
    lendingApr: string;
    stakingAprs: Array<IStakingApr>;
    protocolApr: string;
    totalApr: string;
    totalApy: string;
    totalSupply: string;
    totalBorrowed: string;
};
export declare type IBorrowingInterest = {
    sourceName: string;
    symbol: string;
    interestPercent: string;
    interestPercentAt2XLeverage: string;
};
export declare type IFarmingPool = {
    sourceName: string;
    tvl: number;
    farmRewardApr: string;
    tvlInMasterChef: string;
    farmRewardValuePerYear: string;
    alpacaRewardApr: string;
    tradingFeeApr: string;
    borrowingInterests: Array<IBorrowingInterest>;
    openPositionUrl: string;
};
export declare type IOverall = {
    tvl: string;
};
export declare type ISummary = {
    lendingPools: Array<ILendingPool>;
    farmingPools: Array<IFarmingPool>;
    overall: IOverall;
};
