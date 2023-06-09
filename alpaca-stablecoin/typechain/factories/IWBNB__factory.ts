/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWBNB, IWBNBInterface } from "../IWBNB";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IWBNB__factory {
  static readonly abi = _abi;
  static createInterface(): IWBNBInterface {
    return new utils.Interface(_abi) as IWBNBInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IWBNB {
    return new Contract(address, _abi, signerOrProvider) as IWBNB;
  }
}
