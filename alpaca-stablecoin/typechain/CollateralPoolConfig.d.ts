import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type CollateralPoolStruct = {
    totalDebtShare: BigNumberish;
    debtAccumulatedRate: BigNumberish;
    priceWithSafetyMargin: BigNumberish;
    debtCeiling: BigNumberish;
    debtFloor: BigNumberish;
    priceFeed: string;
    liquidationRatio: BigNumberish;
    stabilityFeeRate: BigNumberish;
    lastAccumulationTime: BigNumberish;
    adapter: string;
    closeFactorBps: BigNumberish;
    liquidatorIncentiveBps: BigNumberish;
    treasuryFeesBps: BigNumberish;
    strategy: string;
};
export declare type CollateralPoolStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
] & {
    totalDebtShare: BigNumber;
    debtAccumulatedRate: BigNumber;
    priceWithSafetyMargin: BigNumber;
    debtCeiling: BigNumber;
    debtFloor: BigNumber;
    priceFeed: string;
    liquidationRatio: BigNumber;
    stabilityFeeRate: BigNumber;
    lastAccumulationTime: BigNumber;
    adapter: string;
    closeFactorBps: BigNumber;
    liquidatorIncentiveBps: BigNumber;
    treasuryFeesBps: BigNumber;
    strategy: string;
};
export declare type CollateralPoolInfoStruct = {
    debtAccumulatedRate: BigNumberish;
    totalDebtShare: BigNumberish;
    debtCeiling: BigNumberish;
    priceWithSafetyMargin: BigNumberish;
    debtFloor: BigNumberish;
};
export declare type CollateralPoolInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    debtAccumulatedRate: BigNumber;
    totalDebtShare: BigNumber;
    debtCeiling: BigNumber;
    priceWithSafetyMargin: BigNumber;
    debtFloor: BigNumber;
};
export interface CollateralPoolConfigInterface extends ethers.utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "accessControlConfig()": FunctionFragment;
        "collateralPools(bytes32)": FunctionFragment;
        "getAdapter(bytes32)": FunctionFragment;
        "getCloseFactorBps(bytes32)": FunctionFragment;
        "getCollateralPoolInfo(bytes32)": FunctionFragment;
        "getDebtAccumulatedRate(bytes32)": FunctionFragment;
        "getDebtCeiling(bytes32)": FunctionFragment;
        "getDebtFloor(bytes32)": FunctionFragment;
        "getLastAccumulationTime(bytes32)": FunctionFragment;
        "getLiquidationRatio(bytes32)": FunctionFragment;
        "getLiquidatorIncentiveBps(bytes32)": FunctionFragment;
        "getPriceFeed(bytes32)": FunctionFragment;
        "getPriceWithSafetyMargin(bytes32)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getStabilityFeeRate(bytes32)": FunctionFragment;
        "getStrategy(bytes32)": FunctionFragment;
        "getTotalDebtShare(bytes32)": FunctionFragment;
        "getTreasuryFeesBps(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initCollateralPool(bytes32,uint256,uint256,address,uint256,uint256,address,uint256,uint256,uint256,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setAdapter(bytes32,address)": FunctionFragment;
        "setCloseFactorBps(bytes32,uint256)": FunctionFragment;
        "setDebtAccumulatedRate(bytes32,uint256)": FunctionFragment;
        "setDebtCeiling(bytes32,uint256)": FunctionFragment;
        "setDebtFloor(bytes32,uint256)": FunctionFragment;
        "setLiquidationRatio(bytes32,uint256)": FunctionFragment;
        "setLiquidatorIncentiveBps(bytes32,uint256)": FunctionFragment;
        "setPriceFeed(bytes32,address)": FunctionFragment;
        "setPriceWithSafetyMargin(bytes32,uint256)": FunctionFragment;
        "setStabilityFeeRate(bytes32,uint256)": FunctionFragment;
        "setStrategy(bytes32,address)": FunctionFragment;
        "setTotalDebtShare(bytes32,uint256)": FunctionFragment;
        "setTreasuryFeesBps(bytes32,uint256)": FunctionFragment;
        "updateLastAccumulationTime(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAdapter", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getCloseFactorBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getCollateralPoolInfo", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtAccumulatedRate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtCeiling", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDebtFloor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLastAccumulationTime", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLiquidationRatio", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLiquidatorIncentiveBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPriceFeed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPriceWithSafetyMargin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStabilityFeeRate", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStrategy", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTotalDebtShare", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTreasuryFeesBps", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initCollateralPool", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAdapter", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setCloseFactorBps", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDebtAccumulatedRate", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDebtCeiling", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDebtFloor", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationRatio", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidatorIncentiveBps", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPriceFeed", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setPriceWithSafetyMargin", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStabilityFeeRate", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStrategy", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setTotalDebtShare", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTreasuryFeesBps", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateLastAccumulationTime", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCloseFactorBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralPoolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtAccumulatedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDebtFloor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastAccumulationTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidatorIncentiveBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceWithSafetyMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStabilityFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDebtShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryFeesBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initCollateralPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCloseFactorBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDebtAccumulatedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDebtFloor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidatorIncentiveBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceWithSafetyMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStabilityFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTotalDebtShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryFeesBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLastAccumulationTime", data: BytesLike): Result;
    events: {
        "LogSetAdapter(address,bytes32,address)": EventFragment;
        "LogSetCloseFactorBps(address,bytes32,uint256)": EventFragment;
        "LogSetDebtAccumulatedRate(address,bytes32,uint256)": EventFragment;
        "LogSetDebtCeiling(address,bytes32,uint256)": EventFragment;
        "LogSetDebtFloor(address,bytes32,uint256)": EventFragment;
        "LogSetLiquidationRatio(address,bytes32,uint256)": EventFragment;
        "LogSetLiquidatorIncentiveBps(address,bytes32,uint256)": EventFragment;
        "LogSetPriceFeed(address,bytes32,address)": EventFragment;
        "LogSetPriceWithSafetyMargin(address,bytes32,uint256)": EventFragment;
        "LogSetStabilityFeeRate(address,bytes32,uint256)": EventFragment;
        "LogSetStrategy(address,bytes32,address)": EventFragment;
        "LogSetTotalDebtShare(address,bytes32,uint256)": EventFragment;
        "LogSetTreasuryFeesBps(address,bytes32,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetAdapter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetCloseFactorBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetDebtAccumulatedRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetDebtCeiling"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetDebtFloor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetLiquidationRatio"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetLiquidatorIncentiveBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetPriceFeed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetPriceWithSafetyMargin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetStabilityFeeRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetTotalDebtShare"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetTreasuryFeesBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export declare type LogSetAdapterEvent = TypedEvent<[
    string,
    string,
    string
], {
    _caller: string;
    _collateralPoolId: string;
    _adapter: string;
}>;
export declare type LogSetAdapterEventFilter = TypedEventFilter<LogSetAdapterEvent>;
export declare type LogSetCloseFactorBpsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _closeFactorBps: BigNumber;
}>;
export declare type LogSetCloseFactorBpsEventFilter = TypedEventFilter<LogSetCloseFactorBpsEvent>;
export declare type LogSetDebtAccumulatedRateEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _debtAccumulatedRate: BigNumber;
}>;
export declare type LogSetDebtAccumulatedRateEventFilter = TypedEventFilter<LogSetDebtAccumulatedRateEvent>;
export declare type LogSetDebtCeilingEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _debtCeiling: BigNumber;
}>;
export declare type LogSetDebtCeilingEventFilter = TypedEventFilter<LogSetDebtCeilingEvent>;
export declare type LogSetDebtFloorEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _debtFloor: BigNumber;
}>;
export declare type LogSetDebtFloorEventFilter = TypedEventFilter<LogSetDebtFloorEvent>;
export declare type LogSetLiquidationRatioEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _poolId: string;
    _data: BigNumber;
}>;
export declare type LogSetLiquidationRatioEventFilter = TypedEventFilter<LogSetLiquidationRatioEvent>;
export declare type LogSetLiquidatorIncentiveBpsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _liquidatorIncentiveBps: BigNumber;
}>;
export declare type LogSetLiquidatorIncentiveBpsEventFilter = TypedEventFilter<LogSetLiquidatorIncentiveBpsEvent>;
export declare type LogSetPriceFeedEvent = TypedEvent<[
    string,
    string,
    string
], {
    _caller: string;
    _poolId: string;
    _priceFeed: string;
}>;
export declare type LogSetPriceFeedEventFilter = TypedEventFilter<LogSetPriceFeedEvent>;
export declare type LogSetPriceWithSafetyMarginEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _priceWithSafetyMargin: BigNumber;
}>;
export declare type LogSetPriceWithSafetyMarginEventFilter = TypedEventFilter<LogSetPriceWithSafetyMarginEvent>;
export declare type LogSetStabilityFeeRateEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _poolId: string;
    _data: BigNumber;
}>;
export declare type LogSetStabilityFeeRateEventFilter = TypedEventFilter<LogSetStabilityFeeRateEvent>;
export declare type LogSetStrategyEvent = TypedEvent<[
    string,
    string,
    string
], {
    _caller: string;
    _collateralPoolId: string;
    strategy: string;
}>;
export declare type LogSetStrategyEventFilter = TypedEventFilter<LogSetStrategyEvent>;
export declare type LogSetTotalDebtShareEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _totalDebtShare: BigNumber;
}>;
export declare type LogSetTotalDebtShareEventFilter = TypedEventFilter<LogSetTotalDebtShareEvent>;
export declare type LogSetTreasuryFeesBpsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _caller: string;
    _collateralPoolId: string;
    _treasuryFeeBps: BigNumber;
}>;
export declare type LogSetTreasuryFeesBpsEventFilter = TypedEventFilter<LogSetTreasuryFeesBpsEvent>;
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
export interface CollateralPoolConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CollateralPoolConfigInterface;
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
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[CollateralPoolStructOutput]>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[
            CollateralPoolInfoStructOutput
        ] & {
            _info: CollateralPoolInfoStructOutput;
        }>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initCollateralPool(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, _debtFloor: BigNumberish, _priceFeed: string, _liquidationRatio: BigNumberish, _stabilityFeeRate: BigNumberish, _adapter: string, _closeFactorBps: BigNumberish, _liquidatorIncentiveBps: BigNumberish, _treasuryFeesBps: BigNumberish, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAdapter(_collateralPoolId: BytesLike, _adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCloseFactorBps(_collateralPoolId: BytesLike, _closeFactorBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDebtCeiling(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDebtFloor(_collateralPoolId: BytesLike, _debtFloor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationRatio(_poolId: BytesLike, _data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidatorIncentiveBps(_collateralPoolId: BytesLike, _liquidatorIncentiveBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceFeed(_poolId: BytesLike, _priceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceWithSafetyMargin(_collateralPoolId: BytesLike, _priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStabilityFeeRate(_collateralPool: BytesLike, _stabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStrategy(_collateralPoolId: BytesLike, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTreasuryFeesBps(_collateralPoolId: BytesLike, _treasuryFeesBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolStructOutput>;
    getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolInfoStructOutput>;
    getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initCollateralPool(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, _debtFloor: BigNumberish, _priceFeed: string, _liquidationRatio: BigNumberish, _stabilityFeeRate: BigNumberish, _adapter: string, _closeFactorBps: BigNumberish, _liquidatorIncentiveBps: BigNumberish, _treasuryFeesBps: BigNumberish, _strategy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_accessControlConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAdapter(_collateralPoolId: BytesLike, _adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCloseFactorBps(_collateralPoolId: BytesLike, _closeFactorBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDebtCeiling(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDebtFloor(_collateralPoolId: BytesLike, _debtFloor: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationRatio(_poolId: BytesLike, _data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidatorIncentiveBps(_collateralPoolId: BytesLike, _liquidatorIncentiveBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceFeed(_poolId: BytesLike, _priceFeed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceWithSafetyMargin(_collateralPoolId: BytesLike, _priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStabilityFeeRate(_collateralPool: BytesLike, _stabilityFeeRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStrategy(_collateralPoolId: BytesLike, _strategy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTreasuryFeesBps(_collateralPoolId: BytesLike, _treasuryFeesBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolStructOutput>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<CollateralPoolInfoStructOutput>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initCollateralPool(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, _debtFloor: BigNumberish, _priceFeed: string, _liquidationRatio: BigNumberish, _stabilityFeeRate: BigNumberish, _adapter: string, _closeFactorBps: BigNumberish, _liquidatorIncentiveBps: BigNumberish, _treasuryFeesBps: BigNumberish, _strategy: string, overrides?: CallOverrides): Promise<void>;
        initialize(_accessControlConfig: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setAdapter(_collateralPoolId: BytesLike, _adapter: string, overrides?: CallOverrides): Promise<void>;
        setCloseFactorBps(_collateralPoolId: BytesLike, _closeFactorBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDebtCeiling(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDebtFloor(_collateralPoolId: BytesLike, _debtFloor: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationRatio(_poolId: BytesLike, _data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidatorIncentiveBps(_collateralPoolId: BytesLike, _liquidatorIncentiveBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPriceFeed(_poolId: BytesLike, _priceFeed: string, overrides?: CallOverrides): Promise<void>;
        setPriceWithSafetyMargin(_collateralPoolId: BytesLike, _priceWithSafetyMargin: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStabilityFeeRate(_collateralPool: BytesLike, _stabilityFeeRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStrategy(_collateralPoolId: BytesLike, _strategy: string, overrides?: CallOverrides): Promise<void>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTreasuryFeesBps(_collateralPoolId: BytesLike, _treasuryFeesBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogSetAdapter(address,bytes32,address)"(_caller?: string | null, _collateralPoolId?: null, _adapter?: null): LogSetAdapterEventFilter;
        LogSetAdapter(_caller?: string | null, _collateralPoolId?: null, _adapter?: null): LogSetAdapterEventFilter;
        "LogSetCloseFactorBps(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _closeFactorBps?: null): LogSetCloseFactorBpsEventFilter;
        LogSetCloseFactorBps(_caller?: string | null, _collateralPoolId?: null, _closeFactorBps?: null): LogSetCloseFactorBpsEventFilter;
        "LogSetDebtAccumulatedRate(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _debtAccumulatedRate?: null): LogSetDebtAccumulatedRateEventFilter;
        LogSetDebtAccumulatedRate(_caller?: string | null, _collateralPoolId?: null, _debtAccumulatedRate?: null): LogSetDebtAccumulatedRateEventFilter;
        "LogSetDebtCeiling(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _debtCeiling?: null): LogSetDebtCeilingEventFilter;
        LogSetDebtCeiling(_caller?: string | null, _collateralPoolId?: null, _debtCeiling?: null): LogSetDebtCeilingEventFilter;
        "LogSetDebtFloor(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _debtFloor?: null): LogSetDebtFloorEventFilter;
        LogSetDebtFloor(_caller?: string | null, _collateralPoolId?: null, _debtFloor?: null): LogSetDebtFloorEventFilter;
        "LogSetLiquidationRatio(address,bytes32,uint256)"(_caller?: string | null, _poolId?: null, _data?: null): LogSetLiquidationRatioEventFilter;
        LogSetLiquidationRatio(_caller?: string | null, _poolId?: null, _data?: null): LogSetLiquidationRatioEventFilter;
        "LogSetLiquidatorIncentiveBps(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _liquidatorIncentiveBps?: null): LogSetLiquidatorIncentiveBpsEventFilter;
        LogSetLiquidatorIncentiveBps(_caller?: string | null, _collateralPoolId?: null, _liquidatorIncentiveBps?: null): LogSetLiquidatorIncentiveBpsEventFilter;
        "LogSetPriceFeed(address,bytes32,address)"(_caller?: string | null, _poolId?: null, _priceFeed?: null): LogSetPriceFeedEventFilter;
        LogSetPriceFeed(_caller?: string | null, _poolId?: null, _priceFeed?: null): LogSetPriceFeedEventFilter;
        "LogSetPriceWithSafetyMargin(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _priceWithSafetyMargin?: null): LogSetPriceWithSafetyMarginEventFilter;
        LogSetPriceWithSafetyMargin(_caller?: string | null, _collateralPoolId?: null, _priceWithSafetyMargin?: null): LogSetPriceWithSafetyMarginEventFilter;
        "LogSetStabilityFeeRate(address,bytes32,uint256)"(_caller?: string | null, _poolId?: null, _data?: null): LogSetStabilityFeeRateEventFilter;
        LogSetStabilityFeeRate(_caller?: string | null, _poolId?: null, _data?: null): LogSetStabilityFeeRateEventFilter;
        "LogSetStrategy(address,bytes32,address)"(_caller?: string | null, _collateralPoolId?: null, strategy?: null): LogSetStrategyEventFilter;
        LogSetStrategy(_caller?: string | null, _collateralPoolId?: null, strategy?: null): LogSetStrategyEventFilter;
        "LogSetTotalDebtShare(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _totalDebtShare?: null): LogSetTotalDebtShareEventFilter;
        LogSetTotalDebtShare(_caller?: string | null, _collateralPoolId?: null, _totalDebtShare?: null): LogSetTotalDebtShareEventFilter;
        "LogSetTreasuryFeesBps(address,bytes32,uint256)"(_caller?: string | null, _collateralPoolId?: null, _treasuryFeeBps?: null): LogSetTreasuryFeesBpsEventFilter;
        LogSetTreasuryFeesBps(_caller?: string | null, _collateralPoolId?: null, _treasuryFeeBps?: null): LogSetTreasuryFeesBpsEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initCollateralPool(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, _debtFloor: BigNumberish, _priceFeed: string, _liquidationRatio: BigNumberish, _stabilityFeeRate: BigNumberish, _adapter: string, _closeFactorBps: BigNumberish, _liquidatorIncentiveBps: BigNumberish, _treasuryFeesBps: BigNumberish, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAdapter(_collateralPoolId: BytesLike, _adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCloseFactorBps(_collateralPoolId: BytesLike, _closeFactorBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDebtCeiling(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDebtFloor(_collateralPoolId: BytesLike, _debtFloor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationRatio(_poolId: BytesLike, _data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidatorIncentiveBps(_collateralPoolId: BytesLike, _liquidatorIncentiveBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceFeed(_poolId: BytesLike, _priceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceWithSafetyMargin(_collateralPoolId: BytesLike, _priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStabilityFeeRate(_collateralPool: BytesLike, _stabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStrategy(_collateralPoolId: BytesLike, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTreasuryFeesBps(_collateralPoolId: BytesLike, _treasuryFeesBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPools(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAdapter(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCloseFactorBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollateralPoolInfo(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtAccumulatedRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtCeiling(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDebtFloor(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationRatio(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidatorIncentiveBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceFeed(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceWithSafetyMargin(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStabilityFeeRate(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrategy(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDebtShare(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTreasuryFeesBps(_collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initCollateralPool(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, _debtFloor: BigNumberish, _priceFeed: string, _liquidationRatio: BigNumberish, _stabilityFeeRate: BigNumberish, _adapter: string, _closeFactorBps: BigNumberish, _liquidatorIncentiveBps: BigNumberish, _treasuryFeesBps: BigNumberish, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_accessControlConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAdapter(_collateralPoolId: BytesLike, _adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCloseFactorBps(_collateralPoolId: BytesLike, _closeFactorBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDebtAccumulatedRate(_collateralPoolId: BytesLike, _debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDebtCeiling(_collateralPoolId: BytesLike, _debtCeiling: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDebtFloor(_collateralPoolId: BytesLike, _debtFloor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationRatio(_poolId: BytesLike, _data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidatorIncentiveBps(_collateralPoolId: BytesLike, _liquidatorIncentiveBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceFeed(_poolId: BytesLike, _priceFeed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceWithSafetyMargin(_collateralPoolId: BytesLike, _priceWithSafetyMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStabilityFeeRate(_collateralPool: BytesLike, _stabilityFeeRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStrategy(_collateralPoolId: BytesLike, _strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTotalDebtShare(_collateralPoolId: BytesLike, _totalDebtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTreasuryFeesBps(_collateralPoolId: BytesLike, _treasuryFeesBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateLastAccumulationTime(_collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
