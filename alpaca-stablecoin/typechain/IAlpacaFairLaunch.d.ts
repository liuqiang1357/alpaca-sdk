import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAlpacaFairLaunchInterface extends ethers.utils.Interface {
    functions: {
        "alpaca()": FunctionFragment;
        "deposit(address,uint256,uint256)": FunctionFragment;
        "emergencyWithdraw(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingAlpaca(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(address,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "alpaca", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAlpaca", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "alpaca", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAlpaca", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface IAlpacaFairLaunch extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAlpacaFairLaunchInterface;
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
        alpaca(overrides?: CallOverrides): Promise<[string]>;
        deposit(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, BigNumber, BigNumber, BigNumber]>;
        userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, string]>;
        withdraw(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    alpaca(overrides?: CallOverrides): Promise<string>;
    deposit(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, BigNumber, BigNumber, BigNumber]>;
    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, string]>;
    withdraw(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        alpaca(overrides?: CallOverrides): Promise<string>;
        deposit(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        emergencyWithdraw(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber, BigNumber, BigNumber, BigNumber]>;
        userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, string]>;
        withdraw(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        alpaca(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        alpaca(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
