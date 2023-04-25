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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ICagableInterface extends ethers.utils.Interface {
  functions: {
    "cage()": FunctionFragment;
    "uncage()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(functionFragment: "uncage", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;

  events: {
    "LogCage()": EventFragment;
    "LogUncage()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogCage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUncage"): EventFragment;
}

export type LogCageEvent = TypedEvent<[], {}>;

export type LogCageEventFilter = TypedEventFilter<LogCageEvent>;

export type LogUncageEvent = TypedEvent<[], {}>;

export type LogUncageEventFilter = TypedEventFilter<LogUncageEvent>;

export interface ICagable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICagableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uncage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cage(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uncage(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cage(overrides?: CallOverrides): Promise<void>;

    uncage(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "LogCage()"(): LogCageEventFilter;
    LogCage(): LogCageEventFilter;

    "LogUncage()"(): LogUncageEventFilter;
    LogUncage(): LogUncageEventFilter;
  };

  estimateGas: {
    cage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uncage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uncage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
