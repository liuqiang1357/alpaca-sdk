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
exports.XALPACACalculator = void 0;
const XALPACA__factory_1 = require("@alpaca-finance/xalpaca-contract/typechain/factories/XALPACA__factory");
const xAlpacaContract_1 = require("../../constants/xAlpacaContract");
const getPrice_1 = require("../getPrice");
const tokenProfile_1 = require("../../constants/tokenProfile");
const unit_1 = require("../../utils/unit");
class XALPACACalculator {
    constructor(_provider) {
        this.provider = _provider;
    }
    getTotalAlpacaLockInUSD() {
        return __awaiter(this, void 0, void 0, function* () {
            const xALPACA = XALPACA__factory_1.XALPACA__factory.connect(xAlpacaContract_1.XALPACAAddress, this.provider);
            const totalAlpacaLock = yield xALPACA.supply();
            const alpacaPrice = yield getPrice_1.getTokenPrice(tokenProfile_1.mapTokenProfiles.alpaca, this.provider);
            return totalAlpacaLock.mul(alpacaPrice).div(unit_1.WeiPerWad);
        });
    }
}
exports.XALPACACalculator = XALPACACalculator;
