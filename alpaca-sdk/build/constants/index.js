import { BigNumber } from '@ethersproject/bignumber';
import { getConfig } from './config';
import { ethers } from 'ethers';
import { isMainnet } from '../utils/view';
export const NetworkContextName = 'NETWORK';
export const NativeTokenSlug = 'binancecoin';
export const GasLimit = BigNumber.from('400000');
export const OpenPositionGasLimit = BigNumber.from('2200000');
export const ClosePositionGasLimit = BigNumber.from('2200000');
export const BlockConfirmation = 1;
export const MinimumLiquidity = BigNumber.from('1000');
export const MaxPercentage = BigNumber.from('10000'); // 100 percent with 2 decimal points to integer
export const BnBDecimalPoint = 18;
export const SlippageMaxPercent = ethers.utils.parseEther('30');
export const BlockTime = BigNumber.from(3); // 3 seconds -> 1 block
export const BlockNumberPerYear = BigNumber.from(60 * 60 * 24 * 365).div(BlockTime);
export const BasisPoint = BigNumber.from(10000);
export const YearInDay = 365;
export const WEEK_IN_YEAR = 52;
export const SECONDS_IN_WEEK = 60 * 60 * 24 * 7;
export const config = getConfig();
export const ChainId = isMainnet() ? 56 : 97;
// Fee BPS
export const LpPoolBuybackBps = BigNumber.from(500);
export const LpPoolTreasuryBps = BigNumber.from(400);
export const LpPoolPerformanceFeeBps = BigNumber.from(900);
export const SaPoolBuybackBps = BigNumber.from(1000);
export const SaPoolTreasuryBps = BigNumber.from(900);
export const SaPoolPerformanceFeeBps = BigNumber.from(1900);
export const InverseLpPoolBuybackBps = BasisPoint.sub(LpPoolBuybackBps);
export const InverseLpPoolTreasuryBps = BasisPoint.sub(LpPoolTreasuryBps);
export const InverseLpPoolPerformanceFeeBps = BasisPoint.sub(LpPoolPerformanceFeeBps);
export const InverseSaPoolBuybackBps = BasisPoint.sub(SaPoolBuybackBps);
export const InverseSaTreasuryBps = BasisPoint.sub(SaPoolTreasuryBps);
export const InverseSaPerformanceFeeBps = BasisPoint.sub(SaPoolPerformanceFeeBps);
// fdStakingPool AllocPoint
export const fdALPACAPoolAllocPoint = 300;
