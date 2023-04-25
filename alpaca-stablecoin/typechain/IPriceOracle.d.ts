import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPriceOracleInterface extends ethers.utils.Interface {
    functions: {
        "stableCoinReferencePrice()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "stableCoinReferencePrice", values?: undefined): string;
    decodeFunctionResult(functionFragment: "stableCoinReferencePrice", data: BytesLike): Result;
    events: {};
}
export interface IPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleInterface;
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
        stableCoinReferencePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    stableCoinReferencePrice(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        stableCoinReferencePrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        stableCoinReferencePrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        stableCoinReferencePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
