import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ShieldInterface extends ethers.utils.Interface {
    functions: {
        "addPool(uint256,address,bool)": FunctionFragment;
        "fairLaunchV1()": FunctionFragment;
        "mintCount()": FunctionFragment;
        "mintLimit()": FunctionFragment;
        "mintWarchest(address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAlpacaPerBlock(uint256)": FunctionFragment;
        "setBonus(uint256,uint256,uint256)": FunctionFragment;
        "setPool(uint256,uint256,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addPool", values: [BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "fairLaunchV1", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintWarchest", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAlpacaPerBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBonus", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPool", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fairLaunchV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWarchest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAlpacaPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBonus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AddPool(uint256,uint256,address)": EventFragment;
        "MintWarchest(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SetAlpacaPerBlock(uint256)": EventFragment;
        "SetBonus(uint256,uint256,uint256)": EventFragment;
        "SetPool(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintWarchest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAlpacaPerBlock"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBonus"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPool"): EventFragment;
}
export declare type AddPoolEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], {
    _pid: BigNumber;
    _allocPoint: BigNumber;
    _stakeToken: string;
}>;
export declare type AddPoolEventFilter = TypedEventFilter<AddPoolEvent>;
export declare type MintWarchestEvent = TypedEvent<[
    string,
    BigNumber
], {
    _to: string;
    _amount: BigNumber;
}>;
export declare type MintWarchestEventFilter = TypedEventFilter<MintWarchestEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type SetAlpacaPerBlockEvent = TypedEvent<[
    BigNumber
], {
    _alpacaPerBlock: BigNumber;
}>;
export declare type SetAlpacaPerBlockEventFilter = TypedEventFilter<SetAlpacaPerBlockEvent>;
export declare type SetBonusEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    _bonusMultiplier: BigNumber;
    _bonusEndBlock: BigNumber;
    _bonusLockUpBps: BigNumber;
}>;
export declare type SetBonusEventFilter = TypedEventFilter<SetBonusEvent>;
export declare type SetPoolEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    _pid: BigNumber;
    _allocPoint: BigNumber;
}>;
export declare type SetPoolEventFilter = TypedEventFilter<SetPoolEvent>;
export interface Shield extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ShieldInterface;
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
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fairLaunchV1(overrides?: CallOverrides): Promise<[string]>;
        mintCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintWarchest(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fairLaunchV1(overrides?: CallOverrides): Promise<string>;
    mintCount(overrides?: CallOverrides): Promise<BigNumber>;
    mintLimit(overrides?: CallOverrides): Promise<BigNumber>;
    mintWarchest(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        fairLaunchV1(overrides?: CallOverrides): Promise<string>;
        mintCount(overrides?: CallOverrides): Promise<BigNumber>;
        mintLimit(overrides?: CallOverrides): Promise<BigNumber>;
        mintWarchest(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddPool(uint256,uint256,address)"(_pid?: BigNumberish | null, _allocPoint?: null, _stakeToken?: string | null): AddPoolEventFilter;
        AddPool(_pid?: BigNumberish | null, _allocPoint?: null, _stakeToken?: string | null): AddPoolEventFilter;
        "MintWarchest(address,uint256)"(_to?: string | null, _amount?: null): MintWarchestEventFilter;
        MintWarchest(_to?: string | null, _amount?: null): MintWarchestEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SetAlpacaPerBlock(uint256)"(_alpacaPerBlock?: BigNumberish | null): SetAlpacaPerBlockEventFilter;
        SetAlpacaPerBlock(_alpacaPerBlock?: BigNumberish | null): SetAlpacaPerBlockEventFilter;
        "SetBonus(uint256,uint256,uint256)"(_bonusMultiplier?: null, _bonusEndBlock?: null, _bonusLockUpBps?: null): SetBonusEventFilter;
        SetBonus(_bonusMultiplier?: null, _bonusEndBlock?: null, _bonusLockUpBps?: null): SetBonusEventFilter;
        "SetPool(uint256,uint256)"(_pid?: BigNumberish | null, _allocPoint?: null): SetPoolEventFilter;
        SetPool(_pid?: BigNumberish | null, _allocPoint?: null): SetPoolEventFilter;
    };
    estimateGas: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fairLaunchV1(overrides?: CallOverrides): Promise<BigNumber>;
        mintCount(overrides?: CallOverrides): Promise<BigNumber>;
        mintLimit(overrides?: CallOverrides): Promise<BigNumber>;
        mintWarchest(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fairLaunchV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintWarchest(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
