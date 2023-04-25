"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20UpgradeSafe__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class ERC20UpgradeSafe__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20UpgradeSafe__factory = ERC20UpgradeSafe__factory;
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610a00806100206000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b31461011b57806318160ddd1461015b57806323b872dd14610175578063313ce567146101ab57806339509351146101c957806370a08231146101f557806395d89b411461021b578063a457c2d714610223578063a9059cbb1461024f578063dd62ed3e1461027b575b600080fd5b6100a66102a9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100e05781810151838201526020016100c8565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101476004803603604081101561013157600080fd5b506001600160a01b03813516906020013561033f565b604080519115158252519081900360200190f35b61016361035c565b60408051918252519081900360200190f35b6101476004803603606081101561018b57600080fd5b506001600160a01b03813581169160208101359091169060400135610362565b6101b36103ef565b6040805160ff9092168252519081900360200190f35b610147600480360360408110156101df57600080fd5b506001600160a01b0381351690602001356103f8565b6101636004803603602081101561020b57600080fd5b50356001600160a01b031661044c565b6100a6610467565b6101476004803603604081101561023957600080fd5b506001600160a01b0381351690602001356104c8565b6101476004803603604081101561026557600080fd5b506001600160a01b038135169060200135610536565b6101636004803603604081101561029157600080fd5b506001600160a01b038135811691602001351661054a565b60688054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b5050505050905090565b600061035361034c610575565b8484610579565b50600192915050565b60675490565b600061036f848484610665565b6103e58461037b610575565b6103e085604051806060016040528060288152602001610935602891396001600160a01b038a166000908152606660205260408120906103b9610575565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6107ce16565b610579565b5060019392505050565b606a5460ff1690565b6000610353610405610575565b846103e08560666000610416610575565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61086516565b6001600160a01b031660009081526065602052604090205490565b60698054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103355780601f1061030a57610100808354040283529160200191610335565b60006103536104d5610575565b846103e0856040518060600160405280602581526020016109a660259139606660006104ff610575565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6107ce16565b6000610353610543610575565b8484610665565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105be5760405162461bcd60e51b81526004018080602001828103825260248152602001806109826024913960400191505060405180910390fd5b6001600160a01b0382166106035760405162461bcd60e51b81526004018080602001828103825260228152602001806108ed6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260666020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106aa5760405162461bcd60e51b815260040180806020018281038252602581526020018061095d6025913960400191505060405180910390fd5b6001600160a01b0382166106ef5760405162461bcd60e51b81526004018080602001828103825260238152602001806108ca6023913960400191505060405180910390fd5b6106fa8383836108c4565b61073d8160405180606001604052806026815260200161090f602691396001600160a01b038616600090815260656020526040902054919063ffffffff6107ce16565b6001600160a01b038085166000908152606560205260408082209390935590841681522054610772908263ffffffff61086516565b6001600160a01b0380841660008181526065602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561085d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561082257818101518382015260200161080a565b50505050905090810190601f16801561084f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156108bd576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220049ef22c47e3af22cfccb3e38638272ee95625994c70b92892aca2fcbe5a76e364736f6c63430006060033";
