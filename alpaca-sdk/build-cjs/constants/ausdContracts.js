"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedSpreadLiquidationStategy = exports.SCPriceOracleAddress = exports.GetPositionsAddress = exports.StableSwapModuleAddress = exports.StabilityFeeCollectorAddress = exports.StablecoinAdapterAddress = exports.PositionManagerAddress = exports.AUSDAddress = exports.BookKeeperAddress = exports.ProxyWalletFactoryAddress = exports.ProxyWalletRegistryAddress = exports.AlpacaStablecoinProxyActionsAddress = exports.CollateralPoolConfigAddress = exports.BUSDStableCollateralPoolAdapterAddress = exports.IbWBNBCollateralPoolAdapterAddress = exports.IbUSDTCollateralPoolAdapterAddress = exports.IbBUSDCollateralPoolAdapterAddress = void 0;
const index_1 = require("./index");
const { CollateralPoolConfig, AlpacaStablecoinProxyActions, ProxyWalletRegistry, BookKeeper, AlpacaStablecoin, PositionManager, ProxyWalletFactory, PriceOracle, StablecoinAdapters, StabilityFeeCollector, GetPositions, Strategies, StableSwapModule, } = index_1.config.AlpacaStablecoin;
const IbBUSDCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibBUSD');
const IbUSDTCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibUSDT');
const IbWBNBCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'ibWBNB');
const BUSDStableCollateralPool = CollateralPoolConfig.collateralPools.find((o) => o.collateralPoolId === 'BUSD-STABLE');
// CollateralPools
exports.IbBUSDCollateralPoolAdapterAddress = IbBUSDCollateralPool.adapter;
exports.IbUSDTCollateralPoolAdapterAddress = IbUSDTCollateralPool.adapter;
exports.IbWBNBCollateralPoolAdapterAddress = IbWBNBCollateralPool.adapter;
// Stablecoin Swap
exports.BUSDStableCollateralPoolAdapterAddress = BUSDStableCollateralPool.adapter;
exports.CollateralPoolConfigAddress = CollateralPoolConfig.address;
exports.AlpacaStablecoinProxyActionsAddress = AlpacaStablecoinProxyActions.address;
exports.ProxyWalletRegistryAddress = ProxyWalletRegistry.address;
exports.ProxyWalletFactoryAddress = ProxyWalletFactory.address;
exports.BookKeeperAddress = BookKeeper.address;
exports.AUSDAddress = AlpacaStablecoin.AUSD.address;
exports.PositionManagerAddress = PositionManager.address;
exports.StablecoinAdapterAddress = StablecoinAdapters.AUSD.address;
exports.StabilityFeeCollectorAddress = StabilityFeeCollector.address;
exports.StableSwapModuleAddress = StableSwapModule.address;
exports.GetPositionsAddress = GetPositions.address;
exports.SCPriceOracleAddress = PriceOracle.address;
exports.FixedSpreadLiquidationStategy = Strategies.FixedSpreadLiquidationStrategy.address;
