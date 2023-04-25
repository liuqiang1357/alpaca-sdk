import { BigNumber } from '@ethersproject/bignumber';
import { Zero, WeiPerEther } from '@ethersproject/constants';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { parseFloatToBigNumber } from './format';
import { CurrencyAmount } from '@alpaca-finance/pancakeswap-sdk';
import { BlockTime, BasisPoint } from '../constants';
export const sqrt = (value) => {
    const ONE = BigNumber.from(1);
    const TWO = BigNumber.from(2);
    let z = value.add(ONE).div(TWO);
    let y = value;
    while (z.sub(y).isNegative()) {
        y = z;
        z = value.div(z).add(z).div(TWO);
    }
    return y;
};
export function calculateSecondlyCompoundAPY(yearlyAPR) {
    // e^(ratePerSec) - 1
    // parse to float as a work around to do e^n
    const yearlyAPRInFloat = parseFloat(formatEther(yearlyAPR));
    const apy = (Math.exp(yearlyAPRInFloat) - 1) * 100;
    return parseFloatToBigNumber(apy);
}
export function calcualteLendingPoolYearlyAPR(utilizationRate, borrowingInterestRatePerSec, reservePoolRate) {
    const borrowingInterestRatePerYear = borrowingInterestRatePerSec.mul(60 * 60 * 24 * 365);
    // APR = borrowingInterestRate * utilizationRate * (1 - reservePoolRate)
    const yearlyAPRNumerator = borrowingInterestRatePerYear.mul(utilizationRate).mul(WeiPerEther.sub(reservePoolRate));
    const yearlyAPRDenominator = WeiPerEther.mul(WeiPerEther);
    return yearlyAPRNumerator.div(yearlyAPRDenominator);
}
export function convertBpsToWei(bps) {
    // bps is in 10^4 format
    // ex. bps 10% = 1000
    // mul with 10^14 to make it wei
    return bps.mul(BigNumber.from(10).pow(14));
}
export function calculateDailyCompoundAPY(rewardTokenValuePerBlock, totalPoolValue) {
    if (totalPoolValue.isZero()) {
        return Zero;
    }
    // dailyAPR = (rewardValuePerday/totalPoolValue) * (allocationPoint/totalAllocationPoint)
    const dailyAPRNumerator = calculateRewardValuePerDay(rewardTokenValuePerBlock).mul(WeiPerEther); // amplify the number for precision
    const dailyAPRDenominator = totalPoolValue;
    const dailyAPR = dailyAPRNumerator.div(dailyAPRDenominator);
    // APY = ((1 + dailyAPR)^365) - 1
    const apy = dailyAPR
        .add(WeiPerEther) // equivalent to +1, since we had already ampliflied the value earlier
        .pow(365)
        .div(WeiPerEther.pow(364)) // de-amplify the .pow(365)
        .sub(WeiPerEther) // equivalent to -1
        .mul(100); // make it %
    return apy;
}
export function calculatePeriodicRate(rewardValuePerRate, totalFarmingPoolValue, allocationPoint, totalAllocationPoint) {
    if (totalFarmingPoolValue.isZero() || totalAllocationPoint.isZero())
        return Zero;
    return rewardValuePerRate.mul(WeiPerEther).mul(allocationPoint).div(totalFarmingPoolValue).div(totalAllocationPoint);
}
export function calculateAPY(periodicRate, compoundRate) {
    const periodicRateInFloat = parseFloat(formatEther(periodicRate));
    const apy = (Math.pow(periodicRateInFloat + 1, compoundRate) - 1) * 100;
    return parseFloatToBigNumber(apy);
}
export function calculateSumTotalSupply(pairs) {
    const sumOfTotalSupply = pairs.reduce((prev, curr) => {
        return prev.add(curr.tvl);
    }, Zero);
    return sumOfTotalSupply;
}
export function calculateUtilizationRate(debt, floating) {
    const totalToken = debt.add(floating);
    if (totalToken.isZero()) {
        return Zero;
    }
    return debt.mul(WeiPerEther).div(totalToken);
}
export function calculateIbTokenFromTokenAmount(intputTokenAmount, totalToken, totalSupply) {
    if (totalToken.isZero()) {
        return intputTokenAmount;
    }
    return intputTokenAmount.mul(totalSupply).div(totalToken);
}
export function calculateTokenFromIbTokenAmount(intputIbTokenAmount, totalToken, totalSupply) {
    if (totalSupply.isZero()) {
        return intputIbTokenAmount;
    }
    return intputIbTokenAmount.mul(totalToken).div(totalSupply);
}
/**
 * calculateIbTokenTotalValue
 * ibTokenValue = (totalToken * ratio between (ibTokenAmount/totalSupply)) * price in currency
 * @param ibTokenAmount number ib token amount
 * @param totalSupply number of ib token from the pool, can be derived from vault.totalSupply()
 * @param totalToken number of erc20/native token from the pool, can be derived from vault.totalToken()
 * @param pricePerToken price per erc20/native token in fiat currency
 * @returns total value of ib token in fiat currency
 */
