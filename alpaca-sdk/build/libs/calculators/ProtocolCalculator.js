import { WeiPerEther, Zero } from '@ethersproject/constants';
import { BasisPoint } from '../../constants';
import { calculateRewardValuePerYear } from '../../utils/calculation';
import { compare } from '../../utils/address';
import { ALPACAVaultAddress } from '../../constants/contracts';
export class ProtocolCalculatorFactory {
    create(_farmingPoolCalculators, _alpacaLendingPoolCalculator) {
        if (!_farmingPoolCalculators.length)
            throw new Error(`ProtocolCalculatorFactory::create: input _farmingPoolCalculators is empty`);
        if (!compare(_alpacaLendingPoolCalculator.vault.address, ALPACAVaultAddress))
            throw new Error(`ProtocolCalculatorFactory::create: input _alpacaLendingPoolCalculator is not Alpaca vault`);
        const vaultTvl = _alpacaLendingPoolCalculator.tvl;
        const workersTvl = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.tvl), Zero);
        const masterChefishTvl = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.tvlInMasterChef), Zero);
        const totalRewardPerBlock = _farmingPoolCalculators.reduce((sum, cal) => sum.add(cal.rewardPerBlock), Zero);
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
export class ProtocolCalculator {
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
        if (vaultTvl.eq(Zero) || masterChefishTvl.eq(Zero))
            return Zero;
        const rewardValuePerBlock = rewardPerBlock.mul(rewardTokenPrice).div(WeiPerEther);
        const rewardValuePerYear = calculateRewardValuePerYear(rewardValuePerBlock);
        // Find out how much does the pool(s) could make per year (value * share)
        const rewardValueFromWorkersPerYear = rewardValuePerYear.mul(workersTvl).div(masterChefishTvl);
        // X% of cakeValueFromWorkersPerYear will be used to buy back Alpaca
        // and add to vault. Let's call this `buybackPortion`.
        const buybackPortionValuePerYear = rewardValueFromWorkersPerYear.mul(reinvestPortionBps).div(BasisPoint);
        // Find the rate
        const protocolRate = buybackPortionValuePerYear.mul(WeiPerEther).div(vaultTvl);
        return protocolRate;
    }
}
