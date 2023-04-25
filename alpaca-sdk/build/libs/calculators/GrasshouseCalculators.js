var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BigNumber } from 'ethers';
import { parseEther, formatEther } from 'ethers/lib/utils';
import { Zero, WeiPerEther } from '@ethersproject/constants';
import { XALPACA__factory } from '@alpaca-finance/xalpaca-contract/typechain/factories/XALPACA__factory';
import { FairLaunch__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/FairLaunch__factory';
import { GrassHouseType, TokenSymbol } from '../../entity';
import { BasisPoint, fdALPACAPoolAllocPoint, LpPoolBuybackBps, SaPoolBuybackBps, SECONDS_IN_WEEK, WEEK_IN_YEAR, } from '../../constants';
import { XALPACAAddress } from '../../constants/xAlpacaContract';
import { getTokenPrice } from '../../libs/getPrice';
import { findRewardEndTime, findRewardStartTime, findWeeklyRewardIndex } from '../../utils/grassHouse';
import { calculateAPY, calculateRewardValuePerYear } from '../../utils/calculation';
import { FairLaunchAddress, MulticallAddress, ScientixStakingPoolsAddress } from '../../constants/contracts';
import axios from 'axios';
import { mapTokenProfiles } from '../../constants/tokenProfile';
import { maxBigNumber, minBigNumber } from '../../utils/math';
import { BatchContractCaller } from '../batchContractCaller';
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { StakingPools__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/StakingPools__factory';
import { ScientixGrassHousePoolId } from '../../constants/pools';
export class GrasshouseCalculatorFactory {
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
            const xAlpaca = XALPACA__factory.connect(XALPACAAddress, this.provider);
            const [xAlpacaTotalSupply, alpacaPrice] = yield Promise.all([
                xAlpaca.totalSupply(),
                getTokenPrice(mapTokenProfiles[TokenSymbol.ALPACA], this.provider),
            ]);
            return Promise.all(_grasshousePools.map((_grasshousePool) => __awaiter(this, void 0, void 0, function* () {
                switch (_grasshousePool.type) {
                    case GrassHouseType.AlpacaGrassHouse: {
                        return (yield new AlpacaGrasshouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice, timestamp)
                            .setFarmingPoolCalculators(this.farmingPoolCalculators || [])
                            .create(_grasshousePool))[0];
                    }
                    case GrassHouseType.ScientixGrassHouse: {
                        return (yield new ScientixGrassHouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice).create(_grasshousePool))[0];
                    }
                    case GrassHouseType.DefaultGrassHouse: {
                        return (yield new DefaultGrasshouseCalculatorFactory(this.provider, xAlpacaTotalSupply, alpacaPrice, timestamp).create(_grasshousePool))[0];
                    }
                    default:
                        throw new Error('GrasshouseCalculator::calculate: unsupported grasshouse pool type');
                }
            })));
        });
    }
}
export class DefaultGrasshouseCalculatorFactory {
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
            const rewardStartIn = findRewardStartTime(_grasshousePool);
            const rewardEndIn = findRewardEndTime(_grasshousePool);
            //  PROJECTILE REWARD FOR 1 WEEK, Otherwise reward set as Zero
            if (rewardStartIn && this.timestamp < rewardStartIn - SECONDS_IN_WEEK) {
                return new GrasshouseCalculator({
                    grasshousePool: _grasshousePool,
                    rate: Zero,
                });
            }
            if (rewardEndIn && this.timestamp > rewardEndIn) {
                return new GrasshouseCalculator({
                    grasshousePool: _grasshousePool,
                    rate: Zero,
                });
            }
            const rewardTokenPrice = yield getTokenPrice(_grasshousePool.rewardToken, this.provider);
            // Weekly index support projectile for first week
            const weekIndex = findWeeklyRewardIndex(_grasshousePool, this.timestamp);
            const rewardTokenYearly = _grasshousePool.weeklyReward[weekIndex].rewardAmount.mul(WEEK_IN_YEAR);
            const rewardValuePerYear = rewardTokenYearly.mul(rewardTokenPrice).div(WeiPerEther);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(WeiPerEther)
                : WeiPerEther;
            const rate = rewardValuePerYear.mul(WeiPerEther).div(totalxAlpacaValue);
            return new GrasshouseCalculator({
                grasshousePool: _grasshousePool,
                rate: rate,
            });
        });
    }
}
export class ScientixGrassHouseCalculatorFactory {
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
            const poolId = ScientixGrassHousePoolId;
            const blockNumber = yield this.provider.getBlockNumber();
            const rewardTokenPrice = yield getTokenPrice(_grasshousePool.rewardToken, this.provider);
            const rewardPerBlock = yield this.getRewardPerBlock(poolId, BigNumber.from(blockNumber));
            const rewardTokenYearly = calculateRewardValuePerYear(rewardPerBlock);
            const totalxAlpacaValue = this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(WeiPerEther);
            const rewardValuePerYear = rewardTokenYearly.mul(rewardTokenPrice).div(WeiPerEther);
            const rate = rewardValuePerYear.mul(WeiPerEther).div(totalxAlpacaValue);
            return new GrasshouseCalculator({
                grasshousePool: _grasshousePool,
                rate: rate,
            });
        });
    }
    getBlockReward(poolId, fromBlock, toBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const scientix = StakingPools__factory.connect(ScientixStakingPoolsAddress, this.provider);
            // get data
            const [rewardWeight, startBlock, blocksPerEpoch, totalReducedEpochs, rewardRate, reducedRewardRatePerEpoch, totalRewardWeight,] = yield new BatchContractCaller([
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
            let totalRewards = Zero;
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
                fromBlock = maxBigNumber(startBlock, fromBlock);
                if (fromBlock.gte(toBlock)) {
                    return Zero;
                }
                let epochBegin = startBlock.add(blocksPerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let epochEnd = epochBegin.add(blocksPerEpoch);
                let rewardPerBlock = rewardRate.sub(reducedRewardRatePerEpoch.mul(fromBlock.sub(startBlock).div(blocksPerEpoch)));
                let totalRewards = Zero;
                while (toBlock > epochBegin) {
                    const left = maxBigNumber(epochBegin, fromBlock);
                    const right = minBigNumber(epochEnd, toBlock);
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
            return this.getBlockReward(BigNumber.from(poolId), from, to);
        });
    }
}
export class AlpacaGrasshouseCalculatorFactory {
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
            const fairLaunch = FairLaunch__factory.connect(FairLaunchAddress, this.provider);
            const [alpacaRewardPerBlock, totalAllocPoint] = yield Promise.all([
                fairLaunch.alpacaPerBlock(),
                fairLaunch.totalAllocPoint(),
            ]);
            const alpacaRewardForfdPoolPerBlock = alpacaRewardPerBlock.mul(fdALPACAPoolAllocPoint).div(totalAllocPoint);
            const rewardValuePerBlock = alpacaRewardForfdPoolPerBlock.mul(this.alpacaPrice).div(WeiPerEther);
            const rewardValuePerYear = calculateRewardValuePerYear(rewardValuePerBlock);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(WeiPerEther)
                : WeiPerEther;
            const rate = rewardValuePerYear.mul(WeiPerEther).div(totalxAlpacaValue);
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
                    response = yield axios.get(url);
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
                    farmRewardValuePerYear: formatEther(pool.workerCalculatorWithHighestAprAtMaxLeverage.farmRewardValuePerYear),
                    tvl: formatEther(pool.tvl),
                    tvlInMasterChef: formatEther(pool.tvlInMasterChef),
                }));
            }
            const totalBuyBackReducer = (sum, cur) => {
                const buyBackBps = cur.sourceName === 'PancakeSwap CAKEMaxi' ? SaPoolBuybackBps : LpPoolBuybackBps;
                const buybackValue = Number(cur.tvlInMasterChef) > 0
                    ? (Number(cur.farmRewardValuePerYear) * cur.tvl * buyBackBps.toNumber()) /
                        (Number(cur.tvlInMasterChef) * BasisPoint.toNumber())
                    : 0;
                return sum + buybackValue;
            };
            const totalBuybackPortionValue = pcsFarmingPools.reduce(totalBuyBackReducer, 0);
            const totalxAlpacaValue = !this.xAlpacaTotalSupply.isZero()
                ? this.xAlpacaTotalSupply.mul(this.alpacaPrice).div(WeiPerEther)
                : WeiPerEther;
            const rate = parseEther(totalBuybackPortionValue.toString()).mul(WeiPerEther).div(totalxAlpacaValue);
            return rate;
        });
    }
}
export class GrasshouseCalculator {
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
        return calculateAPY(this.data.rate.div(compoundRatePerYear), compoundRatePerYear);
    }
    alpacaEmissionRewardApr() {
        return this.data.alpacaGrassHouseDetail ? this.data.alpacaGrassHouseDetail.fairLaunchRate.mul(100) : undefined;
    }
    reInvestBuyBackRate() {
        return this.data.alpacaGrassHouseDetail ? this.data.alpacaGrassHouseDetail.reinvestBuyBackRate.mul(100) : undefined;
    }
}
