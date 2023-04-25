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

interface StrategyWithdrawMinimizeTradingInterface
  extends ethers.utils.Interface {
  functions: {
    "execute(address,uint256,bytes)": FunctionFragment;
    "factory()": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "router()": FunctionFragment;
    "wNativeRelayer()": FunctionFragment;
    "wbnb()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wNativeRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wbnb", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wNativeRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wbnb", data: BytesLike): Result;

  events: {};
}

export class StrategyWithdrawMinimizeTrading extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StrategyWithdrawMinimizeTradingInterface;

  functions: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address)"(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    "router()"(overrides?: CallOverrides): Promise<[string]>;

    wNativeRelayer(overrides?: CallOverrides): Promise<[string]>;

    "wNativeRelayer()"(overrides?: CallOverrides): Promise<[string]>;

    wbnb(overrides?: CallOverrides): Promise<[string]>;

    "wbnb()"(overrides?: CallOverrides): Promise<[string]>;
  };

  execute(
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execute(address,uint256,bytes)"(
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _router: string,
    _wbnb: string,
    _wNativeRelayer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address)"(
    _router: string,
    _wbnb: string,
    _wNativeRelayer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  "router()"(overrides?: CallOverrides): Promise<string>;

  wNativeRelayer(overrides?: CallOverrides): Promise<string>;

  "wNativeRelayer()"(overrides?: CallOverrides): Promise<string>;

  wbnb(overrides?: CallOverrides): Promise<string>;

  "wbnb()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address)"(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    "router()"(overrides?: CallOverrides): Promise<string>;

    wNativeRelayer(overrides?: CallOverrides): Promise<string>;

    "wNativeRelayer()"(overrides?: CallOverrides): Promise<string>;

    wbnb(overrides?: CallOverrides): Promise<string>;

    "wbnb()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address)"(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    "router()"(overrides?: CallOverrides): Promise<BigNumber>;

    wNativeRelayer(overrides?: CallOverrides): Promise<BigNumber>;

    "wNativeRelayer()"(overrides?: CallOverrides): Promise<BigNumber>;

    wbnb(overrides?: CallOverrides): Promise<BigNumber>;

    "wbnb()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address)"(
      _router: string,
      _wbnb: string,
      _wNativeRelayer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "router()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wNativeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wNativeRelayer()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wbnb(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wbnb()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}