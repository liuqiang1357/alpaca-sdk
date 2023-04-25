import { FarmingPoolConfig, IFarmingConfig, ISingleAssetFarmingPoolConfig } from '../entity';
export declare const CAKEMAXI: ISingleAssetFarmingPoolConfig;
export declare const availableFarmingPools: FarmingPoolConfig[];
export declare const openableFarmingPools: FarmingPoolConfig[];
export declare const getFarmingPoolByWorkerAddress: (address: string) => FarmingPoolConfig;
export declare const getFarmingPoolByKeyAndSlug: (poolKey: string, farmSlug: string) => FarmingPoolConfig;
export declare const getFarmingConfigByWorkerAddress: (address: string) => IFarmingConfig;
