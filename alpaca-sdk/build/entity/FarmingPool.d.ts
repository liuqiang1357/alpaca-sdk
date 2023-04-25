import { BigNumber } from 'ethers';
import { IWorker, ITokenProfile, IVault, Dex, ILPRoute } from '.';
import { ValueObject } from '../shared/domain';
import { Maybe } from '../utils/maybe';
import { IFarmACL } from '../constants/appConfig';
/**
 * Configuration-based farming pool (use in a constants as a config)
 * */
export interface IBaseFarmingPoolConfig extends IFarmACL {
    key: string;
    dex: Dex;
    pId: number;
    isWarn: boolean;
    isNew: boolean;
    killBufferThreshold: KillBufferThreshold;
    tags: string[];
    isFeatured: boolean;
    featurePool?: IFeatureFarmingPool;
    configs: Array<IFarmingConfig>;
}
export interface ILPFarmingPoolConfig extends IBaseFarmingPoolConfig {
    lpRoute: ILPRoute;
}
export interface ISingleAssetFarmingPoolConfig extends IBaseFarmingPoolConfig {
    singleAssetAddress: string;
    singleAssetPoolName: string;
}
export declare type IFarmingPoolConfig = ILPFarmingPoolConfig | ISingleAssetFarmingPoolConfig;
export declare type IFarmingPoolConfigs = Array<IFarmingPoolConfig>;
export declare enum FarmingAssetType {
    SingleAsset = "SINGLE_ASSET",
    LPAsset = "LP_ASSET"
}
export declare class FarmingPoolConfig extends ValueObject<IFarmingPoolConfig> {
    isSingleAsset(): boolean;
    get name(): string;
    protected _isSingleAsset(props: IFarmingPoolConfig): props is ISingleAssetFarmingPoolConfig;
    get isDataReady(): boolean;
    get assetType(): FarmingAssetType;
    get configs(): Array<IFarmingConfig>;
    get key(): string;
    get dex(): Dex;
    get dexFee(): number;
    get lpAddress(): string;
    get maybeLpAddress(): Maybe<string>;
    get maybeFeaturePool(): Maybe<IFeatureFarmingPool>;
    get pId(): number;
    get isFeatured(): boolean;
    get isNew(): boolean;
    get tags(): Array<string>;
    get isWarn(): boolean;
    get allowOpenPosition(): boolean;
    get allowClosePosition(): boolean;
    get allowPartialClosePosition(): boolean;
    get allowAdjustPosition(): boolean;
    get allowBorrowMoreAdjustPosition(): boolean;
    get allowForceAddCollateralPosition(): boolean;
    get singleAssetAddress(): string;
    get singleAssetPoolName(): string;
}
export interface IFarmingConfig {
    key: string;
    worker: IWorker;
    vault: IVault;
    leverageInput: Array<number>;
    baseTokenBUSDPriceRoute?: ILPRoute;
    farmingTokenBUSDPriceRoute?: ILPRoute;
}
export interface IFeatureFarmingPool {
    key: string;
    rewardPerBlock: BigNumber;
    rewardToken: ITokenProfile;
}
export declare type KillBufferThreshold = {
    greenZone: number;
    yellowZone: number;
};
export declare const DefaultKillBufferThreshold: KillBufferThreshold;
export declare const StablePairKillBufferThreshold: KillBufferThreshold;
