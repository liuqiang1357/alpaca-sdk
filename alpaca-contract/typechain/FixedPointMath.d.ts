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

interface FixedPointMathInterface extends ethers.utils.Interface {
  functions: {
    "DECIMALS()": FunctionFragment;
    "SCALAR()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DECIMALS", values?: undefined): string;
  encodeFunctionData(functionFragment: "SCALAR", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DECIMALS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SCALAR", data: BytesLike): Result;

  events: {};
}

export class FixedPointMath extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FixedPointMathInterface;

  functions: {
    DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SCALAR(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SCALAR()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  "DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

  SCALAR(overrides?: CallOverrides): Promise<BigNumber>;

  "SCALAR()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    SCALAR(overrides?: CallOverrides): Promise<BigNumber>;

    "SCALAR()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    SCALAR(overrides?: CallOverrides): Promise<BigNumber>;

    "SCALAR()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SCALAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SCALAR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
