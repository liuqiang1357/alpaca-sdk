"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingFee = exports.tradingFeeDataNotAvailable = void 0;
const utils_1 = require("ethers/lib/utils");
const domain_1 = require("../shared/domain");
exports.tradingFeeDataNotAvailable = null;
class TradingFee extends domain_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get lpAddress() {
        return this.props.lpAddress.toLowerCase();
    }
    get dailyTradingFeesAPR() {
        return utils_1.parseEther(this.props.dailyTradingFeesApr);
    }
}
exports.TradingFee = TradingFee;
