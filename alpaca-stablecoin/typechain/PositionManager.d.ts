import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PositionManagerInterface extends ethers.utils.Interface {
    functions: {
        "adjustPosition(uint256,int256,int256,address,bytes)": FunctionFragment;
        "allowManagePosition(uint256,address,uint256)": FunctionFragment;
        "allowMigratePosition(address,uint256)": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "collateralPools(uint256)": FunctionFragment;
        "exportPosition(uint256,address)": FunctionFragment;
        "give(uint256,address)": FunctionFragment;
        "importPosition(address,uint256)": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "lastPositionId()": FunctionFragment;
        "list(uint256)": FunctionFragment;
        "mapPositionHandlerToOwner(address)": FunctionFragment;
        "migrationWhitelist(address,address)": FunctionFragment;
        "moveCollateral(uint256,address,uint256,address,bytes)": FunctionFragment;
        "movePosition(uint256,uint256)": FunctionFragment;
        "moveStablecoin(uint256,address,uint256)": FunctionFragment;
        "open(bytes32,address)": FunctionFragment;
        "ownerFirstPositionId(address)": FunctionFragment;
        "ownerLastPositionId(address)": FunctionFragment;
        "ownerPositionCount(address)": FunctionFragment;
        "ownerWhitelist(address,uint256,address)": FunctionFragment;
        "owners(uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "positions(uint256)": FunctionFragment;
        "redeemLockedCollateral(uint256,address,address,bytes)": FunctionFragment;
        "showStopper()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "adjustPosition", values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "allowManagePosition", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowMigratePosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPools", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exportPosition", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "give", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "importPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "lastPositionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "list", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mapPositionHandlerToOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "migrationWhitelist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "moveCollateral", values: [BigNumberish, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "movePosition", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveStablecoin", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "open", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "ownerFirstPositionId", values: [string]): string;
    encodeFunctionData(functionFragment: "ownerLastPositionId", values: [string]): string;
    encodeFunctionData(functionFragment: "ownerPositionCount", values: [string]): string;
    encodeFunctionData(functionFragment: "ownerWhitelist", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "owners", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "positions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemLockedCollateral", values: [BigNumberish, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "showStopper", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowManagePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowMigratePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exportPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "importPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPositionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapPositionHandlerToOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrationWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "movePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerFirstPositionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerLastPositionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerPositionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLockedCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "showStopper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogAllowManagePosition(address,uint256,address,address,uint256)": EventFragment;
        "LogAllowMigratePosition(address,address,uint256)": EventFragment;
        "LogExportPosition(uint256,address,address,uint256,uint256)": EventFragment;
        "LogImportPosition(uint256,address,address,uint256,uint256)": EventFragment;
        "LogMovePosition(uint256,uint256,uint256,uint256)": EventFragment;
        "LogNewPosition(address,address,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogAllowManagePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogAllowMigratePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogExportPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogImportPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogMovePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogNewPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogAllowManagePositionEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string,
    BigNumber
], {
    _caller: string;
    _positionId: BigNumber;
    _owner: string;
    _user: string;
    _ok: BigNumber;
}>;
export declare type LogAllowManagePositionEventFilter = TypedEventFilter<LogAllowManagePositionEvent>;
export declare type LogAllowMigratePositionEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _user: string;
    _ok: BigNumber;
}>;
export declare type LogAllowMigratePositionEventFilter = TypedEventFilter<LogAllowMigratePositionEvent>;
export declare type LogExportPositionEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], {
    _positionId: BigNumber;
    _source: string;
    _destination: string;
    _lockedCollateral: BigNumber;
    _debtShare: BigNumber;
}>;
export declare type LogExportPositionEventFilter = TypedEventFilter<LogExportPositionEvent>;
export declare type LogImportPositionEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], {
    _positionId: BigNumber;
    _source: string;
    _destination: string;
    _lockedCollateral: BigNumber;
    _debtShare: BigNumber;
}>;
export declare type LogImportPositionEventFilter = TypedEventFilter<LogImportPositionEvent>;
export declare type LogMovePositionEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    _sourceId: BigNumber;
    _destinationId: BigNumber;
    _lockedCollateral: BigNumber;
    _debtShare: BigNumber;
}>;
export declare type LogMovePositionEventFilter = TypedEventFilter<LogMovePositionEvent>;
export declare type LogNewPositionEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _usr: string;
    _own: string;
    _positionId: BigNumber;
}>;
export declare type LogNewPositionEventFilter = TypedEventFilter<LogNewPositionEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface PositionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PositionManagerInterface;
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
        adjustPosition(_positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowManagePosition(_positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowMigratePosition(_user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        exportPosition(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        give(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        importPosition(_source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bookKeeper: string, _showStopper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastPositionId(overrides?: CallOverrides): Promise<[BigNumber]>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            prev: BigNumber;
            next: BigNumber;
        }>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        migrationWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "moveCollateral(uint256,address,uint256,address,bytes)"(_positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "moveCollateral(bytes32,uint256,address,uint256,address,bytes)"(_collateralPoolId: BytesLike, _positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        movePosition(_sourceId: BigNumberish, _destinationId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveStablecoin(_positionId: BigNumberish, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        open(_collateralPoolId: BytesLike, _user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerFirstPositionId(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        ownerLastPositionId(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        ownerPositionCount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        redeemLockedCollateral(_posId: BigNumberish, _adapter: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        showStopper(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adjustPosition(_positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowManagePosition(_positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowMigratePosition(_user: string, _ok: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    exportPosition(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    give(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    importPosition(_source: string, _positionId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bookKeeper: string, _showStopper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastPositionId(overrides?: CallOverrides): Promise<BigNumber>;
    list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        prev: BigNumber;
        next: BigNumber;
    }>;
    mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<string>;
    migrationWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    "moveCollateral(uint256,address,uint256,address,bytes)"(_positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "moveCollateral(bytes32,uint256,address,uint256,address,bytes)"(_collateralPoolId: BytesLike, _positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    movePosition(_sourceId: BigNumberish, _destinationId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveStablecoin(_positionId: BigNumberish, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    open(_collateralPoolId: BytesLike, _user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerFirstPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    ownerLastPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    ownerPositionCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
    owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    redeemLockedCollateral(_posId: BigNumberish, _adapter: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    showStopper(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adjustPosition(_positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        allowManagePosition(_positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowMigratePosition(_user: string, _ok: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        exportPosition(_positionId: BigNumberish, _destination: string, overrides?: CallOverrides): Promise<void>;
        give(_positionId: BigNumberish, _destination: string, overrides?: CallOverrides): Promise<void>;
        importPosition(_source: string, _positionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_bookKeeper: string, _showStopper: string, overrides?: CallOverrides): Promise<void>;
        lastPositionId(overrides?: CallOverrides): Promise<BigNumber>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            prev: BigNumber;
            next: BigNumber;
        }>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<string>;
        migrationWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        "moveCollateral(uint256,address,uint256,address,bytes)"(_positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "moveCollateral(bytes32,uint256,address,uint256,address,bytes)"(_collateralPoolId: BytesLike, _positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        movePosition(_sourceId: BigNumberish, _destinationId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveStablecoin(_positionId: BigNumberish, _destination: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        open(_collateralPoolId: BytesLike, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerFirstPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerLastPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerPositionCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        redeemLockedCollateral(_posId: BigNumberish, _adapter: string, _collateralReceiver: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        showStopper(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogAllowManagePosition(address,uint256,address,address,uint256)"(_caller?: string | null, _positionId?: BigNumberish | null, _owner?: null, _user?: null, _ok?: null): LogAllowManagePositionEventFilter;
        LogAllowManagePosition(_caller?: string | null, _positionId?: BigNumberish | null, _owner?: null, _user?: null, _ok?: null): LogAllowManagePositionEventFilter;
        "LogAllowMigratePosition(address,address,uint256)"(_caller?: string | null, _user?: null, _ok?: null): LogAllowMigratePositionEventFilter;
        LogAllowMigratePosition(_caller?: string | null, _user?: null, _ok?: null): LogAllowMigratePositionEventFilter;
        "LogExportPosition(uint256,address,address,uint256,uint256)"(_positionId?: BigNumberish | null, _source?: null, _destination?: null, _lockedCollateral?: null, _debtShare?: null): LogExportPositionEventFilter;
        LogExportPosition(_positionId?: BigNumberish | null, _source?: null, _destination?: null, _lockedCollateral?: null, _debtShare?: null): LogExportPositionEventFilter;
        "LogImportPosition(uint256,address,address,uint256,uint256)"(_positionId?: BigNumberish | null, _source?: null, _destination?: null, _lockedCollateral?: null, _debtShare?: null): LogImportPositionEventFilter;
        LogImportPosition(_positionId?: BigNumberish | null, _source?: null, _destination?: null, _lockedCollateral?: null, _debtShare?: null): LogImportPositionEventFilter;
        "LogMovePosition(uint256,uint256,uint256,uint256)"(_sourceId?: null, _destinationId?: null, _lockedCollateral?: null, _debtShare?: null): LogMovePositionEventFilter;
        LogMovePosition(_sourceId?: null, _destinationId?: null, _lockedCollateral?: null, _debtShare?: null): LogMovePositionEventFilter;
        "LogNewPosition(address,address,uint256)"(_usr?: string | null, _own?: string | null, _positionId?: BigNumberish | null): LogNewPositionEventFilter;
        LogNewPosition(_usr?: string | null, _own?: string | null, _positionId?: BigNumberish | null): LogNewPositionEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        adjustPosition(_positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowManagePosition(_positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowMigratePosition(_user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exportPosition(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        give(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        importPosition(_source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bookKeeper: string, _showStopper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastPositionId(overrides?: CallOverrides): Promise<BigNumber>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        migrationWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        "moveCollateral(uint256,address,uint256,address,bytes)"(_positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "moveCollateral(bytes32,uint256,address,uint256,address,bytes)"(_collateralPoolId: BytesLike, _positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        movePosition(_sourceId: BigNumberish, _destinationId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveStablecoin(_positionId: BigNumberish, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        open(_collateralPoolId: BytesLike, _user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerFirstPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerLastPositionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerPositionCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(_posId: BigNumberish, _adapter: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        showStopper(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adjustPosition(_positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowManagePosition(_positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowMigratePosition(_user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exportPosition(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        give(_positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        importPosition(_source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _showStopper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastPositionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrationWhitelist(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "moveCollateral(uint256,address,uint256,address,bytes)"(_positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "moveCollateral(bytes32,uint256,address,uint256,address,bytes)"(_collateralPoolId: BytesLike, _positionId: BigNumberish, _destination: string, _wad: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        movePosition(_sourceId: BigNumberish, _destinationId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveStablecoin(_positionId: BigNumberish, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        open(_collateralPoolId: BytesLike, _user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerFirstPositionId(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerLastPositionId(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerPositionCount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLockedCollateral(_posId: BigNumberish, _adapter: string, _collateralReceiver: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        showStopper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
