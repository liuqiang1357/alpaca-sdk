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

interface SafeMathInterface extends ethers.utils.Interface {
  functions: {
    "ray()": FunctionFragment;
    "wad()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ray", values?: undefined): string;
  encodeFunctionData(functionFragment: "wad", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ray", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wad", data: BytesLike): Result;

  events: {};
}

export class SafeMath extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SafeMathInterface;

  functions: {
    ray(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ray()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    wad(overrides?: CallOverrides): Promise<[BigNumber]>;

    "wad()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ray(overrides?: CallOverrides): Promise<BigNumber>;

  "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

  wad(overrides?: CallOverrides): Promise<BigNumber>;

  "wad()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ray(overrides?: CallOverrides): Promise<BigNumber>;

    "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

    wad(overrides?: CallOverrides): Promise<BigNumber>;

    "wad()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ray(overrides?: CallOverrides): Promise<BigNumber>;

    "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

    wad(overrides?: CallOverrides): Promise<BigNumber>;

    "wad()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ray()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wad(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wad()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
