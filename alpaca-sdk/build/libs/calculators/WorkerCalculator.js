var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UniswapV2Pair__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/UniswapV2Pair__factory';
import { getMasterChef, getMaxLeverage, getPairInfo, getUserInfo, resolveReservePair } from '../../utils/helper';
import { WeiPerEther } from '@ethersproject/constants';
import { getFarmingPoolByWorkerAddress } from '../../constants/farmingPool';
import { ValueObject } from '../../shared/domain';
import { getTokenPrice } from '../getPrice';
import { ERC20__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory';
import { IWorker__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/IWorker__factory';
import { WorkerConfig__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/WorkerConfig__factory';
export class LPWorkerCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._farmingPoolConfigs) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_farmingPoolConfigs.map((c) => this.createOne(c)));
        });
    }
    createOne(_farmingPoolConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const farmingPool = getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
            const uniswapV2Pair = UniswapV2Pair__factory.connect(farmingPool.lpAddress, this.provider);
            const genericMasterChef = getMasterChef(farmingPool.dex, this.provider);
            const worker = IWorker__factory.connect(_farmingPoolConfig.worker.address, this.provider);
            const workerConfig = WorkerConfig__factory.connect(_farmingPoolConfig.worker.workerConfigAddress, this.provider);
            const [[{ reserve0, reserve1, token0, token1, totalSupply: supplyOfLpToken }], balanceOfLpTokenInMasterChef, [baseTokenPrice, farmTokenPrice], maxLeverage, userInfo,] = yield Promise.all([
                Promise.all([getPairInfo(uniswapV2Pair, this.provider)]),
                uniswapV2Pair.balanceOf(farmingPool.dex.masterChefAddress),
                Promise.all([
                    getTokenPrice(_farmingPoolConfig.worker.tokenPair.baseToken, this.provider),
                    getTokenPrice(_farmingPoolConfig.worker.tokenPair.farmingToken, this.provider),
                ]),
                getMaxLeverage(worker, workerConfig, _farmingPoolConfig),
                getUserInfo(genericMasterChef, farmingPool.pId, _farmingPoolConfig.worker.address),
            ]);
            const workerLpAmountInMasterChef = userInfo.amount;
            const [baseReserve, farmReserve] = resolveReservePair(reserve0, reserve1, token0.address, token1.address, _farmingPoolConfig.worker.tokenPair.baseToken.address);
            const data = {
                farmingConfig: _farmingPoolConfig,
                maxLeverage,
                baseReserve,
                farmReserve,
                balanceOfLpTokenInMasterChef,
                baseTokenPrice,
                farmTokenPrice,
                supplyOfLpToken,
                workerLpAmountInMasterChef,
            };
            return new LPWorkerCalculator(data);
        });
    }
}
export class SAWorkerCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._farmingPoolConfigs) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_farmingPoolConfigs.map((c) => this.createOne(c)));
        });
    }
    createOne(_farmingPoolConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const farmingPool = getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
            const genericMasterChef = getMasterChef(farmingPool.dex, this.provider);
            const farmingToken = ERC20__factory.connect(_farmingPoolConfig.worker.tokenPair.farmingToken.address, this.provider);
            const worker = IWorker__factory.connect(_farmingPoolConfig.worker.address, this.provider);
            const workerConfig = WorkerConfig__factory.connect(_farmingPoolConfig.worker.workerConfigAddress, this.provider);
            const [userinfo, baseTokenPrice, farmTokenPrice, farmAmountInMasterChef, maxLeverage] = yield Promise.all([
                getUserInfo(genericMasterChef, farmingPool.pId, _farmingPoolConfig.worker.address),
                getTokenPrice(_farmingPoolConfig.worker.tokenPair.baseToken, this.provider),
                getTokenPrice(_farmingPoolConfig.worker.tokenPair.farmingToken, this.provider),
                farmingToken.balanceOf(farmingPool.dex.masterChefAddress),
                getMaxLeverage(worker, workerConfig, _farmingPoolConfig),
            ]);
            const singleAssetRewardBalance = userinfo.amount;
            const data = {
                farmingConfig: _farmingPoolConfig,
                maxLeverage,
                baseTokenPrice,
                farmTokenPrice,
                farmAmountInMasterChef,
                singleAssetRewardBalance,
            };
            return new SAWorkerCalculator(data);
        });
    }
}
export class WorkerCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._farmingPoolConfigs) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_farmingPoolConfigs.map((c) => this.createOne(c)));
        });
    }
    createOne(_farmingPoolConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const farmingPool = getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
            return this.getFactory(farmingPool).createOne(_farmingPoolConfig);
        });
    }
    getFactory(_farmingPool) {
        if (_farmingPool.isSingleAsset()) {
            return new SAWorkerCalculatorFactory(this.provider);
        }
        return new LPWorkerCalculatorFactory(this.provider);
    }
}
export class SAWorkerCalculator extends ValueObject {
    get isSAWorker() {
        return true;
    }
    get isLPWorker() {
        return false;
    }
    get maxLeverage() {
        return this.props.maxLeverage;
    }
    get farmingConfig() {
        return this.props.farmingConfig;
    }
    get singleAssetRewardBalance() {
        return this.props.singleAssetRewardBalance;
    }
    get farmInUSD() {
        return this.props.farmTokenPrice;
    }
    get farmTokenAmountInMasterChef() {
        return this.props.farmAmountInMasterChef;
    }
    get tvlInMasterChef() {
        return this.farmTokenAmountInMasterChef.mul(this.farmInUSD).div(WeiPerEther);
    }
    get tvlInWorker() {
        return this.singleAssetRewardBalance.mul(this.farmInUSD).div(WeiPerEther);
    }
}
export class LPWorkerCalculator extends ValueObject {
    get isSAWorker() {
        return false;
    }
    get isLPWorker() {
        return true;
    }
    get maxLeverage() {
        return this.props.maxLeverage;
    }
    get farmingConfig() {
        return this.props.farmingConfig;
    }
    get reserveBase() {
        return this.props.baseReserve;
    }
    get reserveFarm() {
        return this.props.farmReserve;
    }
    get balanceOfLpTokenInMasterChef() {
        return this.props.balanceOfLpTokenInMasterChef;
    }
    get baseInUSD() {
        return this.props.baseTokenPrice;
    }
    get farmInUSD() {
        return this.props.farmTokenPrice;
    }
    get supplyOfLpToken() {
        return this.props.supplyOfLpToken;
    }
    get workerLpAmountInMasterChef() {
        return this.props.workerLpAmountInMasterChef;
    }
    get baseValueInMasterChef() {
        return this.reserveBase
            .mul(this.baseInUSD)
            .mul(this.balanceOfLpTokenInMasterChef)
            .div(this.supplyOfLpToken)
            .div(WeiPerEther);
    }
    get farmValueInMasterChef() {
        return this.reserveFarm
            .mul(this.farmInUSD)
            .mul(this.balanceOfLpTokenInMasterChef)
            .div(this.supplyOfLpToken)
            .div(WeiPerEther);
    }
    get tvlInMasterChef() {
        return this.baseValueInMasterChef.add(this.farmValueInMasterChef);
    }
    get workerBalanceofBaseInMasterChef() {
        return this.reserveBase.mul(this.workerLpAmountInMasterChef).div(this.supplyOfLpToken);
    }
    get workerBalanceofFarmInMasterChef() {
        return this.reserveFarm.mul(this.workerLpAmountInMasterChef).div(this.supplyOfLpToken);
    }
    get workerValueOfBaseInMasterChef() {
        return this.workerBalanceofBaseInMasterChef.mul(this.baseInUSD).div(WeiPerEther);
    }
    get workerValueOfFarmInMasterChef() {
        return this.workerBalanceofFarmInMasterChef.mul(this.farmInUSD).div(WeiPerEther);
    }
    get underlayingBaseinUSD() {
        return this.workerLpAmountInMasterChef
            .mul(this.reserveBase)
            .mul(this.baseInUSD)
            .div(this.supplyOfLpToken)
            .div(WeiPerEther);
    }
    get underlayingFarminUSD() {
        return this.workerLpAmountInMasterChef
            .mul(this.reserveFarm)
            .mul(this.farmInUSD)
            .div(this.supplyOfLpToken)
            .div(WeiPerEther);
    }
    get workerBalanceOfBaseTokenInMasterChef() {
        return this.reserveBase.mul(this.balanceOfLpTokenInMasterChef).div(this.supplyOfLpToken);
    }
    get workerBalanceOfFarmTokenInMasterChef() {
        return this.reserveFarm.mul(this.balanceOfLpTokenInMasterChef).div(this.supplyOfLpToken);
    }
    get tvlInWorker() {
        return this.underlayingBaseinUSD.add(this.underlayingFarminUSD);
    }
}
