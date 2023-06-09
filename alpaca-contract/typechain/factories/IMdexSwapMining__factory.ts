/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMdexSwapMining } from "../IMdexSwapMining";

export class IMdexSwapMining__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMdexSwapMining {
    return new Contract(address, _abi, signerOrProvider) as IMdexSwapMining;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "getUserReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "takerWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
