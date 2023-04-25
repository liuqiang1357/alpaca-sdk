export declare enum Exchanges {
    DEX = "DEX",
    CEX = "CEX"
}
export interface IExchange {
    name: string;
    displayName: string[];
    type: Exchanges;
    iconUrl: string;
    tradeUrl: string;
    optionalUrl?: string;
    savingPercent?: number;
    isNew?: boolean;
}
export declare const dexList: IExchange[];
export declare const cexList: IExchange[];
