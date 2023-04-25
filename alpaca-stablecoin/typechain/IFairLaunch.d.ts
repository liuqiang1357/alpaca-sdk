import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IFairLaunchInterface extends ethers.utils.Interface {
    functions: {
        "addPool(uint256,address,bool)": FunctionFragment;
        "deposit(address,uint256,uint256)": FunctionFragment;
        "harvest(uint256)": FunctionFragment;
        "pendingAlpaca(uint256,address)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "setPool(uint256,uint256,bool)": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "withdraw(address,uint256,uint256)": FunctionFragment;
        "withdrawAll(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addPool", values: [BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "harvest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pendingAlpaca", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPool", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "updatePool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAlpaca", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface IFairLaunch extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFairLaunchInterface;
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
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    harvest(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updatePool(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        harvest(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
