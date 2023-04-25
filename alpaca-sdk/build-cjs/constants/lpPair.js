"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeGetLPAddressLPPair = exports.farmingPoolLPPair = void 0;
const entity_1 = require("../entity");
const maybe_1 = require("../utils/maybe");
const contracts_1 = require("./contracts");
exports.farmingPoolLPPair = {
    pcs: {
        [entity_1.TokenSymbol.WBNB]: {
            [entity_1.TokenSymbol.CAKE]: contracts_1.CAKEWBNBLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.BTCBWBNBLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.ETHWBNBLpTokenAddress,
            [entity_1.TokenSymbol.DOT]: contracts_1.DOTWBNBLpTokenAddress,
            [entity_1.TokenSymbol.UNI]: contracts_1.UNIWBNBLpTokenAddress,
            [entity_1.TokenSymbol.LINK]: contracts_1.LINKWBNBLpTokenAddress,
            [entity_1.TokenSymbol.XVS]: contracts_1.XVSWBNBLpTokenAddress,
            [entity_1.TokenSymbol.YFI]: contracts_1.YFIWBNBLpTokenAddress,
            [entity_1.TokenSymbol.ITAM]: contracts_1.ITAMBNBLpTokenAddress,
            [entity_1.TokenSymbol.BMXX]: contracts_1.bMXXBNBLpTokenAddress,
            [entity_1.TokenSymbol.BELT]: contracts_1.BELTBNBLpTokenAddress,
            [entity_1.TokenSymbol.BOR]: contracts_1.BORBNBLpTokenAddress,
            [entity_1.TokenSymbol.BRY]: contracts_1.BRYBNBLpTokenAddress,
            [entity_1.TokenSymbol.PCWS]: contracts_1.PCWSBNBLpTokenAddress,
            [entity_1.TokenSymbol.SWINGBY]: contracts_1.SWINGBYBNBLpTokenAddress,
            [entity_1.TokenSymbol.DODO]: contracts_1.DODOBNBLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.WBNBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.USDTBNBLpTokenAddress,
            [entity_1.TokenSymbol.ALPACA]: contracts_1.AlpacaBNBLpV2Address,
            [entity_1.TokenSymbol.BETH]: contracts_1.WBNBETHLpTokenAddress,
            [entity_1.TokenSymbol.ODDZ]: contracts_1.ODDZBNBLpTokenAddress,
            [entity_1.TokenSymbol.ADA]: contracts_1.ADABNBLpTokenAddress,
            [entity_1.TokenSymbol.TRX]: contracts_1.TRXBNBLpTokenAddress,
            [entity_1.TokenSymbol.BTT]: contracts_1.BTTBNBLpTokenAddress,
            [entity_1.TokenSymbol.AXS]: contracts_1.AXSBNBLpTokenAddress,
            [entity_1.TokenSymbol.MBOX]: contracts_1.MBOXBNBLpTokenAddress,
            [entity_1.TokenSymbol.NAOS]: contracts_1.NAOSBNBLpTokenAddress,
            [entity_1.TokenSymbol.DVI]: contracts_1.DVIBNBLpTokenAddress,
            [entity_1.TokenSymbol.QBT]: contracts_1.QBTBNBLpTokenAddress,
            [entity_1.TokenSymbol.BMON]: contracts_1.BMONBNBLpTokenAddress,
            [entity_1.TokenSymbol.SPS]: contracts_1.SPSBNBLpTokenAddress,
            [entity_1.TokenSymbol.ETERNAL]: contracts_1.ETERNALBNBLpTokenAddress,
            [entity_1.TokenSymbol.THG]: contracts_1.THGBNBLpTokenAddress,
        },
        [entity_1.TokenSymbol.BUSD]: {
            [entity_1.TokenSymbol.BTCB]: contracts_1.BTCBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.USDTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.WBNBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.VAI]: contracts_1.VAIBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDC]: contracts_1.USDCBUSDLpTokenAddress,
            [entity_1.TokenSymbol.DAI]: contracts_1.DAIBUSDLpTokenAddress,
            [entity_1.TokenSymbol.UST]: contracts_1.USTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.ALPACA]: contracts_1.ALPACABUSDLpTokenAddress,
            [entity_1.TokenSymbol.CAKE]: contracts_1.CAKEBUSDLpTokenAddress,
            [entity_1.TokenSymbol.FORM]: contracts_1.FORMBUSDLpTokenAddress,
            [entity_1.TokenSymbol.TUSD]: contracts_1.TUSDBUSDLpTokenAddress,
            [entity_1.TokenSymbol.ORBS]: contracts_1.ORBSBUSDLpTokenAddress,
            [entity_1.TokenSymbol.TRX]: contracts_1.TRXBUSDLpTokenAddress,
            [entity_1.TokenSymbol.BTT]: contracts_1.BTTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.PMON]: contracts_1.PMONBUSDLpTokenAddress,
            [entity_1.TokenSymbol.PHA]: contracts_1.PHABUSDLpTokenAddress,
            [entity_1.TokenSymbol.POTS]: contracts_1.POTSBUSDLpTokenAddress,
            [entity_1.TokenSymbol.BMON]: contracts_1.BMONBUSDLpTokenAddress,
            [entity_1.TokenSymbol.HIGH]: contracts_1.HIGHBUSDLpTokenAddress,
        },
        [entity_1.TokenSymbol.ETH]: {
            [entity_1.TokenSymbol.BETH]: contracts_1.BETHETHLpTokenAddress,
            [entity_1.TokenSymbol.COMP]: contracts_1.COMPETHLpTokenAddress,
            [entity_1.TokenSymbol.SUSHI]: contracts_1.SUSHIETHLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.ETHWBNBLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.ETHBTCBLpTokenAddress,
            [entity_1.TokenSymbol.USDC]: contracts_1.ETHUSDCLpTokenAddress,
        },
        [entity_1.TokenSymbol.ALPACA]: {
            [entity_1.TokenSymbol.BUSD]: contracts_1.ALPACABUSDLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.AlpacaBNBLpV2Address,
        },
        [entity_1.TokenSymbol.USDT]: {
            [entity_1.TokenSymbol.BUSD]: contracts_1.USDTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.USDTBNBLpTokenAddress,
            [entity_1.TokenSymbol.CAKE]: contracts_1.CAKEUSDTLpTokenAddress,
            [entity_1.TokenSymbol.USDC]: contracts_1.USDCUSDTLpTokenAddress,
        },
        [entity_1.TokenSymbol.BTCB]: {
            [entity_1.TokenSymbol.WBNB]: contracts_1.BTCBWBNBLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.BTCBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.ETHBTCBLpTokenAddress,
        },
        [entity_1.TokenSymbol.TUSD]: {
            [entity_1.TokenSymbol.BUSD]: contracts_1.TUSDBUSDLpTokenAddress,
        },
        [entity_1.TokenSymbol.USDC]: {
            [entity_1.TokenSymbol.ETH]: contracts_1.ETHUSDCLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.USDCUSDTLpTokenAddress,
        },
    },
    ws: {
        [entity_1.TokenSymbol.WBNB]: {
            [entity_1.TokenSymbol.WEX]: contracts_1.WS_WEXWBNBLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.WS_WBNBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.ALPACA]: contracts_1.WS_ALPACAWBNBLpTokenAddress,
            [entity_1.TokenSymbol.WAULTX]: contracts_1.WS_WAULTXWBNBLpTokenAddress,
        },
        [entity_1.TokenSymbol.BUSD]: {
            [entity_1.TokenSymbol.ETH]: contracts_1.WS_ETHBUSDLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.WS_WBNBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.WS_USDTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.WS_BTCBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.WUSD]: contracts_1.WS_WUSDBUSDLpTokenAddress,
        },
        [entity_1.TokenSymbol.USDT]: {
            [entity_1.TokenSymbol.ALPACA]: contracts_1.WS_ALPACAUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WEX]: contracts_1.WS_WEXUSDTLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.WS_USDTBUSDLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.WS_BTCBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.WS_ETHUSDTLpTokenAddress,
            [entity_1.TokenSymbol.MATIC]: contracts_1.WS_MATICUSDTLpTokenAddress,
            [entity_1.TokenSymbol.TUSD]: contracts_1.WS_TUSDUSDTLpTokenAddress,
        },
        [entity_1.TokenSymbol.ETH]: {
            [entity_1.TokenSymbol.BUSD]: contracts_1.WS_ETHBUSDLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.WS_ETHBTCBLpTokenAddress,
            [entity_1.TokenSymbol.BETH]: contracts_1.WS_BETHETHLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.WS_ETHUSDTLpTokenAddress,
        },
        [entity_1.TokenSymbol.ALPACA]: {
            [entity_1.TokenSymbol.USDT]: contracts_1.WS_ALPACAUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.WS_ALPACAWBNBLpTokenAddress,
        },
        [entity_1.TokenSymbol.BTCB]: {
            [entity_1.TokenSymbol.ETH]: contracts_1.WS_ETHBTCBLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.WS_BTCBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.WS_BTCBBUSDLpTokenAddress,
        },
        [entity_1.TokenSymbol.TUSD]: {
            [entity_1.TokenSymbol.USDT]: contracts_1.WS_TUSDUSDTLpTokenAddress,
        },
        [entity_1.TokenSymbol.USDC]: {},
    },
    ms: {
        [entity_1.TokenSymbol.WBNB]: {
            [entity_1.TokenSymbol.MDX]: contracts_1.MS_MDXWBNBLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.MS_WBNBBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.MS_WBNBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.MS_WBNBETHLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.MS_WBNBBTCBLpTokenAddress,
        },
        [entity_1.TokenSymbol.BUSD]: {
            [entity_1.TokenSymbol.MDX]: contracts_1.MS_MDXBUSDLpTokenAddress,
            [entity_1.TokenSymbol.USDT]: contracts_1.MS_BUSDUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.MS_WBNBBUSDLpTokenAddress,
        },
        [entity_1.TokenSymbol.USDT]: {
            [entity_1.TokenSymbol.BTCB]: contracts_1.MS_BTCBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.MS_ETHUSDTLpTokenAddress,
            [entity_1.TokenSymbol.BUSD]: contracts_1.MS_BUSDUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.MS_WBNBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.USDC]: contracts_1.MS_USDCUSDTLpTokenAddress,
            [entity_1.TokenSymbol.DAI]: contracts_1.MS_DAIUSDTLpTokenAddress,
        },
        [entity_1.TokenSymbol.ETH]: {
            [entity_1.TokenSymbol.USDT]: contracts_1.MS_ETHUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.MS_WBNBETHLpTokenAddress,
            [entity_1.TokenSymbol.BTCB]: contracts_1.MS_ETHBTCBLpTokenAddress,
        },
        [entity_1.TokenSymbol.ALPACA]: {},
        [entity_1.TokenSymbol.BTCB]: {
            [entity_1.TokenSymbol.USDT]: contracts_1.MS_BTCBUSDTLpTokenAddress,
            [entity_1.TokenSymbol.WBNB]: contracts_1.MS_WBNBBTCBLpTokenAddress,
            [entity_1.TokenSymbol.ETH]: contracts_1.MS_ETHBTCBLpTokenAddress,
        },
        [entity_1.TokenSymbol.TUSD]: {},
        [entity_1.TokenSymbol.USDC]: {},
    },
    'pcs-v1': {
        [entity_1.TokenSymbol.WBNB]: {},
        [entity_1.TokenSymbol.BUSD]: {},
        [entity_1.TokenSymbol.USDT]: {},
        [entity_1.TokenSymbol.ETH]: {},
        [entity_1.TokenSymbol.ALPACA]: {},
        [entity_1.TokenSymbol.BTCB]: {},
        [entity_1.TokenSymbol.TUSD]: {},
        [entity_1.TokenSymbol.USDC]: {},
    },
};
const safeGetLPAddressLPPair = (dex, token0, token1) => {
    if (maybe_1.Maybe.of(exports.farmingPoolLPPair[dex][token0]).isJust) {
        const maybeLp = maybe_1.Maybe.of(exports.farmingPoolLPPair[dex][token0][token1]);
        if (maybeLp.isJust)
            return maybeLp.value;
        // eslint-disable-next-line quotes
        throw new Error("safeGetLPAddressLPPair: couldn't find an lp address");
    }
    const maybeLpReversed = maybe_1.Maybe.of(exports.farmingPoolLPPair[dex][token1][token0]);
    if (maybeLpReversed.isJust)
        return maybeLpReversed.value;
    // eslint-disable-next-line quotes
    throw new Error("safeGetLPAddressLPPair: couldn't find an lp address");
};
exports.safeGetLPAddressLPPair = safeGetLPAddressLPPair;
