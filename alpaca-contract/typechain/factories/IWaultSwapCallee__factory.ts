/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IWaultSwapCallee } from "../IWaultSwapCallee";

export class IWaultSwapCallee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWaultSwapCallee {
    return new Contract(address, _abi, signerOrProvider) as IWaultSwapCallee;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "waultSwapCall",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];