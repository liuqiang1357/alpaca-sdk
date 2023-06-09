/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IProxyToken } from "../IProxyToken";

export class IProxyToken__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProxyToken {
    return new Contract(address, _abi, signerOrProvider) as IProxyToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_okHolders",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_isOk",
        type: "bool",
      },
    ],
    name: "setOkHolders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
