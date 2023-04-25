import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BookKeeperInterface extends ethers.utils.Interface {
    functions: {
        "accessControlConfig()": FunctionFragment;
        "accrueStabilityFee(bytes32,address,int256)": FunctionFragment;
        "addCollateral(bytes32,address,int256)": FunctionFragment;
        "adjustPosition(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "blacklist(address)": FunctionFragment;
        "cage()": FunctionFragment;
        "collateralPoolConfig()": FunctionFragment;
        "collateralToken(bytes32,address)": FunctionFragment;
        "confiscatePosition(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "live()": FunctionFragment;
        "mintUnbackedStablecoin(address,address,uint256)": FunctionFragment;
        "moveCollateral(bytes32,address,address,uint256)": FunctionFragment;
        "movePosition(bytes32,address,address,int256,int256)": FunctionFragment;
        "moveStablecoin(address,address,uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "positionWhitelist(address,address)": FunctionFragment;
        "positions(bytes32,address)": FunctionFragment;
        "setAccessControlConfig(address)": FunctionFragment;
        "setCollateralPoolConfig(address)": FunctionFragment;
        "setTotalDebtCeiling(uint256)": FunctionFragment;
        "settleSystemBadDebt(uint256)": FunctionFragment;
        "stablecoin(address)": FunctionFragment;
        "systemBadDebt(address)": FunctionFragment;
        "totalDebtCeiling()": FunctionFragment;
        "totalStablecoinIssued()": FunctionFragment;
        "totalUnbackedStablecoin()": FunctionFragment;
        "uncage()": FunctionFragment;
        "unpause()": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueStabilityFee", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "adjustPosition", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "blacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralToken", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "confiscatePosition", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintUnbackedStablecoin", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveCollateral", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "movePosition", values: [BytesLike, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveStablecoin", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionWhitelist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positions", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAccessControlConfig", values: [string]): string;
    encodeFunctionData(functionFragment: "setCollateralPoolConfig", values: [string]): string;
    encodeFunctionData(functionFragment: "setTotalDebtCeiling", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "settleSystemBadDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stablecoin", values: [string]): string;
    encodeFunctionData(functionFragment: "systemBadDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "totalDebtCeiling", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStablecoinIssued", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalUnbackedStablecoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueStabilityFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confiscatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintUnbackedStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "movePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralPoolConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTotalDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleSystemBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStablecoinIssued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalUnbackedStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "LogAddCollateral(address,address,int256)": EventFragment;
        "LogAdjustPosition(address,bytes32,address,uint256,uint256,int256,int256)": EventFragment;
        "LogCage()": EventFragment;
        "LogMoveCollateral(address,bytes32,address,address,uint256)": EventFragment;
        "LogSetAccessControlConfig(address,address)": EventFragment;
        "LogSetCollateralPoolConfig(address,address)": EventFragment;
        "LogSetTotalDebtCeiling(address,uint256)": EventFragment;
        "LogUncage()": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogAddCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogAdjustPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogMoveCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetAccessControlConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetCollateralPoolConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetTotalDebtCeiling"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogUncage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogAddCollateralEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _usr: string;
    _amount: BigNumber;
}>;
export declare type LogAddCollateralEventFilter = TypedEventFilter<LogAddCollateralEvent>;
export declare type LogAdjustPositionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _positionAddress: string;
    _lockedCollateral: BigNumber;
    _debtShare: BigNumber;
    _addCollateral: BigNumber;
    _addDebtShare: BigNumber;
}>;
export declare type LogAdjustPositionEventFilter = TypedEventFilter<LogAdjustPositionEvent>;
export declare type LogCageEvent = TypedEvent<[], {}>;
export declare type LogCageEventFilter = TypedEventFilter<LogCageEvent>;
export declare type LogMoveCollateralEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _src: string;
    _dst: string;
    _amount: BigNumber;
}>;
export declare type LogMoveCollateralEventFilter = TypedEventFilter<LogMoveCollateralEvent>;
export declare type LogSetAccessControlConfigEvent = TypedEvent<[
    string,
    string
], {
    _caller: string;
    _accessControlConfig: string;
}>;
export declare type LogSetAccessControlConfigEventFilter = TypedEventFilter<LogSetAccessControlConfigEvent>;
export declare type LogSetCollateralPoolConfigEvent = TypedEvent<[
    string,
    string
], {
    _caller: string;
    _collateralPoolConfig: string;
}>;
export declare type LogSetCollateralPoolConfigEventFilter = TypedEventFilter<LogSetCollateralPoolConfigEvent>;
export declare type LogSetTotalDebtCeilingEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _totalDebtCeiling: BigNumber;
}>;
export declare type LogSetTotalDebtCeilingEventFilter = TypedEventFilter<LogSetTotalDebtCeilingEvent>;
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
export interface BookKeeper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BookKeeperInterface;
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
        accrueStabilityFee(_collateralPoolId: BytesLike, _stabilityFeeRecipient: string, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addCollateral(_collateralPoolId: BytesLike, _usr: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adjustPosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralOwner: string, _stablecoinOwner: string, _collateralValue: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<[string]>;
        collateralToken(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        confiscatePosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralCreditor: string, _stablecoinDebtor: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_collateralPoolConfig: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintUnbackedStablecoin(_from: string, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveCollateral(_collateralPoolId: BytesLike, _src: string, _dst: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        movePosition(_collateralPoolId: BytesLike, _src: string, _dst: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveStablecoin(_src: string, _dst: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        positionWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positions(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            debtShare: BigNumber;
        }>;
        setAccessControlConfig(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCollateralPoolConfig(_collateralPoolConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTotalDebtCeiling(_totalDebtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settleSystemBadDebt(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoin(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        systemBadDebt(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDebtCeiling(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStablecoinIssued(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalUnbackedStablecoin(overrides?: CallOverrides): Promise<[BigNumber]>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    accrueStabilityFee(_collateralPoolId: BytesLike, _stabilityFeeRecipient: string, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addCollateral(_collateralPoolId: BytesLike, _usr: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adjustPosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralOwner: string, _stablecoinOwner: string, _collateralValue: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralPoolConfig(overrides?: CallOverrides): Promise<string>;
    collateralToken(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    confiscatePosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralCreditor: string, _stablecoinDebtor: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_collateralPoolConfig: string, _accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    mintUnbackedStablecoin(_from: string, _to: string, _value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveCollateral(_collateralPoolId: BytesLike, _src: string, _dst: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    movePosition(_collateralPoolId: BytesLike, _src: string, _dst: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveStablecoin(_src: string, _dst: string, _value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    positionWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    positions(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lockedCollateral: BigNumber;
        debtShare: BigNumber;
    }>;
    setAccessControlConfig(_accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCollateralPoolConfig(_collateralPoolConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTotalDebtCeiling(_totalDebtCeiling: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settleSystemBadDebt(_value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    systemBadDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalDebtCeiling(overrides?: CallOverrides): Promise<BigNumber>;
    totalStablecoinIssued(overrides?: CallOverrides): Promise<BigNumber>;
    totalUnbackedStablecoin(overrides?: CallOverrides): Promise<BigNumber>;
    uncage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        accrueStabilityFee(_collateralPoolId: BytesLike, _stabilityFeeRecipient: string, _debtAccumulatedRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addCollateral(_collateralPoolId: BytesLike, _usr: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        adjustPosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralOwner: string, _stablecoinOwner: string, _collateralValue: BigNumberish, _debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        blacklist(toBeBlacklistedAddress: string, overrides?: CallOverrides): Promise<void>;
        cage(overrides?: CallOverrides): Promise<void>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<string>;
        collateralToken(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        confiscatePosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralCreditor: string, _stablecoinDebtor: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_collateralPoolConfig: string, _accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        mintUnbackedStablecoin(_from: string, _to: string, _value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveCollateral(_collateralPoolId: BytesLike, _src: string, _dst: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        movePosition(_collateralPoolId: BytesLike, _src: string, _dst: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveStablecoin(_src: string, _dst: string, _value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        positionWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            debtShare: BigNumber;
        }>;
        setAccessControlConfig(_accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        setCollateralPoolConfig(_collateralPoolConfig: string, overrides?: CallOverrides): Promise<void>;
        setTotalDebtCeiling(_totalDebtCeiling: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settleSystemBadDebt(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stablecoin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemBadDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDebtCeiling(overrides?: CallOverrides): Promise<BigNumber>;
        totalStablecoinIssued(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnbackedStablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        whitelist(toBeWhitelistedAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogAddCollateral(address,address,int256)"(_caller?: string | null, _usr?: null, _amount?: null): LogAddCollateralEventFilter;
        LogAddCollateral(_caller?: string | null, _usr?: null, _amount?: null): LogAddCollateralEventFilter;
        "LogAdjustPosition(address,bytes32,address,uint256,uint256,int256,int256)"(_caller?: string | null, _collateralPoolId?: null, _positionAddress?: null, _lockedCollateral?: null, _debtShare?: null, _addCollateral?: null, _addDebtShare?: null): LogAdjustPositionEventFilter;
        LogAdjustPosition(_caller?: string | null, _collateralPoolId?: null, _positionAddress?: null, _lockedCollateral?: null, _debtShare?: null, _addCollateral?: null, _addDebtShare?: null): LogAdjustPositionEventFilter;
        "LogCage()"(): LogCageEventFilter;
        LogCage(): LogCageEventFilter;
        "LogMoveCollateral(address,bytes32,address,address,uint256)"(_caller?: string | null, _collateralPoolId?: null, _src?: null, _dst?: null, _amount?: null): LogMoveCollateralEventFilter;
        LogMoveCollateral(_caller?: string | null, _collateralPoolId?: null, _src?: null, _dst?: null, _amount?: null): LogMoveCollateralEventFilter;
        "LogSetAccessControlConfig(address,address)"(_caller?: string | null, _accessControlConfig?: null): LogSetAccessControlConfigEventFilter;
        LogSetAccessControlConfig(_caller?: string | null, _accessControlConfig?: null): LogSetAccessControlConfigEventFilter;
        "LogSetCollateralPoolConfig(address,address)"(_caller?: string | null, _collateralPoolConfig?: null): LogSetCollateralPoolConfigEventFilter;
        LogSetCollateralPoolConfig(_caller?: string | null, _collateralPoolConfig?: null): LogSetCollateralPoolConfigEventFilter;
        "LogSetTotalDebtCeiling(address,uint256)"(_caller?: string | null, _totalDebtCeiling?: null): LogSetTotalDebtCeilingEventFilter;
        LogSetTotalDebtCeiling(_caller?: string | null, _totalDebtCeiling?: null): LogSetTotalDebtCeilingEventFilter;
        "LogUncage()"(): LogUncageEventFilter;
        LogUncage(): LogUncageEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        accrueStabilityFee(_collateralPoolId: BytesLike, _stabilityFeeRecipient: string, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addCollateral(_collateralPoolId: BytesLike, _usr: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adjustPosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralOwner: string, _stablecoinOwner: string, _collateralValue: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<BigNumber>;
        collateralToken(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        confiscatePosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralCreditor: string, _stablecoinDebtor: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_collateralPoolConfig: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        mintUnbackedStablecoin(_from: string, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveCollateral(_collateralPoolId: BytesLike, _src: string, _dst: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        movePosition(_collateralPoolId: BytesLike, _src: string, _dst: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveStablecoin(_src: string, _dst: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        positionWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAccessControlConfig(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCollateralPoolConfig(_collateralPoolConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTotalDebtCeiling(_totalDebtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settleSystemBadDebt(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemBadDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDebtCeiling(overrides?: CallOverrides): Promise<BigNumber>;
        totalStablecoinIssued(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnbackedStablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueStabilityFee(_collateralPoolId: BytesLike, _stabilityFeeRecipient: string, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addCollateral(_collateralPoolId: BytesLike, _usr: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adjustPosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralOwner: string, _stablecoinOwner: string, _collateralValue: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralToken(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confiscatePosition(_collateralPoolId: BytesLike, _positionAddress: string, _collateralCreditor: string, _stablecoinDebtor: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_collateralPoolConfig: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintUnbackedStablecoin(_from: string, _to: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveCollateral(_collateralPoolId: BytesLike, _src: string, _dst: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        movePosition(_collateralPoolId: BytesLike, _src: string, _dst: string, _collateralAmount: BigNumberish, _debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveStablecoin(_src: string, _dst: string, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAccessControlConfig(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCollateralPoolConfig(_collateralPoolConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTotalDebtCeiling(_totalDebtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settleSystemBadDebt(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoin(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemBadDebt(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDebtCeiling(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStablecoinIssued(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalUnbackedStablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
