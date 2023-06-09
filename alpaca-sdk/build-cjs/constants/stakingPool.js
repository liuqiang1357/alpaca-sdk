"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleAssetStakingPoolsV2 = exports.lpStakingPoolsV2 = exports.debtStakingPoolsV2 = exports.ibStakingPoolsV2 = exports.mapStakingPoolsV2 = exports.availableStakePools = void 0;
const entity_1 = require("../entity");
const contracts_1 = require("./contracts");
const fiatPrice_1 = require("../utils/fiatPrice");
const pools_1 = require("./pools");
const tokenProfile_1 = require("./tokenProfile");
exports.availableStakePools = [
    {
        key: 'ausd-busd-lp',
        name: 'AUSD-BUSD LP',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ausd.svg',
        iconT: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/busd.svg',
        unit: 'AUSD-BUSD LP',
        isLp: true,
        lpGuide: 'https://docs.alpacafinance.org/ausd/step-by-step-guide/stake-ausd-busd-lp-token',
        isIb: false,
        isDebt: false,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: 'https://pancakeswap.finance/info/pool/0x877264983807d568cf0b61344cb03012c1f11b17',
        linkToAddLiquidity: 'https://pancakeswap.finance/add/0xDCEcf0664C33321CECA2effcE701E710A2D28A3F/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        stakingTokenAddress: contracts_1.AUSDBUSDLpTokenAddress,
        baseTokenAddress: contracts_1.BUSDAddress,
        derivingLpAddress: null,
        poolId: pools_1.PancakeAUSDBUSDPoolId,
        getPriceInUSD: () => fiatPrice_1.getBUSDPrice(),
    },
    {
        key: 'ib-usdc',
        name: 'ibUSDC',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-usdc.svg',
        iconT: '',
        unit: 'ibUSDC',
        underlyingUnit: 'USDC',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.USDCVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbUSDCPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('usd-coin'),
    },
    {
        key: 'ib-wbnb',
        name: 'ibBNB',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-bnb.svg',
        iconT: '',
        unit: 'ibBNB',
        underlyingUnit: 'BNB',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: true,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.BNBVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbWBNBPoolId,
        getPriceInUSD: fiatPrice_1.getNativeTokenPrice,
    },
    {
        key: 'ib-busd',
        name: 'ibBUSD',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-busd.svg',
        iconT: '',
        unit: 'ibBUSD',
        underlyingUnit: 'BUSD',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.BUSDVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbBUSDPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('binance-usd'),
    },
    {
        key: 'ib-usdt',
        name: 'ibUSDT',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-usdt.svg?v=2',
        iconT: '',
        unit: 'ibUSDT',
        underlyingUnit: 'USDT',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.USDTVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbUSDTPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('tether'),
    },
    {
        key: 'ib-tusd',
        name: 'ibTUSD',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-tusd.svg',
        iconT: '',
        unit: 'ibTUSD',
        underlyingUnit: 'TUSD',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.TUSDVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbTUSDPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('true-usd'),
    },
    {
        key: 'ib-btcb',
        name: 'ibBTCB',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-btcb.svg',
        iconT: '',
        unit: 'ibBTCB',
        underlyingUnit: 'BTCB',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.BTCBVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbBTCBPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('bitcoin-bep2'),
    },
    {
        key: 'ib-eth',
        name: 'ibETH',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-eth.svg',
        iconT: '',
        unit: 'ibETH',
        underlyingUnit: 'ETH',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: false,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.ETHVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbETHPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('ethereum'),
    },
    {
        key: 'ib-alpaca',
        name: 'ibALPACA',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/ib-alpaca.svg',
        iconT: '',
        unit: 'ibALPACA',
        underlyingUnit: 'ALPACA',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: true,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: true,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.ALPACAVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: pools_1.IbALPACAPoolId,
        getPriceInUSD: () => fiatPrice_1.getAlpacaPrice(),
    },
    {
        key: 's-alpaca',
        name: 'sALPACA',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/StronkAlpaca.svg',
        iconT: '',
        unit: 'sALPACA',
        isLp: false,
        isDebt: false,
        lpGuide: '',
        isIb: false,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: false,
        isSingleTokenDeriveValueFromLP: true,
        isLegacyLPToken: true,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.StronkAlpacaAddress,
        baseTokenAddress: contracts_1.AlpacaTokenAddress,
        derivingLpAddress: contracts_1.StronkAlpacaAlpacaLpAddress,
        poolId: pools_1.StronkAlpacaPoolId,
        getPriceInUSD: () => fiatPrice_1.getTokenPrice('alpaca-finance'),
    },
    {
        key: 'alpaca-wbnb-lp-v2',
        name: 'ALPACA-wBNB LP',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/alpaca.svg',
        iconT: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/bnb.svg',
        unit: 'ALPACA-wBNB LP',
        isLp: true,
        lpGuide: 'https://docs.alpacafinance.org/our-protocol-1/step-by-step-guide/stake#staking-pancakeswap-alpaca-bnb-lp-token',
        isIb: false,
        isDebt: false,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: true,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: true,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.AlpacaBNBLpV2Address,
        baseTokenAddress: contracts_1.WBNBAddress,
        derivingLpAddress: null,
        poolId: pools_1.AlpacaWBNBLPTokenV2PoolId,
        getPriceInUSD: fiatPrice_1.getNativeTokenPrice,
    },
    {
        key: 'alpaca-wbnb-lp',
        name: 'ALPACA-wBNB LP V1',
        iconO: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/alpaca.svg',
        iconT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png',
        unit: 'ALPACA-wBNB LP',
        isLp: true,
        lpGuide: 'https://docs.alpacafinance.org/our-protocol-1/step-by-step-guide/stake#staking-pancakeswap-alpaca-bnb-lp-token',
        isIb: false,
        isDebt: false,
        isNew: false,
        isStakingTokenNativeIb: false,
        isBaseTokenNative: true,
        isSingleTokenDeriveValueFromLP: false,
        isLegacyLPToken: true,
        linkInfo: '',
        linkToAddLiquidity: '',
        stakingTokenAddress: contracts_1.AlpacaBNBLpAddress,
        baseTokenAddress: contracts_1.WBNBAddress,
        derivingLpAddress: null,
        poolId: pools_1.AlpacaWBNBLPTokenPoolId,
        getPriceInUSD: fiatPrice_1.getNativeTokenPrice,
    },
];
exports.mapStakingPoolsV2 = {
    [entity_1.StakingPoolV2Key.IbALPACA]: {
        key: entity_1.StakingPoolV2Key.IbALPACA,
        name: 'ALPACA Interest Bearing',
        poolId: pools_1.IbALPACAPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibALPACA'],
    },
    [entity_1.StakingPoolV2Key.IbWBNB]: {
        key: entity_1.StakingPoolV2Key.IbWBNB,
        name: 'BNB Interest Bearing',
        poolId: pools_1.IbWBNBPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibBNB'],
    },
    [entity_1.StakingPoolV2Key.IbBUSD]: {
        key: entity_1.StakingPoolV2Key.IbBUSD,
        name: 'BUSD Interest Bearing',
        poolId: pools_1.IbBUSDPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibBUSD'],
    },
    [entity_1.StakingPoolV2Key.IbUSDT]: {
        key: entity_1.StakingPoolV2Key.IbUSDT,
        name: 'USDT Interest Bearing',
        poolId: pools_1.IbUSDTPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibUSDT'],
    },
    [entity_1.StakingPoolV2Key.IbTUSD]: {
        key: entity_1.StakingPoolV2Key.IbTUSD,
        name: 'TUSD Interest Bearing',
        poolId: pools_1.IbTUSDPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibTUSD'],
    },
    [entity_1.StakingPoolV2Key.IbBTCB]: {
        key: entity_1.StakingPoolV2Key.IbBTCB,
        name: 'BTCB Interest Bearing',
        poolId: pools_1.IbBTCBPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibBTCB'],
    },
    [entity_1.StakingPoolV2Key.IbETH]: {
        key: entity_1.StakingPoolV2Key.IbETH,
        name: 'ETH Interest Bearing',
        poolId: pools_1.IbETHPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibETH'],
    },
    [entity_1.StakingPoolV2Key.IbUSDC]: {
        key: entity_1.StakingPoolV2Key.IbUSDC,
        name: 'Interest Bearing USDC',
        poolId: pools_1.IbUSDCPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['ibUSDC'],
    },
    [entity_1.StakingPoolV2Key.DebtALPACA]: {
        key: entity_1.StakingPoolV2Key.DebtALPACA,
        name: 'ALPACA Debt',
        poolId: pools_1.IbDebtTokenALPACAPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtALPACA'],
    },
    [entity_1.StakingPoolV2Key.DebtBNB]: {
        key: entity_1.StakingPoolV2Key.DebtBNB,
        name: 'BNB Debt',
        poolId: pools_1.IbDebtTokenBNBPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtBNB'],
    },
    [entity_1.StakingPoolV2Key.DebtBUSD]: {
        key: entity_1.StakingPoolV2Key.DebtBUSD,
        name: 'BUSD Debt',
        poolId: pools_1.IbDebtTokenBUSDPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtBUSD'],
    },
    [entity_1.StakingPoolV2Key.DebtETH]: {
        key: entity_1.StakingPoolV2Key.DebtETH,
        name: 'ETH Debt',
        poolId: pools_1.IbDebtTokenETHPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtETH'],
    },
    [entity_1.StakingPoolV2Key.DebtUSDT]: {
        key: entity_1.StakingPoolV2Key.DebtUSDT,
        name: 'USDT Debt',
        poolId: pools_1.IbDebtTokenUSDTPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtUSDT'],
    },
    [entity_1.StakingPoolV2Key.DebtTUSD]: {
        key: entity_1.StakingPoolV2Key.DebtTUSD,
        name: 'TUSD Debt',
        poolId: pools_1.IbDebtTokenTUSDPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtTUSD'],
    },
    [entity_1.StakingPoolV2Key.DebtUSDC]: {
        key: entity_1.StakingPoolV2Key.DebtUSDC,
        name: 'USDC Debt',
        poolId: pools_1.IbDebtTokenUSDCPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtUSDC'],
    },
    [entity_1.StakingPoolV2Key.DebtBTCB]: {
        key: entity_1.StakingPoolV2Key.DebtBTCB,
        name: 'BTCB Debt',
        poolId: pools_1.IbDebtTokenBTCBPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['debtBTCB'],
    },
    [entity_1.StakingPoolV2Key.SAlpaca]: {
        key: entity_1.StakingPoolV2Key.SAlpaca,
        name: 'Stronk Alpaca',
        poolId: pools_1.StronkAlpacaPoolId,
        stakingToken: tokenProfile_1.mapTokenProfiles['sAlpaca'],
    },
    [entity_1.StakingPoolV2Key.ALPACAWBNBLpV2]: {
        key: entity_1.StakingPoolV2Key.ALPACAWBNBLpV2,
        name: 'ALPACA-wBNB LP token V2',
        poolId: pools_1.AlpacaWBNBLPTokenV2PoolId,
        stakingToken: tokenProfile_1.mapLpTokenProfiles['pcs']['alpaca']['bnb'],
    },
    [entity_1.StakingPoolV2Key.ALPACAWBNBLpV1]: {
        key: entity_1.StakingPoolV2Key.ALPACAWBNBLpV1,
        name: 'ALPACA-wBNB LP token V1',
        poolId: pools_1.AlpacaWBNBLPTokenPoolId,
        stakingToken: tokenProfile_1.mapLpTokenProfiles['pcs-v1']['alpaca']['bnb'],
    },
    [entity_1.StakingPoolV2Key.AUSDBUSDLp]: {
        key: entity_1.StakingPoolV2Key.AUSDBUSDLp,
        name: 'AUSD-BUSD LP token',
        poolId: pools_1.PancakeAUSDBUSDPoolId,
        stakingToken: tokenProfile_1.mapLpTokenProfiles['pcs']['ausd']['busd'],
    },
};
exports.ibStakingPoolsV2 = [
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbALPACA],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbWBNB],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbBUSD],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbUSDT],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbTUSD],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbBTCB],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbETH],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.IbUSDC],
];
exports.debtStakingPoolsV2 = [
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtALPACA],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtBNB],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtBUSD],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtUSDT],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtTUSD],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtBTCB],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtETH],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.DebtUSDC],
];
exports.lpStakingPoolsV2 = [
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.AUSDBUSDLp],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.ALPACAWBNBLpV2],
    exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.ALPACAWBNBLpV1],
];
exports.singleAssetStakingPoolsV2 = [exports.mapStakingPoolsV2[entity_1.StakingPoolV2Key.SAlpaca]];
