"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeETERNALBNBPoolId = exports.PancakeSPSBNBPoolId = exports.PancakeBMONBNBPoolId = exports.PancakeQBTBNBPoolId = exports.PancakeDVIBNBPoolId = exports.PancakeNAOSBNBPoolId = exports.PancakeMBOXBNBPoolId = exports.PancakeAXSBNBPoolId = exports.PancakeBTTBNBPoolId = exports.PancakeTRXBNBPoolId = exports.PancakeADABNBPoolId = exports.PancakeODDZBNBPoolId = exports.PancakeUSDTBNBPoolId = exports.PancakeDODOBNBPoolId = exports.PancakeSWINGBYBNBPoolId = exports.PancakePCWSBNBPoolId = exports.PancakeBRYBNBPoolId = exports.PancakeBORBNBPoolId = exports.PancakeBELTBNBPoolId = exports.PancakeBMXXBNBPoolId = exports.PancakeITAMWBNBPoolId = exports.PancakeYFIWBNBPoolId = exports.PancakeXVSWBNBPoolId = exports.PancakeLINKWBNBPoolId = exports.PancakeUNIWBNBPoolId = exports.PancakeDOTWBNBPoolId = exports.PancakeETHWBNBPoolId = exports.PancakeBTCBWBNBPoolId = exports.PancakeCAKEWBNBPoolId = exports.StronkAlpacaPoolId = exports.IbDebtTokenUSDCPoolId = exports.IbDebtTokenTUSDPoolId = exports.IbDebtTokenBTCBPoolId = exports.IbDebtTokenUSDTPoolId = exports.IbDebtTokenALPACAPoolId = exports.IbDebtTokenETHPoolId = exports.IbDebtTokenBUSDPoolId = exports.IbDebtTokenBNBPoolId = exports.IbUSDCPoolId = exports.IbTUSDPoolId = exports.IbBTCBPoolId = exports.IbUSDTPoolId = exports.IbALPACAPoolId = exports.IbETHPoolId = exports.IbBUSDPoolId = exports.IbWBNBPoolId = exports.PancakeAUSDBUSDPoolId = exports.AlpacaWBNBLPTokenV2PoolId = exports.AlpacaWBNBLPTokenPoolId = exports.PancakeSyrupPoolId = void 0;
exports.GrazingRangeIbAlpacaPEARPoolId = exports.GrazingRangeIbAlpacaQBTPoolId = exports.GrazingRangeIbAlpacaDVIPoolId = exports.GrazingRangeIbAlpacaNAOSPoolId = exports.GrazingRangeIbAlpacaKALAPoolId = exports.GrazingRangeIbAlpacaALMPoolId = exports.GrazingRangeIbAlpacaPHAPoolId = exports.GrazingRangeIbAlpacaPMONPoolId = exports.GrazingRangeIbAlpacaWEXPoolId = exports.GrazingRangeIbAlpacaORBSPoolId = exports.GrazingRangeIbAlpacaFORMPoolId = exports.GrazingRangeIbAlpacaODDZPoolId = exports.GrazingRangeIbAlpacaDODOPoolId = exports.GrazingRangeIbAlpacaSWINGBYPoolId = exports.GrazingRangeIbAlpacaCWSPoolId = exports.GrazingRangeIbAlpacaBRYPoolId = exports.GrazingRangeIbAlpacaBORPoolId = exports.GrazingRangeIbAlpacaBELTPoolId = exports.GrazingRangeIbAlpacabMXX1PoolId = exports.GrazingRangeIbAlpacaBUSD4PoolId = exports.GrazingRangeIbAlpacaBUSD3PoolId = exports.GrazingRangeIbAlpacaBUSD2PoolId = exports.GrazingRangeIbAlpacaBUSD1PoolId = exports.PancakeETHUSDCPoolId = exports.PancakeBUSDALPACAPoolId = exports.PancakeETHBTCBPoolId = exports.PancakeUSDCUSDTPoolId = exports.PancakeCAKEUSDTPoolId = exports.PancakeSUSHIETHPoolId = exports.PancakeCOMPETHPoolId = exports.PancakeBETHETHPoolId = exports.PancakeHIGHBUSDPoolId = exports.PancakeBMONBUSDPoolId = exports.PancakePOTSBUSDPoolId = exports.PancakePHABUSDPoolId = exports.PancakePMONBUSDPoolId = exports.PancakeBTTBUSDPoolId = exports.PancakeTRXBUSDPoolId = exports.PancakeORBSBUSDPoolId = exports.PancakeTUSDBUSDPoolId = exports.PancakeFORMBUSDPoolId = exports.PancakeCAKEBUSDPoolId = exports.PancakeUSTBUSDPoolId = exports.PancakeDAIBUSDPoolId = exports.PancakeUSDCBUSDPoolId = exports.PancakeVAIBUSDPoolId = exports.PancakeWBNBBUSDPoolId = exports.PancakeUSDTBUSDPoolId = exports.PancakeBTCBBUSDPoolId = exports.PancakeTHGBNBPoolId = void 0;
exports.MS_WBNBBTCBPoolId = exports.MS_ETHBTCBPoolId = exports.MS_WBNBETHPoolId = exports.MS_WBNBBUSDPoolId = exports.MS_MDXBUSDPoolId = exports.MS_MDXWBNBPoolId = exports.MS_DAIUSDTPoolId = exports.MS_USDCUSDTPoolId = exports.MS_WBNBUSDTPoolId = exports.MS_ETHUSDTPoolId = exports.MS_BTCBUSDTPoolId = exports.WS_BTCBBUSDPoolId = exports.WS_ETHUSDTPoolId = exports.WS_BETHETHPoolId = exports.WS_ETHBTCBPoolId = exports.WS_TUSDUSDTPoolId = exports.WS_MATICUSDTPoolId = exports.WS_BTCBUSDTPoolId = exports.WS_WEXUSDTPoolId = exports.WS_ALPACAUSDTPoolId = exports.WS_WUSDBUSDPoolId = exports.WS_USDTBUSDPoolId = exports.WS_WBNBBUSDPoolId = exports.WS_ETHBUSDPoolId = exports.WS_WAULTXWBNBPoolId = exports.WS_ALPACAWBNBPoolId = exports.WS_WEXWBNBPoolId = exports.ScientixGrassHousePoolId = exports.MarsEcosystemLiquidityMiningMasterPoolId = exports.LatteSwapMasterBaristaIbAlpacaLATTEPoolId = exports.ScientixStakingPoolsIbAlpacaSCIXPoolId = exports.GrazingRangeIbAlpacaETERNALPoolId = exports.GrazingRangeIbAlpacaPLUTPoolId = exports.GrazingRangeIbAlpacaSPSPoolId = exports.GrazingRangeIbAlpacaCAPSPoolId = exports.GrazingRangeIbAlpacaTENPoolId = exports.GrazingRangeIbAlpacaDEPPoolId = exports.GrazingRangeIbAlpacaWNOWPoolId = exports.GrazingRangeIbAlpacaLEONPoolId = exports.GrazingRangeIbAlpacaXWINPoolId = exports.GrazingRangeIbAlpacaARVPoolId = exports.GrazingRangeIbAlpacaSKILLPoolId = exports.GrazingRangeIbAlpacaNFTYPoolId = exports.GrazingRangeIbAlpacaSHEESHAPoolId = exports.GrazingRangeIbAlpacaBMONPoolId = exports.GrazingRangeIbAlpacaMONIPoolId = exports.GrazingRangeIbAlpacaPOLARPoolId = exports.GrazingRangeIbAlpacaLUCKYPoolId = exports.GrazingRangeIbAlpacaPOTSPoolId = void 0;
const index_1 = require("./index");
exports.PancakeSyrupPoolId = 0;
exports.AlpacaWBNBLPTokenPoolId = (_a = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ALPACA-WBNB LP (Legacy)')) === null || _a === void 0 ? void 0 : _a.id;
exports.AlpacaWBNBLPTokenV2PoolId = (_b = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ALPACA-WBNB LP')) === null || _b === void 0 ? void 0 : _b.id;
exports.PancakeAUSDBUSDPoolId = (_c = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'AUSD-BUSD LP')) === null || _c === void 0 ? void 0 : _c.id;
exports.IbWBNBPoolId = (_d = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibWBNB')) === null || _d === void 0 ? void 0 : _d.id;
exports.IbBUSDPoolId = (_e = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibBUSD')) === null || _e === void 0 ? void 0 : _e.id;
exports.IbETHPoolId = (_f = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibETH')) === null || _f === void 0 ? void 0 : _f.id;
exports.IbALPACAPoolId = (_g = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibALPACA')) === null || _g === void 0 ? void 0 : _g.id;
exports.IbUSDTPoolId = (_h = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibUSDT')) === null || _h === void 0 ? void 0 : _h.id;
exports.IbBTCBPoolId = (_j = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibBTCB')) === null || _j === void 0 ? void 0 : _j.id;
exports.IbTUSDPoolId = (_k = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibTUSD')) === null || _k === void 0 ? void 0 : _k.id;
exports.IbUSDCPoolId = (_l = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'ibUSDC')) === null || _l === void 0 ? void 0 : _l.id;
exports.IbDebtTokenBNBPoolId = (_m = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBNB V2')) === null || _m === void 0 ? void 0 : _m.id;
exports.IbDebtTokenBUSDPoolId = (_o = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBUSD V2')) === null || _o === void 0 ? void 0 : _o.id;
exports.IbDebtTokenETHPoolId = (_p = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbETH V2')) === null || _p === void 0 ? void 0 : _p.id;
exports.IbDebtTokenALPACAPoolId = (_q = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbALPACA V2')) === null || _q === void 0 ? void 0 : _q.id;
exports.IbDebtTokenUSDTPoolId = (_r = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDT V2')) === null || _r === void 0 ? void 0 : _r.id;
exports.IbDebtTokenBTCBPoolId = (_s = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBTCB V2')) === null || _s === void 0 ? void 0 : _s.id;
exports.IbDebtTokenTUSDPoolId = (_t = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbTUSD V2')) === null || _t === void 0 ? void 0 : _t.id;
exports.IbDebtTokenUSDCPoolId = (_u = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDC V2')) === null || _u === void 0 ? void 0 : _u.id;
exports.StronkAlpacaPoolId = (_v = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'sALPACA')) === null || _v === void 0 ? void 0 : _v.id;
exports.PancakeCAKEWBNBPoolId = (_w = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-WBNB LP')) === null || _w === void 0 ? void 0 : _w.pId;
exports.PancakeBTCBWBNBPoolId = (_x = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-WBNB LP')) === null || _x === void 0 ? void 0 : _x.pId;
exports.PancakeETHWBNBPoolId = (_y = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-WBNB LP')) === null || _y === void 0 ? void 0 : _y.pId;
exports.PancakeDOTWBNBPoolId = (_z = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DOT-WBNB LP')) === null || _z === void 0 ? void 0 : _z.pId;
exports.PancakeUNIWBNBPoolId = (_0 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UNI-WBNB LP')) === null || _0 === void 0 ? void 0 : _0.pId;
exports.PancakeLINKWBNBPoolId = (_1 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'LINK-WBNB LP')) === null || _1 === void 0 ? void 0 : _1.pId;
exports.PancakeXVSWBNBPoolId = (_2 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'XVS-WBNB LP')) === null || _2 === void 0 ? void 0 : _2.pId;
exports.PancakeYFIWBNBPoolId = (_3 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'YFI-WBNB LP')) === null || _3 === void 0 ? void 0 : _3.pId;
exports.PancakeITAMWBNBPoolId = (_4 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ITAM-WBNB LP')) === null || _4 === void 0 ? void 0 : _4.pId;
exports.PancakeBMXXBNBPoolId = (_5 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'bMXX-WBNB LP')) === null || _5 === void 0 ? void 0 : _5.pId;
exports.PancakeBELTBNBPoolId = (_6 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BELT-WBNB LP')) === null || _6 === void 0 ? void 0 : _6.pId;
exports.PancakeBORBNBPoolId = (_7 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BOR-WBNB LP')) === null || _7 === void 0 ? void 0 : _7.pId;
exports.PancakeBRYBNBPoolId = (_8 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BRY-WBNB LP')) === null || _8 === void 0 ? void 0 : _8.pId;
exports.PancakePCWSBNBPoolId = (_9 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'pCWS-WBNB LP')) === null || _9 === void 0 ? void 0 : _9.pId;
exports.PancakeSWINGBYBNBPoolId = (_10 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SWINGBY-WBNB LP')) === null || _10 === void 0 ? void 0 : _10.pId;
exports.PancakeDODOBNBPoolId = (_11 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DODO-WBNB LP')) === null || _11 === void 0 ? void 0 : _11.pId;
exports.PancakeUSDTBNBPoolId = (_12 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-WBNB LP')) === null || _12 === void 0 ? void 0 : _12.pId;
exports.PancakeODDZBNBPoolId = (_13 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ODDZ-WBNB LP')) === null || _13 === void 0 ? void 0 : _13.pId;
exports.PancakeADABNBPoolId = (_14 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ADA-WBNB LP')) === null || _14 === void 0 ? void 0 : _14.pId;
exports.PancakeTRXBNBPoolId = (_15 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-WBNB LP')) === null || _15 === void 0 ? void 0 : _15.pId;
exports.PancakeBTTBNBPoolId = (_16 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-WBNB LP')) === null || _16 === void 0 ? void 0 : _16.pId;
exports.PancakeAXSBNBPoolId = (_17 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'AXS-WBNB LP')) === null || _17 === void 0 ? void 0 : _17.pId;
exports.PancakeMBOXBNBPoolId = (_18 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'MBOX-WBNB LP')) === null || _18 === void 0 ? void 0 : _18.pId;
exports.PancakeNAOSBNBPoolId = (_19 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'NAOS-WBNB LP')) === null || _19 === void 0 ? void 0 : _19.pId;
exports.PancakeDVIBNBPoolId = (_20 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DVI-WBNB LP')) === null || _20 === void 0 ? void 0 : _20.pId;
exports.PancakeQBTBNBPoolId = (_21 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'QBT-WBNB LP')) === null || _21 === void 0 ? void 0 : _21.pId;
exports.PancakeBMONBNBPoolId = (_22 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-WBNB LP')) === null || _22 === void 0 ? void 0 : _22.pId;
exports.PancakeSPSBNBPoolId = (_23 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SPS-WBNB LP')) === null || _23 === void 0 ? void 0 : _23.pId;
exports.PancakeETERNALBNBPoolId = (_24 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETERNAL-WBNB LP')) === null || _24 === void 0 ? void 0 : _24.pId;
exports.PancakeTHGBNBPoolId = (_25 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'THG-WBNB LP')) === null || _25 === void 0 ? void 0 : _25.pId;
exports.PancakeBTCBBUSDPoolId = (_26 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _26 === void 0 ? void 0 : _26.pId;
exports.PancakeUSDTBUSDPoolId = (_27 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _27 === void 0 ? void 0 : _27.pId;
exports.PancakeWBNBBUSDPoolId = (_28 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _28 === void 0 ? void 0 : _28.pId;
exports.PancakeVAIBUSDPoolId = (_29 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'VAI-BUSD LP')) === null || _29 === void 0 ? void 0 : _29.pId;
exports.PancakeUSDCBUSDPoolId = (_30 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-BUSD LP')) === null || _30 === void 0 ? void 0 : _30.pId;
exports.PancakeDAIBUSDPoolId = (_31 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DAI-BUSD LP')) === null || _31 === void 0 ? void 0 : _31.pId;
exports.PancakeUSTBUSDPoolId = (_32 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UST-BUSD LP')) === null || _32 === void 0 ? void 0 : _32.pId;
exports.PancakeCAKEBUSDPoolId = (_33 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-BUSD LP')) === null || _33 === void 0 ? void 0 : _33.pId;
exports.PancakeFORMBUSDPoolId = (_34 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'FORM-BUSD LP')) === null || _34 === void 0 ? void 0 : _34.pId;
exports.PancakeTUSDBUSDPoolId = (_35 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TUSD-BUSD LP')) === null || _35 === void 0 ? void 0 : _35.pId;
exports.PancakeORBSBUSDPoolId = (_36 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ORBS-BUSD LP')) === null || _36 === void 0 ? void 0 : _36.pId;
exports.PancakeTRXBUSDPoolId = (_37 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-BUSD LP')) === null || _37 === void 0 ? void 0 : _37.pId;
exports.PancakeBTTBUSDPoolId = (_38 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-BUSD LP')) === null || _38 === void 0 ? void 0 : _38.pId;
exports.PancakePMONBUSDPoolId = (_39 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PMON-BUSD LP')) === null || _39 === void 0 ? void 0 : _39.pId;
exports.PancakePHABUSDPoolId = (_40 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PHA-BUSD LP')) === null || _40 === void 0 ? void 0 : _40.pId;
exports.PancakePOTSBUSDPoolId = (_41 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'POTS-BUSD LP')) === null || _41 === void 0 ? void 0 : _41.pId;
exports.PancakeBMONBUSDPoolId = (_42 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-BUSD LP')) === null || _42 === void 0 ? void 0 : _42.pId;
exports.PancakeHIGHBUSDPoolId = (_43 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'HIGH-BUSD LP')) === null || _43 === void 0 ? void 0 : _43.pId;
exports.PancakeBETHETHPoolId = (_44 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _44 === void 0 ? void 0 : _44.pId;
exports.PancakeCOMPETHPoolId = (_45 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'COMP-ETH LP')) === null || _45 === void 0 ? void 0 : _45.pId;
exports.PancakeSUSHIETHPoolId = (_46 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SUSHI-ETH LP')) === null || _46 === void 0 ? void 0 : _46.pId;
exports.PancakeCAKEUSDTPoolId = (_47 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-USDT LP')) === null || _47 === void 0 ? void 0 : _47.pId;
exports.PancakeUSDCUSDTPoolId = (_48 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _48 === void 0 ? void 0 : _48.pId;
exports.PancakeETHBTCBPoolId = (_49 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _49 === void 0 ? void 0 : _49.pId;
exports.PancakeBUSDALPACAPoolId = (_50 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ALPACA-BUSD LP')) === null || _50 === void 0 ? void 0 : _50.pId;
// USDC
exports.PancakeETHUSDCPoolId = (_51 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-USDC LP')) === null || _51 === void 0 ? void 0 : _51.pId;
// =================== Alpaca GrazingRange (GR) ===================
exports.GrazingRangeIbAlpacaBUSD1PoolId = (_52 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BUSD')) === null || _52 === void 0 ? void 0 : _52.id;
exports.GrazingRangeIbAlpacaBUSD2PoolId = (_53 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BUSD-2')) === null || _53 === void 0 ? void 0 : _53.id;
exports.GrazingRangeIbAlpacaBUSD3PoolId = (_54 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BUSD-3')) === null || _54 === void 0 ? void 0 : _54.id;
exports.GrazingRangeIbAlpacaBUSD4PoolId = (_55 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BUSD-4')) === null || _55 === void 0 ? void 0 : _55.id;
exports.GrazingRangeIbAlpacabMXX1PoolId = (_56 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-bMXX')) === null || _56 === void 0 ? void 0 : _56.id;
exports.GrazingRangeIbAlpacaBELTPoolId = (_57 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BELT')) === null || _57 === void 0 ? void 0 : _57.id;
exports.GrazingRangeIbAlpacaBORPoolId = (_58 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BOR')) === null || _58 === void 0 ? void 0 : _58.id;
exports.GrazingRangeIbAlpacaBRYPoolId = (_59 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BRY')) === null || _59 === void 0 ? void 0 : _59.id;
exports.GrazingRangeIbAlpacaCWSPoolId = (_60 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-pCWS')) === null || _60 === void 0 ? void 0 : _60.id;
exports.GrazingRangeIbAlpacaSWINGBYPoolId = (_61 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-SWINGBY')) === null || _61 === void 0 ? void 0 : _61.id;
exports.GrazingRangeIbAlpacaDODOPoolId = (_62 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-DODO')) === null || _62 === void 0 ? void 0 : _62.id;
exports.GrazingRangeIbAlpacaODDZPoolId = (_63 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-ODDZ')) === null || _63 === void 0 ? void 0 : _63.id;
exports.GrazingRangeIbAlpacaFORMPoolId = (_64 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-FORM')) === null || _64 === void 0 ? void 0 : _64.id;
exports.GrazingRangeIbAlpacaORBSPoolId = (_65 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-ORBS')) === null || _65 === void 0 ? void 0 : _65.id;
exports.GrazingRangeIbAlpacaWEXPoolId = (_66 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-WEX')) === null || _66 === void 0 ? void 0 : _66.id;
exports.GrazingRangeIbAlpacaPMONPoolId = (_67 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-PMON')) === null || _67 === void 0 ? void 0 : _67.id;
exports.GrazingRangeIbAlpacaPHAPoolId = (_68 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-PHA')) === null || _68 === void 0 ? void 0 : _68.id;
exports.GrazingRangeIbAlpacaALMPoolId = (_69 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-ALM')) === null || _69 === void 0 ? void 0 : _69.id;
exports.GrazingRangeIbAlpacaKALAPoolId = (_70 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-KALA')) === null || _70 === void 0 ? void 0 : _70.id;
exports.GrazingRangeIbAlpacaNAOSPoolId = (_71 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-NAOS')) === null || _71 === void 0 ? void 0 : _71.id;
exports.GrazingRangeIbAlpacaDVIPoolId = (_72 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-DVI')) === null || _72 === void 0 ? void 0 : _72.id;
exports.GrazingRangeIbAlpacaQBTPoolId = (_73 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-QBT')) === null || _73 === void 0 ? void 0 : _73.id;
exports.GrazingRangeIbAlpacaPEARPoolId = (_74 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-PEAR')) === null || _74 === void 0 ? void 0 : _74.id;
exports.GrazingRangeIbAlpacaPOTSPoolId = (_75 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-POTS')) === null || _75 === void 0 ? void 0 : _75.id;
exports.GrazingRangeIbAlpacaLUCKYPoolId = (_76 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-LUCKY')) === null || _76 === void 0 ? void 0 : _76.id;
exports.GrazingRangeIbAlpacaPOLARPoolId = (_77 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-POLAR')) === null || _77 === void 0 ? void 0 : _77.id;
exports.GrazingRangeIbAlpacaMONIPoolId = (_78 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-MONI')) === null || _78 === void 0 ? void 0 : _78.id;
exports.GrazingRangeIbAlpacaBMONPoolId = (_79 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-BMON')) === null || _79 === void 0 ? void 0 : _79.id;
exports.GrazingRangeIbAlpacaSHEESHAPoolId = (_80 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-SHEESHA')) === null || _80 === void 0 ? void 0 : _80.id;
exports.GrazingRangeIbAlpacaNFTYPoolId = (_81 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-NFTY')) === null || _81 === void 0 ? void 0 : _81.id;
exports.GrazingRangeIbAlpacaSKILLPoolId = (_82 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-SKILL')) === null || _82 === void 0 ? void 0 : _82.id;
exports.GrazingRangeIbAlpacaARVPoolId = (_83 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-ARV')) === null || _83 === void 0 ? void 0 : _83.id;
exports.GrazingRangeIbAlpacaXWINPoolId = (_84 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-xWIN')) === null || _84 === void 0 ? void 0 : _84.id;
exports.GrazingRangeIbAlpacaLEONPoolId = (_85 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-LEON')) === null || _85 === void 0 ? void 0 : _85.id;
exports.GrazingRangeIbAlpacaWNOWPoolId = (_86 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-WNOW')) === null || _86 === void 0 ? void 0 : _86.id;
exports.GrazingRangeIbAlpacaDEPPoolId = (_87 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-DEP')) === null || _87 === void 0 ? void 0 : _87.id;
exports.GrazingRangeIbAlpacaTENPoolId = (_88 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-TEN')) === null || _88 === void 0 ? void 0 : _88.id;
exports.GrazingRangeIbAlpacaCAPSPoolId = (_89 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-CAPS')) === null || _89 === void 0 ? void 0 : _89.id;
exports.GrazingRangeIbAlpacaSPSPoolId = (_90 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-SPS')) === null || _90 === void 0 ? void 0 : _90.id;
exports.GrazingRangeIbAlpacaPLUTPoolId = (_91 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-PLUT')) === null || _91 === void 0 ? void 0 : _91.id;
exports.GrazingRangeIbAlpacaETERNALPoolId = (_92 = index_1.config.GrazingRange.pools.find((o) => o.name === 'ibALPACA-ETERNAL')) === null || _92 === void 0 ? void 0 : _92.id;
// =================== Scientix StakingPools (GR) ===================
exports.ScientixStakingPoolsIbAlpacaSCIXPoolId = (_93 = index_1.config.Scientix.StakingPools.pools.find((o) => o.name === 'ibALPACA-SCIX')) === null || _93 === void 0 ? void 0 : _93.id;
// =================== LatteSwap MasterBarista (GR) ===================
exports.LatteSwapMasterBaristaIbAlpacaLATTEPoolId = (_94 = index_1.config.LatteSwap.MasterBarista.pools.find((o) => o.name === 'ibALPACA-LATTE')) === null || _94 === void 0 ? void 0 : _94.id;
// =================== MarsEcosystem LiquidityMiningMaster (GR) ===================
exports.MarsEcosystemLiquidityMiningMasterPoolId = (_95 = index_1.config.MarsEcosystem.LiquidityMiningMaster.pools.find((o) => o.name === 'ibALPACA-XMS')) === null || _95 === void 0 ? void 0 : _95.id;
// =================== Scientix Grasshouse (GH) ===================
exports.ScientixGrassHousePoolId = 8;
// Wault Pool Ids
exports.WS_WEXWBNBPoolId = (_96 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-WBNB LP')) === null || _96 === void 0 ? void 0 : _96.pId;
exports.WS_ALPACAWBNBPoolId = (_97 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-WBNB LP')) === null || _97 === void 0 ? void 0 : _97.pId;
exports.WS_WAULTXWBNBPoolId = (_98 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WAULTx-WBNB LP')) === null || _98 === void 0 ? void 0 : _98.pId;
exports.WS_ETHBUSDPoolId = (_99 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BUSD LP')) === null || _99 === void 0 ? void 0 : _99.pId;
exports.WS_WBNBBUSDPoolId = (_100 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _100 === void 0 ? void 0 : _100.pId;
exports.WS_USDTBUSDPoolId = (_101 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _101 === void 0 ? void 0 : _101.pId;
exports.WS_WUSDBUSDPoolId = (_102 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WUSD-BUSD LP')) === null || _102 === void 0 ? void 0 : _102.pId;
exports.WS_ALPACAUSDTPoolId = (_103 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-USDT LP')) === null || _103 === void 0 ? void 0 : _103.pId;
exports.WS_WEXUSDTPoolId = (_104 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-USDT LP')) === null || _104 === void 0 ? void 0 : _104.pId;
exports.WS_BTCBUSDTPoolId = (_105 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _105 === void 0 ? void 0 : _105.pId;
exports.WS_MATICUSDTPoolId = (_106 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'MATIC-USDT LP')) === null || _106 === void 0 ? void 0 : _106.pId;
exports.WS_TUSDUSDTPoolId = (_107 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'TUSD-USDT LP')) === null || _107 === void 0 ? void 0 : _107.pId;
exports.WS_ETHBTCBPoolId = (_108 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _108 === void 0 ? void 0 : _108.pId;
exports.WS_BETHETHPoolId = (_109 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _109 === void 0 ? void 0 : _109.pId;
exports.WS_ETHUSDTPoolId = (_110 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _110 === void 0 ? void 0 : _110.pId;
exports.WS_BTCBBUSDPoolId = (_111 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _111 === void 0 ? void 0 : _111.pId;
// MDEX Pool Ids
exports.MS_BTCBUSDTPoolId = (_112 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _112 === void 0 ? void 0 : _112.pId;
exports.MS_ETHUSDTPoolId = (_113 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _113 === void 0 ? void 0 : _113.pId;
exports.MS_WBNBUSDTPoolId = (_114 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-USDT LP')) === null || _114 === void 0 ? void 0 : _114.pId;
exports.MS_USDCUSDTPoolId = (_115 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _115 === void 0 ? void 0 : _115.pId;
exports.MS_DAIUSDTPoolId = (_116 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'DAI-USDT LP')) === null || _116 === void 0 ? void 0 : _116.pId;
exports.MS_MDXWBNBPoolId = (_117 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-WBNB LP')) === null || _117 === void 0 ? void 0 : _117.pId;
exports.MS_MDXBUSDPoolId = (_118 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-BUSD LP')) === null || _118 === void 0 ? void 0 : _118.pId;
exports.MS_WBNBBUSDPoolId = (_119 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _119 === void 0 ? void 0 : _119.pId;
exports.MS_WBNBETHPoolId = (_120 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-ETH LP')) === null || _120 === void 0 ? void 0 : _120.pId;
exports.MS_ETHBTCBPoolId = (_121 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _121 === void 0 ? void 0 : _121.pId;
exports.MS_WBNBBTCBPoolId = (_122 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BTCB LP')) === null || _122 === void 0 ? void 0 : _122.pId;