/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PancakeswapV2StrategyLiquidate } from "../PancakeswapV2StrategyLiquidate";

export class PancakeswapV2StrategyLiquidate__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyLiquidate> {
    return super.deploy(
      overrides || {}
    ) as Promise<PancakeswapV2StrategyLiquidate>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PancakeswapV2StrategyLiquidate {
    return super.attach(address) as PancakeswapV2StrategyLiquidate;
  }
  connect(signer: Signer): PancakeswapV2StrategyLiquidate__factory {
    return super.connect(signer) as PancakeswapV2StrategyLiquidate__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PancakeswapV2StrategyLiquidate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PancakeswapV2StrategyLiquidate;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPancakeFactory",
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
        internalType: "contract IPancakeRouter02",
        name: "_router",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IPancakeRouter02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ea9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063b61d27f614610051578063c45a0155146100d6578063c4d66de8146100fa578063f887ea4014610120575b600080fd5b6100d46004803603606081101561006757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561009657600080fd5b8201836020820111156100a857600080fd5b803590602001918460018302840111600160201b831117156100c957600080fd5b509092509050610128565b005b6100de61078a565b604080516001600160a01b039092168252519081900360200190f35b6100d46004803603602081101561011057600080fd5b50356001600160a01b0316610799565b6100de6108d8565b60335460ff1661017f576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff19169055600080808484606081101561019d57600080fd5b506065546040805163e6a4390560e01b81526020808501356001600160a01b039081166004840181905286358216602485018190528551909a5090985093909501359550600094939093169263e6a4390592604480840193829003018186803b15801561020957600080fd5b505afa15801561021d573d6000803e3d6000fd5b505050506040513d602081101561023357600080fd5b50516066546040805163095ea7b360e01b81526001600160a01b039283166004820152600019602482015290519293509083169163095ea7b3916044808201926020929091908290030181600087803b15801561028f57600080fd5b505af11580156102a3573d6000803e3d6000fd5b505050506040513d60208110156102b957600080fd5b50516102f65760405162461bcd60e51b8152600401808060200182810382526044815260200180610e026044913960600191505060405180910390fd5b606654610318906001600160a01b03858116911660001963ffffffff6108e716565b606654604080516370a0823160e01b815230600482015290516001600160a01b039283169263baa2abde92889288928716916370a08231916024808301926020929190829003018186803b15801561036f57600080fd5b505afa158015610383573d6000803e3d6000fd5b505050506040513d602081101561039957600080fd5b5051604080516001600160e01b031960e087901b1681526001600160a01b0394851660048201529290931660248301526044820152600060648201819052608482018190523060a48301524260c4830152825160e480840194939192918390030190829087803b15801561040c57600080fd5b505af1158015610420573d6000803e3d6000fd5b505050506040513d604081101561043657600080fd5b50506040805160028082526060808301845292602083019080368337019050509050838160008151811061046657fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061049457fe5b6001600160a01b0392831660209182029290920101526066548116906338ed1739906104c1908716610a40565b60008430426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561053f578181015183820152602001610527565b505050509050019650505050505050600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156105a557600080fd5b8101908080516040519392919084600160201b8211156105c457600080fd5b9083019060208201858111156105d957600080fd5b82518660208202830111600160201b821117156105f557600080fd5b82525081516020918201928201910280838360005b8381101561062257818101518382015260200161060a565b50505050905001604052505050506000610644866001600160a01b0316610a40565b9050838110156106855760405162461bcd60e51b8152600401808060200182810382526049815260200180610db96049913960600191505060405180910390fd5b610690863383610abc565b6066546040805163095ea7b360e01b81526001600160a01b03928316600482015260006024820181905291519286169263095ea7b392604480840193602093929083900390910190829087803b1580156106e957600080fd5b505af11580156106fd573d6000803e3d6000fd5b505050506040513d602081101561071357600080fd5b50516107505760405162461bcd60e51b815260040180806020018281038252604b815260200180610d6e604b913960600191505060405180910390fd5b606654610771906001600160a01b038781169116600063ffffffff6108e716565b50506033805460ff191660011790555050505050505050565b6065546001600160a01b031681565b600054610100900460ff16806107b257506107b2610c0f565b806107c0575060005460ff16155b6107fb5760405162461bcd60e51b815260040180806020018281038252602e815260200180610e46602e913960400191505060405180910390fd5b600054610100900460ff16158015610826576000805460ff1961ff0019909116610100171660011790555b61082e610c15565b816001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561086757600080fd5b505afa15801561087b573d6000803e3d6000fd5b505050506040513d602081101561089157600080fd5b5051606580546001600160a01b03199081166001600160a01b03938416179091556066805490911691841691909117905580156108d4576000805461ff00191690555b5050565b6066546001600160a01b031681565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b602083106109645780518252601f199092019160209182019101610945565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146109c6576040519150601f19603f3d011682016040523d82523d6000602084013e6109cb565b606091505b50915091508180156109f95750805115806109f957508080602001905160208110156109f657600080fd5b50515b610a39576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610a8a57600080fd5b505afa158015610a9e573d6000803e3d6000fd5b505050506040513d6020811015610ab457600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610b395780518252601f199092019160209182019101610b1a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b9b576040519150601f19603f3d011682016040523d82523d6000602084013e610ba0565b606091505b5091509150818015610bce575080511580610bce5750808060200190516020811015610bcb57600080fd5b50515b610a39576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b303b1590565b600054610100900460ff1680610c2e5750610c2e610c0f565b80610c3c575060005460ff16155b610c775760405162461bcd60e51b815260040180806020018281038252602e815260200180610e46602e913960400191505060405180910390fd5b600054610100900460ff16158015610ca2576000805460ff1961ff0019909116610100171660011790555b610caa610cbf565b8015610cbc576000805461ff00191690555b50565b600054610100900460ff1680610cd85750610cd8610c0f565b80610ce6575060005460ff16155b610d215760405162461bcd60e51b815260040180806020018281038252602e815260200180610e46602e913960400191505060405180910390fd5b600054610100900460ff16158015610d4c576000805460ff1961ff0019909116610100171660011790555b6033805460ff191660011790558015610cbc576000805461ff00191690555056fe50616e63616b6573776170563253747261746567794c69717569646174653a3a657865637574653a3a20756e61626c6520746f207265736574204c5020746f6b656e20617070726f76616c50616e63616b6573776170563253747261746567794c69717569646174653a3a657865637574653a3a20696e73756666696369656e742062617365546f6b656e20726563656976656450616e63616b6573776170563253747261746567794c69717569646174653a3a657865637574653a3a20756e61626c6520746f20617070726f7665204c5020746f6b656e436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a2646970667358221220a3a4aa664e94fcac8a88d0d1b2806a58dfb302e92fd1de86f5e1746ba39085da64736f6c63430006060033";
