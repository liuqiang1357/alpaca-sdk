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

interface PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarmInterface
  extends ethers.utils.Interface {
  functions: {
    "execute(address,uint256,bytes)": FunctionFragment;
    "factory()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "okWorkers(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "setWorkersOk(address[],bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "wNative()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "okWorkers", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setWorkersOk",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "wNative", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "okWorkers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWorkersOk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wNative", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarmInterface;

  functions: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "execute(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    okWorkers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "okWorkers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    "router()"(overrides?: CallOverrides): Promise<[string]>;

    setWorkersOk(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setWorkersOk(address[],bool)"(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    wNative(overrides?: CallOverrides): Promise<[string]>;

    "wNative()"(overrides?: CallOverrides): Promise<[string]>;
  };

  execute(
    arg0: string,
    arg1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "execute(address,uint256,bytes)"(
    arg0: string,
    arg1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _router: string,
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _router: string,
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  okWorkers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "okWorkers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  "router()"(overrides?: CallOverrides): Promise<string>;

  setWorkersOk(
    workers: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setWorkersOk(address[],bool)"(
    workers: string[],
    isOk: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  wNative(overrides?: CallOverrides): Promise<string>;

  "wNative()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _router: string,
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _router: string,
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    okWorkers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "okWorkers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    "router()"(overrides?: CallOverrides): Promise<string>;

    setWorkersOk(
      workers: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setWorkersOk(address[],bool)"(
      workers: string[],
      isOk: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    wNative(overrides?: CallOverrides): Promise<string>;

    "wNative()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "execute(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    okWorkers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "okWorkers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    "router()"(overrides?: CallOverrides): Promise<BigNumber>;

    setWorkersOk(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setWorkersOk(address[],bool)"(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    wNative(overrides?: CallOverrides): Promise<BigNumber>;

    "wNative()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "execute(address,uint256,bytes)"(
      arg0: string,
      arg1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _router: string,
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    okWorkers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "okWorkers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "router()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setWorkersOk(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setWorkersOk(address[],bool)"(
      workers: string[],
      isOk: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wNative()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
