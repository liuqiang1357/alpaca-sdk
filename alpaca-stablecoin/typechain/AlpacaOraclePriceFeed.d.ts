import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaOraclePriceFeedInterface extends ethers.utils.Interface {
    functions: {
        "accessControlConfig()": FunctionFragment;
        "alpacaOracle()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "peekPrice()": FunctionFragment;
        "priceLife()": FunctionFragment;
        "readPrice()": FunctionFragment;
        "setPriceLife(uint256)": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "alpacaOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "peekPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceLife", values?: undefined): string;
    encodeFunctionData(functionFragment: "readPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPriceLife", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "alpacaOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peekPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceLife", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceLife", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogSetPriceLife(address,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetPriceLife"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogSetPriceLifeEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _second: BigNumber;
}>;
export declare type LogSetPriceLifeEventFilter = TypedEventFilter<LogSetPriceLifeEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface AlpacaOraclePriceFeed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaOraclePriceFeedInterface;
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
        accessControlConfig(overrides?: CallOverrides): Promise<[string]>;
        alpacaOracle(overrides?: CallOverrides): Promise<[string]>;
        initialize(_alpacaOracle: string, _token0: string, _token1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        priceLife(overrides?: CallOverrides): Promise<[BigNumber]>;
        readPrice(overrides?: CallOverrides): Promise<[string]>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    alpacaOracle(overrides?: CallOverrides): Promise<string>;
    initialize(_alpacaOracle: string, _token0: string, _token1: string, _accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
    priceLife(overrides?: CallOverrides): Promise<BigNumber>;
    readPrice(overrides?: CallOverrides): Promise<string>;
    setPriceLife(_second: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        alpacaOracle(overrides?: CallOverrides): Promise<string>;
        initialize(_alpacaOracle: string, _token0: string, _token1: string, _accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        priceLife(overrides?: CallOverrides): Promise<BigNumber>;
        readPrice(overrides?: CallOverrides): Promise<string>;
        setPriceLife(_second: BigNumberish, overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetPriceLife(address,uint256)"(_caller?: string | null, _second?: null): LogSetPriceLifeEventFilter;
        LogSetPriceLife(_caller?: string | null, _second?: null): LogSetPriceLifeEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        alpacaOracle(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_alpacaOracle: string, _token0: string, _token1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        peekPrice(overrides?: CallOverrides): Promise<BigNumber>;
        priceLife(overrides?: CallOverrides): Promise<BigNumber>;
        readPrice(overrides?: CallOverrides): Promise<BigNumber>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        alpacaOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_alpacaOracle: string, _token0: string, _token1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peekPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceLife(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
