/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { XALPACA } from "../XALPACA";

export class XALPACA__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<XALPACA> {
    return super.deploy(overrides || {}) as Promise<XALPACA>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XALPACA {
    return super.attach(address) as XALPACA;
  }
  connect(signer: Signer): XALPACA__factory {
    return super.connect(signer) as XALPACA__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XALPACA {
    return new Contract(address, _abi, signerOrProvider) as XALPACA;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "locker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBreaker",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "breaker",
        type: "uint256",
      },
    ],
    name: "LogSetBreaker",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "LogSupply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "locker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
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
    inputs: [],
    name: "ACTION_CREATE_LOCK",
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
    name: "ACTION_DEPOSIT_FOR",
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
    name: "ACTION_INCREASE_LOCK_AMOUNT",
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
    name: "ACTION_INCREASE_UNLOCK_TIME",
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
    name: "MAX_LOCK",
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
    name: "MULTIPLIER",
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
    name: "WEEK",
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
        name: "_user",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
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
    name: "breaker",
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
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    name: "createLock",
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
        name: "_for",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseLockAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newUnlockTime",
        type: "uint256",
      },
    ],
    name: "increaseUnlockTime",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "locks",
    outputs: [
      {
        internalType: "int128",
        name: "amount",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pointHistory",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
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
        internalType: "uint256",
        name: "_breaker",
        type: "uint256",
      },
    ],
    name: "setBreaker",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "slopeChanges",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supply",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userPointEpoch",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userPointHistory",
    outputs: [
      {
        internalType: "int128",
        name: "bias",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "slope",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612e68806100206000396000f3fe608060405234801561001057600080fd5b50600436106102055760003560e01c806370a082311161011a578063981b24d0116100ad578063f2c7a81b1161007c578063f2c7a81b1461044e578063f2fde38b14610456578063f4359ce514610469578063f52a36f714610473578063fc0c546a146104a957600080fd5b8063981b24d01461040d578063b52c05fe14610420578063c2c4c5c114610433578063c4d66de81461043b57600080fd5b80638ad4c447116100e95780638ad4c447146103c45780638da5cb5b146103d7578063900cf0cf146103fc57806395d89b411461040557600080fd5b806370a0823114610376578063715018a6146103895780637c616fe61461039157806381fc83bb146103a457600080fd5b8063313ce5671161019d578063403f44471161016c578063403f4447146102f55780634ee2cd7e146103085780635de9a1371461031b57806365a5d5f01461036357806367e7a7cb1461036e57600080fd5b8063313ce5671461028057806334d901a41461029f5780633ccfd60b146102da5780633d5c78bd146102e257600080fd5b806306fdde03116101d957806306fdde03146102455780630f41e0d21461025a57806318160ddd146102635780632f4f21e21461026b57600080fd5b8062b79fd41461020a5780630264163214610225578063047fc9aa1461022d578063059f8b1614610236575b600080fd5b610212600081565b6040519081526020015b60405180910390f35b610212600381565b61021260985481565b610212670de0b6b3a764000081565b61024d6104bc565b60405161021c9190612a29565b610212609f5481565b61021261054a565b61027e610279366004612963565b6105c2565b005b60a25461028d9060ff1681565b60405160ff909116815260200161021c565b6102b26102ad366004612963565b6106cd565b60408051600f95860b81529390940b602084015292820152606081019190915260800161021c565b61027e61071d565b61027e6102f03660046129af565b6108ea565b61027e6103033660046129af565b6109a0565b610212610316366004612963565b610ac2565b610349610329366004612941565b60996020526000908152604090208054600190910154600f9190910b9082565b60408051600f9390930b835260208301919091520161021c565b6102126301e1338081565b610212600181565b610212610384366004612941565b610da3565b61027e610ea3565b61027e61039f3660046129af565b610ed9565b6102126103b2366004612941565b609d6020526000908152604090205481565b6102b26103d23660046129af565b611053565b6065546001600160a01b03165b6040516001600160a01b03909116815260200161021c565b610212609a5481565b61024d611097565b61021261041b3660046129af565b6110a4565b61027e61042e3660046129c8565b6112af565b61027e611472565b61027e610449366004612941565b611496565b610212600281565b61027e610464366004612941565b6116dd565b61021262093a8081565b6104966104813660046129af565b609e60205260009081526040902054600f0b81565b604051600f9190910b815260200161021c565b6097546103e4906001600160a01b031681565b60a080546104c990612d9a565b80601f01602080910402602001604051908101604052809291908181526020018280546104f590612d9a565b80156105425780601f1061051757610100808354040283529160200191610542565b820191906000526020600020905b81548152906001019060200180831161052557829003601f168201915b505050505081565b60006105bd609b609a548154811061056457610564612e1c565b60009182526020918290206040805160808101825260039093029091018054600f81810b810b810b8552600160801b909104810b810b900b93830193909352600183015490820152600290910154606082015242611775565b905090565b600260015414156105ee5760405162461bcd60e51b81526004016105e590612b5f565b60405180910390fd5b600260019081556040805180820182526001600160a01b0385166000818152609960208181529482208054600f90810b900b855292909152835290920154908201528161066b5760405162461bcd60e51b815260206004820152600b60248201526a1898590817d85b5bdd5b9d60aa1b60448201526064016105e5565b60008160000151600f0b136106925760405162461bcd60e51b81526004016105e590612b01565b428160200151116106b55760405162461bcd60e51b81526004016105e590612b28565b6106c483836000846000611875565b50506001805550565b609c60205281600052604060002081815481106106e957600080fd5b6000918252602090912060039091020180546001820154600290920154600f82810b9550600160801b90920490910b925084565b600260015414156107405760405162461bcd60e51b81526004016105e590612b5f565b600260019081553360009081526099602090815260409182902082518084019093528054600f90810b810b900b83529092015491810191909152609f546107c55780602001514210156107c55760405162461bcd60e51b815260206004820152600d60248201526c085b1bd8dac8195e1c1a5c9959609a1b60448201526064016105e5565b60006107d78260000151600f0b6119d3565b6040805180820182528451600f90810b825260208087018051828501526000808252808952338152609990925293902086518154920b6001600160801b03166001600160801b03199092169190911781559151600190920191909155609854919250906108448382612d53565b609855610852338386611a29565b609754610869906001600160a01b03163385612214565b6040805184815242602082015233917fda9a10d7b992511ddadbfc7ff712c1424ce2058bbcdac8c9876d6f8de590d43f910160405180910390a26098546040805183815260208101929092527f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf4910160405180910390a15050600180555050565b6065546001600160a01b031633146109145760405162461bcd60e51b81526004016105e590612aaa565b8015806109215750806001145b61095b5760405162461bcd60e51b815260206004820152600b60248201526a6f6e6c792030206f72203160a81b60448201526064016105e5565b609f80549082905560408051828152602081018490527fa4062a66448413a65927191f5a7514910c065f4bc4671fc7217df5ebad551b83910160405180910390a15050565b333b1580156109ae57503233145b6109ca5760405162461bcd60e51b81526004016105e590612adf565b600260015414156109ed5760405162461bcd60e51b81526004016105e590612b5f565b60026001908155604080518082018252336000818152609960208181529482208054600f90810b900b8552929091528352909201549082015281610a615760405162461bcd60e51b815260206004820152600b60248201526a1898590817d85b5bdd5b9d60aa1b60448201526064016105e5565b60008160000151600f0b13610a885760405162461bcd60e51b81526004016105e590612b01565b42816020015111610aab5760405162461bcd60e51b81526004016105e590612b28565b610aba33836000846002611875565b505060018055565b600043821115610b075760405162461bcd60e51b815260206004820152601060248201526f3130b2102fb13637b1b5a73ab6b132b960811b60448201526064016105e5565b6000610b13848461231f565b905080610b24576000915050610d9d565b6001600160a01b0384166000908152609c60205260408120805483908110610b4e57610b4e612e1c565b600091825260208083206040805160808101825260039094029091018054600f81810b810b810b8652600160801b909104810b810b900b92840192909252600182015490830152600201546060820152609a5490925090610baf86836123ed565b90506000609b8281548110610bc657610bc6612e1c565b600091825260208083206040805160808101825260039094029091018054600f81810b810b810b8652600160801b909104810b810b900b9284019290925260018201549083015260020154606082015291508084841015610cc4576000609b610c30866001612be5565b81548110610c4057610c40612e1c565b60009182526020918290206040805160808101825260039093029091018054600f81810b810b810b8552600160801b909104810b810b900b938301939093526001830154908201526002909101546060808301829052860151919250610ca69190612d53565b925083604001518160400151610cbc9190612d53565b915050610ce8565b6060830151610cd39043612d53565b9150826040015142610ce59190612d53565b90505b60408301518215610d25578284606001518b610d049190612d53565b610d0e9084612ce4565b610d189190612c3b565b610d229082612be5565b90505b610d3d876040015182610d389190612d53565b612481565b8760200151610d4c9190612c4f565b87518890610d5b908390612d03565b600f90810b810b90915288516000910b12159050610d8457600098505050505050505050610d9d565b8651610d9290600f0b6119d3565b985050505050505050505b92915050565b6001600160a01b0381166000908152609d602052604081205480610dca5750600092915050565b6001600160a01b0383166000908152609c60205260408120805483908110610df457610df4612e1c565b60009182526020918290206040805160808101825260039093029091018054600f81810b810b810b8552600160801b909104810b810b900b93830193909352600183015490820181905260029092015460608201529150610e5990610d389042612d53565b8160200151610e689190612c4f565b8151610e749190612d03565b600f90810b810b8083526000910b1215610e8d57600081525b8051610e9b90600f0b6119d3565b949350505050565b6065546001600160a01b03163314610ecd5760405162461bcd60e51b81526004016105e590612aaa565b610ed760006124fe565b565b333b158015610ee757503233145b610f035760405162461bcd60e51b81526004016105e590612adf565b60026001541415610f265760405162461bcd60e51b81526004016105e590612b5f565b60026001908155604080518082018252336000818152609960208181529482208054600f90810b900b85529290915283529092015490820152610f6882612550565b915060008160000151600f0b13610f915760405162461bcd60e51b81526004016105e590612b01565b42816020015111610fb45760405162461bcd60e51b81526004016105e590612b28565b80602001518211610ffa5760405162461bcd60e51b815260206004820152601060248201526f6f6e6c7920657874656e64206c6f636b60801b60448201526064016105e5565b6110086301e1338042612be5565b8211156110445760405162461bcd60e51b815260206004820152600a60248201526906240f2cac2e440dac2f60b31b60448201526064016105e5565b610aba33600084846003611875565b609b818154811061106357600080fd5b6000918252602090912060039091020180546001820154600290920154600f82810b9450600160801b90920490910b919084565b60a180546104c990612d9a565b6000438211156110e95760405162461bcd60e51b815260206004820152601060248201526f3130b2102fb13637b1b5a73ab6b132b960811b60448201526064016105e5565b609a5460006110f884836123ed565b90506000609b828154811061110f5761110f612e1c565b600091825260208083206040805160808101825260039094029091018054600f81810b810b810b8652600160801b909104810b810b900b9284019290925260018201549083015260020154606082015291508383101561123d576000609b611178856001612be5565b8154811061118857611188612e1c565b60009182526020918290206040805160808101825260039093029091018054600f81810b810b810b8552600160801b909104810b810b900b9383019390935260018301549082015260029091015460608083018290528501519192501461123757826060015181606001516111fd9190612d53565b836040015182604001516112119190612d53565b6060850151611220908a612d53565b61122a9190612ce4565b6112349190612c3b565b91505b5061128c565b4382606001511461128c5760608201516112579043612d53565b60408301516112669042612d53565b60608401516112759089612d53565b61127f9190612ce4565b6112899190612c3b565b90505b6112a5828284604001516112a09190612be5565b611775565b9695505050505050565b333b1580156112bd57503233145b6112d95760405162461bcd60e51b81526004016105e590612adf565b600260015414156112fc5760405162461bcd60e51b81526004016105e590612b5f565b600260015561130a81612550565b3360009081526099602090815260409182902082518084019093528054600f90810b810b900b83526001015490820152909150826113775760405162461bcd60e51b815260206004820152600a60248201526918985908185b5bdd5b9d60b21b60448201526064016105e5565b8051600f0b156113b85760405162461bcd60e51b815260206004820152600c60248201526b616c7265616479206c6f636b60a01b60448201526064016105e5565b4282116114075760405162461bcd60e51b815260206004820152601a60248201527f63616e206f6e6c79206c6f636b20756e74696c2066757475726500000000000060448201526064016105e5565b6114156301e1338042612be5565b8211156114645760405162461bcd60e51b815260206004820152601860248201527f63616e206f6e6c79206c6f636b20312079656172206d6178000000000000000060448201526064016105e5565b6106c4338484846001611875565b60408051808201909152600080825260208201819052611493908280611a29565b50565b600054610100900460ff16806114af575060005460ff16155b6114cb5760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff161580156114ed576000805461ffff19166101011790555b6114f561256a565b6114fd6125e5565b609780546001600160a01b0319166001600160a01b0384169081179091556040805160808101825260008082526020808301828152428486019081524360608601908152609b805460018101825590865295519251600f93840b6001600160801b03908116600160801b9290950b1602929092177fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc349600390960295860155517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34a850155517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34b90930192909255825163313ce56760e01b8152925190939263313ce56792600480830193919282900301818787803b15801561161d57600080fd5b505af1158015611631573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165591906129ea565b60a2805460ff191660ff83161790556040805180820190915260078082526678414c5041434160c81b60209092019182529192506116969160a09190612895565b506040805180820190915260078082526678414c5041434160c81b60209092019182526116c59160a191612895565b505080156116d9576000805461ff00191690555b5050565b6065546001600160a01b031633146117075760405162461bcd60e51b81526004016105e590612aaa565b6001600160a01b03811661176c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e5565b611493816124fe565b600080839050600061178a8560400151612550565b905060005b60ff811015611848576117a562093a8083612be5565b91506000858311156117b9578592506117cd565b506000828152609e6020526040902054600f0b5b6117e0846040015184610d389190612d53565b84602001516117ef9190612c4f565b84516117fb9190612d03565b600f90810b900b8452828614156118125750611848565b8084602001516118229190612b96565b600f90810b900b602085015250604083018290528061184081612dd5565b91505061178f565b5060008260000151600f0b121561185e57600082525b815161186c90600f0b6119d3565b95945050505050565b6098546118828582612be5565b609855604080518082019091528351600f0b8152602080850151908201526118a986612481565b81516118b59190612b96565b600f90810b900b815284156118cc57602081018590525b6001600160a01b038716600090815260996020908152604090912082518154600f9190910b6001600160801b03166001600160801b03199091161781559082015160019091015561191e878583611a29565b851561193c5760975461193c906001600160a01b0316333089612644565b602080820151604080518981529283018690524290830152906001600160a01b038916907f5b5dbc6c64043a15d3fe6943a6e443a826b78755edc257b2ec890c022225dbcf9060600160405180910390a36098546040805184815260208101929092527f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf4910160405180910390a150505050505050565b600080821215611a255760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016105e5565b5090565b604080516080808201835260008083526020808401829052838501829052606080850183905285519384018652828452908301829052938201819052928101839052609a549192909181906001600160a01b03881615611cdf57428760200151118015611a9d575060008760000151600f0b135b15611af857611aaf6301e13380612481565b8751611abb9190612bfd565b8560200190600f0b9081600f0b81525050611adf428860200151610d389190612d53565b8560200151611aee9190612c4f565b600f90810b900b85525b428660200151118015611b12575060008660000151600f0b135b15611b6d57611b246301e13380612481565b8651611b309190612bfd565b8460200190600f0b9081600f0b81525050611b54428760200151610d389190612d53565b8460200151611b639190612c4f565b600f90810b900b84525b6001600160a01b0388166000908152609d602052604090205480611bf9576001600160a01b0389166000908152609c60209081526040808320805460018181018355918552938390208a51938b0151600f90810b6001600160801b03908116600160801b029590910b169390931760039094029092019283558801519082015560608701516002909101555b611c04816001612be5565b6001600160a01b038a166000818152609d6020908152604080832094909455428985019081524360608b01908152938352609c82528483208054600181810183559185528385208c518d860151600f90810b6001600160801b03908116600160801b0292820b1691909117600390930290910191825592519181019190915593516002909401939093558b8101518252609e8152929020549189015191900b945015611cdd57876020015187602001511415611cc257839250611cdd565b6020808801516000908152609e9091526040902054600f0b92505b505b604080516080810182526000808252602082015242918101919091524360608201528115611d7057609b8281548110611d1a57611d1a612e1c565b60009182526020918290206040805160808101825260039093029091018054600f81810b810b810b8552600160801b909104810b810b900b93830193909352600183015490820152600290910154606082015290505b604080820180518251608081018452600080825260208201819052835194820194909452606080860151908201529151909290421115611de7576040840151611db99042612d53565b6060850151611dc89043612d53565b611dda90670de0b6b3a7640000612ce4565b611de49190612c3b565b90505b6000611df284612550565b905060005b60ff811015611fe357611e0d62093a8083612be5565b9150600042831115611e2157429250611e35565b506000828152609e6020526040902054600f0b5b6000611e44610d388886612d53565b8860200151611e539190612c4f565b8851909150611e63908290612d03565b600f90810b900b88526020880151611e7c908390612b96565b600f90810b810b60208a015288516000910b1215611e9957600088525b60008860200151600f0b1215611eb157600060208901525b60408089018590528601519396508693670de0b6b3a764000090611ed59086612d53565b611edf9087612ce4565b611ee99190612c3b565b8660600151611ef89190612be5565b6060890152611f08896001612be5565b985042841415611f1f575050436060870152611fe3565b5050609b805460018101825560009190915286516020880151600f91820b6001600160801b03908116600160801b9290930b1602177fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34960039092029182015560408701517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34a82015560608701517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34b9091015580611fdb81612dd5565b915050611df7565b50609a8690556001600160a01b038d1615612076578960200151896020015186602001516120119190612b96565b61201b9190612d03565b600f90810b900b60208601528951895186516120379190612b96565b6120419190612d03565b600f90810b810b865260208601516000910b121561206157600060208601525b60008560000151600f0b121561207657600085525b609b805460018101825560009190915285516020870151600f91820b6001600160801b03908116600160801b9290930b1602177fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34960039092029182015560408601517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34a82015560608601517fbba9db4cdbea0a37c207bbb83e20f828cd4441c49891101dc94fd20dc8efc34b909101556001600160a01b038d161561220557428c6020015111156121a65760208a01516121509089612b96565b97508b602001518b6020015114156121745760208901516121719089612d03565b97505b60208c8101516000908152609e9091526040902080546001600160801b0319166001600160801b03600f8b900b161790555b428b602001511115612205578b602001518b6020015111156122055760208901516121d19088612d03565b60208c8101516000908152609e9091526040902080546001600160801b0319166001600160801b03600f84900b1617905596505b50505050505050505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916122709190612a0d565b6000604051808303816000865af19150503d80600081146122ad576040519150601f19603f3d011682016040523d82523d6000602084013e6122b2565b606091505b50915091508180156122dc5750805115806122dc5750808060200190518101906122dc919061298d565b6123185760405162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b60448201526064016105e5565b5050505050565b6001600160a01b0382166000908152609d60205260408120548190815b60808110156123e357818310612351576123e3565b6000600261235f8486612be5565b61236a906001612be5565b6123749190612c3b565b6001600160a01b0388166000908152609c6020526040902080549192508791839081106123a3576123a3612e1c565b906000526020600020906003020160020154116123c2578093506123d0565b6123cd600182612d53565b92505b50806123db81612dd5565b91505061233c565b5090949350505050565b60008082815b60808110156123e357818310612408576123e3565b600060026124168486612be5565b612421906001612be5565b61242b9190612c3b565b905086609b828154811061244157612441612e1c565b906000526020600020906003020160020154116124605780935061246e565b61246b600182612d53565b92505b508061247981612dd5565b9150506123f3565b600060016001607f1b031982128015906124a2575060016001607f1b038213155b611a255760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b60648201526084016105e5565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600062093a806125608184612c3b565b610d9d9190612ce4565b600054610100900460ff1680612583575060005460ff16155b61259f5760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff161580156125c1576000805461ffff19166101011790555b6125c961275c565b6125d16127c6565b8015611493576000805461ff001916905550565b600054610100900460ff16806125fe575060005460ff16155b61261a5760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff1615801561263c576000805461ffff19166101011790555b6125d1612826565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916126a89190612a0d565b6000604051808303816000865af19150503d80600081146126e5576040519150601f19603f3d011682016040523d82523d6000602084013e6126ea565b606091505b5091509150818015612714575080511580612714575080806020019051810190612714919061298d565b6127545760405162461bcd60e51b815260206004820152601160248201527021736166655472616e7366657246726f6d60781b60448201526064016105e5565b505050505050565b600054610100900460ff1680612775575060005460ff16155b6127915760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff161580156125d1576000805461ffff19166101011790558015611493576000805461ff001916905550565b600054610100900460ff16806127df575060005460ff16155b6127fb5760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff1615801561281d576000805461ffff19166101011790555b6125d1336124fe565b600054610100900460ff168061283f575060005460ff16155b61285b5760405162461bcd60e51b81526004016105e590612a5c565b600054610100900460ff1615801561287d576000805461ffff19166101011790555b600180558015611493576000805461ff001916905550565b8280546128a190612d9a565b90600052602060002090601f0160209004810192826128c35760008555612909565b82601f106128dc57805160ff1916838001178555612909565b82800160010185558215612909579182015b828111156129095782518255916020019190600101906128ee565b50611a259291505b80821115611a255760008155600101612911565b80356001600160a01b038116811461293c57600080fd5b919050565b60006020828403121561295357600080fd5b61295c82612925565b9392505050565b6000806040838503121561297657600080fd5b61297f83612925565b946020939093013593505050565b60006020828403121561299f57600080fd5b8151801515811461295c57600080fd5b6000602082840312156129c157600080fd5b5035919050565b600080604083850312156129db57600080fd5b50508035926020909101359150565b6000602082840312156129fc57600080fd5b815160ff8116811461295c57600080fd5b60008251612a1f818460208701612d6a565b9190910192915050565b6020815260008251806020840152612a48816040850160208701612d6a565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600890820152676f6e6c7920454f4160c01b604082015260600190565b6020808252600d908201526c085b1bd8dac8195e1a5cdd1959609a1b604082015260600190565b6020808252601d908201527f6c6f636b20657870697265642e20706c65617365207769746864726177000000604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600081600f0b83600f0b600082128260016001607f1b0303821381151615612bc057612bc0612df0565b8260016001607f1b0319038212811615612bdc57612bdc612df0565b50019392505050565b60008219821115612bf857612bf8612df0565b500190565b600081600f0b83600f0b80612c1457612c14612e06565b60016001607f1b0319821460001982141615612c3257612c32612df0565b90059392505050565b600082612c4a57612c4a612e06565b500490565b600081600f0b83600f0b60016001607f1b03600082136000841383830485118282161615612c7f57612c7f612df0565b60016001607f1b03196000851282811687830587121615612ca257612ca2612df0565b60008712925085820587128484161615612cbe57612cbe612df0565b85850587128184161615612cd457612cd4612df0565b5050509290910295945050505050565b6000816000190483118215151615612cfe57612cfe612df0565b500290565b600081600f0b83600f0b600081128160016001607f1b031901831281151615612d2e57612d2e612df0565b8160016001607f1b03018313811615612d4957612d49612df0565b5090039392505050565b600082821015612d6557612d65612df0565b500390565b60005b83811015612d85578181015183820152602001612d6d565b83811115612d94576000848401525b50505050565b600181811c90821680612dae57607f821691505b60208210811415612dcf57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612de957612de9612df0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fdfea26469706673582212203ec0383a13bed8848a359bf830905767164112f2a25f10e2b063cfd6b74221a864736f6c63430008070033";