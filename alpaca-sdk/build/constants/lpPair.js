import { TokenSymbol } from '../entity';
import { Maybe } from '../utils/maybe';
import { CAKEWBNBLpTokenAddress, BTCBWBNBLpTokenAddress, ETHWBNBLpTokenAddress, DOTWBNBLpTokenAddress, UNIWBNBLpTokenAddress, LINKWBNBLpTokenAddress, XVSWBNBLpTokenAddress, YFIWBNBLpTokenAddress, ITAMBNBLpTokenAddress, bMXXBNBLpTokenAddress, BELTBNBLpTokenAddress, BORBNBLpTokenAddress, BRYBNBLpTokenAddress, PCWSBNBLpTokenAddress, SWINGBYBNBLpTokenAddress, DODOBNBLpTokenAddress, USDTBNBLpTokenAddress, AlpacaBNBLpV2Address, WBNBETHLpTokenAddress, BTCBBUSDLpTokenAddress, USDTBUSDLpTokenAddress, WBNBBUSDLpTokenAddress, VAIBUSDLpTokenAddress, USDCBUSDLpTokenAddress, DAIBUSDLpTokenAddress, USTBUSDLpTokenAddress, ALPACABUSDLpTokenAddress, CAKEBUSDLpTokenAddress, BETHETHLpTokenAddress, COMPETHLpTokenAddress, SUSHIETHLpTokenAddress, WS_WEXWBNBLpTokenAddress, WS_ETHBUSDLpTokenAddress, WS_ALPACAUSDTLpTokenAddress, WS_WBNBBUSDLpTokenAddress, WS_WEXUSDTLpTokenAddress, WS_ETHBTCBLpTokenAddress, WS_ALPACAWBNBLpTokenAddress, WS_USDTBUSDLpTokenAddress, ODDZBNBLpTokenAddress, WS_BETHETHLpTokenAddress, WS_WAULTXWBNBLpTokenAddress, WS_BTCBUSDTLpTokenAddress, WS_BTCBBUSDLpTokenAddress, WS_ETHUSDTLpTokenAddress, ADABNBLpTokenAddress, FORMBUSDLpTokenAddress, WS_MATICUSDTLpTokenAddress, TUSDBUSDLpTokenAddress, CAKEUSDTLpTokenAddress, USDCUSDTLpTokenAddress, TRXBNBLpTokenAddress, BTTBNBLpTokenAddress, ORBSBUSDLpTokenAddress, AXSBNBLpTokenAddress, WS_TUSDUSDTLpTokenAddress, TRXBUSDLpTokenAddress, BTTBUSDLpTokenAddress, PMONBUSDLpTokenAddress, PHABUSDLpTokenAddress, WS_WUSDBUSDLpTokenAddress, MBOXBNBLpTokenAddress, NAOSBNBLpTokenAddress, MS_BTCBUSDTLpTokenAddress, DVIBNBLpTokenAddress, QBTBNBLpTokenAddress, MS_MDXWBNBLpTokenAddress, MS_ETHUSDTLpTokenAddress, MS_MDXBUSDLpTokenAddress, MS_WBNBBUSDLpTokenAddress, MS_BUSDUSDTLpTokenAddress, MS_WBNBUSDTLpTokenAddress, MS_WBNBETHLpTokenAddress, POTSBUSDLpTokenAddress, MS_ETHBTCBLpTokenAddress, MS_WBNBBTCBLpTokenAddress, MS_USDCUSDTLpTokenAddress, MS_DAIUSDTLpTokenAddress, BMONBUSDLpTokenAddress, HIGHBUSDLpTokenAddress, BMONBNBLpTokenAddress, ETHBTCBLpTokenAddress, SPSBNBLpTokenAddress, ETERNALBNBLpTokenAddress, THGBNBLpTokenAddress, ETHUSDCLpTokenAddress, } from './contracts';
export const farmingPoolLPPair = {
    pcs: {
        [TokenSymbol.WBNB]: {
            [TokenSymbol.CAKE]: CAKEWBNBLpTokenAddress,
            [TokenSymbol.BTCB]: BTCBWBNBLpTokenAddress,
            [TokenSymbol.ETH]: ETHWBNBLpTokenAddress,
            [TokenSymbol.DOT]: DOTWBNBLpTokenAddress,
            [TokenSymbol.UNI]: UNIWBNBLpTokenAddress,
            [TokenSymbol.LINK]: LINKWBNBLpTokenAddress,
            [TokenSymbol.XVS]: XVSWBNBLpTokenAddress,
            [TokenSymbol.YFI]: YFIWBNBLpTokenAddress,
            [TokenSymbol.ITAM]: ITAMBNBLpTokenAddress,
            [TokenSymbol.BMXX]: bMXXBNBLpTokenAddress,
            [TokenSymbol.BELT]: BELTBNBLpTokenAddress,
            [TokenSymbol.BOR]: BORBNBLpTokenAddress,
            [TokenSymbol.BRY]: BRYBNBLpTokenAddress,
            [TokenSymbol.PCWS]: PCWSBNBLpTokenAddress,
            [TokenSymbol.SWINGBY]: SWINGBYBNBLpTokenAddress,
            [TokenSymbol.DODO]: DODOBNBLpTokenAddress,
            [TokenSymbol.BUSD]: WBNBBUSDLpTokenAddress,
            [TokenSymbol.USDT]: USDTBNBLpTokenAddress,
            [TokenSymbol.ALPACA]: AlpacaBNBLpV2Address,
            [TokenSymbol.BETH]: WBNBETHLpTokenAddress,
            [TokenSymbol.ODDZ]: ODDZBNBLpTokenAddress,
            [TokenSymbol.ADA]: ADABNBLpTokenAddress,
            [TokenSymbol.TRX]: TRXBNBLpTokenAddress,
            [TokenSymbol.BTT]: BTTBNBLpTokenAddress,
            [TokenSymbol.AXS]: AXSBNBLpTokenAddress,
            [TokenSymbol.MBOX]: MBOXBNBLpTokenAddress,
            [TokenSymbol.NAOS]: NAOSBNBLpTokenAddress,
            [TokenSymbol.DVI]: DVIBNBLpTokenAddress,
            [TokenSymbol.QBT]: QBTBNBLpTokenAddress,
            [TokenSymbol.BMON]: BMONBNBLpTokenAddress,
            [TokenSymbol.SPS]: SPSBNBLpTokenAddress,
            [TokenSymbol.ETERNAL]: ETERNALBNBLpTokenAddress,
            [TokenSymbol.THG]: THGBNBLpTokenAddress,
        },
        [TokenSymbol.BUSD]: {
            [TokenSymbol.BTCB]: BTCBBUSDLpTokenAddress,
            [TokenSymbol.USDT]: USDTBUSDLpTokenAddress,
            [TokenSymbol.WBNB]: WBNBBUSDLpTokenAddress,
            [TokenSymbol.VAI]: VAIBUSDLpTokenAddress,
            [TokenSymbol.USDC]: USDCBUSDLpTokenAddress,
            [TokenSymbol.DAI]: DAIBUSDLpTokenAddress,
            [TokenSymbol.UST]: USTBUSDLpTokenAddress,
            [TokenSymbol.ALPACA]: ALPACABUSDLpTokenAddress,
            [TokenSymbol.CAKE]: CAKEBUSDLpTokenAddress,
            [TokenSymbol.FORM]: FORMBUSDLpTokenAddress,
            [TokenSymbol.TUSD]: TUSDBUSDLpTokenAddress,
            [TokenSymbol.ORBS]: ORBSBUSDLpTokenAddress,
            [TokenSymbol.TRX]: TRXBUSDLpTokenAddress,
            [TokenSymbol.BTT]: BTTBUSDLpTokenAddress,
            [TokenSymbol.PMON]: PMONBUSDLpTokenAddress,
            [TokenSymbol.PHA]: PHABUSDLpTokenAddress,
            [TokenSymbol.POTS]: POTSBUSDLpTokenAddress,
            [TokenSymbol.BMON]: BMONBUSDLpTokenAddress,
            [TokenSymbol.HIGH]: HIGHBUSDLpTokenAddress,
        },
        [TokenSymbol.ETH]: {
            [TokenSymbol.BETH]: BETHETHLpTokenAddress,
            [TokenSymbol.COMP]: COMPETHLpTokenAddress,
            [TokenSymbol.SUSHI]: SUSHIETHLpTokenAddress,
            [TokenSymbol.WBNB]: ETHWBNBLpTokenAddress,
            [TokenSymbol.BTCB]: ETHBTCBLpTokenAddress,
            [TokenSymbol.USDC]: ETHUSDCLpTokenAddress,
        },
        [TokenSymbol.ALPACA]: {
            [TokenSymbol.BUSD]: ALPACABUSDLpTokenAddress,
            [TokenSymbol.WBNB]: AlpacaBNBLpV2Address,
        },
        [TokenSymbol.USDT]: {
            [TokenSymbol.BUSD]: USDTBUSDLpTokenAddress,
            [TokenSymbol.WBNB]: USDTBNBLpTokenAddress,
            [TokenSymbol.CAKE]: CAKEUSDTLpTokenAddress,
            [TokenSymbol.USDC]: USDCUSDTLpTokenAddress,
        },
        [TokenSymbol.BTCB]: {
            [TokenSymbol.WBNB]: BTCBWBNBLpTokenAddress,
            [TokenSymbol.BUSD]: BTCBBUSDLpTokenAddress,
            [TokenSymbol.ETH]: ETHBTCBLpTokenAddress,
        },
        [TokenSymbol.TUSD]: {
            [TokenSymbol.BUSD]: TUSDBUSDLpTokenAddress,
        },
        [TokenSymbol.USDC]: {
            [TokenSymbol.ETH]: ETHUSDCLpTokenAddress,
            [TokenSymbol.USDT]: USDCUSDTLpTokenAddress,
        },
    },
    ws: {
        [TokenSymbol.WBNB]: {
            [TokenSymbol.WEX]: WS_WEXWBNBLpTokenAddress,
            [TokenSymbol.BUSD]: WS_WBNBBUSDLpTokenAddress,
            [TokenSymbol.ALPACA]: WS_ALPACAWBNBLpTokenAddress,
            [TokenSymbol.WAULTX]: WS_WAULTXWBNBLpTokenAddress,
        },
        [TokenSymbol.BUSD]: {
            [TokenSymbol.ETH]: WS_ETHBUSDLpTokenAddress,
            [TokenSymbol.WBNB]: WS_WBNBBUSDLpTokenAddress,
            [TokenSymbol.USDT]: WS_USDTBUSDLpTokenAddress,
            [TokenSymbol.BTCB]: WS_BTCBBUSDLpTokenAddress,
            [TokenSymbol.WUSD]: WS_WUSDBUSDLpTokenAddress,
        },
        [TokenSymbol.USDT]: {
            [TokenSymbol.ALPACA]: WS_ALPACAUSDTLpTokenAddress,
            [TokenSymbol.WEX]: WS_WEXUSDTLpTokenAddress,
            [TokenSymbol.BUSD]: WS_USDTBUSDLpTokenAddress,
            [TokenSymbol.BTCB]: WS_BTCBUSDTLpTokenAddress,
            [TokenSymbol.ETH]: WS_ETHUSDTLpTokenAddress,
            [TokenSymbol.MATIC]: WS_MATICUSDTLpTokenAddress,
            [TokenSymbol.TUSD]: WS_TUSDUSDTLpTokenAddress,
        },
        [TokenSymbol.ETH]: {
            [TokenSymbol.BUSD]: WS_ETHBUSDLpTokenAddress,
            [TokenSymbol.BTCB]: WS_ETHBTCBLpTokenAddress,
            [TokenSymbol.BETH]: WS_BETHETHLpTokenAddress,
            [TokenSymbol.USDT]: WS_ETHUSDTLpTokenAddress,
        },
        [TokenSymbol.ALPACA]: {
            [TokenSymbol.USDT]: WS_ALPACAUSDTLpTokenAddress,
            [TokenSymbol.WBNB]: WS_ALPACAWBNBLpTokenAddress,
        },
        [TokenSymbol.BTCB]: {
            [TokenSymbol.ETH]: WS_ETHBTCBLpTokenAddress,
            [TokenSymbol.USDT]: WS_BTCBUSDTLpTokenAddress,
            [TokenSymbol.BUSD]: WS_BTCBBUSDLpTokenAddress,
        },
        [TokenSymbol.TUSD]: {
            [TokenSymbol.USDT]: WS_TUSDUSDTLpTokenAddress,
        },
        [TokenSymbol.USDC]: {},
    },
    ms: {
        [TokenSymbol.WBNB]: {
            [TokenSymbol.MDX]: MS_MDXWBNBLpTokenAddress,
            [TokenSymbol.BUSD]: MS_WBNBBUSDLpTokenAddress,
            [TokenSymbol.USDT]: MS_WBNBUSDTLpTokenAddress,
            [TokenSymbol.ETH]: MS_WBNBETHLpTokenAddress,
            [TokenSymbol.BTCB]: MS_WBNBBTCBLpTokenAddress,
        },
        [TokenSymbol.BUSD]: {
            [TokenSymbol.MDX]: MS_MDXBUSDLpTokenAddress,
            [TokenSymbol.USDT]: MS_BUSDUSDTLpTokenAddress,
            [TokenSymbol.WBNB]: MS_WBNBBUSDLpTokenAddress,
        },
        [TokenSymbol.USDT]: {
            [TokenSymbol.BTCB]: MS_BTCBUSDTLpTokenAddress,
            [TokenSymbol.ETH]: MS_ETHUSDTLpTokenAddress,
            [TokenSymbol.BUSD]: MS_BUSDUSDTLpTokenAddress,
            [TokenSymbol.WBNB]: MS_WBNBUSDTLpTokenAddress,
            [TokenSymbol.USDC]: MS_USDCUSDTLpTokenAddress,
            [TokenSymbol.DAI]: MS_DAIUSDTLpTokenAddress,
        },
        [TokenSymbol.ETH]: {
            [TokenSymbol.USDT]: MS_ETHUSDTLpTokenAddress,
            [TokenSymbol.WBNB]: MS_WBNBETHLpTokenAddress,
            [TokenSymbol.BTCB]: MS_ETHBTCBLpTokenAddress,
        },
        [TokenSymbol.ALPACA]: {},
        [TokenSymbol.BTCB]: {
            [TokenSymbol.USDT]: MS_BTCBUSDTLpTokenAddress,
            [TokenSymbol.WBNB]: MS_WBNBBTCBLpTokenAddress,
            [TokenSymbol.ETH]: MS_ETHBTCBLpTokenAddress,
        },
        [TokenSymbol.TUSD]: {},
        [TokenSymbol.USDC]: {},
    },
    'pcs-v1': {
        [TokenSymbol.WBNB]: {},
        [TokenSymbol.BUSD]: {},
        [TokenSymbol.USDT]: {},
        [TokenSymbol.ETH]: {},
        [TokenSymbol.ALPACA]: {},
        [TokenSymbol.BTCB]: {},
        [TokenSymbol.TUSD]: {},
        [TokenSymbol.USDC]: {},
    },
};
export const safeGetLPAddressLPPair = (dex, token0, token1) => {
    if (Maybe.of(farmingPoolLPPair[dex][token0]).isJust) {
        const maybeLp = Maybe.of(farmingPoolLPPair[dex][token0][token1]);
        if (maybeLp.isJust)
            return maybeLp.value;
        // eslint-disable-next-line quotes
        throw new Error("safeGetLPAddressLPPair: couldn't find an lp address");
    }
    const maybeLpReversed = Maybe.of(farmingPoolLPPair[dex][token1][token0]);
    if (maybeLpReversed.isJust)
        return maybeLpReversed.value;
    // eslint-disable-next-line quotes
    throw new Error("safeGetLPAddressLPPair: couldn't find an lp address");
};
