import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ITimeLockInterface extends ethers.utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "delay()": FunctionFragment;
        "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    events: {};
}
export interface ITimeLock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITimeLockInterface;
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
        admin(overrides?: CallOverrides): Promise<[string]>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    executeTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: CallOverrides): Promise<void>;
        queueTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: CallOverrides): Promise<void>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queueTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(arg0: string, arg1: BigNumberish, arg2: string, arg3: BytesLike, arg4: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
