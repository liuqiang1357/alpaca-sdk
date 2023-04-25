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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmingPoolCalculator = exports.FarmingWorkerCalculator = exports.FarmingPoolCalculatorFactory = void 0;
const helper_1 = require("../../utils/helper");
const calculation_1 = require("../../utils/calculation");
const constants_1 = require("@ethersproject/constants");
const WorkerCalculator_1 = require("./WorkerCalculator");
const constants_2 = require("../../constants");
const LendingPoolCalculator_1 = require("./LendingPoolCalculator");
const vault_1 = require("../../constants/vault");
const stakingPool_1 = require("../../constants/stakingPool");
const StakingPoolCalculator_1 = require("./StakingPoolCalculator");
const getPrice_1 = require("../getPrice");
const tokenProfile_1 = require("../../constants/tokenProfile");
const math_1 = require("../../utils/math");
const address_1 = require("../../utils/address");
const Multicall__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory");
const contracts_1 = require("../../constants/contracts");
const batchContractCaller_1 = require("../../libs/batchContractCaller");
const lodash_chunk_1 = __importDefault(require("lodash.chunk"));
const lodash_1 = require("lodash");
class FarmingPoolCalculatorFactory {
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
                    : new LendingPoolCalculator_1.LendingPoolCalculatorFactory(this.provider).create(...vault_1.vaults),
                this.debtStakingPoolCalculators
                    ? this.debtStakingPoolCalculators
                    : new StakingPoolCalculator_1.StakingPoolCalculatorFactory(this.provider).create(...stakingPool_1.debtStakingPoolsV2),
            ]);
            const farmingPoolChunks = lodash_chunk_1.default(_farmingPools, this.batchSize);
            const resultChunks = [];
            for (const farmingPoolChunk of farmingPoolChunks) {
                const resultChunk = yield Promise.all(farmingPoolChunk.map((_farmingPool) => {
                    return this.createOne(_farmingPool, lendingPoolCalculators, debtStakingPoolCalculators);
                }));
                resultChunks.push(resultChunk);
            }
            return lodash_1.flatten(resultChunks);
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
            const rewardToken = tokenProfile_1.mapAddressTokenProfiles[_farmingPool.dex.rewardTokenAddress.toLowerCase()];
            const currentBlock = yield this.provider.getBlockNumber();
            const [{ farmRewardPerBlock, allocPoint, totalAllocPoint }, rewardTokenPrice, workerCalculators] = yield Promise.all([
                this.getData(_farmingPool, currentBlock),
                getPrice_1.getTokenPrice(rewardToken, this.provider),
                new WorkerCalculator_1.WorkerCalculatorFactory(this.provider).create(..._farmingPool.configs),
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
            const multicall = Multicall__factory_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const [farmRewardPerBlock, { allocPoint }, totalAllocPoint] = yield new batchContractCaller_1.BatchContractCaller([
                helper_1.getFarmRewardPerBlockContractCall(farmingPool.dex, currentBlock, this.provider),
                helper_1.getPoolInfoContractCall(farmingPool.dex, farmingPool.pId, this.provider),
                {
                    contract: helper_1.getGenericMasterChefContract(farmingPool.dex, this.provider),
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
exports.FarmingPoolCalculatorFactory = FarmingPoolCalculatorFactory;
class FarmingWorkerCalculator {
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
        return this.farmRewardPerBlock.mul(this.farmRewardTokenPrice).div(constants_1.WeiPerEther);
    }
    get farmRewardValuePerYear() {
        return calculation_1.calculateRewardValuePerYear(this.farmRewardValuePerBlock);
    }
    get yearlyFarmRewardRateWithoutFee() {
        if (this.workerCalculator.tvlInMasterChef.isZero())
            return constants_1.Zero;
        return this.farmRewardValuePerYear.mul(constants_1.WeiPerEther).div(this.workerCalculator.tvlInMasterChef);
    }
    yearlyFarmRewardRate(leverage) {
        // apply performance fee
        return this.yearlyFarmRewardRateWithoutFee
            .mul(leverage)
            .mul(this.inverseOfPerformanceFee)
            .div(constants_2.BasisPoint)
            .div(constants_1.WeiPerEther);
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
        const yearlyTradingFeeApr = _yearlyTradingFeeApr.mul(leverage).div(constants_1.WeiPerEther);
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
        return calculation_1.calculateAPY(this.dailyTotalRate(yearlyTradingFeeApr, leverage), 365);
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
        return this.workerCalculator.isLPWorker ? constants_2.InverseLpPoolPerformanceFeeBps : constants_2.InverseSaPerformanceFeeBps;
    }
    mulWithLeverageDebt(n, levergage) {
        return n.mul(levergage.sub(constants_1.WeiPerEther)).div(constants_1.WeiPerEther);
    }
    mulWithMaxLeverageDebt(n) {
        return this.mulWithLeverageDebt(n, this.maxLeverage);
    }
    rateToPercent(n) {
        return n.mul(100);
    }
}
exports.FarmingWorkerCalculator = FarmingWorkerCalculator;
class FarmingPoolCalculator {
    constructor(_data, _lendingPoolCalculators, _debtStakingPoolCalculators, _workerCalculators) {
        this.data = _data;
        this.lendingPoolCalculators = _lendingPoolCalculators;
        this.debtStakingPoolCalculators = _debtStakingPoolCalculators;
        this.workerCalculators = _workerCalculators;
        this.farmingWorkerCalculators = this.workerCalculators.map((workerCalculator) => {
            const vaultAddress = workerCalculator.farmingConfig.vault.address;
            const debtTokenAddress = workerCalculator.farmingConfig.vault.debtToken.address;
            const lendingPoolCalculator = this.lendingPoolCalculators.find((cal) => address_1.compare(cal.vault.address, vaultAddress));
            if (!lendingPoolCalculator)
                throw new Error(`FarmingPoolCalculator::constructor: cannot find lendingPoolCalculator by vault(${vaultAddress})`);
            const debtStakingPoolCalculator = this.debtStakingPoolCalculators.find((cal) => address_1.compare(tokenProfile_1.getTokenAddress(cal.stakePool.stakingToken), debtTokenAddress));
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
        return this.farmingPool.isSingleAsset() ? constants_2.SaPoolBuybackBps : constants_2.LpPoolBuybackBps;
    }
    get tvlInMasterChef() {
        return this.farmingWorkerCalculators[0].tvlInMasterChef;
    }
    get tvl() {
        // sum all tvl of underlying workers
        return this.farmingWorkerCalculators.reduce((sum, calculator) => {
            return sum.add(calculator.tvl);
        }, constants_1.Zero);
    }
    get workerCalculatorWithHighestAprAtMaxLeverage() {
        const index = math_1.indexOfMaxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApr(constants_1.Zero);
        }));
        return this.farmingWorkerCalculators[index];
    }
    get maxLeverage() {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxLeverage;
        }));
    }
    get maxFarmRewardApr() {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxYearlyFarmRewardApr;
        }));
    }
    get maxDebtRewardApr() {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxYearlyDebtRewardApr;
        }));
    }
    maxTotalApr(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(
        // at max leverage
        this.maxTotalAprAtMaxLeverage(yearlyTradingFeeApr), 
        // at 1x leverage
        this.maxTotalAprAt1xLeverage(yearlyTradingFeeApr));
    }
    maxTotalAprAt1xLeverage(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.totalApr(yearlyTradingFeeApr, constants_1.WeiPerEther);
        }));
    }
    maxTotalAprAtMaxLeverage(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApr(yearlyTradingFeeApr);
        }));
    }
    maxTotalApy(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(
        // at max leverage
        this.maxTotalApyAtMaxLeverage(yearlyTradingFeeApr), 
        // at 1x leverage
        this.maxTotalApyAt1xLeverage(yearlyTradingFeeApr));
    }
    maxTotalApyAt1xLeverage(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.totalApy(yearlyTradingFeeApr, constants_1.WeiPerEther);
        }));
    }
    maxTotalApyAtMaxLeverage(yearlyTradingFeeApr) {
        return math_1.maxBigNumber(...this.farmingWorkerCalculators.map((calculator) => {
            return calculator.maxTotalApy(yearlyTradingFeeApr);
        }));
    }
}
exports.FarmingPoolCalculator = FarmingPoolCalculator;
