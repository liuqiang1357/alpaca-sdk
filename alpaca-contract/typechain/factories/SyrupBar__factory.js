"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyrupBar__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class SyrupBar__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_cake, overrides) {
        return super.deploy(_cake, overrides || {});
    }
    getDeployTransaction(_cake, overrides) {
        return super.getDeployTransaction(_cake, overrides || {});
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
exports.SyrupBar__factory = SyrupBar__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract CakeToken",
                name: "_cake",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
                name: "delegator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "toDelegate",
                type: "address",
            },
        ],
        name: "DelegateChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "delegate",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "previousBalance",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
            },
        ],
        name: "DelegateVotesChanged",
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
        inputs: [],
        name: "DELEGATION_TYPEHASH",
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
        name: "DOMAIN_TYPEHASH",
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
                name: "_from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
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
        name: "cake",
        outputs: [
            {
                internalType: "contract CakeToken",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        name: "checkpoints",
        outputs: [
            {
                internalType: "uint32",
                name: "fromBlock",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "votes",
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
                name: "delegatee",
                type: "address",
            },
        ],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expiry",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "delegateBySig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegator",
                type: "address",
            },
        ],
        name: "delegates",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getCurrentVotes",
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
        name: "getOwner",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getPriorVotes",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
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
        ],
        name: "numCheckpoints",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "safeCakeTransfer",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620021cb380380620021cb833981810160405260208110156200003757600080fd5b5051604080518082018252600e81526d29bcb93ab82130b9102a37b5b2b760911b60208281019190915282518084019093526005835264053595255560dc1b90830152906000620000906001600160e01b036200013f16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000ef90600490602085019062000144565b5080516200010590600590602084019062000144565b5050600680546001600160a01b0390931661010002610100600160a81b031960ff19909416601217939093169290921790915550620001e6565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018757805160ff1916838001178555620001b7565b82800160010185558215620001b7579182015b82811115620001b75782518255916020019190600101906200019a565b50620001c5929150620001c9565b5090565b6200014191905b80821115620001c55760008155600101620001d0565b611fd580620001f66000396000f3fe608060405234801561001057600080fd5b506004361061016a5760003560e01c806306fdde031461016f578063095ea7b3146101ec57806318160ddd1461022c57806320606b701461024657806323b872dd1461024e578063313ce5671461028457806339509351146102a257806340c10f19146102ce578063587cde1e146102fc5780635c19a95c1461033e5780636fcfff451461036457806370a08231146103a3578063715018a6146103c9578063782d6fe1146103d15780637ecebe00146103fd578063893d20e8146104235780638da5cb5b1461042b57806395d89b41146104335780639dc29fac1461043b578063a0712d6814610467578063a2e6ddcc14610484578063a457c2d7146104b0578063a9059cbb146104dc578063b4b5ea5714610508578063c3cda5201461052e578063dce1748414610575578063dd62ed3e1461057d578063e7a324dc146105ab578063f1127ed8146105b3578063f2fde38b14610605575b600080fd5b61017761062b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b1578181015183820152602001610199565b50505050905090810190601f1680156101de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102186004803603604081101561020257600080fd5b506001600160a01b0381351690602001356106c1565b604080519115158252519081900360200190f35b6102346106df565b60408051918252519081900360200190f35b6102346106e5565b6102186004803603606081101561026457600080fd5b506001600160a01b03813581169160208101359091169060400135610700565b61028c61078d565b6040805160ff9092168252519081900360200190f35b610218600480360360408110156102b857600080fd5b506001600160a01b038135169060200135610796565b6102fa600480360360408110156102e457600080fd5b506001600160a01b0381351690602001356107ea565b005b6103226004803603602081101561031257600080fd5b50356001600160a01b0316610875565b604080516001600160a01b039092168252519081900360200190f35b6102fa6004803603602081101561035457600080fd5b50356001600160a01b0316610893565b61038a6004803603602081101561037a57600080fd5b50356001600160a01b03166108a0565b6040805163ffffffff9092168252519081900360200190f35b610234600480360360208110156103b957600080fd5b50356001600160a01b03166108b8565b6102fa6108d3565b610234600480360360408110156103e757600080fd5b506001600160a01b038135169060200135610963565b6102346004803603602081101561041357600080fd5b50356001600160a01b0316610b6b565b610322610b7d565b610322610b8c565b610177610b9b565b6102fa6004803603604081101561045157600080fd5b506001600160a01b038135169060200135610bfc565b6102186004803603602081101561047d57600080fd5b5035610c5e565b6102fa6004803603604081101561049a57600080fd5b506001600160a01b038135169060200135610cd1565b610218600480360360408110156104c657600080fd5b506001600160a01b038135169060200135610ecb565b610218600480360360408110156104f257600080fd5b506001600160a01b038135169060200135610f39565b6102346004803603602081101561051e57600080fd5b50356001600160a01b0316610f4d565b6102fa600480360360c081101561054457600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610fb1565b610322611227565b6102346004803603604081101561059357600080fd5b506001600160a01b038135811691602001351661123b565b610234611266565b6105e5600480360360408110156105c957600080fd5b5080356001600160a01b0316906020013563ffffffff16611281565b6040805163ffffffff909316835260208301919091528051918290030190f35b6102fa6004803603602081101561061b57600080fd5b50356001600160a01b03166112ae565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106b75780601f1061068c576101008083540402835291602001916106b7565b820191906000526020600020905b81548152906001019060200180831161069a57829003601f168201915b5050505050905090565b60006106d56106ce61130f565b8484611313565b5060015b92915050565b60035490565b604051806043611d7382396043019050604051809103902081565b600061070d8484846113ff565b6107838461071961130f565b61077e85604051806060016040528060288152602001611d25602891396001600160a01b038a1660009081526002602052604081209061075761130f565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61154b16565b611313565b5060019392505050565b60065460ff1690565b60006106d56107a361130f565b8461077e85600260006107b461130f565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6115e216565b6107f261130f565b6000546001600160a01b03908116911614610842576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b61084c828261163a565b6001600160a01b0380831660009081526007602052604081205461087192168361171a565b5050565b6001600160a01b039081166000908152600760205260409020541690565b61089d3382611863565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b6108db61130f565b6000546001600160a01b0390811691161461092b576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b600080546040516001600160a01b0390911690600080516020611dd6833981519152908390a3600080546001600160a01b0319169055565b60004382106109a35760405162461bcd60e51b8152600401808060200182810382526027815260200180611e2a6027913960400191505060405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff16806109d15760009150506106d9565b6001600160a01b038416600090815260086020908152604080832063ffffffff600019860181168552925290912054168310610a40576001600160a01b03841660009081526008602090815260408083206000199490940163ffffffff168352929052206001015490506106d9565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff16831015610a7b5760009150506106d9565b600060001982015b8163ffffffff168163ffffffff161115610b3457600282820363ffffffff16048103610aad611c78565b506001600160a01b038716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610b0f576020015194506106d99350505050565b805163ffffffff16871115610b2657819350610b2d565b6001820392505b5050610a83565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610b87610b8c565b905090565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106b75780601f1061068c576101008083540402835291602001916106b7565b610c0461130f565b6000546001600160a01b03908116911614610c54576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b61084c82826118f8565b6000610c6861130f565b6000546001600160a01b03908116911614610cb8576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b610cc9610cc361130f565b8361163a565b506001919050565b610cd961130f565b6000546001600160a01b03908116911614610d29576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b600654604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610d7957600080fd5b505afa158015610d8d573d6000803e3d6000fd5b505050506040513d6020811015610da357600080fd5b5051905080821115610e3d576006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820185905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b158015610e0b57600080fd5b505af1158015610e1f573d6000803e3d6000fd5b505050506040513d6020811015610e3557600080fd5b50610ec69050565b6006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820186905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b158015610e9957600080fd5b505af1158015610ead573d6000803e3d6000fd5b505050506040513d6020811015610ec357600080fd5b50505b505050565b60006106d5610ed861130f565b8461077e85604051806060016040528060258152602001611edc6025913960026000610f0261130f565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61154b16565b60006106d5610f4661130f565b84846113ff565b6001600160a01b03811660009081526009602052604081205463ffffffff1680610f78576000610faa565b6001600160a01b038316600090815260086020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60006040518080611d736043913960430190506040518091039020610fd461062b565b80519060200120610fe36119e2565b3060405160200180858152602001848152602001838152602001826001600160a01b03166001600160a01b0316815260200194505050505060405160208183030381529060405280519060200120905060006040518080611f44603a91396040805191829003603a0182206020808401919091526001600160a01b038c1683830152606083018b905260808084018b90528251808503909101815260a08401835280519082012061190160f01b60c085015260c2840187905260e2808501829052835180860390910181526101028501808552815191840191909120600091829052610122860180865281905260ff8c1661014287015261016286018b905261018286018a9052935191965092945091926001926101a28083019392601f198301929081900390910190855afa158015611121573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111735760405162461bcd60e51b8152600401808060200182810382526026815260200180611d4d6026913960400191505060405180910390fd5b6001600160a01b0381166000908152600a6020526040902080546001810190915589146111d15760405162461bcd60e51b8152600401808060200182810382526022815260200180611e776022913960400191505060405180910390fd5b874211156112105760405162461bcd60e51b8152600401808060200182810382526026815260200180611cff6026913960400191505060405180910390fd5b61121a818b611863565b505050505b505050505050565b60065461010090046001600160a01b031681565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60405180603a611f448239603a019050604051809103902081565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6112b661130f565b6000546001600160a01b03908116911614611306576040805162461bcd60e51b81526020600482018190526024820152600080516020611db6833981519152604482015290519081900360640190fd5b61089d816119e6565b3390565b6001600160a01b0383166113585760405162461bcd60e51b8152600401808060200182810382526024815260200180611cb56024913960400191505060405180910390fd5b6001600160a01b03821661139d5760405162461bcd60e51b8152600401808060200182810382526022815260200180611f7e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166114445760405162461bcd60e51b8152600401808060200182810382526025815260200180611c906025913960400191505060405180910390fd5b6001600160a01b0382166114895760405162461bcd60e51b8152600401808060200182810382526023815260200180611eb96023913960400191505060405180910390fd5b6114cc81604051806060016040528060268152602001611e51602691396001600160a01b038616600090815260016020526040902054919063ffffffff61154b16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611501908263ffffffff6115e216565b6001600160a01b038084166000818152600160209081526040918290209490945580518581529051919392871692600080516020611e9983398151915292918290030190a3505050565b600081848411156115da5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561159f578181015183820152602001611587565b50505050905090810190601f1680156115cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610faa576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6001600160a01b038216611695576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546116a8908263ffffffff6115e216565b6003556001600160a01b0382166000908152600160205260409020546116d4908263ffffffff6115e216565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935192939192600080516020611e998339815191529281900390910190a35050565b816001600160a01b0316836001600160a01b03161415801561173c5750600081115b15610ec6576001600160a01b038316156117d4576001600160a01b03831660009081526009602052604081205463ffffffff16908161177c5760006117ae565b6001600160a01b038516600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006117c2828563ffffffff611a7416565b90506117d086848484611ab6565b5050505b6001600160a01b03821615610ec6576001600160a01b03821660009081526009602052604081205463ffffffff16908161180f576000611841565b6001600160a01b038416600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b90506000611855828563ffffffff6115e216565b905061121f85848484611ab6565b6001600160a01b038083166000908152600760205260408120549091169061188a846108b8565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46118f282848361171a565b50505050565b6001600160a01b03821661193d5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f016021913960400191505060405180910390fd5b61198081604051806060016040528060228152602001611f22602291396001600160a01b038516600090815260016020526040902054919063ffffffff61154b16565b6001600160a01b0383166000908152600160205260409020556003546119ac908263ffffffff611a7416565b6003556040805182815290516000916001600160a01b03851691600080516020611e998339815191529181900360200190a35050565b4690565b6001600160a01b038116611a2b5760405162461bcd60e51b8152600401808060200182810382526026815260200180611cd96026913960400191505060405180910390fd5b600080546040516001600160a01b0380851693921691600080516020611dd683398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610faa83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061154b565b6000611ada43604051806060016040528060348152602001611df660349139611c1b565b905060008463ffffffff16118015611b2357506001600160a01b038516600090815260086020908152604080832063ffffffff6000198901811685529252909120548282169116145b15611b60576001600160a01b038516600090815260086020908152604080832063ffffffff60001989011684529091529020600101829055611bd1565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600884528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260099092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b600081600160201b8410611c705760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561159f578181015183820152602001611587565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737343414b453a3a64656c656761746542795369673a207369676e6174757265206578706972656442455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636543414b453a3a64656c656761746542795369673a20696e76616c6964207369676e6174757265454950373132446f6d61696e28737472696e67206e616d652c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e7472616374294f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e043414b453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747343414b453a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636543414b453a3a64656c656761746542795369673a20696e76616c6964206e6f6e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a206275726e2066726f6d20746865207a65726f206164647265737342455032303a206275726e20616d6f756e7420657863656564732062616c616e636544656c65676174696f6e28616464726573732064656c6567617465652c75696e74323536206e6f6e63652c75696e74323536206578706972792942455032303a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220b4b3f0e8713478a65b958df0e4b313073f1bc2ce4b81bc9a9137ed5921c8337164736f6c63430006060033";