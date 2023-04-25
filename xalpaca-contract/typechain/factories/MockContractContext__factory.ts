/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockContractContext } from "../MockContractContext";

export class MockContractContext__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockContractContext> {
    return super.deploy(overrides || {}) as Promise<MockContractContext>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockContractContext {
    return super.attach(address) as MockContractContext;
  }
  connect(signer: Signer): MockContractContext__factory {
    return super.connect(signer) as MockContractContext__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockContractContext {
    return new Contract(address, _abi, signerOrProvider) as MockContractContext;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610475806100206000396000f3fe60806040526004361061001e5760003560e01c80632224fa2514610023575b600080fd5b61003661003136600461021e565b61004c565b60405161004391906103df565b60405180910390f35b606080846100935783838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506100ce92505050565b85856040516100a39291906103b3565b6040519081900381206100bc918690869060200161038f565b60405160208183030381529060405290505b600080896001600160a01b031689846040516100ea91906103c3565b60006040518083038185875af1925050503d8060008114610127576040519150601f19603f3d011682016040523d82523d6000602084013e61012c565b606091505b50915091508161013b82610170565b906101625760405162461bcd60e51b815260040161015991906103df565b60405180910390fd5b509998505050505050505050565b60606044825110156101b557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906101cf91906102b6565b92915050565b60008083601f8401126101e757600080fd5b50813567ffffffffffffffff8111156101ff57600080fd5b60208301915083602082850101111561021757600080fd5b9250929050565b6000806000806000806080878903121561023757600080fd5b86356001600160a01b038116811461024e57600080fd5b955060208701359450604087013567ffffffffffffffff8082111561027257600080fd5b61027e8a838b016101d5565b9096509450606089013591508082111561029757600080fd5b506102a489828a016101d5565b979a9699509497509295939492505050565b6000602082840312156102c857600080fd5b815167ffffffffffffffff808211156102e057600080fd5b818401915084601f8301126102f457600080fd5b81518181111561030657610306610429565b604051601f8201601f19908116603f0116810190838211818310171561032e5761032e610429565b8160405282815287602084870101111561034757600080fd5b6103588360208301602088016103f9565b979650505050505050565b6000815180845261037b8160208601602086016103f9565b601f01601f19169290920160200192915050565b6001600160e01b031984168152818360048301376000910160040190815292915050565b8183823760009101908152919050565b600082516103d58184602087016103f9565b9190910192915050565b6020815260006103f26020830184610363565b9392505050565b60005b838110156104145781810151838201526020016103fc565b83811115610423576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220fd047f327dd1467fa5bd5dee9051f35c981f36e631986a4953a85f86e9f6a09664736f6c63430008070033";
