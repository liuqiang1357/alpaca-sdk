"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncGetRouteAndTokensFromLpAddresses = exports.getPairInfoByLpAddress = exports.getPairInfo = exports.getMaxLeverage = exports.resolveReservePair = exports.getMasterChef = exports.getUserInfo = exports.getGenericMasterChefContract = exports.getPoolInfoContractCall = exports.getPoolInfo = exports.getFarmRewardPerBlockContractCall = exports.getFarmRewardPerBlock = void 0;
const constants_1 = require("@ethersproject/constants");
const PancakeMasterChef__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/PancakeMasterChef__factory");
const WexMaster__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/WexMaster__factory");
const BSCPool__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/BSCPool__factory");
const entity_1 = require("../entity");
const address_1 = require("./address");
const constants_2 = require("../constants");
const units_1 = require("@ethersproject/units");
const batchContractCaller_1 = require("../libs/batchContractCaller");
const tokenProfile_1 = require("../constants/tokenProfile");
const Multicall__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory");
const contracts_1 = require("../constants/contracts");
const ERC20__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory");
const UniswapV2Pair__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/UniswapV2Pair__factory");
const pancakeswap_sdk_1 = require("@alpaca-finance/pancakeswap-sdk");
function getFarmRewardPerBlock(masterChef, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: find better way
        if ('cakePerBlock' in masterChef) {
            return masterChef.cakePerBlock();
        }
        if ('wexPerBlock' in masterChef) {
            return masterChef.wexPerBlock();
        }
        if ('mdxPerBlock' in masterChef) {
            return masterChef.reward(blockNumber);
        }
        return constants_1.Zero;
    });
}
exports.getFarmRewardPerBlock = getFarmRewardPerBlock;
function getFarmRewardPerBlockContractCall(dex, blockNumber, provider) {
    switch (dex.key) {
        case entity_1.DexKey.PancakeSwap:
        case entity_1.DexKey.PancakeSwapV1:
            return {
                contract: PancakeMasterChef__factory_1.PancakeMasterChef__factory.connect(dex.masterChefAddress, provider),
                functionName: 'cakePerBlock',
            };
        case entity_1.DexKey.WaultSwap:
            return {
                contract: WexMaster__factory_1.WexMaster__factory.connect(dex.masterChefAddress, provider),
                functionName: 'wexPerBlock',
            };
        case entity_1.DexKey.MdexSwap:
            return {
                contract: BSCPool__factory_1.BSCPool__factory.connect(dex.masterChefAddress, provider),
                functionName: 'reward',
                params: [blockNumber],
            };
    }
}
exports.getFarmRewardPerBlockContractCall = getFarmRewardPerBlockContractCall;
function getPoolInfo(masterChef, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let poolInfo;
        if ('cakePerBlock' in masterChef) {
            const result = yield masterChef.poolInfo(poolId);
            poolInfo = {
                lpToken: result.lpToken,
                allocPoint: result.allocPoint,
                lastRewardBlock: result.lastRewardBlock,
                accRewardPerShare: result.accCakePerShare,
            };
        }
        else if ('wexPerBlock' in masterChef) {
            const result = yield masterChef.poolInfo(poolId);
            poolInfo = {
                lpToken: result.lpToken,
                allocPoint: result.allocPoint,
                lastRewardBlock: result.lastRewardBlock,
                accRewardPerShare: result.accWexPerShare,
            };
        }
        else if ('mdxPerBlock' in masterChef) {
            const result = yield masterChef.poolInfo(poolId);
            poolInfo = {
                lpToken: result.lpToken,
                allocPoint: result.allocPoint,
                lastRewardBlock: result.lastRewardBlock,
                accRewardPerShare: result.accMdxPerShare,
            };
        }
        return poolInfo;
    });
}
exports.getPoolInfo = getPoolInfo;
function getPoolInfoContractCall(dex, poolId, provider) {
    switch (dex.key) {
        case entity_1.DexKey.PancakeSwap:
        case entity_1.DexKey.PancakeSwapV1:
            return {
                contract: PancakeMasterChef__factory_1.PancakeMasterChef__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
        case entity_1.DexKey.WaultSwap:
            return {
                contract: WexMaster__factory_1.WexMaster__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
        case entity_1.DexKey.MdexSwap:
            return {
                contract: BSCPool__factory_1.BSCPool__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
    }
}
exports.getPoolInfoContractCall = getPoolInfoContractCall;
function getGenericMasterChefContract(dex, provider) {
    switch (dex.key) {
        case entity_1.DexKey.PancakeSwap:
        case entity_1.DexKey.PancakeSwapV1:
            return PancakeMasterChef__factory_1.PancakeMasterChef__factory.connect(dex.masterChefAddress, provider);
        case entity_1.DexKey.WaultSwap:
            return WexMaster__factory_1.WexMaster__factory.connect(dex.masterChefAddress, provider);
        case entity_1.DexKey.MdexSwap:
            return BSCPool__factory_1.BSCPool__factory.connect(dex.masterChefAddress, provider);
    }
}
exports.getGenericMasterChefContract = getGenericMasterChefContract;
function getUserInfo(masterChef, poolId, workerAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let userInfo;
        if ('cakePerBlock' in masterChef) {
            const result = yield masterChef.userInfo(poolId, workerAddress);
            userInfo = result;
        }
        else if ('wexPerBlock' in masterChef) {
            const result = yield masterChef.userInfo(poolId, workerAddress);
            userInfo = result;
        }
        else if ('mdxPerBlock' in masterChef) {
            const result = yield masterChef.userInfo(poolId, workerAddress);
            userInfo = result;
        }
        return userInfo;
    });
}
exports.getUserInfo = getUserInfo;
function getMasterChef(_dex, _provider) {
    switch (_dex.key) {
        case entity_1.PancakeSwapDex.key: {
            return PancakeMasterChef__factory_1.PancakeMasterChef__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        case entity_1.WaultSwapDex.key: {
            return WexMaster__factory_1.WexMaster__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        case entity_1.MdexSwapDex.key: {
            return BSCPool__factory_1.BSCPool__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        default:
            throw Error(`Cannot find masterChef for this dex ${_dex}`);
    }
}
exports.getMasterChef = getMasterChef;
function resolveReservePair(reserve0, reserve1, token0, token1, baseTokenAddress) {
    let totalBaseToken, totalFarmToken;
    let farmTokenAddress;
    if (address_1.compare(baseTokenAddress, token0)) {
        totalBaseToken = reserve0;
        totalFarmToken = reserve1;
        farmTokenAddress = token1;
    }
    else if (address_1.compare(baseTokenAddress, token1)) {
        totalBaseToken = reserve1;
        totalFarmToken = reserve0;
        farmTokenAddress = token0;
    }
    else {
        throw new Error(`stakePool.baseTokenAddress(${baseTokenAddress}) does not match with any side on LP, maybe misconfigured`);
    }
    return [totalBaseToken, totalFarmToken, baseTokenAddress, farmTokenAddress];
}
exports.resolveReservePair = resolveReservePair;
function getMaxLeverage(worker, workerConfig, farmingConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const [, workFactor, ,] = yield workerConfig.workers(worker.address);
        const maxLeverage = constants_2.MaxPercentage.mul(constants_1.WeiPerEther).div(constants_2.MaxPercentage.sub(workFactor));
        return farmingConfig.leverageInput
            .map((val) => units_1.parseEther(val.toString()))
            .reduce((accu, eachLev) => {
            return accu.lte(eachLev) && eachLev.lte(maxLeverage) ? eachLev : accu;
        }, constants_1.Zero);
    });
}
exports.getMaxLeverage = getMaxLeverage;
function getPairInfo(lpToken, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const multicall = Multicall__factory_1.Multicall__factory.connect(contracts_1.MulticallAddress, provider);
        const caller = new batchContractCaller_1.BatchContractCaller([
            {
                contract: lpToken,
                functionName: 'getReserves',
            },
            {
                contract: lpToken,
                functionName: 'token0',
            },
            {
                contract: lpToken,
                functionName: 'token1',
            },
            {
                contract: lpToken,
                functionName: 'totalSupply',
            },
        ]);
        try {
            const [[reserve0, reserve1], token0, token1, totalSupply] = yield caller.multicall(multicall, blockNumber);
            return {
                reserve0,
                reserve1,
                token0: tokenProfile_1.mapAddressTokenProfiles[token0.toLowerCase()],
                token1: tokenProfile_1.mapAddressTokenProfiles[token1.toLowerCase()],
                totalSupply,
            };
        }
        catch (e) {
            const err = e;
            throw new Error(`getPairInfo:: cannot get pairinfo with an error: ${err.message}`);
        }
    });
}
exports.getPairInfo = getPairInfo;
function getPairInfoByLpAddress(lpAddress, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const lpToken = UniswapV2Pair__factory_1.UniswapV2Pair__factory.connect(lpAddress, provider);
        return getPairInfo(lpToken, provider, blockNumber);
    });
}
exports.getPairInfoByLpAddress = getPairInfoByLpAddress;
/**
 * @export
 * @param {string} inputTokenAddress
 * @param {Array<string>} lpPairAddresses
 * @param {(Signer | Provider)} provider
 * @return {*}  {Promise<
 *   [
 *     Route,
 *     Token,
 *     Token,
 *     Array<{
 *       tokenIn: number
 *       tokenOut: number
 *     }>,
 *   ]
 * >}
 * @description input lpPairAddresses and inputTokenAddress, it will resolve the correct multi route path from tokenIn to tokenOut seamlessly
 * similar to getRouteAndTokens
 */
