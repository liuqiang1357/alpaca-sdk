import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProxyWalletCacheInterface extends ethers.utils.Interface {
    functions: {
        "read(bytes)": FunctionFragment;
        "write(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "read", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "write", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "write", data: BytesLike): Result;
    events: {};
}
export interface ProxyWalletCache extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyWalletCacheInterface;
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
        read(_code: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        write(_code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    read(_code: BytesLike, overrides?: CallOverrides): Promise<string>;
    write(_code: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        read(_code: BytesLike, overrides?: CallOverrides): Promise<string>;
        write(_code: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        read(_code: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        write(_code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        read(_code: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        write(_code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
