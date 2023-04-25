/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimplePriceFeed,
  SimplePriceFeedInterface,
} from "../SimplePriceFeed";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_lastUpdate",
        type: "uint256",
      },
    ],
    name: "LogSetPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_second",
        type: "uint256",
      },
    ],
    name: "LogSetPriceLife",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
  {
    inputs: [],
    name: "accessControlConfig",
    outputs: [
      {
        internalType: "contract IAccessControlConfig",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "_accessControlConfig",
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
    name: "lastUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceLife",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_second",
        type: "uint256",
      },
    ],
    name: "setPriceLife",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611521806100206000396000f3fe608060405234801561001057600080fd5b50600436106100fc5760003560e01c8063140d272014610101578063248a9ca3146101225780632f2ff15d1461015157806336568abe1461017f5780633f4ba83a146101ab5780635af639c3146101b35780635c975abb146101bb5780637e91400f146101d75780638456cb59146101df5780639010d07c146101e757806391b7f5ed1461022657806391d1485414610243578063a035b1fe1461026f578063a217fddf14610277578063c04637111461027f578063c4d66de814610287578063c8cc243f146102ad578063ca15c873146102b5578063d547741f146102d2578063ef36ee47146102fe575b600080fd5b61010961031b565b6040805192835290151560208301528051918290030190f35b61013f6004803603602081101561013857600080fd5b5035610334565b60408051918252519081900360200190f35b61017d6004803603604081101561016757600080fd5b50803590602001356001600160a01b0316610349565b005b61017d6004803603604081101561019557600080fd5b50803590602001356001600160a01b03166103b5565b61017d610416565b61013f610642565b6101c3610648565b604080519115158252519081900360200190f35b61013f610651565b61017d610657565b61020a600480360360408110156101fd57600080fd5b5080359060200135610881565b604080516001600160a01b039092168252519081900360200190f35b61017d6004803603602081101561023c57600080fd5b50356108a2565b6101c36004803603604081101561025957600080fd5b50803590602001356001600160a01b0316610a0c565b61013f610a24565b61013f610a2a565b61013f610a2f565b61017d6004803603602081101561029d57600080fd5b50356001600160a01b0316610a35565b61020a610b09565b61013f600480360360208110156102cb57600080fd5b5035610b18565b61017d600480360360408110156102e857600080fd5b50803590602001356001600160a01b0316610b2f565b61017d6004803603602081101561031457600080fd5b5035610b88565b60008060985460001b61032c610d52565b915091509091565b60009081526065602052604090206002015490565b60008281526065602052604090206002015461036c90610367610d72565b610a0c565b6103a75760405162461bcd60e51b815260040180806020018281038252602f815260200180611430602f913960400191505060405180910390fd5b6103b18282610d76565b5050565b6103bd610d72565b6001600160a01b0316816001600160a01b03161461040c5760405162461bcd60e51b815260040180806020018281038252602f8152602001806114bd602f913960400191505060405180910390fd5b6103b18282610ddf565b6097546040805163e58378bb60e01b815290516001600160a01b03909216916391d1485491839163e58378bb91600480820192602092909190829003018186803b15801561046357600080fd5b505afa158015610477573d6000803e3d6000fd5b505050506040513d602081101561048d57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b1580156104d257600080fd5b505afa1580156104e6573d6000803e3d6000fd5b505050506040513d60208110156104fc57600080fd5b5051806105ed575060975460408051635a9b40c560e11b815290516001600160a01b03909216916391d1485491839163b536818a91600480820192602092909190829003018186803b15801561055157600080fd5b505afa158015610565573d6000803e3d6000fd5b505050506040513d602081101561057b57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b1580156105c057600080fd5b505afa1580156105d4573d6000803e3d6000fd5b505050506040513d60208110156105ea57600080fd5b50515b610638576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b610640610e48565b565b609a5481565b60335460ff1690565b60985490565b6097546040805163e58378bb60e01b815290516001600160a01b03909216916391d1485491839163e58378bb91600480820192602092909190829003018186803b1580156106a457600080fd5b505afa1580156106b8573d6000803e3d6000fd5b505050506040513d60208110156106ce57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561071357600080fd5b505afa158015610727573d6000803e3d6000fd5b505050506040513d602081101561073d57600080fd5b50518061082e575060975460408051635a9b40c560e11b815290516001600160a01b03909216916391d1485491839163b536818a91600480820192602092909190829003018186803b15801561079257600080fd5b505afa1580156107a6573d6000803e3d6000fd5b505050506040513d60208110156107bc57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561080157600080fd5b505afa158015610815573d6000803e3d6000fd5b505050506040513d602081101561082b57600080fd5b50515b610879576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b610640610ee8565b60008281526065602052604081206108999083610f6b565b90505b92915050565b6097546040805163e58378bb60e01b815290516001600160a01b03909216916391d1485491839163e58378bb91600480820192602092909190829003018186803b1580156108ef57600080fd5b505afa158015610903573d6000803e3d6000fd5b505050506040513d602081101561091957600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561095e57600080fd5b505afa158015610972573d6000803e3d6000fd5b505050506040513d602081101561098857600080fd5b50516109c8576040805162461bcd60e51b815260206004820152600a602482015269216f776e6572526f6c6560b01b604482015290519081900360640190fd5b609881905542609981905560408051838152905133917f0c1bf5d6a7e7580edc1650a8e69b1d64c5fc49d95f46e11527f49bce8caaed2f919081900360200190a350565b60008281526065602052604081206108999083610f77565b60985481565b600081565b60995481565b600054610100900460ff1680610a4e5750610a4e610f8c565b80610a5c575060005460ff16155b610a975760405162461bcd60e51b815260040180806020018281038252602e81526020018061148f602e913960400191505060405180910390fd5b600054610100900460ff16158015610ac2576000805460ff1961ff0019909116610100171660011790555b610aca610f97565b610ad2611049565b62015180609a55609780546001600160a01b0319166001600160a01b03841617905580156103b1576000805461ff00191690555050565b6097546001600160a01b031681565b600081815260656020526040812061089c906110e6565b600082815260656020526040902060020154610b4d90610367610d72565b61040c5760405162461bcd60e51b815260040180806020018281038252603081526020018061145f6030913960400191505060405180910390fd5b6097546040805163e58378bb60e01b815290516001600160a01b03909216916391d1485491839163e58378bb91600480820192602092909190829003018186803b158015610bd557600080fd5b505afa158015610be9573d6000803e3d6000fd5b505050506040513d6020811015610bff57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610c4457600080fd5b505afa158015610c58573d6000803e3d6000fd5b505050506040513d6020811015610c6e57600080fd5b5051610cae576040805162461bcd60e51b815260206004820152600a602482015269216f776e6572526f6c6560b01b604482015290519081900360640190fd5b610e108110158015610cc35750620151808111155b610d14576040805162461bcd60e51b815260206004820152601e60248201527f53696d706c655072696365466565642f6261642d70726963652d6c6966650000604482015290519081900360640190fd5b609a81905560408051828152905133917f472c5e14bb804bd7b201c5c27f2ea820980b37ef7611806e7b3f6db6758f32e0919081900360200190a250565b6000610d5c6110f1565b8015610d6d5750610d6b610648565b155b905090565b3390565b6000828152606560205260409020610d8e9082611102565b156103b157610d9b610d72565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152606560205260409020610df79082611117565b156103b157610e04610d72565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b610e50610648565b610e98576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610ecb610d72565b604080516001600160a01b039092168252519081900360200190a1565b610ef0610648565b15610f35576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ecb610d72565b6000610899838361112c565b6000610899836001600160a01b038416611190565b6000610d6b306111a8565b600054610100900460ff1680610fb05750610fb0610f8c565b80610fbe575060005460ff16155b610ff95760405162461bcd60e51b815260040180806020018281038252602e81526020018061148f602e913960400191505060405180910390fd5b600054610100900460ff16158015611024576000805460ff1961ff0019909116610100171660011790555b61102c6111ae565b61103461124e565b8015611046576000805461ff00191690555b50565b600054610100900460ff16806110625750611062610f8c565b80611070575060005460ff16155b6110ab5760405162461bcd60e51b815260040180806020018281038252602e81526020018061148f602e913960400191505060405180910390fd5b600054610100900460ff161580156110d6576000805460ff1961ff0019909116610100171660011790555b6110de6111ae565b6110346111ae565b600061089c826112f9565b6000609a5442036099541015905090565b6000610899836001600160a01b0384166112fd565b6000610899836001600160a01b038416611347565b8154600090821061116e5760405162461bcd60e51b815260040180806020018281038252602281526020018061140e6022913960400191505060405180910390fd5b82600001828154811061117d57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b3b151590565b600054610100900460ff16806111c757506111c7610f8c565b806111d5575060005460ff16155b6112105760405162461bcd60e51b815260040180806020018281038252602e81526020018061148f602e913960400191505060405180910390fd5b600054610100900460ff16158015611034576000805460ff1961ff0019909116610100171660011790558015611046576000805461ff001916905550565b600054610100900460ff16806112675750611267610f8c565b80611275575060005460ff16155b6112b05760405162461bcd60e51b815260040180806020018281038252602e81526020018061148f602e913960400191505060405180910390fd5b600054610100900460ff161580156112db576000805460ff1961ff0019909116610100171660011790555b6033805460ff191690558015611046576000805461ff001916905550565b5490565b60006113098383611190565b61133f5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561089c565b50600061089c565b60008181526001830160205260408120548015611403578354600019808301919081019060009087908390811061137a57fe5b906000526020600020015490508087600001848154811061139757fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806113c757fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061089c565b600091505061089c56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220c63f8f10df45f9b233492ee8fc074c120c1c065e8cdf91a605f7488aa3ad01ee64736f6c634300060c0033";

type SimplePriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimplePriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimplePriceFeed__factory extends ContractFactory {
  constructor(...args: SimplePriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimplePriceFeed> {
    return super.deploy(overrides || {}) as Promise<SimplePriceFeed>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimplePriceFeed {
    return super.attach(address) as SimplePriceFeed;
  }
  connect(signer: Signer): SimplePriceFeed__factory {
    return super.connect(signer) as SimplePriceFeed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimplePriceFeedInterface {
    return new utils.Interface(_abi) as SimplePriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimplePriceFeed {
    return new Contract(address, _abi, signerOrProvider) as SimplePriceFeed;
  }
}
