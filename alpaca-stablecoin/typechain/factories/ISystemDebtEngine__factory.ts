/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISystemDebtEngine,
  ISystemDebtEngineInterface,
} from "../ISystemDebtEngine";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "settleSystemBadDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "surplusBuffer",
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

export class ISystemDebtEngine__factory {
  static readonly abi = _abi;
  static createInterface(): ISystemDebtEngineInterface {
    return new utils.Interface(_abi) as ISystemDebtEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISystemDebtEngine {
    return new Contract(address, _abi, signerOrProvider) as ISystemDebtEngine;
  }
}