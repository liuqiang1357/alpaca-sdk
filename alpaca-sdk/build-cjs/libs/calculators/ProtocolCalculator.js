"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolCalculator = exports.ProtocolCalculatorFactory = void 0;
const constants_1 = require("@ethersproject/constants");
const constants_2 = require("../../constants");
const calculation_1 = require("../../utils/calculation");
const address_1 = require("../../utils/address");
const contracts_1 = require("../../constants/contracts");
class ProtocolCalculatorFactory {
    create(_farmingPoolCalculators, _alpacaLendingPoolCalculator) {
        if (!_farmingPoolCalculators.length)
            throw new Error(`ProtocolCalculatorFactory::create: input _farmingPoolCalculators is empty`);
        if (!address_1.compare(_alpacaLendingPoolCalculator.vault.address, contracts_1.ALPACAVaultAddress))
            throw new Error(`ProtocolCalculatorFactory::create: input _alpacaLendingPoolCalculator is not Alpaca vault`);
        const vaultTvl = _alpacaLendingPoolCalculator.tvl;
        const workersTvl = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.tvl), constants_1.Zero);
        const masterChefishTvl = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.tvlInMasterChef), constants_1.Zero);
        const totalRewardPerBlock = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.rewardPerBlock), constants_1.Zero);
        return new ProtocolCalculator({
            vaultTvl,
            workersTvl,
            masterChefishTvl,
            rewardTokenPrice: _farmingPoolCalculators[0].rewardTokenPrice,
            rewardPerBlock: totalRewardPerBlock,
            buyBackBps: _farmingPoolCalculators[0].buyBackBps,
        });
    }
}
exports.ProtocolCalculatorFactory = ProtocolCalculatorFactory;
class ProtocolCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get yearlyProtocolRate() {
        return this.calculateYearlyProtocolRate(this.data.vaultTvl, this.data.workersTvl, this.data.masterChefishTvl, this.data.rewardTokenPrice, this.data.rewardPerBlock, this.data.buyBackBps);
    }
    get yearlyProtocolApr() {
        return this.yearlyProtocolRate.mul(100);
    }
    get dailyProtocolRate() {
        return this.yearlyProtocolRate.div(365);
    }
    get dailyProtocolApr() {
        return this.dailyProtocolRate.mul(100);
    }
    calculateYearlyProtocolRate(vaultTvl, workersTvl, masterChefishTvl, rewardTokenPrice, rewardPerBlock, reinvestPortionBps) {
        if (vaultTvl.eq(constants_1.Zero) || masterChefishTvl.eq(constants_1.Zero))
            return constants_1.Zero;
        const rewardValuePerBlock = rewardPerBlock.mul(rewardTokenPrice).div(constants_1.WeiPerEther);
        const rewardValuePerYear = calculation_1.calculateRewardValuePerYear(rewardValuePerBlock);
        // Find out how much does the pool(s) could make per year (value * share)
        const rewardValueFromWorkersPerYear = rewardValuePerYear.mul(workersTvl).div(masterChefishTvl);
        // X% of cakeValueFromWorkersPerYear will be used to buy back Alpaca
        // and add to vault. Let's call this `buybackPortion`.
        const buybackPortionValuePerYear = rewardValueFromWorkersPerYear.mul(reinvestPortionBps).div(constants_2.BasisPoint);
        // Find the rate
        const protocolRate = buybackPortionValuePerYear.mul(constants_1.WeiPerEther).div(vaultTvl);
        return protocolRate;
    }
}
exports.ProtocolCalculator = ProtocolCalculator;
