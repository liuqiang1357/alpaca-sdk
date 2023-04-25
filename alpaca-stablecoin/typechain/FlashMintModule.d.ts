import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlashMintModuleInterface extends ethers.utils.Interface {
    functions: {
        "CALLBACK_SUCCESS()": FunctionFragment;
        "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN()": FunctionFragment;
        "accrue()": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "bookKeeperFlashLoan(address,uint256,bytes)": FunctionFragment;
        "convert()": FunctionFragment;
        "feeRate()": FunctionFragment;
        "flashFee(address,uint256)": FunctionFragment;
        "flashLoan(address,address,uint256,bytes)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "max()": FunctionFragment;
        "maxFlashLoan(address)": FunctionFragment;
        "paused()": FunctionFragment;
        "refreshApproval()": FunctionFragment;
        "setFeeRate(uint256)": FunctionFragment;
        "setMax(uint256)": FunctionFragment;
        "stablecoin()": FunctionFragment;
        "stablecoinAdapter()": FunctionFragment;
        "systemDebtEngine()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "CALLBACK_SUCCESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue", values?: undefined): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "bookKeeperFlashLoan", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "convert", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashFee", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "max", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxFlashLoan", values: [string]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "refreshApproval", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFeeRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMax", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stablecoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "stablecoinAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemDebtEngine", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CALLBACK_SUCCESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeperFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refreshApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemDebtEngine", data: BytesLike): Result;
    events: {
        "LogBookKeeperFlashLoan(address,uint256,uint256)": EventFragment;
        "LogFlashLoan(address,address,uint256,uint256)": EventFragment;
        "LogSetFeeRate(uint256)": EventFragment;
        "LogSetMax(uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogBookKeeperFlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogFlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetFeeRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetMax"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogBookKeeperFlashLoanEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    _receiver: string;
    _amount: BigNumber;
    _fee: BigNumber;
}>;
export declare type LogBookKeeperFlashLoanEventFilter = TypedEventFilter<LogBookKeeperFlashLoanEvent>;
export declare type LogFlashLoanEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    _receiver: string;
    _token: string;
    _amount: BigNumber;
    _fee: BigNumber;
}>;
export declare type LogFlashLoanEventFilter = TypedEventFilter<LogFlashLoanEvent>;
export declare type LogSetFeeRateEvent = TypedEvent<[BigNumber], {
    _data: BigNumber;
}>;
export declare type LogSetFeeRateEventFilter = TypedEventFilter<LogSetFeeRateEvent>;
export declare type LogSetMaxEvent = TypedEvent<[BigNumber], {
    _data: BigNumber;
}>;
export declare type LogSetMaxEventFilter = TypedEventFilter<LogSetMaxEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface FlashMintModule extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlashMintModuleInterface;
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
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<[string]>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<[string]>;
        accrue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        bookKeeperFlashLoan(_receiver: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convert(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        flashFee(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        flashLoan(_receiver: string, _token: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        max(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxFlashLoan(_token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeRate(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMax(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoin(overrides?: CallOverrides): Promise<[string]>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<[string]>;
        systemDebtEngine(overrides?: CallOverrides): Promise<[string]>;
    };
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;
    CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<string>;
    accrue(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    bookKeeperFlashLoan(_receiver: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convert(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeRate(overrides?: CallOverrides): Promise<BigNumber>;
    flashFee(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    flashLoan(_receiver: string, _token: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    max(overrides?: CallOverrides): Promise<BigNumber>;
    maxFlashLoan(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    refreshApproval(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeRate(_data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMax(_data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoin(overrides?: CallOverrides): Promise<string>;
    stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
    systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<string>;
        accrue(overrides?: CallOverrides): Promise<void>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        bookKeeperFlashLoan(_receiver: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        convert(overrides?: CallOverrides): Promise<void>;
        feeRate(overrides?: CallOverrides): Promise<BigNumber>;
        flashFee(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flashLoan(_receiver: string, _token: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        initialize(_stablecoinAdapter: string, _systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        max(overrides?: CallOverrides): Promise<BigNumber>;
        maxFlashLoan(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        refreshApproval(overrides?: CallOverrides): Promise<void>;
        setFeeRate(_data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMax(_data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stablecoin(overrides?: CallOverrides): Promise<string>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
        systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LogBookKeeperFlashLoan(address,uint256,uint256)"(_receiver?: string | null, _amount?: null, _fee?: null): LogBookKeeperFlashLoanEventFilter;
        LogBookKeeperFlashLoan(_receiver?: string | null, _amount?: null, _fee?: null): LogBookKeeperFlashLoanEventFilter;
        "LogFlashLoan(address,address,uint256,uint256)"(_receiver?: string | null, _token?: null, _amount?: null, _fee?: null): LogFlashLoanEventFilter;
        LogFlashLoan(_receiver?: string | null, _token?: null, _amount?: null, _fee?: null): LogFlashLoanEventFilter;
        "LogSetFeeRate(uint256)"(_data?: null): LogSetFeeRateEventFilter;
        LogSetFeeRate(_data?: null): LogSetFeeRateEventFilter;
        "LogSetMax(uint256)"(_data?: null): LogSetMaxEventFilter;
        LogSetMax(_data?: null): LogSetMaxEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<BigNumber>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<BigNumber>;
        accrue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeperFlashLoan(_receiver: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convert(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeRate(overrides?: CallOverrides): Promise<BigNumber>;
        flashFee(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flashLoan(_receiver: string, _token: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        max(overrides?: CallOverrides): Promise<BigNumber>;
        maxFlashLoan(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeRate(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMax(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrue(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bookKeeperFlashLoan(_receiver: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convert(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashFee(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashLoan(_receiver: string, _token: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_stablecoinAdapter: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        max(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxFlashLoan(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeRate(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMax(_data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
