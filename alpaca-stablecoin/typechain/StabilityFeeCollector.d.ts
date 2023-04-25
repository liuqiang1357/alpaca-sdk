import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StabilityFeeCollectorInterface extends ethers.utils.Interface {
    functions: {
        "bookKeeper()": FunctionFragment;
        "collect(bytes32)": FunctionFragment;
        "globalStabilityFeeRate()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "setGlobalStabilityFeeRate(uint256)": FunctionFragment;
        "setSystemDebtEngine(address)": FunctionFragment;
        "systemDebtEngine()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "collect", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "globalStabilityFeeRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGlobalStabilityFeeRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSystemDebtEngine", values: [string]): string;
    encodeFunctionData(functionFragment: "systemDebtEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalStabilityFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalStabilityFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogSetGlobalStabilityFeeRate(address,uint256)": EventFragment;
        "LogSetSystemDebtEngine(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetGlobalStabilityFeeRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetSystemDebtEngine"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogSetGlobalStabilityFeeRateEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _data: BigNumber;
}>;
export declare type LogSetGlobalStabilityFeeRateEventFilter = TypedEventFilter<LogSetGlobalStabilityFeeRateEvent>;
export declare type LogSetSystemDebtEngineEvent = TypedEvent<[
    string,
    string
], {
    _caller: string;
    _data: string;
}>;
export declare type LogSetSystemDebtEngineEventFilter = TypedEventFilter<LogSetSystemDebtEngineEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface StabilityFeeCollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StabilityFeeCollectorInterface;
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
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        collect(_collateralPool: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        globalStabilityFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_bookKeeper: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        setGlobalStabilityFeeRate(_globalStabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    collect(_collateralPool: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    globalStabilityFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_bookKeeper: string, _systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    setGlobalStabilityFeeRate(_globalStabilityFeeRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        collect(_collateralPool: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        globalStabilityFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        setGlobalStabilityFeeRate(_globalStabilityFeeRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        systemDebtEngine(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetGlobalStabilityFeeRate(address,uint256)"(_caller?: string | null, _data?: null): LogSetGlobalStabilityFeeRateEventFilter;
        LogSetGlobalStabilityFeeRate(_caller?: string | null, _data?: null): LogSetGlobalStabilityFeeRateEventFilter;
        "LogSetSystemDebtEngine(address,address)"(_caller?: string | null, _data?: null): LogSetSystemDebtEngineEventFilter;
        LogSetSystemDebtEngine(_caller?: string | null, _data?: null): LogSetSystemDebtEngineEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        collect(_collateralPool: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        globalStabilityFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        setGlobalStabilityFeeRate(_globalStabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collect(_collateralPool: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        globalStabilityFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGlobalStabilityFeeRate(_globalStabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
