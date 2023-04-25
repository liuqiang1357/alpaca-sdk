import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockAlpacaOracleInterface extends ethers.utils.Interface {
    functions: {
        "getPrice(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getPrice", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    events: {};
}
export interface MockAlpacaOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockAlpacaOracleInterface;
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
        getPrice(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            price: BigNumber;
            lastUpdate: BigNumber;
        }>;
    };
    getPrice(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        price: BigNumber;
        lastUpdate: BigNumber;
    }>;
    callStatic: {
        getPrice(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            price: BigNumber;
            lastUpdate: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        getPrice(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPrice(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
