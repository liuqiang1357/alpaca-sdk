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
exports.LPWorkerCalculator = exports.SAWorkerCalculator = exports.WorkerCalculatorFactory = exports.SAWorkerCalculatorFactory = exports.LPWorkerCalculatorFactory = void 0;
const UniswapV2Pair__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/UniswapV2Pair__factory");
const helper_1 = require("../../utils/helper");
const constants_1 = require("@ethersproject/constants");
const farmingPool_1 = require("../../constants/farmingPool");
const domain_1 = require("../../shared/domain");
const getPrice_1 = require("../getPrice");
const ERC20__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory");
const IWorker__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/IWorker__factory");
const WorkerConfig__factory_1 = require("@alpaca-finance/alpaca-contract/typechain/factories/WorkerConfig__factory");
class LPWorkerCalculatorFactory {
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
            const farmingPool = farmingPool_1.getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
            const uniswapV2Pair = UniswapV2Pair__factory_1.UniswapV2Pair__factory.connect(farmingPool.lpAddress, this.provider);
            const genericMasterChef = helper_1.getMasterChef(farmingPool.dex, this.provider);
            const worker = IWorker__factory_1.IWorker__factory.connect(_farmingPoolConfig.worker.address, this.provider);
            const workerConfig = WorkerConfig__factory_1.WorkerConfig__factory.connect(_farmingPoolConfig.worker.workerConfigAddress, this.provider);
            const [[{ reserve0, reserve1, token0, token1, totalSupply: supplyOfLpToken }], balanceOfLpTokenInMasterChef, [baseTokenPrice, farmTokenPrice], maxLeverage, userInfo,] = yield Promise.all([
                Promise.all([helper_1.getPairInfo(uniswapV2Pair, this.provider)]),
                uniswapV2Pair.balanceOf(farmingPool.dex.masterChefAddress),
                Promise.all([
                    getPrice_1.getTokenPrice(_farmingPoolConfig.worker.tokenPair.baseToken, this.provider),
                    getPrice_1.getTokenPrice(_farmingPoolConfig.worker.tokenPair.farmingToken, this.provider),
                ]),
                helper_1.getMaxLeverage(worker, workerConfig, _farmingPoolConfig),
                helper_1.getUserInfo(genericMasterChef, farmingPool.pId, _farmingPoolConfig.worker.address),
            ]);
            const workerLpAmountInMasterChef = userInfo.amount;
            const [baseReserve, farmReserve] = helper_1.resolveReservePair(reserve0, reserve1, token0.address, token1.address, _farmingPoolConfig.worker.tokenPair.baseToken.address);
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
exports.LPWorkerCalculatorFactory = LPWorkerCalculatorFactory;
class SAWorkerCalculatorFactory {
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
            const farmingPool = farmingPool_1.getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
            const genericMasterChef = helper_1.getMasterChef(farmingPool.dex, this.provider);
            const farmingToken = ERC20__factory_1.ERC20__factory.connect(_farmingPoolConfig.worker.tokenPair.farmingToken.address, this.provider);
            const worker = IWorker__factory_1.IWorker__factory.connect(_farmingPoolConfig.worker.address, this.provider);
            const workerConfig = WorkerConfig__factory_1.WorkerConfig__factory.connect(_farmingPoolConfig.worker.workerConfigAddress, this.provider);
            const [userinfo, baseTokenPrice, farmTokenPrice, farmAmountInMasterChef, maxLeverage] = yield Promise.all([
                helper_1.getUserInfo(genericMasterChef, farmingPool.pId, _farmingPoolConfig.worker.address),
                getPrice_1.getTokenPrice(_farmingPoolConfig.worker.tokenPair.baseToken, this.provider),
                getPrice_1.getTokenPrice(_farmingPoolConfig.worker.tokenPair.farmingToken, this.provider),
                farmingToken.balanceOf(farmingPool.dex.masterChefAddress),
                helper_1.getMaxLeverage(worker, workerConfig, _farmingPoolConfig),
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
exports.SAWorkerCalculatorFactory = SAWorkerCalculatorFactory;
class WorkerCalculatorFactory {
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
            const farmingPool = farmingPool_1.getFarmingPoolByWorkerAddress(_farmingPoolConfig.worker.address);
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
exports.WorkerCalculatorFactory = WorkerCalculatorFactory;
class SAWorkerCalculator extends domain_1.ValueObject {
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
        return this.farmTokenAmountInMasterChef.mul(this.farmInUSD).div(constants_1.WeiPerEther);
    }
    get tvlInWorker() {
        return this.singleAssetRewardBalance.mul(this.farmInUSD).div(constants_1.WeiPerEther);
    }
}
exports.SAWorkerCalculator = SAWorkerCalculator;
class LPWorkerCalculator extends domain_1.ValueObject {
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
            .div(constants_1.WeiPerEther);
    }
    get farmValueInMasterChef() {
        return this.reserveFarm
            .mul(this.farmInUSD)
            .mul(this.balanceOfLpTokenInMasterChef)
            .div(this.supplyOfLpToken)
            .div(constants_1.WeiPerEther);
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
        return this.workerBalanceofBaseInMasterChef.mul(this.baseInUSD).div(constants_1.WeiPerEther);
    }
    get workerValueOfFarmInMasterChef() {
        return this.workerBalanceofFarmInMasterChef.mul(this.farmInUSD).div(constants_1.WeiPerEther);
    }
    get underlayingBaseinUSD() {
        return this.workerLpAmountInMasterChef
            .mul(this.reserveBase)
            .mul(this.baseInUSD)
            .div(this.supplyOfLpToken)
            .div(constants_1.WeiPerEther);
    }
    get underlayingFarminUSD() {
        return this.workerLpAmountInMasterChef
            .mul(this.reserveFarm)
            .mul(this.farmInUSD)
            .div(this.supplyOfLpToken)
            .div(constants_1.WeiPerEther);
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
exports.LPWorkerCalculator = LPWorkerCalculator;
