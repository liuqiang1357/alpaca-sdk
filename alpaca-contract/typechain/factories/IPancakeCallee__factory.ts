/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPancakeCallee } from "../IPancakeCallee";

export class IPancakeCallee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPancakeCallee {
    return new Contract(address, _abi, signerOrProvider) as IPancakeCallee;
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
    name: "pancakeCall",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
