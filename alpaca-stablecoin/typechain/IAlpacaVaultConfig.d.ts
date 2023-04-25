import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAlpacaVaultConfigInterface extends ethers.utils.Interface {
    functions: {
        "acceptDebt(address)": FunctionFragment;
        "approvedAddStrategies(address)": FunctionFragment;
        "getFairLaunchAddr()": FunctionFragment;
        "getInterestRate(uint256,uint256)": FunctionFragment;
        "getKillBps()": FunctionFragment;
        "getKillTreasuryBps()": FunctionFragment;
        "getReservePoolBps()": FunctionFragment;
        "getTreasuryAddr()": FunctionFragment;
        "getWNativeRelayer()": FunctionFragment;
        "getWrappedNativeAddr()": FunctionFragment;
        "isWorker(address)": FunctionFragment;
        "isWorkerReserveConsistent(address)": FunctionFragment;
        "isWorkerStable(address)": FunctionFragment;
        "killFactor(address,uint256)": FunctionFragment;
        "minDebtSize()": FunctionFragment;
        "rawKillFactor(address,uint256)": FunctionFragment;
        "whitelistedCallers(address)": FunctionFragment;
        "whitelistedLiquidators(address)": FunctionFragment;
        "workFactor(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "acceptDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "approvedAddStrategies", values: [string]): string;
    encodeFunctionData(functionFragment: "getFairLaunchAddr", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInterestRate", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getKillBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "getKillTreasuryBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReservePoolBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTreasuryAddr", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWNativeRelayer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWrappedNativeAddr", values?: undefined): string;
    encodeFunctionData(functionFragment: "isWorker", values: [string]): string;
    encodeFunctionData(functionFragment: "isWorkerReserveConsistent", values: [string]): string;
    encodeFunctionData(functionFragment: "isWorkerStable", values: [string]): string;
    encodeFunctionData(functionFragment: "killFactor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "minDebtSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "rawKillFactor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelistedCallers", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelistedLiquidators", values: [string]): string;
    encodeFunctionData(functionFragment: "workFactor", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "acceptDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedAddStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFairLaunchAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInterestRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKillBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKillTreasuryBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservePoolBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWNativeRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWrappedNativeAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWorker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWorkerReserveConsistent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWorkerStable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "killFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDebtSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rawKillFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedCallers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedLiquidators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workFactor", data: BytesLike): Result;
    events: {};
}
export interface IAlpacaVaultConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAlpacaVaultConfigInterface;
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
        acceptDebt(worker: string, overrides?: CallOverrides): Promise<[boolean]>;
        approvedAddStrategies(addStrats: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getFairLaunchAddr(overrides?: CallOverrides): Promise<[string]>;
        getInterestRate(debt: BigNumberish, floating: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getKillBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        getKillTreasuryBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        getReservePoolBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTreasuryAddr(overrides?: CallOverrides): Promise<[string]>;
        getWNativeRelayer(overrides?: CallOverrides): Promise<[string]>;
        getWrappedNativeAddr(overrides?: CallOverrides): Promise<[string]>;
        isWorker(worker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isWorkerReserveConsistent(worker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isWorkerStable(worker: string, overrides?: CallOverrides): Promise<[boolean]>;
        killFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        minDebtSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        rawKillFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        whitelistedCallers(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistedLiquidators(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        workFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;
    approvedAddStrategies(addStrats: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getFairLaunchAddr(overrides?: CallOverrides): Promise<string>;
    getInterestRate(debt: BigNumberish, floating: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getKillBps(overrides?: CallOverrides): Promise<BigNumber>;
    getKillTreasuryBps(overrides?: CallOverrides): Promise<BigNumber>;
    getReservePoolBps(overrides?: CallOverrides): Promise<BigNumber>;
    getTreasuryAddr(overrides?: CallOverrides): Promise<string>;
    getWNativeRelayer(overrides?: CallOverrides): Promise<string>;
    getWrappedNativeAddr(overrides?: CallOverrides): Promise<string>;
    isWorker(worker: string, overrides?: CallOverrides): Promise<boolean>;
    isWorkerReserveConsistent(worker: string, overrides?: CallOverrides): Promise<boolean>;
    isWorkerStable(worker: string, overrides?: CallOverrides): Promise<boolean>;
    killFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    minDebtSize(overrides?: CallOverrides): Promise<BigNumber>;
    rawKillFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    whitelistedCallers(caller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistedLiquidators(caller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    workFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;
        approvedAddStrategies(addStrats: string, overrides?: CallOverrides): Promise<boolean>;
        getFairLaunchAddr(overrides?: CallOverrides): Promise<string>;
        getInterestRate(debt: BigNumberish, floating: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getKillBps(overrides?: CallOverrides): Promise<BigNumber>;
        getKillTreasuryBps(overrides?: CallOverrides): Promise<BigNumber>;
        getReservePoolBps(overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryAddr(overrides?: CallOverrides): Promise<string>;
        getWNativeRelayer(overrides?: CallOverrides): Promise<string>;
        getWrappedNativeAddr(overrides?: CallOverrides): Promise<string>;
        isWorker(worker: string, overrides?: CallOverrides): Promise<boolean>;
        isWorkerReserveConsistent(worker: string, overrides?: CallOverrides): Promise<boolean>;
        isWorkerStable(worker: string, overrides?: CallOverrides): Promise<boolean>;
        killFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        minDebtSize(overrides?: CallOverrides): Promise<BigNumber>;
        rawKillFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedCallers(caller: string, overrides?: CallOverrides): Promise<boolean>;
        whitelistedLiquidators(caller: string, overrides?: CallOverrides): Promise<boolean>;
        workFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        acceptDebt(worker: string, overrides?: CallOverrides): Promise<BigNumber>;
        approvedAddStrategies(addStrats: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getFairLaunchAddr(overrides?: CallOverrides): Promise<BigNumber>;
        getInterestRate(debt: BigNumberish, floating: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getKillBps(overrides?: CallOverrides): Promise<BigNumber>;
        getKillTreasuryBps(overrides?: CallOverrides): Promise<BigNumber>;
        getReservePoolBps(overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryAddr(overrides?: CallOverrides): Promise<BigNumber>;
        getWNativeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        getWrappedNativeAddr(overrides?: CallOverrides): Promise<BigNumber>;
        isWorker(worker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isWorkerReserveConsistent(worker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isWorkerStable(worker: string, overrides?: CallOverrides): Promise<BigNumber>;
        killFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        minDebtSize(overrides?: CallOverrides): Promise<BigNumber>;
        rawKillFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedCallers(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistedLiquidators(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        workFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptDebt(worker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvedAddStrategies(addStrats: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getFairLaunchAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInterestRate(debt: BigNumberish, floating: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKillBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKillTreasuryBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservePoolBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTreasuryAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWNativeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWrappedNativeAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWorker(worker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWorkerReserveConsistent(worker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWorkerStable(worker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        killFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minDebtSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rawKillFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedCallers(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistedLiquidators(caller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        workFactor(worker: string, debt: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