export function calculateIbTokenTotalValue(ibTokenAmount, totalSupply, totalToken, pricePerToken) {
    if (totalToken.isZero())
        return Zero;
    return ibTokenAmount.mul(totalToken).mul(pricePerToken).div(totalSupply).div(WeiPerEther);
}
export function calculateStakingPoolTotalValue(lpTokenTotalSupply, lpTokenAmount, totalBaseToken, pricePerToken) {
    // Demonstratation only
    // const underlyingBaseToken = lpTokenAmount * totalBaseToken / lpTokenTotalSupply
    // return underlyingBaseToken * 2 * pricePerToken
    if (lpTokenAmount.isZero()) {
        return Zero;
    }
    const numerator = lpTokenAmount.mul(totalBaseToken).mul(pricePerToken).mul(2);
    const denominator = lpTokenTotalSupply.mul(WeiPerEther);
    return numerator.div(denominator);
}
// alias to calculateStakingPoolTotalValue
export const calculateLpValue = calculateStakingPoolTotalValue;
export function calcualateSingleAssetStakingPoolTotalValueFromLP(stakedTokenBalanceInFairLaunch, totalBaseToken, totalFarmToken, baseTokenPrice) {
    // totalValue = (stakedTokenBalanceInFairLaunch) * (alpacaPrice * totalAlpaca/totalSAlpaca)
    if (totalFarmToken.eq(Zero)) {
        return Zero;
    }
    return stakedTokenBalanceInFairLaunch.mul(baseTokenPrice).mul(totalBaseToken).div(totalFarmToken).div(WeiPerEther);
}
/**
 * calculateLpWBNBStakingPoolTotalValue
 * calcualte value of LP Pool (in which one of the token must be wBNB)
 * @param lpTokenTotalSupply
 * @param lpTokenBalanceInFairLaunch
 * @param totalPairingToken
 * @param totalBNB
 * @param nativeTokenPriceInFiat
 */
