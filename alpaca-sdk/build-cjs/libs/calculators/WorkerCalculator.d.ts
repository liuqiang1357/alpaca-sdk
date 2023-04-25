import { IFarmingConfig } from '../../entity';
import { Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { ValueObject } from '../../shared/domain';
interface IWorkerCalculatorFactory {
    create(..._farmingPoolConfigs: IFarmingConfig[]): Promise<WorkerCalculator[]>;
    createOne(_farmingPoolConfig: IFarmingConfig): Promise<WorkerCalculator>;
}
export declare type SAWorkerCalculationData = {
    farmingConfig: IFarmingConfig;
    maxLeverage: BigNumber;
    baseTokenPrice: BigNumber;
    farmTokenPrice: BigNumber;
    farmAmountInMasterChef: BigNumber;
    singleAssetRewardBalance: BigNumber;
};
export declare type LPWorkerCalculationData = {
    farmingConfig: IFarmingConfig;
    maxLeverage: BigNumber;
    baseTokenPrice: BigNumber;
    farmTokenPrice: BigNumber;
    baseReserve: BigNumber;
    farmReserve: BigNumber;
    supplyOfLpToken: BigNumber;
    balanceOfLpTokenInMasterChef: BigNumber;
    workerLpAmountInMasterChef: BigNumber;
};
export declare class LPWorkerCalculatorFactory implements IWorkerCalculatorFactory {
    private provider;
    constructor(_provider: Provider);
    create(..._farmingPoolConfigs: IFarmingConfig[]): Promise<LPWorkerCalculator[]>;
    createOne(_farmingPoolConfig: IFarmingConfig): Promise<LPWorkerCalculator>;
}
export declare class SAWorkerCalculatorFactory implements IWorkerCalculatorFactory {
    private provider;
    constructor(_provider: Provider);
    create(..._farmingPoolConfigs: IFarmingConfig[]): Promise<SAWorkerCalculator[]>;
    createOne(_farmingPoolConfig: IFarmingConfig): Promise<SAWorkerCalculator>;
}
export declare class WorkerCalculatorFactory implements IWorkerCalculatorFactory {
    private provider;
    constructor(_provider: Provider);
    create(..._farmingPoolConfigs: IFarmingConfig[]): Promise<WorkerCalculator[]>;
    createOne(_farmingPoolConfig: IFarmingConfig): Promise<WorkerCalculator>;
    private getFactory;
}
export declare class SAWorkerCalculator extends ValueObject<SAWorkerCalculationData> {
    get isSAWorker(): boolean;
    get isLPWorker(): boolean;
    get maxLeverage(): BigNumber;
    get farmingConfig(): IFarmingConfig;
    get singleAssetRewardBalance(): BigNumber;
    get farmInUSD(): BigNumber;
    get farmTokenAmountInMasterChef(): BigNumber;
    get tvlInMasterChef(): BigNumber;
    get tvlInWorker(): BigNumber;
}
export declare class LPWorkerCalculator extends ValueObject<LPWorkerCalculationData> {
    get isSAWorker(): boolean;
    get isLPWorker(): boolean;
    get maxLeverage(): BigNumber;
    get farmingConfig(): IFarmingConfig;
    get reserveBase(): BigNumber;
    get reserveFarm(): BigNumber;
    get balanceOfLpTokenInMasterChef(): BigNumber;
    get baseInUSD(): BigNumber;
    get farmInUSD(): BigNumber;
    get supplyOfLpToken(): BigNumber;
    get workerLpAmountInMasterChef(): BigNumber;
    get baseValueInMasterChef(): BigNumber;
    get farmValueInMasterChef(): BigNumber;
    get tvlInMasterChef(): BigNumber;
    get workerBalanceofBaseInMasterChef(): BigNumber;
    get workerBalanceofFarmInMasterChef(): BigNumber;
    get workerValueOfBaseInMasterChef(): BigNumber;
    get workerValueOfFarmInMasterChef(): BigNumber;
    get underlayingBaseinUSD(): BigNumber;
    get underlayingFarminUSD(): BigNumber;
    get workerBalanceOfBaseTokenInMasterChef(): BigNumber;
    get workerBalanceOfFarmTokenInMasterChef(): BigNumber;
    get tvlInWorker(): BigNumber;
}
export declare type WorkerCalculator = SAWorkerCalculator | LPWorkerCalculator;
export {};
