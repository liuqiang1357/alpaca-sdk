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

interface IWorkerInterface extends ethers.utils.Interface {
  functions: {
    "baseToken()": FunctionFragment;
    "farmingToken()": FunctionFragment;
    "health(uint256)": FunctionFragment;
    "liquidate(uint256)": FunctionFragment;
    "lpToken()": FunctionFragment;
    "reinvest()": FunctionFragment;
    "setReinvestorOk(address[],bool)": FunctionFragment;
    "setStrategyOk(address[],bool)": FunctionFragment;
    "work(uint256,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "farmingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "health",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "reinvest", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setReinvestorOk",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setStrategyOk",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "work",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "farmingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "health", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reinvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReinvestorOk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStrategyOk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "work", data: BytesLike): Result;

  events: {};
}

export class IWorker extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IWorkerInterface;

  functions: {
    baseToken(overrides?: CallOverrides): Promise<[string]>;

    "baseToken()"(overrides?: CallOverrides): Promise<[string]>;

    farmingToken(overrides?: CallOverrides): Promise<[string]>;

    "farmingToken()"(overrides?: CallOverrides): Promise<[string]>;

    health(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "health(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    liquidate(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidate(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    "lpToken()"(overrides?: CallOverrides): Promise<[string]>;

    reinvest(overrides?: Overrides): Promise<ContractTransaction>;

    "reinvest()"(overrides?: Overrides): Promise<ContractTransaction>;

    setReinvestorOk(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setReinvestorOk(address[],bool)"(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStrategyOk(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStrategyOk(address[],bool)"(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    work(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "work(uint256,address,uint256,bytes)"(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  baseToken(overrides?: CallOverrides): Promise<string>;

  "baseToken()"(overrides?: CallOverrides): Promise<string>;

  farmingToken(overrides?: CallOverrides): Promise<string>;

  "farmingToken()"(overrides?: CallOverrides): Promise<string>;

  health(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "health(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  liquidate(
    id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidate(uint256)"(
    id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  "lpToken()"(overrides?: CallOverrides): Promise<string>;

  reinvest(overrides?: Overrides): Promise<ContractTransaction>;

  "reinvest()"(overrides?: Overrides): Promise<ContractTransaction>;

  setReinvestorOk(
    reinvestor: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setReinvestorOk(address[],bool)"(
    reinvestor: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStrategyOk(
    strats: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStrategyOk(address[],bool)"(
    strats: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  work(
    id: BigNumberish,
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "work(uint256,address,uint256,bytes)"(
    id: BigNumberish,
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    baseToken(overrides?: CallOverrides): Promise<string>;

    "baseToken()"(overrides?: CallOverrides): Promise<string>;

    farmingToken(overrides?: CallOverrides): Promise<string>;

    "farmingToken()"(overrides?: CallOverrides): Promise<string>;

    health(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "health(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "liquidate(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    "lpToken()"(overrides?: CallOverrides): Promise<string>;

    reinvest(overrides?: CallOverrides): Promise<void>;

    "reinvest()"(overrides?: CallOverrides): Promise<void>;

    setReinvestorOk(
      reinvestor: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setReinvestorOk(address[],bool)"(
      reinvestor: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setStrategyOk(
      strats: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStrategyOk(address[],bool)"(
      strats: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    work(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "work(uint256,address,uint256,bytes)"(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    baseToken(overrides?: CallOverrides): Promise<BigNumber>;

    "baseToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    farmingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "farmingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    health(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "health(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "liquidate(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    "lpToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    reinvest(overrides?: Overrides): Promise<BigNumber>;

    "reinvest()"(overrides?: Overrides): Promise<BigNumber>;

    setReinvestorOk(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setReinvestorOk(address[],bool)"(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStrategyOk(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setStrategyOk(address[],bool)"(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    work(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "work(uint256,address,uint256,bytes)"(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    farmingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farmingToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    health(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "health(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidate(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lpToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reinvest(overrides?: Overrides): Promise<PopulatedTransaction>;

    "reinvest()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setReinvestorOk(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setReinvestorOk(address[],bool)"(
      reinvestor: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStrategyOk(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStrategyOk(address[],bool)"(
      strats: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    work(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "work(uint256,address,uint256,bytes)"(
      id: BigNumberish,
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
