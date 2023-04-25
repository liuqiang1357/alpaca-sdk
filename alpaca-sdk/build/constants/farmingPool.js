import { mapWorkers } from './worker';
import { PancakeCAKEWBNBPoolId, PancakeBTCBWBNBPoolId, PancakeETHWBNBPoolId, PancakeUSDTBUSDPoolId, PancakeWBNBBUSDPoolId, PancakeDOTWBNBPoolId, PancakeUNIWBNBPoolId, PancakeLINKWBNBPoolId, PancakeXVSWBNBPoolId, PancakeYFIWBNBPoolId, PancakeVAIBUSDPoolId, PancakeUSDCBUSDPoolId, PancakeDAIBUSDPoolId, PancakeUSTBUSDPoolId, PancakeBETHETHPoolId, PancakeCOMPETHPoolId, PancakeSUSHIETHPoolId, PancakeITAMWBNBPoolId, PancakeBUSDALPACAPoolId, PancakeBTCBBUSDPoolId, PancakeBMXXBNBPoolId, PancakeBELTBNBPoolId, PancakeBORBNBPoolId, PancakeBRYBNBPoolId, PancakePCWSBNBPoolId, PancakeSWINGBYBNBPoolId, PancakeDODOBNBPoolId, PancakeCAKEBUSDPoolId, PancakeUSDTBNBPoolId, WS_WEXWBNBPoolId, WS_ETHBUSDPoolId, WS_ALPACAUSDTPoolId, PancakeSyrupPoolId, WS_WEXUSDTPoolId, WS_ETHBTCBPoolId, WS_WBNBBUSDPoolId, WS_ALPACAWBNBPoolId, WS_USDTBUSDPoolId, WS_BETHETHPoolId, WS_WAULTXWBNBPoolId, WS_BTCBUSDTPoolId, PancakeODDZBNBPoolId, WS_ETHUSDTPoolId, WS_BTCBBUSDPoolId, PancakeADABNBPoolId, PancakeFORMBUSDPoolId, WS_MATICUSDTPoolId, PancakeCAKEUSDTPoolId, PancakeUSDCUSDTPoolId, PancakeTUSDBUSDPoolId, PancakeTRXBNBPoolId, PancakeBTTBNBPoolId, PancakeORBSBUSDPoolId, WS_TUSDUSDTPoolId, PancakeAXSBNBPoolId, PancakeTRXBUSDPoolId, PancakeBTTBUSDPoolId, PancakePMONBUSDPoolId, WS_WUSDBUSDPoolId, PancakePHABUSDPoolId, PancakeMBOXBNBPoolId, PancakeNAOSBNBPoolId, MS_BTCBUSDTPoolId, PancakeDVIBNBPoolId, PancakeQBTBNBPoolId, MS_ETHUSDTPoolId, MS_MDXWBNBPoolId, MS_MDXBUSDPoolId, MS_WBNBUSDTPoolId, MS_WBNBETHPoolId, MS_WBNBBUSDPoolId, PancakePOTSBUSDPoolId, MS_USDCUSDTPoolId, MS_DAIUSDTPoolId, MS_ETHBTCBPoolId, MS_WBNBBTCBPoolId, PancakeBMONBUSDPoolId, PancakeHIGHBUSDPoolId, PancakeBMONBNBPoolId, PancakeETHBTCBPoolId, PancakeSPSBNBPoolId, PancakeETERNALBNBPoolId, PancakeTHGBNBPoolId, PancakeETHUSDCPoolId, } from './pools';
import { mapTokenProfiles } from './tokenProfile';
import { compare } from '../utils/address';
import { mapVault } from './vault';
import { setOfLeverage } from './setOfLeverage';
import { MdexSwapDex, PancakeSwapDex, WaultSwapDex, DefaultKillBufferThreshold, StablePairKillBufferThreshold, createLPRoute, FarmingPoolConfig, } from '../entity';
import { appConfig } from './appConfig';
import { CAKEAddress } from './contracts';
const onlyActiveWorker = (configs) => configs.filter((o) => { var _a; return !!((_a = o.worker) === null || _a === void 0 ? void 0 : _a.active); });
const waultSwapFarmingPool = appConfig.ActiveFarms.WaultSwap.farmingPools;
const pancakeSwapFarmingPool = appConfig.ActiveFarms.PancakeSwap.farmingPools;
const mdexFarmingPool = appConfig.ActiveFarms.MdexSwap.farmingPools;
// Mdex
// MS USDT
const MS_BTCB_USDT = Object.assign(Object.assign({ key: 'ms-btcb-usdt', dex: MdexSwapDex, pId: MS_BTCBUSDTPoolId, isWarn: false, tags: ['btcb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.BTCB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-btcb-usdt',
            worker: mapWorkers['ms-btcb-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-btcb',
            worker: mapWorkers['ms-usdt-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.usdt],
    } });
const MS_ETH_USDT = Object.assign(Object.assign({ key: 'ms-eth-usdt', dex: MdexSwapDex, pId: MS_ETHUSDTPoolId, isWarn: false, tags: ['eth', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.ETH_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-eth-usdt',
            worker: mapWorkers['ms-eth-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-eth',
            worker: mapWorkers['ms-usdt-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.eth, mapTokenProfiles.usdt],
    } });
const MS_BNB_USDT = Object.assign(Object.assign({ key: 'ms-bnb-usdt', dex: MdexSwapDex, pId: MS_WBNBUSDTPoolId, isWarn: false, tags: ['bnb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.BNB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-usdt',
            worker: mapWorkers['ms-bnb-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-usdt-bnb',
            worker: mapWorkers['ms-usdt-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bnb,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.bnb, mapTokenProfiles.usdt],
    } });
const MS_USDC_USDT = Object.assign(Object.assign({ key: 'ms-usdc-usdt', dex: MdexSwapDex, pId: MS_USDCUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, mdexFarmingPool.USDC_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-usdc-usdt',
            worker: mapWorkers['ms-usdc-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdc,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.usdc, mapTokenProfiles.usdt],
    } });
const MS_DAI_USDT = Object.assign(Object.assign({ key: 'ms-dai-usdt', dex: MdexSwapDex, pId: MS_DAIUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, mdexFarmingPool.DAI_USDT), { configs: onlyActiveWorker([
        {
            key: 'ms-dai-usdt',
            worker: mapWorkers['ms-dai-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.dai, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.dai,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.dai, mapTokenProfiles.usdt],
    } });
// MS BNB
const MS_MDX_BNB = Object.assign(Object.assign({ key: 'ms-mdx-bnb', dex: MdexSwapDex, pId: MS_MDXWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.MDX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ms-mdx-bnb',
            worker: mapWorkers['ms-mdx-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.mdx, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.mdx,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.mdx, mapTokenProfiles.bnb],
    } });
// MS BUSD
const MS_MDX_BUSD = Object.assign(Object.assign({ key: 'ms-mdx-busd', dex: MdexSwapDex, pId: MS_MDXBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.MDX_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ms-mdx-busd',
            worker: mapWorkers['ms-mdx-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.mdx, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.mdx,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.mdx, mapTokenProfiles.busd],
    } });
const MS_BNB_BUSD = Object.assign(Object.assign({ key: 'ms-bnb-busd', dex: MdexSwapDex, pId: MS_WBNBBUSDPoolId, isWarn: false, tags: ['bnb', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-busd',
            worker: mapWorkers['ms-bnb-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-busd-bnb',
            worker: mapWorkers['ms-busd-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bnb,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.bnb, mapTokenProfiles.busd],
    } });
// MS ETH
const MS_BNB_ETH = Object.assign(Object.assign({ key: 'ms-bnb-eth', dex: MdexSwapDex, pId: MS_WBNBETHPoolId, isWarn: false, tags: ['eth', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.BNB_ETH), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-eth',
            worker: mapWorkers['ms-bnb-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-eth-bnb',
            worker: mapWorkers['ms-eth-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bnb,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.bnb, mapTokenProfiles.eth],
    } });
// MS BTCB
const MS_ETH_BTCB = Object.assign(Object.assign({ key: 'ms-eth-btcb', dex: MdexSwapDex, pId: MS_ETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ms-eth-btcb',
            worker: mapWorkers['ms-eth-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.btcb,
                mapTokenProfiles.eth,
                mapTokenProfiles.usdt,
                mapTokenProfiles.busd,
            ]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-btcb-eth',
            worker: mapWorkers['ms-btcb-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.btcb,
                mapTokenProfiles.eth,
                mapTokenProfiles.usdt,
                mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.eth],
    } });
const MS_BNB_BTCB = Object.assign(Object.assign({ key: 'ms-bnb-btcb', dex: MdexSwapDex, pId: MS_WBNBBTCBPoolId, isWarn: false, tags: ['bnb', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, mdexFarmingPool.BNB_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ms-bnb-btcb',
            worker: mapWorkers['ms-bnb-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'ms-btcb-bnb',
            worker: mapWorkers['ms-btcb-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.bnb],
    } });
//Wault
const WS_WEX_BNB = Object.assign(Object.assign({ key: 'ws-wex-bnb', dex: WaultSwapDex, pId: WS_WEXWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.WEX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-wex-bnb',
            worker: mapWorkers['ws-wex-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.wex, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.wex,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.wex, mapTokenProfiles.bnb],
    } });
const WS_ALPACA_BNB = Object.assign(Object.assign({ key: 'ws-alpaca-bnb', dex: WaultSwapDex, pId: WS_ALPACAWBNBPoolId, isWarn: false, tags: ['bnb', 'alpaca'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.ALPACA_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-alpaca-bnb',
            worker: mapWorkers['ws-alpaca-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.alpaca, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-bnb-alpaca',
            worker: mapWorkers['ws-bnb-alpaca'],
            vault: mapVault.alpaca,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.alpaca, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.alpaca,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.alpaca, mapTokenProfiles.bnb],
    } });
const WS_WAULTX_BNB = Object.assign(Object.assign({ key: 'ws-waultx-bnb', dex: WaultSwapDex, pId: WS_WAULTXWBNBPoolId, isWarn: false, tags: ['waultx', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.WAULTX_BNB), { configs: onlyActiveWorker([
        {
            key: 'ws-waultx-bnb',
            worker: mapWorkers['ws-waultx-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.waultx, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.waultx,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.waultx, mapTokenProfiles.bnb],
    } });
// BUSD
const WS_ETH_BUSD = Object.assign(Object.assign({ key: 'ws-eth-busd', dex: WaultSwapDex, pId: WS_ETHBUSDPoolId, isWarn: false, tags: ['busd', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-busd',
            worker: mapWorkers['ws-eth-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-eth',
            worker: mapWorkers['ws-busd-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.eth, mapTokenProfiles.busd],
    } });
const WS_BNB_BUSD = Object.assign(Object.assign({ key: 'ws-bnb-busd', dex: WaultSwapDex, pId: WS_WBNBBUSDPoolId, isWarn: false, tags: ['busd', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-bnb-busd',
            worker: mapWorkers['ws-bnb-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-bnb',
            worker: mapWorkers['ws-busd-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bnb,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.bnb, mapTokenProfiles.busd],
    } });
const WS_USDT_BUSD = Object.assign(Object.assign({ key: 'ws-usdt-busd', dex: WaultSwapDex, pId: WS_USDTBUSDPoolId, isWarn: false, tags: ['busd', 'usdt', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, waultSwapFarmingPool.USDT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-usdt-busd',
            worker: mapWorkers['ws-usdt-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-usdt',
            worker: mapWorkers['ws-busd-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdt,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.busd, mapTokenProfiles.usdt],
    } });
const WS_BTCB_BUSD = Object.assign(Object.assign({ key: 'ws-btcb-busd', dex: WaultSwapDex, pId: WS_BTCBBUSDPoolId, isWarn: false, tags: ['btcb', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.BUSD_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ws-btcb-busd',
            worker: mapWorkers['ws-btcb-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-busd-btcb',
            worker: mapWorkers['ws-busd-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.busd],
    } });
const WS_WUSD_BUSD = Object.assign(Object.assign({ key: 'ws-wusd-busd', dex: WaultSwapDex, pId: WS_WUSDBUSDPoolId, isWarn: false, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, waultSwapFarmingPool.WUSD_BUSD), { configs: onlyActiveWorker([
        {
            key: 'ws-wusd-busd',
            worker: mapWorkers['ws-wusd-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.wusd, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.wusd,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.wusd, mapTokenProfiles.busd],
    } });
// USDT
const WS_ALPACA_USDT = Object.assign(Object.assign({ key: 'ws-alpaca-usdt', dex: WaultSwapDex, pId: WS_ALPACAUSDTPoolId, isWarn: false, tags: ['usdt', 'alpaca'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.ALPACA_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-alpaca-usdt',
            worker: mapWorkers['ws-alpaca-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.alpaca,
                mapTokenProfiles.usdt,
                mapTokenProfiles.busd,
            ]),
        },
        {
            key: 'ws-usdt-alpaca',
            worker: mapWorkers['ws-usdt-alpaca'],
            vault: mapVault.alpaca,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.alpaca, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.alpaca,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.alpaca, mapTokenProfiles.usdt],
    } });
const WS_WEX_USDT = Object.assign(Object.assign({ key: 'ws-wex-usdt', dex: WaultSwapDex, pId: WS_WEXUSDTPoolId, isWarn: false, tags: ['usdt', 'wex'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.WEX_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-wex-usdt',
            worker: mapWorkers['ws-wex-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.wex, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.wex,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.wex, mapTokenProfiles.usdt],
    } });
const WS_BTCB_USDT = Object.assign(Object.assign({ key: 'ws-btcb-usdt', dex: WaultSwapDex, pId: WS_BTCBUSDTPoolId, isWarn: false, tags: ['btcb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.BTCB_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-btcb-usdt',
            worker: mapWorkers['ws-btcb-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-btcb',
            worker: mapWorkers['ws-usdt-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.usdt],
    } });
const WS_MATIC_USDT = Object.assign(Object.assign({ key: 'ws-matic-usdt', dex: WaultSwapDex, pId: WS_MATICUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.MATIC_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-matic-usdt',
            worker: mapWorkers['ws-matic-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.matic, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.matic,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.matic, mapTokenProfiles.usdt],
    } });
const WS_TUSD_USDT = Object.assign(Object.assign({ key: 'ws-tusd-usdt', dex: WaultSwapDex, pId: WS_TUSDUSDTPoolId, isWarn: false, tags: ['usdt', 'tusd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, waultSwapFarmingPool.TUSD_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-tusd-usdt',
            worker: mapWorkers['ws-tusd-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.tusd, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-tusd',
            worker: mapWorkers['ws-usdt-tusd'],
            vault: mapVault.tusd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.tusd, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.tusd,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.tusd, mapTokenProfiles.usdt],
    } });
// BTCB
const WS_ETH_BTCB = Object.assign(Object.assign({ key: 'ws-eth-btcb', dex: WaultSwapDex, pId: WS_ETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-btcb',
            worker: mapWorkers['ws-eth-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.eth, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-btcb-eth',
            worker: mapWorkers['ws-btcb-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.eth, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.btcb,
        path: [mapTokenProfiles.eth, mapTokenProfiles.btcb],
    } });
// ETH
const WS_BETH_ETH = Object.assign(Object.assign({ key: 'ws-beth-eth', dex: WaultSwapDex, pId: WS_BETHETHPoolId, isWarn: false, tags: ['beth', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, waultSwapFarmingPool.BETH_ETH), { configs: onlyActiveWorker([
        {
            key: 'ws-beth-eth',
            worker: mapWorkers['ws-beth-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.beth, mapTokenProfiles.eth, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.beth,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.beth, mapTokenProfiles.eth],
    } });
// USDT
const WS_ETH_USDT = Object.assign(Object.assign({ key: 'ws-eth-usdt', dex: WaultSwapDex, pId: WS_ETHUSDTPoolId, isWarn: false, tags: ['eth', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, waultSwapFarmingPool.ETH_USDT), { configs: onlyActiveWorker([
        {
            key: 'ws-eth-usdt',
            worker: mapWorkers['ws-eth-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'ws-usdt-eth',
            worker: mapWorkers['ws-usdt-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.eth, mapTokenProfiles.usdt],
    } });
//PanCake
const PSC_BUSD_ALPACA = Object.assign(Object.assign({ key: 'pcs-busd-alpaca', dex: PancakeSwapDex, pId: PancakeBUSDALPACAPoolId, isWarn: true, tags: ['alpaca', 'busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ALPACA_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-alpaca-busd',
            worker: mapWorkers['pcs-alpaca-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.alpaca, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-alpaca',
            worker: mapWorkers['pcs-busd-alpaca'],
            vault: mapVault.alpaca,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.alpaca, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.busd,
        token1: mapTokenProfiles.alpaca,
        path: [mapTokenProfiles.busd, mapTokenProfiles.alpaca],
    } });
const PCS_USDT_BNB = Object.assign(Object.assign({ key: 'pcs-usdt-bnb', dex: PancakeSwapDex, pId: PancakeUSDTBNBPoolId, isWarn: true, tags: ['bnb', 'usdt'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bnb-usdt',
            worker: mapWorkers['pcs-bnb-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdt-bnb',
            worker: mapWorkers['pcs-usdt-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdt,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.usdt, mapTokenProfiles.bnb],
    } });
const PCS_CAKE_BUSD = Object.assign(Object.assign({ key: 'pcs-cake-busd', dex: PancakeSwapDex, pId: PancakeCAKEBUSDPoolId, isWarn: true, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-busd',
            worker: mapWorkers['pcs-cake-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.cake,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.cake, mapTokenProfiles.busd],
    } });
const PCS_DODO_BNB = Object.assign(Object.assign({ key: 'pcs-dodo-bnb', dex: PancakeSwapDex, pId: PancakeDODOBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DODO_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dodo-bnb',
            worker: mapWorkers['pcs-dodo-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.0),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.dodo, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.dodo,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.dodo, mapTokenProfiles.bnb],
    } });
const PCS_SWINGBY_BNB = Object.assign(Object.assign({ key: 'pcs-swingby-bnb', dex: PancakeSwapDex, pId: PancakeSWINGBYBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SWINGBY_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-swingby-bnb',
            worker: mapWorkers['pcs-swingby-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.swingby,
                mapTokenProfiles.bnb,
                mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.swingby,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.swingby, mapTokenProfiles.bnb],
    } });
const PCS_CWS_BNB = Object.assign(Object.assign({ key: 'pcs-cws-bnb', dex: PancakeSwapDex, pId: PancakePCWSBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CWS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-cws-bnb',
            worker: mapWorkers['pcs-cws-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cws, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.cws,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.cws, mapTokenProfiles.bnb],
    } });
const PCS_BRY_BNB = Object.assign(Object.assign({ key: 'pcs-bry-bnb', dex: PancakeSwapDex, pId: PancakeBRYBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BRY_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bry-bnb',
            worker: mapWorkers['pcs-bry-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bry, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bry,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.bry, mapTokenProfiles.bnb],
    } });
const PCS_BOR_BNB = Object.assign(Object.assign({ key: 'pcs-bor-bnb', dex: PancakeSwapDex, pId: PancakeBORBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BOR_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bor-bnb',
            worker: mapWorkers['pcs-bor-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bor,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.bor, mapTokenProfiles.bnb],
    } });
const PCS_BELT_BNB = Object.assign(Object.assign({ key: 'pcs-belt-bnb', dex: PancakeSwapDex, pId: PancakeBELTBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BELT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-belt-bnb',
            worker: mapWorkers['pcs-belt-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.belt, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.belt,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.belt, mapTokenProfiles.bnb],
    } });
const PCS_BMXX_BNB = Object.assign(Object.assign({ key: 'pcs-bmxx-bnb', dex: PancakeSwapDex, pId: PancakeBMXXBNBPoolId, isWarn: true, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMXX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmxx-bnb',
            worker: mapWorkers['pcs-bmxx-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bmxx, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bmxx,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.bmxx, mapTokenProfiles.bnb],
    } });
const PCS_ITAM_BNB = Object.assign(Object.assign({ key: 'pcs-itam-bnb', dex: PancakeSwapDex, pId: PancakeITAMWBNBPoolId, isWarn: true, tags: ['bnb'], isFeatured: false, isNew: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ITAM_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-itam-bnb',
            worker: mapWorkers['pcs-itam-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.itam, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.itam,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.itam, mapTokenProfiles.bnb],
    } });
const PCS_CAKE_BNB = Object.assign(Object.assign({ key: 'pcs-cake-bnb', dex: PancakeSwapDex, pId: PancakeCAKEWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-bnb',
            worker: mapWorkers['pcs-cake-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.cake,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.cake, mapTokenProfiles.bnb],
    } });
const PCS_BTCB_BNB = Object.assign(Object.assign({ key: 'pcs-btcb-bnb', dex: PancakeSwapDex, pId: PancakeBTCBWBNBPoolId, isWarn: false, tags: ['bnb', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTCB_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-btcb-bnb',
            worker: mapWorkers['pcs-btcb-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-bnb-btcb',
            worker: mapWorkers['pcs-bnb-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.bnb],
    } });
const PCS_ETH_BNB = Object.assign(Object.assign({ key: 'pcs-eth-bnb', dex: PancakeSwapDex, pId: PancakeETHWBNBPoolId, isWarn: false, tags: ['bnb', 'eth'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-bnb',
            worker: mapWorkers['pcs-eth-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-bnb-eth',
            worker: mapWorkers['pcs-bnb-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.eth, mapTokenProfiles.bnb],
    } });
const PCS_DOT_BNB = Object.assign(Object.assign({ key: 'pcs-dot-bnb', dex: PancakeSwapDex, pId: PancakeDOTWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DOT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dot-bnb',
            worker: mapWorkers['pcs-dot-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.dot, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.dot,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.dot, mapTokenProfiles.bnb],
    } });
const PCS_UNI_BNB = Object.assign(Object.assign({ key: 'pcs-uni-bnb', dex: PancakeSwapDex, pId: PancakeUNIWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.UNI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-uni-bnb',
            worker: mapWorkers['pcs-uni-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.uni, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.uni,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.uni, mapTokenProfiles.bnb],
    } });
const PCS_LINK_BNB = Object.assign(Object.assign({ key: 'pcs-link-bnb', dex: PancakeSwapDex, pId: PancakeLINKWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.LINK_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-link-bnb',
            worker: mapWorkers['pcs-link-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.link, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.link,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.link, mapTokenProfiles.bnb],
    } });
const PCS_XVS_BNB = Object.assign(Object.assign({ key: 'pcs-xvs-bnb', dex: PancakeSwapDex, pId: PancakeXVSWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.XVS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-xvs-bnb',
            worker: mapWorkers['pcs-xvs-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.xvs, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.xvs,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.xvs, mapTokenProfiles.bnb],
    } });
const PCS_YFI_BNB = Object.assign(Object.assign({ key: 'pcs-yfi-bnb', dex: PancakeSwapDex, pId: PancakeYFIWBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.YFI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-yfi-bnb',
            worker: mapWorkers['pcs-yfi-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.yfi,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.yfi, mapTokenProfiles.bnb],
    } });
const PCS_ODDZ_BNB = Object.assign(Object.assign({ key: 'pcs-oddz-bnb', dex: PancakeSwapDex, pId: PancakeODDZBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ODDZ_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-oddz-bnb',
            worker: mapWorkers['pcs-oddz-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.oddz, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.oddz,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.oddz, mapTokenProfiles.bnb],
    } });
const PCS_ADA_BNB = Object.assign(Object.assign({ key: 'pcs-ada-bnb', dex: PancakeSwapDex, pId: PancakeADABNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ADA_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-ada-bnb',
            worker: mapWorkers['pcs-ada-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.ada, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.ada,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.ada, mapTokenProfiles.bnb],
    } });
const PCS_TRX_BNB = Object.assign(Object.assign({ key: 'pcs-trx-bnb', dex: PancakeSwapDex, pId: PancakeTRXBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.TRX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-trx-bnb',
            worker: mapWorkers['pcs-trx-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.trx, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.trx,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.trx, mapTokenProfiles.bnb],
    } });
const PCS_BTT_BNB = Object.assign(Object.assign({ key: 'pcs-btt-bnb', dex: PancakeSwapDex, pId: PancakeBTTBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-btt-bnb',
            worker: mapWorkers['pcs-btt-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btt, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btt,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.btt, mapTokenProfiles.bnb],
    } });
const PCS_AXS_BNB = Object.assign(Object.assign({ key: 'pcs-axs-bnb', dex: PancakeSwapDex, pId: PancakeAXSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.AXS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-axs-bnb',
            worker: mapWorkers['pcs-axs-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.axs, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.axs,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.axs, mapTokenProfiles.bnb],
    } });
const PCS_MBOX_BNB = Object.assign(Object.assign({ key: 'pcs-mbox-bnb', dex: PancakeSwapDex, pId: PancakeMBOXBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.MBOX_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-mbox-bnb',
            worker: mapWorkers['pcs-mbox-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.mbox, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.mbox,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.mbox, mapTokenProfiles.bnb],
    } });
const PCS_NAOS_BNB = Object.assign(Object.assign({ key: 'pcs-naos-bnb', dex: PancakeSwapDex, pId: PancakeNAOSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.NAOS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-naos-bnb',
            worker: mapWorkers['pcs-naos-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.naos, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.naos,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.naos, mapTokenProfiles.bnb],
    } });
const PCS_DVI_BNB = Object.assign(Object.assign({ key: 'pcs-dvi-bnb', dex: PancakeSwapDex, pId: PancakeDVIBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.DVI_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-dvi-bnb',
            worker: mapWorkers['pcs-dvi-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.dvi, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.dvi,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.dvi, mapTokenProfiles.bnb],
    } });
const PCS_QBT_BNB = Object.assign(Object.assign({ key: 'pcs-qbt-bnb', dex: PancakeSwapDex, pId: PancakeQBTBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.QBT_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-qbt-bnb',
            worker: mapWorkers['pcs-qbt-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.qbt, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.qbt,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.qbt, mapTokenProfiles.bnb],
    } });
const PCS_BMON_BNB = Object.assign(Object.assign({ key: 'pcs-bmon-bnb', dex: PancakeSwapDex, pId: PancakeBMONBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMON_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmon-bnb',
            worker: mapWorkers['pcs-bmon-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bmon, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bmon,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.bmon, mapTokenProfiles.bnb],
    } });
const PCS_SPS_BNB = Object.assign(Object.assign({ key: 'pcs-sps-bnb', dex: PancakeSwapDex, pId: PancakeSPSBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: true, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SPS_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-sps-bnb',
            worker: mapWorkers['pcs-sps-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.sps, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.sps,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.sps, mapTokenProfiles.bnb],
    } });
const PCS_ETERNAL_BNB = Object.assign(Object.assign({ key: 'pcs-eternal-bnb', dex: PancakeSwapDex, pId: PancakeETERNALBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETERNAL_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eternal-bnb',
            worker: mapWorkers['pcs-eternal-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.eternal,
                mapTokenProfiles.bnb,
                mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eternal,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.eternal, mapTokenProfiles.bnb],
    } });
const PCS_THG_BNB = Object.assign(Object.assign({ key: 'pcs-thg-bnb', dex: PancakeSwapDex, pId: PancakeTHGBNBPoolId, isWarn: false, tags: ['bnb'], isNew: false, isFeatured: true, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.THG_BNB), { configs: onlyActiveWorker([
        {
            key: 'pcs-thg-bnb',
            worker: mapWorkers['pcs-thg-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.thg, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.thg,
        token1: mapTokenProfiles.bnb,
        path: [mapTokenProfiles.thg, mapTokenProfiles.bnb],
    } });
// BUSD
const PCS_BTCB_BUSD = Object.assign(Object.assign({ key: 'pcs-btcb-busd', dex: PancakeSwapDex, pId: PancakeBTCBBUSDPoolId, isWarn: true, tags: ['busd', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTCB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-btcb-busd',
            worker: mapWorkers['pcs-btcb-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-btcb',
            worker: mapWorkers['pcs-busd-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btcb,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.btcb, mapTokenProfiles.busd],
    } });
const PCS_USDT_BUSD = Object.assign(Object.assign({ key: 'pcs-usdt-busd', dex: PancakeSwapDex, pId: PancakeUSDTBUSDPoolId, isWarn: true, tags: ['busd', 'usdt', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdt-busd',
            worker: mapWorkers['pcs-usdt-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(6),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-usdt',
            worker: mapWorkers['pcs-busd-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(6),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.busd,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.busd, mapTokenProfiles.usdt],
    } });
const PCS_BNB_BUSD = Object.assign(Object.assign({ key: 'pcs-bnb-busd', dex: PancakeSwapDex, pId: PancakeWBNBBUSDPoolId, isWarn: false, tags: ['busd', 'bnb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BNB_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-bnb-busd',
            worker: mapWorkers['pcs-bnb-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-bnb',
            worker: mapWorkers['pcs-busd-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bnb,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.bnb, mapTokenProfiles.busd],
    } });
const PCS_VAI_BUSD = Object.assign(Object.assign({ key: 'pcs-vai-busd', dex: PancakeSwapDex, pId: PancakeVAIBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.VAI_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-vai-busd',
            worker: mapWorkers['pcs-vai-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.vai, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.vai,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.vai, mapTokenProfiles.busd],
    } });
const PCS_USDC_BUSD = Object.assign(Object.assign({ key: 'pcs-usdc-busd', dex: PancakeSwapDex, pId: PancakeUSDCBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDC_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdc-busd',
            worker: mapWorkers['pcs-usdc-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdc,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.usdc, mapTokenProfiles.busd],
    } });
const PCS_DAI_BUSD = Object.assign(Object.assign({ key: 'pcs-dai-busd', dex: PancakeSwapDex, pId: PancakeDAIBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.DAI_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-dai-busd',
            worker: mapWorkers['pcs-dai-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.dai, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.dai,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.dai, mapTokenProfiles.busd],
    } });
const PCS_UST_BUSD = Object.assign(Object.assign({ key: 'pcs-ust-busd', dex: PancakeSwapDex, pId: PancakeUSTBUSDPoolId, isWarn: true, tags: ['busd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.UST_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-ust-busd',
            worker: mapWorkers['pcs-ust-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.ust, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.ust,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.ust, mapTokenProfiles.busd],
    } });
const PCS_FORM_BUSD = Object.assign(Object.assign({ key: 'pcs-form-busd', dex: PancakeSwapDex, pId: PancakeFORMBUSDPoolId, isWarn: true, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.FORM_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-form-busd',
            worker: mapWorkers['pcs-form-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(1.75),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.form, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.form,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.form, mapTokenProfiles.busd],
    } });
const PCS_TUSD_BUSD = Object.assign(Object.assign({ key: 'pcs-tusd-busd', dex: PancakeSwapDex, pId: PancakeTUSDBUSDPoolId, isWarn: false, tags: ['busd', 'tusd', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.TUSD_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-tusd-busd',
            worker: mapWorkers['pcs-tusd-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.tusd, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-busd-tusd',
            worker: mapWorkers['pcs-busd-tusd'],
            vault: mapVault.tusd,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.tusd, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.tusd,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.tusd, mapTokenProfiles.busd],
    } });
const PCS_ORBS_BUSD = Object.assign(Object.assign({ key: 'pcs-orbs-busd', dex: PancakeSwapDex, pId: PancakeORBSBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ORBS_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-orbs-busd',
            worker: mapWorkers['pcs-orbs-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.orbs, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.orbs,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.orbs, mapTokenProfiles.busd],
    } });
const PCS_TRX_BUSD = Object.assign(Object.assign({ key: 'pcs-trx-busd', dex: PancakeSwapDex, pId: PancakeTRXBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.TRX_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-trx-busd',
            worker: mapWorkers['pcs-trx-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.trx, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.trx,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.trx, mapTokenProfiles.busd],
    } });
const PCS_BTT_BUSD = Object.assign(Object.assign({ key: 'pcs-btt-busd', dex: PancakeSwapDex, pId: PancakeBTTBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BTT_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-btt-busd',
            worker: mapWorkers['pcs-btt-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.btt,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.btt, mapTokenProfiles.busd],
    } });
const PCS_PMON_BUSD = Object.assign(Object.assign({ key: 'pcs-pmon-busd', dex: PancakeSwapDex, pId: PancakePMONBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.PMON_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pmon-busd',
            worker: mapWorkers['pcs-pmon-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.pmon, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.pmon,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.pmon, mapTokenProfiles.busd],
    } });
const PCS_PHA_BUSD = Object.assign(Object.assign({ key: 'pcs-pha-busd', dex: PancakeSwapDex, pId: PancakePHABUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.PHA_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pha-busd',
            worker: mapWorkers['pcs-pha-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.pha, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.pha,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.pha, mapTokenProfiles.busd],
    } });
const PCS_POTS_BUSD = Object.assign(Object.assign({ key: 'pcs-pots-busd', dex: PancakeSwapDex, pId: PancakePOTSBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.POTS_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-pots-busd',
            worker: mapWorkers['pcs-pots-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.pots, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.pots,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.pots, mapTokenProfiles.busd],
    } });
const PCS_BMON_BUSD = Object.assign(Object.assign({ key: 'pcs-bmon-busd', dex: PancakeSwapDex, pId: PancakeBMONBUSDPoolId, isWarn: false, tags: ['busd'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BMON_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-bmon-busd',
            worker: mapWorkers['pcs-bmon-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bmon, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.bmon,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.bmon, mapTokenProfiles.busd],
    } });
const PCS_HIGH_BUSD = Object.assign(Object.assign({ key: 'pcs-high-busd', dex: PancakeSwapDex, pId: PancakeHIGHBUSDPoolId, isWarn: false, tags: ['busd'], isNew: true, isFeatured: true, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.HIGH_BUSD), { configs: onlyActiveWorker([
        {
            key: 'pcs-high-busd',
            worker: mapWorkers['pcs-high-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.high, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.high,
        token1: mapTokenProfiles.busd,
        path: [mapTokenProfiles.high, mapTokenProfiles.busd],
    } });
const PCS_BETH_ETH = Object.assign(Object.assign({ key: 'pcs-beth-eth', dex: PancakeSwapDex, pId: PancakeBETHETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.BETH_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-beth-eth',
            worker: mapWorkers['pcs-beth-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: undefined,
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.beth,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.beth, mapTokenProfiles.eth],
    } });
const PCS_COMP_ETH = Object.assign(Object.assign({ key: 'pcs-comp-eth', dex: PancakeSwapDex, pId: PancakeCOMPETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.COMP_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-comp-eth',
            worker: mapWorkers['pcs-comp-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.comp,
                mapTokenProfiles.eth,
                mapTokenProfiles.bnb,
                mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.comp,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.comp, mapTokenProfiles.eth],
    } });
const PCS_SUSHI_ETH = Object.assign(Object.assign({ key: 'pcs-sushi-eth', dex: PancakeSwapDex, pId: PancakeSUSHIETHPoolId, isWarn: true, tags: ['eth'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.SUSHI_ETH), { configs: onlyActiveWorker([
        {
            key: 'pcs-sushi-eth',
            worker: mapWorkers['pcs-sushi-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([
                mapTokenProfiles.sushi,
                mapTokenProfiles.eth,
                mapTokenProfiles.bnb,
                mapTokenProfiles.busd,
            ]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.sushi,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.sushi, mapTokenProfiles.eth],
    } });
const PCS_CAKE_USDT = Object.assign(Object.assign({ key: 'pcs-cake-usdt', dex: PancakeSwapDex, pId: PancakeCAKEUSDTPoolId, isWarn: false, tags: ['usdt'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKE_USDT), { configs: onlyActiveWorker([
        {
            key: 'pcs-cake-usdt',
            worker: mapWorkers['pcs-cake-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.cake,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.cake, mapTokenProfiles.usdt],
    } });
const PCS_USDC_USDT = Object.assign(Object.assign({ key: 'pcs-usdc-usdt', dex: PancakeSwapDex, pId: PancakeUSDCUSDTPoolId, isWarn: false, tags: ['usdt', 'usdc', 'stable'], isNew: false, isFeatured: false, killBufferThreshold: StablePairKillBufferThreshold }, pancakeSwapFarmingPool.USDC_USDT), { configs: onlyActiveWorker([
        {
            key: 'pcs-usdc-usdt',
            worker: mapWorkers['pcs-usdc-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdt-usdc',
            worker: mapWorkers['pcs-usdt-usdc'],
            vault: mapVault.usdc,
            leverageInput: setOfLeverage(4),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdc,
        token1: mapTokenProfiles.usdt,
        path: [mapTokenProfiles.usdc, mapTokenProfiles.usdt],
    } });
const PCS_ETH_BTCB = Object.assign(Object.assign({ key: 'pcs-eth-btcb', dex: PancakeSwapDex, pId: PancakeETHBTCBPoolId, isWarn: false, tags: ['eth', 'btcb'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_BTCB), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-btcb',
            worker: mapWorkers['pcs-eth-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.btcb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-btcb-eth',
            worker: mapWorkers['pcs-btcb-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.btcb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.eth,
        token1: mapTokenProfiles.btcb,
        path: [mapTokenProfiles.eth, mapTokenProfiles.btcb],
    } });
const PCS_ETH_USDC = Object.assign(Object.assign({ key: 'pcs-eth-usdc', dex: PancakeSwapDex, pId: PancakeETHUSDCPoolId, isWarn: false, tags: ['eth', 'usdc'], isNew: true, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.ETH_USDC), { configs: onlyActiveWorker([
        {
            key: 'pcs-eth-usdc',
            worker: mapWorkers['pcs-eth-usdc'],
            vault: mapVault.usdc,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdc, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-usdc-eth',
            worker: mapWorkers['pcs-usdc-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(3),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.usdc, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.busd]),
        },
    ]), lpRoute: {
        token0: mapTokenProfiles.usdc,
        token1: mapTokenProfiles.eth,
        path: [mapTokenProfiles.eth, mapTokenProfiles.usdc],
    } });
export const CAKEMAXI = Object.assign(Object.assign({ key: 'pcs-cakemaxi', dex: PancakeSwapDex, pId: PancakeSyrupPoolId, isWarn: true, tags: ['eth', 'usdt', 'bnb', 'busd', 'btcb', 'tusd', 'usdc'], isNew: false, isFeatured: false, killBufferThreshold: DefaultKillBufferThreshold }, pancakeSwapFarmingPool.CAKEMAXI), { configs: onlyActiveWorker([
        {
            key: 'pcs-cakemaxi-eth',
            worker: mapWorkers['pcs-cakemaxi-eth'],
            vault: mapVault.eth,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.eth, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-usdt',
            worker: mapWorkers['pcs-cakemaxi-usdt'],
            vault: mapVault.usdt,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdt, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-bnb',
            worker: mapWorkers['pcs-cakemaxi-bnb'],
            vault: mapVault.bnb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.bnb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.bnb, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-busd',
            worker: mapWorkers['pcs-cakemaxi-busd'],
            vault: mapVault.busd,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: undefined,
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-btcb',
            worker: mapWorkers['pcs-cakemaxi-btcb'],
            vault: mapVault.btcb,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.btcb, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-tusd',
            worker: mapWorkers['pcs-cakemaxi-tusd'],
            vault: mapVault.tusd,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.tusd, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
        {
            key: 'pcs-cakemaxi-usdc',
            worker: mapWorkers['pcs-cakemaxi-usdc'],
            vault: mapVault.usdc,
            leverageInput: setOfLeverage(2.5),
            baseTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.usdc, mapTokenProfiles.busd]),
            farmingTokenBUSDPriceRoute: createLPRoute([mapTokenProfiles.cake, mapTokenProfiles.busd]),
        },
    ]), singleAssetAddress: CAKEAddress, singleAssetPoolName: 'PCS Syrup' });
const farmingPools = [
    PSC_BUSD_ALPACA,
    WS_ALPACA_BNB,
    WS_ALPACA_USDT,
    CAKEMAXI,
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
    return new FarmingPoolConfig(config);
});
const zeroRewardPools = [PCS_BOR_BNB, PCS_BETH_ETH, PCS_YFI_BNB].map((config) => {
    return new FarmingPoolConfig(config);
});
// filter out zero worker pool
export const availableFarmingPools = [...farmingPools, ...zeroRewardPools].filter((o) => !!o.configs.length);
export const openableFarmingPools = availableFarmingPools.filter((o) => o.allowOpenPosition);
export const getFarmingPoolByWorkerAddress = (address) => availableFarmingPools.find((pool) => !!pool.configs.find((w) => compare(w.worker.address, address)));
export const getFarmingPoolByKeyAndSlug = (poolKey, farmSlug) => availableFarmingPools.find((pool) => pool.key === poolKey && pool.dex.slug === farmSlug);
export const getFarmingConfigByWorkerAddress = (address) => getFarmingPoolByWorkerAddress(address).configs.find((w) => compare(w.worker.address, address));
