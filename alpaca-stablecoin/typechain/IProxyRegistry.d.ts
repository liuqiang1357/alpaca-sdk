import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IProxyRegistryInterface extends ethers.utils.Interface {
    functions: {
        "build(address)": FunctionFragment;
        "proxies(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "build", values: [string]): string;
    encodeFunctionData(functionFragment: "proxies", values: [string]): string;
    decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxies", data: BytesLike): Result;
    events: {};
}
export interface IProxyRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProxyRegistryInterface;
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
        build(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proxies(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    build(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proxies(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        build(arg0: string, overrides?: CallOverrides): Promise<string>;
        proxies(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        build(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proxies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        build(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proxies(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
