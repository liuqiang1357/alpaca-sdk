import { BigNumber } from 'ethers';
export interface IData {
    baseAddress: string;
    farmAddress: string;
    baseReserve: BigNumber;
    farmReserve: BigNumber;
    lpTotalSupply: BigNumber;
    tradingFeeBps: BigNumber;
}
/**
 * The input of the calculateOpenPositionParams function.
 * @property {BigNumber} inputBaseTokenAmount - The amount of base token
 * @property {BigNumber} inputFarmTokenAmount - The amount of farm token
 * @property {BigNumber} borrowingBaseTokenAmount - The amount of the base token to be borrowed.
 * @property {BigNumber} slippage - The slippage in basis point to be applied to the position
 * ex. 0,25 % = BigNumber.from('25')
 */
export declare type ICalculateOpenPositionParamsInput = {
    inputBaseAmount: BigNumber;
    inputFarmAmount: BigNumber;
    borrowingBaseAmount: BigNumber;
    slippageBps: BigNumber;
};
/**
 * The input of the calculateEntirelyClosePositionParams function.
 * @property {BigNumber} equityInBase - The equity in base token
 * @property {BigNumber} debtInBase - The debt in base token
 * @property {BigNumber} slippageBps - The slippage in basis point
 */
export declare type ICalculateEntirelyClosePositionParamsInput = {
    equityInBase: BigNumber;
    debtInBase: BigNumber;
    slippageBps: BigNumber;
};
/**
 * The output of the calculateOpenPositionParams function.
 * @property {BigNumber} lpAmount - The amount of LP equivaent to position value
 * @property {BigNumber} minLpAmount - The minimum amount of lp token that the user willing to have been converted into in the position
 */
export declare type ICalculateOpenPositionParamsOutput = {
    lpAmount: BigNumber;
    minLpAmount: BigNumber;
};
/**
 * The output of the calculateEntirelyCloseLiquidateAllPositionParams function.
 * @property {BigNumber} receivingBaseAmount - The amount of the base token that the user will ideally receive
 * @property {BigNumber} minReceivingBaseAmount - The minimum amount of receiving base token that the user willing to receive
 */
export declare type ICalculateEntirelyCloseLiquidateAllPositionParamsOutput = {
    receivingBaseAmount: BigNumber;
    minReceivingBaseAmount: BigNumber;
};
/**
 * The output of the calculateEntirelyCloseMinimizeTradingPositionParams function.
 * @property {BigNumber} receivingFarmAmount - The amount of the farm token that the user will ideally receive
 * @property {BigNumber} minReceivingFarmAmount - The minimum amount of receiving farm token that the user willing to receive
 */
export declare type ICalculateEntirelyCloseMinimizeTradingPositionParamsOutput = {
    receivingFarmAmount: BigNumber;
    minReceivingFarmAmount: BigNumber;
};
export declare class FarmInteractionCalculator {
    data: IData;
    private chainId;
    constructor({ _data }: {
        _data: IData;
    });
    /**
     * Given the input amount of base and farm tokens, and the amount of borrowing base tokens, calculate
     * the amount of LP tokens that would results in after open a position, in which would be further used
     * as parameters
     * @param {ICalculateOpenPositionParamsInput}
     */
    calculateOpenPositionParams({ inputBaseAmount, inputFarmAmount, borrowingBaseAmount, slippageBps, }: ICalculateOpenPositionParamsInput): ICalculateOpenPositionParamsOutput;
    /**
     * @alias calculateOpenPositionParams
     */
    calculateAdjustPositionParams: ({ inputBaseAmount, inputFarmAmount, borrowingBaseAmount, slippageBps, }: ICalculateOpenPositionParamsInput) => ICalculateOpenPositionParamsOutput;
    /**
     * Given the amount of equity and debt in base token, calculate the amount of base token that can be received by
     * liquidating the entire position
     * @param {ICalculateEntirelyClosePositionParamsInput}
     */
    calculateEntirelyCloseLiquidateAllPositionParams({ equityInBase, debtInBase, slippageBps, }: ICalculateEntirelyClosePositionParamsInput): ICalculateEntirelyCloseLiquidateAllPositionParamsOutput;
    /**
     * Given the amount of equity and debt in base token, calculate the amount of farm token that can be received by
     * liquidating the entire position, with minimal trade
     * @param {ICalculateEntirelyClosePositionParamsInput}
     */
    calculateEntirelyCloseMinimizeTradingPositionParams({ equityInBase, debtInBase, slippageBps, }: ICalculateEntirelyClosePositionParamsInput): ICalculateEntirelyCloseMinimizeTradingPositionParamsOutput;
    private _subSlippage;
    private _priceToBigNumber;
    private _getLPRoutesAndTokens;
    private _getLpPriceInBase;
}
