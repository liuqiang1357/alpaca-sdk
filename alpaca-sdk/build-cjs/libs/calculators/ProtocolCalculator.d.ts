import { BigNumber } from '@ethersproject/bignumber';
import { LendingPoolCalculator } from './LendingPoolCalculator';
import { FarmingPoolCalculator } from './FarmingPoolCalculator';
export declare class ProtocolCalculatorFactory {
    create(_farmingPoolCalculators: FarmingPoolCalculator[], _alpacaLendingPoolCalculator: LendingPoolCalculator): ProtocolCalculator;
}
interface IData {
    vaultTvl: BigNumber;
    workersTvl: BigNumber;
    masterChefishTvl: BigNumber;
    rewardTokenPrice: BigNumber;
    rewardPerBlock: BigNumber;
    buyBackBps: BigNumber;
}
export declare class ProtocolCalculator {
    private data;
    constructor(_data: IData);
    get yearlyProtocolRate(): BigNumber;
    get yearlyProtocolApr(): BigNumber;
    get dailyProtocolRate(): BigNumber;
    get dailyProtocolApr(): BigNumber;
    private calculateYearlyProtocolRate;
}
export {};
