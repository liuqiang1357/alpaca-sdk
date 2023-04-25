import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ShowStopperInterface extends ethers.utils.Interface {
    functions: {
        "accumulateBadDebt(bytes32,address)": FunctionFragment;
        "accumulateStablecoin(uint256)": FunctionFragment;
        "badDebtAccumulator(bytes32)": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "cage()": FunctionFragment;
        "cageCoolDown()": FunctionFragment;
        "cagePrice(bytes32)": FunctionFragment;
        "cagedTimestamp()": FunctionFragment;
        "debt()": FunctionFragment;
        "finalCashPrice(bytes32)": FunctionFragment;
        "finalizeCashPrice(bytes32)": FunctionFragment;
        "finalizeDebt()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "liquidationEngine()": FunctionFragment;
        "live()": FunctionFragment;
        "paused()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "redeemLockedCollateral(bytes32,address,address,address,bytes)": FunctionFragment;
        "redeemStablecoin(bytes32,uint256)": FunctionFragment;
        "redeemedStablecoinAmount(bytes32,address)": FunctionFragment;
        "setBookKeeper(address)": FunctionFragment;
        "setCageCoolDown(uint256)": FunctionFragment;
        "setLiquidationEngine(address)": FunctionFragment;
        "setPriceOracle(address)": FunctionFragment;
        "setSystemDebtEngine(address)": FunctionFragment;
        "stablecoinAccumulator(address)": FunctionFragment;
        "systemDebtEngine()": FunctionFragment;
        "totalDebtShare(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accumulateBadDebt", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "accumulateStablecoin", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "badDebtAccumulator", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "cageCoolDown", values?: undefined): string;
    encodeFunctionData(functionFragment: "cagePrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "cagedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "debt", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalCashPrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeCashPrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidationEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemLockedCollateral", values: [BytesLike, string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "redeemStablecoin", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemedStablecoinAmount", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setBookKeeper", values: [string]): string;
    encodeFunctionData(functionFragment: "setCageCoolDown", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationEngine", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "setSystemDebtEngine", values: [string]): string;
    encodeFunctionData(functionFragment: "stablecoinAccumulator", values: [string]): string;
    encodeFunctionData(functionFragment: "systemDebtEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDebtShare", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "accumulateBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accumulateStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "badDebtAccumulator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cageCoolDown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cagePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cagedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalCashPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeCashPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLockedCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemedStablecoinAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCageCoolDown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSystemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAccumulator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemDebtEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebtShare", data: BytesLike): Result;
    events: {
        "LogAccumulateBadDebt(bytes32,address,uint256,uint256)": EventFragment;
        "LogAccumulateStablecoin(address,uint256)": EventFragment;
        "LogCage()": EventFragment;
        "LogCageCollateralPool(bytes32)": EventFragment;
        "LogFinalizeCashPrice(bytes32)": EventFragment;
        "LogFinalizeDebt()": EventFragment;
        "LogRedeemLockedCollateral(bytes32,address,uint256)": EventFragment;
        "LogRedeemStablecoin(bytes32,address,uint256)": EventFragment;
        "LogSetBookKeeper(address,address)": EventFragment;
        "LogSetCageCoolDown(address,uint256)": EventFragment;
        "LogSetLiquidationEngine(address,address)": EventFragment;
        "LogSetPriceOracle(address,address)": EventFragment;
        "LogSetSystemDebtEngine(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogAccumulateBadDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogAccumulateStablecoin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogCageCollateralPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogFinalizeCashPrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogFinalizeDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogRedeemLockedCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogRedeemStablecoin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetBookKeeper"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetCageCoolDown"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetLiquidationEngine"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetPriceOracle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetSystemDebtEngine"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogAccumulateBadDebtEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    collateralPoolId: string;
    positionAddress: string;
    amount: BigNumber;
    debtShare: BigNumber;
}>;
export declare type LogAccumulateBadDebtEventFilter = TypedEventFilter<LogAccumulateBadDebtEvent>;
export declare type LogAccumulateStablecoinEvent = TypedEvent<[
    string,
    BigNumber
], {
    ownerAddress: string;
    amount: BigNumber;
}>;
export declare type LogAccumulateStablecoinEventFilter = TypedEventFilter<LogAccumulateStablecoinEvent>;
export declare type LogCageEvent = TypedEvent<[], {}>;
export declare type LogCageEventFilter = TypedEventFilter<LogCageEvent>;
export declare type LogCageCollateralPoolEvent = TypedEvent<[
    string
], {
    collateralPoolId: string;
}>;
export declare type LogCageCollateralPoolEventFilter = TypedEventFilter<LogCageCollateralPoolEvent>;
export declare type LogFinalizeCashPriceEvent = TypedEvent<[
    string
], {
    collateralPoolId: string;
}>;
export declare type LogFinalizeCashPriceEventFilter = TypedEventFilter<LogFinalizeCashPriceEvent>;
export declare type LogFinalizeDebtEvent = TypedEvent<[], {}>;
export declare type LogFinalizeDebtEventFilter = TypedEventFilter<LogFinalizeDebtEvent>;
export declare type LogRedeemLockedCollateralEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    collateralPoolId: string;
    positionAddress: string;
    lockedCollateral: BigNumber;
}>;
export declare type LogRedeemLockedCollateralEventFilter = TypedEventFilter<LogRedeemLockedCollateralEvent>;
export declare type LogRedeemStablecoinEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    collateralPoolId: string;
    ownerAddress: string;
    amount: BigNumber;
}>;
export declare type LogRedeemStablecoinEventFilter = TypedEventFilter<LogRedeemStablecoinEvent>;
export declare type LogSetBookKeeperEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    _bookKeeper: string;
}>;
export declare type LogSetBookKeeperEventFilter = TypedEventFilter<LogSetBookKeeperEvent>;
export declare type LogSetCageCoolDownEvent = TypedEvent<[
    string,
    BigNumber
], {
    caller: string;
    _cageCoolDown: BigNumber;
}>;
export declare type LogSetCageCoolDownEventFilter = TypedEventFilter<LogSetCageCoolDownEvent>;
export declare type LogSetLiquidationEngineEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    _liquidationEngine: string;
}>;
export declare type LogSetLiquidationEngineEventFilter = TypedEventFilter<LogSetLiquidationEngineEvent>;
export declare type LogSetPriceOracleEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    _priceOracle: string;
}>;
export declare type LogSetPriceOracleEventFilter = TypedEventFilter<LogSetPriceOracleEvent>;
export declare type LogSetSystemDebtEngineEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    _systemDebtEngine: string;
}>;
export declare type LogSetSystemDebtEngineEventFilter = TypedEventFilter<LogSetSystemDebtEngineEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface ShowStopper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ShowStopperInterface;
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
        accumulateBadDebt(_collateralPoolId: BytesLike, _positionAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        accumulateStablecoin(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        badDebtAccumulator(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "cage(bytes32)"(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cageCoolDown(overrides?: CallOverrides): Promise<[BigNumber]>;
        cagePrice(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        cagedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        debt(overrides?: CallOverrides): Promise<[BigNumber]>;
        finalCashPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        finalizeCashPrice(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        finalizeDebt(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<[string]>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        redeemLockedCollateral(_collateralPoolId: BytesLike, _adapter: string, _positionAddress: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemStablecoin(_collateralPoolId: BytesLike, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemedStablecoinAmount(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setBookKeeper(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCageCoolDown(_cageCoolDown: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationEngine(_liquidationEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceOracle(_priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoinAccumulator(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        systemDebtEngine(overrides?: CallOverrides): Promise<[string]>;
        totalDebtShare(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    accumulateBadDebt(_collateralPoolId: BytesLike, _positionAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    accumulateStablecoin(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    badDebtAccumulator(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    "cage()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "cage(bytes32)"(_collateralPoolId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cageCoolDown(overrides?: CallOverrides): Promise<BigNumber>;
    cagePrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    cagedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    debt(overrides?: CallOverrides): Promise<BigNumber>;
    finalCashPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    finalizeCashPrice(_collateralPoolId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    finalizeDebt(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bookKeeper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationEngine(overrides?: CallOverrides): Promise<string>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    redeemLockedCollateral(_collateralPoolId: BytesLike, _adapter: string, _positionAddress: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemStablecoin(_collateralPoolId: BytesLike, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemedStablecoinAmount(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    setBookKeeper(_bookKeeper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCageCoolDown(_cageCoolDown: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationEngine(_liquidationEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceOracle(_priceOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoinAccumulator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    systemDebtEngine(overrides?: CallOverrides): Promise<string>;
    totalDebtShare(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        accumulateBadDebt(_collateralPoolId: BytesLike, _positionAddress: string, overrides?: CallOverrides): Promise<void>;
        accumulateStablecoin(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        badDebtAccumulator(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        "cage()"(overrides?: CallOverrides): Promise<void>;
        "cage(bytes32)"(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<void>;
        cageCoolDown(overrides?: CallOverrides): Promise<BigNumber>;
        cagePrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        cagedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        finalCashPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        finalizeCashPrice(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<void>;
        finalizeDebt(overrides?: CallOverrides): Promise<void>;
        initialize(_bookKeeper: string, overrides?: CallOverrides): Promise<void>;
        liquidationEngine(overrides?: CallOverrides): Promise<string>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        redeemLockedCollateral(_collateralPoolId: BytesLike, _adapter: string, _positionAddress: string, _collateralReceiver: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        redeemStablecoin(_collateralPoolId: BytesLike, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemedStablecoinAmount(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        setBookKeeper(_bookKeeper: string, overrides?: CallOverrides): Promise<void>;
        setCageCoolDown(_cageCoolDown: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationEngine(_liquidationEngine: string, overrides?: CallOverrides): Promise<void>;
        setPriceOracle(_priceOracle: string, overrides?: CallOverrides): Promise<void>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: CallOverrides): Promise<void>;
        stablecoinAccumulator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<string>;
        totalDebtShare(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LogAccumulateBadDebt(bytes32,address,uint256,uint256)"(collateralPoolId?: BytesLike | null, positionAddress?: string | null, amount?: null, debtShare?: null): LogAccumulateBadDebtEventFilter;
        LogAccumulateBadDebt(collateralPoolId?: BytesLike | null, positionAddress?: string | null, amount?: null, debtShare?: null): LogAccumulateBadDebtEventFilter;
        "LogAccumulateStablecoin(address,uint256)"(ownerAddress?: string | null, amount?: null): LogAccumulateStablecoinEventFilter;
        LogAccumulateStablecoin(ownerAddress?: string | null, amount?: null): LogAccumulateStablecoinEventFilter;
        "LogCage()"(): LogCageEventFilter;
        LogCage(): LogCageEventFilter;
        "LogCageCollateralPool(bytes32)"(collateralPoolId?: BytesLike | null): LogCageCollateralPoolEventFilter;
        LogCageCollateralPool(collateralPoolId?: BytesLike | null): LogCageCollateralPoolEventFilter;
        "LogFinalizeCashPrice(bytes32)"(collateralPoolId?: BytesLike | null): LogFinalizeCashPriceEventFilter;
        LogFinalizeCashPrice(collateralPoolId?: BytesLike | null): LogFinalizeCashPriceEventFilter;
        "LogFinalizeDebt()"(): LogFinalizeDebtEventFilter;
        LogFinalizeDebt(): LogFinalizeDebtEventFilter;
        "LogRedeemLockedCollateral(bytes32,address,uint256)"(collateralPoolId?: BytesLike | null, positionAddress?: string | null, lockedCollateral?: null): LogRedeemLockedCollateralEventFilter;
        LogRedeemLockedCollateral(collateralPoolId?: BytesLike | null, positionAddress?: string | null, lockedCollateral?: null): LogRedeemLockedCollateralEventFilter;
        "LogRedeemStablecoin(bytes32,address,uint256)"(collateralPoolId?: BytesLike | null, ownerAddress?: string | null, amount?: null): LogRedeemStablecoinEventFilter;
        LogRedeemStablecoin(collateralPoolId?: BytesLike | null, ownerAddress?: string | null, amount?: null): LogRedeemStablecoinEventFilter;
        "LogSetBookKeeper(address,address)"(caller?: string | null, _bookKeeper?: null): LogSetBookKeeperEventFilter;
        LogSetBookKeeper(caller?: string | null, _bookKeeper?: null): LogSetBookKeeperEventFilter;
        "LogSetCageCoolDown(address,uint256)"(caller?: string | null, _cageCoolDown?: null): LogSetCageCoolDownEventFilter;
        LogSetCageCoolDown(caller?: string | null, _cageCoolDown?: null): LogSetCageCoolDownEventFilter;
        "LogSetLiquidationEngine(address,address)"(caller?: string | null, _liquidationEngine?: null): LogSetLiquidationEngineEventFilter;
        LogSetLiquidationEngine(caller?: string | null, _liquidationEngine?: null): LogSetLiquidationEngineEventFilter;
        "LogSetPriceOracle(address,address)"(caller?: string | null, _priceOracle?: null): LogSetPriceOracleEventFilter;
        LogSetPriceOracle(caller?: string | null, _priceOracle?: null): LogSetPriceOracleEventFilter;
        "LogSetSystemDebtEngine(address,address)"(caller?: string | null, _systemDebtEngine?: null): LogSetSystemDebtEngineEventFilter;
        LogSetSystemDebtEngine(caller?: string | null, _systemDebtEngine?: null): LogSetSystemDebtEngineEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        accumulateBadDebt(_collateralPoolId: BytesLike, _positionAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        accumulateStablecoin(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        badDebtAccumulator(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "cage(bytes32)"(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cageCoolDown(overrides?: CallOverrides): Promise<BigNumber>;
        cagePrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        cagedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        debt(overrides?: CallOverrides): Promise<BigNumber>;
        finalCashPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        finalizeCashPrice(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        finalizeDebt(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(_collateralPoolId: BytesLike, _adapter: string, _positionAddress: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemStablecoin(_collateralPoolId: BytesLike, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemedStablecoinAmount(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        setBookKeeper(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCageCoolDown(_cageCoolDown: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationEngine(_liquidationEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceOracle(_priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoinAccumulator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemDebtEngine(overrides?: CallOverrides): Promise<BigNumber>;
        totalDebtShare(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accumulateBadDebt(_collateralPoolId: BytesLike, _positionAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        accumulateStablecoin(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        badDebtAccumulator(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "cage()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "cage(bytes32)"(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cageCoolDown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cagePrice(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cagedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalCashPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeCashPrice(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        finalizeDebt(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLockedCollateral(_collateralPoolId: BytesLike, _adapter: string, _positionAddress: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemStablecoin(_collateralPoolId: BytesLike, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemedStablecoinAmount(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBookKeeper(_bookKeeper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCageCoolDown(_cageCoolDown: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationEngine(_liquidationEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceOracle(_priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSystemDebtEngine(_systemDebtEngine: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoinAccumulator(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemDebtEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDebtShare(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
