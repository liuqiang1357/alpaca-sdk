import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AuthTokenAdapterInterface extends ethers.utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "WHITELISTED()": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "cage()": FunctionFragment;
        "collateralPoolId()": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(address,uint256,address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,bytes32,address)": FunctionFragment;
        "live()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "token()": FunctionFragment;
        "uncage()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WHITELISTED", values?: undefined): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WHITELISTED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "LogCage()": EventFragment;
        "LogDeposit(address,uint256,address)": EventFragment;
        "LogUncage()": EventFragment;
        "LogWithdraw(address,uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogUncage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogCageEvent = TypedEvent<[], {}>;
export declare type LogCageEventFilter = TypedEventFilter<LogCageEvent>;
export declare type LogDepositEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    urn: string;
    wad: BigNumber;
    msgSender: string;
}>;
export declare type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;
export declare type LogUncageEvent = TypedEvent<[], {}>;
export declare type LogUncageEventFilter = TypedEventFilter<LogUncageEvent>;
export declare type LogWithdrawEvent = TypedEvent<[
    string,
    BigNumber
], {
    guy: string;
    wad: BigNumber;
}>;
export declare type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface AuthTokenAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AuthTokenAdapterInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        WHITELISTED(overrides?: CallOverrides): Promise<[string]>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralPoolId(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_urn: string, _wad: BigNumberish, _msgSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(_guy: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    WHITELISTED(overrides?: CallOverrides): Promise<string>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralPoolId(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_urn: string, _wad: BigNumberish, _msgSender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    uncage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(_guy: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        WHITELISTED(overrides?: CallOverrides): Promise<string>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        cage(overrides?: CallOverrides): Promise<void>;
        collateralPoolId(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_urn: string, _wad: BigNumberish, _msgSender: string, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _token: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        uncage(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        withdraw(_guy: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogCage()"(): LogCageEventFilter;
        LogCage(): LogCageEventFilter;
        "LogDeposit(address,uint256,address)"(urn?: string | null, wad?: null, msgSender?: string | null): LogDepositEventFilter;
        LogDeposit(urn?: string | null, wad?: null, msgSender?: string | null): LogDepositEventFilter;
        "LogUncage()"(): LogUncageEventFilter;
        LogUncage(): LogUncageEventFilter;
        "LogWithdraw(address,uint256)"(guy?: string | null, wad?: null): LogWithdrawEventFilter;
        LogWithdraw(guy?: string | null, wad?: null): LogWithdrawEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        WHITELISTED(overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralPoolId(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_urn: string, _wad: BigNumberish, _msgSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(_guy: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WHITELISTED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_urn: string, _wad: BigNumberish, _msgSender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_guy: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
