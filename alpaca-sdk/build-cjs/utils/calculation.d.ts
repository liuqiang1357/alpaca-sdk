import { BigNumber } from '@ethersproject/bignumber';
import { LendingPoolInfo, WaultSwapFarmData, IOptimalTokensValue } from '../entity';
import { CurrencyAmount, BigintIsh, Price } from '@alpaca-finance/pancakeswap-sdk';
export declare const sqrt: (value: BigNumber) => BigNumber;
export declare function calculateSecondlyCompoundAPY(yearlyAPR: BigNumber): BigNumber;
export declare function calcualteLendingPoolYearlyAPR(utilizationRate: BigNumber, borrowingInterestRatePerSec: BigNumber, reservePoolRate: BigNumber): BigNumber;
export declare function convertBpsToWei(bps: BigNumber): BigNumber;
export declare function calculateDailyCompoundAPY(rewardTokenValuePerBlock: BigNumber, totalPoolValue: BigNumber): BigNumber;
export declare function calculatePeriodicRate(rewardValuePerRate: BigNumber, totalFarmingPoolValue: BigNumber, allocationPoint: BigNumber, totalAllocationPoint: BigNumber): BigNumber;
export declare function calculateAPY(periodicRate: BigNumber, compoundRate: number): BigNumber;
export declare function calculateSumTotalSupply(pairs: LendingPoolInfo[]): BigNumber;
export declare function calculateUtilizationRate(debt: BigNumber, floating: BigNumber): BigNumber;
export declare function calculateIbTokenFromTokenAmount(intputTokenAmount: BigNumber, totalToken: BigNumber, totalSupply: BigNumber): BigNumber;
export declare function calculateTokenFromIbTokenAmount(intputIbTokenAmount: BigNumber, totalToken: BigNumber, totalSupply: BigNumber): BigNumber;
/**
 * calculateIbTokenTotalValue
 * ibTokenValue = (totalToken * ratio between (ibTokenAmount/totalSupply)) * price in currency
 * @param ibTokenAmount number ib token amount
 * @param totalSupply number of ib token from the pool, can be derived from vault.totalSupply()
 * @param totalToken number of erc20/native token from the pool, can be derived from vault.totalToken()
 * @param pricePerToken price per erc20/native token in fiat currency
 * @returns total value of ib token in fiat currency
 */
export declare function calculateIbTokenTotalValue(ibTokenAmount: BigNumber, totalSupply: BigNumber, totalToken: BigNumber, pricePerToken: BigNumber): BigNumber;
export declare function calculateStakingPoolTotalValue(lpTokenTotalSupply: BigNumber, lpTokenAmount: BigNumber, totalBaseToken: BigNumber, pricePerToken: BigNumber): BigNumber;
export declare const calculateLpValue: typeof calculateStakingPoolTotalValue;
export declare function calcualateSingleAssetStakingPoolTotalValueFromLP(stakedTokenBalanceInFairLaunch: BigNumber, totalBaseToken: BigNumber, totalFarmToken: BigNumber, baseTokenPrice: BigNumber): BigNumber;
/**
 * calculateLpWBNBStakingPoolTotalValue
 * calcualte value of LP Pool (in which one of the token must be wBNB)
 * @param lpTokenTotalSupply
 * @param lpTokenBalanceInFairLaunch
 * @param totalPairingToken
 * @param totalBNB
 * @param nativeTokenPriceInFiat
 */
export declare function calculateLpWBNBStakingPoolTotalValue(lpTokenTotalSupply: BigNumber, lpTokenBalanceInFairLaunch: BigNumber, totalPairingToken: BigNumber, totalBNB: BigNumber, nativeTokenPriceInFiat: BigNumber): BigNumber;
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
export declare function calculateRewardValuePerBlock(rewardTokenPerBlock: BigNumber, totalRewardTokenInSwap: BigNumber, totalNativeTokenInSwap: BigNumber, nativeTokenPriceInFiat: BigNumber): BigNumber;
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 day?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export declare function calculateRewardValuePerDay(rewardValuePerBlock: BigNumber): BigNumber;
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 month?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export declare function calculateRewardValuePerMonth(rewardValuePerBlock: BigNumber): BigNumber;
/**
 * similar to reward per block... each block contains only 3 seconds, how about 1 year?
 * @param  {BigNumber} rewardValuePerBlock
 * @returns BigNumber
 */
export declare function calculateRewardValuePerYear(rewardValuePerBlock: BigNumber): BigNumber;
/**
 * calculateStakingPoolAPY
 * staking pool percentage apy is a result of ((rewardValue * allocation point ratio(per staking pool)) / total pool value) * 100 for turning ratio to percentage
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalStakingPoolValue can be derived from calculateTotalStakingPoolValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export declare function calculateStakingPoolPercentAPY(rewardValuePerYear: BigNumber, totalStakingPoolValue: BigNumber, allocationPoint: BigNumber, totalAllocationPoint: BigNumber): BigNumber;
/**
 * calculateRewardWithBonusPerBlock
 * @param rewardPerBlock number of reward token dropped per block, can be derived from fairLaunch.alpacaPerBlock()
 * @param bonusMultiplier bonus muliplier for early adopter, can be derived from fairLaunch.bonusMultiplier()
 * @param currentBlock
 * @param bonusEndBlock block number when bonus period ends, can be derived from fairLaunch.bonusEndBlock()
 */
