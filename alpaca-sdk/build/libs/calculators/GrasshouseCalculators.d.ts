import { Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { GrassHousePool } from '../../entity';
import { FarmingPoolCalculator } from './FarmingPoolCalculator';
interface IGrasshouseCalculator {
    create: (..._grazePools: GrassHousePool[]) => Promise<GrasshouseCalculator[]>;
}
export declare class GrasshouseCalculatorFactory implements IGrasshouseCalculator {
    private provider;
    private farmingPoolCalculators?;
    constructor(_provider: Provider);
    setFarmingPoolCalculators(_farmingPoolCalculators: FarmingPoolCalculator[]): GrasshouseCalculatorFactory;
    create(..._grasshousePools: GrassHousePool[]): Promise<GrasshouseCalculator[]>;
}
interface IData {
    grasshousePool: GrassHousePool;
    rate: BigNumber;
    alpacaGrassHouseDetail?: {
        fairLaunchRate: BigNumber;
        reinvestBuyBackRate: BigNumber;
    };
}
export declare class DefaultGrasshouseCalculatorFactory {
    private provider;
    private xAlpacaTotalSupply;
    private alpacaPrice;
    private timestamp;
    constructor(_provider: Provider, xAlpacaTotalSupply: BigNumber, alpacaPrice: BigNumber, timestamp: number);
    create(..._grasshousePools: GrassHousePool[]): Promise<GrasshouseCalculator[]>;
    private _create;
}
export declare class ScientixGrassHouseCalculatorFactory {
    private provider;
    private xAlpacaTotalSupply;
    private alpacaPrice;
    constructor(_provider: Provider, xAlpacaTotalSupply: BigNumber, alpacaPrice: BigNumber);
    create(..._grasshousePools: GrassHousePool[]): Promise<GrasshouseCalculator[]>;
    _create(_grasshousePool: GrassHousePool): Promise<GrasshouseCalculator>;
    getBlockReward(poolId: BigNumber, fromBlock: BigNumber, toBlock: BigNumber): Promise<BigNumber>;
    getRewardPerBlock(poolId: number, currentBlock: BigNumber): Promise<BigNumber>;
}
export declare class AlpacaGrasshouseCalculatorFactory {
    private provider;
    private xAlpacaTotalSupply;
    private alpacaPrice;
    private timestamp;
    private farmingPoolCalculators?;
    constructor(_provider: Provider, xAlpacaTotalSupply: BigNumber, alpacaPrice: BigNumber, timestamp: number);
    setFarmingPoolCalculators(_farmingPoolCalculators: FarmingPoolCalculator[]): AlpacaGrasshouseCalculatorFactory;
    create(..._grasshousePools: GrassHousePool[]): Promise<GrasshouseCalculator[]>;
    _create(_grasshousePool: GrassHousePool): Promise<GrasshouseCalculator>;
    calculateFairLaunchfdALPACAStakingRate(): Promise<BigNumber>;
    calculateReInvestBuyBackRateStaticAPI(): Promise<BigNumber>;
}
export declare class GrasshouseCalculator {
    private data;
    constructor(_data: IData);
    get grasshousePool(): GrassHousePool;
    get apr(): BigNumber;
    apy(compoundRatePerYear: number): BigNumber;
    alpacaEmissionRewardApr(): BigNumber | undefined;
    reInvestBuyBackRate(): BigNumber | undefined;
}
export {};
