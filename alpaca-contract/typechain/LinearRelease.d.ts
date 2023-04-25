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

interface LinearReleaseInterface extends ethers.utils.Interface {
  functions: {
    "calLockAmount(uint256)": FunctionFragment;
    "claim()": FunctionFragment;
    "endReleaseBlock()": FunctionFragment;
    "fairLaunch()": FunctionFragment;
    "lock(address,uint256)": FunctionFragment;
    "lockOf(address)": FunctionFragment;
    "lockupBps()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingTokens(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startReleaseBlock()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calLockAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "endReleaseBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fairLaunch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lockOf", values: [string]): string;
  encodeFunctionData(functionFragment: "lockupBps", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startReleaseBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endReleaseBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fairLaunch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockupBps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startReleaseBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "Lock(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class LinearRelease extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LinearReleaseInterface;

  functions: {
    calLockAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calLockAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    endReleaseBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "endReleaseBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    fairLaunch(overrides?: CallOverrides): Promise<[string]>;

    "fairLaunch()"(overrides?: CallOverrides): Promise<[string]>;

    lock(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockOf(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "lockOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lockupBps(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lockupBps()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    startReleaseBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startReleaseBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  calLockAmount(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calLockAmount(uint256)"(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "endReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  fairLaunch(overrides?: CallOverrides): Promise<string>;

  "fairLaunch()"(overrides?: CallOverrides): Promise<string>;

  lock(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(address,uint256)"(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lockOf(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lockupBps(overrides?: CallOverrides): Promise<BigNumber>;

  "lockupBps()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingTokens(
    _user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  "pendingTokens(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "startReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    calLockAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calLockAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    fairLaunch(overrides?: CallOverrides): Promise<string>;

    "fairLaunch()"(overrides?: CallOverrides): Promise<string>;

    lock(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockupBps(overrides?: CallOverrides): Promise<BigNumber>;

    "lockupBps()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claim(to: string | null, value: null): EventFilter;

    Lock(to: string | null, value: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    calLockAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calLockAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    fairLaunch(overrides?: CallOverrides): Promise<BigNumber>;

    "fairLaunch()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lock(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockupBps(overrides?: CallOverrides): Promise<BigNumber>;

    "lockupBps()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingTokens(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startReleaseBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calLockAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calLockAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    endReleaseBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "endReleaseBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fairLaunch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fairLaunch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(address,uint256)"(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockOf(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lockOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockupBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockupBps()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    startReleaseBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startReleaseBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
