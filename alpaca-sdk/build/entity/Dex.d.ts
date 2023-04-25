import { BigNumber, ContractInterface } from 'ethers';
export declare enum DexKey {
    PancakeSwap = "pcs",
    PancakeSwapV1 = "pcs-v1",
    WaultSwap = "ws",
    MdexSwap = "ms"
}
export declare type IDexKey = DexKey.PancakeSwap | DexKey.WaultSwap | DexKey.MdexSwap | DexKey.PancakeSwapV1;
export interface Dex {
    key: DexKey;
    name: string;
    slug: string;
    altName1: string;
    exchangeConfigKey: string;
    fee: number;
    feeToLPHolder: number;
    feeToTreasury?: number;
    feeToBurn?: number;
    masterChefAddress: string;
    masterChefAbi: ContractInterface;
    routerDeployedDate: Date;
    rewardTokenAddress: string;
    iconUrl: string;
    factory: string;
    getRewardTokenPrice: () => Promise<BigNumber>;
    isActive: boolean;
}
export declare const PancakeSwapDex: Dex;
export declare const PancakeSwapDexV1: Dex;
export declare const WaultSwapDex: Dex;
export declare const MdexSwapDex: Dex;
export declare const Dexes: Array<Dex>;
export declare const activeDexes: Dex[];
export declare const getDexByKey: (dex: string) => Dex;
