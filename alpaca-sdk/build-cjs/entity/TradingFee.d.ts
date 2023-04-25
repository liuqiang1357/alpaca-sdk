import { BigNumber } from 'ethers';
import { ValueObject } from '../shared/domain';
export declare type TradingFeeDataNotAvailable = null;
export declare const tradingFeeDataNotAvailable: TradingFeeDataNotAvailable;
export interface ITradingFee {
    lpAddress: string;
    dex: string;
    dailyTradingFeesApr: string;
}
export declare class TradingFee extends ValueObject<ITradingFee> {
    constructor(props: ITradingFee);
    get lpAddress(): string;
    get dailyTradingFeesAPR(): BigNumber;
}
