/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StrategyPartialCloseLiquidate } from "../StrategyPartialCloseLiquidate";

export class StrategyPartialCloseLiquidate__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StrategyPartialCloseLiquidate> {
    return super.deploy(
      overrides || {}
    ) as Promise<StrategyPartialCloseLiquidate>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StrategyPartialCloseLiquidate {
    return super.attach(address) as StrategyPartialCloseLiquidate;
  }
  connect(signer: Signer): StrategyPartialCloseLiquidate__factory {
    return super.connect(signer) as StrategyPartialCloseLiquidate__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StrategyPartialCloseLiquidate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StrategyPartialCloseLiquidate;
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
  "0x608060405234801561001057600080fd5b50610f2b806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063b61d27f614610051578063c45a0155146100d6578063c4d66de8146100fa578063f887ea4014610120575b600080fd5b6100d46004803603606081101561006757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561009657600080fd5b8201836020820111156100a857600080fd5b803590602001918460018302840111600160201b831117156100c957600080fd5b509092509050610128565b005b6100de610848565b604080516001600160a01b039092168252519081900360200190f35b6100d46004803603602081101561011057600080fd5b50356001600160a01b0316610857565b6100de610996565b60335460ff1661017f576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff1916905560008080808585608081101561019e57600080fd5b506065546040805163e6a4390560e01b81526001600160a01b0360208581013582166004840181905286358316602485018190528551909b50909950938601359750606090950135955060009493169263e6a4390592604480840193829003018186803b15801561020e57600080fd5b505afa158015610222573d6000803e3d6000fd5b505050506040513d602081101561023857600080fd5b5051604080516370a0823160e01b8152306004820152905191925084916001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561028557600080fd5b505afa158015610299573d6000803e3d6000fd5b505050506040513d60208110156102af57600080fd5b505110156102ee5760405162461bcd60e51b8152600401808060200182810382526054815260200180610ea26054913960600191505060405180910390fd5b6066546040805163095ea7b360e01b81526001600160a01b039283166004820152600019602482015290519183169163095ea7b3916044808201926020929091908290030181600087803b15801561034557600080fd5b505af1158015610359573d6000803e3d6000fd5b505050506040513d602081101561036f57600080fd5b5050606654610393906001600160a01b03868116911660001963ffffffff6109a516565b60665460408051635d5155ef60e11b81526001600160a01b038881166004830152878116602483015260448201879052600060648301819052608483018190523060a48401524260c48401528351919094169363baa2abde9360e480850194919392918390030190829087803b15801561040c57600080fd5b505af1158015610420573d6000803e3d6000fd5b505050506040513d604081101561043657600080fd5b50506040805160028082526060808301845292602083019080368337019050509050848160008151811061046657fe5b60200260200101906001600160a01b031690816001600160a01b031681525050858160018151811061049457fe5b6001600160a01b0392831660209182029290920101526066548116906338ed1739906104c1908816610afe565b60008430426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561053f578181015183820152602001610527565b505050509050019650505050505050600060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156105a557600080fd5b8101908080516040519392919084600160201b8211156105c457600080fd5b9083019060208201858111156105d957600080fd5b82518660208202830111600160201b821117156105f557600080fd5b82525081516020918201928201910280838360005b8381101561062257818101518382015260200161060a565b50505050905001604052505050506000610644876001600160a01b0316610afe565b9050838110156106855760405162461bcd60e51b8152600401808060200182810382526048815260200180610e5a6048913960600191505060405180910390fd5b610690873383610b7a565b604080516370a0823160e01b815230600482015290516001600160a01b0385169163a9059cbb91339184916370a0823191602480820192602092909190829003018186803b1580156106e157600080fd5b505afa1580156106f5573d6000803e3d6000fd5b505050506040513d602081101561070b57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561075c57600080fd5b505af1158015610770573d6000803e3d6000fd5b505050506040513d602081101561078657600080fd5b50506066546040805163095ea7b360e01b81526001600160a01b03928316600482015260006024820181905291519286169263095ea7b392604480840193602093929083900390910190829087803b1580156107e157600080fd5b505af11580156107f5573d6000803e3d6000fd5b505050506040513d602081101561080b57600080fd5b505060665461082e906001600160a01b038881169116600063ffffffff6109a516565b50506033805460ff19166001179055505050505050505050565b6065546001600160a01b031681565b600054610100900460ff16806108705750610870610ccd565b8061087e575060005460ff16155b6108b95760405162461bcd60e51b815260040180806020018281038252602e815260200180610e2c602e913960400191505060405180910390fd5b600054610100900460ff161580156108e4576000805460ff1961ff0019909116610100171660011790555b6108ec610cd3565b816001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561092557600080fd5b505afa158015610939573d6000803e3d6000fd5b505050506040513d602081101561094f57600080fd5b5051606580546001600160a01b03199081166001600160a01b0393841617909155606680549091169184169190911790558015610992576000805461ff00191690555b5050565b6066546001600160a01b031681565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310610a225780518252601f199092019160209182019101610a03565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610a84576040519150601f19603f3d011682016040523d82523d6000602084013e610a89565b606091505b5091509150818015610ab7575080511580610ab75750808060200190516020811015610ab457600080fd5b50515b610af7576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610b4857600080fd5b505afa158015610b5c573d6000803e3d6000fd5b505050506040513d6020811015610b7257600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610bf75780518252601f199092019160209182019101610bd8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610c59576040519150601f19603f3d011682016040523d82523d6000602084013e610c5e565b606091505b5091509150818015610c8c575080511580610c8c5750808060200190516020811015610c8957600080fd5b50515b610af7576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b303b1590565b600054610100900460ff1680610cec5750610cec610ccd565b80610cfa575060005460ff16155b610d355760405162461bcd60e51b815260040180806020018281038252602e815260200180610e2c602e913960400191505060405180910390fd5b600054610100900460ff16158015610d60576000805460ff1961ff0019909116610100171660011790555b610d68610d7d565b8015610d7a576000805461ff00191690555b50565b600054610100900460ff1680610d965750610d96610ccd565b80610da4575060005460ff16155b610ddf5760405162461bcd60e51b815260040180806020018281038252602e815260200180610e2c602e913960400191505060405180910390fd5b600054610100900460ff16158015610e0a576000805460ff1961ff0019909116610100171660011790555b6033805460ff191660011790558015610d7a576000805461ff00191690555056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656453747261746567795061727469616c436c6f73654c69717569646174653a3a657865637574653a3a20696e73756666696369656e742062617365546f6b656e20726563656976656453747261746567795061727469616c436c6f73654c69717569646174653a3a657865637574653a3a20696e73756666696369656e74204c5020616d6f756e742072656365766965642066726f6d20776f726b6572a2646970667358221220806daaa4024ae7fb5635411ffb656497a5f28aa9828d84aadff029187117c1f964736f6c63430006060033";
