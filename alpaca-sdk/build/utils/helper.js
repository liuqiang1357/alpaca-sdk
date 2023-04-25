var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WeiPerEther, Zero } from '@ethersproject/constants';
import { PancakeMasterChef__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/PancakeMasterChef__factory';
import { WexMaster__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/WexMaster__factory';
import { BSCPool__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/BSCPool__factory';
import { MdexSwapDex, PancakeSwapDex, WaultSwapDex, DexKey } from '../entity';
import { compare } from './address';
import { ChainId, MaxPercentage } from '../constants';
import { parseEther } from '@ethersproject/units';
import { BatchContractCaller } from '../libs/batchContractCaller';
import { mapAddressTokenProfiles } from '../constants/tokenProfile';
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { MulticallAddress } from '../constants/contracts';
import { ERC20__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory';
import { UniswapV2Pair__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/UniswapV2Pair__factory';
import { Route, Token, Pair, TokenAmount } from '@alpaca-finance/pancakeswap-sdk';
export function getFarmRewardPerBlock(masterChef, blockNumber) {
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
        return Zero;
    });
}
export function getFarmRewardPerBlockContractCall(dex, blockNumber, provider) {
    switch (dex.key) {
        case DexKey.PancakeSwap:
        case DexKey.PancakeSwapV1:
            return {
                contract: PancakeMasterChef__factory.connect(dex.masterChefAddress, provider),
                functionName: 'cakePerBlock',
            };
        case DexKey.WaultSwap:
            return {
                contract: WexMaster__factory.connect(dex.masterChefAddress, provider),
                functionName: 'wexPerBlock',
            };
        case DexKey.MdexSwap:
            return {
                contract: BSCPool__factory.connect(dex.masterChefAddress, provider),
                functionName: 'reward',
                params: [blockNumber],
            };
    }
}
export function getPoolInfo(masterChef, poolId) {
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
export function getPoolInfoContractCall(dex, poolId, provider) {
    switch (dex.key) {
        case DexKey.PancakeSwap:
        case DexKey.PancakeSwapV1:
            return {
                contract: PancakeMasterChef__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
        case DexKey.WaultSwap:
            return {
                contract: WexMaster__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
        case DexKey.MdexSwap:
            return {
                contract: BSCPool__factory.connect(dex.masterChefAddress, provider),
                functionName: 'poolInfo',
                params: [poolId],
            };
    }
}
export function getGenericMasterChefContract(dex, provider) {
    switch (dex.key) {
        case DexKey.PancakeSwap:
        case DexKey.PancakeSwapV1:
            return PancakeMasterChef__factory.connect(dex.masterChefAddress, provider);
        case DexKey.WaultSwap:
            return WexMaster__factory.connect(dex.masterChefAddress, provider);
        case DexKey.MdexSwap:
            return BSCPool__factory.connect(dex.masterChefAddress, provider);
    }
}
export function getUserInfo(masterChef, poolId, workerAddress) {
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
export function getMasterChef(_dex, _provider) {
    switch (_dex.key) {
        case PancakeSwapDex.key: {
            return PancakeMasterChef__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        case WaultSwapDex.key: {
            return WexMaster__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        case MdexSwapDex.key: {
            return BSCPool__factory.connect(_dex.masterChefAddress, _provider);
            break;
        }
        default:
            throw Error(`Cannot find masterChef for this dex ${_dex}`);
    }
}
export function resolveReservePair(reserve0, reserve1, token0, token1, baseTokenAddress) {
    let totalBaseToken, totalFarmToken;
    let farmTokenAddress;
    if (compare(baseTokenAddress, token0)) {
        totalBaseToken = reserve0;
        totalFarmToken = reserve1;
        farmTokenAddress = token1;
    }
    else if (compare(baseTokenAddress, token1)) {
        totalBaseToken = reserve1;
        totalFarmToken = reserve0;
        farmTokenAddress = token0;
    }
    else {
        throw new Error(`stakePool.baseTokenAddress(${baseTokenAddress}) does not match with any side on LP, maybe misconfigured`);
    }
    return [totalBaseToken, totalFarmToken, baseTokenAddress, farmTokenAddress];
}
export function getMaxLeverage(worker, workerConfig, farmingConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const [, workFactor, ,] = yield workerConfig.workers(worker.address);
        const maxLeverage = MaxPercentage.mul(WeiPerEther).div(MaxPercentage.sub(workFactor));
        return farmingConfig.leverageInput
            .map((val) => parseEther(val.toString()))
            .reduce((accu, eachLev) => {
            return accu.lte(eachLev) && eachLev.lte(maxLeverage) ? eachLev : accu;
        }, Zero);
    });
}
export function getPairInfo(lpToken, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const multicall = Multicall__factory.connect(MulticallAddress, provider);
        const caller = new BatchContractCaller([
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
                token0: mapAddressTokenProfiles[token0.toLowerCase()],
                token1: mapAddressTokenProfiles[token1.toLowerCase()],
                totalSupply,
            };
        }
        catch (e) {
            const err = e;
            throw new Error(`getPairInfo:: cannot get pairinfo with an error: ${err.message}`);
        }
    });
}
export function getPairInfoByLpAddress(lpAddress, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const lpToken = UniswapV2Pair__factory.connect(lpAddress, provider);
        return getPairInfo(lpToken, provider, blockNumber);
    });
}
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
export function asyncGetRouteAndTokensFromLpAddresses(inputTokenAddress, lpPairAddresses, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const pairs = [];
        const inputTokenERC20 = ERC20__factory.connect(inputTokenAddress, provider);
        const tokens = [new Token(ChainId, inputTokenAddress, yield inputTokenERC20.decimals())];
        const decimals = [];
        for (let i = 0; i < lpPairAddresses.length; i++) {
            const tokenIn = tokens[i];
            const lpPair = UniswapV2Pair__factory.connect(lpPairAddresses[i], provider);
            const { reserve0, reserve1, token0, token1 } = yield getPairInfo(lpPair, provider, blockNumber);
            const [reserveTokenIn, reserveTokenOut, , tokenOutAddress] = resolveReservePair(reserve0, reserve1, token0.address, token1.address, tokenIn.address);
            const tokenOutERC20 = ERC20__factory.connect(tokenOutAddress, provider);
            const tokenOutDecimal = yield tokenOutERC20.decimals();
            pairs.push(new Pair(new TokenAmount(tokenIn, reserveTokenIn.toString()), new TokenAmount(new Token(ChainId, tokenOutAddress, tokenOutDecimal), reserveTokenOut.toString())));
            tokens.push(compare(pairs[pairs.length - 1].token0.address, tokenIn.address)
                ? pairs[pairs.length - 1].token1
                : pairs[pairs.length - 1].token0);
            decimals.push({
                tokenIn: tokenIn.decimals,
                tokenOut: tokenOutDecimal,
            });
        }
        const outputToken = tokens[tokens.length - 1];
        const inputToken = tokens[0];
        const route = new Route(pairs, new Token(ChainId, inputTokenAddress, inputToken.decimals));
        return [route, inputToken, outputToken, decimals];
    });
}
