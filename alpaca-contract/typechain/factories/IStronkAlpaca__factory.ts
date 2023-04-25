/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IStronkAlpaca } from "../IStronkAlpaca";

export class IStronkAlpaca__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStronkAlpaca {
    return new Contract(address, _abi, signerOrProvider) as IStronkAlpaca;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivingStronkAlpacaAmount",
        type: "uint256",
      },
    ],
    name: "Hodl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "PrepareHodl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivingAlpacaAmount",
        type: "uint256",
      },
    ],
    name: "Unhodl",
    type: "event",
  },
  {
    inputs: [],
    name: "hodl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "prepareHodl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unhodl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
