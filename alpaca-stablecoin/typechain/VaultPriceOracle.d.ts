import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VaultPriceOracleInterface extends ethers.utils.Interface {
    functions: {
        "getPrice(address,address)": FunctionFragment;
        "initialize()": FunctionFragment;
        "setVault(address,bool)": FunctionFragment;
        "vaults(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getPrice", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "setVault", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "vaults", values: [string]): string;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;
    events: {
        "LogSetVault(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetVault"): EventFragment;
}
export declare type LogSetVaultEvent = TypedEvent<[
    string,
    boolean
], {
    _vault: string;
    _isOk: boolean;
}>;
export declare type LogSetVaultEventFilter = TypedEventFilter<LogSetVaultEvent>;
export interface VaultPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VaultPriceOracleInterface;
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
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setVault(_vault: string, _isOk: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vaults(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setVault(_vault: string, _isOk: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(overrides?: CallOverrides): Promise<void>;
        setVault(_vault: string, _isOk: boolean, overrides?: CallOverrides): Promise<void>;
        vaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "LogSetVault(address,bool)"(_vault?: string | null, _isOk?: null): LogSetVaultEventFilter;
        LogSetVault(_vault?: string | null, _isOk?: null): LogSetVaultEventFilter;
    };
    estimateGas: {
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setVault(_vault: string, _isOk: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setVault(_vault: string, _isOk: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vaults(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
