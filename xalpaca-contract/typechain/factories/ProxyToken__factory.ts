/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ProxyToken } from "../ProxyToken";

export class ProxyToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyToken> {
    return super.deploy(overrides || {}) as Promise<ProxyToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyToken {
    return super.attach(address) as ProxyToken;
  }
  connect(signer: Signer): ProxyToken__factory {
    return super.connect(signer) as ProxyToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyToken {
    return new Contract(address, _abi, signerOrProvider) as ProxyToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_timelock",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "okHolders",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_okHolders",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_isOk",
        type: "bool",
      },
    ],
    name: "setOkHolders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506117c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063a457c2d711610071578063a457c2d714610250578063a9059cbb14610263578063dc9a567b14610276578063dd62ed3e14610299578063f2fde38b146102d257600080fd5b8063715018a6146101ff57806387641575146102075780638da5cb5b1461021a57806395d89b41146102355780639dc29fac1461023d57600080fd5b806323b872dd116100f457806323b872dd1461018e578063313ce567146101a157806339509351146101b057806340c10f19146101c357806370a08231146101d657600080fd5b806306fdde0314610126578063077f224a14610144578063095ea7b31461015957806318160ddd1461017c575b600080fd5b61012e6102e5565b60405161013b91906115c3565b60405180910390f35b610157610152366004611542565b610377565b005b61016c61016736600461143a565b610487565b604051901515815260200161013b565b6035545b60405190815260200161013b565b61016c61019c3660046113fe565b61049d565b6040516012815260200161013b565b61016c6101be36600461143a565b61060c565b6101576101d136600461143a565b610643565b6101806101e43660046113a9565b6001600160a01b031660009081526033602052604090205490565b6101576106ef565b610157610215366004611464565b610725565b6065546040516001600160a01b03909116815260200161013b565b61012e6107bb565b61015761024b36600461143a565b6107ca565b61016c61025e36600461143a565b610872565b61016c61027136600461143a565b610901565b61016c6102843660046113a9565b60986020526000908152604090205460ff1681565b6101806102a73660046113cb565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101576102e03660046113a9565b610a09565b6060603680546102f4906116ca565b80601f0160208091040260200160405190810160405280929190818152602001828054610320906116ca565b801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050905090565b600054610100900460ff1680610390575060005460ff16155b6103b55760405162461bcd60e51b81526004016103ac90611618565b60405180910390fd5b600054610100900460ff161580156103d7576000805461ffff19166101011790555b6103df610aa4565b61045286868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250610b1f92505050565b609780546001600160a01b0319166001600160a01b038416179055801561047f576000805461ff00191690555b505050505050565b6000610494338484610b9e565b50600192915050565b6001600160a01b03831660009081526098602052604081205460ff166105225760405162461bcd60e51b815260206004820152603460248201527f70726f7879546f6b656e3a3a7472616e7366657246726f6d3a3a20756e617070604482015273726f76656420686f6c64657220696e2066726f6d60601b60648201526084016103ac565b6001600160a01b03831660009081526098602052604090205460ff166105a55760405162461bcd60e51b815260206004820152603260248201527f70726f7879546f6b656e3a3a7472616e7366657246726f6d3a3a20756e617070604482015271726f76656420686f6c64657220696e20746f60701b60648201526084016103ac565b6105b0848484610cc2565b61060284336105fd85604051806060016040528060288152602001611763602891396001600160a01b038a1660009081526034602090815260408083203384529091529020549190610e91565b610b9e565b5060019392505050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916104949185906105fd90869061169b565b6065546001600160a01b0316331461066d5760405162461bcd60e51b81526004016103ac90611666565b6001600160a01b03821660009081526098602052604090205460ff166106e15760405162461bcd60e51b8152602060048201526024808201527f70726f7879546f6b656e3a3a6d696e743a3a20756e617070726f76656420686f604482015263363232b960e11b60648201526084016103ac565b6106eb8282610ebd565b5050565b6065546001600160a01b031633146107195760405162461bcd60e51b81526004016103ac90611666565b6107236000610f9c565b565b6065546001600160a01b0316331461074f5760405162461bcd60e51b81526004016103ac90611666565b60005b82518110156107b657816098600085848151811061077257610772611736565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806107ae81611705565b915050610752565b505050565b6060603780546102f4906116ca565b6065546001600160a01b031633146107f45760405162461bcd60e51b81526004016103ac90611666565b6001600160a01b03821660009081526098602052604090205460ff166108685760405162461bcd60e51b8152602060048201526024808201527f70726f7879546f6b656e3a3a6275726e3a3a20756e617070726f76656420686f604482015263363232b960e11b60648201526084016103ac565b6106eb8282610fee565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156108f45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103ac565b6106023385858403610b9e565b3360009081526098602052604081205460ff1661097f5760405162461bcd60e51b815260206004820152603660248201527f70726f7879546f6b656e3a3a7472616e736665723a3a20756e617070726f766560448201527532103437b63232b91037b71036b9b39739b2b73232b960511b60648201526084016103ac565b6001600160a01b03831660009081526098602052604090205460ff166109fe5760405162461bcd60e51b815260206004820152602e60248201527f70726f7879546f6b656e3a3a7472616e736665723a3a20756e617070726f766560448201526d6420686f6c646572206f6e20746f60901b60648201526084016103ac565b610494338484610cc2565b6065546001600160a01b03163314610a335760405162461bcd60e51b81526004016103ac90611666565b6001600160a01b038116610a985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103ac565b610aa181610f9c565b50565b600054610100900460ff1680610abd575060005460ff16155b610ad95760405162461bcd60e51b81526004016103ac90611618565b600054610100900460ff16158015610afb576000805461ffff19166101011790555b610b0361113c565b610b0b6111a6565b8015610aa1576000805461ff001916905550565b600054610100900460ff1680610b38575060005460ff16155b610b545760405162461bcd60e51b81526004016103ac90611618565b600054610100900460ff16158015610b76576000805461ffff19166101011790555b610b7e61113c565b610b888383611206565b80156107b6576000805461ff0019169055505050565b6001600160a01b038316610c005760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103ac565b6001600160a01b038216610c615760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103ac565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610d265760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103ac565b6001600160a01b038216610d885760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103ac565b6001600160a01b03831660009081526033602052604090205481811015610e005760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103ac565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610e3790849061169b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e8391815260200190565b60405180910390a350505050565b60008184841115610eb55760405162461bcd60e51b81526004016103ac91906115c3565b505050900390565b6001600160a01b038216610f135760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103ac565b8060356000828254610f25919061169b565b90915550506001600160a01b03821660009081526033602052604081208054839290610f5290849061169b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03821661104e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103ac565b6001600160a01b038216600090815260336020526040902054818110156110c25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103ac565b6001600160a01b03831660009081526033602052604081208383039055603580548492906110f19084906116b3565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600054610100900460ff1680611155575060005460ff16155b6111715760405162461bcd60e51b81526004016103ac90611618565b600054610100900460ff16158015610b0b576000805461ffff19166101011790558015610aa1576000805461ff001916905550565b600054610100900460ff16806111bf575060005460ff16155b6111db5760405162461bcd60e51b81526004016103ac90611618565b600054610100900460ff161580156111fd576000805461ffff19166101011790555b610b0b33610f9c565b600054610100900460ff168061121f575060005460ff16155b61123b5760405162461bcd60e51b81526004016103ac90611618565b600054610100900460ff1615801561125d576000805461ffff19166101011790555b825161127090603690602086019061129b565b50815161128490603790602085019061129b565b5080156107b6576000805461ff0019169055505050565b8280546112a7906116ca565b90600052602060002090601f0160209004810192826112c9576000855561130f565b82601f106112e257805160ff191683800117855561130f565b8280016001018555821561130f579182015b8281111561130f5782518255916020019190600101906112f4565b5061131b92915061131f565b5090565b5b8082111561131b5760008155600101611320565b80356001600160a01b038116811461134b57600080fd5b919050565b8035801515811461134b57600080fd5b60008083601f84011261137257600080fd5b50813567ffffffffffffffff81111561138a57600080fd5b6020830191508360208285010111156113a257600080fd5b9250929050565b6000602082840312156113bb57600080fd5b6113c482611334565b9392505050565b600080604083850312156113de57600080fd5b6113e783611334565b91506113f560208401611334565b90509250929050565b60008060006060848603121561141357600080fd5b61141c84611334565b925061142a60208501611334565b9150604084013590509250925092565b6000806040838503121561144d57600080fd5b61145683611334565b946020939093013593505050565b6000806040838503121561147757600080fd5b823567ffffffffffffffff8082111561148f57600080fd5b818501915085601f8301126114a357600080fd5b81356020828211156114b7576114b761174c565b8160051b604051601f19603f830116810181811086821117156114dc576114dc61174c565b604052838152828101945085830182870184018b10156114fb57600080fd5b600096505b848710156115255761151181611334565b865260019690960195948301948301611500565b5096506115359050878201611350565b9450505050509250929050565b60008060008060006060868803121561155a57600080fd5b853567ffffffffffffffff8082111561157257600080fd5b61157e89838a01611360565b9097509550602088013591508082111561159757600080fd5b506115a488828901611360565b90945092506115b7905060408701611334565b90509295509295909350565b600060208083528351808285015260005b818110156115f0578581018301518582016040015282016115d4565b81811115611602576000604083870101525b50601f01601f1916929092016040019392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156116ae576116ae611720565b500190565b6000828210156116c5576116c5611720565b500390565b600181811c908216806116de57607f821691505b602082108114156116ff57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561171957611719611720565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe42455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a264697066735822122011e76b611b02267e65c63d8ce6059780e9b8c1a1b1765cc553c8236718c17cf064736f6c63430008070033";