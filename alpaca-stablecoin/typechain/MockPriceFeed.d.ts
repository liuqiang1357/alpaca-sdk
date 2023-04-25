import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockPriceFeedInterface extends ethers.utils.Interface {
    functions: {
        "peekPrice()": FunctionFragment;
        "readPrice()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "peekPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "readPrice", values?: undefined): string;
    decodeFunctionResult(functionFragment: "peekPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readPrice", data: BytesLike): Result;
    events: {};
}
export interface MockPriceFeed extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockPriceFeedInterface;
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
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        readPrice(overrides?: CallOverrides): Promise<[string]>;
    };
    peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
    readPrice(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        peekPrice(overrides?: CallOverrides): Promise<[string, boolean]>;
        readPrice(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        peekPrice(overrides?: CallOverrides): Promise<BigNumber>;
        readPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        peekPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
