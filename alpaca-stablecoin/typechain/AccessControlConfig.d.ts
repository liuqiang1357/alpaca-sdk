import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccessControlConfigInterface extends ethers.utils.Interface {
    functions: {
        "ADAPTER_ROLE()": FunctionFragment;
        "BOOK_KEEPER_ROLE()": FunctionFragment;
        "COLLATERAL_MANAGER_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "GOV_ROLE()": FunctionFragment;
        "LIQUIDATION_ENGINE_ROLE()": FunctionFragment;
        "MINTABLE_ROLE()": FunctionFragment;
        "OWNER_ROLE()": FunctionFragment;
        "POSITION_MANAGER_ROLE()": FunctionFragment;
        "PRICE_ORACLE_ROLE()": FunctionFragment;
        "SHOW_STOPPER_ROLE()": FunctionFragment;
        "STABILITY_FEE_COLLECTOR_ROLE()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "ADAPTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "BOOK_KEEPER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "COLLATERAL_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOV_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "LIQUIDATION_ENGINE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTABLE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "OWNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "POSITION_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_ORACLE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SHOW_STOPPER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "STABILITY_FEE_COLLECTOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "ADAPTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BOOK_KEEPER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COLLATERAL_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOV_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LIQUIDATION_ENGINE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTABLE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POSITION_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_ORACLE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SHOW_STOPPER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STABILITY_FEE_COLLECTOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    events: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
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
export interface AccessControlConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccessControlConfigInterface;
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
        ADAPTER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        BOOK_KEEPER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        COLLATERAL_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        GOV_ROLE(overrides?: CallOverrides): Promise<[string]>;
        LIQUIDATION_ENGINE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MINTABLE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        OWNER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        POSITION_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PRICE_ORACLE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        SHOW_STOPPER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        STABILITY_FEE_COLLECTOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    ADAPTER_ROLE(overrides?: CallOverrides): Promise<string>;
    BOOK_KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;
    COLLATERAL_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    GOV_ROLE(overrides?: CallOverrides): Promise<string>;
    LIQUIDATION_ENGINE_ROLE(overrides?: CallOverrides): Promise<string>;
    MINTABLE_ROLE(overrides?: CallOverrides): Promise<string>;
    OWNER_ROLE(overrides?: CallOverrides): Promise<string>;
    POSITION_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    PRICE_ORACLE_ROLE(overrides?: CallOverrides): Promise<string>;
    SHOW_STOPPER_ROLE(overrides?: CallOverrides): Promise<string>;
    STABILITY_FEE_COLLECTOR_ROLE(overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADAPTER_ROLE(overrides?: CallOverrides): Promise<string>;
        BOOK_KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;
        COLLATERAL_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        GOV_ROLE(overrides?: CallOverrides): Promise<string>;
        LIQUIDATION_ENGINE_ROLE(overrides?: CallOverrides): Promise<string>;
        MINTABLE_ROLE(overrides?: CallOverrides): Promise<string>;
        OWNER_ROLE(overrides?: CallOverrides): Promise<string>;
        POSITION_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        PRICE_ORACLE_ROLE(overrides?: CallOverrides): Promise<string>;
        SHOW_STOPPER_ROLE(overrides?: CallOverrides): Promise<string>;
        STABILITY_FEE_COLLECTOR_ROLE(overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        ADAPTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        BOOK_KEEPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        COLLATERAL_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        GOV_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        LIQUIDATION_ENGINE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MINTABLE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        OWNER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        POSITION_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_ORACLE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        SHOW_STOPPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STABILITY_FEE_COLLECTOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADAPTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BOOK_KEEPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COLLATERAL_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOV_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LIQUIDATION_ENGINE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTABLE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OWNER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POSITION_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_ORACLE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SHOW_STOPPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STABILITY_FEE_COLLECTOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
