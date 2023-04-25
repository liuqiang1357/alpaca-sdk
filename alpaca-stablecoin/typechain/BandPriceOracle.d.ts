import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BandPriceOracleInterface extends ethers.utils.Interface {
    functions: {
        "accessControlConfig()": FunctionFragment;
        "getPrice(address,address)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "setTokenSymbol(address,string)": FunctionFragment;
        "stdReferenceProxy()": FunctionFragment;
        "tokenSymbols(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setTokenSymbol", values: [string, string]): string;
    encodeFunctionData(functionFragment: "stdReferenceProxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenSymbols", values: [string]): string;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stdReferenceProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenSymbols", data: BytesLike): Result;
    events: {
        "LogSetTokenSymbol(address,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetTokenSymbol"): EventFragment;
}
export declare type LogSetTokenSymbolEvent = TypedEvent<[
    string,
    string
], {
    _tokenAddress: string;
    _tokenSymbol: string;
}>;
export declare type LogSetTokenSymbolEventFilter = TypedEventFilter<LogSetTokenSymbolEvent>;
export interface BandPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BandPriceOracleInterface;
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
        getPrice(_token0: string, _token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(_stdReferenceProxy: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTokenSymbol(_tokenAddress: string, _tokenSymbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stdReferenceProxy(overrides?: CallOverrides): Promise<[string]>;
        tokenSymbols(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    getPrice(_token0: string, _token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    initialize(_stdReferenceProxy: string, _accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTokenSymbol(_tokenAddress: string, _tokenSymbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stdReferenceProxy(overrides?: CallOverrides): Promise<string>;
    tokenSymbols(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        getPrice(_token0: string, _token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(_stdReferenceProxy: string, _accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        setTokenSymbol(_tokenAddress: string, _tokenSymbol: string, overrides?: CallOverrides): Promise<void>;
        stdReferenceProxy(overrides?: CallOverrides): Promise<string>;
        tokenSymbols(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LogSetTokenSymbol(address,string)"(_tokenAddress?: string | null, _tokenSymbol?: null): LogSetTokenSymbolEventFilter;
        LogSetTokenSymbol(_tokenAddress?: string | null, _tokenSymbol?: null): LogSetTokenSymbolEventFilter;
    };
    estimateGas: {
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(_token0: string, _token1: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_stdReferenceProxy: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTokenSymbol(_tokenAddress: string, _tokenSymbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stdReferenceProxy(overrides?: CallOverrides): Promise<BigNumber>;
        tokenSymbols(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(_token0: string, _token1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_stdReferenceProxy: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTokenSymbol(_tokenAddress: string, _tokenSymbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stdReferenceProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenSymbols(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
