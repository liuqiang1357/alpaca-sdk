import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StrictAlpacaOraclePriceFeedInterface extends ethers.utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "accessControlConfig()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,address,address,address,address,address,address)": FunctionFragment;
        "maxPriceDiff()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "peekPrice()": FunctionFragment;
        "priceLife()": FunctionFragment;
        "primary()": FunctionFragment;
        "readPrice()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "secondary()": FunctionFragment;
        "setMaxPriceDiff(uint256)": FunctionFragment;
        "setPriceLife(uint256)": FunctionFragment;
        "setPrimary(address,address,address)": FunctionFragment;
        "setSecondary(address,address,address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "maxPriceDiff", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "peekPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceLife", values?: undefined): string;
    encodeFunctionData(functionFragment: "primary", values?: undefined): string;
    encodeFunctionData(functionFragment: "readPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "secondary", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMaxPriceDiff", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPriceLife", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrimary", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "setSecondary", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxPriceDiff", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peekPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceLife", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxPriceDiff", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceLife", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSecondary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogSetMaxPriceDiff(address,uint256)": EventFragment;
        "LogSetPriceLife(address,uint256)": EventFragment;
        "LogSetPrimary(address,address,address,address)": EventFragment;
        "LogSetSecondary(address,address,address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetMaxPriceDiff"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetPriceLife"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetPrimary"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetSecondary"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogSetMaxPriceDiffEvent = TypedEvent<[
    string,
    BigNumber
], {
    caller: string;
    maxPriceDiff: BigNumber;
}>;
export declare type LogSetMaxPriceDiffEventFilter = TypedEventFilter<LogSetMaxPriceDiffEvent>;
export declare type LogSetPriceLifeEvent = TypedEvent<[
    string,
    BigNumber
], {
    caller: string;
    second: BigNumber;
}>;
export declare type LogSetPriceLifeEventFilter = TypedEventFilter<LogSetPriceLifeEvent>;
export declare type LogSetPrimaryEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    caller: string;
    newAlpacaOracle: string;
    primaryToken0: string;
    primaryToken1: string;
}>;
export declare type LogSetPrimaryEventFilter = TypedEventFilter<LogSetPrimaryEvent>;
export declare type LogSetSecondaryEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    caller: string;
    newAlpacaOracle: string;
    secondaryToken0: string;
    secondaryToken1: string;
}>;
export declare type LogSetSecondaryEventFilter = TypedEventFilter<LogSetSecondaryEvent>;
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
export interface StrictAlpacaOraclePriceFeed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StrictAlpacaOraclePriceFeedInterface;
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
        accessControlConfig(overrides?: CallOverrides): Promise<[string]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, _secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxPriceDiff(overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        priceLife(overrides?: CallOverrides): Promise<[BigNumber]>;
        primary(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            alpacaOracle: string;
            token0: string;
            token1: string;
        }>;
        readPrice(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        secondary(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            alpacaOracle: string;
            token0: string;
            token1: string;
        }>;
        setMaxPriceDiff(_maxPriceDiff: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimary(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSecondary(_secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, _secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, _accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxPriceDiff(overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
    priceLife(overrides?: CallOverrides): Promise<BigNumber>;
    primary(overrides?: CallOverrides): Promise<[
        string,
        string,
        string
    ] & {
        alpacaOracle: string;
        token0: string;
        token1: string;
    }>;
    readPrice(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    secondary(overrides?: CallOverrides): Promise<[
        string,
        string,
        string
    ] & {
        alpacaOracle: string;
        token0: string;
        token1: string;
    }>;
    setMaxPriceDiff(_maxPriceDiff: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceLife(_second: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimary(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSecondary(_secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, _secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, _accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        maxPriceDiff(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        priceLife(overrides?: CallOverrides): Promise<BigNumber>;
        primary(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            alpacaOracle: string;
            token0: string;
            token1: string;
        }>;
        readPrice(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        secondary(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            alpacaOracle: string;
            token0: string;
            token1: string;
        }>;
        setMaxPriceDiff(_maxPriceDiff: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPriceLife(_second: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrimary(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, overrides?: CallOverrides): Promise<void>;
        setSecondary(_secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetMaxPriceDiff(address,uint256)"(caller?: string | null, maxPriceDiff?: null): LogSetMaxPriceDiffEventFilter;
        LogSetMaxPriceDiff(caller?: string | null, maxPriceDiff?: null): LogSetMaxPriceDiffEventFilter;
        "LogSetPriceLife(address,uint256)"(caller?: string | null, second?: null): LogSetPriceLifeEventFilter;
        LogSetPriceLife(caller?: string | null, second?: null): LogSetPriceLifeEventFilter;
        "LogSetPrimary(address,address,address,address)"(caller?: string | null, newAlpacaOracle?: null, primaryToken0?: null, primaryToken1?: null): LogSetPrimaryEventFilter;
        LogSetPrimary(caller?: string | null, newAlpacaOracle?: null, primaryToken0?: null, primaryToken1?: null): LogSetPrimaryEventFilter;
        "LogSetSecondary(address,address,address,address)"(caller?: string | null, newAlpacaOracle?: null, secondaryToken0?: null, secondaryToken1?: null): LogSetSecondaryEventFilter;
        LogSetSecondary(caller?: string | null, newAlpacaOracle?: null, secondaryToken0?: null, secondaryToken1?: null): LogSetSecondaryEventFilter;
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
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, _secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxPriceDiff(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        peekPrice(overrides?: CallOverrides): Promise<BigNumber>;
        priceLife(overrides?: CallOverrides): Promise<BigNumber>;
        primary(overrides?: CallOverrides): Promise<BigNumber>;
        readPrice(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        secondary(overrides?: CallOverrides): Promise<BigNumber>;
        setMaxPriceDiff(_maxPriceDiff: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimary(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSecondary(_secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, _secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, _accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxPriceDiff(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peekPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceLife(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        secondary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMaxPriceDiff(_maxPriceDiff: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceLife(_second: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimary(_primaryAlpacaOracle: string, _primaryToken0: string, _primaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSecondary(_secondaryAlpacaOracle: string, _secondaryToken0: string, _secondaryToken1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
