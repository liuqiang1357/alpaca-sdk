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

interface ILockerInterface extends ethers.utils.Interface {
  functions: {
    "calLockAmount(uint256)": FunctionFragment;
    "claim()": FunctionFragment;
    "lock(address,uint256)": FunctionFragment;
    "lockOf(address)": FunctionFragment;
    "pendingTokens(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calLockAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lockOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;

  events: {
    "Lock(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
}

export class ILocker extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILockerInterface;

  functions: {
    calLockAmount(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "calLockAmount(uint256)"(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    lock(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(address,uint256)"(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockOf(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "lockOf(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingTokens(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pendingTokens(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  calLockAmount(
    alpacaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "calLockAmount(uint256)"(
    alpacaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  lock(
    user: string,
    alpacaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(address,uint256)"(
    user: string,
    alpacaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockOf(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "lockOf(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingTokens(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pendingTokens(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    calLockAmount(
      alpacaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calLockAmount(uint256)"(
      alpacaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    lock(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,uint256)"(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingTokens(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {
    Lock(to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    calLockAmount(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "calLockAmount(uint256)"(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    lock(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lock(address,uint256)"(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockOf(user: string, overrides?: Overrides): Promise<BigNumber>;

    "lockOf(address)"(user: string, overrides?: Overrides): Promise<BigNumber>;

    pendingTokens(user: string, overrides?: Overrides): Promise<BigNumber>;

    "pendingTokens(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calLockAmount(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "calLockAmount(uint256)"(
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    lock(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(address,uint256)"(
      user: string,
      alpacaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockOf(user: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "lockOf(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
