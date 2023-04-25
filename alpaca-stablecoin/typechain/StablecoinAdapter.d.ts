import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StablecoinAdapterInterface extends ethers.utils.Interface {
    functions: {
        "bookKeeper()": FunctionFragment;
        "cage()": FunctionFragment;
        "deposit(address,uint256,bytes)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "live()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "stablecoin()": FunctionFragment;
        "uncage()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "stablecoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "LogCage()": EventFragment;
        "LogUncage()": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogUncage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogCageEvent = TypedEvent<[], {}>;
export declare type LogCageEventFilter = TypedEventFilter<LogCageEvent>;
export declare type LogUncageEvent = TypedEvent<[], {}>;
export declare type LogUncageEventFilter = TypedEventFilter<LogUncageEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface StablecoinAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StablecoinAdapterInterface;
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
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bookKeeper: string, _stablecoin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        stablecoin(overrides?: CallOverrides): Promise<[string]>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bookKeeper: string, _stablecoin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    stablecoin(overrides?: CallOverrides): Promise<string>;
    uncage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        cage(overrides?: CallOverrides): Promise<void>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_bookKeeper: string, _stablecoin: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        stablecoin(overrides?: CallOverrides): Promise<string>;
        uncage(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        withdraw(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogCage()"(): LogCageEventFilter;
        LogCage(): LogCageEventFilter;
        "LogUncage()"(): LogUncageEventFilter;
        LogUncage(): LogUncageEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bookKeeper: string, _stablecoin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        stablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _stablecoin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
