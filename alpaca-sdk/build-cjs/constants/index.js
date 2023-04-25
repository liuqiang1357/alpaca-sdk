"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fdALPACAPoolAllocPoint = exports.InverseSaPerformanceFeeBps = exports.InverseSaTreasuryBps = exports.InverseSaPoolBuybackBps = exports.InverseLpPoolPerformanceFeeBps = exports.InverseLpPoolTreasuryBps = exports.InverseLpPoolBuybackBps = exports.SaPoolPerformanceFeeBps = exports.SaPoolTreasuryBps = exports.SaPoolBuybackBps = exports.LpPoolPerformanceFeeBps = exports.LpPoolTreasuryBps = exports.LpPoolBuybackBps = exports.ChainId = exports.config = exports.SECONDS_IN_WEEK = exports.WEEK_IN_YEAR = exports.YearInDay = exports.BasisPoint = exports.BlockNumberPerYear = exports.BlockTime = exports.SlippageMaxPercent = exports.BnBDecimalPoint = exports.MaxPercentage = exports.MinimumLiquidity = exports.BlockConfirmation = exports.ClosePositionGasLimit = exports.OpenPositionGasLimit = exports.GasLimit = exports.NativeTokenSlug = exports.NetworkContextName = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const config_1 = require("./config");
const ethers_1 = require("ethers");
const view_1 = require("../utils/view");
exports.NetworkContextName = 'NETWORK';
exports.NativeTokenSlug = 'binancecoin';
exports.GasLimit = bignumber_1.BigNumber.from('400000');
exports.OpenPositionGasLimit = bignumber_1.BigNumber.from('2200000');
exports.ClosePositionGasLimit = bignumber_1.BigNumber.from('2200000');
exports.BlockConfirmation = 1;
exports.MinimumLiquidity = bignumber_1.BigNumber.from('1000');
exports.MaxPercentage = bignumber_1.BigNumber.from('10000'); // 100 percent with 2 decimal points to integer
exports.BnBDecimalPoint = 18;
exports.SlippageMaxPercent = ethers_1.ethers.utils.parseEther('30');
exports.BlockTime = bignumber_1.BigNumber.from(3); // 3 seconds -> 1 block
exports.BlockNumberPerYear = bignumber_1.BigNumber.from(60 * 60 * 24 * 365).div(exports.BlockTime);
exports.BasisPoint = bignumber_1.BigNumber.from(10000);
exports.YearInDay = 365;
exports.WEEK_IN_YEAR = 52;
exports.SECONDS_IN_WEEK = 60 * 60 * 24 * 7;
exports.config = config_1.getConfig();
exports.ChainId = view_1.isMainnet() ? 56 : 97;
// Fee BPS
exports.LpPoolBuybackBps = bignumber_1.BigNumber.from(500);
exports.LpPoolTreasuryBps = bignumber_1.BigNumber.from(400);
exports.LpPoolPerformanceFeeBps = bignumber_1.BigNumber.from(900);
exports.SaPoolBuybackBps = bignumber_1.BigNumber.from(1000);
exports.SaPoolTreasuryBps = bignumber_1.BigNumber.from(900);
exports.SaPoolPerformanceFeeBps = bignumber_1.BigNumber.from(1900);
exports.InverseLpPoolBuybackBps = exports.BasisPoint.sub(exports.LpPoolBuybackBps);
exports.InverseLpPoolTreasuryBps = exports.BasisPoint.sub(exports.LpPoolTreasuryBps);
exports.InverseLpPoolPerformanceFeeBps = exports.BasisPoint.sub(exports.LpPoolPerformanceFeeBps);
exports.InverseSaPoolBuybackBps = exports.BasisPoint.sub(exports.SaPoolBuybackBps);
exports.InverseSaTreasuryBps = exports.BasisPoint.sub(exports.SaPoolTreasuryBps);
exports.InverseSaPerformanceFeeBps = exports.BasisPoint.sub(exports.SaPoolPerformanceFeeBps);
// fdStakingPool AllocPoint
exports.fdALPACAPoolAllocPoint = 300;
