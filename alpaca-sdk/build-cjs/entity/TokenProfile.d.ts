import { BigNumber } from '@ethersproject/bignumber';
import { Dex, DexKey } from 'entity';
import { ILPRouteV2 } from '.';
export declare enum TokenType {
    Common = 0,
    InterestBearing = 1,
    Debt = 2,
    LpPair = 3
}
export interface ITokenProfile {
    name: string;
    type: TokenType;
    symbol: TokenSymbol;
    displaySymbol: string;
    slug: string;
    address: string;
    iconUrl: string;
    buyUrl?: string;
    decimal: number;
    isTokenNative: boolean;
    getPriceInUSD: () => Promise<BigNumber>;
    underlyingToken?: ITokenProfile;
    priceRoutes?: Array<ILPRouteV2>;
    priceSourceIds: IPriceSourceIds;
}
export interface IPriceSourceIds {
    coinGecko?: string;
    cryptoCompare?: string;
    coinMarketCap?: number;
}
export interface ITokenProfilePair {
    baseToken: ITokenProfile;
    farmingToken: ITokenProfile;
}
export interface ILpTokenProfile {
    name: string;
    tokenA: ITokenProfile;
    tokenB: ITokenProfile;
    dex: Dex;
    type: TokenType.LpPair;
}
export declare type ITokenProfiles = Array<ITokenProfile>;
export declare type ILpTokenProfiles = Array<ILpTokenProfile>;
export declare enum TokenSymbol {
    IBBNB = "ibBNB",
    IBBUSD = "ibBUSD",
    IBETH = "ibETH",
    IBALPACA = "ibALPACA",
    IBUSDT = "ibUSDT",
    IBBTCB = "ibBTCB",
    IBTUSD = "ibTUSD",
    IBUSDC = "ibUSDC",
    DEBTBTCB = "debtBTCB",
    DEBTBNB = "debtBNB",
    DEBTBUSD = "debtBUSD",
    DEBTETH = "debtETH",
    DEBTALPACA = "debtALPACA",
    DEBTUSDT = "debtUSDT",
    DEBTTUSD = "debtTUSD",
    DEBTUSDC = "debtUSDC",
    AUSD = "ausd",
    WBNB = "bnb",
    BUSD = "busd",
    ETH = "eth",
    BTCB = "btcb",
    CAKE = "cake",
    USDT = "usdt",
    DOT = "dot",
    UNI = "uni",
    LINK = "link",
    XVS = "xvs",
    YFI = "yfi",
    VAI = "vai",
    USDC = "usdc",
    DAI = "dai",
    UST = "ust",
    ITAM = "itam",
    BETH = "beth",
    COMP = "comp",
    SUSHI = "sushi",
    ALPACA = "alpaca",
    BMXX = "bmxx",
    BELT = "belt",
    BOR = "bor",
    BRY = "bry",
    PCWS = "cws",
    SWINGBY = "swingby",
    DODO = "dodo",
    SALPACA = "sAlpaca",
    WEX = "wex",
    WAULTX = "waultx",
    ODDZ = "oddz",
    ADA = "ada",
    FORM = "form",
    MATIC = "matic",
    TUSD = "tusd",
    TRX = "trx",
    BTT = "btt",
    ORBS = "orbs",
    AXS = "axs",
    PMON = "pmon",
    SCIX = "scix",
    WUSD = "wusd",
    PHA = "pha",
    ALM = "alm",
    KALA = "kala",
    MBOX = "mbox",
    NAOS = "naos",
    MDX = "mdx",
    DVI = "dvi",
    LATTE = "latte",
    QBT = "qbt",
    PEAR = "pear",
    POTS = "pots",
    LUCKY = "lucky",
    POLAR = "polar",
    MONI = "moni",
    BMON = "bmon",
    NFTY = "nfty",
    SHEESHA = "sheesha",
    SKILL = "skill",
    XMS = "xms",
    ARV = "arv",
    XWIN = "xwin",
    LEON = "leon",
    WNOW = "wnow",
    DEP = "dep",
    TENFI = "tenfi",
    CAPS = "caps",
    SPS = "sps",
    PLUT = "plut",
    ETERNAL = "eternal",
    THG = "thg",
    PAYB = "payb",
    LAND = "land",
    HIGH = "high",
    DLTA = "dlta"
}
export declare type IMapTokenProfiles = Record<TokenSymbol, ITokenProfile>;
export declare type IMapAddressTokenProfiles = Record<string, ITokenProfile>;
export declare type IMapLpTokenProfiles = Record<TokenSymbol, Record<TokenSymbol, ILpTokenProfile>>;
export declare type IMapDexLpTokenProfiles = Record<DexKey, IMapLpTokenProfiles>;
