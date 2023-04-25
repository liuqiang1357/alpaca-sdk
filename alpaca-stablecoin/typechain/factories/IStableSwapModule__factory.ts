/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IStableSwapModule,
  IStableSwapModuleInterface,
} from "../IStableSwapModule";

const _abi = [
  {
    inputs: [],
    name: "authTokenAdapter",
    outputs: [
      {
        internalType: "contract IAuthTokenAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stablecoinAdapter",
    outputs: [
      {
        internalType: "contract IStablecoinAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "swapStablecoinToToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "swapTokenToStablecoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStableSwapModule__factory {
  static readonly abi = _abi;
  static createInterface(): IStableSwapModuleInterface {
    return new utils.Interface(_abi) as IStableSwapModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStableSwapModule {
    return new Contract(address, _abi, signerOrProvider) as IStableSwapModule;
  }
}
