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
exports.GrasshouseCalculator = exports.AlpacaGrasshouseCalculatorFactory = exports.ScientixGrassHouseCalculatorFactory = exports.DefaultGrasshouseCalculatorFactory = exports.GrasshouseCalculatorFactory = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const constants_1 = require("@ethersproject/constants");
const XALPACA__factory_1 = require("@alpaca-finance/xalpaca-contract/typechain/factories/XALPACA__factory");
const FairLaunch__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/FairLaunch__factory");
const entity_1 = require("../../entity");
const constants_2 = require("../../constants");
const xAlpacaContract_1 = require("../../constants/xAlpacaContract");
const getPrice_1 = require("../../libs/getPrice");
const grassHouse_1 = require("../../utils/grassHouse");
const calculation_1 = require("../../utils/calculation");
const contracts_1 = require("../../constants/contracts");
const axios_1 = __importDefault(require("axios"));
const tokenProfile_1 = require("../../constants/tokenProfile");
const math_1 = require("../../utils/math");
const batchContractCaller_1 = require("../batchContractCaller");
const Multicall__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory");
const StakingPools__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/StakingPools__factory");
const pools_1 = require("../../constants/pools");
class GrasshouseCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    setFarmingPoolCalculators(_farmingPoolCalculators) {
        this.farmingPoolCalculators = _farmingPoolCalculators;
        return this;
    }
    create(..._grasshousePools) {
        return __awaiter(this, void 0, void 0, function* () {
            const blockNumber = yield this.provider.getBlockNumber();
            const { timestamp } = yield this.provider.getBlock(blockNumber);
            const xAlpaca = XALPACA__factory_1.XALPACA__factory.connect(xAlpacaContract_1.XALPACAAddress, this.provider);
            const [xAlpacaTotalSupply, alpacaPrice] = yield Promise.all([
                xAlpaca.totalSupply(),
                getPrice_1.getTokenPrice(tokenProfile_1.mapTokenProfiles[entity_1.TokenSymbol.ALPACA], this.provider),
            ]);
            return Promise.all(_grasshousePools.map((_grasshousePool) => __awaiter(this, void 0, void 0, function* () {
                switch (_grasshousePool.type) {
                    case entity_1.GrassHouseType.AlpacaGrassHouse: {
                        return (yield new AlpacaGrasshouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice, timestamp)
                            .setFarmingPoolCalculators(this.farmingPoolCalculators || [])
                            .create(_grasshousePool))[0];
                    }
                    case entity_1.GrassHouseType.ScientixGrassHouse: {
                        return (yield new ScientixGrassHouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice).create(_grasshousePool))[0];
                    }
                    case entity_1.GrassHouseType.DefaultGrassHouse: {
                        return (yield new DefaultGrasshouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice, timestamp).create(_grasshousePool))[0];
                    }
                    default:
                        throw new Error('GrasshouseCalculator::calculate: unsupported grasshouse pool type');
                }
            })));
        });
    }
}
exports.GrasshouseCalculatorFactory = GrasshouseCalculatorFactory;
class DefaultGrasshouseCalculatorFactory {
    constructor(_provider, xAlpacaTotalSupply, alpacaPrice, timestamp) {
        this.provider = _provider;
        this.xAlpacaTotalSupply = xAlpacaTotalSupply;
        this.alpacaPrice = alpacaPrice;
        this.timestamp = timestamp;
    }
    create(..._grasshousePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grasshousePools.map((_grasshouse) => this._create(_grasshouse)));
        });
    }
    _create(_grasshousePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const rewardStartIn = grassHouse_1.findRewardStartTime(_grasshousePool);
            const rewardEndIn = grassHouse_1.findRewardEndTime(_grasshousePool);
            //  PROJECTILE REWARD FOR 1 WEEK, Otherwise reward set as Zero
            if (rewardStartIn && this.timestamp < rewardStartIn - constants_2.SECONDS_IN_WEEK) {
                return new GrasshouseCalculator({
                    grasshousePool: _grasshousePool,
                    rate: constants_1.Zero,
                });
            }
            if (rewardEndIn && this.timestamp > rewardEndIn) {
                return new GrasshouseCalculator({
                    grasshousePool: _grasshousePool,
                    rate: constants_1.Zero,
                });
            }
            const rewardTokenPrice = yield getPrice_1.getTokenPrice(_grasshousePool.rewardToken, this.provider);
            // Weekly index support projectile for first week
            const weekIndex = grassHouse_1.findWeeklyRewardIndex(_grasshousePool, this.timestamp);
            const rewardTokenYearly = _grasshousePool.weeklyReward[weekIndex].rewardAmount.mul(constants_2.WEEK_IN_YEAR);
            const rewardValuePerYear = rewardTokenYearly.mul(rewardTokenPrice).div(constants_1.WeiPerEther);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(constants_1.WeiPerEther)
                : constants_1.WeiPerEther;
            const rate = rewardValuePerYear.mul(constants_1.WeiPerEther).div(totalxAlpacaValue);
            return new GrasshouseCalculator({
                grasshousePool: _grasshousePool,
                rate: rate,
            });
        });
    }
}
exports.DefaultGrasshouseCalculatorFactory = DefaultGrasshouseCalculatorFactory;
class ScientixGrassHouseCalculatorFactory {
    constructor(_provider, xAlpacaTotalSupply, alpacaPrice) {
        this.provider = _provider;
        this.xAlpacaTotalSupply = xAlpacaTotalSupply;
        this.alpacaPrice = alpacaPrice;
    }
    create(..._grasshousePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grasshousePools.map((_grasshouse) => this._create(_grasshouse)));
        });
    }
    _create(_grasshousePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const poolId = pools_1.ScientixGrassHousePoolId;
            const blockNumber = yield this.provider.getBlockNumber();
            const rewardTokenPrice = yield getPrice_1.getTokenPrice(_grasshousePool.rewardToken, this.provider);
            const rewardPerBlock = yield this.getRewardPerBlock(poolId, ethers_1.BigNumber.from(blockNumber));
            const rewardTokenYearly = calculation_1.calculateRewardValuePerYear(rewardPerBlock);
            const totalxAlpacaValue = this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(constants_1.WeiPerEther);
            const rewardValuePerYear = rewardTokenYearly.mul(rewardTokenPrice).div(constants_1.WeiPerEther);
            const rate = rewardValuePerYear.mul(constants_1.WeiPerEther).div(totalxAlpacaValue);
            return new GrasshouseCalculator({
                grasshousePool: _grasshousePool,
                rate: rate,
            });
        });
    }
    getBlockReward(poolId, fromBlock, toBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const scientix = StakingPools__factory_1.StakingPools__factory.connect(contracts_1.ScientixStakingPoolsAddress, this.provider);
            // get data
            const [rewardWeight, startBlock, blocksPerEpoch, totalReducedEpochs, rewardRate, reducedRewardRatePerEpoch, totalRewardWeight,] = yield new batchContractCaller_1.BatchContractCaller([
                {
                    contract: scientix,
                    functionName: 'getPoolRewardWeight',
                    params: [poolId],
                },
                {
                    contract: scientix,
                    functionName: 'startBlock',
                },
                {
                    contract: scientix,
                    functionName: 'blocksPerEpoch',
                },
                {
                    contract: scientix,
                    functionName: 'totalReducedEpochs',
                },
                {
                    contract: scientix,
                    functionName: 'rewardRate',
                },
                {
                    contract: scientix,
                    functionName: 'reducedRewardRatePerEpoch',
                },
                {
                    contract: scientix,
                    functionName: 'totalRewardWeight',
                },
            ]).multicall(multicall);
            const lastReductionBlock = startBlock.mul(blocksPerEpoch).mul(totalReducedEpochs);
            if (fromBlock.gte(lastReductionBlock)) {
                return rewardRate
                    .sub(reducedRewardRatePerEpoch.mul(totalReducedEpochs))
                    .mul(rewardWeight)
                    .div(totalRewardWeight)
                    .mul(toBlock.sub(fromBlock));
            }
            let totalRewards = constants_1.Zero;
            if (toBlock.gt(lastReductionBlock)) {
                totalRewards = rewardRate
                    .sub(reducedRewardRatePerEpoch.mul(totalReducedEpochs))
                    .mul(rewardWeight)
                    .div(totalRewardWeight)
                    .mul(toBlock.sub(lastReductionBlock));
                toBlock = lastReductionBlock;
            }
            /**
             * Decalre function here to make a simple access to data that has already been fetched
             * Copied from https://github.com/ScientixFinance/scientix-contract/blob/513729b77d383a0e9e7f3e3f8a02f4068c0d1cae/contracts/libraries/pools/Pool.sol#L102
             */
            function getReduceBlockReward() {
                fromBlock = math_1.maxBigNumber(startBlock, fromBlock);
                if (fromBlock.gte(toBlock)) {
                    return constants_1.Zero;
                }
                let epochBegin = startBlock.add(blocksPerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let epochEnd = epochBegin.add(blocksPerEpoch);
                let rewardPerBlock = rewardRate.sub(reducedRewardRatePerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let totalRewards = constants_1.Zero;
                while (toBlock > epochBegin) {
                    const left = math_1.maxBigNumber(epochBegin, fromBlock);
                    const right = math_1.minBigNumber(epochEnd, toBlock);
                    if (right.gt(left)) {
                        const reward = rewardPerBlock.mul(rewardWeight).div(totalRewardWeight).mul(right.sub(left));
                        totalRewards = totalRewards.add(reward);
                    }
                    rewardPerBlock = rewardPerBlock.sub(reducedRewardRatePerEpoch);
                    epochBegin = epochEnd;
                    epochEnd = epochBegin.add(blocksPerEpoch);
                }
                return totalRewards;
            }
            const reducedBlockReward = getReduceBlockReward();
            return totalRewards.add(reducedBlockReward);
        });
    }
    getRewardPerBlock(poolId, currentBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const [from, to] = [currentBlock, currentBlock.add(1)];
            return this.getBlockReward(ethers_1.BigNumber.from(poolId), from, to);
        });
    }
}
exports.ScientixGrassHouseCalculatorFactory = ScientixGrassHouseCalculatorFactory;
class AlpacaGrasshouseCalculatorFactory {
    constructor(_provider, xAlpacaTotalSupply, alpacaPrice, timestamp) {
        this.provider = _provider;
        this.xAlpacaTotalSupply = xAlpacaTotalSupply;
        this.alpacaPrice = alpacaPrice;
        this.timestamp = timestamp;
    }
    setFarmingPoolCalculators(_farmingPoolCalculators) {
        this.farmingPoolCalculators = _farmingPoolCalculators;
        return this;
    }
    create(..._grasshousePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grasshousePools.map((_grasshouse) => this._create(_grasshouse)));
        });
    }
    _create(_grasshousePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [fairLaunchRate, reInvestBuyBackRate] = yield Promise.all([
                this.calculateFairLaunchfdALPACAStakingRate(),
                this.calculateReInvestBuyBackRateStaticAPI(),
            ]);
            const rate = reInvestBuyBackRate.add(fairLaunchRate);
            return new GrasshouseCalculator({
                grasshousePool: _grasshousePool,
                rate: rate,
                alpacaGrassHouseDetail: {
                    fairLaunchRate,
                    reinvestBuyBackRate: reInvestBuyBackRate,
                },
            });
        });
    }
    calculateFairLaunchfdALPACAStakingRate() {
        return __awaiter(this, void 0, void 0, function* () {
            const fairLaunch = FairLaunch__factory_1.FairLaunch__factory.connect(contracts_1.FairLaunchAddress, this.provider);
            const [alpacaRewardPerBlock, totalAllocPoint] = yield Promise.all([
                fairLaunch.alpacaPerBlock(),
                fairLaunch.totalAllocPoint(),
            ]);
            const alpacaRewardForfdPoolPerBlock = alpacaRewardPerBlock.mul(constants_2.fdALPACAPoolAllocPoint).div(totalAllocPoint);
            const rewardValuePerBlock = alpacaRewardForfdPoolPerBlock.mul(this.alpacaPrice).div(constants_1.WeiPerEther);
            const rewardValuePerYear = calculation_1.calculateRewardValuePerYear(rewardValuePerBlock);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(constants_1.WeiPerEther)
                : constants_1.WeiPerEther;
            const rate = rewardValuePerYear.mul(constants_1.WeiPerEther).div(totalxAlpacaValue);
            return rate;
        });
    }
    calculateReInvestBuyBackRateStaticAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://alpaca-static-api.alpacafinance.org/v1/landing/summary.json';
            let pcsFarmingPools;
            if (!this.farmingPoolCalculators) {
                let response;
                try {
                    response = yield axios_1.default.get(url);
                }
                catch (error) {
                    throw new Error('response from data source not ok');
                }
                const summary = (yield response.data).data;
                pcsFarmingPools = summary.farmingPools.filter((pool) => pool.sourceName.includes('PancakeSwap'));
            }
            else {
                pcsFarmingPools = this.farmingPoolCalculators
                    .filter((pool) => pool.farmingPool.name.includes('PancakeSwap'))
                    .map((pool) => ({
                    sourceName: pool.farmingPool.name,
                    farmRewardValuePerYear: utils_1.formatEther(pool.workerCalculatorWithHighestAprAtMaxLeverage.farmRewardValuePerYear),
                    tvl: utils_1.formatEther(pool.tvl),
                    tvlInMasterChef: utils_1.formatEther(pool.tvlInMasterChef),
                }));
            }
            const totalBuyBackReducer = (sum, cur) => {
                const buyBackBps = cur.sourceName === 'PancakeSwap CAKEMaxi' ? constants_2.SaPoolBuybackBps : constants_2.LpPoolBuybackBps;
                const buybackValue = Number(cur.tvlInMasterChef) > 0
                    ? (Number(cur.farmRewardValuePerYear) * cur.tvl * buyBackBps.toNumber()) /
                        (Number(cur.tvlInMasterChef) * constants_2.BasisPoint.toNumber())
                    : 0;
                return sum + buybackValue;
            };
            const totalBuybackPortionValue = pcsFarmingPools.reduce(totalBuyBackReducer, 0);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(constants_1.WeiPerEther)
                : constants_1.WeiPerEther;
            const rate = utils_1.parseEther(totalBuybackPortionValue.toString()).mul(constants_1.WeiPerEther).div(totalxAlpacaValue);
            return rate;
        });
    }
}
exports.AlpacaGrasshouseCalculatorFactory = AlpacaGrasshouseCalculatorFactory;
class GrasshouseCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get grasshousePool() {
        return this.data.grasshousePool;
    }
    get apr() {
        return this.data.rate.mul(100);
    }
    apy(compoundRatePerYear) {
        return calculation_1.calculateAPY(this.data.rate.div(compoundRatePerYear), compoundRatePerYear);
    }
    alpacaEmissionRewardApr() {
        return this.data.alpacaGrassHouseDetail ? this.data.alpacaGrassHouseDetail.fairLaunchRate.mul(100) : undefined;
    }
    reInvestBuyBackRate() {
        return this.data.alpacaGrassHouseDetail ? this.data.alpacaGrassHouseDetail.reinvestBuyBackRate.mul(100) : undefined;
    }
}
exports.GrasshouseCalculator = GrasshouseCalculator;
