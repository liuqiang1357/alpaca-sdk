/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockBeneficialVault } from "../MockBeneficialVault";

export class MockBeneficialVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockBeneficialVault> {
    return super.deploy(overrides || {}) as Promise<MockBeneficialVault>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockBeneficialVault {
    return super.attach(address) as MockBeneficialVault;
  }
  connect(signer: Signer): MockBeneficialVault__factory {
    return super.connect(signer) as MockBeneficialVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBeneficialVault {
    return new Contract(address, _abi, signerOrProvider) as MockBeneficialVault;
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
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "_token",
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
    name: "mockOwner",
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
        internalType: "address",
        name: "targetedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "requestFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setMockOwner",
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
    name: "token",
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
    inputs: [],
    name: "totalToken",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share",
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
  "0x608060405234801561001057600080fd5b506111ab806100206000396000f3fe6080604052600436106101055760003560e01c806306fdde031461010a578063095ea7b31461019457806318160ddd146101e157806323b872dd1461020857806324e87a871461024b5780632e1a7d4d1461027c578063313ce567146102a857806339509351146102d3578063494666b61461030c578063496ef4a314610345578063626be5671461037857806370a082311461038d578063715018a6146103c05780638da5cb5b146103d557806395d89b41146103ea578063a457c2d7146103ff578063a9059cbb14610438578063b6b55f2514610471578063c4d66de81461048e578063dd62ed3e146104c1578063f2fde38b146104fc578063fc0c546a1461052f575b600080fd5b34801561011657600080fd5b5061011f610544565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610159578181015183820152602001610141565b50505050905090810190601f1680156101865780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a057600080fd5b506101cd600480360360408110156101b757600080fd5b506001600160a01b0381351690602001356105da565b604080519115158252519081900360200190f35b3480156101ed57600080fd5b506101f66105f7565b60408051918252519081900360200190f35b34801561021457600080fd5b506101cd6004803603606081101561022b57600080fd5b506001600160a01b038135811691602081013590911690604001356105fd565b34801561025757600080fd5b5061026061068a565b604080516001600160a01b039092168252519081900360200190f35b34801561028857600080fd5b506102a66004803603602081101561029f57600080fd5b5035610699565b005b3480156102b457600080fd5b506102bd610700565b6040805160ff9092168252519081900360200190f35b3480156102df57600080fd5b506101cd600480360360408110156102f657600080fd5b506001600160a01b038135169060200135610709565b34801561031857600080fd5b506102a66004803603604081101561032f57600080fd5b506001600160a01b03813516906020013561075d565b34801561035157600080fd5b506102a66004803603602081101561036857600080fd5b50356001600160a01b031661077a565b34801561038457600080fd5b506101f661079c565b34801561039957600080fd5b506101f6600480360360208110156103b057600080fd5b50356001600160a01b03166107a1565b3480156103cc57600080fd5b506102a66107bc565b3480156103e157600080fd5b5061026061084c565b3480156103f657600080fd5b5061011f61085b565b34801561040b57600080fd5b506101cd6004803603604081101561042257600080fd5b506001600160a01b0381351690602001356108bc565b34801561044457600080fd5b506101cd6004803603604081101561045b57600080fd5b506001600160a01b03813516906020013561092a565b6102a66004803603602081101561048757600080fd5b503561093e565b34801561049a57600080fd5b506102a6600480360360208110156104b157600080fd5b50356001600160a01b0316610941565b3480156104cd57600080fd5b506101f6600480360360408110156104e457600080fd5b506001600160a01b03813581169160200135166109fe565b34801561050857600080fd5b506102a66004803603602081101561051f57600080fd5b50356001600160a01b0316610a29565b34801561053b57600080fd5b50610260610b10565b60688054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d05780601f106105a5576101008083540402835291602001916105d0565b820191906000526020600020905b8154815290600101906020018083116105b357829003601f168201915b5050505050905090565b60006105ee6105e7610b1f565b8484610b23565b50600192915050565b60675490565b600061060a848484610c0f565b61068084610616610b1f565b61067b85604051806060016040528060288152602001611072602891396001600160a01b038a16600090815260666020526040812090610654610b1f565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610d7816565b610b23565b5060019392505050565b60fb546001600160a01b031681565b60975460ff166106f0576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b506097805460ff19166001179055565b606a5460ff1690565b60006105ee610716610b1f565b8461067b8560666000610727610b1f565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610e0f16565b60fb546107769083906001600160a01b03163384610e6e565b5050565b60fb80546001600160a01b0319166001600160a01b0392909216919091179055565b600090565b6001600160a01b031660009081526065602052604090205490565b6107c4610b1f565b60c9546001600160a01b03908116911614610814576040805162461bcd60e51b8152602060048201819052602482015260008051602061109a833981519152604482015290519081900360640190fd5b60c9546040516000916001600160a01b0316906000805160206110ba833981519152908390a360c980546001600160a01b0319169055565b60c9546001600160a01b031690565b60698054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105d05780601f106105a5576101008083540402835291602001916105d0565b60006105ee6108c9610b1f565b8461067b8560405180606001604052806025815260200161115160259139606660006108f3610b1f565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610d7816565b60006105ee610937610b1f565b8484610c0f565b50565b600054610100900460ff168061095a575061095a610fd5565b80610968575060005460ff16155b6109a35760405162461bcd60e51b815260040180806020018281038252602e8152602001806110da602e913960400191505060405180910390fd5b600054610100900460ff161580156109ce576000805460ff1961ff0019909116610100171660011790555b60fc80546001600160a01b0319166001600160a01b0384161790558015610776576000805461ff00191690555050565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b610a31610b1f565b60c9546001600160a01b03908116911614610a81576040805162461bcd60e51b8152602060048201819052602482015260008051602061109a833981519152604482015290519081900360640190fd5b6001600160a01b038116610ac65760405162461bcd60e51b81526004018080602001828103825260268152602001806110046026913960400191505060405180910390fd5b60c9546040516001600160a01b038084169216906000805160206110ba83398151915290600090a360c980546001600160a01b0319166001600160a01b0392909216919091179055565b60fc546001600160a01b031681565b3390565b6001600160a01b038316610b685760405162461bcd60e51b815260040180806020018281038252602481526020018061112d6024913960400191505060405180910390fd5b6001600160a01b038216610bad5760405162461bcd60e51b815260040180806020018281038252602281526020018061102a6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260666020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610c545760405162461bcd60e51b81526004018080602001828103825260258152602001806111086025913960400191505060405180910390fd5b6001600160a01b038216610c995760405162461bcd60e51b8152600401808060200182810382526023815260200180610fe16023913960400191505060405180910390fd5b610ca4838383610fdb565b610ce78160405180606001604052806026815260200161104c602691396001600160a01b038616600090815260656020526040902054919063ffffffff610d7816565b6001600160a01b038085166000908152606560205260408082209390935590841681522054610d1c908263ffffffff610e0f16565b6001600160a01b0380841660008181526065602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610e075760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dcc578181015183820152602001610db4565b50505050905090810190601f168015610df95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e67576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b60208310610ef35780518252601f199092019160209182019101610ed4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f55576040519150601f19603f3d011682016040523d82523d6000602084013e610f5a565b606091505b5091509150818015610f88575080511580610f885750808060200190516020811015610f8557600080fd5b50515b610fcd576040805162461bcd60e51b815260206004820152601160248201527021736166655472616e7366657246726f6d60781b604482015290519081900360640190fd5b505050505050565b303b1590565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122093ca8457929fa973a59d12e6b92281fe0a47326ff151d9763ad8dfbdf5d9945264736f6c63430006060033";