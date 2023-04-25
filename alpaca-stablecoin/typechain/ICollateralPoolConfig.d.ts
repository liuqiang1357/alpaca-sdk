import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CollateralPoolStruct = {
    totalDebtShare: BigNumberish;
    debtAccumulatedRate: BigNumberish;
    priceWithSafetyMargin: BigNumberish;
    debtCeiling: BigNumberish;
    debtFloor: BigNumberish;
    priceFeed: string;
    liquidationRatio: BigNumberish;
    stabilityFeeRate: BigNumberish;
    lastAccumulationTime: BigNumberish;
    adapter: string;
    closeFactorBps: BigNumberish;
    liquidatorIncentiveBps: BigNumberish;
    treasuryFeesBps: BigNumberish;
    strategy: string;
};
export declare type CollateralPoolStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
] & {
    totalDebtShare: BigNumber;
    debtAccumulatedRate: BigNumber;
    priceWithSafetyMargin: BigNumber;
    debtCeiling: BigNumber;
    debtFloor: BigNumber;
    priceFeed: string;
    liquidationRatio: BigNumber;
    stabilityFeeRate: BigNumber;
    lastAccumulationTime: BigNumber;
    adapter: string;
    closeFactorBps: BigNumber;
    liquidatorIncentiveBps: BigNumber;
    treasuryFeesBps: BigNumber;
    strategy: string;
};
export declare type CollateralPoolInfoStruct = {
    debtAccumulatedRate: BigNumberish;
    totalDebtShare: BigNumberish;
    debtCeiling: BigNumberish;
    priceWithSafetyMargin: BigNumberish;
    debtFloor: BigNumberish;
};
export declare type CollateralPoolInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    debtAccumulatedRate: BigNumber;
    totalDebtShare: BigNumber;
    debtCeiling: BigNumber;
    priceWithSafetyMargin: BigNumber;
    debtFloor: BigNumber;
};
export interface ICollateralPoolConfigInterface extends ethers.utils.Interface {
    functions: {
        "collateralPools(bytes32)": FunctionFragment;
        "getAdapter(bytes32)": FunctionFragment;
        "getCloseFactorBps(bytes32)": FunctionFragment;
        "getCollateralPoolInfo(bytes32)": FunctionFragment;
        "getDebtAccumulatedRate(bytes32)": FunctionFragment;
        "getDebtCeiling(bytes32)": FunctionFragment;
        "getDebtFloor(bytes32)": FunctionFragment;
        "getLastAccumulationTime(bytes32)": FunctionFragment;
        "getLiquidationRatio(bytes32)": FunctionFragment;
        "getLiquidatorIncentiveBps(bytes32)": FunctionFragment;
        "getPriceFeed(bytes32)": FunctionFragment;
        "getPriceWithSafetyMargin(bytes32)": FunctionFragment;
        "getStabilityFeeRate(bytes32)": FunctionFragment;
        "getStrategy(bytes32)": FunctionFragment;
        "getTotalDebtShare(bytes32)": FunctionFragment;
        "getTreasuryFeesBps(bytes32)": FunctionFragment;
        "setDebtAccumulatedRate(bytes32,uint256)": FunctionFragment;
        "setPriceWithSafetyMargin(bytes32,uint256)": FunctionFragment;
        "setTotalDebtShare(bytes32,uint256)": FunctionFragment;
        "updateLastAccumulationTime(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "collateralPools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAdapter", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getCloseFactorBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getCollateralPoolInfo", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtAccumulatedRate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtCeiling", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtFloor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLastAccumulationTime", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLiquidationRatio", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLiquidatorIncentiveBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPriceFeed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPriceWithSafetyMargin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStabilityFeeRate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStrategy", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTotalDebtShare", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTreasuryFeesBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setDebtAccumulatedRate", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPriceWithSafetyMargin", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTotalDebtShare", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateLastAccumulationTime", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "collateralPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCloseFactorBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralPoolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtAccumulatedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtFloor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastAccumulationTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidatorIncentiveBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceWithSafetyMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStabilityFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDebtShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryFeesBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDebtAccumulatedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceWithSafetyMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTotalDebtShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLastAccumulationTime", data: BytesLike): Result;
    events: {};
}
export interface ICollateralPoolConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICollateralPoolConfigInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[CollateralPoolStructOutput]>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[CollateralPoolInfoStructOutput]>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceWithSafetyMargin(collateralPoolId: BytesLike, priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolStructOutput>;
    getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolInfoStructOutput>;
    getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceWithSafetyMargin(collateralPoolId: BytesLike, priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolStructOutput>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolInfoStructOutput>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPriceWithSafetyMargin(collateralPoolId: BytesLike, priceWithSafetyMargin: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceWithSafetyMargin(collateralPoolId: BytesLike, priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceWithSafetyMargin(collateralPoolId: BytesLike, priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
