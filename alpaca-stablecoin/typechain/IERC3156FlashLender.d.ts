import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC3156FlashLenderInterface extends ethers.utils.Interface {
    functions: {
        "flashFee(address,uint256)": FunctionFragment;
        "flashLoan(address,address,uint256,bytes)": FunctionFragment;
        "maxFlashLoan(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "flashFee", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "maxFlashLoan", values: [string]): string;
    decodeFunctionResult(functionFragment: "flashFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IERC3156FlashLender extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC3156FlashLenderInterface;
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
        flashFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        flashLoan(receiver: string, token: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxFlashLoan(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    flashFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    flashLoan(receiver: string, token: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxFlashLoan(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        flashFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flashLoan(receiver: string, token: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        maxFlashLoan(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        flashFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        flashLoan(receiver: string, token: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxFlashLoan(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        flashFee(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashLoan(receiver: string, token: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxFlashLoan(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
