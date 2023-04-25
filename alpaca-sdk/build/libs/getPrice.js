var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JSBI } from '@alpaca-finance/pancakeswap-sdk';
import { compare } from '../utils/address';
import { WeiPerEther, Zero } from '@ethersproject/constants';
import { parseEther } from '@ethersproject/units';
import { LPRouteV2, TokenType, TokenSymbol } from '../entity';
import { vaults } from '../constants/vault';
import { LendingPoolCalculatorFactory } from './calculators/LendingPoolCalculator';
import { asyncGetRouteAndTokensFromLpAddresses, getPairInfoByLpAddress, resolveReservePair } from '../utils/helper';
import { mapTokenProfiles, getLpTokenAddress } from '../constants/tokenProfile';
import { isMainnet } from '../utils/view';
export function getTokenPrice(token, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (token.type) {
            case TokenType.Common: {
                return getCommonTokenPrice(token, provider, blockNumber).catch(handleErrorOnTestnet);
            }
            case TokenType.InterestBearing: {
                return getIbTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            case TokenType.Debt: {
                return getDebtTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            case TokenType.LpPair: {
                return getLpTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            default: {
                throw new Error('getPrice::getTokenPrice: unknown token type');
            }
        }
    });
}
function handleErrorOnTestnet(e) {
    const err = e;
    // if testnet
    if (!isMainnet()) {
        // catch no lpToken, or no liquidity error
        if (err.message.includes('getPairInfo::')) {
            return WeiPerEther;
        }
        // unexpected error is thrown
        if (!err.message.includes('getPrice::')) {
            return WeiPerEther;
        }
    }
    throw err;
}
function getCommonTokenPrice(token, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== TokenType.Common) {
            throw new Error('getPrice::getCommonTokenPrice: given token profile is not Common token');
        }
        // exceptional case for BUSD
        if (token.symbol === TokenSymbol.BUSD) {
            return WeiPerEther; // 1 USD
        }
        if (!token.priceRoutes)
            return Zero;
        const lpRoute = new LPRouteV2(token.priceRoutes[0], mapTokenProfiles);
        const [route] = yield asyncGetRouteAndTokensFromLpAddresses(token.address, lpRoute.getLPPaths(), provider, blockNumber);
        // prevent division by zero
        if (JSBI.equal(route.midPrice.denominator, JSBI.BigInt(0))) {
            return Zero;
        }
        return parseEther(route.midPrice.toFixed(18));
    });
}
function getIbTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== TokenType.InterestBearing) {
            throw new Error('getPrice::getIbTokenPrice: given token profile is not InterestBearing token');
        }
        const _vault = vaults.find((v) => compare(v.address, token.address));
        if (!_vault) {
            throw new Error('getPrice::getIbTokenPrice: unknown vault address');
        }
        const [{ ibTokenPrice }] = yield new LendingPoolCalculatorFactory(provider).create(_vault);
        return ibTokenPrice;
    });
}
function getDebtTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== TokenType.Debt) {
            throw new Error('getPrice::getDebtTokenPrice: given token profile is not Debt token');
        }
        const _vault = vaults.find((v) => compare(v.debtToken.address, token.address));
        if (!_vault) {
            throw new Error('getPrice::getDebtTokenPrice: unknown debtToken address');
        }
        const [{ debtTokenPrice }] = yield new LendingPoolCalculatorFactory(provider).create(_vault);
        return debtTokenPrice;
    });
}
function getLpTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== TokenType.LpPair) {
            throw new Error('getPrice::getDebtTokenPrice: given token profile is not Lp token');
        }
        const lpAddress = getLpTokenAddress(token);
        if (!lpAddress)
            return Zero;
        const [{ reserve0, reserve1, token0, token1, totalSupply }, tokenAPrice] = yield Promise.all([
            getPairInfoByLpAddress(lpAddress, provider),
            getCommonTokenPrice(token.tokenA, provider),
        ]);
        const [reserveTokenA, reserveTokenB] = resolveReservePair(reserve0, reserve1, token0.address, token1.address, token.tokenA.address);
        // (reserveTokenA / totalSupply) * tokenAPrice * 2
        const lpTokenPrice = reserveTokenA.mul(tokenAPrice).mul(2).div(totalSupply);
        return lpTokenPrice;
    });
}
