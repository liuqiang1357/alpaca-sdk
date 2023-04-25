import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaAuthInterface extends ethers.utils.Interface {
    functions: {
        "authority()": FunctionFragment;
        "owner()": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    events: {
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}
export declare type LogSetAuthorityEvent = TypedEvent<[string], {
    _authority: string;
}>;
export declare type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;
export declare type LogSetOwnerEvent = TypedEvent<[string], {
    _owner: string;
}>;
export declare type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;
export interface AlpacaAuth extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaAuthInterface;
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
        authority(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authority(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    setAuthority(_authority: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authority(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setAuthority(_authority: string, overrides?: CallOverrides): Promise<void>;
        setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetAuthority(address)"(_authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(_authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(_owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(_owner?: string | null): LogSetOwnerEventFilter;
    };
    estimateGas: {
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
