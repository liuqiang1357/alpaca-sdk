export interface IStrategyAddress {
    strategyAddTwoSidesOptimalAddress: string;
    strategyAddAllBaseTokenAddress: string;
    strategyLiquidateAddress: string;
    strategyWithdrawMinimizeTrading: string;
    strategyPartialCloseLiquidate: string;
    strategyPartialCloseMinimizeTrading: string;
}
export interface IStrategy {
    encodeStrategyParams(farmingTokenAmount: string, minOutputAmount: string): string;
}
export declare class TwoSideOptimalStrategy implements IStrategy {
    encodeStrategyParams(farmingTokenAmount: string, minOutputAmount: string): string;
}
export declare class AddAllBaseTokenStrategy implements IStrategy {
    encodeStrategyParams(_: string, minOutputAmount: string): string;
}
