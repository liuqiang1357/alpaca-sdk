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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingPoolCalculator = exports.StakingPoolCalculatorFactory = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const FairLaunch__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/FairLaunch__factory");
const ERC20__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory");
const Multicall__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory");
const calculation_1 = require("../../utils/calculation");
const constants_1 = require("@ethersproject/constants");
const batchContractCaller_1 = require("../batchContractCaller");
const contracts_1 = require("../../constants/contracts");
const entity_1 = require("../../entity");
const tokenProfile_1 = require("../../constants/tokenProfile");
const getPrice_1 = require("../getPrice");
class StakingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._stakePools) {
        return __awaiter(this, void 0, void 0, function* () {
            const rewardToken = tokenProfile_1.mapTokenProfiles['alpaca'];
            // get the data required
            const [{ rewardPerBlock, bonusMultiplier, bonusEndBlock, totalAllocPoint, rewardStartBlock }, currentBlock, rewardPrice,] = yield Promise.all([
                this.getOverallData(),
                this.provider.getBlockNumber(),
                getPrice_1.getTokenPrice(rewardToken, this.provider),
            ]);
            const rewardTokenValuePerBlock = calculation_1.calculateRewardTokenValuePerBlock(rewardPerBlock, bonusMultiplier, bignumber_1.BigNumber.from(currentBlock), bonusEndBlock, rewardPrice);
            return Promise.all(_stakePools.map((_stakePool) => __awaiter(this, void 0, void 0, function* () {
                const { fairLaunchTokenBalance, allocPoint } = yield this.getPoolData(_stakePool);
                const poolRewardValuePerBlock = rewardTokenValuePerBlock.mul(allocPoint).div(totalAllocPoint);
                const tokenPrice = yield getPrice_1.getTokenPrice(_stakePool.stakingToken, this.provider);
                const tvl = fairLaunchTokenBalance.mul(tokenPrice).div(constants_1.WeiPerEther);
                return new StakingPoolCalculator({
                    stakePool: _stakePool,
                    tvl,
                    totalStakingToken: fairLaunchTokenBalance,
                    poolRewardValuePerBlock,
                    startBlock: rewardStartBlock,
                    currentBlock: bignumber_1.BigNumber.from(rewardStartBlock),
                });
            })));
        });
    }
    getOverallData() {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const fairLaunch = FairLaunch__factory_1.FairLaunch__factory.connect(contracts_1.FairLaunchAddress, this.provider);
            const caller = new batchContractCaller_1.BatchContractCaller([
                {
                    contract: fairLaunch,
                    functionName: 'alpacaPerBlock',
                },
                {
                    contract: fairLaunch,
                    functionName: 'bonusMultiplier',
                },
                {
                    contract: fairLaunch,
                    functionName: 'bonusEndBlock',
                },
                {
                    contract: fairLaunch,
                    functionName: 'totalAllocPoint',
                },
                {
                    contract: fairLaunch,
                    functionName: 'startBlock',
                },
            ]);
            const [rewardPerBlock, bonusMultiplier, bonusEndBlock, totalAllocPoint, rewardStartBlock] = yield caller.multicall(multicall);
            return {
                rewardPerBlock,
                bonusMultiplier,
                bonusEndBlock,
                totalAllocPoint,
                rewardStartBlock,
            };
        });
    }
    getPoolData(_stakePool) {
        return __awaiter(this, void 0, void 0, function* () {
            const stakingTokenAddress = _stakePool.stakingToken.type === entity_1.TokenType.LpPair
                ? tokenProfile_1.getLpTokenAddress(_stakePool.stakingToken)
                : _stakePool.stakingToken.address;
            if (!stakingTokenAddress)
                throw new Error(`StakingPoolCalculatorFactory::getPoolData: stakingTokenAddress is missing (${_stakePool.stakingToken.name})`);
            const multicall = Multicall__factory_1.Multicall__factory.connect(contracts_1.MulticallAddress, this.provider);
            const fairLaunch = FairLaunch__factory_1.FairLaunch__factory.connect(contracts_1.FairLaunchAddress, this.provider);
            const stakingToken = ERC20__factory_1.ERC20__factory.connect(stakingTokenAddress, this.provider);
            const caller = new batchContractCaller_1.BatchContractCaller([
                {
                    contract: stakingToken,
                    functionName: 'balanceOf',
                    params: [fairLaunch.address],
                },
                {
                    contract: fairLaunch,
                    functionName: 'poolInfo',
                    params: [_stakePool.poolId],
                },
            ]);
            const [fairLaunchTokenBalance, { allocPoint }] = yield caller.multicall(multicall);
            return {
                fairLaunchTokenBalance,
                allocPoint,
            };
        });
    }
}
exports.StakingPoolCalculatorFactory = StakingPoolCalculatorFactory;
class StakingPoolCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get stakePool() {
        return this.data.stakePool;
    }
    get tvl() {
        return this.data.tvl;
    }
    get hasStarted() {
        return this.data.startBlock.lte(this.data.currentBlock);
    }
    get rewardValuePerBlock() {
        return this.hasStarted ? this.data.poolRewardValuePerBlock : constants_1.Zero;
    }
    get rewardValuePerYear() {
        return calculation_1.calculateRewardValuePerYear(this.rewardValuePerBlock);
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
exports.StakingPoolCalculator = StakingPoolCalculator;
