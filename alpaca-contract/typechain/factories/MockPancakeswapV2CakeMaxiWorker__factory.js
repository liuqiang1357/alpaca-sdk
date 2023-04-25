"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPancakeswapV2CakeMaxiWorker__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MockPancakeswapV2CakeMaxiWorker__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_baseToken, _farmingToken, _path, _rewardPath, overrides) {
        return super.deploy(_baseToken, _farmingToken, _path, _rewardPath, overrides || {});
    }
    getDeployTransaction(_baseToken, _farmingToken, _path, _rewardPath, overrides) {
        return super.getDeployTransaction(_baseToken, _farmingToken, _path, _rewardPath, overrides || {});
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
exports.MockPancakeswapV2CakeMaxiWorker__factory = MockPancakeswapV2CakeMaxiWorker__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_baseToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_farmingToken",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "_path",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "_rewardPath",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "baseToken",
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
        name: "farmingToken",
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
        name: "getPath",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getReversedPath",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRewardPath",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
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
        name: "health",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "lpToken",
        outputs: [
            {
                internalType: "contract IPancakePair",
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
        name: "path",
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
        name: "reinvest",
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
        name: "rewardPath",
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
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        name: "setReinvestorOk",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        name: "setStrategyOk",
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
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "debt",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "work",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610b98380380610b988339818101604052608081101561003357600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005e57600080fd5b90830190602082018581111561007357600080fd5b825186602082028301116401000000008211171561009057600080fd5b82525081516020918201928201910280838360005b838110156100bd5781810151838201526020016100a5565b50505050905001604052602001805160405193929190846401000000008211156100e657600080fd5b9083019060208201858111156100fb57600080fd5b825186602082028301116401000000008211171561011857600080fd5b82525081516020918201928201910280838360005b8381101561014557818101518382015260200161012d565b50505050919091016040525050600080546001600160a01b038089166001600160a01b0319928316179092556001805492881692909116919091179055505081516101979060029060208501906101b5565b5080516101ab9060039060208401906101b5565b5050505050610241565b82805482825590600052602060002090810192821561020a579160200282015b8281111561020a57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906101d5565b5061021692915061021a565b5090565b61023e91905b808211156102165780546001600160a01b0319168155600101610220565b90565b610948806102506000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c80631f27d774146100bf578063239e050f14610117578063415f12401461018957806348db8cc4146101a6578063555b37be146102305780635fcbd28514610238578063783b6d601461025c578063918e178e1461028b5780639cc0e3c714610293578063ad24dce7146102b0578063af6d1fe4146102b8578063c55dae63146102d5578063e7956f2114610117578063fdb5a03e146102dd575b600080fd5b6100c76102e5565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101035781810151838201526020016100eb565b505050509050019250505060405180910390f35b6101876004803603604081101561012d57600080fd5b810190602081018135600160201b81111561014757600080fd5b82018360208201111561015957600080fd5b803590602001918460208302840111600160201b8311171561017a57600080fd5b9193509150351515610347565b005b6101876004803603602081101561019f57600080fd5b503561034c565b610187600480360360808110156101bc57600080fd5b8135916001600160a01b036020820135169160408201359190810190608081016060820135600160201b8111156101f257600080fd5b82018360208201111561020457600080fd5b803590602001918460018302840111600160201b8311171561022557600080fd5b50909250905061034f565b6100c761056c565b6102406105cc565b604080516001600160a01b039092168252519081900360200190f35b6102796004803603602081101561027257600080fd5b50356105d1565b60408051918252519081900360200190f35b6100c76105d7565b610240600480360360208110156102a957600080fd5b50356106e8565b61024061070f565b610240600480360360208110156102ce57600080fd5b503561071e565b61024061072b565b61018761073a565b6060600380548060200260200160405190810160405280929190818152602001828054801561033d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161031f575b5050505050905090565b505050565b50565b600060608383604081101561036357600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561038d57600080fd5b82018360208201111561039f57600080fd5b803590602001918460018302840111600160201b831117156103c057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250549799509297506104329689965061041995506001600160a01b0316935061073c92505050565b6000546001600160a01b0316919063ffffffff6107b816565b60015461046690839061044d906001600160a01b031661073c565b6001546001600160a01b0316919063ffffffff6107b816565b816001600160a01b031663b61d27f68787846040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156104e25781810151838201526020016104ca565b50505050905090810190601f16801561050f5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561053057600080fd5b505af1158015610544573d6000803e3d6000fd5b50506000546105639250339150610419906001600160a01b031661073c565b50505050505050565b6060600280548060200260200160405190810160405280929190818152602001828054801561033d576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161031f575050505050905090565b600090565b50600090565b606060006060600280548060200260200160405190810160405280929190818152602001828054801561063357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610615575b50939450600093505050505b600282518161064a57fe5b048110156106e15781818151811061065e57fe5b6020026020010151925081600182845103038151811061067a57fe5b602002602001015182828151811061068e57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050828260018385510303815181106106c157fe5b6001600160a01b039092166020928302919091019091015260010161063f565b5091505090565b600381815481106106f557fe5b6000918252602090912001546001600160a01b0316905081565b6001546001600160a01b031681565b600281815481106106f557fe5b6000546001600160a01b031681565b565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b15801561078657600080fd5b505afa15801561079a573d6000803e3d6000fd5b505050506040513d60208110156107b057600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106108355780518252601f199092019160209182019101610816565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610897576040519150601f19603f3d011682016040523d82523d6000602084013e61089c565b606091505b50915091508180156108ca5750805115806108ca57508080602001905160208110156108c757600080fd5b50515b61090b576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b505050505056fea26469706673582212201c6e62c465b326314d4e97a1104ef547add20e3d5f41fd7c7fea1b0127c2f82464736f6c63430006060033";