function asyncGetRouteAndTokensFromLpAddresses(inputTokenAddress, lpPairAddresses, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const pairs = [];
        const inputTokenERC20 = ERC20__factory_1.ERC20__factory.connect(inputTokenAddress, provider);
        const tokens = [new pancakeswap_sdk_1.Token(constants_2.ChainId, inputTokenAddress, yield inputTokenERC20.decimals())];
        const decimals = [];
        for (let i = 0; i < lpPairAddresses.length; i++) {
            const tokenIn = tokens[i];
            const lpPair = UniswapV2Pair__factory_1.UniswapV2Pair__factory.connect(lpPairAddresses[i], provider);
            const { reserve0, reserve1, token0, token1 } = yield getPairInfo(lpPair, provider, blockNumber);
            const [reserveTokenIn, reserveTokenOut, , tokenOutAddress] = resolveReservePair(reserve0, reserve1, token0.address, token1.address, tokenIn.address);
            const tokenOutERC20 = ERC20__factory_1.ERC20__factory.connect(tokenOutAddress, provider);
            const tokenOutDecimal = yield tokenOutERC20.decimals();
            pairs.push(new pancakeswap_sdk_1.Pair(new pancakeswap_sdk_1.TokenAmount(tokenIn, reserveTokenIn.toString()), new pancakeswap_sdk_1.TokenAmount(new pancakeswap_sdk_1.Token(constants_2.ChainId, tokenOutAddress, tokenOutDecimal), reserveTokenOut.toString())));
            tokens.push(address_1.compare(pairs[pairs.length - 1].token0.address, tokenIn.address)
                ? pairs[pairs.length - 1].token1
                : pairs[pairs.length - 1].token0);
            decimals.push({
                tokenIn: tokenIn.decimals,
                tokenOut: tokenOutDecimal,
            });
        }
        const outputToken = tokens[tokens.length - 1];
        const inputToken = tokens[0];
        const route = new pancakeswap_sdk_1.Route(pairs, new pancakeswap_sdk_1.Token(constants_2.ChainId, inputTokenAddress, inputToken.decimals));
        return [route, inputToken, outputToken, decimals];
    });
}
exports.asyncGetRouteAndTokensFromLpAddresses = asyncGetRouteAndTokensFromLpAddresses;
