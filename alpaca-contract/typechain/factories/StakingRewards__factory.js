"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingRewards__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class StakingRewards__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_owner, _rewardsDistribution, _rewardsToken, _stakingToken, overrides) {
        return super.deploy(_owner, _rewardsDistribution, _rewardsToken, _stakingToken, overrides || {});
    }
    getDeployTransaction(_owner, _rewardsDistribution, _rewardsToken, _stakingToken, overrides) {
        return super.getDeployTransaction(_owner, _rewardsDistribution, _rewardsToken, _stakingToken, overrides || {});
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
exports.StakingRewards__factory = StakingRewards__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rewardsDistribution",
                type: "address",
            },
            {
                internalType: "address",
                name: "_rewardsToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_stakingToken",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldOwner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerNominated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "isPaused",
                type: "bool",
            },
        ],
        name: "PauseChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Recovered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
        ],
        name: "RewardAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
        ],
        name: "RewardPaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newDuration",
                type: "uint256",
            },
        ],
        name: "RewardsDurationUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Staked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Withdrawn",
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
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
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "earned",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "exit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "getReward",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getRewardForDuration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "lastPauseTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "lastTimeRewardApplicable",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "lastUpdateTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "nominateNewOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "nominatedOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
        ],
        name: "notifyRewardAmount",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "periodFinish",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "recoverERC20",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardPerToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardPerTokenStored",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardRate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "rewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardsDistribution",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardsDuration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "rewardsToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bool",
                name: "_paused",
                type: "bool",
            },
        ],
        name: "setPaused",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_rewardsDistribution",
                type: "address",
            },
        ],
        name: "setRewardsDistribution",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_rewardsDuration",
                type: "uint256",
            },
        ],
        name: "setRewardsDuration",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "stake",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "stakingToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "updatePeriodFinish",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "userRewardPerTokenPaid",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040526000600755600060085562093a8060095534801561002157600080fd5b506040516118533803806118538339818101604052608081101561004457600080fd5b5080516020820151604083015160609093015191929091836001600160a01b0381166100b7576040805162461bcd60e51b815260206004820152601960248201527f4f776e657220616464726573732063616e6e6f74206265203000000000000000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b038316908117825560408051928352602083019190915280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a15060016003556000546001600160a01b0316610166576040805162461bcd60e51b815260206004820152601160248201527013dddb995c881b5d5cdd081899481cd95d607a1b604482015290519081900360640190fd5b600580546001600160a01b0393841661010002610100600160a81b0319909116179055600680549183166001600160a01b03199283161790556002805493909216921691909117905550611694806101bf6000396000f3fe608060405234801561001057600080fd5b506004361061017f5760003560e01c80628cc262146101845780630700037d146101bc5780631627540c146101e257806316c38b3c1461020a57806318160ddd1461022957806319762143146102315780631c1f78eb146102575780632e1a7d4d1461025f578063386a95251461027c5780633c6b16ab146102845780633d18b912146102a15780633fc6df6e146102a957806353a47bb7146102cd578063556f6e6b146102d55780635c975abb146102f257806370a082311461030e57806372f702f31461033457806379ba50971461033c5780637b0a47ee1461034457806380faa57d1461034c5780638980f11f146103545780638b876347146103805780638da5cb5b146103a657806391b4ded9146103ae578063a694fc3a146103b6578063c8f33c91146103d3578063cc1a378f146103db578063cd3daf9d146103f8578063d1af0c7d14610400578063df136d6514610408578063e9fad8ee14610410578063ebe2b12b14610418575b600080fd5b6101aa6004803603602081101561019a57600080fd5b50356001600160a01b0316610420565b60408051918252519081900360200190f35b6101aa600480360360208110156101d257600080fd5b50356001600160a01b03166104b6565b610208600480360360208110156101f857600080fd5b50356001600160a01b03166104c8565b005b6102086004803603602081101561022057600080fd5b50351515610524565b6101aa61059e565b6102086004803603602081101561024757600080fd5b50356001600160a01b03166105a5565b6101aa6105cf565b6102086004803603602081101561027557600080fd5b50356105ed565b6101aa61077d565b6102086004803603602081101561029a57600080fd5b5035610783565b6102086109d4565b6102b1610b00565b604080516001600160a01b039092168252519081900360200190f35b6102b1610b0f565b610208600480360360208110156102eb57600080fd5b5035610b1e565b6102fa610b88565b604080519115158252519081900360200190f35b6101aa6004803603602081101561032457600080fd5b50356001600160a01b0316610b91565b6102b1610bac565b610208610bbb565b6101aa610c77565b6101aa610c7d565b6102086004803603604081101561036a57600080fd5b506001600160a01b038135169060200135610c8b565b6101aa6004803603602081101561039657600080fd5b50356001600160a01b0316610d48565b6102b1610d5a565b6101aa610d69565b610208600480360360208110156103cc57600080fd5b5035610d6f565b6101aa610f3b565b610208600480360360208110156103f157600080fd5b5035610f41565b6101aa610fc4565b6102b161101e565b6101aa611032565b610208611038565b6101aa61105b565b6001600160a01b0381166000908152600d6020908152604080832054600c9092528220546104b091906104a490670de0b6b3a7640000906104989061047390610467610fc4565b9063ffffffff61106116565b6001600160a01b0388166000908152600f60205260409020549063ffffffff6110be16565b9063ffffffff61111e16565b9063ffffffff61118516565b92915050565b600d6020526000908152604090205481565b6104d06111dd565b600180546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229181900360200190a150565b61052c6111dd565b60055460ff16151581151514156105425761059b565b6005805460ff1916821515179081905560ff161561055f57426004555b6005546040805160ff90921615158252517f8fb6c181ee25a520cf3dd6565006ef91229fcfe5a989566c2a3b8c115570cec59181900360200190a15b50565b600e545b90565b6105ad6111dd565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60006105e86009546008546110be90919063ffffffff16565b905090565b600380546001019081905533610601610fc4565b600b5561060c610c7d565b600a556001600160a01b038116156106535761062781610420565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b6000831161069c576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b600e546106af908463ffffffff61106116565b600e55336000908152600f60205260409020546106d2908463ffffffff61106116565b336000818152600f60205260409020919091556006546106fe916001600160a01b039091169085611226565b60408051848152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a2506003548114610779576040805162461bcd60e51b815260206004820152601f602482015260008051602061150a833981519152604482015290519081900360640190fd5b5050565b60095481565b6002546001600160a01b031633146107cc5760405162461bcd60e51b815260040180806020018281038252602a8152602001806115eb602a913960400191505060405180910390fd5b60006107d6610fc4565b600b556107e1610c7d565b600a556001600160a01b03811615610828576107fc81610420565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b600754421061084d5760095461084590839063ffffffff61111e16565b60085561089c565b600754600090610863904263ffffffff61106116565b9050600061087c600854836110be90919063ffffffff16565b60095490915061089690610498868463ffffffff61118516565b60085550505b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156108ec57600080fd5b505afa158015610900573d6000803e3d6000fd5b505050506040513d602081101561091657600080fd5b505160095490915061092f90829063ffffffff61111e16565b6008541115610980576040805162461bcd60e51b81526020600482015260186024820152770a0e4deecd2c8cac840e4caeec2e4c840e8dede40d0d2ced60431b604482015290519081900360640190fd5b42600a819055600954610999919063ffffffff61118516565b6007556040805184815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a1505050565b6003805460010190819055336109e8610fc4565b600b556109f3610c7d565b600a556001600160a01b03811615610a3a57610a0e81610420565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b336000908152600d60205260409020548015610aba57336000818152600d6020526040812055600554610a83916101009091046001600160a01b0316908363ffffffff61122616565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b5050600354811461059b576040805162461bcd60e51b815260206004820152601f602482015260008051602061150a833981519152604482015290519081900360640190fd5b6002546001600160a01b031681565b6001546001600160a01b031681565b610b266111dd565b6000610b30610fc4565b600b55610b3b610c7d565b600a556001600160a01b03811615610b8257610b5681610420565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b50600755565b60055460ff1681565b6001600160a01b03166000908152600f602052604090205490565b6006546001600160a01b031681565b6001546001600160a01b03163314610c045760405162461bcd60e51b815260040180806020018281038252603581526020018061152a6035913960400191505060405180910390fd5b600054600154604080516001600160a01b03938416815292909116602083015280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b60085481565b60006105e84260075461127d565b610c936111dd565b6006546001600160a01b0383811691161415610ce05760405162461bcd60e51b815260040180806020018281038252602181526020018061163f6021913960400191505060405180910390fd5b600054610d00906001600160a01b0384811691168363ffffffff61122616565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b600c6020526000908152604090205481565b6000546001600160a01b031681565b60045481565b600380546001019081905560055460ff1615610dbc5760405162461bcd60e51b815260040180806020018281038252603c8152602001806115af603c913960400191505060405180910390fd5b33610dc5610fc4565b600b55610dd0610c7d565b600a556001600160a01b03811615610e1757610deb81610420565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b60008311610e5d576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b600e54610e70908463ffffffff61118516565b600e55336000908152600f6020526040902054610e93908463ffffffff61118516565b336000818152600f6020526040902091909155600654610ec0916001600160a01b03909116903086611293565b60408051848152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a2506003548114610779576040805162461bcd60e51b815260206004820152601f602482015260008051602061150a833981519152604482015290519081900360640190fd5b600a5481565b610f496111dd565b6007544211610f895760405162461bcd60e51b81526004018080602001828103825260588152602001806114b26058913960600191505060405180910390fd5b60098190556040805182815290517ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39181900360200190a150565b6000600e5460001415610fda5750600b546105a2565b6105e861100f600e54610498670de0b6b3a7640000611003600854611003600a54610467610c7d565b9063ffffffff6110be16565b600b549063ffffffff61118516565b60055461010090046001600160a01b031681565b600b5481565b336000908152600f6020526040902054611051906105ed565b6110596109d4565b565b60075481565b6000828211156110b8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826110cd575060006104b0565b828202828482816110da57fe5b04146111175760405162461bcd60e51b815260040180806020018281038252602181526020018061158e6021913960400191505060405180910390fd5b9392505050565b6000808211611171576040805162461bcd60e51b815260206004820152601a602482015279536166654d6174683a206469766973696f6e206279207a65726f60301b604482015290519081900360640190fd5b600082848161117c57fe5b04949350505050565b600082820183811015611117576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6000546001600160a01b031633146110595760405162461bcd60e51b815260040180806020018281038252602f81526020018061155f602f913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526112789084906112f3565b505050565b600081831061128c5781611117565b5090919050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526112ed9085906112f3565b50505050565b611305826001600160a01b03166114ab565b611356576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106113945780518252601f199092019160209182019101611375565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146113f6576040519150601f19603f3d011682016040523d82523d6000602084013e6113fb565b606091505b509150915081611452576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156112ed5780806020019051602081101561146e57600080fd5b50516112ed5760405162461bcd60e51b815260040180806020018281038252602a815260200180611615602a913960400191505060405180910390fd5b3b15159056fe50726576696f7573207265776172647320706572696f64206d75737420626520636f6d706c657465206265666f7265206368616e67696e6720746865206475726174696f6e20666f7220746865206e657720706572696f645265656e7472616e637947756172643a207265656e7472616e742063616c6c00596f75206d757374206265206e6f6d696e61746564206265666f726520796f752063616e20616363657074206f776e6572736869704f6e6c792074686520636f6e7472616374206f776e6572206d617920706572666f726d207468697320616374696f6e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468697320616374696f6e2063616e6e6f7420626520706572666f726d6564207768696c652074686520636f6e74726163742069732070617573656443616c6c6572206973206e6f742052657761726473446973747269627574696f6e20636f6e74726163745361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656443616e6e6f7420776974686472617720746865207374616b696e6720746f6b656ea265627a7a72315820b9561329f7a1f8261665588ab39ecb8e03c13a8737dea881326085069638bb5864736f6c63430005100032";