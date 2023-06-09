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

interface ISwapMiningInterface extends ethers.utils.Interface {
  functions: {
    "swap(address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class ISwapMining extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ISwapMiningInterface;

  functions: {
    swap(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(address,address,address,uint256)"(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  swap(
    account: string,
    input: string,
    output: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(address,address,address,uint256)"(
    account: string,
    input: string,
    output: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "swap(address,address,address,uint256)"(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    swap(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(address,address,address,uint256)"(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(address,address,address,uint256)"(
      account: string,
      input: string,
      output: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
