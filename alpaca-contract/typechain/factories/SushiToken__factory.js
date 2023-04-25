"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiToken__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class SushiToken__factory extends contracts_1.ContractFactory {
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
exports.SushiToken__factory = SushiToken__factory;
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
const _bytecode = "0x600a60808181526929bab9b434aa37b5b2b760b11b60a0908152610100604052600560c090815264535553484960d81b60e05291926200004291600391620000de565b50805162000058906004906020840190620000de565b50506005805460ff191660121790555060006200007d6001600160e01b03620000d916565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000180565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012157805160ff191683800117855562000151565b8280016001018555821562000151579182015b828111156200015157825182559160200191906001019062000134565b506200015f92915062000163565b5090565b620000db91905b808211156200015f57600081556001016200016a565b611b3480620001906000396000f3fe608060405234801561001057600080fd5b50600436106101335760003560e01c806306fdde0314610138578063095ea7b3146101b557806318160ddd146101f557806320606b701461020f57806323b872dd14610217578063313ce5671461024d578063395093511461026b57806340c10f1914610297578063587cde1e146102c55780635c19a95c146103075780636fcfff451461032d57806370a082311461036c578063715018a614610392578063782d6fe11461039a5780637ecebe00146103c65780638da5cb5b146103ec57806395d89b41146103f4578063a457c2d7146103fc578063a9059cbb14610428578063b4b5ea5714610454578063c3cda5201461047a578063dd62ed3e146104c1578063e7a324dc146104ef578063f1127ed8146104f7578063f2fde38b14610549575b600080fd5b61014061056f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017a578181015183820152602001610162565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e1600480360360408110156101cb57600080fd5b506001600160a01b038135169060200135610605565b604080519115158252519081900360200190f35b6101fd610623565b60408051918252519081900360200190f35b6101fd610629565b6101e16004803603606081101561022d57600080fd5b506001600160a01b03813581169160208101359091169060400135610644565b6102556106d1565b6040805160ff9092168252519081900360200190f35b6101e16004803603604081101561028157600080fd5b506001600160a01b0381351690602001356106da565b6102c3600480360360408110156102ad57600080fd5b506001600160a01b03813516906020013561072e565b005b6102eb600480360360208110156102db57600080fd5b50356001600160a01b03166107be565b604080516001600160a01b039092168252519081900360200190f35b6102c36004803603602081101561031d57600080fd5b50356001600160a01b03166107dc565b6103536004803603602081101561034357600080fd5b50356001600160a01b03166107e9565b6040805163ffffffff9092168252519081900360200190f35b6101fd6004803603602081101561038257600080fd5b50356001600160a01b0316610801565b6102c361081c565b6101fd600480360360408110156103b057600080fd5b506001600160a01b0381351690602001356108b7565b6101fd600480360360208110156103dc57600080fd5b50356001600160a01b0316610abf565b6102eb610ad1565b610140610ae5565b6101e16004803603604081101561041257600080fd5b506001600160a01b038135169060200135610b46565b6101e16004803603604081101561043e57600080fd5b506001600160a01b038135169060200135610bb4565b6101fd6004803603602081101561046a57600080fd5b50356001600160a01b0316610bc8565b6102c3600480360360c081101561049057600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610c2c565b6101fd600480360360408110156104d757600080fd5b506001600160a01b0381358116916020013516610ea2565b6101fd610ecd565b6105296004803603604081101561050d57600080fd5b5080356001600160a01b0316906020013563ffffffff16610ee8565b6040805163ffffffff909316835260208301919091528051918290030190f35b6102c36004803603602081101561055f57600080fd5b50356001600160a01b0316610f15565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105fb5780601f106105d0576101008083540402835291602001916105fb565b820191906000526020600020905b8154815290600101906020018083116105de57829003601f168201915b5050505050905090565b600061061961061261100c565b8484611010565b5060015b92915050565b60025490565b60405180604361191a82396043019050604051809103902081565b60006106518484846110fc565b6106c78461065d61100c565b6106c285604051806060016040528060288152602001611985602891396001600160a01b038a1660009081526001602052604081209061069b61100c565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61125116565b611010565b5060019392505050565b60055460ff1690565b60006106196106e761100c565b846106c285600160006106f861100c565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6112e816565b61073661100c565b60055461010090046001600160a01b0390811691161461078b576040805162461bcd60e51b815260206004820181905260248201526000805160206119ad833981519152604482015290519081900360640190fd5b6107958282611340565b6001600160a01b038083166000908152600660205260408120546107ba92168361142a565b5050565b6001600160a01b039081166000908152600660205260409020541690565b6107e63382611578565b50565b60086020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526020819052604090205490565b61082461100c565b60055461010090046001600160a01b03908116911614610879576040805162461bcd60e51b815260206004820181905260248201526000805160206119ad833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316906000805160206119cd833981519152908390a360058054610100600160a81b0319169055565b60004382106108f75760405162461bcd60e51b815260040180806020018281038252602881526020018061195d6028913960400191505060405180910390fd5b6001600160a01b03831660009081526008602052604090205463ffffffff168061092557600091505061061d565b6001600160a01b038416600090815260076020908152604080832063ffffffff600019860181168552925290912054168310610994576001600160a01b03841660009081526007602090815260408083206000199490940163ffffffff1683529290522060010154905061061d565b6001600160a01b038416600090815260076020908152604080832083805290915290205463ffffffff168310156109cf57600091505061061d565b600060001982015b8163ffffffff168163ffffffff161115610a8857600282820363ffffffff16048103610a01611815565b506001600160a01b038716600090815260076020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610a635760200151945061061d9350505050565b805163ffffffff16871115610a7a57819350610a81565b6001820392505b50506109d7565b506001600160a01b038516600090815260076020908152604080832063ffffffff9094168352929052206001015491505092915050565b60096020526000908152604090205481565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105fb5780601f106105d0576101008083540402835291602001916105fb565b6000610619610b5361100c565b846106c285604051806060016040528060258152602001611ada6025913960016000610b7d61100c565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61125116565b6000610619610bc161100c565b84846110fc565b6001600160a01b03811660009081526008602052604081205463ffffffff1680610bf3576000610c25565b6001600160a01b038316600090815260076020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b6000604051808061191a6043913960430190506040518091039020610c4f61056f565b80519060200120610c5e61160d565b3060405160200180858152602001848152602001838152602001826001600160a01b03166001600160a01b0316815260200194505050505060405160208183030381529060405280519060200120905060006040518080611aa0603a91396040805191829003603a0182206020808401919091526001600160a01b038c1683830152606083018b905260808084018b90528251808503909101815260a08401835280519082012061190160f01b60c085015260c2840187905260e2808501829052835180860390910181526101028501808552815191840191909120600091829052610122860180865281905260ff8c1661014287015261016286018b905261018286018a9052935191965092945091926001926101a28083019392601f198301929081900390910190855afa158015610d9c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dee5760405162461bcd60e51b8152600401808060200182810382526027815260200180611a306027913960400191505060405180910390fd5b6001600160a01b03811660009081526009602052604090208054600181019091558914610e4c5760405162461bcd60e51b81526004018080602001828103825260238152602001806119ed6023913960400191505060405180910390fd5b87421115610e8b5760405162461bcd60e51b81526004018080602001828103825260278152602001806118506027913960400191505060405180910390fd5b610e95818b611578565b505050505b505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60405180603a611aa08239603a019050604051809103902081565b60076020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b610f1d61100c565b60055461010090046001600160a01b03908116911614610f72576040805162461bcd60e51b815260206004820181905260248201526000805160206119ad833981519152604482015290519081900360640190fd5b6001600160a01b038116610fb75760405162461bcd60e51b81526004018080602001828103825260268152602001806118776026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416906000805160206119cd83398151915290600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b3390565b6001600160a01b0383166110555760405162461bcd60e51b8152600401808060200182810382526024815260200180611a7c6024913960400191505060405180910390fd5b6001600160a01b03821661109a5760405162461bcd60e51b815260040180806020018281038252602281526020018061189d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166111415760405162461bcd60e51b8152600401808060200182810382526025815260200180611a576025913960400191505060405180910390fd5b6001600160a01b0382166111865760405162461bcd60e51b815260040180806020018281038252602381526020018061182d6023913960400191505060405180910390fd5b611191838383611573565b6111d4816040518060600160405280602681526020016118bf602691396001600160a01b038616600090815260208190526040902054919063ffffffff61125116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611209908263ffffffff6112e816565b6001600160a01b03808416600081815260208181526040918290209490945580518581529051919392871692600080516020611a1083398151915292918290030190a3505050565b600081848411156112e05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112a557818101518382015260200161128d565b50505050905090810190601f1680156112d25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610c25576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6001600160a01b03821661139b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6113a760008383611573565b6002546113ba908263ffffffff6112e816565b6002556001600160a01b0382166000908152602081905260409020546113e6908263ffffffff6112e816565b6001600160a01b038316600081815260208181526040808320949094558351858152935192939192600080516020611a108339815191529281900390910190a35050565b816001600160a01b0316836001600160a01b03161415801561144c5750600081115b15611573576001600160a01b038316156114e4576001600160a01b03831660009081526008602052604081205463ffffffff16908161148c5760006114be565b6001600160a01b038516600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b905060006114d2828563ffffffff61161116565b90506114e086848484611653565b5050505b6001600160a01b03821615611573576001600160a01b03821660009081526008602052604081205463ffffffff16908161151f576000611551565b6001600160a01b038416600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b90506000611565828563ffffffff6112e816565b9050610e9a85848484611653565b505050565b6001600160a01b038083166000908152600660205260408120549091169061159f84610801565b6001600160a01b0385811660008181526006602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461160782848361142a565b50505050565b4690565b6000610c2583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611251565b6000611677436040518060600160405280603581526020016118e5603591396117b8565b905060008463ffffffff161180156116c057506001600160a01b038516600090815260076020908152604080832063ffffffff6000198901811685529252909120548282169116145b156116fd576001600160a01b038516600090815260076020908152604080832063ffffffff6000198901168452909152902060010182905561176e565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600784528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260089092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b600081600160201b841061180d5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156112a557818101518382015260200161128d565b509192915050565b60408051808201909152600080825260208201529056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737353555348493a3a64656c656761746542795369673a207369676e617475726520657870697265644f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636553555348493a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473454950373132446f6d61696e28737472696e67206e616d652c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742953555348493a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e053555348493a3a64656c656761746542795369673a20696e76616c6964206e6f6e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef53555348493a3a64656c656761746542795369673a20696e76616c6964207369676e617475726545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737344656c65676174696f6e28616464726573732064656c6567617465652c75696e74323536206e6f6e63652c75696e74323536206578706972792945524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206cdd62c3aafc58a24804049e74b84b082885cdcd791272985ef9aa90603d3f2c64736f6c63430006060033";
