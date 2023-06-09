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

interface SingleAssetWorkerConfigInterface extends ethers.utils.Interface {
  functions: {
    "acceptDebt(address)": FunctionFragment;
    "emergencySetAcceptDebt(address[],bool)": FunctionFragment;
    "factory()": FunctionFragment;
    "governor()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isReserveConsistent(address)": FunctionFragment;
    "isStable(address)": FunctionFragment;
    "killFactor(address,uint256)": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "rawKillFactor(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConfigs(address[],tuple[])": FunctionFragment;
    "setGovernor(address)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wNative()": FunctionFragment;
    "workFactor(address,uint256)": FunctionFragment;
    "workers(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptDebt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emergencySetAcceptDebt",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isReserveConsistent",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isStable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "killFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rawKillFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConfigs",
    values: [
      string[],
      {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "setGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "wNative", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "workFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "workers", values: [string]): string;

  decodeFunctionResult(functionFragment: "acceptDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencySetAcceptDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isReserveConsistent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isStable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "killFactor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawKillFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfigs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wNative", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workFactor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetConfig(address,address,bool,uint64,uint64,uint64)": EventFragment;
    "SetGovernor(address,address)": EventFragment;
    "SetOracle(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConfig"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGovernor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetOracle"): EventFragment;
}

export class SingleAssetWorkerConfig extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SingleAssetWorkerConfigInterface;

  functions: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<[boolean]>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    emergencySetAcceptDebt(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencySetAcceptDebt(address[],bool)"(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    "governor()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isReserveConsistent(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isReserveConsistent(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStable(_worker: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isStable(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    "oracle()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    rawKillFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "rawKillFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGovernor(
      newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernor(address)"(
      newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOracle(address)"(
      _oracle: string,
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

    wNative(overrides?: CallOverrides): Promise<[string]>;

    "wNative()"(overrides?: CallOverrides): Promise<[string]>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;
  };

  acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;

  "acceptDebt(address)"(
    worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  emergencySetAcceptDebt(
    addrs: string[],
    isAcceptDebt: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencySetAcceptDebt(address[],bool)"(
    addrs: string[],
    isAcceptDebt: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _oracle: string,
    _router: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _oracle: string,
    _router: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isReserveConsistent(
    _worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isReserveConsistent(address)"(
    _worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStable(_worker: string, overrides?: CallOverrides): Promise<boolean>;

  "isStable(address)"(
    _worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  killFactor(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "killFactor(address,uint256)"(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  "oracle()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  rawKillFactor(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "rawKillFactor(address,uint256)"(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setConfigs(
    addrs: string[],
    configs: {
      acceptDebt: boolean;
      workFactor: BigNumberish;
      killFactor: BigNumberish;
      maxPriceDiff: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setConfigs(address[],tuple[])"(
    addrs: string[],
    configs: {
      acceptDebt: boolean;
      workFactor: BigNumberish;
      killFactor: BigNumberish;
      maxPriceDiff: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGovernor(
    newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernor(address)"(
    newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOracle(
    _oracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOracle(address)"(
    _oracle: string,
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

  wNative(overrides?: CallOverrides): Promise<string>;

  "wNative()"(overrides?: CallOverrides): Promise<string>;

  workFactor(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "workFactor(address,uint256)"(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  workers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      acceptDebt: boolean;
      workFactor: BigNumber;
      killFactor: BigNumber;
      maxPriceDiff: BigNumber;
    }
  >;

  "workers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      acceptDebt: boolean;
      workFactor: BigNumber;
      killFactor: BigNumber;
      maxPriceDiff: BigNumber;
    }
  >;

  callStatic: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    emergencySetAcceptDebt(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencySetAcceptDebt(address[],bool)"(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _oracle: string,
      _router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _oracle: string,
      _router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isReserveConsistent(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isReserveConsistent(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStable(_worker: string, overrides?: CallOverrides): Promise<boolean>;

    "isStable(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    "oracle()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    rawKillFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rawKillFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernor(newGovernor: string, overrides?: CallOverrides): Promise<void>;

    "setGovernor(address)"(
      newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(_oracle: string, overrides?: CallOverrides): Promise<void>;

    "setOracle(address)"(
      _oracle: string,
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

    wNative(overrides?: CallOverrides): Promise<string>;

    "wNative()"(overrides?: CallOverrides): Promise<string>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    SetConfig(
      caller: string | null,
      worker: string | null,
      acceptDebt: null,
      workFactor: null,
      killFactor: null,
      maxPriceDiff: null
    ): EventFilter;

    SetGovernor(caller: string | null, governor: string | null): EventFilter;

    SetOracle(caller: string | null, oracle: null): EventFilter;
  };

  estimateGas: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<BigNumber>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencySetAcceptDebt(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencySetAcceptDebt(address[],bool)"(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isReserveConsistent(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isReserveConsistent(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStable(_worker: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isStable(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    "oracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    rawKillFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rawKillFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGovernor(newGovernor: string, overrides?: Overrides): Promise<BigNumber>;

    "setGovernor(address)"(
      newGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOracle(_oracle: string, overrides?: Overrides): Promise<BigNumber>;

    "setOracle(address)"(
      _oracle: string,
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

    wNative(overrides?: CallOverrides): Promise<BigNumber>;

    "wNative()"(overrides?: CallOverrides): Promise<BigNumber>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptDebt(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencySetAcceptDebt(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencySetAcceptDebt(address[],bool)"(
      addrs: string[],
      isAcceptDebt: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _oracle: string,
      _router: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isReserveConsistent(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isReserveConsistent(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStable(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isStable(address)"(
      _worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oracle()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rawKillFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rawKillFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGovernor(
      newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernor(address)"(
      newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOracle(address)"(
      _oracle: string,
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

    wNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wNative()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
