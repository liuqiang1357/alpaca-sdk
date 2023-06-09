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

export interface ILiquidationEngineInterface extends ethers.utils.Interface {
  functions: {
    "liquidate(bytes32,address,uint256,uint256,address,bytes)": FunctionFragment;
    "live()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BytesLike, string, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;

  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;

  events: {};
}

export interface ILiquidationEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILiquidationEngineInterface;

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
    liquidate(
      _collateralPoolId: BytesLike,
      _positionAddress: string,
      _debtShareToBeLiquidated: BigNumberish,
      _maxDebtShareToBeLiquidated: BigNumberish,
      _collateralRecipient: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    live(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  liquidate(
    _collateralPoolId: BytesLike,
    _positionAddress: string,
    _debtShareToBeLiquidated: BigNumberish,
    _maxDebtShareToBeLiquidated: BigNumberish,
    _collateralRecipient: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  live(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    liquidate(
      _collateralPoolId: BytesLike,
      _positionAddress: string,
      _debtShareToBeLiquidated: BigNumberish,
      _maxDebtShareToBeLiquidated: BigNumberish,
      _collateralRecipient: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    live(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    liquidate(
      _collateralPoolId: BytesLike,
      _positionAddress: string,
      _debtShareToBeLiquidated: BigNumberish,
      _maxDebtShareToBeLiquidated: BigNumberish,
      _collateralRecipient: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    live(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    liquidate(
      _collateralPoolId: BytesLike,
      _positionAddress: string,
      _debtShareToBeLiquidated: BigNumberish,
      _maxDebtShareToBeLiquidated: BigNumberish,
      _collateralRecipient: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
