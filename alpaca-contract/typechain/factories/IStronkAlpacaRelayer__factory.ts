/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IStronkAlpacaRelayer } from "../IStronkAlpacaRelayer";

export class IStronkAlpacaRelayer__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStronkAlpacaRelayer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IStronkAlpacaRelayer;
  }
}

const _abi = [
  {
    inputs: [],
    name: "transferAllAlpaca",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
