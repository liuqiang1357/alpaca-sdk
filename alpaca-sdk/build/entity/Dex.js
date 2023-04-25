import { CAKEAddress, MDEXAddress, MdexMasterAddress, PancakeMasterChefAddress, WaultMasterAddress, WEXAddress, } from '../constants/contracts';
import { abi as PancakeMasterChefAbi } from '@alpaca-finance/alpaca-contract/artifacts/contracts/6/protocol/apis/pancake/PancakeMasterChef.sol/PancakeMasterChef.json';
import { abi as WexMasterAbi } from '@alpaca-finance/alpaca-contract/artifacts/contracts/6.12/protocol/apis/wault/WexMaster.sol/WexMaster.json';
import { abi as MdexMasterAbi } from '@alpaca-finance/alpaca-contract/artifacts/contracts/6/protocol/apis/mdex/BSCPool.sol/BSCPool.json';
import { getTokenPrice } from '../utils/fiatPrice';
import { config } from '../constants';
import { appConfig } from '../constants/appConfig';
export var DexKey;
(function (DexKey) {
    DexKey["PancakeSwap"] = "pcs";
    DexKey["PancakeSwapV1"] = "pcs-v1";
    DexKey["WaultSwap"] = "ws";
    DexKey["MdexSwap"] = "ms";
})(DexKey || (DexKey = {}));
export const PancakeSwapDex = {
    key: DexKey.PancakeSwap,
    name: 'PancakeSwap',
    slug: 'pancake-swap',
    altName1: 'PCSv2',
    exchangeConfigKey: 'Pancakeswap',
    fee: 25,
    feeToLPHolder: 17,
    feeToTreasury: 3,
    feeToBurn: 5,
    masterChefAddress: PancakeMasterChefAddress,
    masterChefAbi: PancakeMasterChefAbi,
    routerDeployedDate: new Date('2021-04-23'),
    factory: config.Exchanges.Pancakeswap.FactoryV2,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2',
    rewardTokenAddress: CAKEAddress,
    getRewardTokenPrice: () => getTokenPrice('pancakeswap-token'),
    isActive: appConfig.ActiveFarms.PancakeSwap.dexActive,
};
export const PancakeSwapDexV1 = {
    key: DexKey.PancakeSwap,
    name: 'PancakeSwapV1',
    slug: 'pancake-swap-v1',
    altName1: 'PCSv1',
    exchangeConfigKey: 'Pancakeswap',
    fee: 0,
    feeToLPHolder: 0,
    feeToTreasury: 0,
    feeToBurn: 0,
    masterChefAddress: PancakeMasterChefAddress,
    masterChefAbi: PancakeMasterChefAbi,
    routerDeployedDate: new Date('2020-09-18'),
    factory: config.Exchanges.Pancakeswap.UniswapV2Factory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2',
    rewardTokenAddress: CAKEAddress,
    getRewardTokenPrice: () => getTokenPrice('pancakeswap-token'),
    isActive: false,
};
export const WaultSwapDex = {
    key: DexKey.WaultSwap,
    name: 'WaultSwap',
    slug: 'wault-swap',
    altName1: 'WaultSwap',
    exchangeConfigKey: 'Waultswap',
    fee: 20,
    feeToLPHolder: 18,
    feeToTreasury: 0,
    feeToBurn: 2,
    masterChefAddress: WaultMasterAddress,
    masterChefAbi: WexMasterAbi,
    routerDeployedDate: new Date('2021-04-17'),
    factory: config.Exchanges.Waultswap.WaultswapFactory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/iconswap/waultswap.svg',
    rewardTokenAddress: WEXAddress,
    getRewardTokenPrice: () => getTokenPrice('waultswap'),
    isActive: appConfig.ActiveFarms.WaultSwap.dexActive,
};
export const MdexSwapDex = {
    key: DexKey.MdexSwap,
    name: 'MDEX',
    slug: 'mdex-swap',
    altName1: 'MdexSwap',
    exchangeConfigKey: 'MdexSwap',
    fee: 0,
    feeToLPHolder: 0,
    masterChefAddress: MdexMasterAddress,
    masterChefAbi: MdexMasterAbi,
    routerDeployedDate: new Date('2021-04-05'),
    factory: config.Exchanges.Mdex.MdexFactory,
    iconUrl: 'https://alpaca-app-assets.alpacafinance.org/icons/coins/mdex.svg',
    rewardTokenAddress: MDEXAddress,
    getRewardTokenPrice: () => getTokenPrice('mdex'),
    isActive: appConfig.ActiveFarms.MdexSwap.dexActive,
};
export const Dexes = [PancakeSwapDex, WaultSwapDex, MdexSwapDex];
export const activeDexes = Dexes.filter((o) => o.isActive);
export const getDexByKey = (dex) => {
    switch (dex) {
        case DexKey.PancakeSwap:
            return PancakeSwapDex;
        case DexKey.WaultSwap:
            return WaultSwapDex;
        case DexKey.MdexSwap:
            return MdexSwapDex;
        default:
            throw new Error('getDexByKey: dex not found');
    }
};
