/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { IBSCPool } from "../IBSCPool";

export class IBSCPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<IBSCPool> {
    return super.deploy(overrides || {}) as Promise<IBSCPool>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IBSCPool {
    return super.attach(address) as IBSCPool;
  }
  connect(signer: Signer): IBSCPool__factory {
    return super.connect(signer) as IBSCPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBSCPool {
    return new Contract(address, _abi, signerOrProvider) as IBSCPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mdx",
    outputs: [
      {
        internalType: "contract IMdx",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accMdxPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accMultLpPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multLpRewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610207806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631526fe271461005c578063441a3e70146100b65780635672ab55146100db57806393f1a40b146100ff578063e2bbb158146100b6575b600080fd5b6100796004803603602081101561007257600080fd5b5035610149565b604080516001600160a01b0390971687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b6100d9600480360360408110156100cc57600080fd5b5080359060200135610196565b005b6100e361019a565b604080516001600160a01b039092168252519081900360200190f35b61012b6004803603604081101561011557600080fd5b50803590602001356001600160a01b03166101a9565b60408051938452602084019290925282820152519081900360600190f35b6001818154811061015657fe5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b5050565b6000546001600160a01b031681565b600260208181526000938452604080852090915291835291208054600182015491909201548356fea26469706673582212208454d0c61fab7855a9cabce104b45813160deb3a170958b2e7e4c030ca62844864736f6c63430006060033";
