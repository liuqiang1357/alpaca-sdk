/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPriceFeed, IPriceFeedInterface } from "../IPriceFeed";

const _abi = [
  {
    inputs: [],
    name: "peekPrice",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readPrice",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceFeedInterface {
    return new utils.Interface(_abi) as IPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as IPriceFeed;
  }
}
