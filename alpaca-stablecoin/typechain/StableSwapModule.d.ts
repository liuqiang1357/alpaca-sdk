import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StableSwapModuleInterface extends ethers.utils.Interface {
    functions: {
        "authTokenAdapter()": FunctionFragment;
        "blacklist(address)": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "collateralPoolId()": FunctionFragment;
        "feeIn()": FunctionFragment;
        "feeOut()": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "setFeeIn(uint256)": FunctionFragment;
        "setFeeOut(uint256)": FunctionFragment;
        "stablecoin()": FunctionFragment;
        "stablecoinAdapter()": FunctionFragment;
        "swapStablecoinToToken(address,uint256)": FunctionFragment;
        "swapTokenToStablecoin(address,uint256)": FunctionFragment;
        "systemDebtEngine()": FunctionFragment;
        "unpause()": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authTokenAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "blacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeIn", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFeeIn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFeeOut", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stablecoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "stablecoinAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapStablecoinToToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokenToStablecoin", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "systemDebtEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
    decodeFunctionResult(functionFragment: "authTokenAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapStablecoinToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokenToStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "LogSetFeeIn(address,uint256)": EventFragment;
        "LogSetFeeOut(address,uint256)": EventFragment;
        "LogSwapStablecoinToToken(address,uint256,uint256)": EventFragment;
        "LogSwapTokenToStablecoin(address,uint256,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetFeeIn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetFeeOut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSwapStablecoinToToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSwapTokenToStablecoin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogSetFeeInEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _feeIn: BigNumber;
}>;
export declare type LogSetFeeInEventFilter = TypedEventFilter<LogSetFeeInEvent>;
export declare type LogSetFeeOutEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _feeOut: BigNumber;
}>;
export declare type LogSetFeeOutEventFilter = TypedEventFilter<LogSetFeeOutEvent>;
export declare type LogSwapStablecoinToTokenEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    _owner: string;
    _value: BigNumber;
    _fee: BigNumber;
}>;
export declare type LogSwapStablecoinToTokenEventFilter = TypedEventFilter<LogSwapStablecoinToTokenEvent>;
export declare type LogSwapTokenToStablecoinEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    _owner: string;
    _value: BigNumber;
    _fee: BigNumber;
}>;
export declare type LogSwapTokenToStablecoinEventFilter = TypedEventFilter<LogSwapTokenToStablecoinEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface StableSwapModule extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StableSwapModuleInterface;
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
        authTokenAdapter(overrides?: CallOverrides): Promise<[string]>;
        blacklist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        collateralPoolId(overrides?: CallOverrides): Promise<[string]>;
        feeIn(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeOut(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_authTokenAdapter: string, _stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        setFeeIn(_feeIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeOut(_feeOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoin(overrides?: CallOverrides): Promise<[string]>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<[string]>;
        swapStablecoinToToken(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokenToStablecoin(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authTokenAdapter(overrides?: CallOverrides): Promise<string>;
    blacklist(_usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    collateralPoolId(overrides?: CallOverrides): Promise<string>;
    feeIn(overrides?: CallOverrides): Promise<BigNumber>;
    feeOut(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_authTokenAdapter: string, _stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    setFeeIn(_feeIn: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeOut(_feeOut: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoin(overrides?: CallOverrides): Promise<string>;
    stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
    swapStablecoinToToken(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokenToStablecoin(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(_usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authTokenAdapter(overrides?: CallOverrides): Promise<string>;
        blacklist(_usr: string, overrides?: CallOverrides): Promise<void>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        collateralPoolId(overrides?: CallOverrides): Promise<string>;
        feeIn(overrides?: CallOverrides): Promise<BigNumber>;
        feeOut(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_authTokenAdapter: string, _stablecoinAdapter: string, _systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        setFeeIn(_feeIn: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFeeOut(_feeOut: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stablecoin(overrides?: CallOverrides): Promise<string>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
        swapStablecoinToToken(_usr: string, _tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapTokenToStablecoin(_usr: string, _tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        systemDebtEngine(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        whitelist(_usr: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetFeeIn(address,uint256)"(_caller?: string | null, _feeIn?: null): LogSetFeeInEventFilter;
        LogSetFeeIn(_caller?: string | null, _feeIn?: null): LogSetFeeInEventFilter;
        "LogSetFeeOut(address,uint256)"(_caller?: string | null, _feeOut?: null): LogSetFeeOutEventFilter;
        LogSetFeeOut(_caller?: string | null, _feeOut?: null): LogSetFeeOutEventFilter;
        "LogSwapStablecoinToToken(address,uint256,uint256)"(_owner?: string | null, _value?: null, _fee?: null): LogSwapStablecoinToTokenEventFilter;
        LogSwapStablecoinToToken(_owner?: string | null, _value?: null, _fee?: null): LogSwapStablecoinToTokenEventFilter;
        "LogSwapTokenToStablecoin(address,uint256,uint256)"(_owner?: string | null, _value?: null, _fee?: null): LogSwapTokenToStablecoinEventFilter;
        LogSwapTokenToStablecoin(_owner?: string | null, _value?: null, _fee?: null): LogSwapTokenToStablecoinEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        authTokenAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        blacklist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPoolId(overrides?: CallOverrides): Promise<BigNumber>;
        feeIn(overrides?: CallOverrides): Promise<BigNumber>;
        feeOut(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_authTokenAdapter: string, _stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        setFeeIn(_feeIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeOut(_feeOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        swapStablecoinToToken(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokenToStablecoin(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authTokenAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blacklist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeIn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeOut(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_authTokenAdapter: string, _stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFeeIn(_feeIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeOut(_feeOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapStablecoinToToken(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokenToStablecoin(_usr: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(_usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
