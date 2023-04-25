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
exports.getTokenPrice = void 0;
const pancakeswap_sdk_1 = require("@alpaca-finance/pancakeswap-sdk");
const address_1 = require("../utils/address");
const constants_1 = require("@ethersproject/constants");
const units_1 = require("@ethersproject/units");
const entity_1 = require("../entity");
const vault_1 = require("../constants/vault");
const LendingPoolCalculator_1 = require("./calculators/LendingPoolCalculator");
const helper_1 = require("../utils/helper");
const tokenProfile_1 = require("../constants/tokenProfile");
const view_1 = require("../utils/view");
function getTokenPrice(token, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (token.type) {
            case entity_1.TokenType.Common: {
                return getCommonTokenPrice(token, provider, blockNumber).catch(handleErrorOnTestnet);
            }
            case entity_1.TokenType.InterestBearing: {
                return getIbTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            case entity_1.TokenType.Debt: {
                return getDebtTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            case entity_1.TokenType.LpPair: {
                return getLpTokenPrice(token, provider).catch(handleErrorOnTestnet);
            }
            default: {
                throw new Error('getPrice::getTokenPrice: unknown token type');
            }
        }
    });
}
exports.getTokenPrice = getTokenPrice;
function handleErrorOnTestnet(e) {
    const err = e;
    // if testnet
    if (!view_1.isMainnet()) {
        // catch no lpToken, or no liquidity error
        if (err.message.includes('getPairInfo::')) {
            return constants_1.WeiPerEther;
        }
        // unexpected error is thrown
        if (!err.message.includes('getPrice::')) {
            return constants_1.WeiPerEther;
        }
    }
    throw err;
}
function getCommonTokenPrice(token, provider, blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== entity_1.TokenType.Common) {
            throw new Error('getPrice::getCommonTokenPrice: given token profile is not Common token');
        }
        // exceptional case for BUSD
        if (token.symbol === entity_1.TokenSymbol.BUSD) {
            return constants_1.WeiPerEther; // 1 USD
        }
        if (!token.priceRoutes)
            return constants_1.Zero;
        const lpRoute = new entity_1.LPRouteV2(token.priceRoutes[0], tokenProfile_1.mapTokenProfiles);
        const [route] = yield helper_1.asyncGetRouteAndTokensFromLpAddresses(token.address, lpRoute.getLPPaths(), provider, blockNumber);
        // prevent division by zero
        if (pancakeswap_sdk_1.JSBI.equal(route.midPrice.denominator, pancakeswap_sdk_1.JSBI.BigInt(0))) {
            return constants_1.Zero;
        }
        return units_1.parseEther(route.midPrice.toFixed(18));
    });
}
function getIbTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== entity_1.TokenType.InterestBearing) {
            throw new Error('getPrice::getIbTokenPrice: given token profile is not InterestBearing token');
        }
        const _vault = vault_1.vaults.find((v) => address_1.compare(v.address, token.address));
        if (!_vault) {
            throw new Error('getPrice::getIbTokenPrice: unknown vault address');
        }
        const [{ ibTokenPrice }] = yield new LendingPoolCalculator_1.LendingPoolCalculatorFactory(provider).create(_vault);
        return ibTokenPrice;
    });
}
function getDebtTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== entity_1.TokenType.Debt) {
            throw new Error('getPrice::getDebtTokenPrice: given token profile is not Debt token');
        }
        const _vault = vault_1.vaults.find((v) => address_1.compare(v.debtToken.address, token.address));
        if (!_vault) {
            throw new Error('getPrice::getDebtTokenPrice: unknown debtToken address');
        }
        const [{ debtTokenPrice }] = yield new LendingPoolCalculator_1.LendingPoolCalculatorFactory(provider).create(_vault);
        return debtTokenPrice;
    });
}
function getLpTokenPrice(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (token.type !== entity_1.TokenType.LpPair) {
            throw new Error('getPrice::getDebtTokenPrice: given token profile is not Lp token');
        }
        const lpAddress = tokenProfile_1.getLpTokenAddress(token);
        if (!lpAddress)
            return constants_1.Zero;
        const [{ reserve0, reserve1, token0, token1, totalSupply }, tokenAPrice] = yield Promise.all([
            helper_1.getPairInfoByLpAddress(lpAddress, provider),
            getCommonTokenPrice(token.tokenA, provider),
        ]);
        const [reserveTokenA, reserveTokenB] = helper_1.resolveReservePair(reserve0, reserve1, token0.address, token1.address, token.tokenA.address);
        // (reserveTokenA / totalSupply) * tokenAPrice * 2
        const lpTokenPrice = reserveTokenA.mul(tokenAPrice).mul(2).div(totalSupply);
        return lpTokenPrice;
    });
}
