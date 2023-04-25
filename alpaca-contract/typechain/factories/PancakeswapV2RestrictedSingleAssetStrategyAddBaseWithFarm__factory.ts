/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm } from "../PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm";

export class PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides
  ): Promise<PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm> {
    return super.deploy(
      overrides || {}
    ) as Promise<PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(
    address: string
  ): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm {
    return super.attach(
      address
    ) as PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm;
  }
  connect(
    signer: Signer
  ): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm__factory {
    return super.connect(
      signer
    ) as PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "okWorkers",
    outputs: [
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
    name: "owner",
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
    name: "renounceOwnership",
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
  {
    inputs: [
      {
        internalType: "address[]",
        name: "workers",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "isOk",
        type: "bool",
      },
    ],
    name: "setWorkersOk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wNative",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506115a3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c80632d68efc91461009e578063485cc955146100c2578063715018a6146100f25780637c5bdf49146100fa5780638da5cb5b1461016a578063b61d27f614610172578063c45a0155146101f5578063f2fde38b146101fd578063f887ea4014610223578063fa8264781461022b578063fbfa77cf14610265575b600080fd5b6100a661026d565b604080516001600160a01b039092168252519081900360200190f35b6100f0600480360360408110156100d857600080fd5b506001600160a01b038135811691602001351661027c565b005b6100f0610454565b6100f06004803603604081101561011057600080fd5b810190602081018135600160201b81111561012a57600080fd5b82018360208201111561013c57600080fd5b803590602001918460208302840111600160201b8311171561015d57600080fd5b91935091503515156104e4565b6100a6610597565b6100f06004803603606081101561018857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156101b757600080fd5b8201836020820111156101c957600080fd5b803590602001918460018302840111600160201b831117156101ea57600080fd5b5090925090506105a6565b6100a6610b56565b6100f06004803603602081101561021357600080fd5b50356001600160a01b0316610b65565b6100a6610c4c565b6102516004803603602081101561024157600080fd5b50356001600160a01b0316610c5b565b604080519115158252519081900360200190f35b6100a6610c70565b60cb546001600160a01b031681565b600054610100900460ff16806102955750610295610c7f565b806102a3575060005460ff16155b6102de5760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff16158015610309576000805460ff1961ff0019909116610100171660011790555b610311610c85565b610319610d37565b826001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561035257600080fd5b505afa158015610366573d6000803e3d6000fd5b505050506040513d602081101561037c57600080fd5b505160c980546001600160a01b039283166001600160a01b03199182161790915560ca80549286169290911682179055604080516315ab88c960e31b8152905163ad5c464891600480820192602092909190829003018186803b1580156103e257600080fd5b505afa1580156103f6573d6000803e3d6000fd5b505050506040513d602081101561040c57600080fd5b505160cb80546001600160a01b03199081166001600160a01b039384161790915560cd8054909116918416919091179055801561044f576000805461ff00191690555b505050565b61045c610dcc565b6065546001600160a01b039081169116146104ac576040805162461bcd60e51b815260206004820181905260248201526000805160206114a2833981519152604482015290519081900360640190fd5b6065546040516000916001600160a01b0316906000805160206114c2833981519152908390a3606580546001600160a01b0319169055565b6104ec610dcc565b6065546001600160a01b0390811691161461053c576040805162461bcd60e51b815260206004820181905260248201526000805160206114a2833981519152604482015290519081900360640190fd5b60005b82811015610591578160cc600086868581811061055857fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff191691151591909117905560010161053f565b50505050565b6065546001600160a01b031690565b33600090815260cc602052604090205460ff166105f45760405162461bcd60e51b815260040180806020018281038252605e815260200180611510605e913960600191505060405180910390fd5b60975460ff1661064b576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6097805460ff191690556000808383604081101561066857600080fd5b506040805163c55dae6360e01b815290518235945060209283013593503392600092849263c55dae6392600480840193919291829003018186803b1580156106af57600080fd5b505afa1580156106c3573d6000803e3d6000fd5b505050506040513d60208110156106d957600080fd5b50516040805163ad24dce760e01b815290519192506000916001600160a01b0385169163ad24dce7916004808301926020929190829003018186803b15801561072157600080fd5b505afa158015610735573d6000803e3d6000fd5b505050506040513d602081101561074b57600080fd5b505160ca54909150610772906001600160a01b03848116911660001963ffffffff610dd016565b60cd54604080516324a3335b60e11b81526001600160a01b038481166004830152602482018990529151919092169163494666b691604480830192600092919082900301818387803b1580156107c757600080fd5b505af11580156107db573d6000803e3d6000fd5b5050505060006107f3836001600160a01b0316610f29565b90508015610a8f5760ca60009054906101000a90046001600160a01b03166001600160a01b03166338ed1739826000876001600160a01b031663555b37be6040518163ffffffff1660e01b815260040160006040518083038186803b15801561085b57600080fd5b505afa15801561086f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561089857600080fd5b8101908080516040519392919084600160201b8211156108b757600080fd5b9083019060208201858111156108cc57600080fd5b82518660208202830111600160201b821117156108e857600080fd5b82525081516020918201928201910280838360005b838110156109155781810151838201526020016108fd565b5050505090500160405250505030426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561099d578181015183820152602001610985565b505050509050019650505050505050600060405180830381600087803b1580156109c657600080fd5b505af11580156109da573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610a0357600080fd5b8101908080516040519392919084600160201b821115610a2257600080fd5b908301906020820185811115610a3757600080fd5b82518660208202830111600160201b82111715610a5357600080fd5b82525081516020918201928201910280838360005b83811015610a80578181015183820152602001610a68565b50505050905001604052505050505b84610ab287610aa6856001600160a01b0316610f29565b9063ffffffff610fa516565b1015610aef5760405162461bcd60e51b815260040180806020018281038252606e815260200180611434606e913960800191505060405180910390fd5b610b1c33610b05846001600160a01b0316610f29565b6001600160a01b038516919063ffffffff610fee16565b60ca54610b3d906001600160a01b038581169116600063ffffffff610dd016565b50506097805460ff191660011790555050505050505050565b60c9546001600160a01b031681565b610b6d610dcc565b6065546001600160a01b03908116911614610bbd576040805162461bcd60e51b815260206004820181905260248201526000805160206114a2833981519152604482015290519081900360640190fd5b6001600160a01b038116610c025760405162461bcd60e51b815260040180806020018281038252602681526020018061140e6026913960400191505060405180910390fd5b6065546040516001600160a01b038084169216906000805160206114c283398151915290600090a3606580546001600160a01b0319166001600160a01b0392909216919091179055565b60ca546001600160a01b031681565b60cc6020526000908152604090205460ff1681565b60cd546001600160a01b031681565b303b1590565b600054610100900460ff1680610c9e5750610c9e610c7f565b80610cac575060005460ff16155b610ce75760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff16158015610d12576000805460ff1961ff0019909116610100171660011790555b610d1a611141565b610d226111e1565b8015610d34576000805461ff00191690555b50565b600054610100900460ff1680610d505750610d50610c7f565b80610d5e575060005460ff16155b610d995760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff16158015610dc4576000805460ff1961ff0019909116610100171660011790555b610d226112c8565b3390565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310610e4d5780518252601f199092019160209182019101610e2e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610eaf576040519150601f19603f3d011682016040523d82523d6000602084013e610eb4565b606091505b5091509150818015610ee2575080511580610ee25750808060200190516020811015610edf57600080fd5b50515b610f22576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610f7357600080fd5b505afa158015610f87573d6000803e3d6000fd5b505050506040513d6020811015610f9d57600080fd5b505192915050565b6000610fe783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611376565b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b6020831061106b5780518252601f19909201916020918201910161104c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146110cd576040519150601f19603f3d011682016040523d82523d6000602084013e6110d2565b606091505b509150915081801561110057508051158061110057508080602001905160208110156110fd57600080fd5b50515b610f22576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b600054610100900460ff168061115a575061115a610c7f565b80611168575060005460ff16155b6111a35760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff16158015610d22576000805460ff1961ff0019909116610100171660011790558015610d34576000805461ff001916905550565b600054610100900460ff16806111fa57506111fa610c7f565b80611208575060005460ff16155b6112435760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff1615801561126e576000805460ff1961ff0019909116610100171660011790555b6000611278610dcc565b606580546001600160a01b0319166001600160a01b038316908117909155604051919250906000906000805160206114c2833981519152908290a3508015610d34576000805461ff001916905550565b600054610100900460ff16806112e157506112e1610c7f565b806112ef575060005460ff16155b61132a5760405162461bcd60e51b815260040180806020018281038252602e8152602001806114e2602e913960400191505060405180910390fd5b600054610100900460ff16158015611355576000805460ff1961ff0019909116610100171660011790555b6097805460ff191660011790558015610d34576000805461ff001916905550565b600081848411156114055760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113ca5781810151838201526020016113b2565b50505050905090810190601f1680156113f75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737350616e63616b657377617056325265737472696374656453696e676c654173736574537472617465677941646442617365576974684661726d3a3a657865637574653a3a20696e73756666696369656e74206661726d696e67546f6b656e20616d6f756e742072656365697665644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656450616e63616b657377617056325265737472696374656453696e676c654173736574537472617465677941646442617365576974684661726d3a3a6f6e6c7957686974656c6973746564576f726b6572733a3a2062616420776f726b6572a2646970667358221220bfb1113a7645d6b79348c79aeb3183f01acf1ee05e464678c6348b282b4c858364736f6c63430006060033";
