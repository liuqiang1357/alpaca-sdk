"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ODDZAddress = exports.WAULTXAddress = exports.WEXAddress = exports.DODOAddress = exports.SWINGBYAddress = exports.PCWSAddress = exports.BRYAddress = exports.BORAddress = exports.BELTAddress = exports.BMXXAddress = exports.ITAMAddress = exports.SUSHIAddress = exports.COMPAddress = exports.BETHAddress = exports.USTAddress = exports.DAIAddress = exports.USDCAddress = exports.VAIAddress = exports.YFIAddress = exports.XVSAddress = exports.LINKAddress = exports.UNIAddress = exports.DOTAddress = exports.ETHAddress = exports.BTCBAddress = exports.USDTAddress = exports.SYRUPAddress = exports.CAKEAddress = exports.BUSDAddress = exports.WBNBAddress = exports.StronkAlpacaAddress = exports.AlpacaTokenAddress = exports.AUSDBUSDLpTokenAddress = exports.StronkAlpacaAlpacaLpAddress = exports.AlpacaBNBLpV2Address = exports.AlpacaBNBLpAddress = exports.FairLaunchAddress = exports.USDCVaultAddress = exports.TUSDVaultAddress = exports.BTCBVaultAddress = exports.USDTVaultAddress = exports.ALPACAVaultAddress = exports.ETHVaultAddress = exports.BUSDVaultAddress = exports.BNBVaultAddress = exports.ApeSwapFactoryAddress = exports.MdexswapFactoryAddress = exports.WaultswapFactoryAddress = exports.PancakeFactoryV2Address = exports.UniswapV2FactoryAddress = void 0;
exports.UNIBNBPancakeswapWorkerAddress = exports.DOTBNBPancakeswapWorkerAddress = exports.ETHBNBPancakeswapWorkerAddress = exports.BTCBBNBPancakeswapWorkerAddress = exports.CAKEBNBPancakeswapWorkerAddress = exports.DLTAAddress = exports.HIGHAddress = exports.LANDAddress = exports.PAYBSWAPAddress = exports.THGAddress = exports.ETERNALAddress = exports.PLUTAddress = exports.SPSAddress = exports.CAPSAddress = exports.TENFIAddress = exports.DEPAddress = exports.WNOWAddress = exports.LEONAddress = exports.XWINAddress = exports.ARVAddress = exports.XMSAddress = exports.SKILLAddress = exports.NFTYAddress = exports.SHEESHAAddress = exports.BMONAddress = exports.MONIAddress = exports.POLARAddress = exports.LUCKYAddress = exports.POTSAddress = exports.PEARAddress = exports.QBTAddress = exports.LATTEAddress = exports.DVIAddress = exports.MDEXAddress = exports.NAOSAddress = exports.MBOXAddress = exports.KALAAddress = exports.ALMAddress = exports.PHAAddress = exports.WUSDAddress = exports.SCIXAddress = exports.PMONAddress = exports.AXSAddress = exports.ORBSAddress = exports.BTTAddress = exports.TRXAddress = exports.TUSDAddress = exports.MATICAddress = exports.FORMAddress = exports.ADAAddress = void 0;
exports.BRYBNBPancakeswapWorkerConfig = exports.BORBNBPancakeswapWorkerConfig = exports.BELTBNBPancakeswapWorkerConfig = exports.BMXXBNBPancakeswapWorkerConfig = exports.BUSDBNBPancakeswapWorkerConfig = exports.ITAMBNBPancakeswapWorkerConfig = exports.YFIBNBPancakeswapWorkerConfig = exports.XVSBNBPancakeswapWorkerConfig = exports.LINKBNBPancakeswapWorkerConfig = exports.UNIBNBPancakeswapWorkerConfig = exports.DOTBNBPancakeswapWorkerConfig = exports.ETHBNBPancakeswapWorkerConfig = exports.BTCBBNBPancakeswapWorkerConfig = exports.CAKEBNBPancakeswapWorkerConfig = exports.BTCBWBNBMdexWorkerAddress = exports.BUSDWBNBMdexWorkerAddress = exports.ETHWBNBMdexWorkerAddress = exports.USDTWBNBMdexWorkerAddress = exports.MDXBNBMdexWorkerAddress = exports.WAULTXBNBWaultswapWorkerAddress = exports.ALPACABNBWaultswapWorkerAddress = exports.BUSDBNBWaultswapWorkerAddress = exports.WEXBNBWaultswapWorkerAddress = exports.BNBPancakeswapCakeMaxiWorkerAddress = exports.THGBNBPancakeswapWorkerAddress = exports.ETERNALBNBPancakeswapWorkerAddress = exports.SPSBNBPancakeswapWorkerAddress = exports.BMONBNBPancakeswapWorkerAddress = exports.QBTBNBPancakeswapWorkerAddress = exports.DVIBNBPancakeswapWorkerAddress = exports.NAOSBNBPancakeswapWorkerAddress = exports.MBOXBNBPancakeswapWorkerAddress = exports.AXSBNBPancakeswapWorkerAddress = exports.BTTBNBPancakeswapWorkerAddress = exports.TRXBNBPancakeswapWorkerAddress = exports.ADABNBPancakeswapWorkerAddress = exports.ODDZBNBPancakeswapWorkerAddress = exports.USDTBNBPancakeswapWorkerAddress = exports.DODOBNBPancakeswapWorkerAddress = exports.SWINGBYBNBPancakeswapWorkerAddress = exports.PCWSBNBPancakeswapWorkerAddress = exports.BRYBNBPancakeswapWorkerAddress = exports.BORBNBPancakeswapWorkerAddress = exports.BELTBNBPancakeswapWorkerAddress = exports.BMXXBNBPancakeswapWorkerAddress = exports.BUSDBNBPancakeswapWorkerAddress = exports.ITAMBNBPancakeswapWorkerAddress = exports.YFIBNBPancakeswapWorkerAddress = exports.XVSBNBPancakeswapWorkerAddress = exports.LINKBNBPancakeswapWorkerAddress = void 0;
exports.AXSBNBPancakeswapWorkerStrategies = exports.BTTBNBPancakeswapWorkerStrategies = exports.TRXBNBPancakeswapWorkerStrategies = exports.ADABNBPancakeswapWorkerStrategies = exports.ODDZBNBPancakeswapWorkerStrategies = exports.USDTBNBPancakeswapWorkerStrategies = exports.DODOBNBPancakeswapWorkerStrategies = exports.SWINGBYBNBPancakeswapWorkerStrategies = exports.PCWSBNBPancakeswapWorkerStrategies = exports.BRYBNBPancakeswapWorkerStrategies = exports.BORBNBPancakeswapWorkerStrategies = exports.BELTBNBPancakeswapWorkerStrategies = exports.BMXXBNBPancakeswapWorkerStrategies = exports.BUSDBNBPancakeswapWorkerStrategies = exports.ITAMBNBPancakeswapWorkerStrategies = exports.YFIBNBPancakeswapWorkerStrategies = exports.XVSBNBPancakeswapWorkerStrategies = exports.LINKBNBPancakeswapWorkerStrategies = exports.UNIBNBPancakeswapWorkerStrategies = exports.DOTBNBPancakeswapWorkerStrategies = exports.ETHBNBPancakeswapWorkerStrategies = exports.BTCBBNBPancakeswapWorkerStrategies = exports.CAKEBNBPancakeswapWorkerStrategies = exports.BTCBWBNBMdexWorkerConfig = exports.BUSDWBNBMdexWorkerConfig = exports.ETHWBNBMdexWorkerConfig = exports.USDTWBNBMdexWorkerConfig = exports.MDXBNBMdexWorkerConfig = exports.WAULTXBNBWaultswapWorkerConfig = exports.ALPACABNBWaultswapWorkerConfig = exports.BUSDBNBWaultswapWorkerConfig = exports.WEXBNBWaultswapWorkerConfig = exports.BNBPancakeswapCakeMaxiWorkerConfig = exports.THGBNBPancakeswapWorkerConfig = exports.ETERNALBNBPancakeswapWorkerConfig = exports.SPSBNBPancakeswapWorkerConfig = exports.BMONBNBPancakeswapWorkerConfig = exports.QBTBNBPancakeswapWorkerConfig = exports.DVIBNBPancakeswapWorkerConfig = exports.NAOSBNBPancakeswapWorkerConfig = exports.MBOXBNBPancakeswapWorkerConfig = exports.AXSBNBPancakeswapWorkerConfig = exports.BTTBNBPancakeswapWorkerConfig = exports.TRXBNBPancakeswapWorkerConfig = exports.ADABNBPancakeswapWorkerConfig = exports.ODDZBNBPancakeswapWorkerConfig = exports.USDTBNBPancakeswapWorkerConfig = exports.DODOBNBPancakeswapWorkerConfig = exports.SWINGBYBNBPancakeswapWorkerConfig = exports.PCWSBNBPancakeswapWorkerConfig = void 0;
exports.USDCBUSDPancakeswapWorkerConfig = exports.VAIBUSDPancakeswapWorkerConfig = exports.BNBBUSDPancakeswapWorkerConfig = exports.USDTBUSDPancakeswapWorkerConfig = exports.BTCBBUSDPancakeswapWorkerConfig = exports.WBNBBUSDMdexWorkerAddress = exports.MDXBUSDMdexWorkerAddress = exports.WUSDBUSDWaultswapWorkerAddress = exports.BTCBBUSDWaultswapWorkerAddress = exports.USDTBUSDWaultswapWorkerAddress = exports.BNBBUSDWaultswapWorkerAddress = exports.ETHBUSDWaultswapWorkerAddress = exports.BUSDPancakeswapCakeMaxiWorkerAddress = exports.HIGHBUSDPancakeswapWorkerAddress = exports.BMONBUSDPancakeswapWorkerAddress = exports.POTSBUSDPancakeswapWorkerAddress = exports.PHABUSDPancakeswapWorkerAddress = exports.PMONBUSDPancakeswapWorkerAddress = exports.BTTBUSDPancakeswapWorkerAddress = exports.TRXBUSDPancakeswapWorkerAddress = exports.ORBSBUSDPancakeswapWorkerAddress = exports.TUSDBUSDPancakeswapWorkerAddress = exports.FORMBUSDPancakeswapWorkerAddress = exports.CAKEBUSDPancakeswapWorkerAddress = exports.ALPACABUSDPancakeswapWorkerAddress = exports.USTBUSDPancakeswapWorkerAddress = exports.DAIBUSDPancakeswapWorkerAddress = exports.USDCBUSDPancakeswapWorkerAddress = exports.VAIBUSDPancakeswapWorkerAddress = exports.BNBBUSDPancakeswapWorkerAddress = exports.USDTBUSDPancakeswapWorkerAddress = exports.BTCBBUSDPancakeswapWorkerAddress = exports.BTCBWBNBMdexworkerStrategies = exports.BUSDWBNBMdexworkerStrategies = exports.ETHWBNBMdexworkerStrategies = exports.USDTWBNBMdexworkerStrategies = exports.MDXBNBMdexworkerStrategies = exports.WAULTXBNBWaultswapWorkerStrategies = exports.ALPACABNBWaultswapWorkerStrategies = exports.BUSDBNBWaultswapWorkerStrategies = exports.WEXBNBWaultswapWorkerStrategies = exports.BNBPancakeswapCakeMaxiWorkerStrategies = exports.THGBNBPancakeswapWorkerStrategies = exports.ETERNALBNBPancakeswapWorkerStrategies = exports.SPSBNBPancakeswapWorkerStrategies = exports.BMONBNBPancakeswapWorkerStrategies = exports.QBTBNBPancakeswapWorkerStrategies = exports.DVIBNBPancakeswapWorkerStrategies = exports.NAOSBNBPancakeswapWorkerStrategies = exports.MBOXBNBPancakeswapWorkerStrategies = void 0;
exports.BETHETHPancakeswapWorkerAddress = exports.WBNBBUSDMdexWorkerStrategies = exports.MDXBUSDMdexWorkerStrategies = exports.WUSDBUSDWaultswapWorkerStrategies = exports.BTCBBUSDWaultswapWorkerStrategies = exports.USDTBUSDWaultswapWorkerStrategies = exports.BNBBUSDWaultswapWorkerStrategies = exports.ETHBUSDWaultswapWorkerStrategies = exports.BUSDPancakeswapCakeMaxiWorkerStrategies = exports.HIGHBUSDPancakeswapWorkerStrategies = exports.BMONBUSDPancakeswapWorkerStrategies = exports.POTSBUSDPancakeswapWorkerStrategies = exports.PHABUSDPancakeswapWorkerStrategies = exports.PMONBUSDPancakeswapWorkerStrategies = exports.BTTBUSDPancakeswapWorkerStrategies = exports.TRXBUSDPancakeswapWorkerStrategies = exports.ORBSBUSDPancakeswapWorkerStrategies = exports.TUSDBUSDPancakeswapWorkerStrategies = exports.FORMBUSDPancakeswapWorkerStrategies = exports.CAKEBUSDPancakeswapWorkerStrategies = exports.ALPACABUSDPancakeswapWorkerStrategies = exports.USTBUSDPancakeswapWorkerStrategies = exports.DAIBUSDPancakeswapWorkerStrategies = exports.USDCBUSDPancakeswapWorkerStrategies = exports.VAIBUSDPancakeswapWorkerStrategies = exports.BNBBUSDPancakeswapWorkerStrategies = exports.USDTBUSDPancakeswapWorkerStrategies = exports.BTCBBUSDPancakeswapWorkerStrategies = exports.WBNBBUSDMdexWorkerConfig = exports.MDXBUSDMdexWorkerConfig = exports.WUSDBUSDWaultswapWorkerConfig = exports.BTCBBUSDWaultswapWorkerConfig = exports.USDTBUSDWaultswapWorkerConfig = exports.BNBBUSDWaultswapWorkerConfig = exports.ETHBUSDWaultswapWorkerConfig = exports.BUSDPancakeswapCakeMaxiWorkerConfig = exports.HIGHBUSDPancakeswapWorkerConfig = exports.BMONBUSDPancakeswapWorkerConfig = exports.POTSBUSDPancakeswapWorkerConfig = exports.PHABUSDPancakeswapWorkerConfig = exports.PMONBUSDPancakeswapWorkerConfig = exports.BTTBUSDPancakeswapWorkerConfig = exports.TRXBUSDPancakeswapWorkerConfig = exports.ORBSBUSDPancakeswapWorkerConfig = exports.TUSDBUSDPancakeswapWorkerConfig = exports.FORMBUSDPancakeswapWorkerConfig = exports.CAKEBUSDPancakeswapWorkerConfig = exports.ALPACABUSDPancakeswapWorkerConfig = exports.USTBUSDPancakeswapWorkerConfig = exports.DAIBUSDPancakeswapWorkerConfig = void 0;
exports.BTCBUSDTWaultswapWorkerAddress = exports.BUSDUSDTWaultswapWorkerAddress = exports.WEXUSDTWaultswapWorkerAddress = exports.ALPACAUSDTWaultswapWorkerAddress = exports.USDTPancakeswapCakeMaxiWorkerAddress = exports.USDCUSDTPancakeswapWorkerAddress = exports.CAKEUSDTPancakeswapWorkerAddress = exports.BUSDUSDTPancakeswapWorkerAddress = exports.BNBUSDTPancakeswapWorkerAddress = exports.BTCBETHMdexWorkerStrategies = exports.WBNBETHMdexWorkerStrategies = exports.USDTETHMdexWorkerStrategies = exports.USDTETHWaultswapWorkerStrategies = exports.BETHETHWaultswapWorkerStrategies = exports.BTCBETHWaultswapWorkerStrategies = exports.BUSDETHWaultswapWorkerStrategies = exports.ETHPancakeswapCakeMaxiWorkerStrategies = exports.USDCETHPancakeswapWorkerStrategies = exports.BTCBETHPancakeswapWorkerStrategies = exports.BNBETHPancakeswapWorkerStrategies = exports.SUSHIETHPancakeswapWorkerStrategies = exports.COMPETHPancakeswapWorkerStrategies = exports.BETHETHPancakeswapWorkerStrategies = exports.BTCBETHMdexWorkerConfig = exports.WBNBETHMdexWorkerConfig = exports.USDTETHMdexWorkerConfig = exports.USDTETHWaultswapWorkerConfig = exports.BETHETHWaultswapWorkerConfig = exports.BTCBETHWaultswapWorkerConfig = exports.BUSDETHWaultswapWorkerConfig = exports.ETHPancakeswapCakeMaxiWorkerConfig = exports.USDCETHPancakeswapWorkerConfig = exports.BTCBETHPancakeswapWorkerConfig = exports.BNBETHPancakeswapWorkerConfig = exports.SUSHIETHPancakeswapWorkerConfig = exports.COMPETHPancakeswapWorkerConfig = exports.BETHETHPancakeswapWorkerConfig = exports.BTCBETHMdexWorkerAddress = exports.WBNBETHMdexWorkerAddress = exports.USDTETHMdexWorkerAddress = exports.USDTETHWaultswapWorkerAddress = exports.BETHETHWaultswapWorkerAddress = exports.BTCBETHWaultswapWorkerAddress = exports.BUSDETHWaultswapWorkerAddress = exports.ETHPancakeswapCakeMaxiWorkerAddress = exports.USDCETHPancakeswapWorkerAddress = exports.BTCBETHPancakeswapWorkerAddress = exports.BNBETHPancakeswapWorkerAddress = exports.SUSHIETHPancakeswapWorkerAddress = exports.COMPETHPancakeswapWorkerAddress = void 0;
exports.USDTBTCBMdexWorkerAddress = exports.BUSDBTCBWaultswapWorkerAddress = exports.USDTBTCBWaultswapWorkerAddress = exports.ETHBTCBWaultswapWorkerAddress = exports.BTCBPancakeswapCakeMaxiWorkerAddress = exports.ETHBTCBPancakeswapWorkerAddress = exports.BUSDBTCBPancakeswapWorkerAddress = exports.BNBBTCBPancakeswapWorkerAddress = exports.DAIUSDTMdexWorkerStrategies = exports.USDCUSDTMdexWorkerStrategies = exports.WBNBUSDTMdexWorkerStrategies = exports.ETHUSDTMdexWorkerStrategies = exports.BTCBUSDTMdexWorkerStrategies = exports.TUSDUSDTWaultswapWorkerStrategies = exports.MATICUSDTWaultswapWorkerStrategies = exports.ETHUSDTWaultswapWorkerStrategies = exports.BTCBUSDTWaultswapWorkerStrategies = exports.BUSDUSDTWaultswapWorkerStrategies = exports.WEXUSDTWaultswapWorkerStrategies = exports.ALPACAUSDTWaultswapWorkerStrategies = exports.USDTPancakeswapCakeMaxiWorkerStrategies = exports.USDCUSDTPancakeswapWorkerStrategies = exports.CAKEUSDTPancakeswapWorkerStrategies = exports.BUSDUSDTPancakeswapWorkerStrategies = exports.BNBUSDTPancakeswapWorkerStrategies = exports.DAIUSDTMdexWorkerConfig = exports.USDCUSDTMdexWorkerConfig = exports.WBNBUSDTMdexWorkerConfig = exports.ETHUSDTMdexWorkerConfig = exports.BTCBUSDTMdexWorkerConfig = exports.TUSDUSDTWaultswapWorkerConfig = exports.MATICUSDTWaultswapWorkerConfig = exports.ETHUSDTWaultswapWorkerConfig = exports.BTCBUSDTWaultswapWorkerConfig = exports.BUSDUSDTWaultswapWorkerConfig = exports.WEXUSDTWaultswapWorkerConfig = exports.ALPACAUSDTWaultswapWorkerConfig = exports.USDTPancakeswapCakeMaxiWorkerConfig = exports.USDCUSDTPancakeswapWorkerConfig = exports.CAKEUSDTPancakeswapWorkerConfig = exports.BUSDUSDTPancakeswapWorkerConfig = exports.BNBUSDTPancakeswapWorkerConfig = exports.DAIUSDTMdexWorkerAddress = exports.USDCUSDTMdexWorkerAddress = exports.WBNBUSDTMdexWorkerAddress = exports.ETHUSDTMdexWorkerAddress = exports.BTCBUSDTMdexWorkerAddress = exports.TUSDUSDTWaultswapWorkerAddress = exports.MATICUSDTWaultswapWorkerAddress = exports.ETHUSDTWaultswapWorkerAddress = void 0;
exports.DebtTokenBNBAddress = exports.USDCPancakeswapCakeMaxiWorkerStrategies = exports.USDTUSDCPancakeswapWorkerStrategies = exports.ETHUSDCPancakeswapWorkerStrategies = exports.USDCPancakeswapCakeMaxiWorkerConfig = exports.USDTUSDCPancakeswapWorkerConfig = exports.ETHUSDCPancakeswapWorkerConfig = exports.USDCPancakeswapCakeMaxiWorkerAddress = exports.USDTUSDCPancakeswapWorkerAddress = exports.ETHUSDCPancakeswapWorkerAddress = exports.USDTTUSDWaultswapWorkerStrategies = exports.TUSDPancakeswapCakeMaxiWorkerStrategies = exports.BUSDTUSDPancakeswapWorkerStrategies = exports.USDTTUSDWaultswapWorkerConfig = exports.TUSDPancakeswapCakeMaxiWorkerConfig = exports.BUSDTUSDPancakeswapWorkerConfig = exports.USDTTUSDWaultswapWorkerAddress = exports.TUSDPancakeswapCakeMaxiWorkerAddress = exports.BUSDTUSDPancakeswapWorkerAddress = exports.BNBALPACAWaultswapWorkerStrategies = exports.USDTALPACAWaultswapWorkerStrategies = exports.BUSDALPACAPancakeswapWorkerStrategies = exports.BNBALPACAWaultswapWorkerConfig = exports.USDTALPACAWaultswapWorkerConfig = exports.BUSDALPACAPancakeswapWorkerConfig = exports.BNBALPACAWaultswapWorkerAddress = exports.USDTALPACAWaultswapWorkerAddress = exports.BUSDALPACAPancakeswapWorkerAddress = exports.WBNBBTCBMdexWorkerStrategies = exports.ETHBTCBMdexWorkerStrategies = exports.USDTBTCBMdexWorkerStrategies = exports.BUSDBTCBWaultswapWorkerStrategies = exports.USDTBTCBWaultswapWorkerStrategies = exports.ETHBTCBWaultswapWorkerStrategies = exports.BTCBPancakeswapCakeMaxiWorkerStrategies = exports.ETHBTCBPancakeswapWorkerStrategies = exports.BUSDBTCBPancakeswapWorkerStrategies = exports.BNBBTCBPancakeswapWorkerStrategies = exports.WBNBBTCBMdexWorkerConfig = exports.ETHBTCBMdexWorkerConfig = exports.USDTBTCBMdexWorkerConfig = exports.BUSDBTCBWaultswapWorkerConfig = exports.USDTBTCBWaultswapWorkerConfig = exports.ETHBTCBWaultswapWorkerConfig = exports.BTCBPancakeswapCakeMaxiWorkerConfig = exports.ETHBTCBPancakeswapWorkerConfig = exports.BUSDBTCBPancakeswapWorkerConfig = exports.BNBBTCBPancakeswapWorkerConfig = exports.WBNBBTCBMdexWorkerAddress = exports.ETHBTCBMdexWorkerAddress = void 0;
exports.ORBSBUSDLpTokenAddress = exports.TUSDBUSDLpTokenAddress = exports.FORMBUSDLpTokenAddress = exports.CAKEBUSDLpTokenAddress = exports.ALPACABUSDLpTokenAddress = exports.USTBUSDLpTokenAddress = exports.DAIBUSDLpTokenAddress = exports.USDCBUSDLpTokenAddress = exports.VAIBUSDLpTokenAddress = exports.WBNBBUSDLpTokenAddress = exports.USDTBUSDLpTokenAddress = exports.BTCBBUSDLpTokenAddress = exports.THGBNBLpTokenAddress = exports.ETERNALBNBLpTokenAddress = exports.SPSBNBLpTokenAddress = exports.BMONBNBLpTokenAddress = exports.QBTBNBLpTokenAddress = exports.DVIBNBLpTokenAddress = exports.NAOSBNBLpTokenAddress = exports.MBOXBNBLpTokenAddress = exports.AXSBNBLpTokenAddress = exports.BTTBNBLpTokenAddress = exports.TRXBNBLpTokenAddress = exports.ADABNBLpTokenAddress = exports.ODDZBNBLpTokenAddress = exports.USDTBNBLpTokenAddress = exports.DODOBNBLpTokenAddress = exports.SWINGBYBNBLpTokenAddress = exports.PCWSBNBLpTokenAddress = exports.BRYBNBLpTokenAddress = exports.BORBNBLpTokenAddress = exports.BELTBNBLpTokenAddress = exports.bMXXBNBLpTokenAddress = exports.ITAMBNBLpTokenAddress = exports.YFIWBNBLpTokenAddress = exports.XVSWBNBLpTokenAddress = exports.LINKWBNBLpTokenAddress = exports.UNIWBNBLpTokenAddress = exports.DOTWBNBLpTokenAddress = exports.ETHWBNBLpTokenAddress = exports.BTCBWBNBLpTokenAddress = exports.CAKEWBNBLpTokenAddress = exports.PancakeMasterChefAddress = exports.DebtTokenUSDCAddress = exports.DebtTokenTUSDAddress = exports.DebtTokenBTCBAddress = exports.DebtTokenUSDTAddress = exports.DebtTokenALPACAAddress = exports.DebtTokenETHAddress = exports.DebtTokenBUSDAddress = void 0;
exports.USDTTripleSlopeModel = exports.ALPACATripleSlopeModel = exports.ETHTripleSlopeModel = exports.BUSDTripleSlopeModel = exports.WBNBTripleSlopeModel = exports.MS_WBNBBTCBLpTokenAddress = exports.MS_ETHBTCBLpTokenAddress = exports.MS_WBNBETHLpTokenAddress = exports.MS_DAIUSDTLpTokenAddress = exports.MS_USDCUSDTLpTokenAddress = exports.MS_WBNBUSDTLpTokenAddress = exports.MS_BUSDUSDTLpTokenAddress = exports.MS_ETHUSDTLpTokenAddress = exports.MS_BTCBUSDTLpTokenAddress = exports.MS_WBNBBUSDLpTokenAddress = exports.MS_MDXBUSDLpTokenAddress = exports.MS_MDXWBNBLpTokenAddress = exports.MdexMasterAddress = exports.WS_BETHETHLpTokenAddress = exports.WS_ETHBTCBLpTokenAddress = exports.WS_TUSDUSDTLpTokenAddress = exports.WS_MATICUSDTLpTokenAddress = exports.WS_ETHUSDTLpTokenAddress = exports.WS_BTCBUSDTLpTokenAddress = exports.WS_WEXUSDTLpTokenAddress = exports.WS_ALPACAUSDTLpTokenAddress = exports.WS_WUSDBUSDLpTokenAddress = exports.WS_BTCBBUSDLpTokenAddress = exports.WS_USDTBUSDLpTokenAddress = exports.WS_WBNBBUSDLpTokenAddress = exports.WS_ETHBUSDLpTokenAddress = exports.WS_WAULTXWBNBLpTokenAddress = exports.WS_ALPACAWBNBLpTokenAddress = exports.WS_WEXWBNBLpTokenAddress = exports.WaultMasterAddress = exports.ETHUSDCLpTokenAddress = exports.ETHBTCBLpTokenAddress = exports.USDCUSDTLpTokenAddress = exports.CAKEUSDTLpTokenAddress = exports.WBNBETHLpTokenAddress = exports.SUSHIETHLpTokenAddress = exports.COMPETHLpTokenAddress = exports.BETHETHLpTokenAddress = exports.HIGHBUSDLpTokenAddress = exports.BMONBUSDLpTokenAddress = exports.POTSBUSDLpTokenAddress = exports.PHABUSDLpTokenAddress = exports.PMONBUSDLpTokenAddress = exports.BTTBUSDLpTokenAddress = exports.TRXBUSDLpTokenAddress = void 0;
exports.MulticallAddress = exports.MarsEcosystemLiquidityMiningMasterAddress = exports.MarsEcosystem = exports.LatteSwapBoosterAddress = exports.LatteSwapMasterBaristaAddress = exports.LatteSwap = exports.ScientixStakingPoolsAddress = exports.Scientix = exports.GrazingRangeAddress = exports.GrazingRange = exports.MerkleDistributor = exports.USDCTripleSlopeModel = exports.TUSDTripleSlopeModel = exports.BTCBTripleSlopeModel = void 0;
const index_1 = require("./index");
// =================== Factory ===================
exports.UniswapV2FactoryAddress = index_1.config.Exchanges.Pancakeswap.UniswapV2Factory;
exports.PancakeFactoryV2Address = index_1.config.Exchanges.Pancakeswap.FactoryV2;
exports.WaultswapFactoryAddress = index_1.config.Exchanges.Waultswap.WaultswapFactory;
exports.MdexswapFactoryAddress = index_1.config.Exchanges.Mdex.MdexFactory;
exports.ApeSwapFactoryAddress = index_1.config.Exchanges.Apeswap.ApesFactory;
// =================== Vault ===================
const bnbVault = index_1.config.Vaults.find((o) => o.symbol === 'ibWBNB');
const busdVault = index_1.config.Vaults.find((o) => o.symbol === 'ibBUSD');
const ethVault = index_1.config.Vaults.find((o) => o.symbol === 'ibETH');
const alpacaVault = index_1.config.Vaults.find((o) => o.symbol === 'ibALPACA');
const usdtVault = index_1.config.Vaults.find((o) => o.symbol === 'ibUSDT');
const btcbVault = index_1.config.Vaults.find((o) => o.symbol === 'ibBTCB');
const tusdVault = index_1.config.Vaults.find((o) => o.symbol === 'ibTUSD');
const usdcVault = index_1.config.Vaults.find((o) => o.symbol === 'ibUSDC');
exports.BNBVaultAddress = bnbVault.address;
exports.BUSDVaultAddress = busdVault.address;
exports.ETHVaultAddress = ethVault.address;
exports.ALPACAVaultAddress = alpacaVault.address;
exports.USDTVaultAddress = usdtVault.address;
exports.BTCBVaultAddress = btcbVault.address;
exports.TUSDVaultAddress = tusdVault.address;
exports.USDCVaultAddress = usdcVault.address;
// =================== FairLaunch & ALPACA LP & SALPACA LP Addresses FairLaunchAddress
exports.FairLaunchAddress = index_1.config.FairLaunch.address;
exports.AlpacaBNBLpAddress = index_1.config.LpTokens['ALPACA-WBNB (Legacy)'];
exports.AlpacaBNBLpV2Address = index_1.config.LpTokens['ALPACA-WBNB'];
exports.StronkAlpacaAlpacaLpAddress = index_1.config.LpTokens['sALPACA-ALPACA'];
exports.AUSDBUSDLpTokenAddress = (_a = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'AUSD-BUSD LP')) === null || _a === void 0 ? void 0 : _a.address;
// =================== Tokens ===================
exports.AlpacaTokenAddress = index_1.config.Tokens.ALPACA;
exports.StronkAlpacaAddress = index_1.config.Tokens.sALPACA;
exports.WBNBAddress = index_1.config.Tokens.WBNB;
exports.BUSDAddress = index_1.config.Tokens.BUSD;
exports.CAKEAddress = index_1.config.Tokens.CAKE;
exports.SYRUPAddress = index_1.config.Tokens.SYRUP;
exports.USDTAddress = index_1.config.Tokens.USDT;
exports.BTCBAddress = index_1.config.Tokens.BTCB;
exports.ETHAddress = index_1.config.Tokens.ETH;
exports.DOTAddress = index_1.config.Tokens.DOT;
exports.UNIAddress = index_1.config.Tokens.UNI;
exports.LINKAddress = index_1.config.Tokens.LINK;
exports.XVSAddress = index_1.config.Tokens.XVS;
exports.YFIAddress = index_1.config.Tokens.YFI;
exports.VAIAddress = index_1.config.Tokens.VAI;
exports.USDCAddress = index_1.config.Tokens.USDC;
exports.DAIAddress = index_1.config.Tokens.DAI;
exports.USTAddress = index_1.config.Tokens.UST;
exports.BETHAddress = index_1.config.Tokens.BETH;
exports.COMPAddress = index_1.config.Tokens.COMP;
exports.SUSHIAddress = index_1.config.Tokens.SUSHI;
exports.ITAMAddress = index_1.config.Tokens.ITAM;
exports.BMXXAddress = index_1.config.Tokens.bMXX;
exports.BELTAddress = index_1.config.Tokens.BELT;
exports.BORAddress = index_1.config.Tokens.BOR;
exports.BRYAddress = index_1.config.Tokens.BRY;
exports.PCWSAddress = index_1.config.Tokens.pCWS;
exports.SWINGBYAddress = index_1.config.Tokens.SWINGBY;
exports.DODOAddress = index_1.config.Tokens.DODO;
exports.WEXAddress = index_1.config.Tokens.WEX;
exports.WAULTXAddress = index_1.config.Tokens.WAULTx;
exports.ODDZAddress = index_1.config.Tokens.ODDZ;
exports.ADAAddress = index_1.config.Tokens.ADA;
exports.FORMAddress = index_1.config.Tokens.FORM;
exports.MATICAddress = index_1.config.Tokens.MATIC;
exports.TUSDAddress = index_1.config.Tokens.TUSD;
exports.TRXAddress = index_1.config.Tokens.TRX;
exports.BTTAddress = index_1.config.Tokens.BTT;
exports.ORBSAddress = index_1.config.Tokens.ORBS;
exports.AXSAddress = index_1.config.Tokens.AXS;
exports.PMONAddress = index_1.config.Tokens.PMON;
exports.SCIXAddress = index_1.config.Tokens.SCIX;
exports.WUSDAddress = index_1.config.Tokens.WUSD;
exports.PHAAddress = index_1.config.Tokens.PHA;
exports.ALMAddress = index_1.config.Tokens.ALM;
exports.KALAAddress = index_1.config.Tokens.KALA;
exports.MBOXAddress = index_1.config.Tokens.MBOX;
exports.NAOSAddress = index_1.config.Tokens.NAOS;
exports.MDEXAddress = index_1.config.Tokens.MDX;
exports.DVIAddress = index_1.config.Tokens.DVI;
exports.LATTEAddress = index_1.config.Tokens.LATTE;
exports.QBTAddress = index_1.config.Tokens.QBT;
exports.PEARAddress = index_1.config.Tokens.PEAR;
exports.POTSAddress = index_1.config.Tokens.POTS;
exports.LUCKYAddress = index_1.config.Tokens.LUCKY;
exports.POLARAddress = index_1.config.Tokens.POLAR;
exports.MONIAddress = index_1.config.Tokens.MONI;
exports.BMONAddress = index_1.config.Tokens.BMON;
exports.SHEESHAAddress = index_1.config.Tokens.SHEESHA;
exports.NFTYAddress = index_1.config.Tokens.NFTY;
exports.SKILLAddress = index_1.config.Tokens.SKILL;
exports.XMSAddress = index_1.config.Tokens.XMS;
exports.ARVAddress = index_1.config.Tokens.ARV;
exports.XWINAddress = index_1.config.Tokens.xWIN;
exports.LEONAddress = index_1.config.Tokens.LEON;
exports.WNOWAddress = index_1.config.Tokens.WNOW;
exports.DEPAddress = index_1.config.Tokens.DEP;
exports.TENFIAddress = index_1.config.Tokens.TENFI;
exports.CAPSAddress = index_1.config.Tokens.CAPS;
exports.SPSAddress = index_1.config.Tokens.SPS;
exports.PLUTAddress = index_1.config.Tokens.PLUT;
exports.ETERNALAddress = index_1.config.Tokens.ETERNAL;
exports.THGAddress = index_1.config.Tokens.THG;
exports.PAYBSWAPAddress = index_1.config.Tokens.PAYB;
exports.LANDAddress = index_1.config.Tokens.LAND;
exports.HIGHAddress = index_1.config.Tokens.HIGH;
exports.DLTAAddress = index_1.config.Tokens.DLTA;
// ########################### BNB WORKERS #############################
//  =================== BNB Pancake Swap Workers =======================
const CAKEBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'CAKE-WBNB PancakeswapWorker');
const BTCBBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BTCB-WBNB PancakeswapWorker');
const ETHBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'ETH-WBNB PancakeswapWorker');
const DOTBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'DOT-WBNB PancakeswapWorker');
const UNIBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'UNI-WBNB PancakeswapWorker');
const LINKBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'LINK-WBNB PancakeswapWorker');
const XVSBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'XVS-WBNB PancakeswapWorker');
const YFIBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'YFI-WBNB PancakeswapWorker');
const ITAMBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'ITAM-WBNB PancakeswapWorker');
const BUSDBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BUSD-WBNB PancakeswapWorker');
const BMXXBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'bMXX-WBNB PancakeswapWorker');
const BELTBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BELT-WBNB PancakeswapWorker');
const BORBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BOR-WBNB PancakeswapWorker');
const BRYBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BRY-WBNB PancakeswapWorker');
const PCWSBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'pCWS-WBNB PancakeswapWorker');
const SWINGBYBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'SWINGBY-WBNB PancakeswapWorker');
const DODOBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'DODO-WBNB PancakeswapWorker');
const USDTBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'USDT-WBNB PancakeswapWorker');
const ODDZBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'ODDZ-WBNB PancakeswapWorker');
const ADABNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'ADA-WBNB PancakeswapWorker');
const TRXBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'TRX-WBNB PancakeswapWorker');
const BTTBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BTT-WBNB PancakeswapWorker');
const AXSBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'AXS-WBNB PancakeswapWorker');
const MBOXBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'MBOX-WBNB PancakeswapWorker');
const NAOSBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'NAOS-WBNB PancakeswapWorker');
const DVIBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'DVI-WBNB PancakeswapWorker');
const QBTBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'QBT-WBNB PancakeswapWorker');
const BMONBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'BMON-WBNB PancakeswapWorker');
const SPSBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'SPS-WBNB PancakeswapWorker');
const ETERNALBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'ETERNAL-WBNB PancakeswapWorker');
const THGBNBPancakeswapWorker = bnbVault.workers.find((o) => o.name === 'THG-WBNB PancakeswapWorker');
// =================== BNB PancakeSwap CakeMaxi Workers =======================
const BNBPancakeswapCakeMaxiWorker = bnbVault.workers.find((o) => o.name === 'WBNB CakeMaxiWorker');
// =================== BNB WaultEx Workers =======================
const WEXBNBWaultswapWorker = bnbVault.workers.find((o) => o.name === 'WEX-WBNB WaultswapWorker');
const BUSDBNBWaultswapWorker = bnbVault.workers.find((o) => o.name === 'BUSD-WBNB WaultswapWorker');
const ALPACABNBWaultswapWorker = bnbVault.workers.find((o) => o.name === 'ALPACA-WBNB WaultswapWorker');
const WAULTXBNBWaultswapWorker = bnbVault.workers.find((o) => o.name === 'WAULTx-WBNB WaultswapWorker');
// =================== BNB Mdex Workers =======================
const MDXBNBMdexworker = bnbVault.workers.find((o) => o.name === 'MDX-WBNB MdexWorker');
const USDTWBNBMdexworker = bnbVault.workers.find((o) => o.name === 'USDT-WBNB MdexWorker');
const ETHWBNBMdexworker = bnbVault.workers.find((o) => o.name === 'ETH-WBNB MdexWorker');
const BUSDWBNBMdexworker = bnbVault.workers.find((o) => o.name === 'BUSD-WBNB MdexWorker');
const BTCBWBNBMdexworker = bnbVault.workers.find((o) => o.name === 'BTCB-WBNB MdexWorker');
// =================== BNB Pancake Swap Worker Addresses ===================
exports.CAKEBNBPancakeswapWorkerAddress = CAKEBNBPancakeswapWorker.address;
exports.BTCBBNBPancakeswapWorkerAddress = BTCBBNBPancakeswapWorker.address;
exports.ETHBNBPancakeswapWorkerAddress = ETHBNBPancakeswapWorker.address;
exports.DOTBNBPancakeswapWorkerAddress = DOTBNBPancakeswapWorker.address;
exports.UNIBNBPancakeswapWorkerAddress = UNIBNBPancakeswapWorker.address;
exports.LINKBNBPancakeswapWorkerAddress = LINKBNBPancakeswapWorker.address;
exports.XVSBNBPancakeswapWorkerAddress = XVSBNBPancakeswapWorker.address;
exports.YFIBNBPancakeswapWorkerAddress = YFIBNBPancakeswapWorker.address;
exports.ITAMBNBPancakeswapWorkerAddress = ITAMBNBPancakeswapWorker.address;
exports.BUSDBNBPancakeswapWorkerAddress = BUSDBNBPancakeswapWorker.address;
exports.BMXXBNBPancakeswapWorkerAddress = BMXXBNBPancakeswapWorker.address;
exports.BELTBNBPancakeswapWorkerAddress = BELTBNBPancakeswapWorker.address;
exports.BORBNBPancakeswapWorkerAddress = BORBNBPancakeswapWorker.address;
exports.BRYBNBPancakeswapWorkerAddress = BRYBNBPancakeswapWorker.address;
exports.PCWSBNBPancakeswapWorkerAddress = PCWSBNBPancakeswapWorker.address;
exports.SWINGBYBNBPancakeswapWorkerAddress = SWINGBYBNBPancakeswapWorker.address;
exports.DODOBNBPancakeswapWorkerAddress = DODOBNBPancakeswapWorker.address;
exports.USDTBNBPancakeswapWorkerAddress = USDTBNBPancakeswapWorker.address;
exports.ODDZBNBPancakeswapWorkerAddress = ODDZBNBPancakeswapWorker.address;
exports.ADABNBPancakeswapWorkerAddress = ADABNBPancakeswapWorker.address;
exports.TRXBNBPancakeswapWorkerAddress = TRXBNBPancakeswapWorker.address;
exports.BTTBNBPancakeswapWorkerAddress = BTTBNBPancakeswapWorker.address;
exports.AXSBNBPancakeswapWorkerAddress = AXSBNBPancakeswapWorker.address;
exports.MBOXBNBPancakeswapWorkerAddress = MBOXBNBPancakeswapWorker.address;
exports.NAOSBNBPancakeswapWorkerAddress = NAOSBNBPancakeswapWorker.address;
exports.DVIBNBPancakeswapWorkerAddress = DVIBNBPancakeswapWorker.address;
exports.QBTBNBPancakeswapWorkerAddress = QBTBNBPancakeswapWorker.address;
exports.BMONBNBPancakeswapWorkerAddress = BMONBNBPancakeswapWorker.address;
exports.SPSBNBPancakeswapWorkerAddress = SPSBNBPancakeswapWorker.address;
exports.ETERNALBNBPancakeswapWorkerAddress = ETERNALBNBPancakeswapWorker.address;
exports.THGBNBPancakeswapWorkerAddress = THGBNBPancakeswapWorker.address;
// =================== BNB PancakeSwap CakeMaxi Worker Address ===================
exports.BNBPancakeswapCakeMaxiWorkerAddress = BNBPancakeswapCakeMaxiWorker.address;
// =================== BNB WaultEx Worker Addresses ===================
exports.WEXBNBWaultswapWorkerAddress = WEXBNBWaultswapWorker.address;
exports.BUSDBNBWaultswapWorkerAddress = BUSDBNBWaultswapWorker.address;
exports.ALPACABNBWaultswapWorkerAddress = ALPACABNBWaultswapWorker.address;
exports.WAULTXBNBWaultswapWorkerAddress = WAULTXBNBWaultswapWorker.address;
// =================== BNB Mdex Worker Addresses ===================
exports.MDXBNBMdexWorkerAddress = MDXBNBMdexworker.address;
exports.USDTWBNBMdexWorkerAddress = USDTWBNBMdexworker.address;
exports.ETHWBNBMdexWorkerAddress = ETHWBNBMdexworker.address;
exports.BUSDWBNBMdexWorkerAddress = BUSDWBNBMdexworker.address;
exports.BTCBWBNBMdexWorkerAddress = BTCBWBNBMdexworker.address;
// ===================  BNB Pancake Swap Worker Config ===================
exports.CAKEBNBPancakeswapWorkerConfig = CAKEBNBPancakeswapWorker.config;
exports.BTCBBNBPancakeswapWorkerConfig = BTCBBNBPancakeswapWorker.config;
exports.ETHBNBPancakeswapWorkerConfig = ETHBNBPancakeswapWorker.config;
exports.DOTBNBPancakeswapWorkerConfig = DOTBNBPancakeswapWorker.config;
exports.UNIBNBPancakeswapWorkerConfig = UNIBNBPancakeswapWorker.config;
exports.LINKBNBPancakeswapWorkerConfig = LINKBNBPancakeswapWorker.config;
exports.XVSBNBPancakeswapWorkerConfig = XVSBNBPancakeswapWorker.config;
exports.YFIBNBPancakeswapWorkerConfig = YFIBNBPancakeswapWorker.config;
exports.ITAMBNBPancakeswapWorkerConfig = ITAMBNBPancakeswapWorker.config;
exports.BUSDBNBPancakeswapWorkerConfig = BUSDBNBPancakeswapWorker.config;
exports.BMXXBNBPancakeswapWorkerConfig = BMXXBNBPancakeswapWorker.config;
exports.BELTBNBPancakeswapWorkerConfig = BELTBNBPancakeswapWorker.config;
exports.BORBNBPancakeswapWorkerConfig = BORBNBPancakeswapWorker.config;
exports.BRYBNBPancakeswapWorkerConfig = BRYBNBPancakeswapWorker.config;
exports.PCWSBNBPancakeswapWorkerConfig = PCWSBNBPancakeswapWorker.config;
exports.SWINGBYBNBPancakeswapWorkerConfig = SWINGBYBNBPancakeswapWorker.config;
exports.DODOBNBPancakeswapWorkerConfig = DODOBNBPancakeswapWorker.config;
exports.USDTBNBPancakeswapWorkerConfig = USDTBNBPancakeswapWorker.config;
exports.ODDZBNBPancakeswapWorkerConfig = ODDZBNBPancakeswapWorker.config;
exports.ADABNBPancakeswapWorkerConfig = ADABNBPancakeswapWorker.config;
exports.TRXBNBPancakeswapWorkerConfig = TRXBNBPancakeswapWorker.config;
exports.BTTBNBPancakeswapWorkerConfig = BTTBNBPancakeswapWorker.config;
exports.AXSBNBPancakeswapWorkerConfig = AXSBNBPancakeswapWorker.config;
exports.MBOXBNBPancakeswapWorkerConfig = MBOXBNBPancakeswapWorker.config;
exports.NAOSBNBPancakeswapWorkerConfig = NAOSBNBPancakeswapWorker.config;
exports.DVIBNBPancakeswapWorkerConfig = DVIBNBPancakeswapWorker.config;
exports.QBTBNBPancakeswapWorkerConfig = QBTBNBPancakeswapWorker.config;
exports.BMONBNBPancakeswapWorkerConfig = BMONBNBPancakeswapWorker.config;
exports.SPSBNBPancakeswapWorkerConfig = SPSBNBPancakeswapWorker.config;
exports.ETERNALBNBPancakeswapWorkerConfig = ETERNALBNBPancakeswapWorker.config;
exports.THGBNBPancakeswapWorkerConfig = THGBNBPancakeswapWorker.config;
// =================== BNB PancakeSwap CakeMaxi Worker Config ===================
exports.BNBPancakeswapCakeMaxiWorkerConfig = BNBPancakeswapCakeMaxiWorker.config;
// =================== BNB WaultEx Worker Config
exports.WEXBNBWaultswapWorkerConfig = WEXBNBWaultswapWorker.config;
exports.BUSDBNBWaultswapWorkerConfig = BUSDBNBWaultswapWorker.config;
exports.ALPACABNBWaultswapWorkerConfig = ALPACABNBWaultswapWorker.config;
exports.WAULTXBNBWaultswapWorkerConfig = WAULTXBNBWaultswapWorker.config;
// =================== BNB Mdex Worker Config ===================
exports.MDXBNBMdexWorkerConfig = MDXBNBMdexworker.config;
exports.USDTWBNBMdexWorkerConfig = USDTWBNBMdexworker.config;
exports.ETHWBNBMdexWorkerConfig = ETHWBNBMdexworker.config;
exports.BUSDWBNBMdexWorkerConfig = BUSDWBNBMdexworker.config;
exports.BTCBWBNBMdexWorkerConfig = BTCBWBNBMdexworker.config;
// =================== BNB Pancake Swap Worker Strategies ===================
exports.CAKEBNBPancakeswapWorkerStrategies = CAKEBNBPancakeswapWorker.strategies;
exports.BTCBBNBPancakeswapWorkerStrategies = BTCBBNBPancakeswapWorker.strategies;
exports.ETHBNBPancakeswapWorkerStrategies = ETHBNBPancakeswapWorker.strategies;
exports.DOTBNBPancakeswapWorkerStrategies = DOTBNBPancakeswapWorker.strategies;
exports.UNIBNBPancakeswapWorkerStrategies = UNIBNBPancakeswapWorker.strategies;
exports.LINKBNBPancakeswapWorkerStrategies = LINKBNBPancakeswapWorker.strategies;
exports.XVSBNBPancakeswapWorkerStrategies = XVSBNBPancakeswapWorker.strategies;
exports.YFIBNBPancakeswapWorkerStrategies = YFIBNBPancakeswapWorker.strategies;
exports.ITAMBNBPancakeswapWorkerStrategies = ITAMBNBPancakeswapWorker.strategies;
exports.BUSDBNBPancakeswapWorkerStrategies = BUSDBNBPancakeswapWorker.strategies;
exports.BMXXBNBPancakeswapWorkerStrategies = BMXXBNBPancakeswapWorker.strategies;
exports.BELTBNBPancakeswapWorkerStrategies = BELTBNBPancakeswapWorker.strategies;
exports.BORBNBPancakeswapWorkerStrategies = BORBNBPancakeswapWorker.strategies;
exports.BRYBNBPancakeswapWorkerStrategies = BRYBNBPancakeswapWorker.strategies;
exports.PCWSBNBPancakeswapWorkerStrategies = PCWSBNBPancakeswapWorker.strategies;
exports.SWINGBYBNBPancakeswapWorkerStrategies = SWINGBYBNBPancakeswapWorker.strategies;
exports.DODOBNBPancakeswapWorkerStrategies = DODOBNBPancakeswapWorker.strategies;
exports.USDTBNBPancakeswapWorkerStrategies = USDTBNBPancakeswapWorker.strategies;
exports.ODDZBNBPancakeswapWorkerStrategies = ODDZBNBPancakeswapWorker.strategies;
exports.ADABNBPancakeswapWorkerStrategies = ADABNBPancakeswapWorker.strategies;
exports.TRXBNBPancakeswapWorkerStrategies = TRXBNBPancakeswapWorker.strategies;
exports.BTTBNBPancakeswapWorkerStrategies = BTTBNBPancakeswapWorker.strategies;
exports.AXSBNBPancakeswapWorkerStrategies = AXSBNBPancakeswapWorker.strategies;
exports.MBOXBNBPancakeswapWorkerStrategies = MBOXBNBPancakeswapWorker.strategies;
exports.NAOSBNBPancakeswapWorkerStrategies = NAOSBNBPancakeswapWorker.strategies;
exports.DVIBNBPancakeswapWorkerStrategies = DVIBNBPancakeswapWorker.strategies;
exports.QBTBNBPancakeswapWorkerStrategies = QBTBNBPancakeswapWorker.strategies;
exports.BMONBNBPancakeswapWorkerStrategies = BMONBNBPancakeswapWorker.strategies;
exports.SPSBNBPancakeswapWorkerStrategies = SPSBNBPancakeswapWorker.strategies;
exports.ETERNALBNBPancakeswapWorkerStrategies = ETERNALBNBPancakeswapWorker.strategies;
exports.THGBNBPancakeswapWorkerStrategies = THGBNBPancakeswapWorker.strategies;
// =================== BNB PancakeSwap CakeMaxi Worker Strategies ===================
exports.BNBPancakeswapCakeMaxiWorkerStrategies = BNBPancakeswapCakeMaxiWorker.strategies;
// =================== BNB Wault Ex Worker Strategies ===================
exports.WEXBNBWaultswapWorkerStrategies = WEXBNBWaultswapWorker.strategies;
exports.BUSDBNBWaultswapWorkerStrategies = BUSDBNBWaultswapWorker.strategies;
exports.ALPACABNBWaultswapWorkerStrategies = ALPACABNBWaultswapWorker.strategies;
exports.WAULTXBNBWaultswapWorkerStrategies = WAULTXBNBWaultswapWorker.strategies;
// =================== BNB Mdex Worker Strategies ===================
exports.MDXBNBMdexworkerStrategies = MDXBNBMdexworker.strategies;
exports.USDTWBNBMdexworkerStrategies = USDTWBNBMdexworker.strategies;
exports.ETHWBNBMdexworkerStrategies = ETHWBNBMdexworker.strategies;
exports.BUSDWBNBMdexworkerStrategies = BUSDWBNBMdexworker.strategies;
exports.BTCBWBNBMdexworkerStrategies = BTCBWBNBMdexworker.strategies;
// ########################### BUSD WORKERS #############################
// ===================  BUSD PancakeSwap Workers ===================
const BTCBBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'BTCB-BUSD PancakeswapWorker');
const USDTBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'USDT-BUSD PancakeswapWorker');
const BNBBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'WBNB-BUSD PancakeswapWorker');
const VAIBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'VAI-BUSD PancakeswapWorker');
const USDCBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'USDC-BUSD PancakeswapWorker');
const DAIBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'DAI-BUSD PancakeswapWorker');
const USTBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'UST-BUSD PancakeswapWorker');
const ALPACABUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'ALPACA-BUSD PancakeswapWorker');
const CAKEBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'CAKE-BUSD PancakeswapWorker');
const FORMBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'FORM-BUSD PancakeswapWorker');
const TUSDBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'TUSD-BUSD PancakeswapWorker');
const ORBSBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'ORBS-BUSD PancakeswapWorker');
const TRXBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'TRX-BUSD PancakeswapWorker');
const BTTBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'BTT-BUSD PancakeswapWorker');
const PMONBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'PMON-BUSD PancakeswapWorker');
const PHABUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'PHA-BUSD PancakeswapWorker');
const POTSBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'POTS-BUSD PancakeswapWorker');
const BMONBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'BMON-BUSD PancakeswapWorker');
const HIGHBUSDPancakeswapWorker = busdVault.workers.find((o) => o.name === 'HIGH-BUSD PancakeswapWorker');
// ===================  BUSD PancakeSwap CakeMaxi Workers ===================
const BUSDPancakeswapCakeMaxiWorker = busdVault.workers.find((o) => o.name === 'BUSD CakeMaxiWorker');
// =================== BUSD Wault Ex Workers ===================
const ETHBUSDWaultswapWorker = busdVault.workers.find((o) => o.name === 'ETH-BUSD WaultswapWorker');
const BNBBUSDWaultswapWorker = busdVault.workers.find((o) => o.name === 'WBNB-BUSD WaultswapWorker');
const USDTBUSDWaultswapWorker = busdVault.workers.find((o) => o.name === 'USDT-BUSD WaultswapWorker');
const BTCBBUSDWaultswapWorker = busdVault.workers.find((o) => o.name === 'BTCB-BUSD WaultswapWorker');
const WUSDBUSDWaultswapWorker = busdVault.workers.find((o) => o.name === 'WUSD-BUSD WaultswapWorker');
// =================== BUSD Mdex Workers ===================
const MDXBUSDMdexWorker = busdVault.workers.find((o) => o.name === 'MDX-BUSD MdexWorker');
const WBNBBUSDMdexWorker = busdVault.workers.find((o) => o.name === 'WBNB-BUSD MdexWorker');
// =================== BUSD Pancake Swap Worker Address ===================
exports.BTCBBUSDPancakeswapWorkerAddress = BTCBBUSDPancakeswapWorker.address;
exports.USDTBUSDPancakeswapWorkerAddress = USDTBUSDPancakeswapWorker.address;
exports.BNBBUSDPancakeswapWorkerAddress = BNBBUSDPancakeswapWorker.address;
exports.VAIBUSDPancakeswapWorkerAddress = VAIBUSDPancakeswapWorker.address;
exports.USDCBUSDPancakeswapWorkerAddress = USDCBUSDPancakeswapWorker.address;
exports.DAIBUSDPancakeswapWorkerAddress = DAIBUSDPancakeswapWorker.address;
exports.USTBUSDPancakeswapWorkerAddress = USTBUSDPancakeswapWorker.address;
exports.ALPACABUSDPancakeswapWorkerAddress = ALPACABUSDPancakeswapWorker.address;
exports.CAKEBUSDPancakeswapWorkerAddress = CAKEBUSDPancakeswapWorker.address;
exports.FORMBUSDPancakeswapWorkerAddress = FORMBUSDPancakeswapWorker.address;
exports.TUSDBUSDPancakeswapWorkerAddress = TUSDBUSDPancakeswapWorker.address;
exports.ORBSBUSDPancakeswapWorkerAddress = ORBSBUSDPancakeswapWorker.address;
exports.TRXBUSDPancakeswapWorkerAddress = TRXBUSDPancakeswapWorker.address;
exports.BTTBUSDPancakeswapWorkerAddress = BTTBUSDPancakeswapWorker.address;
exports.PMONBUSDPancakeswapWorkerAddress = PMONBUSDPancakeswapWorker.address;
exports.PHABUSDPancakeswapWorkerAddress = PHABUSDPancakeswapWorker.address;
exports.POTSBUSDPancakeswapWorkerAddress = POTSBUSDPancakeswapWorker.address;
exports.BMONBUSDPancakeswapWorkerAddress = BMONBUSDPancakeswapWorker.address;
exports.HIGHBUSDPancakeswapWorkerAddress = HIGHBUSDPancakeswapWorker.address;
// =================== BUSD PancakeSwap CakeMaxi Worker Address ===================
exports.BUSDPancakeswapCakeMaxiWorkerAddress = BUSDPancakeswapCakeMaxiWorker.address;
// =================== BUSD Wault Ex Worker Address ===================
exports.ETHBUSDWaultswapWorkerAddress = ETHBUSDWaultswapWorker.address;
exports.BNBBUSDWaultswapWorkerAddress = BNBBUSDWaultswapWorker.address;
exports.USDTBUSDWaultswapWorkerAddress = USDTBUSDWaultswapWorker.address;
exports.BTCBBUSDWaultswapWorkerAddress = BTCBBUSDWaultswapWorker.address;
exports.WUSDBUSDWaultswapWorkerAddress = WUSDBUSDWaultswapWorker.address;
// =================== BUSD Mdex Worker Address ===================
exports.MDXBUSDMdexWorkerAddress = MDXBUSDMdexWorker.address;
exports.WBNBBUSDMdexWorkerAddress = WBNBBUSDMdexWorker.address;
// =================== BUSD Pancake Swap Worker Config ===================
exports.BTCBBUSDPancakeswapWorkerConfig = BTCBBUSDPancakeswapWorker.config;
exports.USDTBUSDPancakeswapWorkerConfig = USDTBUSDPancakeswapWorker.config;
exports.BNBBUSDPancakeswapWorkerConfig = BNBBUSDPancakeswapWorker.config;
exports.VAIBUSDPancakeswapWorkerConfig = VAIBUSDPancakeswapWorker.config;
exports.USDCBUSDPancakeswapWorkerConfig = USDCBUSDPancakeswapWorker.config;
exports.DAIBUSDPancakeswapWorkerConfig = DAIBUSDPancakeswapWorker.config;
exports.USTBUSDPancakeswapWorkerConfig = USTBUSDPancakeswapWorker.config;
exports.ALPACABUSDPancakeswapWorkerConfig = ALPACABUSDPancakeswapWorker.config;
exports.CAKEBUSDPancakeswapWorkerConfig = CAKEBUSDPancakeswapWorker.config;
exports.FORMBUSDPancakeswapWorkerConfig = FORMBUSDPancakeswapWorker.config;
exports.TUSDBUSDPancakeswapWorkerConfig = TUSDBUSDPancakeswapWorker.config;
exports.ORBSBUSDPancakeswapWorkerConfig = ORBSBUSDPancakeswapWorker.config;
exports.TRXBUSDPancakeswapWorkerConfig = TRXBUSDPancakeswapWorker.config;
exports.BTTBUSDPancakeswapWorkerConfig = BTTBUSDPancakeswapWorker.config;
exports.PMONBUSDPancakeswapWorkerConfig = PMONBUSDPancakeswapWorker.config;
exports.PHABUSDPancakeswapWorkerConfig = PHABUSDPancakeswapWorker.config;
exports.POTSBUSDPancakeswapWorkerConfig = POTSBUSDPancakeswapWorker.config;
exports.BMONBUSDPancakeswapWorkerConfig = BMONBUSDPancakeswapWorker.config;
exports.HIGHBUSDPancakeswapWorkerConfig = HIGHBUSDPancakeswapWorker.config;
// =================== BUSD PancakeSwap CakeMaxi Worker Config ===================
exports.BUSDPancakeswapCakeMaxiWorkerConfig = BUSDPancakeswapCakeMaxiWorker.config;
// =================== BUSD WaultEx Worker Config ===================
exports.ETHBUSDWaultswapWorkerConfig = ETHBUSDWaultswapWorker.config;
exports.BNBBUSDWaultswapWorkerConfig = BNBBUSDWaultswapWorker.config;
exports.USDTBUSDWaultswapWorkerConfig = USDTBUSDWaultswapWorker.config;
exports.BTCBBUSDWaultswapWorkerConfig = BTCBBUSDWaultswapWorker.config;
exports.WUSDBUSDWaultswapWorkerConfig = WUSDBUSDWaultswapWorker.config;
// =================== BUSD Mdex Worker Config ===================
exports.MDXBUSDMdexWorkerConfig = MDXBUSDMdexWorker.config;
exports.WBNBBUSDMdexWorkerConfig = WBNBBUSDMdexWorker.config;
// =================== BUSD Pancake Swap Worker Strategies ===================
exports.BTCBBUSDPancakeswapWorkerStrategies = BTCBBUSDPancakeswapWorker.strategies;
exports.USDTBUSDPancakeswapWorkerStrategies = USDTBUSDPancakeswapWorker.strategies;
exports.BNBBUSDPancakeswapWorkerStrategies = BNBBUSDPancakeswapWorker.strategies;
exports.VAIBUSDPancakeswapWorkerStrategies = VAIBUSDPancakeswapWorker.strategies;
exports.USDCBUSDPancakeswapWorkerStrategies = USDCBUSDPancakeswapWorker.strategies;
exports.DAIBUSDPancakeswapWorkerStrategies = DAIBUSDPancakeswapWorker.strategies;
exports.USTBUSDPancakeswapWorkerStrategies = USTBUSDPancakeswapWorker.strategies;
exports.ALPACABUSDPancakeswapWorkerStrategies = ALPACABUSDPancakeswapWorker.strategies;
exports.CAKEBUSDPancakeswapWorkerStrategies = CAKEBUSDPancakeswapWorker.strategies;
exports.FORMBUSDPancakeswapWorkerStrategies = FORMBUSDPancakeswapWorker.strategies;
exports.TUSDBUSDPancakeswapWorkerStrategies = TUSDBUSDPancakeswapWorker.strategies;
exports.ORBSBUSDPancakeswapWorkerStrategies = ORBSBUSDPancakeswapWorker.strategies;
exports.TRXBUSDPancakeswapWorkerStrategies = TRXBUSDPancakeswapWorker.strategies;
exports.BTTBUSDPancakeswapWorkerStrategies = BTTBUSDPancakeswapWorker.strategies;
exports.PMONBUSDPancakeswapWorkerStrategies = PMONBUSDPancakeswapWorker.strategies;
exports.PHABUSDPancakeswapWorkerStrategies = PHABUSDPancakeswapWorker.strategies;
exports.POTSBUSDPancakeswapWorkerStrategies = POTSBUSDPancakeswapWorker.strategies;
exports.BMONBUSDPancakeswapWorkerStrategies = BMONBUSDPancakeswapWorker.strategies;
exports.HIGHBUSDPancakeswapWorkerStrategies = HIGHBUSDPancakeswapWorker.strategies;
// =================== BUSD PancakeSwap CakeMaxi Worker Strategies ===================
exports.BUSDPancakeswapCakeMaxiWorkerStrategies = BUSDPancakeswapCakeMaxiWorker.strategies;
// =================== BUSD WaultEx Worker Strategies ===================
exports.ETHBUSDWaultswapWorkerStrategies = ETHBUSDWaultswapWorker.strategies;
exports.BNBBUSDWaultswapWorkerStrategies = BNBBUSDWaultswapWorker.strategies;
exports.USDTBUSDWaultswapWorkerStrategies = USDTBUSDWaultswapWorker.strategies;
exports.BTCBBUSDWaultswapWorkerStrategies = BTCBBUSDWaultswapWorker.strategies;
exports.WUSDBUSDWaultswapWorkerStrategies = WUSDBUSDWaultswapWorker.strategies;
// =================== BUSD Mdex Worker Strategies ===================
exports.MDXBUSDMdexWorkerStrategies = MDXBUSDMdexWorker.strategies;
exports.WBNBBUSDMdexWorkerStrategies = WBNBBUSDMdexWorker.strategies;
// ########################### ETH WORKERS #############################
// =================== ETH PancakeSwap Workers ===================
const BETHETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'BETH-ETH PancakeswapWorker');
const COMPETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'COMP-ETH PancakeswapWorker');
const SUSHIETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'SUSHI-ETH PancakeswapWorker');
const BNBETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'WBNB-ETH PancakeswapWorker');
const BTCBETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'BTCB-ETH PancakeswapWorker');
const USDCETHPancakeswapWorker = ethVault.workers.find((o) => o.name === 'USDC-ETH PancakeswapWorker');
// =================== ETH PancakeSwap CakeMaxi Workers ===================
const ETHPancakeswapCakeMaxiWorker = ethVault.workers.find((o) => o.name === 'ETH CakeMaxiWorker');
// =================== ETH WaultEx Workers ===================
const BUSDETHWaultswapWorker = ethVault.workers.find((o) => o.name === 'BUSD-ETH WaultswapWorker');
const BTCBETHWaultswapWorker = ethVault.workers.find((o) => o.name === 'BTCB-ETH WaultswapWorker');
const BETHETHWaultswapWorker = ethVault.workers.find((o) => o.name === 'BETH-ETH WaultswapWorker');
const USDTETHWaultswapWorker = ethVault.workers.find((o) => o.name === 'USDT-ETH WaultswapWorker');
// =================== ETH Mdex Workers ===================
const USDTETHMdexWorker = ethVault.workers.find((o) => o.name === 'USDT-ETH MdexWorker');
const WBNBETHMdexWorker = ethVault.workers.find((o) => o.name === 'WBNB-ETH MdexWorker');
const BTCBETHMdexWorker = ethVault.workers.find((o) => o.name === 'BTCB-ETH MdexWorker');
// =================== ETH PancakeSwap Worker Address ===================
exports.BETHETHPancakeswapWorkerAddress = BETHETHPancakeswapWorker.address;
exports.COMPETHPancakeswapWorkerAddress = COMPETHPancakeswapWorker.address;
exports.SUSHIETHPancakeswapWorkerAddress = SUSHIETHPancakeswapWorker.address;
exports.BNBETHPancakeswapWorkerAddress = BNBETHPancakeswapWorker.address;
exports.BTCBETHPancakeswapWorkerAddress = BTCBETHPancakeswapWorker.address;
exports.USDCETHPancakeswapWorkerAddress = USDCETHPancakeswapWorker.address;
// =================== ETH PancakeSwap CakeMaxi Worker Address ===================
exports.ETHPancakeswapCakeMaxiWorkerAddress = ETHPancakeswapCakeMaxiWorker.address;
// =================== ETH WaultEx Worker Adress ===================
exports.BUSDETHWaultswapWorkerAddress = BUSDETHWaultswapWorker.address;
exports.BTCBETHWaultswapWorkerAddress = BTCBETHWaultswapWorker.address;
exports.BETHETHWaultswapWorkerAddress = BETHETHWaultswapWorker.address;
exports.USDTETHWaultswapWorkerAddress = USDTETHWaultswapWorker.address;
// =================== ETH Mdex Worker Adress ===================
exports.USDTETHMdexWorkerAddress = USDTETHMdexWorker.address;
exports.WBNBETHMdexWorkerAddress = WBNBETHMdexWorker.address;
exports.BTCBETHMdexWorkerAddress = BTCBETHMdexWorker.address;
// =================== ETH PancakeSwap Worker Config ===================
exports.BETHETHPancakeswapWorkerConfig = BETHETHPancakeswapWorker.config;
exports.COMPETHPancakeswapWorkerConfig = COMPETHPancakeswapWorker.config;
exports.SUSHIETHPancakeswapWorkerConfig = SUSHIETHPancakeswapWorker.config;
exports.BNBETHPancakeswapWorkerConfig = BNBETHPancakeswapWorker.config;
exports.BTCBETHPancakeswapWorkerConfig = BTCBETHPancakeswapWorker.config;
exports.USDCETHPancakeswapWorkerConfig = USDCETHPancakeswapWorker.config;
// =================== ETH PancakeSwap CakeMaxi Worker Config ===================
exports.ETHPancakeswapCakeMaxiWorkerConfig = ETHPancakeswapCakeMaxiWorker.config;
// =================== ETH WaultEx Worker Config ===================
exports.BUSDETHWaultswapWorkerConfig = BUSDETHWaultswapWorker.config;
exports.BTCBETHWaultswapWorkerConfig = BTCBETHWaultswapWorker.config;
exports.BETHETHWaultswapWorkerConfig = BETHETHWaultswapWorker.config;
exports.USDTETHWaultswapWorkerConfig = USDTETHWaultswapWorker.config;
// =================== ETH Mdex Worker Config ===================
exports.USDTETHMdexWorkerConfig = USDTETHMdexWorker.config;
exports.WBNBETHMdexWorkerConfig = WBNBETHMdexWorker.config;
exports.BTCBETHMdexWorkerConfig = BTCBETHMdexWorker.config;
// =================== ETH PancakeSwap Worker Strategies ===================
exports.BETHETHPancakeswapWorkerStrategies = BETHETHPancakeswapWorker.strategies;
exports.COMPETHPancakeswapWorkerStrategies = COMPETHPancakeswapWorker.strategies;
exports.SUSHIETHPancakeswapWorkerStrategies = SUSHIETHPancakeswapWorker.strategies;
exports.BNBETHPancakeswapWorkerStrategies = BNBETHPancakeswapWorker.strategies;
exports.BTCBETHPancakeswapWorkerStrategies = BTCBETHPancakeswapWorker.strategies;
exports.USDCETHPancakeswapWorkerStrategies = USDCETHPancakeswapWorker.strategies;
// =================== ETH PancakeSwap CakeMaxi Worker Strategies ===================
exports.ETHPancakeswapCakeMaxiWorkerStrategies = ETHPancakeswapCakeMaxiWorker.strategies;
// =================== ETH WaultEx Worker Strategies ===================
exports.BUSDETHWaultswapWorkerStrategies = BUSDETHWaultswapWorker.strategies;
exports.BTCBETHWaultswapWorkerStrategies = BTCBETHWaultswapWorker.strategies;
exports.BETHETHWaultswapWorkerStrategies = BETHETHWaultswapWorker.strategies;
exports.USDTETHWaultswapWorkerStrategies = USDTETHWaultswapWorker.strategies;
// =================== ETH Mdex Worker Strategies ===================
exports.USDTETHMdexWorkerStrategies = USDTETHMdexWorker.strategies;
exports.WBNBETHMdexWorkerStrategies = WBNBETHMdexWorker.strategies;
exports.BTCBETHMdexWorkerStrategies = BTCBETHMdexWorker.strategies;
// ########################### USDT WORKERS #############################
// =================== USDT PancakeSwap Workers ===================
const BNBUSDTPancakeswapWorker = usdtVault.workers.find((o) => o.name === 'WBNB-USDT PancakeswapWorker');
const BUSDUSDTPancakeswapWorker = usdtVault.workers.find((o) => o.name === 'BUSD-USDT PancakeswapWorker');
const CAKEUSDTPancakeswapWorker = usdtVault.workers.find((o) => o.name === 'CAKE-USDT PancakeswapWorker');
const USDCUSDTPancakeswapWorker = usdtVault.workers.find((o) => o.name === 'USDC-USDT PancakeswapWorker');
// =================== USDT PancakeSwap CakeMaxi Workers ===================
const USDTPancakeswapCakeMaxiWorker = usdtVault.workers.find((o) => o.name === 'USDT CakeMaxiWorker');
// =================== USDT WaultEx Workers
const ALPACAUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'ALPACA-USDT WaultswapWorker');
const WEXUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'WEX-USDT WaultswapWorker');
const BUSDUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'BUSD-USDT WaultswapWorker');
const BTCBUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'BTCB-USDT WaultswapWorker');
const ETHUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'ETH-USDT WaultswapWorker');
const MATICUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'MATIC-USDT WaultswapWorker');
const TUSDUSDTWaultswapWorker = usdtVault.workers.find((o) => o.name === 'TUSD-USDT WaultswapWorker');
// =================== USDT Mdex Workers ===================
const BTCBUSDTMdexWorker = usdtVault.workers.find((o) => o.name === 'BTCB-USDT MdexWorker');
const ETHUSDTMdexWorker = usdtVault.workers.find((o) => o.name === 'ETH-USDT MdexWorker');
const WBNBUSDTMdexWorker = usdtVault.workers.find((o) => o.name === 'WBNB-USDT MdexWorker');
const USDCUSDTMdexWorker = usdtVault.workers.find((o) => o.name === 'USDC-USDT MdexWorker');
const DAIUSDTMdexWorker = usdtVault.workers.find((o) => o.name === 'DAI-USDT MdexWorker');
// =================== USDT PancakeSwap Worker Address ===================
exports.BNBUSDTPancakeswapWorkerAddress = BNBUSDTPancakeswapWorker.address;
exports.BUSDUSDTPancakeswapWorkerAddress = BUSDUSDTPancakeswapWorker.address;
exports.CAKEUSDTPancakeswapWorkerAddress = CAKEUSDTPancakeswapWorker.address;
exports.USDCUSDTPancakeswapWorkerAddress = USDCUSDTPancakeswapWorker.address;
// =================== USDT PancakeSwap CakeMaxi Worker Address ===================
exports.USDTPancakeswapCakeMaxiWorkerAddress = USDTPancakeswapCakeMaxiWorker.address;
// =================== USDT WaultEx Worker Address ===================
exports.ALPACAUSDTWaultswapWorkerAddress = ALPACAUSDTWaultswapWorker.address;
exports.WEXUSDTWaultswapWorkerAddress = WEXUSDTWaultswapWorker.address;
exports.BUSDUSDTWaultswapWorkerAddress = BUSDUSDTWaultswapWorker.address;
exports.BTCBUSDTWaultswapWorkerAddress = BTCBUSDTWaultswapWorker.address;
exports.ETHUSDTWaultswapWorkerAddress = ETHUSDTWaultswapWorker.address;
exports.MATICUSDTWaultswapWorkerAddress = MATICUSDTWaultswapWorker.address;
exports.TUSDUSDTWaultswapWorkerAddress = TUSDUSDTWaultswapWorker.address;
// =================== USDT Mdex Worker Address ===================
exports.BTCBUSDTMdexWorkerAddress = BTCBUSDTMdexWorker.address;
exports.ETHUSDTMdexWorkerAddress = ETHUSDTMdexWorker.address;
exports.WBNBUSDTMdexWorkerAddress = WBNBUSDTMdexWorker.address;
exports.USDCUSDTMdexWorkerAddress = USDCUSDTMdexWorker.address;
exports.DAIUSDTMdexWorkerAddress = DAIUSDTMdexWorker.address;
// =================== USDT PancakeSwap Worker Config ===================
exports.BNBUSDTPancakeswapWorkerConfig = BNBUSDTPancakeswapWorker.config;
exports.BUSDUSDTPancakeswapWorkerConfig = BUSDUSDTPancakeswapWorker.config;
exports.CAKEUSDTPancakeswapWorkerConfig = CAKEUSDTPancakeswapWorker.config;
exports.USDCUSDTPancakeswapWorkerConfig = USDCUSDTPancakeswapWorker.config;
// =================== USDT PancakeSwap CakeMaxi Worker ===================
exports.USDTPancakeswapCakeMaxiWorkerConfig = USDTPancakeswapCakeMaxiWorker.config;
// =================== USDT WaultEx Worker Config ===================
exports.ALPACAUSDTWaultswapWorkerConfig = ALPACAUSDTWaultswapWorker.config;
exports.WEXUSDTWaultswapWorkerConfig = WEXUSDTWaultswapWorker.config;
exports.BUSDUSDTWaultswapWorkerConfig = BUSDUSDTWaultswapWorker.config;
exports.BTCBUSDTWaultswapWorkerConfig = BTCBUSDTWaultswapWorker.config;
exports.ETHUSDTWaultswapWorkerConfig = ETHUSDTWaultswapWorker.config;
exports.MATICUSDTWaultswapWorkerConfig = MATICUSDTWaultswapWorker.config;
exports.TUSDUSDTWaultswapWorkerConfig = TUSDUSDTWaultswapWorker.config;
// =================== USDT Mdex Worker Config ===================
exports.BTCBUSDTMdexWorkerConfig = BTCBUSDTMdexWorker.config;
exports.ETHUSDTMdexWorkerConfig = ETHUSDTMdexWorker.config;
exports.WBNBUSDTMdexWorkerConfig = WBNBUSDTMdexWorker.config;
exports.USDCUSDTMdexWorkerConfig = USDCUSDTMdexWorker.config;
exports.DAIUSDTMdexWorkerConfig = DAIUSDTMdexWorker.config;
// =================== USDT PancakeSwap Worker Strategies ===================
exports.BNBUSDTPancakeswapWorkerStrategies = BNBUSDTPancakeswapWorker.strategies;
exports.BUSDUSDTPancakeswapWorkerStrategies = BUSDUSDTPancakeswapWorker.strategies;
exports.CAKEUSDTPancakeswapWorkerStrategies = CAKEUSDTPancakeswapWorker.strategies;
exports.USDCUSDTPancakeswapWorkerStrategies = USDCUSDTPancakeswapWorker.strategies;
// =================== USDT PancakeSwap CakeMaxi Worker Strategies ===================
exports.USDTPancakeswapCakeMaxiWorkerStrategies = USDTPancakeswapCakeMaxiWorker.strategies;
// =================== USDT WaultSwap Worker Strategies ===================
exports.ALPACAUSDTWaultswapWorkerStrategies = ALPACAUSDTWaultswapWorker.strategies;
exports.WEXUSDTWaultswapWorkerStrategies = WEXUSDTWaultswapWorker.strategies;
exports.BUSDUSDTWaultswapWorkerStrategies = BUSDUSDTWaultswapWorker.strategies;
exports.BTCBUSDTWaultswapWorkerStrategies = BTCBUSDTWaultswapWorker.strategies;
exports.ETHUSDTWaultswapWorkerStrategies = ETHUSDTWaultswapWorker.strategies;
exports.MATICUSDTWaultswapWorkerStrategies = MATICUSDTWaultswapWorker.strategies;
exports.TUSDUSDTWaultswapWorkerStrategies = TUSDUSDTWaultswapWorker.strategies;
// =================== USDT Mdex Worker Strategies ===================
exports.BTCBUSDTMdexWorkerStrategies = BTCBUSDTMdexWorker.strategies;
exports.ETHUSDTMdexWorkerStrategies = ETHUSDTMdexWorker.strategies;
exports.WBNBUSDTMdexWorkerStrategies = WBNBUSDTMdexWorker.strategies;
exports.USDCUSDTMdexWorkerStrategies = USDCUSDTMdexWorker.strategies;
exports.DAIUSDTMdexWorkerStrategies = DAIUSDTMdexWorker.strategies;
// ########################### BTCB WORKERS #############################
// =================== BTCB PancakeSwap Workers ===================
const BNBBTCBPancakeswapWorker = btcbVault.workers.find((o) => o.name === 'WBNB-BTCB PancakeswapWorker');
const BUSDBTCBPancakeswapWorker = btcbVault.workers.find((o) => o.name === 'BUSD-BTCB PancakeswapWorker');
const ETHBTCBPancakeswapWorker = btcbVault.workers.find((o) => o.name === 'ETH-BTCB PancakeswapWorker');
// =================== BTCB PancakeSwap CakeMaxi Workers ===================
const BTCBPancakeswapCakeMaxiWorker = btcbVault.workers.find((o) => o.name === 'BTCB CakeMaxiWorker');
// =================== BTCB WaultEx Workers ===================
const ETHBTCBWaultswapWorker = btcbVault.workers.find((o) => o.name === 'ETH-BTCB WaultswapWorker');
const USDTBTCBWaultswapWorker = btcbVault.workers.find((o) => o.name === 'USDT-BTCB WaultswapWorker');
const BUSDBTCBWaultswapWorker = btcbVault.workers.find((o) => o.name === 'BUSD-BTCB WaultswapWorker');
// =================== BTCB Mdex Workers ===================
const USDTBTCBMdexWorker = btcbVault.workers.find((o) => o.name === 'USDT-BTCB MdexWorker');
const ETHBTCBMdexWorker = btcbVault.workers.find((o) => o.name === 'ETH-BTCB MdexWorker');
const WBNBBTCBMdexWorker = btcbVault.workers.find((o) => o.name === 'WBNB-BTCB MdexWorker');
// =================== BTCB PancakeSwap Worker Address ===================
exports.BNBBTCBPancakeswapWorkerAddress = BNBBTCBPancakeswapWorker.address;
exports.BUSDBTCBPancakeswapWorkerAddress = BUSDBTCBPancakeswapWorker.address;
exports.ETHBTCBPancakeswapWorkerAddress = ETHBTCBPancakeswapWorker.address;
// =================== BTCB PancakeSwap CakeMaxi Worker Address ===================
exports.BTCBPancakeswapCakeMaxiWorkerAddress = BTCBPancakeswapCakeMaxiWorker.address;
// =================== BTCB WaultEx Worker Address ===================
exports.ETHBTCBWaultswapWorkerAddress = ETHBTCBWaultswapWorker.address;
exports.USDTBTCBWaultswapWorkerAddress = USDTBTCBWaultswapWorker.address;
exports.BUSDBTCBWaultswapWorkerAddress = BUSDBTCBWaultswapWorker.address;
// =================== BTCB Mdex Worker Address ===================
exports.USDTBTCBMdexWorkerAddress = USDTBTCBMdexWorker.address;
exports.ETHBTCBMdexWorkerAddress = ETHBTCBMdexWorker.address;
exports.WBNBBTCBMdexWorkerAddress = WBNBBTCBMdexWorker.address;
// =================== BTCB PancakeSwap Worker Config ===================
exports.BNBBTCBPancakeswapWorkerConfig = BNBBTCBPancakeswapWorker.config;
exports.BUSDBTCBPancakeswapWorkerConfig = BUSDBTCBPancakeswapWorker.config;
exports.ETHBTCBPancakeswapWorkerConfig = ETHBTCBPancakeswapWorker.config;
// =================== BTCB PancakeSwap CakeMaxi Worker Config ===================
exports.BTCBPancakeswapCakeMaxiWorkerConfig = BTCBPancakeswapCakeMaxiWorker.config;
// =================== BTCB WaultEx Worker Config ===================
exports.ETHBTCBWaultswapWorkerConfig = ETHBTCBWaultswapWorker.config;
exports.USDTBTCBWaultswapWorkerConfig = USDTBTCBWaultswapWorker.config;
exports.BUSDBTCBWaultswapWorkerConfig = BUSDBTCBWaultswapWorker.config;
// =================== BTCB Mdex Worker Config ===================
exports.USDTBTCBMdexWorkerConfig = USDTBTCBMdexWorker.config;
exports.ETHBTCBMdexWorkerConfig = ETHBTCBMdexWorker.config;
exports.WBNBBTCBMdexWorkerConfig = WBNBBTCBMdexWorker.config;
// =================== BTCB PancakeSwap Worker Strategies ===================
exports.BNBBTCBPancakeswapWorkerStrategies = BNBBTCBPancakeswapWorker.strategies;
exports.BUSDBTCBPancakeswapWorkerStrategies = BUSDBTCBPancakeswapWorker.strategies;
exports.ETHBTCBPancakeswapWorkerStrategies = ETHBTCBPancakeswapWorker.strategies;
// =================== BTCB PancakeSwap CakeMaxi Worker Strategies ===================
exports.BTCBPancakeswapCakeMaxiWorkerStrategies = BTCBPancakeswapCakeMaxiWorker.strategies;
// =================== BTCB WaultEx Worker Strategies ===================
exports.ETHBTCBWaultswapWorkerStrategies = ETHBTCBWaultswapWorker.strategies;
exports.USDTBTCBWaultswapWorkerStrategies = USDTBTCBWaultswapWorker.strategies;
exports.BUSDBTCBWaultswapWorkerStrategies = BUSDBTCBWaultswapWorker.strategies;
// =================== BTCB Mdex Worker Strategies ===================
exports.USDTBTCBMdexWorkerStrategies = USDTBTCBMdexWorker.strategies;
exports.ETHBTCBMdexWorkerStrategies = ETHBTCBMdexWorker.strategies;
exports.WBNBBTCBMdexWorkerStrategies = WBNBBTCBMdexWorker.strategies;
// ########################### ALPACA WORKERS #############################
// =================== ALPACA PancakeSwap Workers ===================
const BUSDALPACAPancakeswapWorker = alpacaVault.workers.find((o) => o.name === 'BUSD-ALPACA PancakeswapWorker');
// =================== ALPACA WaultEx Workers ===================
const USDTALPACAWaultswapWorker = alpacaVault.workers.find((o) => o.name === 'USDT-ALPACA WaultswapWorker');
const BNBALPACAWaultswapWorker = alpacaVault.workers.find((o) => o.name === 'WBNB-ALPACA WaultswapWorker');
// =================== ALPACA PancakeSwap Worker Address ===================
exports.BUSDALPACAPancakeswapWorkerAddress = BUSDALPACAPancakeswapWorker.address;
// =================== ALPACA WaultEx Worker Address ===================
exports.USDTALPACAWaultswapWorkerAddress = USDTALPACAWaultswapWorker.address;
exports.BNBALPACAWaultswapWorkerAddress = BNBALPACAWaultswapWorker.address;
// =================== ALPACA PancakeSwap Worker Config ===================
exports.BUSDALPACAPancakeswapWorkerConfig = BUSDALPACAPancakeswapWorker.config;
// =================== ALPACA WaultEx Worker Config ===================
exports.USDTALPACAWaultswapWorkerConfig = USDTALPACAWaultswapWorker.config;
exports.BNBALPACAWaultswapWorkerConfig = BNBALPACAWaultswapWorker.config;
// =================== ALPACA PancakeSwap Worker Strategies ===================
exports.BUSDALPACAPancakeswapWorkerStrategies = BUSDALPACAPancakeswapWorker.strategies;
// =================== ALPACA WaultEx Worker Strategies ===================
exports.USDTALPACAWaultswapWorkerStrategies = USDTALPACAWaultswapWorker.strategies;
exports.BNBALPACAWaultswapWorkerStrategies = BNBALPACAWaultswapWorker.strategies;
// ########################### TUSD WORKERS #############################
// =================== TUSD PancakeSwap Workers ===================
const BUSDTUSDPancakeswapWorker = tusdVault.workers.find((o) => o.name === 'BUSD-TUSD PancakeswapWorker');
// =================== TUSD PancakeSwap CakeMaxi Workers ===================
const TUSDPancakeswapCakeMaxiWorker = tusdVault.workers.find((o) => o.name === 'TUSD CakeMaxiWorker');
// =================== TUSD WaultEx Workers ===================
const USDTTUSDWaultswapWorker = tusdVault.workers.find((o) => o.name === 'USDT-TUSD WaultswapWorker');
// =================== TUSD PancakeSwap Worker Address ===================
exports.BUSDTUSDPancakeswapWorkerAddress = BUSDTUSDPancakeswapWorker.address;
// =================== TUSD PancakeSwap CakeMaxi Worker Address ===================
exports.TUSDPancakeswapCakeMaxiWorkerAddress = TUSDPancakeswapCakeMaxiWorker.address;
// =================== TUSD WaultEx Worker Address ===================
exports.USDTTUSDWaultswapWorkerAddress = USDTTUSDWaultswapWorker.address;
// =================== TUSD PancakeSwap Worker Config ===================
exports.BUSDTUSDPancakeswapWorkerConfig = BUSDTUSDPancakeswapWorker.config;
// =================== TUSD PancakeSwap CakeMaxi Worker Config ===================
exports.TUSDPancakeswapCakeMaxiWorkerConfig = TUSDPancakeswapCakeMaxiWorker.config;
// =================== TUSD WaultEx Worker Config ===================
exports.USDTTUSDWaultswapWorkerConfig = USDTTUSDWaultswapWorker.config;
// =================== TUSD PancakeSwap Worker Strategies ===================
exports.BUSDTUSDPancakeswapWorkerStrategies = BUSDTUSDPancakeswapWorker.strategies;
// =================== TUSD PancakeSwap CakeMaxi Worker Strategies ===================
exports.TUSDPancakeswapCakeMaxiWorkerStrategies = TUSDPancakeswapCakeMaxiWorker.strategies;
// =================== TUSD WaultEx Worker Strategies ===================
exports.USDTTUSDWaultswapWorkerStrategies = USDTTUSDWaultswapWorker.strategies;
// ########################### USDC WORKERS #############################
// =================== USDC PancakeSwap Workers ===================
const ETHUSDCPancakeswapWorker = usdcVault.workers.find((o) => o.name === 'ETH-USDC PancakeswapWorker');
const USDTUSDCPancakeswapWorker = usdcVault.workers.find((o) => o.name === 'USDT-USDC PancakeswapWorker');
// =================== USDC PancakeSwap CakeMaxi Workers ===================
const USDCPancakeswapCakeMaxiWorker = usdcVault.workers.find((o) => o.name === 'USDC CakeMaxiWorker');
// =================== USDC PancakeSwap Worker Address ===================
exports.ETHUSDCPancakeswapWorkerAddress = ETHUSDCPancakeswapWorker.address;
exports.USDTUSDCPancakeswapWorkerAddress = USDTUSDCPancakeswapWorker.address;
// =================== USDC PancakeSwap CakeMaxi Worker Address ===================
exports.USDCPancakeswapCakeMaxiWorkerAddress = USDCPancakeswapCakeMaxiWorker.address;
// =================== USDC PancakeSwap Worker Config ===================
exports.ETHUSDCPancakeswapWorkerConfig = ETHUSDCPancakeswapWorker.config;
exports.USDTUSDCPancakeswapWorkerConfig = USDTUSDCPancakeswapWorker.config;
// =================== USDC PancakeSwap CakeMaxi Worker Config ===================
exports.USDCPancakeswapCakeMaxiWorkerConfig = USDCPancakeswapCakeMaxiWorker.config;
// =================== USDC PancakeSwap Worker Strategies ===================
exports.ETHUSDCPancakeswapWorkerStrategies = ETHUSDCPancakeswapWorker.strategies;
exports.USDTUSDCPancakeswapWorkerStrategies = USDTUSDCPancakeswapWorker.strategies;
// =================== USDC PancakeSwap Worker Strategies ===================
exports.USDCPancakeswapCakeMaxiWorkerStrategies = USDCPancakeswapCakeMaxiWorker.strategies;
// =================== DEBT TOKENS ===================
exports.DebtTokenBNBAddress = (_b = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBNB V2')) === null || _b === void 0 ? void 0 : _b.address;
exports.DebtTokenBUSDAddress = (_c = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBUSD V2')) === null || _c === void 0 ? void 0 : _c.address;
exports.DebtTokenETHAddress = (_d = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbETH V2')) === null || _d === void 0 ? void 0 : _d.address;
exports.DebtTokenALPACAAddress = (_e = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbALPACA V2')) === null || _e === void 0 ? void 0 : _e.address;
exports.DebtTokenUSDTAddress = (_f = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDT V2')) === null || _f === void 0 ? void 0 : _f.address;
exports.DebtTokenBTCBAddress = (_g = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBTCB V2')) === null || _g === void 0 ? void 0 : _g.address;
exports.DebtTokenTUSDAddress = (_h = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbTUSD V2')) === null || _h === void 0 ? void 0 : _h.address;
exports.DebtTokenUSDCAddress = (_j = index_1.config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDC V2')) === null || _j === void 0 ? void 0 : _j.address;
// =================== Pancake Master Chef ===================
exports.PancakeMasterChefAddress = index_1.config.Exchanges.Pancakeswap.MasterChef;
// =================== LP Addresses ===================
// =================== BNB Pancake LP Adress ===================
exports.CAKEWBNBLpTokenAddress = (_k = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-WBNB LP')) === null || _k === void 0 ? void 0 : _k.address;
exports.BTCBWBNBLpTokenAddress = (_l = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-WBNB LP')) === null || _l === void 0 ? void 0 : _l.address;
exports.ETHWBNBLpTokenAddress = (_m = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-WBNB LP')) === null || _m === void 0 ? void 0 : _m.address;
exports.DOTWBNBLpTokenAddress = (_o = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DOT-WBNB LP')) === null || _o === void 0 ? void 0 : _o.address;
exports.UNIWBNBLpTokenAddress = (_p = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UNI-WBNB LP')) === null || _p === void 0 ? void 0 : _p.address;
exports.LINKWBNBLpTokenAddress = (_q = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'LINK-WBNB LP')) === null || _q === void 0 ? void 0 : _q.address;
exports.XVSWBNBLpTokenAddress = (_r = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'XVS-WBNB LP')) === null || _r === void 0 ? void 0 : _r.address;
exports.YFIWBNBLpTokenAddress = (_s = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'YFI-WBNB LP')) === null || _s === void 0 ? void 0 : _s.address;
exports.ITAMBNBLpTokenAddress = (_t = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ITAM-WBNB LP')) === null || _t === void 0 ? void 0 : _t.address;
exports.bMXXBNBLpTokenAddress = (_u = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'bMXX-WBNB LP')) === null || _u === void 0 ? void 0 : _u.address;
exports.BELTBNBLpTokenAddress = (_v = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BELT-WBNB LP')) === null || _v === void 0 ? void 0 : _v.address;
exports.BORBNBLpTokenAddress = (_w = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BOR-WBNB LP')) === null || _w === void 0 ? void 0 : _w.address;
exports.BRYBNBLpTokenAddress = (_x = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BRY-WBNB LP')) === null || _x === void 0 ? void 0 : _x.address;
exports.PCWSBNBLpTokenAddress = (_y = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'pCWS-WBNB LP')) === null || _y === void 0 ? void 0 : _y.address;
exports.SWINGBYBNBLpTokenAddress = (_z = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SWINGBY-WBNB LP')) === null || _z === void 0 ? void 0 : _z.address;
exports.DODOBNBLpTokenAddress = (_0 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DODO-WBNB LP')) === null || _0 === void 0 ? void 0 : _0.address;
exports.USDTBNBLpTokenAddress = (_1 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-WBNB LP')) === null || _1 === void 0 ? void 0 : _1.address;
exports.ODDZBNBLpTokenAddress = (_2 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ODDZ-WBNB LP')) === null || _2 === void 0 ? void 0 : _2.address;
exports.ADABNBLpTokenAddress = (_3 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ADA-WBNB LP')) === null || _3 === void 0 ? void 0 : _3.address;
exports.TRXBNBLpTokenAddress = (_4 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-WBNB LP')) === null || _4 === void 0 ? void 0 : _4.address;
exports.BTTBNBLpTokenAddress = (_5 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-WBNB LP')) === null || _5 === void 0 ? void 0 : _5.address;
exports.AXSBNBLpTokenAddress = (_6 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'AXS-WBNB LP')) === null || _6 === void 0 ? void 0 : _6.address;
exports.MBOXBNBLpTokenAddress = (_7 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'MBOX-WBNB LP')) === null || _7 === void 0 ? void 0 : _7.address;
exports.NAOSBNBLpTokenAddress = (_8 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'NAOS-WBNB LP')) === null || _8 === void 0 ? void 0 : _8.address;
exports.DVIBNBLpTokenAddress = (_9 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DVI-WBNB LP')) === null || _9 === void 0 ? void 0 : _9.address;
exports.QBTBNBLpTokenAddress = (_10 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'QBT-WBNB LP')) === null || _10 === void 0 ? void 0 : _10.address;
exports.BMONBNBLpTokenAddress = (_11 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-WBNB LP')) === null || _11 === void 0 ? void 0 : _11.address;
exports.SPSBNBLpTokenAddress = (_12 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SPS-WBNB LP')) === null || _12 === void 0 ? void 0 : _12.address;
exports.ETERNALBNBLpTokenAddress = (_13 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETERNAL-WBNB LP')) === null || _13 === void 0 ? void 0 : _13.address;
exports.THGBNBLpTokenAddress = (_14 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'THG-WBNB LP')) === null || _14 === void 0 ? void 0 : _14.address;
// =================== BUSD Pancake LP Adress ===================
exports.BTCBBUSDLpTokenAddress = (_15 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _15 === void 0 ? void 0 : _15.address;
exports.USDTBUSDLpTokenAddress = (_16 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _16 === void 0 ? void 0 : _16.address;
exports.WBNBBUSDLpTokenAddress = (_17 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _17 === void 0 ? void 0 : _17.address;
exports.VAIBUSDLpTokenAddress = (_18 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'VAI-BUSD LP')) === null || _18 === void 0 ? void 0 : _18.address;
exports.USDCBUSDLpTokenAddress = (_19 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-BUSD LP')) === null || _19 === void 0 ? void 0 : _19.address;
exports.DAIBUSDLpTokenAddress = (_20 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DAI-BUSD LP')) === null || _20 === void 0 ? void 0 : _20.address;
exports.USTBUSDLpTokenAddress = (_21 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UST-BUSD LP')) === null || _21 === void 0 ? void 0 : _21.address;
exports.ALPACABUSDLpTokenAddress = (_22 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ALPACA-BUSD LP')) === null || _22 === void 0 ? void 0 : _22.address;
exports.CAKEBUSDLpTokenAddress = (_23 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-BUSD LP')) === null || _23 === void 0 ? void 0 : _23.address;
exports.FORMBUSDLpTokenAddress = (_24 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'FORM-BUSD LP')) === null || _24 === void 0 ? void 0 : _24.address;
exports.TUSDBUSDLpTokenAddress = (_25 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TUSD-BUSD LP')) === null || _25 === void 0 ? void 0 : _25.address;
exports.ORBSBUSDLpTokenAddress = (_26 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ORBS-BUSD LP')) === null || _26 === void 0 ? void 0 : _26.address;
exports.TRXBUSDLpTokenAddress = (_27 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-BUSD LP')) === null || _27 === void 0 ? void 0 : _27.address;
exports.BTTBUSDLpTokenAddress = (_28 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-BUSD LP')) === null || _28 === void 0 ? void 0 : _28.address;
exports.PMONBUSDLpTokenAddress = (_29 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PMON-BUSD LP')) === null || _29 === void 0 ? void 0 : _29.address;
exports.PHABUSDLpTokenAddress = (_30 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PHA-BUSD LP')) === null || _30 === void 0 ? void 0 : _30.address;
exports.POTSBUSDLpTokenAddress = (_31 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'POTS-BUSD LP')) === null || _31 === void 0 ? void 0 : _31.address;
exports.BMONBUSDLpTokenAddress = (_32 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-BUSD LP')) === null || _32 === void 0 ? void 0 : _32.address;
exports.HIGHBUSDLpTokenAddress = (_33 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'HIGH-BUSD LP')) === null || _33 === void 0 ? void 0 : _33.address;
// =================== ETH Pancake LP Adress ===================
exports.BETHETHLpTokenAddress = (_34 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _34 === void 0 ? void 0 : _34.address;
exports.COMPETHLpTokenAddress = (_35 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'COMP-ETH LP')) === null || _35 === void 0 ? void 0 : _35.address;
exports.SUSHIETHLpTokenAddress = (_36 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SUSHI-ETH LP')) === null || _36 === void 0 ? void 0 : _36.address;
exports.WBNBETHLpTokenAddress = (_37 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'WBNB-ETH LP')) === null || _37 === void 0 ? void 0 : _37.address;
// =================== ETH Pancake LP Adress ===================
exports.CAKEUSDTLpTokenAddress = (_38 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-USDT LP')) === null || _38 === void 0 ? void 0 : _38.address;
exports.USDCUSDTLpTokenAddress = (_39 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _39 === void 0 ? void 0 : _39.address;
// =================== BTCB Pancake LP Adress ===================
exports.ETHBTCBLpTokenAddress = (_40 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _40 === void 0 ? void 0 : _40.address;
// =================== USDC Pancake LP Adress ===================
exports.ETHUSDCLpTokenAddress = (_41 = index_1.config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-USDC LP')) === null || _41 === void 0 ? void 0 : _41.address;
// =================== Wault Master Chef ===================
exports.WaultMasterAddress = index_1.config.Exchanges.Waultswap.WexMaster;
// =================== BNB Wault LP Adress ===================
exports.WS_WEXWBNBLpTokenAddress = (_42 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-WBNB LP')) === null || _42 === void 0 ? void 0 : _42.address;
exports.WS_ALPACAWBNBLpTokenAddress = (_43 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-WBNB LP')) === null || _43 === void 0 ? void 0 : _43.address;
exports.WS_WAULTXWBNBLpTokenAddress = (_44 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WAULTx-WBNB LP')) === null || _44 === void 0 ? void 0 : _44.address;
// =================== BUSD Wault LP Adress ===================
exports.WS_ETHBUSDLpTokenAddress = (_45 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BUSD LP')) === null || _45 === void 0 ? void 0 : _45.address;
exports.WS_WBNBBUSDLpTokenAddress = (_46 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _46 === void 0 ? void 0 : _46.address;
exports.WS_USDTBUSDLpTokenAddress = (_47 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _47 === void 0 ? void 0 : _47.address;
exports.WS_BTCBBUSDLpTokenAddress = (_48 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _48 === void 0 ? void 0 : _48.address;
exports.WS_WUSDBUSDLpTokenAddress = (_49 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WUSD-BUSD LP')) === null || _49 === void 0 ? void 0 : _49.address;
// =================== USDT Wault LP Adress ===================
exports.WS_ALPACAUSDTLpTokenAddress = (_50 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-USDT LP')) === null || _50 === void 0 ? void 0 : _50.address;
exports.WS_WEXUSDTLpTokenAddress = (_51 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-USDT LP')) === null || _51 === void 0 ? void 0 : _51.address;
exports.WS_BTCBUSDTLpTokenAddress = (_52 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _52 === void 0 ? void 0 : _52.address;
exports.WS_ETHUSDTLpTokenAddress = (_53 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _53 === void 0 ? void 0 : _53.address;
exports.WS_MATICUSDTLpTokenAddress = (_54 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'MATIC-USDT LP')) === null || _54 === void 0 ? void 0 : _54.address;
exports.WS_TUSDUSDTLpTokenAddress = (_55 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'TUSD-USDT LP')) === null || _55 === void 0 ? void 0 : _55.address;
// =================== ETH Wault LP Adress ===================
exports.WS_ETHBTCBLpTokenAddress = (_56 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _56 === void 0 ? void 0 : _56.address;
exports.WS_BETHETHLpTokenAddress = (_57 = index_1.config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _57 === void 0 ? void 0 : _57.address;
// =================== MDEX BSCPOOL ===================
exports.MdexMasterAddress = index_1.config.Exchanges.Mdex.BSCPool;
// =================== BNB Mdex LP Adress ===================
exports.MS_MDXWBNBLpTokenAddress = (_58 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-WBNB LP')) === null || _58 === void 0 ? void 0 : _58.address;
// =================== BUSD Mdex LP Adress ===================
exports.MS_MDXBUSDLpTokenAddress = (_59 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-BUSD LP')) === null || _59 === void 0 ? void 0 : _59.address;
exports.MS_WBNBBUSDLpTokenAddress = (_60 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _60 === void 0 ? void 0 : _60.address;
// =================== USDT Mdex LP Adress ===================
exports.MS_BTCBUSDTLpTokenAddress = (_61 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _61 === void 0 ? void 0 : _61.address;
exports.MS_ETHUSDTLpTokenAddress = (_62 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _62 === void 0 ? void 0 : _62.address;
exports.MS_BUSDUSDTLpTokenAddress = (_63 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'BUSD-USDT LP')) === null || _63 === void 0 ? void 0 : _63.address;
exports.MS_WBNBUSDTLpTokenAddress = (_64 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-USDT LP')) === null || _64 === void 0 ? void 0 : _64.address;
exports.MS_USDCUSDTLpTokenAddress = (_65 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _65 === void 0 ? void 0 : _65.address;
exports.MS_DAIUSDTLpTokenAddress = (_66 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'DAI-USDT LP')) === null || _66 === void 0 ? void 0 : _66.address;
// =================== ETH Mdex LP Adress ===================
exports.MS_WBNBETHLpTokenAddress = (_67 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-ETH LP')) === null || _67 === void 0 ? void 0 : _67.address;
// =================== BTCB Mdex LP Adress ===================
exports.MS_ETHBTCBLpTokenAddress = (_68 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _68 === void 0 ? void 0 : _68.address;
exports.MS_WBNBBTCBLpTokenAddress = (_69 = index_1.config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BTCB LP')) === null || _69 === void 0 ? void 0 : _69.address;
exports.WBNBTripleSlopeModel = bnbVault.tripleSlopeModel;
exports.BUSDTripleSlopeModel = busdVault.tripleSlopeModel;
exports.ETHTripleSlopeModel = ethVault.tripleSlopeModel;
exports.ALPACATripleSlopeModel = alpacaVault.tripleSlopeModel;
exports.USDTTripleSlopeModel = usdtVault.tripleSlopeModel;
exports.BTCBTripleSlopeModel = btcbVault.tripleSlopeModel;
exports.TUSDTripleSlopeModel = tusdVault.tripleSlopeModel;
exports.USDCTripleSlopeModel = usdcVault.tripleSlopeModel;
// Merkle
exports.MerkleDistributor = {
    ItamWeek1: index_1.config.MerkleDistributor['ITAM-week-1'],
    ItamWeek2: index_1.config.MerkleDistributor['ITAM-week-2'],
    ItamWeek3: index_1.config.MerkleDistributor['ITAM-week-3'],
    ItamWeek4: index_1.config.MerkleDistributor['ITAM-week-4'],
};
exports.GrazingRange = index_1.config.GrazingRange;
exports.GrazingRangeAddress = exports.GrazingRange.address;
exports.Scientix = index_1.config.Scientix;
exports.ScientixStakingPoolsAddress = exports.Scientix.StakingPools.address;
exports.LatteSwap = index_1.config.LatteSwap;
exports.LatteSwapMasterBaristaAddress = exports.LatteSwap.MasterBarista.address;
exports.LatteSwapBoosterAddress = exports.LatteSwap.Booster.address;
exports.MarsEcosystem = index_1.config.MarsEcosystem;
exports.MarsEcosystemLiquidityMiningMasterAddress = exports.MarsEcosystem.LiquidityMiningMaster.address;
// Others
exports.MulticallAddress = index_1.config.MultiCall;
