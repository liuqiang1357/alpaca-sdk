import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TokenAdapterInterface extends ethers.utils.Interface {
    functions: {
        "bookKeeper()": FunctionFragment;
        "cage()": FunctionFragment;
        "collateralPoolId()": FunctionFragment;
        "collateralToken()": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(address,uint256,bytes)": FunctionFragment;
        "initialize(address,bytes32,address)": FunctionFragment;
        "live()": FunctionFragment;
        "onAdjustPosition(address,address,int256,int256,bytes)": FunctionFragment;
        "onMoveCollateral(address,address,uint256,bytes)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "uncage()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "onAdjustPosition", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onMoveCollateral", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onAdjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onMoveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
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
export interface TokenAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenAdapterInterface;
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
        collateralPoolId(overrides?: CallOverrides): Promise<[string]>;
        collateralToken(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bookKeeper: string, collateralPoolId_: BytesLike, collateralToken_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        onAdjustPosition(src: string, dst: string, collateralValue: BigNumberish, debtShare: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onMoveCollateral(src: string, dst: string, wad: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
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
    collateralPoolId(overrides?: CallOverrides): Promise<string>;
    collateralToken(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bookKeeper: string, collateralPoolId_: BytesLike, collateralToken_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    onAdjustPosition(src: string, dst: string, collateralValue: BigNumberish, debtShare: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onMoveCollateral(src: string, dst: string, wad: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
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
        collateralPoolId(overrides?: CallOverrides): Promise<string>;
        collateralToken(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_bookKeeper: string, collateralPoolId_: BytesLike, collateralToken_: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        onAdjustPosition(src: string, dst: string, collateralValue: BigNumberish, debtShare: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        onMoveCollateral(src: string, dst: string, wad: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
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
        collateralPoolId(overrides?: CallOverrides): Promise<BigNumber>;
        collateralToken(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bookKeeper: string, collateralPoolId_: BytesLike, collateralToken_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        onAdjustPosition(src: string, dst: string, collateralValue: BigNumberish, debtShare: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onMoveCollateral(src: string, dst: string, wad: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
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
        collateralPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(usr: string, wad: BigNumberish, arg2: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, collateralPoolId_: BytesLike, collateralToken_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onAdjustPosition(src: string, dst: string, collateralValue: BigNumberish, debtShare: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onMoveCollateral(src: string, dst: string, wad: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