export function calculateLpWBNBStakingPoolTotalValue(lpTokenTotalSupply, lpTokenBalanceInFairLaunch, totalPairingToken, totalBNB, nativeTokenPriceInFiat) {
    // Demonstratation only
    // const underlayingPairingToken = lpTokenBalanceInFairLaunch.mul(totalPairingToken).div(lpTokenTotalSupply)
    // const underlayingBNB = lpTokenBalanceInFairLaunch.mul(totalBNB).div(lpTokenTotalSupply)
    // const paringTokenPerBNB = totalBNB.div(totalPairingToken)
    // const totalUnderlayingInBNB = underlayingBNB.add(underlayingPairingToken.mul(paringTokenPerBNB))
    // return totalUnderlayingInBNB.mul(nativeTokenPriceInFiat)
    const underlayingPairingTokenInBNB = lpTokenBalanceInFairLaunch
        .mul(totalPairingToken)
        .div(lpTokenTotalSupply)
        .mul(totalBNB)
        .div(totalPairingToken);
    return lpTokenBalanceInFairLaunch
        .mul(totalBNB)
        .div(lpTokenTotalSupply)
        .add(underlayingPairingTokenInBNB)
        .mul(nativeTokenPriceInFiat)
        .div(WeiPerEther);
}
/**
 * calculateRewardValuePerBlock
 * if totalRewardToken has TotalNativeTokenInfiat
 * then rewardTokenPerBlock will be rewardTokenPerBlock * TotalNativeTokenInfiat / totalRewardToken
 * @param rewardTokenPerBlock number of reward token dropped per block
 * @param totalRewardTokenInSwap number of reward token in swap eg. number of alpaca in alpaca-bnb pancakeswap pool
 * @param totalNativeTokenInSwap price of native token eg. number of bnb in alpaca-bnb pancakeswap pool
 * @param nativeTokenPriceInFiat price per native token in fiat currency
 * @returns total value of reward per block in fiat currency
 */
export function calculateRewardValuePerBlock(rewardTokenPerBlock, totalRewardTokenInSwap, totalNativeTokenInSwap, nativeTokenPriceInFiat) {
    /**
     *  price per reward token in fiat currency
     */
    if (totalRewardTokenInSwap.isZero()) {
        return Zero;
    }
    return rewardTokenPerBlock
        .mul(totalNativeTokenInSwap)
        .mul(nativeTokenPriceInFiat)
        .div(totalRewardTokenInSwap)
        .div(WeiPerEther);
}
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 day?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export function calculateRewardValuePerDay(rewardValuePerBlock) {
    const blockPerDay = BigNumber.from(60 * 60 * 24).div(BlockTime);
    return rewardValuePerBlock.mul(blockPerDay);
}
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 month?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export function calculateRewardValuePerMonth(rewardValuePerBlock) {
    const blockPerMonth = BigNumber.from(60 * 60 * 24 * 30).div(BlockTime);
    return rewardValuePerBlock.mul(blockPerMonth);
}
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 year?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export function calculateRewardValuePerYear(rewardValuePerBlock) {
    const blockPerYear = BigNumber.from(60 * 60 * 24 * 365).div(BlockTime);
    return rewardValuePerBlock.mul(blockPerYear);
}
/**
 * calculateStakingPoolAPY
 * staking pool percentage apy is a result of ((rewardValue * allocation point ratio(per staking pool)) / total pool value) * 100 for turning ratio to percentage
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalStakingPoolValue can be derived from calculateTotalStakingPoolValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export function calculateStakingPoolPercentAPY(rewardValuePerYear, totalStakingPoolValue, allocationPoint, totalAllocationPoint) {
    if (totalStakingPoolValue.isZero() || totalAllocationPoint.isZero())
        return Zero;
    return rewardValuePerYear.mul(allocationPoint).mul(100).div(totalStakingPoolValue).div(totalAllocationPoint);
}
/**
 * calculateRewardWithBonusPerBlock
 * @param rewardPerBlock number of reward token dropped per block, can be derived from fairLaunch.alpacaPerBlock()
 * @param bonusMultiplier bonus muliplier for early adopter, can be derived from fairLaunch.bonusMultiplier()
 * @param currentBlock
 * @param bonusEndBlock block number when bonus period ends, can be derived from fairLaunch.bonusEndBlock()
 */
export function calculateRewardWithBonusPerBlock(rewardPerBlock, bonusMultiplier, currentBlock, bonusEndBlock) {
    if (currentBlock.lt(bonusEndBlock)) {
        return rewardPerBlock.mul(bonusMultiplier);
    }
    return rewardPerBlock;
}
/**
 * calculateIbFarmingPoolTotalValue
 * TotalFarmingPoolValue = FarmToken * price
 * @param totalFarmToken number of farm token in the pool, can be derived from alpacaDebtTokenBNB.balanceOf(fairLaunch.address)
 * @param pricePerToken price per erc20/native token in fiat currency
 * @returns total value of farming pool in fiat currency
 */
