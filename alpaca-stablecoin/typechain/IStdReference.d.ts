import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ReferenceDataStruct = {
    rate: BigNumberish;
    lastUpdatedBase: BigNumberish;
    lastUpdatedQuote: BigNumberish;
};
export declare type ReferenceDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    rate: BigNumber;
    lastUpdatedBase: BigNumber;
    lastUpdatedQuote: BigNumber;
};
export interface IStdReferenceInterface extends ethers.utils.Interface {
    functions: {
        "getReferenceData(string,string)": FunctionFragment;
        "getReferenceDataBulk(string[],string[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getReferenceData", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getReferenceDataBulk", values: [string[], string[]]): string;
    decodeFunctionResult(functionFragment: "getReferenceData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferenceDataBulk", data: BytesLike): Result;
    events: {};
}
export interface IStdReference extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStdReferenceInterface;
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
        getReferenceData(_base: string, _quote: string, overrides?: CallOverrides): Promise<[ReferenceDataStructOutput]>;
        getReferenceDataBulk(_bases: string[], _quotes: string[], overrides?: CallOverrides): Promise<[ReferenceDataStructOutput[]]>;
    };
    getReferenceData(_base: string, _quote: string, overrides?: CallOverrides): Promise<ReferenceDataStructOutput>;
    getReferenceDataBulk(_bases: string[], _quotes: string[], overrides?: CallOverrides): Promise<ReferenceDataStructOutput[]>;
    callStatic: {
        getReferenceData(_base: string, _quote: string, overrides?: CallOverrides): Promise<ReferenceDataStructOutput>;
        getReferenceDataBulk(_bases: string[], _quotes: string[], overrides?: CallOverrides): Promise<ReferenceDataStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        getReferenceData(_base: string, _quote: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReferenceDataBulk(_bases: string[], _quotes: string[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getReferenceData(_base: string, _quote: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReferenceDataBulk(_bases: string[], _quotes: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
