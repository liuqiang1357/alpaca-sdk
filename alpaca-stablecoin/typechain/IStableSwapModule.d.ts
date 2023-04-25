import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStableSwapModuleInterface extends ethers.utils.Interface {
    functions: {
        "authTokenAdapter()": FunctionFragment;
        "stablecoinAdapter()": FunctionFragment;
        "swapStablecoinToToken(address,uint256)": FunctionFragment;
        "swapTokenToStablecoin(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "authTokenAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "stablecoinAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapStablecoinToToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokenToStablecoin", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "authTokenAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapStablecoinToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokenToStablecoin", data: BytesLike): Result;
    events: {};
}
export interface IStableSwapModule extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStableSwapModuleInterface;
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
        authTokenAdapter(overrides?: CallOverrides): Promise<[string]>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<[string]>;
        swapStablecoinToToken(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokenToStablecoin(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authTokenAdapter(overrides?: CallOverrides): Promise<string>;
    stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
    swapStablecoinToToken(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokenToStablecoin(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authTokenAdapter(overrides?: CallOverrides): Promise<string>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
        swapStablecoinToToken(usr: string, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapTokenToStablecoin(usr: string, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        authTokenAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        swapStablecoinToToken(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokenToStablecoin(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authTokenAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapStablecoinToToken(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokenToStablecoin(usr: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
