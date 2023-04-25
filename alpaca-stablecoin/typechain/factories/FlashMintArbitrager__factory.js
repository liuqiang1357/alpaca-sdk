"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashMintArbitrager__factory = void 0;
const ethers_1 = require("ethers");
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
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onFlashLoan",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
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
const _bytecode = "0x608060405234801561001057600080fd5b50610d79806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806323e30c8b1461005c578063715018a6146101015780638129fc1c1461010b5780638da5cb5b14610113578063f2fde38b14610137575b600080fd5b6100ef600480360360a081101561007257600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156100b157600080fd5b8201836020820111156100c357600080fd5b803590602001918460018302840111600160201b831117156100e457600080fd5b50909250905061015d565b60408051918252519081900360200190f35b610109610596565b005b610109610630565b61011b6106da565b604080516001600160a01b039092168252519081900360200190f35b6101096004803603602081101561014d57600080fd5b50356001600160a01b03166106e9565b6000806000808585606081101561017357600080fd5b50604080516002808252606080830184526001600160a01b03853581169850602080870135821698509585013516955093919290918301908036833701905050905089816000815181106101c357fe5b60200260200101906001600160a01b031690816001600160a01b03168152505082816001815181106101f157fe5b6001600160a01b0392831660209182029290920101526000906102159085166107da565b905061022d6001600160a01b038c168660001961085b565b846001600160a01b03166338ed17398b60008530426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156102b257818101518382015260200161029a565b505050509050019650505050505050600060405180830381600087803b1580156102db57600080fd5b505af11580156102ef573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561031857600080fd5b8101908080516040519392919084600160201b82111561033757600080fd5b90830190602082018581111561034c57600080fd5b82518660208202830111600160201b8211171561036857600080fd5b82525081516020918201928201910280838360005b8381101561039557818101518382015260200161037d565b50505050905001604052505050506103c28560008d6001600160a01b031661085b9092919063ffffffff16565b60006103d6856001600160a01b03166107da565b9050610453846001600160a01b031663e723b9776040518163ffffffff1660e01b815260040160206040518083038186803b15801561041457600080fd5b505afa158015610428573d6000803e3d6000fd5b505050506040513d602081101561043e57600080fd5b50516001600160a01b0387169060001961085b565b6001600160a01b0384166340853dce3061046d84866109b4565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b50505050610545846001600160a01b031663e723b9776040518163ffffffff1660e01b815260040160206040518083038186803b15801561050757600080fd5b505afa15801561051b573d6000803e3d6000fd5b505050506040513d602081101561053157600080fd5b50516001600160a01b03871690600061085b565b610564336105538d8d610a11565b6001600160a01b038f16919061085b565b507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd99c9b505050505050505050505050565b61059e610a70565b6001600160a01b03166105af6106da565b6001600160a01b0316146105f8576040805162461bcd60e51b81526020600482018190526024820152600080516020610d04833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b031690600080516020610d24833981519152908390a3603380546001600160a01b0319169055565b600054610100900460ff16806106495750610649610a74565b80610657575060005460ff16155b6106925760405162461bcd60e51b815260040180806020018281038252602e815260200180610cd6602e913960400191505060405180910390fd5b600054610100900460ff161580156106bd576000805460ff1961ff0019909116610100171660011790555b6106c5610a85565b80156106d7576000805461ff00191690555b50565b6033546001600160a01b031690565b6106f1610a70565b6001600160a01b03166107026106da565b6001600160a01b03161461074b576040805162461bcd60e51b81526020600482018190526024820152600080516020610d04833981519152604482015290519081900360640190fd5b6001600160a01b0381166107905760405162461bcd60e51b8152600401808060200182810382526026815260200180610cb06026913960400191505060405180910390fd5b6033546040516001600160a01b03808416921690600080516020610d2483398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561082957600080fd5b505afa15801561083d573d6000803e3d6000fd5b505050506040513d602081101561085357600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b602083106108d85780518252601f1990920191602091820191016108b9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461093a576040519150601f19603f3d011682016040523d82523d6000602084013e61093f565b606091505b509150915081801561096d57508051158061096d575080806020019051602081101561096a57600080fd5b50515b6109ad576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b600082821115610a0b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015610a69576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b3390565b6000610a7f30610b22565b15905090565b600054610100900460ff1680610a9e5750610a9e610a74565b80610aac575060005460ff16155b610ae75760405162461bcd60e51b815260040180806020018281038252602e815260200180610cd6602e913960400191505060405180910390fd5b600054610100900460ff16158015610b12576000805460ff1961ff0019909116610100171660011790555b610b1a610b28565b6106c5610bc8565b3b151590565b600054610100900460ff1680610b415750610b41610a74565b80610b4f575060005460ff16155b610b8a5760405162461bcd60e51b815260040180806020018281038252602e815260200180610cd6602e913960400191505060405180910390fd5b600054610100900460ff161580156106c5576000805460ff1961ff00199091166101001716600117905580156106d7576000805461ff001916905550565b600054610100900460ff1680610be15750610be1610a74565b80610bef575060005460ff16155b610c2a5760405162461bcd60e51b815260040180806020018281038252602e815260200180610cd6602e913960400191505060405180910390fd5b600054610100900460ff16158015610c55576000805460ff1961ff0019909116610100171660011790555b6000610c5f610a70565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020610d24833981519152908290a35080156106d7576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220c5dc4a04f2cf9442ef18d6f824ea7308cf22bc223c4a18435107456e65a4e89064736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class FlashMintArbitrager__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
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
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FlashMintArbitrager__factory = FlashMintArbitrager__factory;
FlashMintArbitrager__factory.bytecode = _bytecode;
FlashMintArbitrager__factory.abi = _abi;
