var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69;
import { config } from './index';
// =================== Factory ===================
export const UniswapV2FactoryAddress = config.Exchanges.Pancakeswap.UniswapV2Factory;
export const PancakeFactoryV2Address = config.Exchanges.Pancakeswap.FactoryV2;
export const WaultswapFactoryAddress = config.Exchanges.Waultswap.WaultswapFactory;
export const MdexswapFactoryAddress = config.Exchanges.Mdex.MdexFactory;
export const ApeSwapFactoryAddress = config.Exchanges.Apeswap.ApesFactory;
// =================== Vault ===================
const bnbVault = config.Vaults.find((o) => o.symbol === 'ibWBNB');
const busdVault = config.Vaults.find((o) => o.symbol === 'ibBUSD');
const ethVault = config.Vaults.find((o) => o.symbol === 'ibETH');
const alpacaVault = config.Vaults.find((o) => o.symbol === 'ibALPACA');
const usdtVault = config.Vaults.find((o) => o.symbol === 'ibUSDT');
const btcbVault = config.Vaults.find((o) => o.symbol === 'ibBTCB');
const tusdVault = config.Vaults.find((o) => o.symbol === 'ibTUSD');
const usdcVault = config.Vaults.find((o) => o.symbol === 'ibUSDC');
export const BNBVaultAddress = bnbVault.address;
export const BUSDVaultAddress = busdVault.address;
export const ETHVaultAddress = ethVault.address;
export const ALPACAVaultAddress = alpacaVault.address;
export const USDTVaultAddress = usdtVault.address;
export const BTCBVaultAddress = btcbVault.address;
export const TUSDVaultAddress = tusdVault.address;
export const USDCVaultAddress = usdcVault.address;
// =================== FairLaunch & ALPACA LP & SALPACA LP Addresses FairLaunchAddress
export const FairLaunchAddress = config.FairLaunch.address;
export const AlpacaBNBLpAddress = config.LpTokens['ALPACA-WBNB (Legacy)'];
export const AlpacaBNBLpV2Address = config.LpTokens['ALPACA-WBNB'];
export const StronkAlpacaAlpacaLpAddress = config.LpTokens['sALPACA-ALPACA'];
export const AUSDBUSDLpTokenAddress = (_a = config.FairLaunch.pools.find((o) => o.stakingToken === 'AUSD-BUSD LP')) === null || _a === void 0 ? void 0 : _a.address;
// =================== Tokens ===================
export const AlpacaTokenAddress = config.Tokens.ALPACA;
export const StronkAlpacaAddress = config.Tokens.sALPACA;
export const WBNBAddress = config.Tokens.WBNB;
export const BUSDAddress = config.Tokens.BUSD;
export const CAKEAddress = config.Tokens.CAKE;
export const SYRUPAddress = config.Tokens.SYRUP;
export const USDTAddress = config.Tokens.USDT;
export const BTCBAddress = config.Tokens.BTCB;
export const ETHAddress = config.Tokens.ETH;
export const DOTAddress = config.Tokens.DOT;
export const UNIAddress = config.Tokens.UNI;
export const LINKAddress = config.Tokens.LINK;
export const XVSAddress = config.Tokens.XVS;
export const YFIAddress = config.Tokens.YFI;
export const VAIAddress = config.Tokens.VAI;
export const USDCAddress = config.Tokens.USDC;
export const DAIAddress = config.Tokens.DAI;
export const USTAddress = config.Tokens.UST;
export const BETHAddress = config.Tokens.BETH;
export const COMPAddress = config.Tokens.COMP;
export const SUSHIAddress = config.Tokens.SUSHI;
export const ITAMAddress = config.Tokens.ITAM;
export const BMXXAddress = config.Tokens.bMXX;
export const BELTAddress = config.Tokens.BELT;
export const BORAddress = config.Tokens.BOR;
export const BRYAddress = config.Tokens.BRY;
export const PCWSAddress = config.Tokens.pCWS;
export const SWINGBYAddress = config.Tokens.SWINGBY;
export const DODOAddress = config.Tokens.DODO;
export const WEXAddress = config.Tokens.WEX;
export const WAULTXAddress = config.Tokens.WAULTx;
export const ODDZAddress = config.Tokens.ODDZ;
export const ADAAddress = config.Tokens.ADA;
export const FORMAddress = config.Tokens.FORM;
export const MATICAddress = config.Tokens.MATIC;
export const TUSDAddress = config.Tokens.TUSD;
export const TRXAddress = config.Tokens.TRX;
export const BTTAddress = config.Tokens.BTT;
export const ORBSAddress = config.Tokens.ORBS;
export const AXSAddress = config.Tokens.AXS;
export const PMONAddress = config.Tokens.PMON;
export const SCIXAddress = config.Tokens.SCIX;
export const WUSDAddress = config.Tokens.WUSD;
export const PHAAddress = config.Tokens.PHA;
export const ALMAddress = config.Tokens.ALM;
export const KALAAddress = config.Tokens.KALA;
export const MBOXAddress = config.Tokens.MBOX;
export const NAOSAddress = config.Tokens.NAOS;
export const MDEXAddress = config.Tokens.MDX;
export const DVIAddress = config.Tokens.DVI;
export const LATTEAddress = config.Tokens.LATTE;
export const QBTAddress = config.Tokens.QBT;
export const PEARAddress = config.Tokens.PEAR;
export const POTSAddress = config.Tokens.POTS;
export const LUCKYAddress = config.Tokens.LUCKY;
export const POLARAddress = config.Tokens.POLAR;
export const MONIAddress = config.Tokens.MONI;
export const BMONAddress = config.Tokens.BMON;
export const SHEESHAAddress = config.Tokens.SHEESHA;
export const NFTYAddress = config.Tokens.NFTY;
export const SKILLAddress = config.Tokens.SKILL;
export const XMSAddress = config.Tokens.XMS;
export const ARVAddress = config.Tokens.ARV;
export const XWINAddress = config.Tokens.xWIN;
export const LEONAddress = config.Tokens.LEON;
export const WNOWAddress = config.Tokens.WNOW;
export const DEPAddress = config.Tokens.DEP;
export const TENFIAddress = config.Tokens.TENFI;
export const CAPSAddress = config.Tokens.CAPS;
export const SPSAddress = config.Tokens.SPS;
export const PLUTAddress = config.Tokens.PLUT;
export const ETERNALAddress = config.Tokens.ETERNAL;
export const THGAddress = config.Tokens.THG;
export const PAYBSWAPAddress = config.Tokens.PAYB;
export const LANDAddress = config.Tokens.LAND;
export const HIGHAddress = config.Tokens.HIGH;
export const DLTAAddress = config.Tokens.DLTA;
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
export const CAKEBNBPancakeswapWorkerAddress = CAKEBNBPancakeswapWorker.address;
export const BTCBBNBPancakeswapWorkerAddress = BTCBBNBPancakeswapWorker.address;
export const ETHBNBPancakeswapWorkerAddress = ETHBNBPancakeswapWorker.address;
export const DOTBNBPancakeswapWorkerAddress = DOTBNBPancakeswapWorker.address;
export const UNIBNBPancakeswapWorkerAddress = UNIBNBPancakeswapWorker.address;
export const LINKBNBPancakeswapWorkerAddress = LINKBNBPancakeswapWorker.address;
export const XVSBNBPancakeswapWorkerAddress = XVSBNBPancakeswapWorker.address;
export const YFIBNBPancakeswapWorkerAddress = YFIBNBPancakeswapWorker.address;
export const ITAMBNBPancakeswapWorkerAddress = ITAMBNBPancakeswapWorker.address;
export const BUSDBNBPancakeswapWorkerAddress = BUSDBNBPancakeswapWorker.address;
export const BMXXBNBPancakeswapWorkerAddress = BMXXBNBPancakeswapWorker.address;
export const BELTBNBPancakeswapWorkerAddress = BELTBNBPancakeswapWorker.address;
export const BORBNBPancakeswapWorkerAddress = BORBNBPancakeswapWorker.address;
export const BRYBNBPancakeswapWorkerAddress = BRYBNBPancakeswapWorker.address;
export const PCWSBNBPancakeswapWorkerAddress = PCWSBNBPancakeswapWorker.address;
export const SWINGBYBNBPancakeswapWorkerAddress = SWINGBYBNBPancakeswapWorker.address;
export const DODOBNBPancakeswapWorkerAddress = DODOBNBPancakeswapWorker.address;
export const USDTBNBPancakeswapWorkerAddress = USDTBNBPancakeswapWorker.address;
export const ODDZBNBPancakeswapWorkerAddress = ODDZBNBPancakeswapWorker.address;
export const ADABNBPancakeswapWorkerAddress = ADABNBPancakeswapWorker.address;
export const TRXBNBPancakeswapWorkerAddress = TRXBNBPancakeswapWorker.address;
export const BTTBNBPancakeswapWorkerAddress = BTTBNBPancakeswapWorker.address;
export const AXSBNBPancakeswapWorkerAddress = AXSBNBPancakeswapWorker.address;
export const MBOXBNBPancakeswapWorkerAddress = MBOXBNBPancakeswapWorker.address;
export const NAOSBNBPancakeswapWorkerAddress = NAOSBNBPancakeswapWorker.address;
export const DVIBNBPancakeswapWorkerAddress = DVIBNBPancakeswapWorker.address;
export const QBTBNBPancakeswapWorkerAddress = QBTBNBPancakeswapWorker.address;
export const BMONBNBPancakeswapWorkerAddress = BMONBNBPancakeswapWorker.address;
export const SPSBNBPancakeswapWorkerAddress = SPSBNBPancakeswapWorker.address;
export const ETERNALBNBPancakeswapWorkerAddress = ETERNALBNBPancakeswapWorker.address;
export const THGBNBPancakeswapWorkerAddress = THGBNBPancakeswapWorker.address;
// =================== BNB PancakeSwap CakeMaxi Worker Address ===================
export const BNBPancakeswapCakeMaxiWorkerAddress = BNBPancakeswapCakeMaxiWorker.address;
// =================== BNB WaultEx Worker Addresses ===================
export const WEXBNBWaultswapWorkerAddress = WEXBNBWaultswapWorker.address;
export const BUSDBNBWaultswapWorkerAddress = BUSDBNBWaultswapWorker.address;
export const ALPACABNBWaultswapWorkerAddress = ALPACABNBWaultswapWorker.address;
export const WAULTXBNBWaultswapWorkerAddress = WAULTXBNBWaultswapWorker.address;
// =================== BNB Mdex Worker Addresses ===================
export const MDXBNBMdexWorkerAddress = MDXBNBMdexworker.address;
export const USDTWBNBMdexWorkerAddress = USDTWBNBMdexworker.address;
export const ETHWBNBMdexWorkerAddress = ETHWBNBMdexworker.address;
export const BUSDWBNBMdexWorkerAddress = BUSDWBNBMdexworker.address;
export const BTCBWBNBMdexWorkerAddress = BTCBWBNBMdexworker.address;
// ===================  BNB Pancake Swap Worker Config ===================
export const CAKEBNBPancakeswapWorkerConfig = CAKEBNBPancakeswapWorker.config;
export const BTCBBNBPancakeswapWorkerConfig = BTCBBNBPancakeswapWorker.config;
export const ETHBNBPancakeswapWorkerConfig = ETHBNBPancakeswapWorker.config;
export const DOTBNBPancakeswapWorkerConfig = DOTBNBPancakeswapWorker.config;
export const UNIBNBPancakeswapWorkerConfig = UNIBNBPancakeswapWorker.config;
export const LINKBNBPancakeswapWorkerConfig = LINKBNBPancakeswapWorker.config;
export const XVSBNBPancakeswapWorkerConfig = XVSBNBPancakeswapWorker.config;
export const YFIBNBPancakeswapWorkerConfig = YFIBNBPancakeswapWorker.config;
export const ITAMBNBPancakeswapWorkerConfig = ITAMBNBPancakeswapWorker.config;
export const BUSDBNBPancakeswapWorkerConfig = BUSDBNBPancakeswapWorker.config;
export const BMXXBNBPancakeswapWorkerConfig = BMXXBNBPancakeswapWorker.config;
export const BELTBNBPancakeswapWorkerConfig = BELTBNBPancakeswapWorker.config;
export const BORBNBPancakeswapWorkerConfig = BORBNBPancakeswapWorker.config;
export const BRYBNBPancakeswapWorkerConfig = BRYBNBPancakeswapWorker.config;
export const PCWSBNBPancakeswapWorkerConfig = PCWSBNBPancakeswapWorker.config;
export const SWINGBYBNBPancakeswapWorkerConfig = SWINGBYBNBPancakeswapWorker.config;
export const DODOBNBPancakeswapWorkerConfig = DODOBNBPancakeswapWorker.config;
export const USDTBNBPancakeswapWorkerConfig = USDTBNBPancakeswapWorker.config;
export const ODDZBNBPancakeswapWorkerConfig = ODDZBNBPancakeswapWorker.config;
export const ADABNBPancakeswapWorkerConfig = ADABNBPancakeswapWorker.config;
export const TRXBNBPancakeswapWorkerConfig = TRXBNBPancakeswapWorker.config;
export const BTTBNBPancakeswapWorkerConfig = BTTBNBPancakeswapWorker.config;
export const AXSBNBPancakeswapWorkerConfig = AXSBNBPancakeswapWorker.config;
export const MBOXBNBPancakeswapWorkerConfig = MBOXBNBPancakeswapWorker.config;
export const NAOSBNBPancakeswapWorkerConfig = NAOSBNBPancakeswapWorker.config;
export const DVIBNBPancakeswapWorkerConfig = DVIBNBPancakeswapWorker.config;
export const QBTBNBPancakeswapWorkerConfig = QBTBNBPancakeswapWorker.config;
export const BMONBNBPancakeswapWorkerConfig = BMONBNBPancakeswapWorker.config;
export const SPSBNBPancakeswapWorkerConfig = SPSBNBPancakeswapWorker.config;
export const ETERNALBNBPancakeswapWorkerConfig = ETERNALBNBPancakeswapWorker.config;
export const THGBNBPancakeswapWorkerConfig = THGBNBPancakeswapWorker.config;
// =================== BNB PancakeSwap CakeMaxi Worker Config ===================
export const BNBPancakeswapCakeMaxiWorkerConfig = BNBPancakeswapCakeMaxiWorker.config;
// =================== BNB WaultEx Worker Config
export const WEXBNBWaultswapWorkerConfig = WEXBNBWaultswapWorker.config;
export const BUSDBNBWaultswapWorkerConfig = BUSDBNBWaultswapWorker.config;
export const ALPACABNBWaultswapWorkerConfig = ALPACABNBWaultswapWorker.config;
export const WAULTXBNBWaultswapWorkerConfig = WAULTXBNBWaultswapWorker.config;
// =================== BNB Mdex Worker Config ===================
export const MDXBNBMdexWorkerConfig = MDXBNBMdexworker.config;
export const USDTWBNBMdexWorkerConfig = USDTWBNBMdexworker.config;
export const ETHWBNBMdexWorkerConfig = ETHWBNBMdexworker.config;
export const BUSDWBNBMdexWorkerConfig = BUSDWBNBMdexworker.config;
export const BTCBWBNBMdexWorkerConfig = BTCBWBNBMdexworker.config;
// =================== BNB Pancake Swap Worker Strategies ===================
export const CAKEBNBPancakeswapWorkerStrategies = CAKEBNBPancakeswapWorker.strategies;
export const BTCBBNBPancakeswapWorkerStrategies = BTCBBNBPancakeswapWorker.strategies;
export const ETHBNBPancakeswapWorkerStrategies = ETHBNBPancakeswapWorker.strategies;
export const DOTBNBPancakeswapWorkerStrategies = DOTBNBPancakeswapWorker.strategies;
export const UNIBNBPancakeswapWorkerStrategies = UNIBNBPancakeswapWorker.strategies;
export const LINKBNBPancakeswapWorkerStrategies = LINKBNBPancakeswapWorker.strategies;
export const XVSBNBPancakeswapWorkerStrategies = XVSBNBPancakeswapWorker.strategies;
export const YFIBNBPancakeswapWorkerStrategies = YFIBNBPancakeswapWorker.strategies;
export const ITAMBNBPancakeswapWorkerStrategies = ITAMBNBPancakeswapWorker.strategies;
export const BUSDBNBPancakeswapWorkerStrategies = BUSDBNBPancakeswapWorker.strategies;
export const BMXXBNBPancakeswapWorkerStrategies = BMXXBNBPancakeswapWorker.strategies;
export const BELTBNBPancakeswapWorkerStrategies = BELTBNBPancakeswapWorker.strategies;
export const BORBNBPancakeswapWorkerStrategies = BORBNBPancakeswapWorker.strategies;
export const BRYBNBPancakeswapWorkerStrategies = BRYBNBPancakeswapWorker.strategies;
export const PCWSBNBPancakeswapWorkerStrategies = PCWSBNBPancakeswapWorker.strategies;
export const SWINGBYBNBPancakeswapWorkerStrategies = SWINGBYBNBPancakeswapWorker.strategies;
export const DODOBNBPancakeswapWorkerStrategies = DODOBNBPancakeswapWorker.strategies;
export const USDTBNBPancakeswapWorkerStrategies = USDTBNBPancakeswapWorker.strategies;
export const ODDZBNBPancakeswapWorkerStrategies = ODDZBNBPancakeswapWorker.strategies;
export const ADABNBPancakeswapWorkerStrategies = ADABNBPancakeswapWorker.strategies;
export const TRXBNBPancakeswapWorkerStrategies = TRXBNBPancakeswapWorker.strategies;
export const BTTBNBPancakeswapWorkerStrategies = BTTBNBPancakeswapWorker.strategies;
export const AXSBNBPancakeswapWorkerStrategies = AXSBNBPancakeswapWorker.strategies;
export const MBOXBNBPancakeswapWorkerStrategies = MBOXBNBPancakeswapWorker.strategies;
export const NAOSBNBPancakeswapWorkerStrategies = NAOSBNBPancakeswapWorker.strategies;
export const DVIBNBPancakeswapWorkerStrategies = DVIBNBPancakeswapWorker.strategies;
export const QBTBNBPancakeswapWorkerStrategies = QBTBNBPancakeswapWorker.strategies;
export const BMONBNBPancakeswapWorkerStrategies = BMONBNBPancakeswapWorker.strategies;
export const SPSBNBPancakeswapWorkerStrategies = SPSBNBPancakeswapWorker.strategies;
export const ETERNALBNBPancakeswapWorkerStrategies = ETERNALBNBPancakeswapWorker.strategies;
export const THGBNBPancakeswapWorkerStrategies = THGBNBPancakeswapWorker.strategies;
// =================== BNB PancakeSwap CakeMaxi Worker Strategies ===================
export const BNBPancakeswapCakeMaxiWorkerStrategies = BNBPancakeswapCakeMaxiWorker.strategies;
// =================== BNB Wault Ex Worker Strategies ===================
export const WEXBNBWaultswapWorkerStrategies = WEXBNBWaultswapWorker.strategies;
export const BUSDBNBWaultswapWorkerStrategies = BUSDBNBWaultswapWorker.strategies;
export const ALPACABNBWaultswapWorkerStrategies = ALPACABNBWaultswapWorker.strategies;
export const WAULTXBNBWaultswapWorkerStrategies = WAULTXBNBWaultswapWorker.strategies;
// =================== BNB Mdex Worker Strategies ===================
export const MDXBNBMdexworkerStrategies = MDXBNBMdexworker.strategies;
export const USDTWBNBMdexworkerStrategies = USDTWBNBMdexworker.strategies;
export const ETHWBNBMdexworkerStrategies = ETHWBNBMdexworker.strategies;
export const BUSDWBNBMdexworkerStrategies = BUSDWBNBMdexworker.strategies;
export const BTCBWBNBMdexworkerStrategies = BTCBWBNBMdexworker.strategies;
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
export const BTCBBUSDPancakeswapWorkerAddress = BTCBBUSDPancakeswapWorker.address;
export const USDTBUSDPancakeswapWorkerAddress = USDTBUSDPancakeswapWorker.address;
export const BNBBUSDPancakeswapWorkerAddress = BNBBUSDPancakeswapWorker.address;
export const VAIBUSDPancakeswapWorkerAddress = VAIBUSDPancakeswapWorker.address;
export const USDCBUSDPancakeswapWorkerAddress = USDCBUSDPancakeswapWorker.address;
export const DAIBUSDPancakeswapWorkerAddress = DAIBUSDPancakeswapWorker.address;
export const USTBUSDPancakeswapWorkerAddress = USTBUSDPancakeswapWorker.address;
export const ALPACABUSDPancakeswapWorkerAddress = ALPACABUSDPancakeswapWorker.address;
export const CAKEBUSDPancakeswapWorkerAddress = CAKEBUSDPancakeswapWorker.address;
export const FORMBUSDPancakeswapWorkerAddress = FORMBUSDPancakeswapWorker.address;
export const TUSDBUSDPancakeswapWorkerAddress = TUSDBUSDPancakeswapWorker.address;
export const ORBSBUSDPancakeswapWorkerAddress = ORBSBUSDPancakeswapWorker.address;
export const TRXBUSDPancakeswapWorkerAddress = TRXBUSDPancakeswapWorker.address;
export const BTTBUSDPancakeswapWorkerAddress = BTTBUSDPancakeswapWorker.address;
export const PMONBUSDPancakeswapWorkerAddress = PMONBUSDPancakeswapWorker.address;
export const PHABUSDPancakeswapWorkerAddress = PHABUSDPancakeswapWorker.address;
export const POTSBUSDPancakeswapWorkerAddress = POTSBUSDPancakeswapWorker.address;
export const BMONBUSDPancakeswapWorkerAddress = BMONBUSDPancakeswapWorker.address;
export const HIGHBUSDPancakeswapWorkerAddress = HIGHBUSDPancakeswapWorker.address;
// =================== BUSD PancakeSwap CakeMaxi Worker Address ===================
export const BUSDPancakeswapCakeMaxiWorkerAddress = BUSDPancakeswapCakeMaxiWorker.address;
// =================== BUSD Wault Ex Worker Address ===================
export const ETHBUSDWaultswapWorkerAddress = ETHBUSDWaultswapWorker.address;
export const BNBBUSDWaultswapWorkerAddress = BNBBUSDWaultswapWorker.address;
export const USDTBUSDWaultswapWorkerAddress = USDTBUSDWaultswapWorker.address;
export const BTCBBUSDWaultswapWorkerAddress = BTCBBUSDWaultswapWorker.address;
export const WUSDBUSDWaultswapWorkerAddress = WUSDBUSDWaultswapWorker.address;
// =================== BUSD Mdex Worker Address ===================
export const MDXBUSDMdexWorkerAddress = MDXBUSDMdexWorker.address;
export const WBNBBUSDMdexWorkerAddress = WBNBBUSDMdexWorker.address;
// =================== BUSD Pancake Swap Worker Config ===================
export const BTCBBUSDPancakeswapWorkerConfig = BTCBBUSDPancakeswapWorker.config;
export const USDTBUSDPancakeswapWorkerConfig = USDTBUSDPancakeswapWorker.config;
export const BNBBUSDPancakeswapWorkerConfig = BNBBUSDPancakeswapWorker.config;
export const VAIBUSDPancakeswapWorkerConfig = VAIBUSDPancakeswapWorker.config;
export const USDCBUSDPancakeswapWorkerConfig = USDCBUSDPancakeswapWorker.config;
export const DAIBUSDPancakeswapWorkerConfig = DAIBUSDPancakeswapWorker.config;
export const USTBUSDPancakeswapWorkerConfig = USTBUSDPancakeswapWorker.config;
export const ALPACABUSDPancakeswapWorkerConfig = ALPACABUSDPancakeswapWorker.config;
export const CAKEBUSDPancakeswapWorkerConfig = CAKEBUSDPancakeswapWorker.config;
export const FORMBUSDPancakeswapWorkerConfig = FORMBUSDPancakeswapWorker.config;
export const TUSDBUSDPancakeswapWorkerConfig = TUSDBUSDPancakeswapWorker.config;
export const ORBSBUSDPancakeswapWorkerConfig = ORBSBUSDPancakeswapWorker.config;
export const TRXBUSDPancakeswapWorkerConfig = TRXBUSDPancakeswapWorker.config;
export const BTTBUSDPancakeswapWorkerConfig = BTTBUSDPancakeswapWorker.config;
export const PMONBUSDPancakeswapWorkerConfig = PMONBUSDPancakeswapWorker.config;
export const PHABUSDPancakeswapWorkerConfig = PHABUSDPancakeswapWorker.config;
export const POTSBUSDPancakeswapWorkerConfig = POTSBUSDPancakeswapWorker.config;
export const BMONBUSDPancakeswapWorkerConfig = BMONBUSDPancakeswapWorker.config;
export const HIGHBUSDPancakeswapWorkerConfig = HIGHBUSDPancakeswapWorker.config;
// =================== BUSD PancakeSwap CakeMaxi Worker Config ===================
export const BUSDPancakeswapCakeMaxiWorkerConfig = BUSDPancakeswapCakeMaxiWorker.config;
// =================== BUSD WaultEx Worker Config ===================
export const ETHBUSDWaultswapWorkerConfig = ETHBUSDWaultswapWorker.config;
export const BNBBUSDWaultswapWorkerConfig = BNBBUSDWaultswapWorker.config;
export const USDTBUSDWaultswapWorkerConfig = USDTBUSDWaultswapWorker.config;
export const BTCBBUSDWaultswapWorkerConfig = BTCBBUSDWaultswapWorker.config;
export const WUSDBUSDWaultswapWorkerConfig = WUSDBUSDWaultswapWorker.config;
// =================== BUSD Mdex Worker Config ===================
export const MDXBUSDMdexWorkerConfig = MDXBUSDMdexWorker.config;
export const WBNBBUSDMdexWorkerConfig = WBNBBUSDMdexWorker.config;
// =================== BUSD Pancake Swap Worker Strategies ===================
export const BTCBBUSDPancakeswapWorkerStrategies = BTCBBUSDPancakeswapWorker.strategies;
export const USDTBUSDPancakeswapWorkerStrategies = USDTBUSDPancakeswapWorker.strategies;
export const BNBBUSDPancakeswapWorkerStrategies = BNBBUSDPancakeswapWorker.strategies;
export const VAIBUSDPancakeswapWorkerStrategies = VAIBUSDPancakeswapWorker.strategies;
export const USDCBUSDPancakeswapWorkerStrategies = USDCBUSDPancakeswapWorker.strategies;
export const DAIBUSDPancakeswapWorkerStrategies = DAIBUSDPancakeswapWorker.strategies;
export const USTBUSDPancakeswapWorkerStrategies = USTBUSDPancakeswapWorker.strategies;
export const ALPACABUSDPancakeswapWorkerStrategies = ALPACABUSDPancakeswapWorker.strategies;
export const CAKEBUSDPancakeswapWorkerStrategies = CAKEBUSDPancakeswapWorker.strategies;
export const FORMBUSDPancakeswapWorkerStrategies = FORMBUSDPancakeswapWorker.strategies;
export const TUSDBUSDPancakeswapWorkerStrategies = TUSDBUSDPancakeswapWorker.strategies;
export const ORBSBUSDPancakeswapWorkerStrategies = ORBSBUSDPancakeswapWorker.strategies;
export const TRXBUSDPancakeswapWorkerStrategies = TRXBUSDPancakeswapWorker.strategies;
export const BTTBUSDPancakeswapWorkerStrategies = BTTBUSDPancakeswapWorker.strategies;
export const PMONBUSDPancakeswapWorkerStrategies = PMONBUSDPancakeswapWorker.strategies;
export const PHABUSDPancakeswapWorkerStrategies = PHABUSDPancakeswapWorker.strategies;
export const POTSBUSDPancakeswapWorkerStrategies = POTSBUSDPancakeswapWorker.strategies;
export const BMONBUSDPancakeswapWorkerStrategies = BMONBUSDPancakeswapWorker.strategies;
export const HIGHBUSDPancakeswapWorkerStrategies = HIGHBUSDPancakeswapWorker.strategies;
// =================== BUSD PancakeSwap CakeMaxi Worker Strategies ===================
export const BUSDPancakeswapCakeMaxiWorkerStrategies = BUSDPancakeswapCakeMaxiWorker.strategies;
// =================== BUSD WaultEx Worker Strategies ===================
export const ETHBUSDWaultswapWorkerStrategies = ETHBUSDWaultswapWorker.strategies;
export const BNBBUSDWaultswapWorkerStrategies = BNBBUSDWaultswapWorker.strategies;
export const USDTBUSDWaultswapWorkerStrategies = USDTBUSDWaultswapWorker.strategies;
export const BTCBBUSDWaultswapWorkerStrategies = BTCBBUSDWaultswapWorker.strategies;
export const WUSDBUSDWaultswapWorkerStrategies = WUSDBUSDWaultswapWorker.strategies;
// =================== BUSD Mdex Worker Strategies ===================
export const MDXBUSDMdexWorkerStrategies = MDXBUSDMdexWorker.strategies;
export const WBNBBUSDMdexWorkerStrategies = WBNBBUSDMdexWorker.strategies;
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
export const BETHETHPancakeswapWorkerAddress = BETHETHPancakeswapWorker.address;
export const COMPETHPancakeswapWorkerAddress = COMPETHPancakeswapWorker.address;
export const SUSHIETHPancakeswapWorkerAddress = SUSHIETHPancakeswapWorker.address;
export const BNBETHPancakeswapWorkerAddress = BNBETHPancakeswapWorker.address;
export const BTCBETHPancakeswapWorkerAddress = BTCBETHPancakeswapWorker.address;
export const USDCETHPancakeswapWorkerAddress = USDCETHPancakeswapWorker.address;
// =================== ETH PancakeSwap CakeMaxi Worker Address ===================
export const ETHPancakeswapCakeMaxiWorkerAddress = ETHPancakeswapCakeMaxiWorker.address;
// =================== ETH WaultEx Worker Adress ===================
export const BUSDETHWaultswapWorkerAddress = BUSDETHWaultswapWorker.address;
export const BTCBETHWaultswapWorkerAddress = BTCBETHWaultswapWorker.address;
export const BETHETHWaultswapWorkerAddress = BETHETHWaultswapWorker.address;
export const USDTETHWaultswapWorkerAddress = USDTETHWaultswapWorker.address;
// =================== ETH Mdex Worker Adress ===================
export const USDTETHMdexWorkerAddress = USDTETHMdexWorker.address;
export const WBNBETHMdexWorkerAddress = WBNBETHMdexWorker.address;
export const BTCBETHMdexWorkerAddress = BTCBETHMdexWorker.address;
// =================== ETH PancakeSwap Worker Config ===================
export const BETHETHPancakeswapWorkerConfig = BETHETHPancakeswapWorker.config;
export const COMPETHPancakeswapWorkerConfig = COMPETHPancakeswapWorker.config;
export const SUSHIETHPancakeswapWorkerConfig = SUSHIETHPancakeswapWorker.config;
export const BNBETHPancakeswapWorkerConfig = BNBETHPancakeswapWorker.config;
export const BTCBETHPancakeswapWorkerConfig = BTCBETHPancakeswapWorker.config;
export const USDCETHPancakeswapWorkerConfig = USDCETHPancakeswapWorker.config;
// =================== ETH PancakeSwap CakeMaxi Worker Config ===================
export const ETHPancakeswapCakeMaxiWorkerConfig = ETHPancakeswapCakeMaxiWorker.config;
// =================== ETH WaultEx Worker Config ===================
export const BUSDETHWaultswapWorkerConfig = BUSDETHWaultswapWorker.config;
export const BTCBETHWaultswapWorkerConfig = BTCBETHWaultswapWorker.config;
export const BETHETHWaultswapWorkerConfig = BETHETHWaultswapWorker.config;
export const USDTETHWaultswapWorkerConfig = USDTETHWaultswapWorker.config;
// =================== ETH Mdex Worker Config ===================
export const USDTETHMdexWorkerConfig = USDTETHMdexWorker.config;
export const WBNBETHMdexWorkerConfig = WBNBETHMdexWorker.config;
export const BTCBETHMdexWorkerConfig = BTCBETHMdexWorker.config;
// =================== ETH PancakeSwap Worker Strategies ===================
export const BETHETHPancakeswapWorkerStrategies = BETHETHPancakeswapWorker.strategies;
export const COMPETHPancakeswapWorkerStrategies = COMPETHPancakeswapWorker.strategies;
export const SUSHIETHPancakeswapWorkerStrategies = SUSHIETHPancakeswapWorker.strategies;
export const BNBETHPancakeswapWorkerStrategies = BNBETHPancakeswapWorker.strategies;
export const BTCBETHPancakeswapWorkerStrategies = BTCBETHPancakeswapWorker.strategies;
export const USDCETHPancakeswapWorkerStrategies = USDCETHPancakeswapWorker.strategies;
// =================== ETH PancakeSwap CakeMaxi Worker Strategies ===================
export const ETHPancakeswapCakeMaxiWorkerStrategies = ETHPancakeswapCakeMaxiWorker.strategies;
// =================== ETH WaultEx Worker Strategies ===================
export const BUSDETHWaultswapWorkerStrategies = BUSDETHWaultswapWorker.strategies;
export const BTCBETHWaultswapWorkerStrategies = BTCBETHWaultswapWorker.strategies;
export const BETHETHWaultswapWorkerStrategies = BETHETHWaultswapWorker.strategies;
export const USDTETHWaultswapWorkerStrategies = USDTETHWaultswapWorker.strategies;
// =================== ETH Mdex Worker Strategies ===================
export const USDTETHMdexWorkerStrategies = USDTETHMdexWorker.strategies;
export const WBNBETHMdexWorkerStrategies = WBNBETHMdexWorker.strategies;
export const BTCBETHMdexWorkerStrategies = BTCBETHMdexWorker.strategies;
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
export const BNBUSDTPancakeswapWorkerAddress = BNBUSDTPancakeswapWorker.address;
export const BUSDUSDTPancakeswapWorkerAddress = BUSDUSDTPancakeswapWorker.address;
export const CAKEUSDTPancakeswapWorkerAddress = CAKEUSDTPancakeswapWorker.address;
export const USDCUSDTPancakeswapWorkerAddress = USDCUSDTPancakeswapWorker.address;
// =================== USDT PancakeSwap CakeMaxi Worker Address ===================
export const USDTPancakeswapCakeMaxiWorkerAddress = USDTPancakeswapCakeMaxiWorker.address;
// =================== USDT WaultEx Worker Address ===================
export const ALPACAUSDTWaultswapWorkerAddress = ALPACAUSDTWaultswapWorker.address;
export const WEXUSDTWaultswapWorkerAddress = WEXUSDTWaultswapWorker.address;
export const BUSDUSDTWaultswapWorkerAddress = BUSDUSDTWaultswapWorker.address;
export const BTCBUSDTWaultswapWorkerAddress = BTCBUSDTWaultswapWorker.address;
export const ETHUSDTWaultswapWorkerAddress = ETHUSDTWaultswapWorker.address;
export const MATICUSDTWaultswapWorkerAddress = MATICUSDTWaultswapWorker.address;
export const TUSDUSDTWaultswapWorkerAddress = TUSDUSDTWaultswapWorker.address;
// =================== USDT Mdex Worker Address ===================
export const BTCBUSDTMdexWorkerAddress = BTCBUSDTMdexWorker.address;
export const ETHUSDTMdexWorkerAddress = ETHUSDTMdexWorker.address;
export const WBNBUSDTMdexWorkerAddress = WBNBUSDTMdexWorker.address;
export const USDCUSDTMdexWorkerAddress = USDCUSDTMdexWorker.address;
export const DAIUSDTMdexWorkerAddress = DAIUSDTMdexWorker.address;
// =================== USDT PancakeSwap Worker Config ===================
export const BNBUSDTPancakeswapWorkerConfig = BNBUSDTPancakeswapWorker.config;
export const BUSDUSDTPancakeswapWorkerConfig = BUSDUSDTPancakeswapWorker.config;
export const CAKEUSDTPancakeswapWorkerConfig = CAKEUSDTPancakeswapWorker.config;
export const USDCUSDTPancakeswapWorkerConfig = USDCUSDTPancakeswapWorker.config;
// =================== USDT PancakeSwap CakeMaxi Worker ===================
export const USDTPancakeswapCakeMaxiWorkerConfig = USDTPancakeswapCakeMaxiWorker.config;
// =================== USDT WaultEx Worker Config ===================
export const ALPACAUSDTWaultswapWorkerConfig = ALPACAUSDTWaultswapWorker.config;
export const WEXUSDTWaultswapWorkerConfig = WEXUSDTWaultswapWorker.config;
export const BUSDUSDTWaultswapWorkerConfig = BUSDUSDTWaultswapWorker.config;
export const BTCBUSDTWaultswapWorkerConfig = BTCBUSDTWaultswapWorker.config;
export const ETHUSDTWaultswapWorkerConfig = ETHUSDTWaultswapWorker.config;
export const MATICUSDTWaultswapWorkerConfig = MATICUSDTWaultswapWorker.config;
export const TUSDUSDTWaultswapWorkerConfig = TUSDUSDTWaultswapWorker.config;
// =================== USDT Mdex Worker Config ===================
export const BTCBUSDTMdexWorkerConfig = BTCBUSDTMdexWorker.config;
export const ETHUSDTMdexWorkerConfig = ETHUSDTMdexWorker.config;
export const WBNBUSDTMdexWorkerConfig = WBNBUSDTMdexWorker.config;
export const USDCUSDTMdexWorkerConfig = USDCUSDTMdexWorker.config;
export const DAIUSDTMdexWorkerConfig = DAIUSDTMdexWorker.config;
// =================== USDT PancakeSwap Worker Strategies ===================
export const BNBUSDTPancakeswapWorkerStrategies = BNBUSDTPancakeswapWorker.strategies;
export const BUSDUSDTPancakeswapWorkerStrategies = BUSDUSDTPancakeswapWorker.strategies;
export const CAKEUSDTPancakeswapWorkerStrategies = CAKEUSDTPancakeswapWorker.strategies;
export const USDCUSDTPancakeswapWorkerStrategies = USDCUSDTPancakeswapWorker.strategies;
// =================== USDT PancakeSwap CakeMaxi Worker Strategies ===================
export const USDTPancakeswapCakeMaxiWorkerStrategies = USDTPancakeswapCakeMaxiWorker.strategies;
// =================== USDT WaultSwap Worker Strategies ===================
export const ALPACAUSDTWaultswapWorkerStrategies = ALPACAUSDTWaultswapWorker.strategies;
export const WEXUSDTWaultswapWorkerStrategies = WEXUSDTWaultswapWorker.strategies;
export const BUSDUSDTWaultswapWorkerStrategies = BUSDUSDTWaultswapWorker.strategies;
export const BTCBUSDTWaultswapWorkerStrategies = BTCBUSDTWaultswapWorker.strategies;
export const ETHUSDTWaultswapWorkerStrategies = ETHUSDTWaultswapWorker.strategies;
export const MATICUSDTWaultswapWorkerStrategies = MATICUSDTWaultswapWorker.strategies;
export const TUSDUSDTWaultswapWorkerStrategies = TUSDUSDTWaultswapWorker.strategies;
// =================== USDT Mdex Worker Strategies ===================
export const BTCBUSDTMdexWorkerStrategies = BTCBUSDTMdexWorker.strategies;
export const ETHUSDTMdexWorkerStrategies = ETHUSDTMdexWorker.strategies;
export const WBNBUSDTMdexWorkerStrategies = WBNBUSDTMdexWorker.strategies;
export const USDCUSDTMdexWorkerStrategies = USDCUSDTMdexWorker.strategies;
export const DAIUSDTMdexWorkerStrategies = DAIUSDTMdexWorker.strategies;
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
export const BNBBTCBPancakeswapWorkerAddress = BNBBTCBPancakeswapWorker.address;
export const BUSDBTCBPancakeswapWorkerAddress = BUSDBTCBPancakeswapWorker.address;
export const ETHBTCBPancakeswapWorkerAddress = ETHBTCBPancakeswapWorker.address;
// =================== BTCB PancakeSwap CakeMaxi Worker Address ===================
export const BTCBPancakeswapCakeMaxiWorkerAddress = BTCBPancakeswapCakeMaxiWorker.address;
// =================== BTCB WaultEx Worker Address ===================
export const ETHBTCBWaultswapWorkerAddress = ETHBTCBWaultswapWorker.address;
export const USDTBTCBWaultswapWorkerAddress = USDTBTCBWaultswapWorker.address;
export const BUSDBTCBWaultswapWorkerAddress = BUSDBTCBWaultswapWorker.address;
// =================== BTCB Mdex Worker Address ===================
export const USDTBTCBMdexWorkerAddress = USDTBTCBMdexWorker.address;
export const ETHBTCBMdexWorkerAddress = ETHBTCBMdexWorker.address;
export const WBNBBTCBMdexWorkerAddress = WBNBBTCBMdexWorker.address;
// =================== BTCB PancakeSwap Worker Config ===================
export const BNBBTCBPancakeswapWorkerConfig = BNBBTCBPancakeswapWorker.config;
export const BUSDBTCBPancakeswapWorkerConfig = BUSDBTCBPancakeswapWorker.config;
export const ETHBTCBPancakeswapWorkerConfig = ETHBTCBPancakeswapWorker.config;
// =================== BTCB PancakeSwap CakeMaxi Worker Config ===================
export const BTCBPancakeswapCakeMaxiWorkerConfig = BTCBPancakeswapCakeMaxiWorker.config;
// =================== BTCB WaultEx Worker Config ===================
export const ETHBTCBWaultswapWorkerConfig = ETHBTCBWaultswapWorker.config;
export const USDTBTCBWaultswapWorkerConfig = USDTBTCBWaultswapWorker.config;
export const BUSDBTCBWaultswapWorkerConfig = BUSDBTCBWaultswapWorker.config;
// =================== BTCB Mdex Worker Config ===================
export const USDTBTCBMdexWorkerConfig = USDTBTCBMdexWorker.config;
export const ETHBTCBMdexWorkerConfig = ETHBTCBMdexWorker.config;
export const WBNBBTCBMdexWorkerConfig = WBNBBTCBMdexWorker.config;
// =================== BTCB PancakeSwap Worker Strategies ===================
export const BNBBTCBPancakeswapWorkerStrategies = BNBBTCBPancakeswapWorker.strategies;
export const BUSDBTCBPancakeswapWorkerStrategies = BUSDBTCBPancakeswapWorker.strategies;
export const ETHBTCBPancakeswapWorkerStrategies = ETHBTCBPancakeswapWorker.strategies;
// =================== BTCB PancakeSwap CakeMaxi Worker Strategies ===================
export const BTCBPancakeswapCakeMaxiWorkerStrategies = BTCBPancakeswapCakeMaxiWorker.strategies;
// =================== BTCB WaultEx Worker Strategies ===================
export const ETHBTCBWaultswapWorkerStrategies = ETHBTCBWaultswapWorker.strategies;
export const USDTBTCBWaultswapWorkerStrategies = USDTBTCBWaultswapWorker.strategies;
export const BUSDBTCBWaultswapWorkerStrategies = BUSDBTCBWaultswapWorker.strategies;
// =================== BTCB Mdex Worker Strategies ===================
export const USDTBTCBMdexWorkerStrategies = USDTBTCBMdexWorker.strategies;
export const ETHBTCBMdexWorkerStrategies = ETHBTCBMdexWorker.strategies;
export const WBNBBTCBMdexWorkerStrategies = WBNBBTCBMdexWorker.strategies;
// ########################### ALPACA WORKERS #############################
// =================== ALPACA PancakeSwap Workers ===================
const BUSDALPACAPancakeswapWorker = alpacaVault.workers.find((o) => o.name === 'BUSD-ALPACA PancakeswapWorker');
// =================== ALPACA WaultEx Workers ===================
const USDTALPACAWaultswapWorker = alpacaVault.workers.find((o) => o.name === 'USDT-ALPACA WaultswapWorker');
const BNBALPACAWaultswapWorker = alpacaVault.workers.find((o) => o.name === 'WBNB-ALPACA WaultswapWorker');
// =================== ALPACA PancakeSwap Worker Address ===================
export const BUSDALPACAPancakeswapWorkerAddress = BUSDALPACAPancakeswapWorker.address;
// =================== ALPACA WaultEx Worker Address ===================
export const USDTALPACAWaultswapWorkerAddress = USDTALPACAWaultswapWorker.address;
export const BNBALPACAWaultswapWorkerAddress = BNBALPACAWaultswapWorker.address;
// =================== ALPACA PancakeSwap Worker Config ===================
export const BUSDALPACAPancakeswapWorkerConfig = BUSDALPACAPancakeswapWorker.config;
// =================== ALPACA WaultEx Worker Config ===================
export const USDTALPACAWaultswapWorkerConfig = USDTALPACAWaultswapWorker.config;
export const BNBALPACAWaultswapWorkerConfig = BNBALPACAWaultswapWorker.config;
// =================== ALPACA PancakeSwap Worker Strategies ===================
export const BUSDALPACAPancakeswapWorkerStrategies = BUSDALPACAPancakeswapWorker.strategies;
// =================== ALPACA WaultEx Worker Strategies ===================
export const USDTALPACAWaultswapWorkerStrategies = USDTALPACAWaultswapWorker.strategies;
export const BNBALPACAWaultswapWorkerStrategies = BNBALPACAWaultswapWorker.strategies;
// ########################### TUSD WORKERS #############################
// =================== TUSD PancakeSwap Workers ===================
const BUSDTUSDPancakeswapWorker = tusdVault.workers.find((o) => o.name === 'BUSD-TUSD PancakeswapWorker');
// =================== TUSD PancakeSwap CakeMaxi Workers ===================
const TUSDPancakeswapCakeMaxiWorker = tusdVault.workers.find((o) => o.name === 'TUSD CakeMaxiWorker');
// =================== TUSD WaultEx Workers ===================
const USDTTUSDWaultswapWorker = tusdVault.workers.find((o) => o.name === 'USDT-TUSD WaultswapWorker');
// =================== TUSD PancakeSwap Worker Address ===================
export const BUSDTUSDPancakeswapWorkerAddress = BUSDTUSDPancakeswapWorker.address;
// =================== TUSD PancakeSwap CakeMaxi Worker Address ===================
export const TUSDPancakeswapCakeMaxiWorkerAddress = TUSDPancakeswapCakeMaxiWorker.address;
// =================== TUSD WaultEx Worker Address ===================
export const USDTTUSDWaultswapWorkerAddress = USDTTUSDWaultswapWorker.address;
// =================== TUSD PancakeSwap Worker Config ===================
export const BUSDTUSDPancakeswapWorkerConfig = BUSDTUSDPancakeswapWorker.config;
// =================== TUSD PancakeSwap CakeMaxi Worker Config ===================
export const TUSDPancakeswapCakeMaxiWorkerConfig = TUSDPancakeswapCakeMaxiWorker.config;
// =================== TUSD WaultEx Worker Config ===================
export const USDTTUSDWaultswapWorkerConfig = USDTTUSDWaultswapWorker.config;
// =================== TUSD PancakeSwap Worker Strategies ===================
export const BUSDTUSDPancakeswapWorkerStrategies = BUSDTUSDPancakeswapWorker.strategies;
// =================== TUSD PancakeSwap CakeMaxi Worker Strategies ===================
export const TUSDPancakeswapCakeMaxiWorkerStrategies = TUSDPancakeswapCakeMaxiWorker.strategies;
// =================== TUSD WaultEx Worker Strategies ===================
export const USDTTUSDWaultswapWorkerStrategies = USDTTUSDWaultswapWorker.strategies;
// ########################### USDC WORKERS #############################
// =================== USDC PancakeSwap Workers ===================
const ETHUSDCPancakeswapWorker = usdcVault.workers.find((o) => o.name === 'ETH-USDC PancakeswapWorker');
const USDTUSDCPancakeswapWorker = usdcVault.workers.find((o) => o.name === 'USDT-USDC PancakeswapWorker');
// =================== USDC PancakeSwap CakeMaxi Workers ===================
const USDCPancakeswapCakeMaxiWorker = usdcVault.workers.find((o) => o.name === 'USDC CakeMaxiWorker');
// =================== USDC PancakeSwap Worker Address ===================
export const ETHUSDCPancakeswapWorkerAddress = ETHUSDCPancakeswapWorker.address;
export const USDTUSDCPancakeswapWorkerAddress = USDTUSDCPancakeswapWorker.address;
// =================== USDC PancakeSwap CakeMaxi Worker Address ===================
export const USDCPancakeswapCakeMaxiWorkerAddress = USDCPancakeswapCakeMaxiWorker.address;
// =================== USDC PancakeSwap Worker Config ===================
export const ETHUSDCPancakeswapWorkerConfig = ETHUSDCPancakeswapWorker.config;
export const USDTUSDCPancakeswapWorkerConfig = USDTUSDCPancakeswapWorker.config;
// =================== USDC PancakeSwap CakeMaxi Worker Config ===================
export const USDCPancakeswapCakeMaxiWorkerConfig = USDCPancakeswapCakeMaxiWorker.config;
// =================== USDC PancakeSwap Worker Strategies ===================
export const ETHUSDCPancakeswapWorkerStrategies = ETHUSDCPancakeswapWorker.strategies;
export const USDTUSDCPancakeswapWorkerStrategies = USDTUSDCPancakeswapWorker.strategies;
// =================== USDC PancakeSwap Worker Strategies ===================
export const USDCPancakeswapCakeMaxiWorkerStrategies = USDCPancakeswapCakeMaxiWorker.strategies;
// =================== DEBT TOKENS ===================
export const DebtTokenBNBAddress = (_b = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBNB V2')) === null || _b === void 0 ? void 0 : _b.address;
export const DebtTokenBUSDAddress = (_c = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBUSD V2')) === null || _c === void 0 ? void 0 : _c.address;
export const DebtTokenETHAddress = (_d = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbETH V2')) === null || _d === void 0 ? void 0 : _d.address;
export const DebtTokenALPACAAddress = (_e = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbALPACA V2')) === null || _e === void 0 ? void 0 : _e.address;
export const DebtTokenUSDTAddress = (_f = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDT V2')) === null || _f === void 0 ? void 0 : _f.address;
export const DebtTokenBTCBAddress = (_g = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbBTCB V2')) === null || _g === void 0 ? void 0 : _g.address;
export const DebtTokenTUSDAddress = (_h = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbTUSD V2')) === null || _h === void 0 ? void 0 : _h.address;
export const DebtTokenUSDCAddress = (_j = config.FairLaunch.pools.find((o) => o.stakingToken === 'debtIbUSDC V2')) === null || _j === void 0 ? void 0 : _j.address;
// =================== Pancake Master Chef ===================
export const PancakeMasterChefAddress = config.Exchanges.Pancakeswap.MasterChef;
// =================== LP Addresses ===================
// =================== BNB Pancake LP Adress ===================
export const CAKEWBNBLpTokenAddress = (_k = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-WBNB LP')) === null || _k === void 0 ? void 0 : _k.address;
export const BTCBWBNBLpTokenAddress = (_l = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-WBNB LP')) === null || _l === void 0 ? void 0 : _l.address;
export const ETHWBNBLpTokenAddress = (_m = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-WBNB LP')) === null || _m === void 0 ? void 0 : _m.address;
export const DOTWBNBLpTokenAddress = (_o = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DOT-WBNB LP')) === null || _o === void 0 ? void 0 : _o.address;
export const UNIWBNBLpTokenAddress = (_p = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UNI-WBNB LP')) === null || _p === void 0 ? void 0 : _p.address;
export const LINKWBNBLpTokenAddress = (_q = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'LINK-WBNB LP')) === null || _q === void 0 ? void 0 : _q.address;
export const XVSWBNBLpTokenAddress = (_r = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'XVS-WBNB LP')) === null || _r === void 0 ? void 0 : _r.address;
export const YFIWBNBLpTokenAddress = (_s = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'YFI-WBNB LP')) === null || _s === void 0 ? void 0 : _s.address;
export const ITAMBNBLpTokenAddress = (_t = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ITAM-WBNB LP')) === null || _t === void 0 ? void 0 : _t.address;
export const bMXXBNBLpTokenAddress = (_u = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'bMXX-WBNB LP')) === null || _u === void 0 ? void 0 : _u.address;
export const BELTBNBLpTokenAddress = (_v = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BELT-WBNB LP')) === null || _v === void 0 ? void 0 : _v.address;
export const BORBNBLpTokenAddress = (_w = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BOR-WBNB LP')) === null || _w === void 0 ? void 0 : _w.address;
export const BRYBNBLpTokenAddress = (_x = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BRY-WBNB LP')) === null || _x === void 0 ? void 0 : _x.address;
export const PCWSBNBLpTokenAddress = (_y = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'pCWS-WBNB LP')) === null || _y === void 0 ? void 0 : _y.address;
export const SWINGBYBNBLpTokenAddress = (_z = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SWINGBY-WBNB LP')) === null || _z === void 0 ? void 0 : _z.address;
export const DODOBNBLpTokenAddress = (_0 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DODO-WBNB LP')) === null || _0 === void 0 ? void 0 : _0.address;
export const USDTBNBLpTokenAddress = (_1 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-WBNB LP')) === null || _1 === void 0 ? void 0 : _1.address;
export const ODDZBNBLpTokenAddress = (_2 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ODDZ-WBNB LP')) === null || _2 === void 0 ? void 0 : _2.address;
export const ADABNBLpTokenAddress = (_3 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ADA-WBNB LP')) === null || _3 === void 0 ? void 0 : _3.address;
export const TRXBNBLpTokenAddress = (_4 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-WBNB LP')) === null || _4 === void 0 ? void 0 : _4.address;
export const BTTBNBLpTokenAddress = (_5 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-WBNB LP')) === null || _5 === void 0 ? void 0 : _5.address;
export const AXSBNBLpTokenAddress = (_6 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'AXS-WBNB LP')) === null || _6 === void 0 ? void 0 : _6.address;
export const MBOXBNBLpTokenAddress = (_7 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'MBOX-WBNB LP')) === null || _7 === void 0 ? void 0 : _7.address;
export const NAOSBNBLpTokenAddress = (_8 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'NAOS-WBNB LP')) === null || _8 === void 0 ? void 0 : _8.address;
export const DVIBNBLpTokenAddress = (_9 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DVI-WBNB LP')) === null || _9 === void 0 ? void 0 : _9.address;
export const QBTBNBLpTokenAddress = (_10 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'QBT-WBNB LP')) === null || _10 === void 0 ? void 0 : _10.address;
export const BMONBNBLpTokenAddress = (_11 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-WBNB LP')) === null || _11 === void 0 ? void 0 : _11.address;
export const SPSBNBLpTokenAddress = (_12 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SPS-WBNB LP')) === null || _12 === void 0 ? void 0 : _12.address;
export const ETERNALBNBLpTokenAddress = (_13 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETERNAL-WBNB LP')) === null || _13 === void 0 ? void 0 : _13.address;
export const THGBNBLpTokenAddress = (_14 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'THG-WBNB LP')) === null || _14 === void 0 ? void 0 : _14.address;
// =================== BUSD Pancake LP Adress ===================
export const BTCBBUSDLpTokenAddress = (_15 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _15 === void 0 ? void 0 : _15.address;
export const USDTBUSDLpTokenAddress = (_16 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _16 === void 0 ? void 0 : _16.address;
export const WBNBBUSDLpTokenAddress = (_17 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _17 === void 0 ? void 0 : _17.address;
export const VAIBUSDLpTokenAddress = (_18 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'VAI-BUSD LP')) === null || _18 === void 0 ? void 0 : _18.address;
export const USDCBUSDLpTokenAddress = (_19 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-BUSD LP')) === null || _19 === void 0 ? void 0 : _19.address;
export const DAIBUSDLpTokenAddress = (_20 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'DAI-BUSD LP')) === null || _20 === void 0 ? void 0 : _20.address;
export const USTBUSDLpTokenAddress = (_21 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'UST-BUSD LP')) === null || _21 === void 0 ? void 0 : _21.address;
export const ALPACABUSDLpTokenAddress = (_22 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ALPACA-BUSD LP')) === null || _22 === void 0 ? void 0 : _22.address;
export const CAKEBUSDLpTokenAddress = (_23 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-BUSD LP')) === null || _23 === void 0 ? void 0 : _23.address;
export const FORMBUSDLpTokenAddress = (_24 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'FORM-BUSD LP')) === null || _24 === void 0 ? void 0 : _24.address;
export const TUSDBUSDLpTokenAddress = (_25 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TUSD-BUSD LP')) === null || _25 === void 0 ? void 0 : _25.address;
export const ORBSBUSDLpTokenAddress = (_26 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ORBS-BUSD LP')) === null || _26 === void 0 ? void 0 : _26.address;
export const TRXBUSDLpTokenAddress = (_27 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'TRX-BUSD LP')) === null || _27 === void 0 ? void 0 : _27.address;
export const BTTBUSDLpTokenAddress = (_28 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BTT-BUSD LP')) === null || _28 === void 0 ? void 0 : _28.address;
export const PMONBUSDLpTokenAddress = (_29 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PMON-BUSD LP')) === null || _29 === void 0 ? void 0 : _29.address;
export const PHABUSDLpTokenAddress = (_30 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'PHA-BUSD LP')) === null || _30 === void 0 ? void 0 : _30.address;
export const POTSBUSDLpTokenAddress = (_31 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'POTS-BUSD LP')) === null || _31 === void 0 ? void 0 : _31.address;
export const BMONBUSDLpTokenAddress = (_32 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BMON-BUSD LP')) === null || _32 === void 0 ? void 0 : _32.address;
export const HIGHBUSDLpTokenAddress = (_33 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'HIGH-BUSD LP')) === null || _33 === void 0 ? void 0 : _33.address;
// =================== ETH Pancake LP Adress ===================
export const BETHETHLpTokenAddress = (_34 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _34 === void 0 ? void 0 : _34.address;
export const COMPETHLpTokenAddress = (_35 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'COMP-ETH LP')) === null || _35 === void 0 ? void 0 : _35.address;
export const SUSHIETHLpTokenAddress = (_36 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'SUSHI-ETH LP')) === null || _36 === void 0 ? void 0 : _36.address;
export const WBNBETHLpTokenAddress = (_37 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'WBNB-ETH LP')) === null || _37 === void 0 ? void 0 : _37.address;
// =================== ETH Pancake LP Adress ===================
export const CAKEUSDTLpTokenAddress = (_38 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'CAKE-USDT LP')) === null || _38 === void 0 ? void 0 : _38.address;
export const USDCUSDTLpTokenAddress = (_39 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _39 === void 0 ? void 0 : _39.address;
// =================== BTCB Pancake LP Adress ===================
export const ETHBTCBLpTokenAddress = (_40 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _40 === void 0 ? void 0 : _40.address;
// =================== USDC Pancake LP Adress ===================
export const ETHUSDCLpTokenAddress = (_41 = config.Exchanges.Pancakeswap.LpTokens.find((o) => o.name === 'ETH-USDC LP')) === null || _41 === void 0 ? void 0 : _41.address;
// =================== Wault Master Chef ===================
export const WaultMasterAddress = config.Exchanges.Waultswap.WexMaster;
// =================== BNB Wault LP Adress ===================
export const WS_WEXWBNBLpTokenAddress = (_42 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-WBNB LP')) === null || _42 === void 0 ? void 0 : _42.address;
export const WS_ALPACAWBNBLpTokenAddress = (_43 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-WBNB LP')) === null || _43 === void 0 ? void 0 : _43.address;
export const WS_WAULTXWBNBLpTokenAddress = (_44 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WAULTx-WBNB LP')) === null || _44 === void 0 ? void 0 : _44.address;
// =================== BUSD Wault LP Adress ===================
export const WS_ETHBUSDLpTokenAddress = (_45 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BUSD LP')) === null || _45 === void 0 ? void 0 : _45.address;
export const WS_WBNBBUSDLpTokenAddress = (_46 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _46 === void 0 ? void 0 : _46.address;
export const WS_USDTBUSDLpTokenAddress = (_47 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'USDT-BUSD LP')) === null || _47 === void 0 ? void 0 : _47.address;
export const WS_BTCBBUSDLpTokenAddress = (_48 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-BUSD LP')) === null || _48 === void 0 ? void 0 : _48.address;
export const WS_WUSDBUSDLpTokenAddress = (_49 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WUSD-BUSD LP')) === null || _49 === void 0 ? void 0 : _49.address;
// =================== USDT Wault LP Adress ===================
export const WS_ALPACAUSDTLpTokenAddress = (_50 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ALPACA-USDT LP')) === null || _50 === void 0 ? void 0 : _50.address;
export const WS_WEXUSDTLpTokenAddress = (_51 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'WEX-USDT LP')) === null || _51 === void 0 ? void 0 : _51.address;
export const WS_BTCBUSDTLpTokenAddress = (_52 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _52 === void 0 ? void 0 : _52.address;
export const WS_ETHUSDTLpTokenAddress = (_53 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _53 === void 0 ? void 0 : _53.address;
export const WS_MATICUSDTLpTokenAddress = (_54 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'MATIC-USDT LP')) === null || _54 === void 0 ? void 0 : _54.address;
export const WS_TUSDUSDTLpTokenAddress = (_55 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'TUSD-USDT LP')) === null || _55 === void 0 ? void 0 : _55.address;
// =================== ETH Wault LP Adress ===================
export const WS_ETHBTCBLpTokenAddress = (_56 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _56 === void 0 ? void 0 : _56.address;
export const WS_BETHETHLpTokenAddress = (_57 = config.Exchanges.Waultswap.LpTokens.find((o) => o.name === 'BETH-ETH LP')) === null || _57 === void 0 ? void 0 : _57.address;
// =================== MDEX BSCPOOL ===================
export const MdexMasterAddress = config.Exchanges.Mdex.BSCPool;
// =================== BNB Mdex LP Adress ===================
export const MS_MDXWBNBLpTokenAddress = (_58 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-WBNB LP')) === null || _58 === void 0 ? void 0 : _58.address;
// =================== BUSD Mdex LP Adress ===================
export const MS_MDXBUSDLpTokenAddress = (_59 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'MDX-BUSD LP')) === null || _59 === void 0 ? void 0 : _59.address;
export const MS_WBNBBUSDLpTokenAddress = (_60 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BUSD LP')) === null || _60 === void 0 ? void 0 : _60.address;
// =================== USDT Mdex LP Adress ===================
export const MS_BTCBUSDTLpTokenAddress = (_61 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'BTCB-USDT LP')) === null || _61 === void 0 ? void 0 : _61.address;
export const MS_ETHUSDTLpTokenAddress = (_62 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-USDT LP')) === null || _62 === void 0 ? void 0 : _62.address;
export const MS_BUSDUSDTLpTokenAddress = (_63 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'BUSD-USDT LP')) === null || _63 === void 0 ? void 0 : _63.address;
export const MS_WBNBUSDTLpTokenAddress = (_64 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-USDT LP')) === null || _64 === void 0 ? void 0 : _64.address;
export const MS_USDCUSDTLpTokenAddress = (_65 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'USDC-USDT LP')) === null || _65 === void 0 ? void 0 : _65.address;
export const MS_DAIUSDTLpTokenAddress = (_66 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'DAI-USDT LP')) === null || _66 === void 0 ? void 0 : _66.address;
// =================== ETH Mdex LP Adress ===================
export const MS_WBNBETHLpTokenAddress = (_67 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-ETH LP')) === null || _67 === void 0 ? void 0 : _67.address;
// =================== BTCB Mdex LP Adress ===================
export const MS_ETHBTCBLpTokenAddress = (_68 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'ETH-BTCB LP')) === null || _68 === void 0 ? void 0 : _68.address;
export const MS_WBNBBTCBLpTokenAddress = (_69 = config.Exchanges.Mdex.LpTokens.find((o) => o.name === 'WBNB-BTCB LP')) === null || _69 === void 0 ? void 0 : _69.address;
export const WBNBTripleSlopeModel = bnbVault.tripleSlopeModel;
export const BUSDTripleSlopeModel = busdVault.tripleSlopeModel;
export const ETHTripleSlopeModel = ethVault.tripleSlopeModel;
export const ALPACATripleSlopeModel = alpacaVault.tripleSlopeModel;
export const USDTTripleSlopeModel = usdtVault.tripleSlopeModel;
export const BTCBTripleSlopeModel = btcbVault.tripleSlopeModel;
export const TUSDTripleSlopeModel = tusdVault.tripleSlopeModel;
export const USDCTripleSlopeModel = usdcVault.tripleSlopeModel;
// Merkle
export const MerkleDistributor = {
    ItamWeek1: config.MerkleDistributor['ITAM-week-1'],
    ItamWeek2: config.MerkleDistributor['ITAM-week-2'],
    ItamWeek3: config.MerkleDistributor['ITAM-week-3'],
    ItamWeek4: config.MerkleDistributor['ITAM-week-4'],
};
export const GrazingRange = config.GrazingRange;
export const GrazingRangeAddress = GrazingRange.address;
export const Scientix = config.Scientix;
export const ScientixStakingPoolsAddress = Scientix.StakingPools.address;
export const LatteSwap = config.LatteSwap;
export const LatteSwapMasterBaristaAddress = LatteSwap.MasterBarista.address;
export const LatteSwapBoosterAddress = LatteSwap.Booster.address;
export const MarsEcosystem = config.MarsEcosystem;
export const MarsEcosystemLiquidityMiningMasterAddress = MarsEcosystem.LiquidityMiningMaster.address;
// Others
export const MulticallAddress = config.MultiCall;
