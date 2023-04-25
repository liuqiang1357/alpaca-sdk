export interface IGetPricesData {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
}
export interface IGetPairsData {
    name: string;
    tickers: ITicker[];
}
export interface ITicker {
    base: string;
    target: string;
    market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
    };
    last: number;
    volume: number;
    converted_last: {
        btc: number;
        eth: number;
        usd: number;
    };
    converted_volume: {
        btc: number;
        eth: number;
        usd: number;
    };
    coin_id: string;
    target_coin_id: string;
}
