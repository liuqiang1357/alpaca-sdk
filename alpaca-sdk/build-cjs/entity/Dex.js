"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDexByKey = exports.activeDexes = exports.Dexes = exports.MdexSwapDex = exports.WaultSwapDex = exports.PancakeSwapDexV1 = exports.PancakeSwapDex = exports.DexKey = void 0;
const contracts_1 = require("../constants/contracts");
const PancakeMasterChef_json_1 = require("@alpaca-finance/alpaca-contract/artifacts/contracts/6/protocol/apis/pancake/PancakeMasterChef.sol/PancakeMasterChef.json");
const WexMaster_json_1 = require("@alpaca-finance/alpaca-contract/artifacts/contracts/6.12/protocol/apis/wault/WexMaster.sol/WexMaster.json");
const BSCPool_json_1 = require("@alpaca-finance/alpaca-contract/artifacts/contracts/6/protocol/apis/mdex/BSCPool.sol/BSCPool.json");
const fiatPrice_1 = require("../utils/fiatPrice");
const constants_1 = require("../constants");
const appConfig_1 = require("../constants/appConfig");
var DexKey;
(function (DexKey) {
    DexKey["PancakeSwap"] = "pcs";
    DexKey["PancakeSwapV1"] = "pcs-v1";
    DexKey["WaultSwap"] = "ws";
    DexKey["MdexSwap"] = "ms";
})(DexKey = exports.DexKey || (exports.DexKey = {}));
exports.PancakeSwapDex = {
    key: DexKey.PancakeSwap,
    name: 'PancakeSwap',
    slug: 'pancake-swap',
    altName1: 'PCSv2',
    exchangeConfigKey: 'Pancakeswap',
    fee: 25,
    feeToLPHolder: 17,
    feeToTreasury: 3,
    feeToBurn: 5,
    masterChefAddress: contracts_1.PancakeMasterChefAddress,
    masterChefAbi: PancakeMasterChef_json_1.abi,
    routerDeployedDate: new Date('2021-04-23'),
    factory: constants_1.config.Exchanges.Pancakeswap.FactoryV2,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2',
    rewardTokenAddress: contracts_1.CAKEAddress,
    getRewardTokenPrice: () => fiatPrice_1.getTokenPrice('pancakeswap-token'),
    isActive: appConfig_1.appConfig.ActiveFarms.PancakeSwap.dexActive,
};
exports.PancakeSwapDexV1 = {
    key: DexKey.PancakeSwap,
    name: 'PancakeSwapV1',
    slug: 'pancake-swap-v1',
    altName1: 'PCSv1',
    exchangeConfigKey: 'Pancakeswap',
    fee: 0,
    feeToLPHolder: 0,
    feeToTreasury: 0,
    feeToBurn: 0,
    masterChefAddress: contracts_1.PancakeMasterChefAddress,
    masterChefAbi: PancakeMasterChef_json_1.abi,
    routerDeployedDate: new Date('2020-09-18'),
    factory: constants_1.config.Exchanges.Pancakeswap.UniswapV2Factory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2',
    rewardTokenAddress: contracts_1.CAKEAddress,
    getRewardTokenPrice: () => fiatPrice_1.getTokenPrice('pancakeswap-token'),
    isActive: false,
};
exports.WaultSwapDex = {
    key: DexKey.WaultSwap,
    name: 'WaultSwap',
    slug: 'wault-swap',
    altName1: 'WaultSwap',
    exchangeConfigKey: 'Waultswap',
    fee: 20,
    feeToLPHolder: 18,
    feeToTreasury: 0,
    feeToBurn: 2,
    masterChefAddress: contracts_1.WaultMasterAddress,
    masterChefAbi: WexMaster_json_1.abi,
    routerDeployedDate: new Date('2021-04-17'),
    factory: constants_1.config.Exchanges.Waultswap.WaultswapFactory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/waultswap.svg',
    rewardTokenAddress: contracts_1.WEXAddress,
    getRewardTokenPrice: () => fiatPrice_1.getTokenPrice('waultswap'),
    isActive: appConfig_1.appConfig.ActiveFarms.WaultSwap.dexActive,
};
exports.MdexSwapDex = {
    key: DexKey.MdexSwap,
    name: 'MDEX',
    slug: 'mdex-swap',
    altName1: 'MdexSwap',
    exchangeConfigKey: 'MdexSwap',
    fee: 0,
    feeToLPHolder: 0,
    masterChefAddress: contracts_1.MdexMasterAddress,
    masterChefAbi: BSCPool_json_1.abi,
    routerDeployedDate: new Date('2021-04-05'),
    factory: constants_1.config.Exchanges.Mdex.MdexFactory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/mdex.svg',
    rewardTokenAddress: contracts_1.MDEXAddress,
    getRewardTokenPrice: () => fiatPrice_1.getTokenPrice('mdex'),
    isActive: appConfig_1.appConfig.ActiveFarms.MdexSwap.dexActive,
};
exports.Dexes = [exports.PancakeSwapDex, exports.WaultSwapDex, exports.MdexSwapDex];
exports.activeDexes = exports.Dexes.filter((o) => o.isActive);
const getDexByKey = (dex) => {
    switch (dex) {
        case DexKey.PancakeSwap:
            return exports.PancakeSwapDex;
        case DexKey.WaultSwap:
            return exports.WaultSwapDex;
        case DexKey.MdexSwap:
            return exports.MdexSwapDex;
        default:
            throw new Error('getDexByKey: dex not found');
    }
};
exports.getDexByKey = getDexByKey;