export function calculateIbFarmingPoolTotalValue(totalFarmToken, pricePerToken) {
    return totalFarmToken.mul(pricePerToken).div(WeiPerEther);
}
/**
 * calculateFarmPoolPercentAPY
 * allPoolAPY = rewardvaluePerYear * 100 / totalFarmingPoolValue
 * specificPoolAPY = allPoolAPY * (allocationPoint/ totalAllocationPoint) // different pool, different alloc point
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalFarmingPoolValue can be derived from calculateIbFarmingPoolTotalValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export function calculateFarmPoolPercentAPY(rewardValuePerYear, totalFarmingPoolValue, allocationPoint, totalAllocationPoint) {
    if (totalFarmingPoolValue.isZero() || totalAllocationPoint.isZero())
        return Zero;
    return rewardValuePerYear.mul(allocationPoint).mul(100).div(totalFarmingPoolValue).div(totalAllocationPoint);
}
/**
 * calculateYearlyAPR - same as calculateFarmPoolPercentAPY, but this one rename correctly and has more precision
 * allPoolAPY = rewardvaluePerYear * 100 / totalFarmingPoolValue
 * specificPoolAPY = allPoolAPY * (allocationPoint/ totalAllocationPoint) // different pool, different alloc point
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalFarmingPoolValue can be derived from calculateIbFarmingPoolTotalValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export function calculateYearlyAPR(rewardValuePerYear, totalFarmingPoolValue, allocationPoint, totalAllocationPoint) {
    if (totalFarmingPoolValue.isZero() || totalAllocationPoint.isZero())
        return Zero;
    return rewardValuePerYear
        .mul(WeiPerEther)
        .mul(allocationPoint)
        .mul(100)
        .div(totalFarmingPoolValue)
        .div(totalAllocationPoint);
}
/**
 * getMktSellAmount is a function for a quote amount in amountIn unit
 * amountOut/mktSellAmount = amountInWithFee * (reserveOut/(reserveIn + AmountInWithFee))
 *                         = simplify ((amountIn * trading_fee) * reserveOut) / ((reserveIn * 10000) + (amountIn * trading_fee))
 *                         = trading_fee * amountIn * reserveOut / (trading_fee * amountIn + 10000* reserveIn)
 * @param  {BigNumber} amountIn
 * @param  {BigNumber} reserveIn
 * @param  {BigNumber} reserveOut
 * @returns BigNumber
 */
export function getMktSellAmount(amountIn, reserveIn, reserveOut, amountInBPS) {
    const amountInWithFee = amountIn.mul(amountInBPS);
    const numerator = amountInWithFee.mul(reserveOut);
    const denominator = reserveIn.mul(BasisPoint).add(amountInWithFee);
    return numerator.div(denominator);
}
export function optimizeTokensValue(baseTokenAmount, farmingTokenAmount, baseTokenReserveAmount, farmingTokenReserveAmount, loan, feeBPS) {
    const leverageBaseToken = baseTokenAmount.add(loan);
    const amountInBPS = BasisPoint.sub(feeBPS); // ex. 9975, 9980
    if (leverageBaseToken.mul(farmingTokenReserveAmount).gte(farmingTokenAmount.mul(baseTokenReserveAmount))) {
        const swapAmt = optimizeDepositBaseToken(leverageBaseToken, farmingTokenAmount, baseTokenReserveAmount, farmingTokenReserveAmount, amountInBPS);
        const amountOut = getMktSellAmount(swapAmt, baseTokenReserveAmount, farmingTokenReserveAmount, amountInBPS);
        return {
            optimalBaseTokenAmount: leverageBaseToken.sub(swapAmt),
            optimalFarmingTokenAmount: farmingTokenAmount.add(amountOut),
            swapAmount: swapAmt,
            isReversed: false,
            quoteSwapAmount: amountOut,
        };
    }
    const swapAmt = optimizeDepositBaseToken(farmingTokenAmount, leverageBaseToken, farmingTokenReserveAmount, baseTokenReserveAmount, amountInBPS);
    const amountOut = getMktSellAmount(swapAmt, farmingTokenReserveAmount, baseTokenReserveAmount, amountInBPS);
    return {
        optimalBaseTokenAmount: leverageBaseToken.add(amountOut),
        optimalFarmingTokenAmount: farmingTokenAmount.sub(swapAmt),
        swapAmount: swapAmt,
        isReversed: true,
        quoteSwapAmount: amountOut,
    };
}
/**
 * swapAmtA = sqrt(((2-f)* resA)^2 + 4(1-f) * amtA * resA) - (2-f) * resA / 2(1-f)
 * given f = 0.2
 * swapAmtA =  sqrt((19975)^2 * (resA)^2 + 4 * 9975 * 10000 * amtA * resA) - (19975) * resA / 2(9975)
 * @param  {BigNumber} toBeSwapToken - token to be swapped to (resA)
 * @param  {BigNumber} targetToken - target token to add with swap amt (resB)
 * @param  {BigNumber} toBeSwapTokenReserveAmount (resA)
 * @param  {BigNumber} targetTokenReserveAmount (resB)
 */
