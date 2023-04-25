"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmInteractionCalculator = void 0;
const pancakeswap_sdk_1 = require("@alpaca-finance/pancakeswap-sdk");
const constants_1 = require("../../constants");
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const math_1 = require("../../utils/math");
const { WeiPerEther, Zero } = ethers_1.ethers.constants;
class FarmInteractionCalculator {
    constructor({ _data }) {
        this.chainId = 56;
        /**
         * @alias calculateOpenPositionParams
         */
        this.calculateAdjustPositionParams = this.calculateOpenPositionParams;
        this.data = _data;
    }
    /**
     * Given the input amount of base and farm tokens, and the amount of borrowing base tokens, calculate
     * the amount of LP tokens that would results in after open a position, in which would be further used
     * as parameters
     * @param {ICalculateOpenPositionParamsInput}
     */
    calculateOpenPositionParams({ inputBaseAmount, inputFarmAmount, borrowingBaseAmount, slippageBps, }) {
        const { farmToBaseRoute } = this._getLPRoutesAndTokens();
        const inputFarmAmountInBase = inputFarmAmount.mul(this._priceToBigNumber(farmToBaseRoute.midPrice)).div(WeiPerEther);
        // Sum up inputs and borrowing portion in base token unit
        const posValueInBase = inputBaseAmount.add(borrowingBaseAmount).add(inputFarmAmountInBase);
        // Find lp amount that is equivalent to posValue
        const lpPrceInBase = this._getLpPriceInBase();
        const lpAmount = posValueInBase.mul(WeiPerEther).div(lpPrceInBase);
        return {
            lpAmount,
            minLpAmount: this._subSlippage(lpAmount, slippageBps),
        };
    }
    /**
     * Given the amount of equity and debt in base token, calculate the amount of base token that can be received by
     * liquidating the entire position
     * @param {ICalculateEntirelyClosePositionParamsInput}
     */
    calculateEntirelyCloseLiquidateAllPositionParams({ equityInBase, debtInBase, slippageBps, }) {
        const { baseToFarmRoute, farmToBaseRoute, farmToken } = this._getLPRoutesAndTokens();
        const posValueInBase = equityInBase.add(debtInBase);
        // Find token amount on each side of lp
        const baseAmount = posValueInBase.div(2);
        const farmAmount = baseAmount.mul(this._priceToBigNumber(baseToFarmRoute.midPrice)).div(WeiPerEther);
        // Trade farm token to base token
        const tradeFarmTokenToBaseToken = new pancakeswap_sdk_1.Trade(farmToBaseRoute, new pancakeswap_sdk_1.TokenAmount(farmToken, farmAmount.toString()), pancakeswap_sdk_1.TradeType.EXACT_INPUT, constants_1.BasisPoint.sub(this.data.tradingFeeBps).toString());
        const farmAmountAfterTradeInBase = utils_1.parseEther(tradeFarmTokenToBaseToken.outputAmount.toFixed(18));
        // Sum up the base amount after paying debt
        const receivingBaseAmount = math_1.maxBigNumber(baseAmount.add(farmAmountAfterTradeInBase).sub(debtInBase), Zero);
        return {
            receivingBaseAmount,
            minReceivingBaseAmount: this._subSlippage(receivingBaseAmount, slippageBps),
        };
    }
    /**
     * Given the amount of equity and debt in base token, calculate the amount of farm token that can be received by
     * liquidating the entire position, with minimal trade
     * @param {ICalculateEntirelyClosePositionParamsInput}
     */
    calculateEntirelyCloseMinimizeTradingPositionParams({ equityInBase, debtInBase, slippageBps, }) {
        const { baseToFarmRoute, farmToBaseRoute, baseToken } = this._getLPRoutesAndTokens();
        const posValueInBase = equityInBase.add(debtInBase);
        // Find token amount on each side of lp
        const baseAmount = posValueInBase.div(2);
        const farmAmount = baseAmount.mul(this._priceToBigNumber(baseToFarmRoute.midPrice)).div(WeiPerEther);
        const leftoverBaseAmountAfterRepay = baseAmount.sub(debtInBase);
        // Base amount can cover debt
        if (leftoverBaseAmountAfterRepay.gte(0)) {
            // Gotta receive the full amount of farm token (along with leftover base token)
            return {
                receivingFarmAmount: farmAmount,
                minReceivingFarmAmount: this._subSlippage(farmAmount, slippageBps),
            };
        }
        // Otherwise, we need to trade an amount of farm token to base token for debt repayment
        const leftoverDebtInBase = leftoverBaseAmountAfterRepay.abs();
        // Trade farm token to base token
        const tradeFarmTokenToBaseToken = new pancakeswap_sdk_1.Trade(farmToBaseRoute, new pancakeswap_sdk_1.TokenAmount(baseToken, leftoverDebtInBase.toString()), pancakeswap_sdk_1.TradeType.EXACT_OUTPUT, constants_1.BasisPoint.sub(this.data.tradingFeeBps).toString());
        const farmAmountToBeTraded = utils_1.parseEther(tradeFarmTokenToBaseToken.inputAmount.toFixed(18));
        // Remaining farm amount
        const receivingFarmAmount = math_1.maxBigNumber(farmAmount.sub(farmAmountToBeTraded), Zero);
        return {
            receivingFarmAmount,
            minReceivingFarmAmount: this._subSlippage(receivingFarmAmount, slippageBps),
        };
    }
    _subSlippage(_value, _slippage) {
        const inverseSlippageBps = constants_1.BasisPoint.sub(_slippage);
        return _value.mul(inverseSlippageBps).div(constants_1.BasisPoint);
    }
    _priceToBigNumber(_price) {
        return utils_1.parseEther(_price.toFixed(18));
    }
    _getLPRoutesAndTokens() {
        const { baseReserve, farmReserve, baseAddress, farmAddress } = this.data;
        const baseToken = new pancakeswap_sdk_1.Token(this.chainId, baseAddress, 18);
        const farmToken = new pancakeswap_sdk_1.Token(this.chainId, farmAddress, 18);
        const pair = new pancakeswap_sdk_1.Pair(new pancakeswap_sdk_1.TokenAmount(baseToken, baseReserve.toString()), new pancakeswap_sdk_1.TokenAmount(farmToken, farmReserve.toString()));
        const baseToFarmRoute = new pancakeswap_sdk_1.Route([pair], baseToken, farmToken);
        const farmToBaseRoute = new pancakeswap_sdk_1.Route([pair], farmToken, baseToken);
        return { baseToFarmRoute, farmToBaseRoute, baseToken, farmToken };
    }
    _getLpPriceInBase() {
        const { baseReserve, lpTotalSupply } = this.data;
        const lpTotalSupplyInBase = baseReserve.mul(2);
        const lpPriceInBase = lpTotalSupplyInBase.mul(WeiPerEther).div(lpTotalSupply);
        return lpPriceInBase;
    }
}
exports.FarmInteractionCalculator = FarmInteractionCalculator;
