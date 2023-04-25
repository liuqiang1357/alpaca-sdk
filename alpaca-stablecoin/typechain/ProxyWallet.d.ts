import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProxyWalletInterface extends ethers.utils.Interface {
    functions: {
        "authority()": FunctionFragment;
        "cache()": FunctionFragment;
        "execute(address,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setCache(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "cache", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setCache", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    events: {
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": EventFragment;
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}
export declare type LogNoteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], {
    sig: string;
    guy: string;
    foo: string;
    bar: string;
    wad: BigNumber;
    fax: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export declare type LogSetAuthorityEvent = TypedEvent<[string], {
    _authority: string;
}>;
export declare type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;
export declare type LogSetOwnerEvent = TypedEvent<[string], {
    _owner: string;
}>;
export declare type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;
export interface ProxyWallet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyWalletInterface;
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
        cache(overrides?: CallOverrides): Promise<[string]>;
        "execute(address,bytes)"(_target: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(bytes,bytes)"(_code: BytesLike, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCache(_cacheAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authority(overrides?: CallOverrides): Promise<string>;
    cache(overrides?: CallOverrides): Promise<string>;
    "execute(address,bytes)"(_target: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(bytes,bytes)"(_code: BytesLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    setAuthority(_authority: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCache(_cacheAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authority(overrides?: CallOverrides): Promise<string>;
        cache(overrides?: CallOverrides): Promise<string>;
        "execute(address,bytes)"(_target: string, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        "execute(bytes,bytes)"(_code: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            _target: string;
            _response: string;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        setAuthority(_authority: string, overrides?: CallOverrides): Promise<void>;
        setCache(_cacheAddr: string, overrides?: CallOverrides): Promise<boolean>;
        setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)"(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        "LogSetAuthority(address)"(_authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(_authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(_owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(_owner?: string | null): LogSetOwnerEventFilter;
    };
    estimateGas: {
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        cache(overrides?: CallOverrides): Promise<BigNumber>;
        "execute(address,bytes)"(_target: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(bytes,bytes)"(_code: BytesLike, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCache(_cacheAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cache(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "execute(address,bytes)"(_target: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(bytes,bytes)"(_code: BytesLike, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(_authority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCache(_cacheAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
