import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IbTokenPriceFeedInterface extends ethers.utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "accessControlConfig()": FunctionFragment;
        "baseInUsdPriceFeed()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "ibInBasePriceFeed()": FunctionFragment;
        "initialize(address,address,address,uint256)": FunctionFragment;
        "lastUpdateTimestamp()": FunctionFragment;
        "pass()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "peekNextPrice()": FunctionFragment;
        "peekPrice()": FunctionFragment;
        "readPrice()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setBaseInUsdPriceFeed(address)": FunctionFragment;
        "setIbInBasePriceFeed(address)": FunctionFragment;
        "setPrice()": FunctionFragment;
        "setTimeDelay(uint256)": FunctionFragment;
        "timeDelay()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseInUsdPriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "ibInBasePriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lastUpdateTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "pass", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "peekNextPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "peekPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "readPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setBaseInUsdPriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "setIbInBasePriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "setPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTimeDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timeDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseInUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ibInBasePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peekNextPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peekPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseInUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIbInBasePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTimeDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogSetTimeDelay(address,uint256)": EventFragment;
        "LogValue(bytes32)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SetBaseInUsdPriceFeed(address,address)": EventFragment;
        "SetIbInBasePriceFeed(address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetTimeDelay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogValue"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBaseInUsdPriceFeed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetIbInBasePriceFeed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogSetTimeDelayEvent = TypedEvent<[
    string,
    BigNumber
], {
    caller: string;
    newTimeDelay: BigNumber;
}>;
export declare type LogSetTimeDelayEventFilter = TypedEventFilter<LogSetTimeDelayEvent>;
export declare type LogValueEvent = TypedEvent<[string], {
    val: string;
}>;
export declare type LogValueEventFilter = TypedEventFilter<LogValueEvent>;
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
export declare type SetBaseInUsdPriceFeedEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    newBaseInUserPriceFeed: string;
}>;
export declare type SetBaseInUsdPriceFeedEventFilter = TypedEventFilter<SetBaseInUsdPriceFeedEvent>;
export declare type SetIbInBasePriceFeedEvent = TypedEvent<[
    string,
    string
], {
    caller: string;
    newIbInBasePriceFeed: string;
}>;
export declare type SetIbInBasePriceFeedEventFilter = TypedEventFilter<SetIbInBasePriceFeedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface IbTokenPriceFeed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IbTokenPriceFeedInterface;
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
        baseInUsdPriceFeed(overrides?: CallOverrides): Promise<[string]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        ibInBasePriceFeed(overrides?: CallOverrides): Promise<[string]>;
        initialize(_ibInBasePriceFeed: string, _baseInUsdPriceFeed: string, _accessControlConfig: string, _timeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastUpdateTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        pass(overrides?: CallOverrides): Promise<[boolean] & {
            ok: boolean;
        }>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        peekNextPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        readPrice(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBaseInUsdPriceFeed(_newBaseInUsdPriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setIbInBasePriceFeed(_newIbInBasePriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTimeDelay(_newTimeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        timeDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    baseInUsdPriceFeed(overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    ibInBasePriceFeed(overrides?: CallOverrides): Promise<string>;
    initialize(_ibInBasePriceFeed: string, _baseInUsdPriceFeed: string, _accessControlConfig: string, _timeDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastUpdateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    pass(overrides?: CallOverrides): Promise<boolean>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    peekNextPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
    peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
    readPrice(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBaseInUsdPriceFeed(_newBaseInUsdPriceFeed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setIbInBasePriceFeed(_newIbInBasePriceFeed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrice(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTimeDelay(_newTimeDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    timeDelay(overrides?: CallOverrides): Promise<BigNumber>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        baseInUsdPriceFeed(overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        ibInBasePriceFeed(overrides?: CallOverrides): Promise<string>;
        initialize(_ibInBasePriceFeed: string, _baseInUsdPriceFeed: string, _accessControlConfig: string, _timeDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lastUpdateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        pass(overrides?: CallOverrides): Promise<boolean>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        peekNextPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        readPrice(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setBaseInUsdPriceFeed(_newBaseInUsdPriceFeed: string, overrides?: CallOverrides): Promise<void>;
        setIbInBasePriceFeed(_newIbInBasePriceFeed: string, overrides?: CallOverrides): Promise<void>;
        setPrice(overrides?: CallOverrides): Promise<void>;
        setTimeDelay(_newTimeDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        timeDelay(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetTimeDelay(address,uint256)"(caller?: string | null, newTimeDelay?: null): LogSetTimeDelayEventFilter;
        LogSetTimeDelay(caller?: string | null, newTimeDelay?: null): LogSetTimeDelayEventFilter;
        "LogValue(bytes32)"(val?: null): LogValueEventFilter;
        LogValue(val?: null): LogValueEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "SetBaseInUsdPriceFeed(address,address)"(caller?: string | null, newBaseInUserPriceFeed?: null): SetBaseInUsdPriceFeedEventFilter;
        SetBaseInUsdPriceFeed(caller?: string | null, newBaseInUserPriceFeed?: null): SetBaseInUsdPriceFeedEventFilter;
        "SetIbInBasePriceFeed(address,address)"(caller?: string | null, newIbInBasePriceFeed?: null): SetIbInBasePriceFeedEventFilter;
        SetIbInBasePriceFeed(caller?: string | null, newIbInBasePriceFeed?: null): SetIbInBasePriceFeedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        baseInUsdPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        ibInBasePriceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_ibInBasePriceFeed: string, _baseInUsdPriceFeed: string, _accessControlConfig: string, _timeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastUpdateTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        pass(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        peekNextPrice(overrides?: CallOverrides): Promise<BigNumber>;
        peekPrice(overrides?: CallOverrides): Promise<BigNumber>;
        readPrice(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBaseInUsdPriceFeed(_newBaseInUsdPriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setIbInBasePriceFeed(_newIbInBasePriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTimeDelay(_newTimeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        timeDelay(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseInUsdPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ibInBasePriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_ibInBasePriceFeed: string, _baseInUsdPriceFeed: string, _accessControlConfig: string, _timeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastUpdateTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pass(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peekNextPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        peekPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBaseInUsdPriceFeed(_newBaseInUsdPriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setIbInBasePriceFeed(_newIbInBasePriceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrice(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTimeDelay(_newTimeDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        timeDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
