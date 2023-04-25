/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILiquidationEngine,
  ILiquidationEngineInterface,
} from "../ILiquidationEngine";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_collateralPoolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_positionAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_debtShareToBeLiquidated",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDebtShareToBeLiquidated",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_collateralRecipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "live",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ILiquidationEngine__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidationEngineInterface {
    return new utils.Interface(_abi) as ILiquidationEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILiquidationEngine {
    return new Contract(address, _abi, signerOrProvider) as ILiquidationEngine;
  }
}