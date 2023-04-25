"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pancakeSwap = {
    dexActive: true,
    workers: {
        BUSD_ALPACA: { activeWorker: true },
        // BNB
        BELT_BNB: { activeWorker: true },
        BMXX_BNB: { activeWorker: true },
        BOR_BNB: { activeWorker: true },
        BRY_BNB: { activeWorker: true },
        CWS_BNB: { activeWorker: true },
        SWINGBY_BNB: { activeWorker: true },
        DODO_BNB: { activeWorker: true },
        BTCB_BNB: { activeWorker: true },
        BUSD_BNB: { activeWorker: true },
        CAKE_BNB: { activeWorker: true },
        DOT_BNB: { activeWorker: true },
        ETH_BNB: { activeWorker: true },
        ITAM_BNB: { activeWorker: true },
        LINK_BNB: { activeWorker: true },
        UNI_BNB: { activeWorker: true },
        XVS_BNB: { activeWorker: true },
        YFI_BNB: { activeWorker: true },
        USDT_BNB: { activeWorker: true },
        ODDZ_BNB: { activeWorker: true },
        ADA_BNB: { activeWorker: true },
        TRX_BNB: { activeWorker: true },
        BTT_BNB: { activeWorker: true },
        AXS_BNB: { activeWorker: true },
        MBOX_BNB: { activeWorker: true },
        NAOS_BNB: { activeWorker: true },
        DVI_BNB: { activeWorker: true },
        QBT_BNB: { activeWorker: true },
        BMON_BNB: { activeWorker: true },
        SPS_BNB: { activeWorker: true },
        ETERNAL_BNB: { activeWorker: true },
        THG_BNB: { activeWorker: true },
        // BUSD
        ALPACA_BUSD: { activeWorker: true },
        BNB_BUSD: { activeWorker: true },
        BTCB_BUSD: { activeWorker: true },
        DAI_BUSD: { activeWorker: true },
        USDC_BUSD: { activeWorker: true },
        USDT_BUSD: { activeWorker: true },
        UST_BUSD: { activeWorker: true },
        VAI_BUSD: { activeWorker: true },
        CAKE_BUSD: { activeWorker: true },
        FORM_BUSD: { activeWorker: true },
        TUSD_BUSD: { activeWorker: true },
        ORBS_BUSD: { activeWorker: true },
        TRX_BUSD: { activeWorker: true },
        BTT_BUSD: { activeWorker: true },
        PMON_BUSD: { activeWorker: true },
        PHA_BUSD: { activeWorker: true },
        POTS_BUSD: { activeWorker: true },
        BMON_BUSD: { activeWorker: true },
        HIGH_BUSD: { activeWorker: true },
        // ETH
        BETH_ETH: { activeWorker: true },
        BNB_ETH: { activeWorker: true },
        COMP_ETH: { activeWorker: true },
        SUSHI_ETH: { activeWorker: true },
        BTCB_ETH: { activeWorker: true },
        USDC_ETH: { activeWorker: true },
        // USDT
        BNB_USDT: { activeWorker: true },
        BUSD_USDT: { activeWorker: true },
        CAKE_USDT: { activeWorker: true },
        USDC_USDT: { activeWorker: true },
        // BTCB
        BNB_BTCB: { activeWorker: true },
        BUSD_BTCB: { activeWorker: true },
        ETH_BTCB: { activeWorker: true },
        // TUSD
        BUSD_TUSD: { activeWorker: true },
        // USDC
        ETH_USDC: { activeWorker: true },
        USDT_USDC: { activeWorker: true },
        // CAKEMAXI
        CAKEMAXI_ETH: { activeWorker: true },
        CAKEMAXI_USDT: { activeWorker: true },
        CAKEMAXI_BNB: { activeWorker: true },
        CAKEMAXI_BUSD: { activeWorker: true },
        CAKEMAXI_BTCB: { activeWorker: true },
        CAKEMAXI_TUSD: { activeWorker: true },
        CAKEMAXI_USDC: { activeWorker: true },
    },
    farmingPools: {
        // BNB
        BTCB_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDT_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BELT_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BMXX_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BOR_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: false,
            allowForceAddCollateralPosition: true,
        },
        BRY_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: false,
            allowForceAddCollateralPosition: true,
        },
        CWS_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        SWINGBY_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        DODO_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        CAKE_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        DOT_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ITAM_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: false,
            allowForceAddCollateralPosition: true,
        },
        LINK_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        UNI_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        XVS_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        YFI_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: false,
            allowForceAddCollateralPosition: true,
        },
        ODDZ_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ADA_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        TRX_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTT_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        AXS_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        MBOX_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        NAOS_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        DVI_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        QBT_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BMON_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        SPS_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETERNAL_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: false,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        THG_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BUSD
        ALPACA_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTCB_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDT_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BNB_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        UST_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        VAI_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        CAKE_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        DAI_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDC_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        FORM_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        TUSD_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ORBS_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        TRX_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTT_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        PMON_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        PHA_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        POTS_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BMON_BUSD: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        HIGH_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // USDT
        CAKE_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDC_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // ETH
        BETH_ETH: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: false,
            allowForceAddCollateralPosition: true,
        },
        COMP_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        SUSHI_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTCB_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDC_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BTCB
        ETH_BTCB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // USDC
        ETH_USDC: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDT_USDC: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        //Single Asset LYF
        CAKEMAXI: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
    },
};
const waultSwap = {
    dexActive: false,
    workers: {
        // BNB
        WEX_BNB: { activeWorker: true },
        BUSD_BNB: { activeWorker: true },
        ALPACA_BNB: { activeWorker: true },
        WAULTX_BNB: { activeWorker: true },
        // BUSD
        ETH_BUSD: { activeWorker: true },
        BNB_BUSD: { activeWorker: true },
        USDT_BUSD: { activeWorker: true },
        BTCB_BUSD: { activeWorker: true },
        WUSD_BUSD: { activeWorker: true },
        // ETH
        BUSD_ETH: { activeWorker: true },
        BTCB_ETH: { activeWorker: true },
        BETH_ETH: { activeWorker: true },
        USDT_ETH: { activeWorker: true },
        // ALPACA
        USDT_ALPACA: { activeWorker: true },
        BNB_ALPACA: { activeWorker: true },
        // USDT
        ALPACA_USDT: { activeWorker: true },
        WEX_USDT: { activeWorker: true },
        BUSD_USDT: { activeWorker: true },
        BTCB_USDT: { activeWorker: true },
        ETH_USDT: { activeWorker: true },
        MATIC_USDT: { activeWorker: true },
        TUSD_USDT: { activeWorker: true },
        // BTCB
        ETH_BTCB: { activeWorker: true },
        USDT_BTCB: { activeWorker: true },
        BUSD_BTCB: { activeWorker: true },
        // TUSD
        USDT_TUSD: { activeWorker: true },
    },
    farmingPools: {
        // BNB
        WEX_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ALPACA_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        WAULTX_BNB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        //BUSD
        BNB_BUSD: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_BUSD: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDT_BUSD: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        WUSD_BUSD: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // ETH
        BETH_ETH: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BTCB
        ETH_BTCB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BUSD_BTCB: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // USDT
        ALPACA_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        WEX_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTCB_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        MATIC_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        TUSD_USDT: {
            allowOpenPosition: false,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: false,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
    },
};
const mdexSwap = {
    dexActive: true,
    workers: {
        // ETH
        USDT_ETH: {
            activeWorker: true,
        },
        BNB_ETH: {
            activeWorker: true,
        },
        BTCB_ETH: {
            activeWorker: true,
        },
        // BTCB
        USDT_BTCB: {
            activeWorker: true,
        },
        ETH_BTCB: {
            activeWorker: true,
        },
        BNB_BTCB: {
            activeWorker: true,
        },
        // USDT
        BTCB_USDT: {
            activeWorker: true,
        },
        ETH_USDT: {
            activeWorker: true,
        },
        BNB_USDT: {
            activeWorker: true,
        },
        USDC_USDT: {
            activeWorker: true,
        },
        DAI_USDT: {
            activeWorker: true,
        },
        // BNB
        MDX_BNB: {
            activeWorker: true,
        },
        USDT_BNB: {
            activeWorker: true,
        },
        ETH_BNB: {
            activeWorker: true,
        },
        BUSD_BNB: {
            activeWorker: true,
        },
        BTCB_BNB: {
            activeWorker: true,
        },
        // BUSD
        MDX_BUSD: {
            activeWorker: true,
        },
        BNB_BUSD: {
            activeWorker: true,
        },
    },
    farmingPools: {
        // ETH
        USDT_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BNB_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTCB_ETH: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BTCB
        USDT_BTCB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_BTCB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BNB_BTCB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // USDT
        BTCB_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BNB_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDC_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        DAI_USDT: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BNB
        MDX_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        USDT_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        ETH_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BUSD_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BTCB_BNB: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        // BUSD
        MDX_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
        BNB_BUSD: {
            allowOpenPosition: true,
            allowClosePosition: true,
            allowAdjustPosition: true,
            allowBorrowMoreAdjustPosition: true,
            allowPartialClosePosition: true,
            allowForceAddCollateralPosition: true,
        },
    },
};
const appConfig = {
    ActiveFarms: {
        PancakeSwap: pancakeSwap,
        WaultSwap: waultSwap,
        MdexSwap: mdexSwap,
    },
};
exports.default = appConfig;
