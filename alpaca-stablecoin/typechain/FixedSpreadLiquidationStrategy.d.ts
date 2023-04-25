import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FixedSpreadLiquidationStrategyInterface extends ethers.utils.Interface {
    functions: {
        "bookKeeper()": FunctionFragment;
        "execute(bytes32,uint256,uint256,address,uint256,uint256,address,address,bytes)": FunctionFragment;
        "flashLendingEnabled()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "liquidationEngine()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "setFlashLendingEnabled(uint256)": FunctionFragment;
        "systemDebtEngine()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "flashLendingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "liquidationEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFlashLendingEnabled", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "systemDebtEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLendingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlashLendingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogFixedSpreadLiquidate(bytes32,uint256,uint256,address,uint256,uint256,address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "LogSetFlashLendingEnabled(address,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogFixedSpreadLiquidate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetFlashLendingEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogFixedSpreadLiquidateEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    _collateralPoolId: string;
    _positionDebtShare: BigNumber;
    _positionCollateralAmount: BigNumber;
    _positionAddress: string;
    _debtShareToBeLiquidated: BigNumber;
    _maxDebtShareToBeLiquidated: BigNumber;
    _liquidatorAddress: string;
    _collateralRecipient: string;
    _actualDebtShareToBeLiquidated: BigNumber;
    _actualDebtValueToBeLiquidated: BigNumber;
    _collateralAmountToBeLiquidated: BigNumber;
    _treasuryFees: BigNumber;
}>;
export declare type LogFixedSpreadLiquidateEventFilter = TypedEventFilter<LogFixedSpreadLiquidateEvent>;
export declare type LogSetFlashLendingEnabledEvent = TypedEvent<[
    string,
    BigNumber
], {
    caller: string;
    _flashLendingEnabled: BigNumber;
}>;
export declare type LogSetFlashLendingEnabledEventFilter = TypedEventFilter<LogSetFlashLendingEnabledEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface FixedSpreadLiquidationStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FixedSpreadLiquidationStrategyInterface;
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
        execute(_collateralPoolId: BytesLike, _positionDebtShare: BigNumberish, _positionCollateralAmount: BigNumberish, _positionAddress: string, _debtShareToBeLiquidated: BigNumberish, _maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, _collateralRecipient: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flashLendingEnabled(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_bookKeeper: string, _priceOracle: string, _liquidationEngine: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        setFlashLendingEnabled(_flashLendingEnabled: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    execute(_collateralPoolId: BytesLike, _positionDebtShare: BigNumberish, _positionCollateralAmount: BigNumberish, _positionAddress: string, _debtShareToBeLiquidated: BigNumberish, _maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, _collateralRecipient: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flashLendingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_bookKeeper: string, _priceOracle: string, _liquidationEngine: string, _systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationEngine(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    setFlashLendingEnabled(_flashLendingEnabled: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        execute(_collateralPoolId: BytesLike, _positionDebtShare: BigNumberish, _positionCollateralAmount: BigNumberish, _positionAddress: string, _debtShareToBeLiquidated: BigNumberish, _maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, _collateralRecipient: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        flashLendingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _priceOracle: string, _liquidationEngine: string, _systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        liquidationEngine(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        setFlashLendingEnabled(_flashLendingEnabled: BigNumberish, overrides?: CallOverrides): Promise<void>;
        systemDebtEngine(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogFixedSpreadLiquidate(bytes32,uint256,uint256,address,uint256,uint256,address,address,uint256,uint256,uint256,uint256)"(_collateralPoolId?: BytesLike | null, _positionDebtShare?: null, _positionCollateralAmount?: null, _positionAddress?: string | null, _debtShareToBeLiquidated?: null, _maxDebtShareToBeLiquidated?: null, _liquidatorAddress?: string | null, _collateralRecipient?: null, _actualDebtShareToBeLiquidated?: null, _actualDebtValueToBeLiquidated?: null, _collateralAmountToBeLiquidated?: null, _treasuryFees?: null): LogFixedSpreadLiquidateEventFilter;
        LogFixedSpreadLiquidate(_collateralPoolId?: BytesLike | null, _positionDebtShare?: null, _positionCollateralAmount?: null, _positionAddress?: string | null, _debtShareToBeLiquidated?: null, _maxDebtShareToBeLiquidated?: null, _liquidatorAddress?: string | null, _collateralRecipient?: null, _actualDebtShareToBeLiquidated?: null, _actualDebtValueToBeLiquidated?: null, _collateralAmountToBeLiquidated?: null, _treasuryFees?: null): LogFixedSpreadLiquidateEventFilter;
        "LogSetFlashLendingEnabled(address,uint256)"(caller?: string | null, _flashLendingEnabled?: null): LogSetFlashLendingEnabledEventFilter;
        LogSetFlashLendingEnabled(caller?: string | null, _flashLendingEnabled?: null): LogSetFlashLendingEnabledEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        execute(_collateralPoolId: BytesLike, _positionDebtShare: BigNumberish, _positionCollateralAmount: BigNumberish, _positionAddress: string, _debtShareToBeLiquidated: BigNumberish, _maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, _collateralRecipient: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flashLendingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _priceOracle: string, _liquidationEngine: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        setFlashLendingEnabled(_flashLendingEnabled: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(_collateralPoolId: BytesLike, _positionDebtShare: BigNumberish, _positionCollateralAmount: BigNumberish, _positionAddress: string, _debtShareToBeLiquidated: BigNumberish, _maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, _collateralRecipient: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flashLendingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _priceOracle: string, _liquidationEngine: string, _systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFlashLendingEnabled(_flashLendingEnabled: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
