import { StakingPoolV2Key } from '../entity';
import { BUSDVaultAddress, BNBVaultAddress, AlpacaBNBLpAddress, StronkAlpacaAddress, AlpacaTokenAddress, StronkAlpacaAlpacaLpAddress, WBNBAddress, ETHVaultAddress, ALPACAVaultAddress, AlpacaBNBLpV2Address, USDTVaultAddress, BTCBVaultAddress, TUSDVaultAddress, AUSDBUSDLpTokenAddress, BUSDAddress, USDCVaultAddress, } from './contracts';
import { getAlpacaPrice, getBUSDPrice, getNativeTokenPrice, getTokenPrice } from '../utils/fiatPrice';
import { AlpacaWBNBLPTokenPoolId, AlpacaWBNBLPTokenV2PoolId, StronkAlpacaPoolId, IbALPACAPoolId, IbBUSDPoolId, IbETHPoolId, IbWBNBPoolId, IbUSDTPoolId, IbBTCBPoolId, IbTUSDPoolId, IbDebtTokenALPACAPoolId, IbDebtTokenBNBPoolId, IbDebtTokenBUSDPoolId, IbDebtTokenETHPoolId, IbDebtTokenUSDTPoolId, IbDebtTokenTUSDPoolId, IbDebtTokenBTCBPoolId, PancakeAUSDBUSDPoolId, IbUSDCPoolId, IbDebtTokenUSDCPoolId, } from './pools';
import { mapLpTokenProfiles, mapTokenProfiles } from './tokenProfile';
export const availableStakePools = [
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
        stakingTokenAddress: AUSDBUSDLpTokenAddress,
        baseTokenAddress: BUSDAddress,
        derivingLpAddress: null,
        poolId: PancakeAUSDBUSDPoolId,
        getPriceInUSD: () => getBUSDPrice(),
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
        stakingTokenAddress: USDCVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbUSDCPoolId,
        getPriceInUSD: () => getTokenPrice('usd-coin'),
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
        stakingTokenAddress: BNBVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbWBNBPoolId,
        getPriceInUSD: getNativeTokenPrice,
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
        stakingTokenAddress: BUSDVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbBUSDPoolId,
        getPriceInUSD: () => getTokenPrice('binance-usd'),
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
        stakingTokenAddress: USDTVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbUSDTPoolId,
        getPriceInUSD: () => getTokenPrice('tether'),
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
        stakingTokenAddress: TUSDVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbTUSDPoolId,
        getPriceInUSD: () => getTokenPrice('true-usd'),
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
        stakingTokenAddress: BTCBVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbBTCBPoolId,
        getPriceInUSD: () => getTokenPrice('bitcoin-bep2'),
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
        stakingTokenAddress: ETHVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbETHPoolId,
        getPriceInUSD: () => getTokenPrice('ethereum'),
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
        stakingTokenAddress: ALPACAVaultAddress,
        baseTokenAddress: null,
        derivingLpAddress: null,
        poolId: IbALPACAPoolId,
        getPriceInUSD: () => getAlpacaPrice(),
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
        stakingTokenAddress: StronkAlpacaAddress,
        baseTokenAddress: AlpacaTokenAddress,
        derivingLpAddress: StronkAlpacaAlpacaLpAddress,
        poolId: StronkAlpacaPoolId,
        getPriceInUSD: () => getTokenPrice('alpaca-finance'),
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
        stakingTokenAddress: AlpacaBNBLpV2Address,
        baseTokenAddress: WBNBAddress,
        derivingLpAddress: null,
        poolId: AlpacaWBNBLPTokenV2PoolId,
        getPriceInUSD: getNativeTokenPrice,
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
        stakingTokenAddress: AlpacaBNBLpAddress,
        baseTokenAddress: WBNBAddress,
        derivingLpAddress: null,
        poolId: AlpacaWBNBLPTokenPoolId,
        getPriceInUSD: getNativeTokenPrice,
    },
];
export const mapStakingPoolsV2 = {
    [StakingPoolV2Key.IbALPACA]: {
        key: StakingPoolV2Key.IbALPACA,
        name: 'ALPACA Interest Bearing',
        poolId: IbALPACAPoolId,
        stakingToken: mapTokenProfiles['ibALPACA'],
    },
    [StakingPoolV2Key.IbWBNB]: {
        key: StakingPoolV2Key.IbWBNB,
        name: 'BNB Interest Bearing',
        poolId: IbWBNBPoolId,
        stakingToken: mapTokenProfiles['ibBNB'],
    },
    [StakingPoolV2Key.IbBUSD]: {
        key: StakingPoolV2Key.IbBUSD,
        name: 'BUSD Interest Bearing',
        poolId: IbBUSDPoolId,
        stakingToken: mapTokenProfiles['ibBUSD'],
    },
    [StakingPoolV2Key.IbUSDT]: {
        key: StakingPoolV2Key.IbUSDT,
        name: 'USDT Interest Bearing',
        poolId: IbUSDTPoolId,
        stakingToken: mapTokenProfiles['ibUSDT'],
    },
    [StakingPoolV2Key.IbTUSD]: {
        key: StakingPoolV2Key.IbTUSD,
        name: 'TUSD Interest Bearing',
        poolId: IbTUSDPoolId,
        stakingToken: mapTokenProfiles['ibTUSD'],
    },
    [StakingPoolV2Key.IbBTCB]: {
        key: StakingPoolV2Key.IbBTCB,
        name: 'BTCB Interest Bearing',
        poolId: IbBTCBPoolId,
        stakingToken: mapTokenProfiles['ibBTCB'],
    },
    [StakingPoolV2Key.IbETH]: {
        key: StakingPoolV2Key.IbETH,
        name: 'ETH Interest Bearing',
        poolId: IbETHPoolId,
        stakingToken: mapTokenProfiles['ibETH'],
    },
    [StakingPoolV2Key.IbUSDC]: {
        key: StakingPoolV2Key.IbUSDC,
        name: 'Interest Bearing USDC',
        poolId: IbUSDCPoolId,
        stakingToken: mapTokenProfiles['ibUSDC'],
    },
    [StakingPoolV2Key.DebtALPACA]: {
        key: StakingPoolV2Key.DebtALPACA,
        name: 'ALPACA Debt',
        poolId: IbDebtTokenALPACAPoolId,
        stakingToken: mapTokenProfiles['debtALPACA'],
    },
    [StakingPoolV2Key.DebtBNB]: {
        key: StakingPoolV2Key.DebtBNB,
        name: 'BNB Debt',
        poolId: IbDebtTokenBNBPoolId,
        stakingToken: mapTokenProfiles['debtBNB'],
    },
    [StakingPoolV2Key.DebtBUSD]: {
        key: StakingPoolV2Key.DebtBUSD,
        name: 'BUSD Debt',
        poolId: IbDebtTokenBUSDPoolId,
        stakingToken: mapTokenProfiles['debtBUSD'],
    },
    [StakingPoolV2Key.DebtETH]: {
        key: StakingPoolV2Key.DebtETH,
        name: 'ETH Debt',
        poolId: IbDebtTokenETHPoolId,
        stakingToken: mapTokenProfiles['debtETH'],
    },
    [StakingPoolV2Key.DebtUSDT]: {
        key: StakingPoolV2Key.DebtUSDT,
        name: 'USDT Debt',
        poolId: IbDebtTokenUSDTPoolId,
        stakingToken: mapTokenProfiles['debtUSDT'],
    },
    [StakingPoolV2Key.DebtTUSD]: {
        key: StakingPoolV2Key.DebtTUSD,
        name: 'TUSD Debt',
        poolId: IbDebtTokenTUSDPoolId,
        stakingToken: mapTokenProfiles['debtTUSD'],
    },
    [StakingPoolV2Key.DebtUSDC]: {
        key: StakingPoolV2Key.DebtUSDC,
        name: 'USDC Debt',
        poolId: IbDebtTokenUSDCPoolId,
        stakingToken: mapTokenProfiles['debtUSDC'],
    },
    [StakingPoolV2Key.DebtBTCB]: {
        key: StakingPoolV2Key.DebtBTCB,
        name: 'BTCB Debt',
        poolId: IbDebtTokenBTCBPoolId,
        stakingToken: mapTokenProfiles['debtBTCB'],
    },
    [StakingPoolV2Key.SAlpaca]: {
        key: StakingPoolV2Key.SAlpaca,
        name: 'Stronk Alpaca',
        poolId: StronkAlpacaPoolId,
        stakingToken: mapTokenProfiles['sAlpaca'],
    },
    [StakingPoolV2Key.ALPACAWBNBLpV2]: {
        key: StakingPoolV2Key.ALPACAWBNBLpV2,
        name: 'ALPACA-wBNB LP token V2',
        poolId: AlpacaWBNBLPTokenV2PoolId,
        stakingToken: mapLpTokenProfiles['pcs']['alpaca']['bnb'],
    },
    [StakingPoolV2Key.ALPACAWBNBLpV1]: {
        key: StakingPoolV2Key.ALPACAWBNBLpV1,
        name: 'ALPACA-wBNB LP token V1',
        poolId: AlpacaWBNBLPTokenPoolId,
        stakingToken: mapLpTokenProfiles['pcs-v1']['alpaca']['bnb'],
    },
    [StakingPoolV2Key.AUSDBUSDLp]: {
        key: StakingPoolV2Key.AUSDBUSDLp,
        name: 'AUSD-BUSD LP token',
        poolId: PancakeAUSDBUSDPoolId,
        stakingToken: mapLpTokenProfiles['pcs']['ausd']['busd'],
    },
};
export const ibStakingPoolsV2 = [
    mapStakingPoolsV2[StakingPoolV2Key.IbALPACA],
    mapStakingPoolsV2[StakingPoolV2Key.IbWBNB],
    mapStakingPoolsV2[StakingPoolV2Key.IbBUSD],
    mapStakingPoolsV2[StakingPoolV2Key.IbUSDT],
    mapStakingPoolsV2[StakingPoolV2Key.IbTUSD],
    mapStakingPoolsV2[StakingPoolV2Key.IbBTCB],
    mapStakingPoolsV2[StakingPoolV2Key.IbETH],
    mapStakingPoolsV2[StakingPoolV2Key.IbUSDC],
];
export const debtStakingPoolsV2 = [
    mapStakingPoolsV2[StakingPoolV2Key.DebtALPACA],
    mapStakingPoolsV2[StakingPoolV2Key.DebtBNB],
    mapStakingPoolsV2[StakingPoolV2Key.DebtBUSD],
    mapStakingPoolsV2[StakingPoolV2Key.DebtUSDT],
    mapStakingPoolsV2[StakingPoolV2Key.DebtTUSD],
    mapStakingPoolsV2[StakingPoolV2Key.DebtBTCB],
    mapStakingPoolsV2[StakingPoolV2Key.DebtETH],
    mapStakingPoolsV2[StakingPoolV2Key.DebtUSDC],
];
export const lpStakingPoolsV2 = [
    mapStakingPoolsV2[StakingPoolV2Key.AUSDBUSDLp],
    mapStakingPoolsV2[StakingPoolV2Key.ALPACAWBNBLpV2],
    mapStakingPoolsV2[StakingPoolV2Key.ALPACAWBNBLpV1],
];
export const singleAssetStakingPoolsV2 = [mapStakingPoolsV2[StakingPoolV2Key.SAlpaca]];
