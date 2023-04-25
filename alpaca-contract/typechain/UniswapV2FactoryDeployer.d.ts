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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UniswapV2FactoryDeployerInterface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "getPairCodeHash()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPairCodeHash",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPairCodeHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class UniswapV2FactoryDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UniswapV2FactoryDeployerInterface;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    getPairCodeHash(overrides?: CallOverrides): Promise<[string]>;

    "getPairCodeHash()"(overrides?: CallOverrides): Promise<[string]>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  getPairCodeHash(overrides?: CallOverrides): Promise<string>;

  "getPairCodeHash()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    getPairCodeHash(overrides?: CallOverrides): Promise<string>;

    "getPairCodeHash()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPairCodeHash(overrides?: CallOverrides): Promise<BigNumber>;

    "getPairCodeHash()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPairCodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPairCodeHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}