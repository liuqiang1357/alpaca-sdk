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

interface InterestModelInterface extends ethers.utils.Interface {
  functions: {
    "getInterestRate(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getInterestRate",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getInterestRate",
    data: BytesLike
  ): Result;

  events: {};
}

export class InterestModel extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InterestModelInterface;

  functions: {
    getInterestRate(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getInterestRate(uint256,uint256)"(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getInterestRate(
    debt: BigNumberish,
    floating: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInterestRate(uint256,uint256)"(
    debt: BigNumberish,
    floating: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getInterestRate(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInterestRate(uint256,uint256)"(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getInterestRate(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInterestRate(uint256,uint256)"(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getInterestRate(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInterestRate(uint256,uint256)"(
      debt: BigNumberish,
      floating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
