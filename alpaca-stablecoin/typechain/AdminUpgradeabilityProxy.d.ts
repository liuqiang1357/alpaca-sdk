import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AdminUpgradeabilityProxyInterface extends ethers.utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "changeAdmin(address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export declare type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface AdminUpgradeabilityProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AdminUpgradeabilityProxyInterface;
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
        admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    admin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    changeAdmin(newAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        changeAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
