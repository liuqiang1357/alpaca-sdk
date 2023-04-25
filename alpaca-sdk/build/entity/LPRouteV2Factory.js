import { ApeSwapFactoryAddress, MdexswapFactoryAddress, PancakeFactoryV2Address, UniswapV2FactoryAddress, WaultswapFactoryAddress, } from '../constants/contracts';
import { config } from '../constants';
function compare(address0, address1) {
    return address0.toLowerCase() === address1.toLowerCase();
}
export class ILPRouteV2Factory {
    static createILPRouteV2(path, factoryAddress) {
        const lpRouteV2 = {
            token0: path[0],
            token1: path[path.length - 1],
            path,
            factoryAddress: '',
            initCodePairHash: '',
        };
        const initCodePairHash = ILPRouteV2Factory.resolveInitCodePairHash(factoryAddress);
        if (!initCodePairHash) {
            return undefined;
        }
        lpRouteV2.factoryAddress = factoryAddress;
        lpRouteV2.initCodePairHash = initCodePairHash;
        return lpRouteV2;
    }
    static createILPFromPcsV1Route(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, UniswapV2FactoryAddress);
    }
    static createILPFromPcsV2Route(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, PancakeFactoryV2Address);
    }
    static createILPFromWsRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, WaultswapFactoryAddress);
    }
    static createILPFromAsRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, ApeSwapFactoryAddress);
    }
    static createILPFromMdxRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, MdexswapFactoryAddress);
    }
    static resolveInitCodePairHash(factoryAddress) {
        if (compare(factoryAddress, UniswapV2FactoryAddress)) {
            return config.LpInitCodePairHash.PancakeSwapV1PairHash;
        }
        else if (compare(factoryAddress, PancakeFactoryV2Address)) {
            return config.LpInitCodePairHash.PancakeSwapV2PairHash;
        }
        else if (compare(factoryAddress, WaultswapFactoryAddress)) {
            return config.LpInitCodePairHash.WaultSwapPairHash;
        }
        else if (compare(factoryAddress, MdexswapFactoryAddress)) {
            return config.LpInitCodePairHash.MdexSwapPairHash;
        }
        else if (compare(factoryAddress, ApeSwapFactoryAddress)) {
            return config.LpInitCodePairHash.ApeSwapPairHash;
        }
        return undefined;
    }
}
