import { BigNumber } from 'ethers';
import { RestrictedKeyRecord } from '../utils/record';
import { FarmingPoolConfig, IFarmingConfig, IDexKey, TokenSymbol, ITokenProfile } from '.';
export interface IOptimalTokensValue {
    optimalBaseTokenAmount: BigNumber;
    optimalFarmingTokenAmount: BigNumber;
    swapAmount: BigNumber;
    isReversed: boolean;
    quoteSwapAmount: BigNumber;
}
export interface IPrepareLPMintedRes {
    lpMinted: string;
    priceImpact: string;
}
export interface IPrepareSingleAssetConversionValueRes {
    singleAssetConversion: string;
    priceImpact: string;
}
export declare type IPrepareConversionRes = IPrepareSingleAssetConversionValueRes | IPrepareLPMintedRes;
export interface IBasePrepareConversionReq {
    pool: FarmingPoolConfig;
    lpPairAddresses: Array<string>;
    baseTokenAddress: string;
    farmingTokenAddress: string;
    chainId: number;
    baseTokenDecimal: number;
    farmingTokenDecimal: number;
    collateralValue: string;
}
export interface IPrepareLPConversionReq extends IBasePrepareConversionReq {
    optimalBaseTokenAmount: string;
    optimalFarmingTokenAmount: string;
    swapAmount: string;
    isReversed: boolean;
    quoteSwapAmount: string;
}
export interface IPrepareSingleAssetConversionReq extends IBasePrepareConversionReq {
    farmingConfig: IFarmingConfig;
    baseTokenAmount: string;
    loanAmount: string;
}
export declare type IPrepareConversionReq = IPrepareLPConversionReq | IPrepareSingleAssetConversionReq;
export interface PairInfo {
    reserve0: BigNumber;
    reserve1: BigNumber;
    totalSupply: BigNumber;
    token0: ITokenProfile;
    token1: ITokenProfile;
}
export interface LPUnderlyingPerShare {
    baseTokenAmount: BigNumber;
    farmingTokenAmount: BigNumber;
}
export declare type IBaseLpKey = TokenSymbol.BTCB | TokenSymbol.WBNB | TokenSymbol.BUSD | TokenSymbol.USDT | TokenSymbol.ETH | TokenSymbol.ALPACA | TokenSymbol.TUSD | TokenSymbol.USDC;
export declare type IFarmingPoolLPPair = RestrictedKeyRecord<IDexKey, RestrictedKeyRecord<IBaseLpKey, Record<string, string>>>;