const optimizeDepositBaseToken = (toBeSwapToken, targetToken, toBeSwapTokenReserveAmount, targetTokenReserveAmount, amountInBPS) => {
    const a = BigNumber.from(amountInBPS);
    const b = BigNumber.from(BasisPoint).add(a).mul(toBeSwapTokenReserveAmount);
    const _c = toBeSwapToken.mul(targetTokenReserveAmount).sub(targetToken.mul(toBeSwapTokenReserveAmount));
    const c = _c.mul(BasisPoint).mul(toBeSwapTokenReserveAmount).div(targetToken.add(targetTokenReserveAmount));
    const d = a.mul(c).mul(4);
    const e = sqrt(b.mul(b).add(d));
    const numerator = e.sub(b);
    const denominator = a.mul(2);
    return numerator.div(denominator);
};
export function calculateRewardTokenValuePerBlock(rewardPerBlock, bonusMultiplier, currentBlock, bonusEndBlock, rewardPrice) {
    const rewardTokenPerBlock = calculateRewardWithBonusPerBlock(rewardPerBlock, bonusMultiplier, currentBlock, bonusEndBlock);
    const rewardTokenValuePerBlock = rewardTokenPerBlock.mul(rewardPrice).div(WeiPerEther);
    return rewardTokenValuePerBlock;
}
export function calculateInterestRate(debt, floating, ceilSlope1, ceilSlope2, ceilSlope3, maxInterestSlope1, maxInterestSlope2, maxInterestSlope3) {
    if (debt.isZero() || floating.isZero())
        return Zero;
    const total = debt.add(floating);
    const utilization = debt.mul(100).mul(WeiPerEther).div(total);
    if (utilization.lt(ceilSlope1)) {
        return utilization.mul(maxInterestSlope1).div(ceilSlope1).div(365);
    }
    else if (utilization.lt(ceilSlope2)) {
        return maxInterestSlope2.div(365);
    }
    else if (utilization.lt(ceilSlope3)) {
        return maxInterestSlope2.add(utilization.sub(ceilSlope2).mul(maxInterestSlope2).div(maxInterestSlope3)).div(365);
    }
    else {
        return BigNumber.from(2).mul(WeiPerEther).div(10).div(365);
    }
}
export function getTradingFeePerDayWaultSwap(waultPair) {
    const tradingFeeInt = Math.round(Number(waultPair.feeApr * 100)); // * 100 for adjusting the basis point to 10000 (originally 100)
    const tradingFeeBPS = BigNumber.from(tradingFeeInt).mul(WeiPerEther).div(BasisPoint);
    const tradingFee = tradingFeeBPS.div(365);
    return tradingFee;
}
export function calculateTradingFeePerYear(tradingFeePerDay) {
    return tradingFeePerDay.mul(365);
}
/**
 * This is a function for calculating price impact based on token0Reserve/token1reserve, on 1 unit of token0 how much for token1
 * and then (`on 1 unit of token0 how much for token1) * inputAmount, this should be an ideal quote price
 * @param  {Price} midPrice - its a fraction between baseReserve/farmingReserve
 * @param  {CurrencyAmount} inputAmount
 * @param  {CurrencyAmount} outputAmount
 * @returns Percent
 */
