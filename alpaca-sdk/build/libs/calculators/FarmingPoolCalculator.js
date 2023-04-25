var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFarmRewardPerBlockContractCall, getGenericMasterChefContract, getPoolInfoContractCall, } from '../../utils/helper';
import { calculateAPY, calculateRewardValuePerYear } from '../../utils/calculation';
import { WeiPerEther, Zero } from '@ethersproject/constants';
import { WorkerCalculatorFactory } from './WorkerCalculator';
import { BasisPoint, InverseSaPerformanceFeeBps, InverseLpPoolPerformanceFeeBps, LpPoolBuybackBps, SaPoolBuybackBps, } from '../../constants';
import { LendingPoolCalculatorFactory } from './LendingPoolCalculator';
import { vaults } from '../../constants/vault';
import { debtStakingPoolsV2 } from '../../constants/stakingPool';
import { StakingPoolCalculatorFactory } from './StakingPoolCalculator';
import { getTokenPrice } from '../getPrice';
import { getTokenAddress, mapAddressTokenProfiles } from '../../constants/tokenProfile';
import { indexOfMaxBigNumber, maxBigNumber } from '../../utils/math';
import { compare } from '../../utils/address';
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { MulticallAddress } from '../../constants/contracts';
import { BatchContractCaller } from '../../libs/batchContractCaller';
import chunk from 'lodash.chunk';
import { flatten } from 'lodash';
export class FarmingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
        this.batchSize = 200;
    }
    setLendingPoolCalculators(_lendingPoolCalculators) {
        this.lendingPoolCalculators = _lendingPoolCalculators;
        return this;
    }
    setDebtStakingPoolCalculators(_debtStakingPoolCalculators) {
        this.debtStakingPoolCalculators = _debtStakingPoolCalculators;
        return this;
    }
    create(..._farmingPools) {
        return __awaiter(this, void 0, void 0, function* () {
            const [lendingPoolCalculators, debtStakingPoolCalculators] = yield Promise.all([
                this.lendingPoolCalculators
                    ? this.lendingPoolCalculators
                    : new LendingPoolCalculatorFactory(this.provider).create(...vaults),
                this.debtStakingPoolCalculators
                    ? this.debtStakingPoolCalculators
                    : new StakingPoolCalculatorFactory(this.provider).create(...debtStakingPoolsV2),
            ]);
            const farmingPoolChunks = chunk(_farmingPools, this.batchSize);
            const resultChunks = [];
            for (const farmingPoolChunk of farmingPoolChunks) {
                const resultChunk = yield Promise.all(farmingPoolChunk.map((_farmingPool) => {
                    return this.createOne(_farmingPool, lendingPoolCalculators, debtStakingPoolCalculators);
                }));
                resultChunks.push(resultChunk);
            }
            return flatten(resultChunks);
        });
    }
    createWithInjectedCalculators(_farmingPools, _lendingPoolCalculators, _debtStakingPoolCalculators) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_farmingPools.map((_farmingPool) => {
                return this.createOne(_farmingPool, _lendingPoolCalculators, _debtStakingPoolCalculators);
            }));
        });
    }
    createOne(_farmingPool, _lendingPoolCalculators, _debtStakingPoolCalculators) {
        return __awaiter(this, void 0, void 0, function* () {
            const rewardToken = mapAddressTokenProfiles[_farmingPool.dex.rewardTokenAddress.toLowerCase()];
            const currentBlock = yield this.provider.getBlockNumber();
            const [{ farmRewardPerBlock, allocPoint, totalAllocPoint }, rewardTokenPrice, workerCalculators] = yield Promise.all([
                this.getData(_farmingPool, currentBlock),
                getTokenPrice(rewardToken, this.provider),
                new WorkerCalculatorFactory(this.provider).create(..._farmingPool.configs),
            ]);
            const rewardPerBlock = farmRewardPerBlock.mul(allocPoint).div(totalAllocPoint);
            return new FarmingPoolCalculator({
                farmingPoolConfig: _farmingPool,
                rewardPerBlock,
                rewardTokenPrice,
                allocPoint,
                totalAllocPoint,
            }, _lendingPoolCalculators, _debtStakingPoolCalculators, workerCalculators);
        });
    }
    getData(farmingPool, currentBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const [farmRewardPerBlock, { allocPoint }, totalAllocPoint] = yield new BatchContractCaller([
                getFarmRewardPerBlockContractCall(farmingPool.dex, currentBlock, this.provider),
                getPoolInfoContractCall(farmingPool.dex, farmingPool.pId, this.provider),
                {
                    contract: getGenericMasterChefContract(farmingPool.dex, this.provider),
                    functionName: 'totalAllocPoint',
                },
            ]).multicall(multicall);
            return {
                farmRewardPerBlock,
                allocPoint,
                totalAllocPoint,
            };
        });
    }
}
export class FarmingWorkerCalculator {
    constructor(_farmingPoolCalculationData, _lendingPoolCalculator, _debtStakingPoolCalculator, _workerCalculator) {
        this.farmingPoolCalculationData = _farmingPoolCalculationData;
        this.lendingPoolCalculator = _lendingPoolCalculator;
        this.debtStakingPoolCalculator = _debtStakingPoolCalculator;
        this.workerCalculator = _workerCalculator;
    }
    get farmingConfig() {
        return this.workerCalculator.farmingConfig;
    }
    get allocPoint() {
        return this.farmingPoolCalculationData.allocPoint;
    }
    get totalAllocPoint() {
        return this.farmingPoolCalculationData.totalAllocPoint;
    }
    get maxLeverage() {
        return this.workerCalculator.maxLeverage;
    }
    get tvl() {
        return this.workerCalculator.tvlInWorker;
    }
    get tvlInMasterChef() {
        return this.workerCalculator.tvlInMasterChef;
    }
    // Borrowing interest
    dailyBorrowingInterestRate(levergage) {
        return this.mulWithLeverageDebt(this.lendingPoolCalculator.dailyBorrowingInterestRate, levergage);
    }
    yearlyBorrowingInterestRate(levergage) {
        return this.mulWithLeverageDebt(this.lendingPoolCalculator.yearlyBorrowingInterestRate, levergage);
    }
    get maxDailyBorrowingInterestRate() {
        return this.mulWithMaxLeverageDebt(this.lendingPoolCalculator.dailyBorrowingInterestRate);
    }
    get maxYearlyBorrowingInterestRate() {
        return this.mulWithMaxLeverageDebt(this.lendingPoolCalculator.yearlyBorrowingInterestRate);
    }
    dailyBorrowingInterestPercent(leverage) {
        return this.rateToPercent(this.dailyBorrowingInterestRate(leverage));
    }
    yearlyBorrowingInterestPercent(leverage) {
        return this.rateToPercent(this.yearlyBorrowingInterestRate(leverage));
    }
    get maxDailyBorrowingInterestPercent() {
        return this.rateToPercent(this.maxDailyBorrowingInterestRate);
    }
    get maxYearlyBorrowingInterestPercent() {
        return this.rateToPercent(this.maxYearlyBorrowingInterestRate);
    }
    // Debt reward
    dailyDebtRewardRate(levergage) {
        return this.mulWithLeverageDebt(this.debtStakingPoolCalculator.dailyRewardRate, levergage);
    }
    yearlyDebtRewardRate(levergage) {
        return this.mulWithLeverageDebt(this.debtStakingPoolCalculator.yearlyRewardRate, levergage);
    }
    get maxDailyDebtRewardRate() {
        return this.mulWithMaxLeverageDebt(this.debtStakingPoolCalculator.dailyRewardRate);
    }
    get maxYearlyDebtRewardRate() {
        return this.mulWithMaxLeverageDebt(this.debtStakingPoolCalculator.yearlyRewardRate);
    }
    dailyDebtRewardApr(levergage) {
        return this.mulWithLeverageDebt(this.debtStakingPoolCalculator.dailyRewardApr, levergage);
    }
    yearlyDebtRewardApr(levergage) {
        return this.mulWithLeverageDebt(this.debtStakingPoolCalculator.yearlyRewardApr, levergage);
    }
    get maxDailyDebtRewardApr() {
        return this.rateToPercent(this.maxDailyDebtRewardRate);
    }
    get maxYearlyDebtRewardApr() {
        return this.rateToPercent(this.maxYearlyDebtRewardRate);
    }
    // Farm reward
    get farmRewardPerBlock() {
        return this.farmingPoolCalculationData.rewardPerBlock;
    }
    get farmRewardTokenPrice() {
        return this.farmingPoolCalculationData.rewardTokenPrice;
    }
    get farmRewardValuePerBlock() {
        return this.farmRewardPerBlock.mul(this.farmRewardTokenPrice).div(WeiPerEther);
    }
    get farmRewardValuePerYear() {
        return calculateRewardValuePerYear(this.farmRewardValuePerBlock);
    }
    get yearlyFarmRewardRateWithoutFee() {
        if (this.workerCalculator.tvlInMasterChef.isZero())
            return Zero;
        return this.farmRewardValuePerYear.mul(WeiPerEther).div(this.workerCalculator.tvlInMasterChef);
    }
    yearlyFarmRewardRate(leverage) {
        // apply performance fee
        return this.yearlyFarmRewardRateWithoutFee
            .mul(leverage)
            .mul(this.inverseOfPerformanceFee)
            .div(BasisPoint)
            .div(WeiPerEther);
    }
    dailyFarmRewardRate(leverage) {
        return this.yearlyFarmRewardRate(leverage).div(365);
    }
    get maxYearlyFarmRewardRate() {
        return this.yearlyFarmRewardRate(this.maxLeverage);
    }
    get maxDailyFarmRewardRate() {
        return this.dailyFarmRewardRate(this.maxLeverage);
    }
    yearlyFarmRewardApr(leverage) {
        return this.rateToPercent(this.yearlyFarmRewardRate(leverage));
    }
    dailyFarmRewardApr(leverage) {
        return this.rateToPercent(this.dailyFarmRewardRate(leverage));
    }
    get maxYearlyFarmRewardApr() {
        return this.yearlyFarmRewardApr(this.maxLeverage);
    }
    get maxDailyFarmRewardApr() {
        return this.dailyFarmRewardApr(this.maxLeverage);
    }
    // Sum everything up
    totalApr(_yearlyTradingFeeApr, leverage) {
        const yearlyFarmRewardApr = this.yearlyFarmRewardApr(leverage);
        const yearlyTradingFeeApr = _yearlyTradingFeeApr.mul(leverage).div(WeiPerEther);
        const yearlyBorrowingInterestPercent = this.yearlyBorrowingInterestPercent(leverage);
        const yearlyDebtRewardApr = this.yearlyDebtRewardApr(leverage);
        const totalApr = yearlyFarmRewardApr
            .add(yearlyTradingFeeApr)
            .add(yearlyDebtRewardApr)
            .sub(yearlyBorrowingInterestPercent);
        return totalApr;
    }
    dailyTotalApr(yearlyTradingFeeApr, leverage) {
        return this.totalApr(yearlyTradingFeeApr, leverage).div(365);
    }
    totalRate(yearlyTradingFeeApr, leverage) {
        return this.totalApr(yearlyTradingFeeApr, leverage).div(100);
    }
    dailyTotalRate(yearlyTradingFeeApr, leverage) {
        return this.totalRate(yearlyTradingFeeApr, leverage).div(365);
    }
    totalApy(yearlyTradingFeeApr, leverage) {
        return calculateAPY(this.dailyTotalRate(yearlyTradingFeeApr, leverage), 365);
    }
    maxTotalApr(yearlyTradingFeeApr) {
        return this.totalApr(yearlyTradingFeeApr, this.maxLeverage);
    }
    maxDailyTotalApr(yearlyTradingFeeApr) {
        return this.maxTotalApr(yearlyTradingFeeApr).div(365);
    }
    maxTotalApy(yearlyTradingFeeApr) {
        return this.totalApy(yearlyTradingFeeApr, this.maxLeverage);
    }
    get inverseOfPerformanceFee() {
        return this.workerCalculator.isLPWorker ? InverseLpPoolPerformanceFeeBps : InverseSaPerformanceFeeBps;
    }
    mulWithLeverageDebt(n, levergage) {
        return n.mul(levergage.sub(WeiPerEther)).div(WeiPerEther);
    }
    mulWithMaxLeverageDebt(n) {
        return this.mulWithLeverageDebt(n, this.maxLeverage);
    }
    rateToPercent(n) {
        return n.mul(100);
    }
}
export class FarmingPoolCalculator {
    constructor(_data, _lendingPoolCalculators, _debtStakingPoolCalculators, _workerCalculators) {
        this.data = _data;
        this.lendingPoolCalculators = _lendingPoolCalculators;
        this.debtStakingPoolCalculators = _debtStakingPoolCalculators;
        this.workerCalculators = _workerCalculators;
        this.farmingWorkerCalculators = this.workerCalculators.map((workerCalculator) => {
            const vaultAddress = workerCalculator.farmingConfig.vault.address;
            const debtTokenAddress = workerCalculator.farmingConfig.vault.debtToken.address;
            const lendingPoolCalculator = this.lendingPoolCalculators.find((cal) => compare(cal.vault.address, vaultAddress));
            if (!lendingPoolCalculator)
                throw new Error(`FarmingPoolCalculator::constructor: cannot find lendingPoolCalculator by vault(${vaultAddress})`);
            const debtStakingPoolCalculator = this.debtStakingPoolCalculators.find((cal) => compare(getTokenAddress(cal.stakePool.stakingToken), debtTokenAddress));
            if (!debtStakingPoolCalculator)
                throw new Error(`FarmingPoolCalculator::constructor: cannot find debtStakingPoolCalculator by debtToken(${debtTokenAddress})`);
            return new FarmingWorkerCalculator(this.data, lendingPoolCalculator, debtStakingPoolCalculator, workerCalculator);
        });
    }
    get farmingPool() {
        return this.data.farmingPoolConfig;
    }
    get rewardPerBlock() {
        return this.data.rewardPerBlock;
    }
    get rewardTokenPrice() {
        return this.data.rewardTokenPrice;
    }
    get allocPoint() {
        return this.data.allocPoint;
    }
    get totalAllocPoint() {
        return this.data.totalAllocPoint;
    }
    get buyBackBps() {
        return this.farmingPool.isSingleAsset() ? SaPoolBuybackBps : LpPoolBuybackBps;
    }
    get tvlInMasterChef() {
        return this.farmingWorkerCalculators[0].tvlInMasterChef;
    }
    get tvl() {
        // sum all tvl of underlying workers
        return this.farmingWorkerCalculators.reduce((sum, calculator) => {
            return sum.add(calculator.tvl);
        }, Zero);
    }
    get workerCalculatorWithHighestAprAtMaxLeverage() {
        const index = indexOfMaxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApr(Zero);
        }));
        return this.farmingWorkerCalculators[index];
    }
    get maxLeverage() {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxLeverage;
        }));
    }
    get maxFarmRewardApr() {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxYearlyFarmRewardApr;
        }));
    }
    get maxDebtRewardApr() {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxYearlyDebtRewardApr;
        }));
    }
    maxTotalApr(yearlyTradingFeeApr) {
        return maxBigNumber(
        // at max leverage
        this.maxTotalAprAtMaxLeverage(yearlyTradingFeeApr), 
        // at 1x leverage
        this.maxTotalAprAt1xLeverage(yearlyTradingFeeApr));
    }
    maxTotalAprAt1xLeverage(yearlyTradingFeeApr) {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.totalApr(yearlyTradingFeeApr, WeiPerEther);
        }));
    }
    maxTotalAprAtMaxLeverage(yearlyTradingFeeApr) {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApr(yearlyTradingFeeApr);
        }));
    }
    maxTotalApy(yearlyTradingFeeApr) {
        return maxBigNumber(
        // at max leverage
        this.maxTotalApyAtMaxLeverage(yearlyTradingFeeApr), 
        // at 1x leverage
        this.maxTotalApyAt1xLeverage(yearlyTradingFeeApr));
    }
    maxTotalApyAt1xLeverage(yearlyTradingFeeApr) {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.totalApy(yearlyTradingFeeApr, WeiPerEther);
        }));
    }
    maxTotalApyAtMaxLeverage(yearlyTradingFeeApr) {
        return maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApy(yearlyTradingFeeApr);
        }));
    }
}
