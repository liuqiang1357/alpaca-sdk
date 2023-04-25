import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProxyWalletFactoryInterface extends ethers.utils.Interface {
    functions: {
        "build()": FunctionFragment;
        "cache()": FunctionFragment;
        "isProxy(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "build", values?: undefined): string;
    encodeFunctionData(functionFragment: "cache", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProxy", values: [string]): string;
    decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProxy", data: BytesLike): Result;
    events: {
        "LogCreated(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogCreated"): EventFragment;
}
export declare type LogCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    _sender: string;
    _owner: string;
    _proxy: string;
    _cache: string;
}>;
export declare type LogCreatedEventFilter = TypedEventFilter<LogCreatedEvent>;
export interface ProxyWalletFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyWalletFactoryInterface;
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
        "build()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cache(overrides?: CallOverrides): Promise<[string]>;
        isProxy(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    "build()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "build(address)"(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cache(overrides?: CallOverrides): Promise<string>;
    isProxy(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        "build()"(overrides?: CallOverrides): Promise<string>;
        "build(address)"(_owner: string, overrides?: CallOverrides): Promise<string>;
        cache(overrides?: CallOverrides): Promise<string>;
        isProxy(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "LogCreated(address,address,address,address)"(_sender?: string | null, _owner?: string | null, _proxy?: null, _cache?: null): LogCreatedEventFilter;
        LogCreated(_sender?: string | null, _owner?: string | null, _proxy?: null, _cache?: null): LogCreatedEventFilter;
    };
    estimateGas: {
        "build()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cache(overrides?: CallOverrides): Promise<BigNumber>;
        isProxy(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "build()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cache(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProxy(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
