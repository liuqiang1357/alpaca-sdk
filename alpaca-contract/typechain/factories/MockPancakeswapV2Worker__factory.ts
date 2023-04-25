/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockPancakeswapV2Worker } from "../MockPancakeswapV2Worker";

export class MockPancakeswapV2Worker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lpToken: string,
    _baseToken: string,
    _farmingToken: string,
    overrides?: Overrides
  ): Promise<MockPancakeswapV2Worker> {
    return super.deploy(
      _lpToken,
      _baseToken,
      _farmingToken,
      overrides || {}
    ) as Promise<MockPancakeswapV2Worker>;
  }
  getDeployTransaction(
    _lpToken: string,
    _baseToken: string,
    _farmingToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lpToken,
      _baseToken,
      _farmingToken,
      overrides || {}
    );
  }
  attach(address: string): MockPancakeswapV2Worker {
    return super.attach(address) as MockPancakeswapV2Worker;
  }
  connect(signer: Signer): MockPancakeswapV2Worker__factory {
    return super.connect(signer) as MockPancakeswapV2Worker__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPancakeswapV2Worker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockPancakeswapV2Worker;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPancakePair",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_farmingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "baseToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "farmingToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IPancakePair",
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
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "work",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107333803806107338339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b03199182161790915560018054948416948216949094179093556002805492909116919092161790556106a48061008f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806348db8cc4146100515780635fcbd285146100dd578063ad24dce714610101578063c55dae6314610109575b600080fd5b6100db6004803603608081101561006757600080fd5b8135916001600160a01b036020820135169160408201359190810190608081016060820135600160201b81111561009d57600080fd5b8201836020820111156100af57600080fd5b803590602001918460018302840111600160201b831117156100d057600080fd5b509092509050610111565b005b6100e5610433565b604080516001600160a01b039092168252519081900360200190f35b6100e5610442565b6100e5610451565b600060608383604081101561012557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561014f57600080fd5b82018360208201111561016157600080fd5b803590602001918460018302840111600160201b8311171561018257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506001549698509196506101f7958895506101de94506001600160a01b03169250610460915050565b6001546001600160a01b0316919063ffffffff6104dc16565b600054604080516370a0823160e01b815230600482015290516001600160a01b039092169163a9059cbb91859184916370a08231916024808301926020929190829003018186803b15801561024b57600080fd5b505afa15801561025f573d6000803e3d6000fd5b505050506040513d602081101561027557600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b1580156102c657600080fd5b505af11580156102da573d6000803e3d6000fd5b505050506040513d60208110156102f057600080fd5b505161032d5760405162461bcd60e51b81526004018080602001828103825260388152602001806106376038913960400191505060405180910390fd5b816001600160a01b031663b61d27f68787846040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103a9578181015183820152602001610391565b50505050905090810190601f1680156103d65780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156103f757600080fd5b505af115801561040b573d6000803e3d6000fd5b505060015461042a92503391506101de906001600160a01b0316610460565b50505050505050565b6000546001600160a01b031681565b6002546001600160a01b031681565b6001546001600160a01b031681565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b1580156104aa57600080fd5b505afa1580156104be573d6000803e3d6000fd5b505050506040513d60208110156104d457600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106105595780518252601f19909201916020918201910161053a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146105bb576040519150601f19603f3d011682016040523d82523d6000602084013e6105c0565b606091505b50915091508180156105ee5750805115806105ee57508080602001905160208110156105eb57600080fd5b50515b61062f576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b505050505056fe50616e63616b6573776170576f726b65723a3a776f726b3a3a20756e61626c6520746f207472616e73666572206c7020746f207374726174a2646970667358221220c95b964bdae85f906160f8d1655c41a235509fea83648cf4c5924f1079e53d8b64736f6c63430006060033";
