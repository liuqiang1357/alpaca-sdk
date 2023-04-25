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
exports.GrazingPoolCalculator = exports.MarsEcosystemGrazingRangeCalculatorFactory = exports.LatteGrazingRangeCalculatorFactory = exports.ScientixGrazingRangeCalculatorFactory = exports.AlpacaGrazingRangeCalculatorFactory = exports.GrazingPoolCalculatorFactory = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const typechain_1 = require("@alpaca-finance/alpaca-contract/typechain");
const MasterBarista__factory_1 = require("@latteswap/latteswap-contract/compiled-typechain/factories/MasterBarista__factory");
const calculation_1 = require("../../utils/calculation");
const constants_1 = require("@ethersproject/constants");
const batchContractCaller_1 = require("../batchContractCaller");
const contracts_1 = require("../../constants/contracts");
const entity_1 = require("../../entity");
const math_1 = require("../../utils/math");
const getPrice_1 = require("../getPrice");
const lodash_range_1 = __importDefault(require("lodash.range"));
const view_1 = require("../../utils/view");
const format_1 = require("../../utils/format");
class GrazingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => __awaiter(this, void 0, void 0, function* () {
                switch (_grazePool.type) {
                    case entity_1.GrazingRangeType.AlpacaGrazinRange: {
                        return (yield new AlpacaGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case entity_1.GrazingRangeType.ScientixStakingPools: {
                        return (yield new ScientixGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case entity_1.GrazingRangeType.LatteSwapMasterBarista: {
                        return (yield new LatteGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    case entity_1.GrazingRangeType.MarsEcosystemLiquidityMiningMaster: {
                        return (yield new MarsEcosystemGrazingRangeCalculatorFactory(this.provider).create(_grazePool))[0];
                    }
                    default:
                        throw new Error('GrazingPoolCalculator::calculate: unsupported grazing pool type');
                }
            })));
        });
    }
}
exports.GrazingPoolCalculatorFactory = GrazingPoolCalculatorFactory;
class AlpacaGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazingPool) => this._create(_grazingPool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, totalReward, rewardPerBlock }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(bignumber_1.BigNumber.from(_grazePool.campaignId)),
                getPrice_1.getTokenPrice(_grazePool.stakingToken, this.provider),
                getPrice_1.getTokenPrice(_grazePool.rewardToken, this.provider),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(constants_1.WeiPerEther);
            const tokenDecimal = bignumber_1.BigNumber.from(_grazePool.rewardToken.decimal);
            const rewardPerBlockEther = format_1.convertToEther(rewardPerBlock, tokenDecimal);
            const poolRewardValuePerBlock = rewardPerBlockEther.mul(rewardTokenPrice).div(constants_1.WeiPerEther);
            // using this to return when totalReward is needed (support arbitrary token decimal)
            const totalRewardEther = format_1.convertToEther(totalReward, tokenDecimal);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock: rewardPerBlockEther,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: bignumber_1.BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(campaignId, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = typechain_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const grazingRange = typechain_1.GrazingRange__factory.connect(contracts_1.GrazingRangeAddress, this.provider);
            // get data
            const [{ startBlock, totalStaked }, rewardPerBlock, phaseCount] = yield new batchContractCaller_1.BatchContractCaller([
                {
                    contract: grazingRange,
                    functionName: 'campaignInfo',
                    params: [campaignId],
                },
                {
                    contract: grazingRange,
                    functionName: 'currentRewardPerBlock',
                    params: [campaignId],
                },
                {
                    contract: grazingRange,
                    functionName: 'rewardInfoLen',
                    params: [campaignId],
                },
            ]).multicall(multicall, blockNumber);
            // get an array of each phases data
            const campaignInfos = yield new batchContractCaller_1.BatchContractCaller(lodash_range_1.default(phaseCount.toNumber()).map((n) => ({
                contract: grazingRange,
                functionName: 'campaignRewardInfo',
                params: [campaignId, n],
            }))).multicall(multicall, blockNumber);
            // calculate total reward
            let startingBlock = startBlock;
            const totalReward = campaignInfos.reduce((acc, cur) => {
                const range = cur.endBlock.sub(startingBlock);
                startingBlock = cur.endBlock;
                return acc.add(cur.rewardPerBlock.mul(range));
            }, constants_1.Zero);
            // calculate end block
            const endBlock = campaignInfos[phaseCount.toNumber() - 1].endBlock;
            return {
                startBlock,
                endBlock,
                totalStakingToken: totalStaked,
                totalReward,
                rewardPerBlock,
            };
        });
    }
}
exports.AlpacaGrazingRangeCalculatorFactory = AlpacaGrazingRangeCalculatorFactory;
class ScientixGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => __awaiter(this, void 0, void 0, function* () { return this._create(_grazePool); })));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, totalStakingToken }, stakingTokenPrice, rewardTokenPrice, currentBlock] = yield Promise.all([
                this.getData(bignumber_1.BigNumber.from(_grazePool.campaignId)),
                getPrice_1.getTokenPrice(_grazePool.stakingToken, this.provider),
                getPrice_1.getTokenPrice(_grazePool.rewardToken, this.provider).catch((e) => {
                    if (view_1.isMainnet())
                        throw e;
                    return constants_1.Zero;
                }),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(constants_1.WeiPerEther);
            const rewardPerBlock = yield this.getRewardPerBlock(_grazePool.campaignId, bignumber_1.BigNumber.from(currentBlock));
            const poolRewardValuePerBlock = rewardPerBlock.mul(rewardTokenPrice).div(constants_1.WeiPerEther);
            // The rwards never end
            const endBlock = constants_1.MaxUint256;
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: bignumber_1.BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(campaignId, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = typechain_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const scientix = typechain_1.StakingPools__factory.connect(contracts_1.ScientixStakingPoolsAddress, this.provider);
            // get data
            const [startBlock, totalStakingToken] = yield new batchContractCaller_1.BatchContractCaller([
                {
                    contract: scientix,
                    functionName: 'startBlock',
                },
                {
                    contract: scientix,
                    functionName: 'getPoolTotalDeposited',
                    params: [campaignId],
                },
            ]).multicall(multicall, blockNumber);
            return {
                startBlock,
                totalStakingToken,
            };
        });
    }
    getRewardPerBlock(poolId, currentBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const [from, to] = [currentBlock, currentBlock.add(1)];
            return this.getBlockReward(bignumber_1.BigNumber.from(poolId), from, to);
        });
    }
    /**
     * Copied from https://github.com/ScientixFinance/scientix-contract/blob/513729b77d383a0e9e7f3e3f8a02f4068c0d1cae/contracts/libraries/pools/Pool.sol#L82
     */
    getBlockReward(poolId, fromBlock, toBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = typechain_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const scientix = typechain_1.StakingPools__factory.connect(contracts_1.ScientixStakingPoolsAddress, this.provider);
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
}
exports.ScientixGrazingRangeCalculatorFactory = ScientixGrazingRangeCalculatorFactory;
class LatteGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => this._create(_grazePool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, allocPoint, totalAllocPoint, rewardPerBlock, bonusMultiplier, bonusEndBlock, }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(_grazePool),
                getPrice_1.getTokenPrice(_grazePool.stakingToken, this.provider),
                getPrice_1.getTokenPrice(_grazePool.rewardToken, this.provider),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(constants_1.WeiPerEther);
            const isBonusPeriod = bonusEndBlock.gte(currentBlock);
            const multiplier = isBonusPeriod ? bonusMultiplier : constants_1.One;
            const poolRewardValuePerBlock = rewardPerBlock
                .mul(multiplier)
                .mul(rewardTokenPrice)
                .mul(allocPoint)
                .div(totalAllocPoint)
                .div(constants_1.WeiPerEther);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: bignumber_1.BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(_grazingPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = typechain_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const masterBarista = MasterBarista__factory_1.MasterBarista__factory.connect(contracts_1.LatteSwapMasterBaristaAddress, this.provider);
            const stakingToken = typechain_1.ERC20__factory.connect(_grazingPool.stakingToken.address, this.provider);
            const [
            // Time related variables
            startBlock, 
            // Staking token parameters
            totalStakingToken, 
            // Pool parameters
            { allocPoint }, totalAllocPoint, rewardPerBlock, bonusMultiplier, bonusEndBlock,] = yield new batchContractCaller_1.BatchContractCaller([
                // Time related variables
                {
                    contract: masterBarista,
                    functionName: 'startBlock',
                },
                // Staking token parameters
                {
                    contract: stakingToken,
                    functionName: 'balanceOf',
                    params: [masterBarista.address],
                },
                // Pool parameters
                {
                    contract: masterBarista,
                    functionName: 'poolInfo',
                    params: [stakingToken.address],
                },
                {
                    contract: masterBarista,
                    functionName: 'totalAllocPoint',
                },
                {
                    contract: masterBarista,
                    functionName: 'lattePerBlock',
                },
                {
                    contract: masterBarista,
                    functionName: 'bonusMultiplier',
                },
                {
                    contract: masterBarista,
                    functionName: 'bonusEndBlock',
                },
            ]).multicall(multicall);
            return {
                startBlock,
                endBlock: bignumber_1.BigNumber.from(11932888),
                totalStakingToken,
                allocPoint,
                totalAllocPoint,
                rewardPerBlock,
                bonusMultiplier,
                bonusEndBlock,
            };
        });
    }
}
exports.LatteGrazingRangeCalculatorFactory = LatteGrazingRangeCalculatorFactory;
class MarsEcosystemGrazingRangeCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._grazePools) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_grazePools.map((_grazePool) => this._create(_grazePool)));
        });
    }
    _create(_grazePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ startBlock, endBlock, totalStakingToken, allocPoint, totalAllocPoint, rewardPerBlock, bonusMultiplier }, stakingTokenPrice, rewardTokenPrice, currentBlock,] = yield Promise.all([
                this.getData(_grazePool),
                getPrice_1.getTokenPrice(_grazePool.stakingToken, this.provider),
                getPrice_1.getTokenPrice(_grazePool.rewardToken, this.provider).catch((e) => {
                    if (view_1.isMainnet())
                        throw e;
                    return constants_1.Zero;
                }),
                this.currentBlock(),
            ]);
            const tvl = totalStakingToken.mul(stakingTokenPrice).div(constants_1.WeiPerEther);
            const poolRewardValuePerBlock = rewardPerBlock
                .mul(rewardTokenPrice)
                .mul(allocPoint)
                .div(totalAllocPoint)
                .div(constants_1.WeiPerEther);
            return new GrazingPoolCalculator({
                grazePool: _grazePool,
                rewardPerBlock,
                totalStakingToken,
                tvl,
                poolRewardValuePerBlock,
                startBlock,
                endBlock,
                currentBlock: bignumber_1.BigNumber.from(currentBlock),
            });
        });
    }
    currentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBlockNumber();
        });
    }
    getData(_grazingPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = typechain_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const liquidityMiningMaster = typechain_1.ILiquidityMiningMaster__factory.connect(contracts_1.MarsEcosystemLiquidityMiningMasterAddress, this.provider);
            const stakingToken = typechain_1.ERC20__factory.connect(_grazingPool.stakingToken.address, this.provider);
            const [
            // Staking token parameters
            totalStakingToken, 
            // Pool parameters
            { allocPoint }, totalAllocPoint, rewardPerBlock, bonusMultiplier,] = yield new batchContractCaller_1.BatchContractCaller([
                // Staking token parameters
                {
                    contract: stakingToken,
                    functionName: 'balanceOf',
                    params: [liquidityMiningMaster.address],
                },
                // Pool parameters
                {
                    contract: liquidityMiningMaster,
                    functionName: 'poolInfo',
                    params: [_grazingPool.campaignId],
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'totalAllocPoint',
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'xmsPerBlock',
                },
                {
                    contract: liquidityMiningMaster,
                    functionName: 'BONUS_MULTIPLIER',
                },
            ]).multicall(multicall);
            return {
                // 12561000
                startBlock: bignumber_1.BigNumber.from(12561000),
                endBlock: bignumber_1.BigNumber.from(13426700),
                totalStakingToken,
                allocPoint,
                totalAllocPoint,
                rewardPerBlock,
                bonusMultiplier,
            };
        });
    }
}
exports.MarsEcosystemGrazingRangeCalculatorFactory = MarsEcosystemGrazingRangeCalculatorFactory;
class GrazingPoolCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get grazePool() {
        return this.data.grazePool;
    }
    get rewardPerBlock() {
        return this.data.rewardPerBlock;
    }
    get totalStakingToken() {
        return this.data.totalStakingToken;
    }
    get tvl() {
        return this.data.tvl;
    }
    get startBlock() {
        return this.data.startBlock;
    }
    get endBlock() {
        return this.data.endBlock;
    }
    get currentBlock() {
        return this.data.currentBlock;
    }
    get hasStarted() {
        return this.startBlock.lte(this.currentBlock);
    }
    get hasEnded() {
        return this.endBlock.lte(this.currentBlock);
    }
    get isInCampaignPeriod() {
        return this.hasStarted && !this.hasEnded;
    }
    get rewardValuePerBlock() {
        return this.isInCampaignPeriod ? this.data.poolRewardValuePerBlock : constants_1.Zero;
    }
    get rewardValuePerYear() {
        return calculation_1.calculateRewardValuePerYear(this.data.poolRewardValuePerBlock);
    }
    get rewardValuePerDay() {
        return this.rewardValuePerYear.div(365);
    }
    get yearlyRewardRate() {
        if (this.tvl.isZero())
            return constants_1.Zero;
        return this.rewardValuePerYear.mul(constants_1.WeiPerEther).div(this.tvl);
    }
    get yearlyRewardApr() {
        return this.yearlyRewardRate.mul(100);
    }
    get dailyRewardRate() {
        return this.yearlyRewardRate.div(365);
    }
    get dailyRewardApr() {
        return this.dailyRewardRate.mul(100);
    }
    get apy() {
        return calculation_1.calculateDailyCompoundAPY(this.rewardValuePerBlock, this.tvl);
    }
}
exports.GrazingPoolCalculator = GrazingPoolCalculator;
