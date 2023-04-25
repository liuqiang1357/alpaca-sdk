import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DexPriceOracleInterface extends ethers.utils.Interface {
    functions: {
        "dexFactory()": FunctionFragment;
        "getPrice(address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "dexFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    decodeFunctionResult(functionFragment: "dexFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {};
}
export interface DexPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DexPriceOracleInterface;
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
        dexFactory(overrides?: CallOverrides): Promise<[string]>;
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(_dexFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    dexFactory(overrides?: CallOverrides): Promise<string>;
    getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    initialize(_dexFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        dexFactory(overrides?: CallOverrides): Promise<string>;
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(_dexFactory: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        dexFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_dexFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        dexFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(token0: string, token1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_dexFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
