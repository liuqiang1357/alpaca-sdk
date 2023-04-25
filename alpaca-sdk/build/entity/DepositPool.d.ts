import { BigNumber } from 'ethers';
import { Dex } from '.';
export declare type DepositPool = {
    key: string;
    active: boolean;
    isLp?: boolean;
    isIb?: boolean;
    isSingleTokenDeriveValueFromLP?: boolean;
    isFarmingLp?: boolean;
    isFarmingSingleAssetOptions?: boolean;
    stakingTokenAddress: string;
    holderAddress: string;
    lpOptions?: LpOptions;
    ibOptions?: IbOptions;
    singleTokenDeriveValueFromLPOptions?: SingleTokenDeriveValueFromLPOptions;
    farmingLpOptions?: FarmingLpOptions;
    farmingSingleAssetOptions?: FarmingSingleAssetOptions;
};
export interface LpOptions {
    lpTokenAddress: string;
    baseTokenAddress: string;
    getBaseTokenPrice: () => Promise<BigNumber>;
}
export interface IbOptions {
    ibTokenAddress: string;
    getUnderlyingTokenPrice: () => Promise<BigNumber>;
}
export interface SingleTokenDeriveValueFromLPOptions {
    derivingLpAddress: string;
    derivingLpBaseTokenAddress: string;
    getDerivingLpBaseTokenPrice: () => Promise<BigNumber>;
}
export interface FarmingLpOptions {
    pancakeLpPoolId: number;
    dex: Dex;
    lpTokenAddress: string;
    baseTokenAddress: string;
    getBaseTokenPrice: () => Promise<BigNumber>;
}
export interface FarmingSingleAssetOptions {
    dex: Dex;
    poolId: number;
    getStakingTokenPrice: () => Promise<BigNumber>;
}
