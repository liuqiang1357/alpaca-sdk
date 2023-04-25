var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Vault__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Vault__factory';
import { ConfigurableInterestVaultConfig__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/ConfigurableInterestVaultConfig__factory';
import { ERC20__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/ERC20__factory';
import { Multicall__factory } from '@alpaca-finance/alpaca-contract/typechain/factories/Multicall__factory';
import { calcualteLendingPoolYearlyAPR, calculateTokenFromIbTokenAmount, calculateUtilizationRate, convertBpsToWei, } from '../../utils/calculation';
import { WeiPerEther } from '@ethersproject/constants';
import { BatchContractCaller } from '../batchContractCaller';
import { MulticallAddress } from '../../constants/contracts';
import { getTokenPrice } from '../getPrice';
export class LendingPoolCalculatorFactory {
    constructor(_provider) {
        this.provider = _provider;
    }
    create(..._vaults) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(_vaults.map((vault) => this.createOne(vault)));
        });
    }
    createOne(_vault) {
        return __awaiter(this, void 0, void 0, function* () {
            // get the data required
            const [{ debt, floating, reservePoolBps, totalVaultBaseToken, totalIbToken, borrowingInterestRatePerSec, baseTokenPerDebtToken, }, vaultBaseTokenPrice,] = yield Promise.all([this.getData(_vault), getTokenPrice(_vault.baseToken, this.provider)]);
            // Convert reservePoolBps to wei
            const reservePoolRate = convertBpsToWei(reservePoolBps);
            // Total Supply
            const vaultTotalSupply = debt.add(floating);
            return new LendingPoolCalculator({
                vault: _vault,
                totalVaultBaseToken,
                totalIbToken,
                vaultTotalFloating: floating,
                vaultTotalSupply,
                vaultTotalBorrow: debt,
                borrowingInterestRatePerSec,
                reservePoolRate,
                vaultBaseTokenPrice,
                baseTokenPerDebtToken,
            });
        });
    }
    getData(_vault) {
        return __awaiter(this, void 0, void 0, function* () {
            const multicall = Multicall__factory.connect(MulticallAddress, this.provider);
            const vault = Vault__factory.connect(_vault.address, this.provider);
            // TODO: optimize this by deriving from config
            const vaultConfigAddress = yield vault.config();
            const vaultConfig = ConfigurableInterestVaultConfig__factory.connect(vaultConfigAddress, this.provider);
            const vaultBaseToken = ERC20__factory.connect(_vault.baseToken.address, this.provider);
            const caller = new BatchContractCaller([
                {
                    contract: vault,
                    functionName: 'vaultDebtVal',
                },
                {
                    contract: vaultBaseToken,
                    functionName: 'balanceOf',
                    params: [vault.address],
                },
                {
                    contract: vaultConfig,
                    functionName: 'getReservePoolBps',
                },
                {
                    contract: vault,
                    functionName: 'totalToken',
                },
                {
                    contract: vault,
                    functionName: 'totalSupply',
                },
                {
                    contract: vault,
                    functionName: 'debtShareToVal',
                    params: [WeiPerEther],
                },
            ]);
            const [debt, floating, reservePoolBps, totalVaultBaseToken, totalIbToken, baseTokenPerDebtToken] = yield caller.multicall(multicall);
            // Get borrowing intrest rate and user balances
            const borrowingInterestRatePerSec = yield vaultConfig.getInterestRate(debt, floating);
            return {
                debt,
                floating,
                reservePoolBps,
                totalVaultBaseToken,
                totalIbToken,
                borrowingInterestRatePerSec,
                baseTokenPerDebtToken,
            };
        });
    }
}
export class LendingPoolCalculator {
    constructor(_data) {
        this.data = _data;
    }
    get vault() {
        return this.data.vault;
    }
    get totalVaultBaseToken() {
        return this.data.totalVaultBaseToken;
    }
    get totalIbToken() {
        return this.data.totalIbToken;
    }
    get vaultTotalFloating() {
        return this.data.vaultTotalFloating;
    }
    get vaultTotalSupply() {
        return this.data.vaultTotalSupply;
    }
    get vaultTotalBorrow() {
        return this.data.vaultTotalBorrow;
    }
    get vaultBaseTokenPrice() {
        return this.data.vaultBaseTokenPrice;
    }
    get dailyBorrowingInterestRate() {
        return this.data.borrowingInterestRatePerSec.mul(60).mul(60).mul(24);
    }
    get dailyBorrowingInterestPercent() {
        return this.dailyBorrowingInterestRate.mul(100);
    }
    get yearlyBorrowingInterestRate() {
        return this.dailyBorrowingInterestRate.mul(365);
    }
    get yearlyBorrowingInterestPercent() {
        return this.yearlyBorrowingInterestRate.mul(100);
    }
    get utilizationRate() {
        const { vaultTotalBorrow, vaultTotalFloating } = this.data;
        return calculateUtilizationRate(vaultTotalBorrow, vaultTotalFloating);
    }
    get utilizationPercent() {
        return this.utilizationRate.mul(100);
    }
    get baseTokenPerIbToken() {
        const { totalVaultBaseToken, totalIbToken } = this.data;
        return calculateTokenFromIbTokenAmount(WeiPerEther, totalVaultBaseToken, totalIbToken);
    }
    get ibTokenPrice() {
        const { vaultBaseTokenPrice } = this.data;
        return this.baseTokenPerIbToken.mul(vaultBaseTokenPrice).div(WeiPerEther);
    }
    get baseTokenPerDebtToken() {
        return this.data.baseTokenPerDebtToken;
    }
    get debtTokenPrice() {
        const { vaultBaseTokenPrice } = this.data;
        return this.baseTokenPerDebtToken.mul(vaultBaseTokenPrice).div(WeiPerEther);
    }
    get yearlyLendingRate() {
        const { borrowingInterestRatePerSec, reservePoolRate } = this.data;
        return calcualteLendingPoolYearlyAPR(this.utilizationRate, borrowingInterestRatePerSec, reservePoolRate);
    }
    get yearlyLendingAPR() {
        return this.yearlyLendingRate.mul(100);
    }
    get dailyLendingRate() {
        return this.yearlyLendingRate.div(365);
    }
    get dailyLendingAPR() {
        return this.yearlyLendingAPR.div(365);
    }
    // exclude debt
    get floatingTvl() {
        const { vaultTotalFloating, vaultBaseTokenPrice } = this.data;
        return vaultTotalFloating.mul(vaultBaseTokenPrice).div(WeiPerEther);
    }
    // include debt
    get tvl() {
        const { totalVaultBaseToken, vaultBaseTokenPrice } = this.data;
        return totalVaultBaseToken.mul(vaultBaseTokenPrice).div(WeiPerEther);
    }
}
