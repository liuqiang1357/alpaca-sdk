import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PoolInfoStruct = {
    stakeToken: string;
    allocPoint: BigNumberish;
    lastRewardBlock: BigNumberish;
    accAlpacaPerShare: BigNumberish;
    accAlpacaPerShareTilBonusEnd: BigNumberish;
};
export declare type PoolInfoStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    stakeToken: string;
    allocPoint: BigNumber;
    lastRewardBlock: BigNumber;
    accAlpacaPerShare: BigNumber;
    accAlpacaPerShareTilBonusEnd: BigNumber;
};
export declare type UserInfoStruct = {
    amount: BigNumberish;
    rewardDebt: BigNumberish;
    bonusDebt: BigNumberish;
    fundedBy: string;
};
export declare type UserInfoStructOutput = [BigNumber, BigNumber, BigNumber, string] & {
    amount: BigNumber;
    rewardDebt: BigNumber;
    bonusDebt: BigNumber;
    fundedBy: string;
};
export interface IFairLaunchV1Interface extends ethers.utils.Interface {
    functions: {
        "addPool(uint256,address,bool)": FunctionFragment;
        "alpacaPerBlock()": FunctionFragment;
        "deposit(address,uint256,uint256)": FunctionFragment;
        "harvest(uint256)": FunctionFragment;
        "manualMint(address,uint256)": FunctionFragment;
        "pendingAlpaca(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "setAlpacaPerBlock(uint256)": FunctionFragment;
        "setBonus(uint256,uint256,uint256)": FunctionFragment;
        "setPool(uint256,uint256,bool)": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(address,uint256,uint256)": FunctionFragment;
        "withdrawAll(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addPool", values: [BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "alpacaPerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "harvest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "manualMint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pendingAlpaca", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAlpacaPerBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBonus", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPool", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "alpacaPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manualMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAlpaca", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAlpacaPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBonus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface IFairLaunchV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFairLaunchV1Interface;
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
        alpacaPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<[PoolInfoStructOutput]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<[UserInfoStructOutput]>;
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
    alpacaPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    harvest(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<PoolInfoStructOutput>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
    updatePool(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<UserInfoStructOutput>;
    withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        alpacaPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        harvest(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<UserInfoStructOutput>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addPool(_allocPoint: BigNumberish, _stakeToken: string, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        alpacaPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        alpacaPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        harvest(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pendingAlpaca(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAlpacaPerBlock(_alpacaPerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBonus(_bonusMultiplier: BigNumberish, _bonusEndBlock: BigNumberish, _bonusLockUpBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPool(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_for: string, _pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(_for: string, _pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
