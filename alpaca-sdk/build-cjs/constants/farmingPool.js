"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFarmingConfigByWorkerAddress = exports.getFarmingPoolByKeyAndSlug = exports.getFarmingPoolByWorkerAddress = exports.openableFarmingPools = exports.availableFarmingPools = exports.CAKEMAXI = void 0;
const worker_1 = require("./worker");
const pools_1 = require("./pools");
const tokenProfile_1 = require("./tokenProfile");
const address_1 = require("../utils/address");
const vault_1 = require("./vault");
const setOfLeverage_1 = require("./setOfLeverage");
const entity_1 = require("../entity");
const appConfig_1 = require("./appConfig");
const contracts_1 = require("./contracts");
const onlyActiveWorker = (configs) => configs.filter((o) => { var _a; return !!((_a = o.worker) === null || _a === void 0 ? void 0 : _a.active); });
const waultSwapFarmingPool = appConfig_1.appConfig.ActiveFarms.WaultSwap.farmingPools;
const pancakeSwapFarmingPool = appConfig_1.appConfig.ActiveFarms.PancakeSwap.farmingPools;
const mdexFarmingPool = appConfig_1.appConfig.ActiveFarms.MdexSwap.farmingPools;
// Mdex
// MS USDT
const MS_BTCB_USDT = Object.assign(Object.assign({ key: 'ms-btcb-usdt', dex: entity_1.MdexSwapDex, pId: pools_1.MS_BTCBUSDTPoolId, isWarn: false, tags: ['btcb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.BTCB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-btcb-usdt',
            worker: worker_1.mapWorkers['ms-btcb-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-btcb',
            worker: worker_1.mapWorkers['ms-usdt-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const MS_ETH_USDT = Object.assign(Object.assign({ key: 'ms-eth-usdt', dex: entity_1.MdexSwapDex, pId: pools_1.MS_ETHUSDTPoolId, isWarn: false, tags: ['eth', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.ETH_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-eth-usdt',
            worker: worker_1.mapWorkers['ms-eth-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-eth',
            worker: worker_1.mapWorkers['ms-usdt-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const MS_BNB_USDT = Object.assign(Object.assign({ key: 'ms-bnb-usdt', dex: entity_1.MdexSwapDex, pId: pools_1.MS_WBNBUSDTPoolId, isWarn: false, tags: ['bnb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.BNB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-usdt',
            worker: worker_1.mapWorkers['ms-bnb-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-bnb',
            worker: worker_1.mapWorkers['ms-usdt-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bnb,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const MS_USDC_USDT = Object.assign(Object.assign({ key: 'ms-usdc-usdt', dex: entity_1.MdexSwapDex, pId: pools_1.MS_USDCUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, mdexFarmingPool.USDC_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-usdc-usdt',
            worker: worker_1.mapWorkers['ms-usdc-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdc,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const MS_DAI_USDT = Object.assign(Object.assign({ key: 'ms-dai-usdt', dex: entity_1.MdexSwapDex, pId: pools_1.MS_DAIUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, mdexFarmingPool.DAI_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-dai-usdt',
            worker: worker_1.mapWorkers['ms-dai-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.dai, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.dai,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.dai, tokenProfile_1.mapTokenProfiles.usdt],
    } });
// MS BNB
const MS_MDX_BNB = Object.assign(Object.assign({ key: 'ms-mdx-bnb', dex: entity_1.MdexSwapDex, pId: pools_1.MS_MDXWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.MDX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ms-mdx-bnb',
            worker: worker_1.mapWorkers['ms-mdx-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.mdx, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.mdx,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.mdx, tokenProfile_1.mapTokenProfiles.bnb],
    } });
// MS BUSD
const MS_MDX_BUSD = Object.assign(Object.assign({ key: 'ms-mdx-busd', dex: entity_1.MdexSwapDex, pId: pools_1.MS_MDXBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.MDX_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ms-mdx-busd',
            worker: worker_1.mapWorkers['ms-mdx-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.mdx, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.mdx,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.mdx, tokenProfile_1.mapTokenProfiles.busd],
    } });
const MS_BNB_BUSD = Object.assign(Object.assign({ key: 'ms-bnb-busd', dex: entity_1.MdexSwapDex, pId: pools_1.MS_WBNBBUSDPoolId, isWarn: false, tags: ['bnb', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-busd',
            worker: worker_1.mapWorkers['ms-bnb-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-busd-bnb',
            worker: worker_1.mapWorkers['ms-busd-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bnb,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd],
    } });
// MS ETH
const MS_BNB_ETH = Object.assign(Object.assign({ key: 'ms-bnb-eth', dex: entity_1.MdexSwapDex, pId: pools_1.MS_WBNBETHPoolId, isWarn: false, tags: ['eth', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.BNB_ETH), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-eth',
            worker: worker_1.mapWorkers['ms-bnb-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-eth-bnb',
            worker: worker_1.mapWorkers['ms-eth-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bnb,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.eth],
    } });
// MS BTCB
const MS_ETH_BTCB = Object.assign(Object.assign({ key: 'ms-eth-btcb', dex: entity_1.MdexSwapDex, pId: pools_1.MS_ETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ms-eth-btcb',
            worker: worker_1.mapWorkers['ms-eth-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.btcb,
                tokenProfile_1.mapTokenProfiles.eth,
                tokenProfile_1.mapTokenProfiles.usdt,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-btcb-eth',
            worker: worker_1.mapWorkers['ms-btcb-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.btcb,
                tokenProfile_1.mapTokenProfiles.eth,
                tokenProfile_1.mapTokenProfiles.usdt,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.eth],
    } });
const MS_BNB_BTCB = Object.assign(Object.assign({ key: 'ms-bnb-btcb', dex: entity_1.MdexSwapDex, pId: pools_1.MS_WBNBBTCBPoolId, isWarn: false, tags: ['bnb', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, mdexFarmingPool.BNB_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-btcb',
            worker: worker_1.mapWorkers['ms-bnb-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ms-btcb-bnb',
            worker: worker_1.mapWorkers['ms-btcb-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.bnb],
    } });
//Wault
const WS_WEX_BNB = Object.assign(Object.assign({ key: 'ws-wex-bnb', dex: entity_1.WaultSwapDex, pId: pools_1.WS_WEXWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.WEX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-wex-bnb',
            worker: worker_1.mapWorkers['ws-wex-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.wex, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.wex,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.wex, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const WS_ALPACA_BNB = Object.assign(Object.assign({ key: 'ws-alpaca-bnb', dex: entity_1.WaultSwapDex, pId: pools_1.WS_ALPACAWBNBPoolId, isWarn: false, tags: ['bnb', 'alpaca'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.ALPACA_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-alpaca-bnb',
            worker: worker_1.mapWorkers['ws-alpaca-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-bnb-alpaca',
            worker: worker_1.mapWorkers['ws-bnb-alpaca'],
            vault: vault_1.mapVault.alpaca,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.alpaca,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const WS_WAULTX_BNB = Object.assign(Object.assign({ key: 'ws-waultx-bnb', dex: entity_1.WaultSwapDex, pId: pools_1.WS_WAULTXWBNBPoolId, isWarn: false, tags: ['waultx', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.WAULTX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-waultx-bnb',
            worker: worker_1.mapWorkers['ws-waultx-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.waultx, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.waultx,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.waultx, tokenProfile_1.mapTokenProfiles.bnb],
    } });
// BUSD
const WS_ETH_BUSD = Object.assign(Object.assign({ key: 'ws-eth-busd', dex: entity_1.WaultSwapDex, pId: pools_1.WS_ETHBUSDPoolId, isWarn: false, tags: ['busd', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-busd',
            worker: worker_1.mapWorkers['ws-eth-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-eth',
            worker: worker_1.mapWorkers['ws-busd-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd],
    } });
const WS_BNB_BUSD = Object.assign(Object.assign({ key: 'ws-bnb-busd', dex: entity_1.WaultSwapDex, pId: pools_1.WS_WBNBBUSDPoolId, isWarn: false, tags: ['busd', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-bnb-busd',
            worker: worker_1.mapWorkers['ws-bnb-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-bnb',
            worker: worker_1.mapWorkers['ws-busd-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bnb,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd],
    } });
const WS_USDT_BUSD = Object.assign(Object.assign({ key: 'ws-usdt-busd', dex: entity_1.WaultSwapDex, pId: pools_1.WS_USDTBUSDPoolId, isWarn: false, tags: ['busd', 'usdt', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, waultSwapFarmingPool.USDT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-usdt-busd',
            worker: worker_1.mapWorkers['ws-usdt-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-usdt',
            worker: worker_1.mapWorkers['ws-busd-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdt,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.busd, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const WS_BTCB_BUSD = Object.assign(Object.assign({ key: 'ws-btcb-busd', dex: entity_1.WaultSwapDex, pId: pools_1.WS_BTCBBUSDPoolId, isWarn: false, tags: ['btcb', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.BUSD_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ws-btcb-busd',
            worker: worker_1.mapWorkers['ws-btcb-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-btcb',
            worker: worker_1.mapWorkers['ws-busd-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd],
    } });
const WS_WUSD_BUSD = Object.assign(Object.assign({ key: 'ws-wusd-busd', dex: entity_1.WaultSwapDex, pId: pools_1.WS_WUSDBUSDPoolId, isWarn: false, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, waultSwapFarmingPool.WUSD_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-wusd-busd',
            worker: worker_1.mapWorkers['ws-wusd-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.wusd, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.wusd,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.wusd, tokenProfile_1.mapTokenProfiles.busd],
    } });
// USDT
const WS_ALPACA_USDT = Object.assign(Object.assign({ key: 'ws-alpaca-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_ALPACAUSDTPoolId, isWarn: false, tags: ['usdt', 'alpaca'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.ALPACA_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-alpaca-usdt',
            worker: worker_1.mapWorkers['ws-alpaca-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.alpaca,
                tokenProfile_1.mapTokenProfiles.usdt,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
        {
            key: 'ws-usdt-alpaca',
            worker: worker_1.mapWorkers['ws-usdt-alpaca'],
            vault: vault_1.mapVault.alpaca,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.alpaca,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const WS_WEX_USDT = Object.assign(Object.assign({ key: 'ws-wex-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_WEXUSDTPoolId, isWarn: false, tags: ['usdt', 'wex'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.WEX_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-wex-usdt',
            worker: worker_1.mapWorkers['ws-wex-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.wex, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.wex,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.wex, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const WS_BTCB_USDT = Object.assign(Object.assign({ key: 'ws-btcb-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_BTCBUSDTPoolId, isWarn: false, tags: ['btcb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.BTCB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-btcb-usdt',
            worker: worker_1.mapWorkers['ws-btcb-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-btcb',
            worker: worker_1.mapWorkers['ws-usdt-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const WS_MATIC_USDT = Object.assign(Object.assign({ key: 'ws-matic-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_MATICUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.MATIC_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-matic-usdt',
            worker: worker_1.mapWorkers['ws-matic-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.matic, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.matic,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.matic, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const WS_TUSD_USDT = Object.assign(Object.assign({ key: 'ws-tusd-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_TUSDUSDTPoolId, isWarn: false, tags: ['usdt', 'tusd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, waultSwapFarmingPool.TUSD_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-tusd-usdt',
            worker: worker_1.mapWorkers['ws-tusd-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-tusd',
            worker: worker_1.mapWorkers['ws-usdt-tusd'],
            vault: vault_1.mapVault.tusd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.tusd,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.usdt],
    } });
// BTCB
const WS_ETH_BTCB = Object.assign(Object.assign({ key: 'ws-eth-btcb', dex: entity_1.WaultSwapDex, pId: pools_1.WS_ETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-btcb',
            worker: worker_1.mapWorkers['ws-eth-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-btcb-eth',
            worker: worker_1.mapWorkers['ws-btcb-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.btcb,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.btcb],
    } });
// ETH
const WS_BETH_ETH = Object.assign(Object.assign({ key: 'ws-beth-eth', dex: entity_1.WaultSwapDex, pId: pools_1.WS_BETHETHPoolId, isWarn: false, tags: ['beth', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, waultSwapFarmingPool.BETH_ETH), { configs: onlyActiveWorker([
        {
            key: 'ws-beth-eth',
            worker: worker_1.mapWorkers['ws-beth-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.beth, tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.beth,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.beth, tokenProfile_1.mapTokenProfiles.eth],
    } });
// USDT
const WS_ETH_USDT = Object.assign(Object.assign({ key: 'ws-eth-usdt', dex: entity_1.WaultSwapDex, pId: pools_1.WS_ETHUSDTPoolId, isWarn: false, tags: ['eth', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-usdt',
            worker: worker_1.mapWorkers['ws-eth-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-eth',
            worker: worker_1.mapWorkers['ws-usdt-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdt],
    } });
//PanCake
const PSC_BUSD_ALPACA = Object.assign(Object.assign({ key: 'pcs-busd-alpaca', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBUSDALPACAPoolId, isWarn: true, tags: ['alpaca', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ALPACA_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-alpaca-busd',
            worker: worker_1.mapWorkers['pcs-alpaca-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-alpaca',
            worker: worker_1.mapWorkers['pcs-busd-alpaca'],
            vault: vault_1.mapVault.alpaca,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.alpaca, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.busd,
        token1: tokenProfile_1.mapTokenProfiles.alpaca,
        path: [tokenProfile_1.mapTokenProfiles.busd, tokenProfile_1.mapTokenProfiles.alpaca],
    } });
const PCS_USDT_BNB = Object.assign(Object.assign({ key: 'pcs-usdt-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUSDTBNBPoolId, isWarn: true, tags: ['bnb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bnb-usdt',
            worker: worker_1.mapWorkers['pcs-bnb-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdt-bnb',
            worker: worker_1.mapWorkers['pcs-usdt-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdt,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_CAKE_BUSD = Object.assign(Object.assign({ key: 'pcs-cake-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeCAKEBUSDPoolId, isWarn: true, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-busd',
            worker: worker_1.mapWorkers['pcs-cake-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.cake,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_DODO_BNB = Object.assign(Object.assign({ key: 'pcs-dodo-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeDODOBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DODO_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dodo-bnb',
            worker: worker_1.mapWorkers['pcs-dodo-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.0),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.dodo, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.dodo,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.dodo, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_SWINGBY_BNB = Object.assign(Object.assign({ key: 'pcs-swingby-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeSWINGBYBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SWINGBY_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-swingby-bnb',
            worker: worker_1.mapWorkers['pcs-swingby-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.swingby,
                tokenProfile_1.mapTokenProfiles.bnb,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.swingby,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.swingby, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_CWS_BNB = Object.assign(Object.assign({ key: 'pcs-cws-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakePCWSBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CWS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-cws-bnb',
            worker: worker_1.mapWorkers['pcs-cws-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cws, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.cws,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.cws, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BRY_BNB = Object.assign(Object.assign({ key: 'pcs-bry-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBRYBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BRY_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bry-bnb',
            worker: worker_1.mapWorkers['pcs-bry-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bry, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bry,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.bry, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BOR_BNB = Object.assign(Object.assign({ key: 'pcs-bor-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBORBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BOR_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bor-bnb',
            worker: worker_1.mapWorkers['pcs-bor-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bor,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.bor, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BELT_BNB = Object.assign(Object.assign({ key: 'pcs-belt-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBELTBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BELT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-belt-bnb',
            worker: worker_1.mapWorkers['pcs-belt-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.belt, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.belt,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.belt, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BMXX_BNB = Object.assign(Object.assign({ key: 'pcs-bmxx-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBMXXBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMXX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmxx-bnb',
            worker: worker_1.mapWorkers['pcs-bmxx-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bmxx, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bmxx,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.bmxx, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_ITAM_BNB = Object.assign(Object.assign({ key: 'pcs-itam-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeITAMWBNBPoolId, isWarn: true, tags: ['bnb'], isFeatured: false, isNew: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ITAM_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-itam-bnb',
            worker: worker_1.mapWorkers['pcs-itam-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.itam, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.itam,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.itam, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_CAKE_BNB = Object.assign(Object.assign({ key: 'pcs-cake-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeCAKEWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-bnb',
            worker: worker_1.mapWorkers['pcs-cake-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.cake,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BTCB_BNB = Object.assign(Object.assign({ key: 'pcs-btcb-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBTCBWBNBPoolId, isWarn: false, tags: ['bnb', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTCB_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-btcb-bnb',
            worker: worker_1.mapWorkers['pcs-btcb-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-bnb-btcb',
            worker: worker_1.mapWorkers['pcs-bnb-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_ETH_BNB = Object.assign(Object.assign({ key: 'pcs-eth-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeETHWBNBPoolId, isWarn: false, tags: ['bnb', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-bnb',
            worker: worker_1.mapWorkers['pcs-eth-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-bnb-eth',
            worker: worker_1.mapWorkers['pcs-bnb-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_DOT_BNB = Object.assign(Object.assign({ key: 'pcs-dot-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeDOTWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DOT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dot-bnb',
            worker: worker_1.mapWorkers['pcs-dot-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.dot, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.dot,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.dot, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_UNI_BNB = Object.assign(Object.assign({ key: 'pcs-uni-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUNIWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.UNI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-uni-bnb',
            worker: worker_1.mapWorkers['pcs-uni-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.uni, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.uni,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.uni, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_LINK_BNB = Object.assign(Object.assign({ key: 'pcs-link-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeLINKWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.LINK_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-link-bnb',
            worker: worker_1.mapWorkers['pcs-link-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.link, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.link,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.link, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_XVS_BNB = Object.assign(Object.assign({ key: 'pcs-xvs-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeXVSWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.XVS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-xvs-bnb',
            worker: worker_1.mapWorkers['pcs-xvs-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.xvs, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.xvs,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.xvs, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_YFI_BNB = Object.assign(Object.assign({ key: 'pcs-yfi-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeYFIWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.YFI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-yfi-bnb',
            worker: worker_1.mapWorkers['pcs-yfi-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.yfi,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.yfi, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_ODDZ_BNB = Object.assign(Object.assign({ key: 'pcs-oddz-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeODDZBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ODDZ_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-oddz-bnb',
            worker: worker_1.mapWorkers['pcs-oddz-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.oddz, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.oddz,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.oddz, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_ADA_BNB = Object.assign(Object.assign({ key: 'pcs-ada-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeADABNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ADA_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-ada-bnb',
            worker: worker_1.mapWorkers['pcs-ada-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.ada, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.ada,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.ada, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_TRX_BNB = Object.assign(Object.assign({ key: 'pcs-trx-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeTRXBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.TRX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-trx-bnb',
            worker: worker_1.mapWorkers['pcs-trx-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.trx, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.trx,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.trx, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BTT_BNB = Object.assign(Object.assign({ key: 'pcs-btt-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBTTBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-btt-bnb',
            worker: worker_1.mapWorkers['pcs-btt-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btt, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btt,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.btt, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_AXS_BNB = Object.assign(Object.assign({ key: 'pcs-axs-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeAXSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.AXS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-axs-bnb',
            worker: worker_1.mapWorkers['pcs-axs-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.axs, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.axs,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.axs, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_MBOX_BNB = Object.assign(Object.assign({ key: 'pcs-mbox-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeMBOXBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.MBOX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-mbox-bnb',
            worker: worker_1.mapWorkers['pcs-mbox-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.mbox, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.mbox,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.mbox, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_NAOS_BNB = Object.assign(Object.assign({ key: 'pcs-naos-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeNAOSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.NAOS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-naos-bnb',
            worker: worker_1.mapWorkers['pcs-naos-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.naos, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.naos,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.naos, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_DVI_BNB = Object.assign(Object.assign({ key: 'pcs-dvi-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeDVIBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DVI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dvi-bnb',
            worker: worker_1.mapWorkers['pcs-dvi-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.dvi, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.dvi,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.dvi, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_QBT_BNB = Object.assign(Object.assign({ key: 'pcs-qbt-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeQBTBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.QBT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-qbt-bnb',
            worker: worker_1.mapWorkers['pcs-qbt-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.qbt, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.qbt,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.qbt, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_BMON_BNB = Object.assign(Object.assign({ key: 'pcs-bmon-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBMONBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMON_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmon-bnb',
            worker: worker_1.mapWorkers['pcs-bmon-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bmon, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bmon,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.bmon, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_SPS_BNB = Object.assign(Object.assign({ key: 'pcs-sps-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeSPSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: true, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SPS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-sps-bnb',
            worker: worker_1.mapWorkers['pcs-sps-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.sps, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.sps,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.sps, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_ETERNAL_BNB = Object.assign(Object.assign({ key: 'pcs-eternal-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeETERNALBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETERNAL_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eternal-bnb',
            worker: worker_1.mapWorkers['pcs-eternal-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.eternal,
                tokenProfile_1.mapTokenProfiles.bnb,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eternal,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.eternal, tokenProfile_1.mapTokenProfiles.bnb],
    } });
const PCS_THG_BNB = Object.assign(Object.assign({ key: 'pcs-thg-bnb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeTHGBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: true, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.THG_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-thg-bnb',
            worker: worker_1.mapWorkers['pcs-thg-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.thg, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.thg,
        token1: tokenProfile_1.mapTokenProfiles.bnb,
        path: [tokenProfile_1.mapTokenProfiles.thg, tokenProfile_1.mapTokenProfiles.bnb],
    } });
// BUSD
const PCS_BTCB_BUSD = Object.assign(Object.assign({ key: 'pcs-btcb-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBTCBBUSDPoolId, isWarn: true, tags: ['busd', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTCB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-btcb-busd',
            worker: worker_1.mapWorkers['pcs-btcb-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-btcb',
            worker: worker_1.mapWorkers['pcs-busd-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btcb,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_USDT_BUSD = Object.assign(Object.assign({ key: 'pcs-usdt-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUSDTBUSDPoolId, isWarn: true, tags: ['busd', 'usdt', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdt-busd',
            worker: worker_1.mapWorkers['pcs-usdt-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(6),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-usdt',
            worker: worker_1.mapWorkers['pcs-busd-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(6),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.busd,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.busd, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const PCS_BNB_BUSD = Object.assign(Object.assign({ key: 'pcs-bnb-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeWBNBBUSDPoolId, isWarn: false, tags: ['busd', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-bnb-busd',
            worker: worker_1.mapWorkers['pcs-bnb-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-bnb',
            worker: worker_1.mapWorkers['pcs-busd-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bnb,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_VAI_BUSD = Object.assign(Object.assign({ key: 'pcs-vai-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeVAIBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.VAI_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-vai-busd',
            worker: worker_1.mapWorkers['pcs-vai-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.vai, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.vai,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.vai, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_USDC_BUSD = Object.assign(Object.assign({ key: 'pcs-usdc-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUSDCBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDC_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdc-busd',
            worker: worker_1.mapWorkers['pcs-usdc-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdc,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_DAI_BUSD = Object.assign(Object.assign({ key: 'pcs-dai-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeDAIBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.DAI_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-dai-busd',
            worker: worker_1.mapWorkers['pcs-dai-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.dai, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.dai,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.dai, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_UST_BUSD = Object.assign(Object.assign({ key: 'pcs-ust-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUSTBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.UST_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-ust-busd',
            worker: worker_1.mapWorkers['pcs-ust-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.ust, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.ust,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.ust, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_FORM_BUSD = Object.assign(Object.assign({ key: 'pcs-form-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeFORMBUSDPoolId, isWarn: true, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.FORM_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-form-busd',
            worker: worker_1.mapWorkers['pcs-form-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.form, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.form,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.form, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_TUSD_BUSD = Object.assign(Object.assign({ key: 'pcs-tusd-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeTUSDBUSDPoolId, isWarn: false, tags: ['busd', 'tusd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.TUSD_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-tusd-busd',
            worker: worker_1.mapWorkers['pcs-tusd-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-tusd',
            worker: worker_1.mapWorkers['pcs-busd-tusd'],
            vault: vault_1.mapVault.tusd,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.tusd,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_ORBS_BUSD = Object.assign(Object.assign({ key: 'pcs-orbs-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeORBSBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ORBS_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-orbs-busd',
            worker: worker_1.mapWorkers['pcs-orbs-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.orbs, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.orbs,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.orbs, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_TRX_BUSD = Object.assign(Object.assign({ key: 'pcs-trx-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeTRXBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.TRX_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-trx-busd',
            worker: worker_1.mapWorkers['pcs-trx-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.trx, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.trx,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.trx, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_BTT_BUSD = Object.assign(Object.assign({ key: 'pcs-btt-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBTTBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-btt-busd',
            worker: worker_1.mapWorkers['pcs-btt-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.btt,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.btt, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_PMON_BUSD = Object.assign(Object.assign({ key: 'pcs-pmon-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakePMONBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.PMON_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pmon-busd',
            worker: worker_1.mapWorkers['pcs-pmon-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.pmon, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.pmon,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.pmon, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_PHA_BUSD = Object.assign(Object.assign({ key: 'pcs-pha-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakePHABUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.PHA_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pha-busd',
            worker: worker_1.mapWorkers['pcs-pha-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.pha, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.pha,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.pha, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_POTS_BUSD = Object.assign(Object.assign({ key: 'pcs-pots-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakePOTSBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.POTS_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pots-busd',
            worker: worker_1.mapWorkers['pcs-pots-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.pots, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.pots,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.pots, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_BMON_BUSD = Object.assign(Object.assign({ key: 'pcs-bmon-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBMONBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMON_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmon-busd',
            worker: worker_1.mapWorkers['pcs-bmon-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bmon, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.bmon,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.bmon, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_HIGH_BUSD = Object.assign(Object.assign({ key: 'pcs-high-busd', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeHIGHBUSDPoolId, isWarn: false, tags: ['busd'], isNew: true, isFeatured: true, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.HIGH_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-high-busd',
            worker: worker_1.mapWorkers['pcs-high-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.high, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.high,
        token1: tokenProfile_1.mapTokenProfiles.busd,
        path: [tokenProfile_1.mapTokenProfiles.high, tokenProfile_1.mapTokenProfiles.busd],
    } });
const PCS_BETH_ETH = Object.assign(Object.assign({ key: 'pcs-beth-eth', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeBETHETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BETH_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-beth-eth',
            worker: worker_1.mapWorkers['pcs-beth-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.beth,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.beth, tokenProfile_1.mapTokenProfiles.eth],
    } });
const PCS_COMP_ETH = Object.assign(Object.assign({ key: 'pcs-comp-eth', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeCOMPETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.COMP_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-comp-eth',
            worker: worker_1.mapWorkers['pcs-comp-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.comp,
                tokenProfile_1.mapTokenProfiles.eth,
                tokenProfile_1.mapTokenProfiles.bnb,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.comp,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.comp, tokenProfile_1.mapTokenProfiles.eth],
    } });
const PCS_SUSHI_ETH = Object.assign(Object.assign({ key: 'pcs-sushi-eth', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeSUSHIETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SUSHI_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-sushi-eth',
            worker: worker_1.mapWorkers['pcs-sushi-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([
                tokenProfile_1.mapTokenProfiles.sushi,
                tokenProfile_1.mapTokenProfiles.eth,
                tokenProfile_1.mapTokenProfiles.bnb,
                tokenProfile_1.mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.sushi,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.sushi, tokenProfile_1.mapTokenProfiles.eth],
    } });
const PCS_CAKE_USDT = Object.assign(Object.assign({ key: 'pcs-cake-usdt', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeCAKEUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_USDT), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-usdt',
            worker: worker_1.mapWorkers['pcs-cake-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.cake,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const PCS_USDC_USDT = Object.assign(Object.assign({ key: 'pcs-usdc-usdt', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeUSDCUSDTPoolId, isWarn: false, tags: ['usdt', 'usdc', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDC_USDT), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdc-usdt',
            worker: worker_1.mapWorkers['pcs-usdc-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdt-usdc',
            worker: worker_1.mapWorkers['pcs-usdt-usdc'],
            vault: vault_1.mapVault.usdc,
            leverageInput: setOfLeverage_1.setOfLeverage(4),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdc,
        token1: tokenProfile_1.mapTokenProfiles.usdt,
        path: [tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.usdt],
    } });
const PCS_ETH_BTCB = Object.assign(Object.assign({ key: 'pcs-eth-btcb', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-btcb',
            worker: worker_1.mapWorkers['pcs-eth-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-btcb-eth',
            worker: worker_1.mapWorkers['pcs-btcb-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.eth,
        token1: tokenProfile_1.mapTokenProfiles.btcb,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.btcb],
    } });
const PCS_ETH_USDC = Object.assign(Object.assign({ key: 'pcs-eth-usdc', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeETHUSDCPoolId, isWarn: false, tags: ['eth', 'usdc'], isNew: true, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_USDC), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-usdc',
            worker: worker_1.mapWorkers['pcs-eth-usdc'],
            vault: vault_1.mapVault.usdc,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdc-eth',
            worker: worker_1.mapWorkers['pcs-usdc-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(3),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: tokenProfile_1.mapTokenProfiles.usdc,
        token1: tokenProfile_1.mapTokenProfiles.eth,
        path: [tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.usdc],
    } });
exports.CAKEMAXI = Object.assign(Object.assign({ key: 'pcs-cakemaxi', dex: entity_1.PancakeSwapDex, pId: pools_1.PancakeSyrupPoolId, isWarn: true, tags: ['eth', 'usdt', 'bnb', 'busd', 'btcb', 'tusd', 'usdc'], isNew: false, isFeatured: false, killBufferThreshold: entity_1.DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKEMAXI), { configs: onlyActiveWorker([
        {
            key: 'pcs-cakemaxi-eth',
            worker: worker_1.mapWorkers['pcs-cakemaxi-eth'],
            vault: vault_1.mapVault.eth,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.eth, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-usdt',
            worker: worker_1.mapWorkers['pcs-cakemaxi-usdt'],
            vault: vault_1.mapVault.usdt,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdt, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-bnb',
            worker: worker_1.mapWorkers['pcs-cakemaxi-bnb'],
            vault: vault_1.mapVault.bnb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.bnb, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-busd',
            worker: worker_1.mapWorkers['pcs-cakemaxi-busd'],
            vault: vault_1.mapVault.busd,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-btcb',
            worker: worker_1.mapWorkers['pcs-cakemaxi-btcb'],
            vault: vault_1.mapVault.btcb,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.btcb, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-tusd',
            worker: worker_1.mapWorkers['pcs-cakemaxi-tusd'],
            vault: vault_1.mapVault.tusd,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.tusd, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-usdc',
            worker: worker_1.mapWorkers['pcs-cakemaxi-usdc'],
            vault: vault_1.mapVault.usdc,
            leverageInput: setOfLeverage_1.setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.usdc, tokenProfile_1.mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: entity_1.createLPRoute([tokenProfile_1.mapTokenProfiles.cake, tokenProfile_1.mapTokenProfiles.busd]),
        },
    ]), singleAssetAddress: contracts_1.CAKEAddress, singleAssetPoolName: 'PCS Syrup' });
const farmingPools = [
    PSC_BUSD_ALPACA,
    WS_ALPACA_BNB,
    WS_ALPACA_USDT,
    exports.CAKEMAXI,
    PCS_ETH_USDC,
    PCS_HIGH_BUSD,
    PCS_THG_BNB,
    PCS_ETERNAL_BNB,
    PCS_SPS_BNB,
    PCS_ETH_BTCB,
    PCS_BMON_BNB,
    PCS_BMON_BUSD,
    PCS_POTS_BUSD,
    MS_BNB_BTCB,
    MS_ETH_BTCB,
    MS_BNB_BUSD,
    MS_BNB_USDT,
    MS_BNB_ETH,
    MS_BTCB_USDT,
    MS_ETH_USDT,
    MS_MDX_BNB,
    MS_MDX_BUSD,
    PCS_QBT_BNB,
    PCS_DVI_BNB,
    PCS_NAOS_BNB,
    PCS_MBOX_BNB,
    PCS_PHA_BUSD,
    WS_WUSD_BUSD,
    PCS_PMON_BUSD,
    PCS_TRX_BUSD,
    PCS_BTT_BUSD,
    WS_TUSD_USDT,
    PCS_AXS_BNB,
    PCS_TUSD_BUSD,
    PCS_ORBS_BUSD,
    PCS_FORM_BUSD,
    PCS_TRX_BNB,
    PCS_BTT_BNB,
    PCS_CAKE_USDT,
    PCS_USDC_USDT,
    WS_MATIC_USDT,
    PCS_ADA_BNB,
    WS_BTCB_BUSD,
    WS_ETH_USDT,
    PCS_ODDZ_BNB,
    WS_BETH_ETH,
    WS_BTCB_USDT,
    WS_WAULTX_BNB,
    WS_WEX_USDT,
    WS_WEX_BNB,
    WS_USDT_BUSD,
    WS_ETH_BTCB,
    WS_BNB_BUSD,
    PCS_CAKE_BNB,
    PCS_BTCB_BNB,
    PCS_ETH_BNB,
    PCS_DOT_BNB,
    PCS_UNI_BNB,
    PCS_LINK_BNB,
    PCS_XVS_BNB,
    PCS_DODO_BNB,
    PCS_BELT_BNB,
    PCS_BMXX_BNB,
    PCS_ITAM_BNB,
    PCS_SWINGBY_BNB,
    PCS_CWS_BNB,
    PCS_BRY_BNB,
    PCS_BNB_BUSD,
    WS_ETH_BUSD,
    PCS_CAKE_BUSD,
    PCS_BTCB_BUSD,
    PCS_USDT_BUSD,
    PCS_VAI_BUSD,
    PCS_USDC_BUSD,
    PCS_DAI_BUSD,
    PCS_UST_BUSD,
    PCS_USDT_BNB,
    PCS_COMP_ETH,
    PCS_SUSHI_ETH,
    MS_USDC_USDT,
    MS_DAI_USDT,
].map((config) => {
    return new entity_1.FarmingPoolConfig(config);
});
const zeroRewardPools = [PCS_BOR_BNB, PCS_BETH_ETH, PCS_YFI_BNB].map((config) => {
    return new entity_1.FarmingPoolConfig(config);
});
// filter out zero worker pool
exports.availableFarmingPools = [...farmingPools, ...zeroRewardPools].filter((o) => !!o.configs.length);
exports.openableFarmingPools = exports.availableFarmingPools.filter((o) => o.allowOpenPosition);
const getFarmingPoolByWorkerAddress = (address) => exports.availableFarmingPools.find((pool) => !!pool.configs.find((w) => address_1.compare(w.worker.address, address)));
exports.getFarmingPoolByWorkerAddress = getFarmingPoolByWorkerAddress;
const getFarmingPoolByKeyAndSlug = (poolKey, farmSlug) => exports.availableFarmingPools.find((pool) => pool.key === poolKey && pool.dex.slug === farmSlug);
exports.getFarmingPoolByKeyAndSlug = getFarmingPoolByKeyAndSlug;
const getFarmingConfigByWorkerAddress = (address) => exports.getFarmingPoolByWorkerAddress(address).configs.find((w) => address_1.compare(w.worker.address, address));
exports.getFarmingConfigByWorkerAddress = getFarmingConfigByWorkerAddress;
