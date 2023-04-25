export interface IConfig {
    Timelock: string;
    MultiCall: string;
    FairLaunch: IFairLaunch;
    MerkleDistributor: IMerkleDistributor;
    GrazingRange: IGrazingRange;
    Scientix: IScientix;
    LatteSwap: ILatteSwap;
    MarsEcosystem: IMarsEcosystem;
    Exchanges: {
        Pancakeswap: IPancakeswap;
        Waultswap: IWaultSwap;
        Mdex: IMdex;
        Apeswap: IApeswap;
    };
    Tokens: ITokens;
    LpTokens: ILpTokens;
    SharedStrategies: {
        Pancakeswap: ISharedStrategies;
        Waultswap: ISharedStrategies;
    };
    SharedConfig: {
        TripleSlopeModel: string;
        WNativeRelayer: string;
        WorkerConfig: string;
    };
    Oracle: {
        SimpleOracle: string;
    };
    Vaults: IVault[];
    LpInitCodePairHash: ILpInitCodePairHash;
    AlpacaStablecoin: IAlpacaStableCoin;
    XALPACAConfig: IXALPACAConfig;
}
export interface IFairLaunch {
    address: string;
    pools: IPool[];
}
export interface IPool {
    id: number;
    stakingToken: string;
    address: string;
}
export interface IPancakeswap {
    UniswapV2Router02: string;
    MasterChef: string;
    LpTokens: LpTokens[];
    UniswapV2Factory: string;
    FactoryV2: string;
    RouterV2: string;
}
export interface IWaultSwap {
    WexMaster: string;
    LpTokens: LpTokens[];
    WaultswapFactory: string;
}
export interface IMdex {
    BSCPool: string;
    MdexFactory: string;
    MdexRouter: string;
    SwapMining: string;
    LpTokens: LpTokens[];
}
export interface IApeswap {
    MasterApe: string;
    ApesFactory: string;
    ApeRouter: string;
    LpTokens: LpTokens[];
}
export interface ISharedStrategies {
    StrategyAddBaseTokenOnly: string;
    StrategyLiquidate: string;
    StrategyWithdrawMinimizeTrading: string;
}
export interface LpTokens {
    pId: number;
    name: string;
    address: string;
}
export interface ILpInitCodePairHash {
    PancakeSwapV2PairHash: string;
    PancakeSwapV1PairHash: string;
    WaultSwapPairHash: string;
    MdexSwapPairHash: string;
    ApeSwapPairHash: string;
}
export interface ILpTokens {
    'ALPACA-WBNB (Legacy)': string;
    'ALPACA-WBNB': string;
    'sALPACA-ALPACA': string;
}
export interface ITokens {
    [tokenSymbol: string]: string;
    WBNB: string;
    ALPACA: string;
    sALPACA: string;
    BUSD: string;
    CAKE: string;
    SYRUP: string;
    USDT: string;
    BTCB: string;
    ETH: string;
    DOT: string;
    UNI: string;
    LINK: string;
    XVS: string;
    YFI: string;
    VAI: string;
    USDC: string;
    DAI: string;
    UST: string;
    BETH: string;
    COMP: string;
    SUSHI: string;
    ITAM: string;
    bMXX: string;
    BELT: string;
    BOR: string;
    BRY: string;
    pCWS: string;
    SWINGBY: string;
    DODO: string;
    WEX: string;
    ADA: string;
    FORM: string;
    MATIC: string;
    ODDZ: string;
    TUSD: string;
    TRX: string;
    BTT: string;
    ORBS: string;
    AXS: string;
    PMON: string;
    WUSD: string;
    PHA: string;
    ALM: string;
    KALA: string;
    MBOX: string;
    NAOS: string;
    MDX: string;
    SCIX: string;
    DVI: string;
    LATTE: string;
    QBT: string;
    PEAR: string;
    POTS: string;
    LUCKY: string;
    POLAR: string;
    MONI: string;
    BMON: string;
    SHEESHA: string;
    NFTY: string;
    SKILL: string;
    XMS: string;
    ARV: string;
    xWIN: string;
    LEON: string;
    WNOW: string;
    DEP: string;
    TENFI: string;
    CAPS: string;
    SPS: string;
    PLUT: string;
    ETERNAL: string;
    THG: string;
    PAYB: string;
    LAND: string;
    HIGH: string;
    DLTA: string;
}
export interface IMerkleDistributor {
    'ITAM-week-1': string;
    'ITAM-week-2': string;
    'ITAM-week-3': string;
    'ITAM-week-4': string;
}
export interface IGrazingRange {
    address: string;
    pools: IGrazingRangePool[];
}
export interface IGrazingRangePool {
    id: number;
    name: string;
    stakingToken: string;
    rewardToken: string;
}
export interface IScientix {
    StakingPools: IGrazingRange;
}
export interface ILatteSwap {
    MasterBarista: IGrazingRange;
    Booster: IBooster;
}
export interface IBooster {
    address: string;
}
export interface IMarsEcosystem {
    LiquidityMiningMaster: IGrazingRange;
}
export interface IVault {
    name: string;
    symbol: string;
    address: string;
    baseToken: string;
    debtToken: string;
    config: string;
    tripleSlopeModel: string;
    StrategyAddTwoSidesOptimal: {
        Pancakeswap: string;
        Waultswap: string;
    };
    workers: IWorker[];
}
export interface IWorker {
    name: string;
    address: string;
    config: string;
    strategies: IWorkerStrategies;
}
export interface IWorkerStrategies {
    StrategyAddAllBaseToken: string;
    StrategyLiquidate: string;
    StrategyAddTwoSidesOptimal: string;
    StrategyWithdrawMinimizeTrading: string;
    StrategyPartialCloseLiquidate: string;
    StrategyPartialCloseMinimizeTrading: string;
}
export interface IAlpacaStableCoin {
    ProxyWalletFactory: IDeployedContract;
    ProxyWalletRegistry: IDeployedContract;
    AlpacaStablecoinProxyActions: IDeployedContract;
    AccessControlConfig: IDeployedContract;
    AlpacaStablecoin: IAlpacaStablecoin;
    CollateralPoolConfig: ICollateralPoolConfig;
    BookKeeper: IDeployedContract;
    FlashMintModule: IDeployedContract;
    ShowStopper: IDeployedContract;
    PositionManager: IDeployedContract;
    GetPositions: IDeployedContract;
    StabilityFeeCollector: IDeployedContract;
    IbTokenAdapters: IbTokenAdapter[];
    StablecoinAdapters: IStablecoinAdapter;
    PriceOracle: IDeployedContract;
    SystemDebtEngine: IDeployedContract;
    LiquidationEngine: IDeployedContract;
    Strategies: IStrategies;
    FlashLiquidator: IFlashLiquidator;
    StableSwapModule: IDeployedContract;
}
export interface IDeployedContract {
    address: string;
    deployedBlock: number;
}
export interface ICollateralPoolConfig extends IDeployedContract {
    collateralPools: ICollateralPool[];
}
export interface ICollateralPool {
    collateralPoolId: string;
    adapter: string;
}
export interface IAuthTokenAdapter extends IDeployedContract {
    collateralToken: string;
}
export interface IAlpacaStablecoin {
    AUSD: IDeployedContract;
}
export interface IStablecoinAdapter {
    AUSD: IStablecoin;
}
export interface IbTokenAdapter {
    address: string;
    collateralToken: string;
}
export interface IStablecoin extends IDeployedContract {
    alpacaStablecoin: string;
}
export interface IStrategies {
    FixedSpreadLiquidationStrategy: IDeployedContract;
}
export interface IFlashLiquidator {
    PCSFlashLiquidator: IDeployedContract;
}
export interface IXALPACAConfig {
    Timelock: string;
    FairLaunch: IFairLaunch;
    xALPACA: string;
    ALPACAFeeder: string;
    GrassHouses: IGrassHouse[];
    GrassHouseGateway: string;
    ScientixFeeder: string;
}
export interface IGrassHouse {
    name: string;
    address: string;
    rewardToken: string;
}
export declare function getConfig(): IConfig;
