export declare type IAppConfig = Readonly<{
    readonly ActiveFarms: IDexes;
}>;
declare type IDexes = {
    readonly PancakeSwap: IPancakeSwap;
    readonly WaultSwap: IWaultSwap;
    readonly MdexSwap: IMdexSwap;
};
export interface IFarmACL {
    readonly allowOpenPosition: boolean;
    readonly allowClosePosition: boolean;
    readonly allowAdjustPosition: boolean;
    readonly allowBorrowMoreAdjustPosition: boolean;
    readonly allowPartialClosePosition: boolean;
    readonly allowForceAddCollateralPosition: boolean;
}
declare type IWorkerACL = {
    readonly activeWorker: boolean;
};
export declare type IPancakeSwap = {
    readonly dexActive: boolean;
    readonly workers: {
        readonly BUSD_ALPACA: IWorkerACL;
        readonly BELT_BNB: IWorkerACL;
        readonly BMXX_BNB: IWorkerACL;
        readonly BOR_BNB: IWorkerACL;
        readonly BRY_BNB: IWorkerACL;
        readonly CWS_BNB: IWorkerACL;
        readonly SWINGBY_BNB: IWorkerACL;
        readonly DODO_BNB: IWorkerACL;
        readonly BTCB_BNB: IWorkerACL;
        readonly BUSD_BNB: IWorkerACL;
        readonly CAKE_BNB: IWorkerACL;
        readonly DOT_BNB: IWorkerACL;
        readonly ETH_BNB: IWorkerACL;
        readonly ITAM_BNB: IWorkerACL;
        readonly LINK_BNB: IWorkerACL;
        readonly UNI_BNB: IWorkerACL;
        readonly XVS_BNB: IWorkerACL;
        readonly YFI_BNB: IWorkerACL;
        readonly USDT_BNB: IWorkerACL;
        readonly ODDZ_BNB: IWorkerACL;
        readonly ADA_BNB: IWorkerACL;
        readonly TRX_BNB: IWorkerACL;
        readonly BTT_BNB: IWorkerACL;
        readonly AXS_BNB: IWorkerACL;
        readonly MBOX_BNB: IWorkerACL;
        readonly NAOS_BNB: IWorkerACL;
        readonly DVI_BNB: IWorkerACL;
        readonly QBT_BNB: IWorkerACL;
        readonly BMON_BNB: IWorkerACL;
        readonly SPS_BNB: IWorkerACL;
        readonly ETERNAL_BNB: IWorkerACL;
        readonly THG_BNB: IWorkerACL;
        readonly ALPACA_BUSD: IWorkerACL;
        readonly BNB_BUSD: IWorkerACL;
        readonly BTCB_BUSD: IWorkerACL;
        readonly DAI_BUSD: IWorkerACL;
        readonly USDC_BUSD: IWorkerACL;
        readonly USDT_BUSD: IWorkerACL;
        readonly UST_BUSD: IWorkerACL;
        readonly VAI_BUSD: IWorkerACL;
        readonly CAKE_BUSD: IWorkerACL;
        readonly FORM_BUSD: IWorkerACL;
        readonly TUSD_BUSD: IWorkerACL;
        readonly ORBS_BUSD: IWorkerACL;
        readonly TRX_BUSD: IWorkerACL;
        readonly BTT_BUSD: IWorkerACL;
        readonly PMON_BUSD: IWorkerACL;
        readonly PHA_BUSD: IWorkerACL;
        readonly POTS_BUSD: IWorkerACL;
        readonly BMON_BUSD: IWorkerACL;
        readonly HIGH_BUSD: IWorkerACL;
        readonly BETH_ETH: IWorkerACL;
        readonly BNB_ETH: IWorkerACL;
        readonly COMP_ETH: IWorkerACL;
        readonly SUSHI_ETH: IWorkerACL;
        readonly BTCB_ETH: IWorkerACL;
        readonly USDC_ETH: IWorkerACL;
        readonly BNB_USDT: IWorkerACL;
        readonly BUSD_USDT: IWorkerACL;
        readonly CAKE_USDT: IWorkerACL;
        readonly USDC_USDT: IWorkerACL;
        readonly BNB_BTCB: IWorkerACL;
        readonly BUSD_BTCB: IWorkerACL;
        readonly ETH_BTCB: IWorkerACL;
        readonly BUSD_TUSD: IWorkerACL;
        readonly ETH_USDC: IWorkerACL;
        readonly USDT_USDC: IWorkerACL;
        readonly CAKEMAXI_ETH: IWorkerACL;
        readonly CAKEMAXI_USDT: IWorkerACL;
        readonly CAKEMAXI_BNB: IWorkerACL;
        readonly CAKEMAXI_BUSD: IWorkerACL;
        readonly CAKEMAXI_BTCB: IWorkerACL;
        readonly CAKEMAXI_TUSD: IWorkerACL;
        readonly CAKEMAXI_USDC: IWorkerACL;
    };
    readonly farmingPools: {
        readonly ALPACA_BUSD: IFarmACL;
        readonly BTCB_BNB: IFarmACL;
        readonly BTCB_BUSD: IFarmACL;
        readonly ETH_BNB: IFarmACL;
        readonly USDT_BNB: IFarmACL;
        readonly USDT_BUSD: IFarmACL;
        readonly BNB_BUSD: IFarmACL;
        readonly BELT_BNB: IFarmACL;
        readonly BMXX_BNB: IFarmACL;
        readonly BOR_BNB: IFarmACL;
        readonly BRY_BNB: IFarmACL;
        readonly CWS_BNB: IFarmACL;
        readonly SWINGBY_BNB: IFarmACL;
        readonly DODO_BNB: IFarmACL;
        readonly CAKE_BNB: IFarmACL;
        readonly DOT_BNB: IFarmACL;
        readonly ITAM_BNB: IFarmACL;
        readonly LINK_BNB: IFarmACL;
        readonly UNI_BNB: IFarmACL;
        readonly XVS_BNB: IFarmACL;
        readonly YFI_BNB: IFarmACL;
        readonly ODDZ_BNB: IFarmACL;
        readonly ADA_BNB: IFarmACL;
        readonly TRX_BNB: IFarmACL;
        readonly BTT_BNB: IFarmACL;
        readonly AXS_BNB: IFarmACL;
        readonly MBOX_BNB: IFarmACL;
        readonly NAOS_BNB: IFarmACL;
        readonly DVI_BNB: IFarmACL;
        readonly QBT_BNB: IFarmACL;
        readonly BMON_BNB: IFarmACL;
        readonly SPS_BNB: IFarmACL;
        readonly ETERNAL_BNB: IFarmACL;
        readonly THG_BNB: IFarmACL;
        readonly UST_BUSD: IFarmACL;
        readonly VAI_BUSD: IFarmACL;
        readonly CAKE_BUSD: IFarmACL;
        readonly FORM_BUSD: IFarmACL;
        readonly DAI_BUSD: IFarmACL;
        readonly USDC_BUSD: IFarmACL;
        readonly TUSD_BUSD: IFarmACL;
        readonly ORBS_BUSD: IFarmACL;
        readonly TRX_BUSD: IFarmACL;
        readonly BTT_BUSD: IFarmACL;
        readonly PMON_BUSD: IFarmACL;
        readonly PHA_BUSD: IFarmACL;
        readonly POTS_BUSD: IFarmACL;
        readonly BMON_BUSD: IFarmACL;
        readonly HIGH_BUSD: IFarmACL;
        readonly CAKE_USDT: IFarmACL;
        readonly USDC_USDT: IFarmACL;
        readonly BETH_ETH: IFarmACL;
        readonly COMP_ETH: IFarmACL;
        readonly SUSHI_ETH: IFarmACL;
        readonly BTCB_ETH: IFarmACL;
        readonly USDC_ETH: IFarmACL;
        readonly ETH_BTCB: IFarmACL;
        readonly ETH_USDC: IFarmACL;
        readonly USDT_USDC: IFarmACL;
        readonly CAKEMAXI: IFarmACL;
    };
};
export declare type IWaultSwap = {
    readonly dexActive: boolean;
    readonly workers: {
        readonly WEX_BNB: IWorkerACL;
        readonly BUSD_BNB: IWorkerACL;
        readonly ALPACA_BNB: IWorkerACL;
        readonly WAULTX_BNB: IWorkerACL;
        readonly ETH_BUSD: IWorkerACL;
        readonly BNB_BUSD: IWorkerACL;
        readonly USDT_BUSD: IWorkerACL;
        readonly BTCB_BUSD: IWorkerACL;
        readonly WUSD_BUSD: IWorkerACL;
        readonly BUSD_ETH: IWorkerACL;
        readonly BTCB_ETH: IWorkerACL;
        readonly BETH_ETH: IWorkerACL;
        readonly USDT_ETH: IWorkerACL;
        readonly USDT_ALPACA: IWorkerACL;
        readonly BNB_ALPACA: IWorkerACL;
        readonly ETH_BTCB: IWorkerACL;
        readonly USDT_BTCB: IWorkerACL;
        readonly BUSD_BTCB: IWorkerACL;
        readonly ALPACA_USDT: IWorkerACL;
        readonly WEX_USDT: IWorkerACL;
        readonly BUSD_USDT: IWorkerACL;
        readonly BTCB_USDT: IWorkerACL;
        readonly ETH_USDT: IWorkerACL;
        readonly MATIC_USDT: IWorkerACL;
        readonly TUSD_USDT: IWorkerACL;
        readonly USDT_TUSD: IWorkerACL;
    };
    readonly farmingPools: {
        readonly WEX_BNB: IFarmACL;
        readonly ALPACA_BNB: IFarmACL;
        readonly WAULTX_BNB: IFarmACL;
        readonly ETH_BUSD: IFarmACL;
        readonly BNB_BUSD: IFarmACL;
        readonly USDT_BUSD: IFarmACL;
        readonly WUSD_BUSD: IFarmACL;
        readonly BETH_ETH: IFarmACL;
        readonly ETH_BTCB: IFarmACL;
        readonly BUSD_BTCB: IFarmACL;
        readonly ALPACA_USDT: IFarmACL;
        readonly WEX_USDT: IFarmACL;
        readonly BTCB_USDT: IFarmACL;
        readonly ETH_USDT: IFarmACL;
        readonly MATIC_USDT: IFarmACL;
        readonly TUSD_USDT: IFarmACL;
    };
};
export declare type IMdexSwap = {
    readonly dexActive: boolean;
    readonly workers: {
        readonly USDT_ETH: IWorkerACL;
        readonly BNB_ETH: IWorkerACL;
        readonly BTCB_ETH: IWorkerACL;
        readonly USDT_BTCB: IWorkerACL;
        readonly ETH_BTCB: IWorkerACL;
        readonly BNB_BTCB: IWorkerACL;
        readonly BTCB_USDT: IWorkerACL;
        readonly ETH_USDT: IWorkerACL;
        readonly BNB_USDT: IWorkerACL;
        readonly USDC_USDT: IWorkerACL;
        readonly DAI_USDT: IWorkerACL;
        readonly MDX_BNB: IWorkerACL;
        readonly USDT_BNB: IWorkerACL;
        readonly ETH_BNB: IWorkerACL;
        readonly BUSD_BNB: IWorkerACL;
        readonly BTCB_BNB: IWorkerACL;
        readonly MDX_BUSD: IWorkerACL;
        readonly BNB_BUSD: IWorkerACL;
    };
    readonly farmingPools: {
        readonly USDT_ETH: IFarmACL;
        readonly BNB_ETH: IFarmACL;
        readonly BTCB_ETH: IFarmACL;
        readonly USDT_BTCB: IFarmACL;
        readonly ETH_BTCB: IFarmACL;
        readonly BNB_BTCB: IFarmACL;
        readonly BTCB_USDT: IFarmACL;
        readonly ETH_USDT: IFarmACL;
        readonly BNB_USDT: IFarmACL;
        readonly USDC_USDT: IFarmACL;
        readonly DAI_USDT: IFarmACL;
        readonly MDX_BNB: IFarmACL;
        readonly USDT_BNB: IFarmACL;
        readonly ETH_BNB: IFarmACL;
        readonly BUSD_BNB: IFarmACL;
        readonly BTCB_BNB: IFarmACL;
        readonly MDX_BUSD: IFarmACL;
        readonly BNB_BUSD: IFarmACL;
    };
};
export declare const appConfig: Readonly<{
    readonly ActiveFarms: IDexes;
}>;
export {};