import { config } from './index';
const { CollateralPoolConfig, AlpacaStablecoinProxyActions, ProxyWalletRegistry, BookKeeper, AlpacaStablecoin, PositionManager, ProxyWalletFactory, PriceOracle, StablecoinAdapters, StabilityFeeCollector, GetPositions, Strategies, StableSwapModule, } = config.AlpacaStablecoin;
const IbBUSDCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibBUSD');
const IbUSDTCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibUSDT');
const IbWBNBCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibWBNB');
const BUSDStableCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'BUSD-STABLE');
// CollateralPools
export const IbBUSDCollateralPoolAdapterAddress = IbBUSDCollateralPool.adapter;
export const IbUSDTCollateralPoolAdapterAddress = IbUSDTCollateralPool.adapter;
export const IbWBNBCollateralPoolAdapterAddress = IbWBNBCollateralPool.adapter;
// Stablecoin Swap
export const BUSDStableCollateralPoolAdapterAddress = BUSDStableCollateralPool.adapter;
export const CollateralPoolConfigAddress = CollateralPoolConfig.address;
export const AlpacaStablecoinProxyActionsAddress = AlpacaStablecoinProxyActions.address;
export const ProxyWalletRegistryAddress = ProxyWalletRegistry.address;
export const ProxyWalletFactoryAddress = ProxyWalletFactory.address;
export const BookKeeperAddress = BookKeeper.address;
export const AUSDAddress = AlpacaStablecoin.AUSD.address;
export const PositionManagerAddress = PositionManager.address;
export const StablecoinAdapterAddress = StablecoinAdapters.AUSD.address;
export const StabilityFeeCollectorAddress = StabilityFeeCollector.address;
export const StableSwapModuleAddress = StableSwapModule.address;
export const GetPositionsAddress = GetPositions.address;
export const SCPriceOracleAddress = PriceOracle.address;
export const FixedSpreadLiquidationStategy = Strategies.FixedSpreadLiquidationStrategy.address;