export function computePriceImpactPerValue(isReversed, principal, midPrice, inputAmount, outputAmount) {
    const value = CurrencyAmount.ether(principal);
    const exactQuote = midPrice.raw.multiply(inputAmount.raw);
    const delta = exactQuote.subtract(outputAmount.raw);
    const priceImpactDenominator = value;
    let priceImpactNumerator = delta.divide(midPrice);
    if (isReversed) {
        priceImpactNumerator = delta;
    }
    return BigNumber.from(priceImpactNumerator.divide(priceImpactDenominator).toFixed(0)).mul(100);
}
/**
 * similar to value per sec... , how about 1 day?
 * @param  {BigNumber} valuePerBlock
 * @returns BigNumber
 */
export function calculateValueSecToDay(valuePerSec) {
    const perDay = BigNumber.from(60 * 60 * 24);
    return valuePerSec.mul(perDay);
}
/**
 * similar to value per day... , how about 1 year?
 * @param  {BigNumber} valuePerBlock
 * @returns BigNumber
 */
export function calculateValueDayToYear(valuePerDay) {
    const perYear = BigNumber.from(365);
    return valuePerDay.mul(perYear);
}
export function calculateUnderlayingLpTokeninUSD(balanceOfLpToken, totalT0, totalT1, totalSupply, t0InUSD, t1InUSD) {
    if (totalSupply.isZero()) {
        return [Zero, Zero, Zero, Zero, Zero];
    }
    const balanceOfToken0 = totalT0.mul(balanceOfLpToken).div(totalSupply);
    const balanceOfToken1 = totalT1.mul(balanceOfLpToken).div(totalSupply);
    const underlayingT0inUSD = balanceOfToken0.mul(t0InUSD).div(WeiPerEther);
    const underlayingT1inUSD = balanceOfToken1.mul(t1InUSD).div(WeiPerEther);
    const totalUnderlayingInUSD = underlayingT0inUSD.add(underlayingT1inUSD);
    return [balanceOfToken0, balanceOfToken1, underlayingT0inUSD, underlayingT1inUSD, totalUnderlayingInUSD];
}
export function calcualateMinimumCollateralRequiredAmount(workFactorAdj, debtRatio, totalDebt, positionValue) {
    if (debtRatio.isZero()) {
        return Zero;
    }
    const workFactorTolerance = workFactorAdj.sub(10);
    if (!debtRatio.gt(workFactorTolerance)) {
        return Zero;
    }
    const positionDebtRatioWithTolerance = positionValue.mul(workFactorTolerance).div(BasisPoint);
    return totalDebt.sub(positionDebtRatioWithTolerance).mul(BasisPoint).div(workFactorTolerance);
}
export function calcualateMinimumCollateralWithLoanRequiredAmount(positionValue, totalDebt, targetLeverage) {
    const targetDebtRatio = targetLeverage.sub(WeiPerEther).mul(WeiPerEther).div(targetLeverage);
    if (targetDebtRatio.isZero())
        return Zero;
    return totalDebt.mul(WeiPerEther).div(targetDebtRatio).sub(positionValue);
}
export function calculateEquityFromDebtRatio(positionValue, debtRatioPercent) {
    const equityRatio = parseEther('100').sub(debtRatioPercent).div(100);
    const equity = positionValue.mul(equityRatio).div(WeiPerEther);
    return equity;
}