export declare function calculateRewardWithBonusPerBlock(rewardPerBlock: BigNumber, bonusMultiplier: BigNumber, currentBlock: BigNumber, bonusEndBlock: BigNumber): BigNumber;
/**
 * calculateIbFarmingPoolTotalValue
 * TotalFarmingPoolValue = FarmToken * price
 * @param totalFarmToken number of farm token in the pool, can be derived from alpacaDebtTokenBNB.balanceOf(fairLaunch.address)
 * @param pricePerToken price per erc20/native token in fiat currency
 * @returns total value of farming pool in fiat currency
 */
export declare function calculateIbFarmingPoolTotalValue(totalFarmToken: BigNumber, pricePerToken: BigNumber): BigNumber;
/**
 * calculateFarmPoolPercentAPY
 * allPoolAPY = rewardvaluePerYear * 100 / totalFarmingPoolValue
 * specificPoolAPY = allPoolAPY * (allocationPoint/ totalAllocationPoint) // different pool, different alloc point
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalFarmingPoolValue can be derived from calculateIbFarmingPoolTotalValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export declare function calculateFarmPoolPercentAPY(rewardValuePerYear: BigNumber, totalFarmingPoolValue: BigNumber, allocationPoint: BigNumber, totalAllocationPoint: BigNumber): BigNumber;
/**
 * calculateYearlyAPR - same as calculateFarmPoolPercentAPY, but this one rename correctly and has more precision
 * allPoolAPY = rewardvaluePerYear * 100 / totalFarmingPoolValue
 * specificPoolAPY = allPoolAPY * (allocationPoint/ totalAllocationPoint) // different pool, different alloc point
 * @param rewardValuePerYear can be derived from calculateRewardValuePerYear
 * @param totalFarmingPoolValue can be derived from calculateIbFarmingPoolTotalValue
 * @param allocationPoint can be derived from fairLaunch.poolInfo(id).allocPoint
 * @param totalAllocationPoint can be derived from fairLaunch.totalAllocPoint()
 */
export declare function calculateYearlyAPR(rewardValuePerYear: BigNumber, totalFarmingPoolValue: BigNumber, allocationPoint: BigNumber, totalAllocationPoint: BigNumber): BigNumber;
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
export declare function getMktSellAmount(amountIn: BigNumber, reserveIn: BigNumber, reserveOut: BigNumber, amountInBPS: BigNumber): BigNumber;
export declare function optimizeTokensValue(baseTokenAmount: BigNumber, farmingTokenAmount: BigNumber, baseTokenReserveAmount: BigNumber, farmingTokenReserveAmount: BigNumber, loan: BigNumber, feeBPS: BigNumber): IOptimalTokensValue;
export declare function calculateRewardTokenValuePerBlock(rewardPerBlock: BigNumber, bonusMultiplier: BigNumber, currentBlock: BigNumber, bonusEndBlock: BigNumber, rewardPrice: BigNumber): BigNumber;
export declare function calculateInterestRate(debt: BigNumber, floating: BigNumber, ceilSlope1: BigNumber, ceilSlope2: BigNumber, ceilSlope3: BigNumber, maxInterestSlope1: BigNumber, maxInterestSlope2: BigNumber, maxInterestSlope3: BigNumber): BigNumber;
export declare function getTradingFeePerDayWaultSwap(waultPair: WaultSwapFarmData): BigNumber;
export declare function calculateTradingFeePerYear(tradingFeePerDay: BigNumber): BigNumber;
/**
 * This is a function for calculating price impact based on token0Reserve/token1reserve, on 1 unit of token0 how much for token1
 * and then (`on 1 unit of token0 how much for token1) * inputAmount, this should be an ideal quote price
 * @param  {Price} midPrice - its a fraction between baseReserve/farmingReserve
 * @param  {CurrencyAmount} inputAmount
 * @param  {CurrencyAmount} outputAmount
 * @returns Percent
 */
export declare function computePriceImpactPerValue(isReversed: boolean, principal: BigintIsh, midPrice: Price, inputAmount: CurrencyAmount, outputAmount: CurrencyAmount): BigNumber;
/**
 * similar to value per sec... , how about 1 day?
 * @param  {BigNumber} valuePerBlock
 * @returns BigNumber
 */
export declare function calculateValueSecToDay(valuePerSec: BigNumber): BigNumber;
/**
 * similar to value per day... , how about 1 year?
 * @param  {BigNumber} valuePerBlock
 * @returns BigNumber
 */
export declare function calculateValueDayToYear(valuePerDay: BigNumber): BigNumber;
export declare function calculateUnderlayingLpTokeninUSD(balanceOfLpToken: BigNumber, totalT0: BigNumber, totalT1: BigNumber, totalSupply: BigNumber, t0InUSD: BigNumber, t1InUSD: BigNumber): [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
export declare function calcualateMinimumCollateralRequiredAmount(workFactorAdj: BigNumber, debtRatio: BigNumber, totalDebt: BigNumber, positionValue: BigNumber): BigNumber;
export declare function calcualateMinimumCollateralWithLoanRequiredAmount(positionValue: BigNumber, totalDebt: BigNumber, targetLeverage: BigNumber): BigNumber;
export declare function calculateEquityFromDebtRatio(positionValue: BigNumber, debtRatioPercent: BigNumber): BigNumber;
