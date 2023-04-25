import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAuthorityInterface extends ethers.utils.Interface {
    functions: {
        "canCall(address,address,bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "canCall", values: [string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
    events: {};
}
export interface IAuthority extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAuthorityInterface;
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
        canCall(src: string, dst: string, sig: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    canCall(src: string, dst: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        canCall(src: string, dst: string, sig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        canCall(src: string, dst: string, sig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        canCall(src: string, dst: string, sig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
