var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BigNumber } from '@ethersproject/bignumber';
import { FairLaunch__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/FairLaunch__factory';
import { ERC20__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory';
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { calculateDailyCompoundAPY, calculateRewardTokenValuePerBlock, calculateRewardValuePerYear, } from '../../utils/calculation';
import { WeiPerEther, Zero } from '@ethersproject/constants';
import { BatchContractCaller } from '../batchContractCaller';
import { FairLaunchAddress, MulticallAddress } from '../../constants/contracts';
import { TokenType } from '../../entity';
import { mapTokenProfiles, getLpTokenAddress } from '../../constants/tokenProfile';
import { getTokenPrice } from '../getPrice';
export class StakingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._stakePools) {
        return __awaiter(this, void 0, void 0, function* () {
            const rewardToken = mapTokenProfiles['alpaca'];
            // get the data required
            const [{ rewardPerBlock, bonusMultiplier, bonusEndBlock, totalAllocPoint, rewardStartBlock }, currentBlock, rewardPrice,] = yield Promise.all([
                this.getOverallData(),
                this.provider.getBlockNumber(),
                getTokenPrice(rewardToken, this.provider),
            ]);
            const rewardTokenValuePerBlock = calculateRewardTokenValuePerBlock(rewardPerBlock, bonusMultiplier, BigNumber.from(currentBlock), bonusEndBlock, rewardPrice);
            return Promise.all(_stakePools.map((_stakePool) => __awaiter(this, void 0, void 0, function* () {
                const { fairLaunchTokenBalance, allocPoint } = yield this.getPoolData(_stakePool);
                const poolRewardValuePerBlock = rewardTokenValuePerBlock.mul(allocPoint).div(totalAllocPoint);
                const tokenPrice = yield getTokenPrice(_stakePool.stakingToken, this.provider);
                const tvl = fairLaunchTokenBalance.mul(tokenPrice).div(WeiPerEther);
                return new StakingPoolCalculator({
                    stakePool: _stakePool,
                    tvl,
                    totalStakingToken: fairLaunchTokenBalance,
                    poolRewardValuePerBlock,
                    startBlock: rewardStartBlock,
                    currentBlock: BigNumber.from(rewardStartBlock),
                });
            })));
        });
    }
    getOverallData() {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const fairLaunch = FairLaunch__factory.connect(FairLaunchAddress, this.provider);
            const caller = new BatchContractCaller([
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
            const stakingTokenAddress = _stakePool.stakingToken.type === TokenType.LpPair
                ? getLpTokenAddress(_stakePool.stakingToken)
                : _stakePool.stakingToken.address;
            if (!stakingTokenAddress)
                throw new Error(`StakingPoolCalculatorFactory::getPoolData: stakingTokenAddress is missing (${_stakePool.stakingToken.name})`);
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const fairLaunch = FairLaunch__factory.connect(FairLaunchAddress, this.provider);
            const stakingToken = ERC20__factory.connect(stakingTokenAddress, this.provider);
            const caller = new BatchContractCaller([
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
export class StakingPoolCalculator {
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
        return this.hasStarted ? this.data.poolRewardValuePerBlock : Zero;
    }
    get rewardValuePerYear() {
        return calculateRewardValuePerYear(this.rewardValuePerBlock);
    }
    get rewardValuePerDay() {
        return this.rewardValuePerYear.div(365);
    }
    get yearlyRewardRate() {
        if (this.tvl.isZero())
            return Zero;
        return this.rewardValuePerYear.mul(WeiPerEther).div(this.tvl);
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
        return calculateDailyCompoundAPY(this.rewardValuePerBlock, this.tvl);
    }
}
