import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC20InterfaceInterface extends ethers.utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    events: {};
}
export interface ERC20Interface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20InterfaceInterface;
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
        balanceOf(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
