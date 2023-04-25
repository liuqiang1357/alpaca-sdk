"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alpacaFarmingRewardPools = void 0;
const fiatPrice_1 = require("../utils/fiatPrice");
const pools_1 = require("./pools");
exports.alpacaFarmingRewardPools = [
    {
        key: 'debt-alpaca',
        name: 'ALPACA',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/alpaca.svg',
        poolId: pools_1.IbDebtTokenALPACAPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('alpaca-finance'),
    },
    {
        key: 'debt-bnb',
        name: 'BNB',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/bnb.svg',
        poolId: pools_1.IbDebtTokenBNBPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('wbnb'),
    },
    {
        key: 'debt-busd',
        name: 'BUSD',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/busd.svg',
        poolId: pools_1.IbDebtTokenBUSDPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('binance-usd'),
    },
    {
        key: 'debt-usdt',
        name: 'USDT',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/usdt.svg',
        poolId: pools_1.IbDebtTokenUSDTPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('tether'),
    },
    {
        key: 'debt-usdc',
        name: 'USDC',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/usdc.svg',
        poolId: pools_1.IbDebtTokenUSDCPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('usd-coin'),
    },
    {
        key: 'debt-tusd',
        name: 'TUSD',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/tusd.svg',
        poolId: pools_1.IbDebtTokenTUSDPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('true-usd'),
    },
    {
        key: 'debt-btcb',
        name: 'BTCB',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/btcb.svg',
        poolId: pools_1.IbDebtTokenBTCBPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('bitcoin-bep2'),
    },
    {
        key: 'debt-eth',
        name: 'ETH',
        icon: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/eth.svg',
        poolId: pools_1.IbDebtTokenETHPoolId,
        rewardUnit: 'ALPACA',
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('ethereum'),
    },
];
