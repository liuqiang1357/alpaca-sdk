import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IbTokenAdapterInterface extends ethers.utils.Interface {
    functions: {
        "accRewardBalance()": FunctionFragment;
        "accRewardPerShare()": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "cage()": FunctionFragment;
        "collateralPoolId()": FunctionFragment;
        "collateralToken()": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(address,uint256,bytes)": FunctionFragment;
        "emergencyWithdraw(address)": FunctionFragment;
        "fairlaunch()": FunctionFragment;
        "initialize(address,bytes32,address,address,address,uint256,address,address,uint256,address,address)": FunctionFragment;
        "live()": FunctionFragment;
        "moveStake(address,address,uint256,bytes)": FunctionFragment;
        "netAssetPerShare()": FunctionFragment;
        "netAssetValuation()": FunctionFragment;
        "netPendingRewards(address)": FunctionFragment;
        "onAdjustPosition(address,address,int256,int256,bytes)": FunctionFragment;
        "onMoveCollateral(address,address,uint256,bytes)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "pendingRewards(address)": FunctionFragment;
        "pid()": FunctionFragment;
        "positionManager()": FunctionFragment;
        "refreshApproval()": FunctionFragment;
        "rewardDebts(address)": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "setTreasuryAccount(address)": FunctionFragment;
        "setTreasuryFeeBps(uint256)": FunctionFragment;
        "shield()": FunctionFragment;
        "stake(address)": FunctionFragment;
        "timelock()": FunctionFragment;
        "totalShare()": FunctionFragment;
        "treasuryAccount()": FunctionFragment;
        "treasuryFeeBps()": FunctionFragment;
        "uncage()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accRewardBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "accRewardPerShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "fairlaunch", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        BytesLike,
        string,
        string,
        string,
        BigNumberish,
        string,
        string,
        BigNumberish,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "moveStake", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "netAssetPerShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "netAssetValuation", values?: undefined): string;
    encodeFunctionData(functionFragment: "netPendingRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "onAdjustPosition", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onMoveCollateral", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "pid", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "refreshApproval", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardDebts", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTreasuryAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "setTreasuryFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "shield", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [string]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasuryAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasuryFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "accRewardBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accRewardPerShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fairlaunch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "netAssetPerShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "netAssetValuation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "netPendingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onAdjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onMoveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refreshApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDebts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shield", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "LogCage()": EventFragment;
        "LogDeposit(uint256)": EventFragment;
        "LogEmergencyWithdraw(address,address)": EventFragment;
        "LogMoveStake(address,address,uint256)": EventFragment;
        "LogSetTreasuryAccount(address,address)": EventFragment;
        "LogSetTreasuryFeeBps(address,uint256)": EventFragment;
        "LogUncage()": EventFragment;
        "LogWithdraw(uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogEmergencyWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogMoveStake"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetTreasuryAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetTreasuryFeeBps"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogUncage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type LogCageEvent = TypedEvent<[], {}>;
export declare type LogCageEventFilter = TypedEventFilter<LogCageEvent>;
export declare type LogDepositEvent = TypedEvent<[BigNumber], {
    _val: BigNumber;
}>;
export declare type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;
export declare type LogEmergencyWithdrawEvent = TypedEvent<[
    string,
    string
], {
    _caller: string;
    _to: string;
}>;
export declare type LogEmergencyWithdrawEventFilter = TypedEventFilter<LogEmergencyWithdrawEvent>;
export declare type LogMoveStakeEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _src: string;
    _dst: string;
    _wad: BigNumber;
}>;
export declare type LogMoveStakeEventFilter = TypedEventFilter<LogMoveStakeEvent>;
export declare type LogSetTreasuryAccountEvent = TypedEvent<[
    string,
    string
], {
    _caller: string;
    _treasuryAccount: string;
}>;
export declare type LogSetTreasuryAccountEventFilter = TypedEventFilter<LogSetTreasuryAccountEvent>;
export declare type LogSetTreasuryFeeBpsEvent = TypedEvent<[
    string,
    BigNumber
], {
    _caller: string;
    _treasuryFeeBps: BigNumber;
}>;
export declare type LogSetTreasuryFeeBpsEventFilter = TypedEventFilter<LogSetTreasuryFeeBpsEvent>;
export declare type LogUncageEvent = TypedEvent<[], {}>;
export declare type LogUncageEventFilter = TypedEventFilter<LogUncageEvent>;
export declare type LogWithdrawEvent = TypedEvent<[BigNumber], {
    _val: BigNumber;
}>;
export declare type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface IbTokenAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IbTokenAdapterInterface;
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
        accRewardBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        accRewardPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralPoolId(overrides?: CallOverrides): Promise<[string]>;
        collateralToken(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_positionAddress: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fairlaunch(overrides?: CallOverrides): Promise<[string]>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _collateralToken: string, _rewardToken: string, _fairlaunch: string, _pid: BigNumberish, _shield: string, _timelock: string, _treasuryFeeBps: BigNumberish, _treasuryAccount: string, _positionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        moveStake(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        netAssetPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;
        netAssetValuation(overrides?: CallOverrides): Promise<[BigNumber]>;
        netPendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        onAdjustPosition(_source: string, _destination: string, _collateralValue: BigNumberish, arg3: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onMoveCollateral(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pid(overrides?: CallOverrides): Promise<[BigNumber]>;
        positionManager(overrides?: CallOverrides): Promise<[string]>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardDebts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        setTreasuryAccount(_treasuryAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTreasuryFeeBps(_treasuryFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        shield(overrides?: CallOverrides): Promise<[string]>;
        stake(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        totalShare(overrides?: CallOverrides): Promise<[BigNumber]>;
        treasuryAccount(overrides?: CallOverrides): Promise<[string]>;
        treasuryFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(_usr: string, _amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accRewardBalance(overrides?: CallOverrides): Promise<BigNumber>;
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    cage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralPoolId(overrides?: CallOverrides): Promise<string>;
    collateralToken(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_positionAddress: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(_to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fairlaunch(overrides?: CallOverrides): Promise<string>;
    initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _collateralToken: string, _rewardToken: string, _fairlaunch: string, _pid: BigNumberish, _shield: string, _timelock: string, _treasuryFeeBps: BigNumberish, _treasuryAccount: string, _positionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    moveStake(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    netAssetPerShare(overrides?: CallOverrides): Promise<BigNumber>;
    netAssetValuation(overrides?: CallOverrides): Promise<BigNumber>;
    netPendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    onAdjustPosition(_source: string, _destination: string, _collateralValue: BigNumberish, arg3: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onMoveCollateral(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    pid(overrides?: CallOverrides): Promise<BigNumber>;
    positionManager(overrides?: CallOverrides): Promise<string>;
    refreshApproval(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardDebts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    setTreasuryAccount(_treasuryAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTreasuryFeeBps(_treasuryFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    shield(overrides?: CallOverrides): Promise<string>;
    stake(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    timelock(overrides?: CallOverrides): Promise<string>;
    totalShare(overrides?: CallOverrides): Promise<BigNumber>;
    treasuryAccount(overrides?: CallOverrides): Promise<string>;
    treasuryFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    uncage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(_usr: string, _amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accRewardBalance(overrides?: CallOverrides): Promise<BigNumber>;
        accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        cage(overrides?: CallOverrides): Promise<void>;
        collateralPoolId(overrides?: CallOverrides): Promise<string>;
        collateralToken(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_positionAddress: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        emergencyWithdraw(_to: string, overrides?: CallOverrides): Promise<void>;
        fairlaunch(overrides?: CallOverrides): Promise<string>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _collateralToken: string, _rewardToken: string, _fairlaunch: string, _pid: BigNumberish, _shield: string, _timelock: string, _treasuryFeeBps: BigNumberish, _treasuryAccount: string, _positionManager: string, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        moveStake(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        netAssetPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        netAssetValuation(overrides?: CallOverrides): Promise<BigNumber>;
        netPendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        onAdjustPosition(_source: string, _destination: string, _collateralValue: BigNumberish, arg3: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        onMoveCollateral(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<string>;
        refreshApproval(overrides?: CallOverrides): Promise<void>;
        rewardDebts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        setTreasuryAccount(_treasuryAccount: string, overrides?: CallOverrides): Promise<void>;
        setTreasuryFeeBps(_treasuryFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        shield(overrides?: CallOverrides): Promise<string>;
        stake(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<string>;
        totalShare(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryAccount(overrides?: CallOverrides): Promise<string>;
        treasuryFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        withdraw(_usr: string, _amount: BigNumberish, arg2: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogCage()"(): LogCageEventFilter;
        LogCage(): LogCageEventFilter;
        "LogDeposit(uint256)"(_val?: null): LogDepositEventFilter;
        LogDeposit(_val?: null): LogDepositEventFilter;
        "LogEmergencyWithdraw(address,address)"(_caller?: string | null, _to?: null): LogEmergencyWithdrawEventFilter;
        LogEmergencyWithdraw(_caller?: string | null, _to?: null): LogEmergencyWithdrawEventFilter;
        "LogMoveStake(address,address,uint256)"(_src?: string | null, _dst?: string | null, _wad?: null): LogMoveStakeEventFilter;
        LogMoveStake(_src?: string | null, _dst?: string | null, _wad?: null): LogMoveStakeEventFilter;
        "LogSetTreasuryAccount(address,address)"(_caller?: string | null, _treasuryAccount?: null): LogSetTreasuryAccountEventFilter;
        LogSetTreasuryAccount(_caller?: string | null, _treasuryAccount?: null): LogSetTreasuryAccountEventFilter;
        "LogSetTreasuryFeeBps(address,uint256)"(_caller?: string | null, _treasuryFeeBps?: null): LogSetTreasuryFeeBpsEventFilter;
        LogSetTreasuryFeeBps(_caller?: string | null, _treasuryFeeBps?: null): LogSetTreasuryFeeBpsEventFilter;
        "LogUncage()"(): LogUncageEventFilter;
        LogUncage(): LogUncageEventFilter;
        "LogWithdraw(uint256)"(_val?: null): LogWithdrawEventFilter;
        LogWithdraw(_val?: null): LogWithdrawEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        accRewardBalance(overrides?: CallOverrides): Promise<BigNumber>;
        accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralPoolId(overrides?: CallOverrides): Promise<BigNumber>;
        collateralToken(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_positionAddress: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fairlaunch(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _collateralToken: string, _rewardToken: string, _fairlaunch: string, _pid: BigNumberish, _shield: string, _timelock: string, _treasuryFeeBps: BigNumberish, _treasuryAccount: string, _positionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        moveStake(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        netAssetPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        netAssetValuation(overrides?: CallOverrides): Promise<BigNumber>;
        netPendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        onAdjustPosition(_source: string, _destination: string, _collateralValue: BigNumberish, arg3: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onMoveCollateral(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<BigNumber>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardDebts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        setTreasuryAccount(_treasuryAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTreasuryFeeBps(_treasuryFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        shield(overrides?: CallOverrides): Promise<BigNumber>;
        stake(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        totalShare(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryAccount(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(_usr: string, _amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accRewardBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accRewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_positionAddress: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fairlaunch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _collateralPoolId: BytesLike, _collateralToken: string, _rewardToken: string, _fairlaunch: string, _pid: BigNumberish, _shield: string, _timelock: string, _treasuryFeeBps: BigNumberish, _treasuryAccount: string, _positionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        moveStake(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        netAssetPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        netAssetValuation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        netPendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onAdjustPosition(_source: string, _destination: string, _collateralValue: BigNumberish, arg3: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onMoveCollateral(_source: string, _destination: string, _share: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingRewards(_positionAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refreshApproval(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardDebts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setTreasuryAccount(_treasuryAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTreasuryFeeBps(_treasuryFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        shield(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uncage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_usr: string, _amount: BigNumberish, arg2: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
