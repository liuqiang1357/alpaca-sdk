/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IFairLaunchInterface extends ethers.utils.Interface {
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

  encodeFunctionData(
    functionFragment: "addPool",
    values: [BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAlpaca",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPool",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAlpaca",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFairLaunch extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IFairLaunchInterface;

  functions: {
    addPool(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPool(uint256,address,bool)"(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deposit(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingAlpaca(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingAlpaca(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "poolLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPool(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPool(uint256,uint256,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawAll(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawAll(address,uint256)"(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addPool(
    _allocPoint: BigNumberish,
    _stakeToken: string,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPool(uint256,address,bool)"(
    _allocPoint: BigNumberish,
    _stakeToken: string,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deposit(
    _for: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(address,uint256,uint256)"(
    _for: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  harvest(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "harvest(uint256)"(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingAlpaca(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingAlpaca(uint256,address)"(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  setPool(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPool(uint256,uint256,bool)"(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updatePool(uint256)"(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    _for: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256,uint256)"(
    _for: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawAll(
    _for: string,
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawAll(address,uint256)"(
    _for: string,
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addPool(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "addPool(uint256,address,bool)"(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    harvest(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingAlpaca(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingAlpaca(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPool(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPool(uint256,uint256,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAll(
      _for: string,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawAll(address,uint256)"(
      _for: string,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addPool(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addPool(uint256,address,bool)"(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deposit(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deposit(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    harvest(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pendingAlpaca(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingAlpaca(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPool(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPool(uint256,uint256,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawAll(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawAll(address,uint256)"(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPool(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPool(uint256,address,bool)"(
      _allocPoint: BigNumberish,
      _stakeToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingAlpaca(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingAlpaca(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPool(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPool(uint256,uint256,bool)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updatePool(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256,uint256)"(
      _for: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawAll(address,uint256)"(
      _for: string,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
