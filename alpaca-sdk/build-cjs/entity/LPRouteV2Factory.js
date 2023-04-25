"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILPRouteV2Factory = void 0;
const contracts_1 = require("../constants/contracts");
const constants_1 = require("../constants");
function compare(address0, address1) {
    return address0.toLowerCase() === address1.toLowerCase();
}
class ILPRouteV2Factory {
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
        return ILPRouteV2Factory.createILPRouteV2(path, contracts_1.UniswapV2FactoryAddress);
    }
    static createILPFromPcsV2Route(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, contracts_1.PancakeFactoryV2Address);
    }
    static createILPFromWsRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, contracts_1.WaultswapFactoryAddress);
    }
    static createILPFromAsRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, contracts_1.ApeSwapFactoryAddress);
    }
    static createILPFromMdxRoute(path) {
        return ILPRouteV2Factory.createILPRouteV2(path, contracts_1.MdexswapFactoryAddress);
    }
    static resolveInitCodePairHash(factoryAddress) {
        if (compare(factoryAddress, contracts_1.UniswapV2FactoryAddress)) {
            return constants_1.config.LpInitCodePairHash.PancakeSwapV1PairHash;
        }
        else if (compare(factoryAddress, contracts_1.PancakeFactoryV2Address)) {
            return constants_1.config.LpInitCodePairHash.PancakeSwapV2PairHash;
        }
        else if (compare(factoryAddress, contracts_1.WaultswapFactoryAddress)) {
            return constants_1.config.LpInitCodePairHash.WaultSwapPairHash;
        }
        else if (compare(factoryAddress, contracts_1.MdexswapFactoryAddress)) {
            return constants_1.config.LpInitCodePairHash.MdexSwapPairHash;
        }
        else if (compare(factoryAddress, contracts_1.ApeSwapFactoryAddress)) {
            return constants_1.config.LpInitCodePairHash.ApeSwapPairHash;
        }
        return undefined;
    }
}
exports.ILPRouteV2Factory = ILPRouteV2Factory;
