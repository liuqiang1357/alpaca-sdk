"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cexList = exports.dexList = exports.Exchanges = void 0;
var Exchanges;
(function (Exchanges) {
    Exchanges["DEX"] = "DEX";
    Exchanges["CEX"] = "CEX";
})(Exchanges = exports.Exchanges || (exports.Exchanges = {}));
exports.dexList = [
    {
        name: 'Pancakeswap',
        displayName: ['Pancake', 'Swap'],
        type: Exchanges.DEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2',
        tradeUrl: 'https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
    },
    {
        name: 'MDEX',
        displayName: ['MDEX'],
        type: Exchanges.DEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/mdex.svg',
        tradeUrl: 'https://bsc.mdex.com/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
        isNew: true,
    },
];
exports.cexList = [
    {
        name: 'Binance',
        displayName: ['Binance'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/binance.svg',
        tradeUrl: 'https://www.binance.com/en/trade/ALPACA_BUSD',
        optionalUrl: 'https://accounts.binance.com/en/register?ref=QLKTGSFO',
        savingPercent: 20,
    },
    {
        name: 'Kucoin',
        displayName: ['Kucoin'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/kucoin.svg',
        tradeUrl: 'https://trade.kucoin.com/ALPACA-USDT',
    },
    {
        name: 'Gate.io',
        displayName: ['Gate.io'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/gateio.svg',
        tradeUrl: 'https://www.gate.io/en/trade/ALPACA_USDT',
    },
    {
        name: 'Poloniex',
        displayName: ['Poloniex'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/poloniex.svg',
        tradeUrl: 'https://poloniex.com/exchange/USDT_ALPACA',
    },
    {
        name: 'MEXC',
        displayName: ['MEXC'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/mexc.svg',
        tradeUrl: 'https://www.mexc.com/exchange/ALPACA_USDT',
    },
    {
        name: 'Indodax',
        displayName: ['Indodax'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/indodax.svg',
        tradeUrl: 'https://indodax.com/market/ALPACAIDR',
    },
    {
        name: 'Tokocrypto',
        displayName: ['Tokocrypto'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/tokyocrypto.svg',
        tradeUrl: 'https://www.tokocrypto.com/en/trade/ALPACA_BUSD',
    },
    {
        name: 'CoinDCX',
        displayName: ['CoinDCX'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/coindcx.svg',
        tradeUrl: 'https://coindcx.com/trade/ALPACABUSD',
    },
    {
        name: 'WazirX',
        displayName: ['WazirX'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/wazirx.svg',
        tradeUrl: 'https://wazirx.com/exchange/ALPACA-INR',
    },
    {
        name: 'VCC',
        displayName: ['VCC'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/vcc.svg',
        tradeUrl: 'https://vcc.exchange/exchange/basic?currency=usdt&coin=alpaca',
    },
    {
        name: 'Latoken',
        displayName: ['Latoken'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/latoken.svg',
        tradeUrl: 'https://latoken.com/exchange/ALPACA_USDT',
    },
    {
        name: 'WhiteBIT',
        displayName: ['WhiteBIT'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/whitebit.svg',
        tradeUrl: 'https://whitebit.com/trade/ALPACA-USDT',
    },
    {
        name: 'DigiFinex',
        displayName: ['DigiFinex'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/digifinex.svg',
        tradeUrl: 'https://www.digifinex.com/en-ww/trade/USDT/ALPACA',
    },
    {
        name: 'Hoo',
        displayName: ['Hoo'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/hoo.svg',
        tradeUrl: 'https://hoo.com/spot/alpaca-usdt',
    },
    {
        name: 'Lbank',
        displayName: ['Lbank'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/lbank.svg',
        tradeUrl: 'https://www.lbank.info/exchange/alpaca/usdt',
    },
    {
        name: 'Bitrue',
        displayName: ['Bitrue'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/bitrue.svg',
        tradeUrl: 'https://www.bitrue.com/trade/alpaca_usdt',
    },
    {
        name: 'BitMart',
        displayName: ['BitMart'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/bitmart.svg',
        tradeUrl: 'https://www.bitmart.com/trade/en?symbol=ALPACA_USDT&layout=basic',
    },
    {
        name: 'CoinEx',
        displayName: ['CoinEx'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/coinex.svg',
        tradeUrl: 'https://www.coinex.com/exchange?currency=usdt&dest=alpaca&tab=limit',
    },
    {
        name: 'Bilaxy',
        displayName: ['Bilaxy'],
        type: Exchanges.CEX,
        iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/bilaxy.svg',
        tradeUrl: 'https://bilaxy.com/trade/ALPACA_BUSD',
    },
];