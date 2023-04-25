var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { parseEther } from '@ethersproject/units';
import { NativeTokenSlug } from '../constants';
import { setWithExpiry, getWithExpiry } from '../utils/localStorage';
import { Zero } from '@ethersproject/constants';
import axios from 'axios';
const CACHE_TTL = 5 * 60000; // 5 minutes
export function getToken(tokenSlug) {
    return __awaiter(this, void 0, void 0, function* () {
        const memoize = getWithExpiry(tokenSlug);
        if (memoize)
            return memoize;
        let response;
        try {
            response = yield axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenSlug}`);
        }
        catch (error) {
            throw new Error(`Response from CoinGecko is not ok ${tokenSlug}: ${error.response.statusText}`);
        }
        const data = (yield response.data);
        if (!data[0]) {
            throw new Error(`Cannot find token(slug=${tokenSlug})`);
        }
        setWithExpiry(tokenSlug, data[0], CACHE_TTL);
        return data[0];
    });
}
export function getTokens(tokenSlugs) {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = tokenSlugs.join(',');
        let response;
        try {
            response = yield axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&per_page=250`);
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
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
export function cacheTokens(tokenSlugs) {
    return __awaiter(this, void 0, void 0, function* () {
        const priceDatas = yield getTokens(tokenSlugs);
        for (const priceData of priceDatas) {
            setWithExpiry(priceData.id, priceData, CACHE_TTL);
        }
    });
}
export function getTokenPrice(tokenSlug) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield getToken(tokenSlug);
        return parseEther(token.current_price.toString());
    });
}
export function getNativeTokenPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice(NativeTokenSlug);
    });
}
export function getAlpacaPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice('alpaca-finance');
    });
}
export function getBUSDPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTokenPrice('binance-usd');
    });
}
export function getZero() {
    return __awaiter(this, void 0, void 0, function* () {
        return Zero;
    });
}
