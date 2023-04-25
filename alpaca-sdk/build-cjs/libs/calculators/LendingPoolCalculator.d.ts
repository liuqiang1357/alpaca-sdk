import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { IVault } from '../../entity';
export declare class LendingPoolCalculatorFactory {
    private provider;
    constructor(_provider: Provider);
    create(..._vaults: IVault[]): Promise<LendingPoolCalculator[]>;
    private createOne;
    private getData;
}
interface IData {
    vault: IVault;
    totalVaultBaseToken: BigNumber;
    totalIbToken: BigNumber;
    vaultTotalFloating: BigNumber;
    vaultTotalSupply: BigNumber;
    vaultTotalBorrow: BigNumber;
    borrowingInterestRatePerSec: BigNumber;
    reservePoolRate: BigNumber;
    vaultBaseTokenPrice: BigNumber;
    baseTokenPerDebtToken: BigNumber;
}
export declare class LendingPoolCalculator {
    private data;
    constructor(_data: IData);
    get vault(): IVault;
    get totalVaultBaseToken(): BigNumber;
    get totalIbToken(): BigNumber;
    get vaultTotalFloating(): BigNumber;
    get vaultTotalSupply(): BigNumber;
    get vaultTotalBorrow(): BigNumber;
    get vaultBaseTokenPrice(): BigNumber;
    get dailyBorrowingInterestRate(): BigNumber;
    get dailyBorrowingInterestPercent(): BigNumber;
    get yearlyBorrowingInterestRate(): BigNumber;
    get yearlyBorrowingInterestPercent(): BigNumber;
    get utilizationRate(): BigNumber;
    get utilizationPercent(): BigNumber;
    get baseTokenPerIbToken(): BigNumber;
    get ibTokenPrice(): BigNumber;
    get baseTokenPerDebtToken(): BigNumber;
    get debtTokenPrice(): BigNumber;
    get yearlyLendingRate(): BigNumber;
    get yearlyLendingAPR(): BigNumber;
    get dailyLendingRate(): BigNumber;
    get dailyLendingAPR(): BigNumber;
    get floatingTvl(): BigNumber;
    get tvl(): BigNumber;
}
export {};
