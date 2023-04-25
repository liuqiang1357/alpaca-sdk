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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZero = exports.getBUSDPrice = exports.getAlpacaPrice = exports.getNativeTokenPrice = exports.getTokenPrice = exports.cacheTokens = exports.getTokens = exports.getToken = void 0;
const units_1 = require("@ethersproject/units");
const constants_1 = require("../constants");
const localStorage_1 = require("../utils/localStorage");
const constants_2 = require("@ethersproject/constants");
const axios_1 = __importDefault(require("axios"));
const CACHE_TTL = 5 * 60000; // 5 minutes
function getToken(tokenSlug) {
    return __awaiter(this, void 0, void 0, function* () {
        const memoize = localStorage_1.getWithExpiry(tokenSlug);
        if (memoize)
            return memoize;
        let response;
        try {
            response = yield axios_1.default.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenSlug}`);
        }
        catch (error) {
            throw new Error(`Response from CoinGecko is not ok ${tokenSlug}: ${error.response.statusText}`);
        }
        const data = (yield response.data);
        if (!data[0]) {
            throw new Error(`Cannot find token(slug=${tokenSlug})`);
        }
        localStorage_1.setWithExpiry(tokenSlug, data[0], CACHE_TTL);
        return data[0];
    });
}
exports.getToken = getToken;
function getTokens(tokenSlugs) {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = tokenSlugs.join(',');
        let response;
        try {
            response = yield axios_1.default.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&per_page=250`);
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                if (error.request) {
                    throw new Error(`getTokens:: request CoinGecko error: ${ids} ${error.code} ${error.message}`);
                }
                if (error.response) {
                    throw new Error(`getTokens:: repsonse from CoinGecko error: ${ids} ${error.code}, ${error.response.statusText}, ${error.message}`);
                }
                // other error
                throw new Error(`getTokens:: unknown error from axios: ${ids} ${error.message}`);
            }
            throw new Error(`getTokens:: unknown error: ${error.message}`);
        }
        return response.data;
    });
}
exports.getTokens = getTokens;
function cacheTokens(tokenSlugs) {
    return __awaiter(this, void 0, void 0, function* () {
        const priceDatas = yield getTokens(tokenSlugs);
        for (const priceData of priceDatas) {
            localStorage_1.setWithExpiry(priceData.id, priceData, CACHE_TTL);
        }
    });
}
exports.cacheTokens = cacheTokens;
function getTokenPrice(tokenSlug) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getToken(tokenSlug);
        return units_1.parseEther(token.current_price.toString());
    });
}
exports.getTokenPrice = getTokenPrice;
function getNativeTokenPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice(constants_1.NativeTokenSlug);
    });
}
exports.getNativeTokenPrice = getNativeTokenPrice;
function getAlpacaPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice('alpaca-finance');
    });
}
exports.getAlpacaPrice = getAlpacaPrice;
function getBUSDPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice('binance-usd');
    });
}
exports.getBUSDPrice = getBUSDPrice;
function getZero() {
    return __awaiter(this, void 0, void 0, function* () {
        return constants_2.Zero;
    });
}
exports.getZero = getZero;
