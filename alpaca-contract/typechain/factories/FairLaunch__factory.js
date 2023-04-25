"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairLaunch__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class FairLaunch__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_alpaca, _devaddr, _alpacaPerBlock, _startBlock, _bonusLockupBps, _bonusEndBlock, overrides) {
        return super.deploy(_alpaca, _devaddr, _alpacaPerBlock, _startBlock, _bonusLockupBps, _bonusEndBlock, overrides || {});
    }
    getDeployTransaction(_alpaca, _devaddr, _alpacaPerBlock, _startBlock, _bonusLockupBps, _bonusEndBlock, overrides) {
        return super.getDeployTransaction(_alpaca, _devaddr, _alpacaPerBlock, _startBlock, _bonusLockupBps, _bonusEndBlock, overrides || {});
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
exports.FairLaunch__factory = FairLaunch__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract AlpacaToken",
                name: "_alpaca",
                type: "address",
            },
            {
                internalType: "address",
                name: "_devaddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_alpacaPerBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_startBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_bonusLockupBps",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_bonusEndBlock",
                type: "uint256",
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
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Deposit",
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
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "EmergencyWithdraw",
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
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_stakeToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_withUpdate",
                type: "bool",
            },
        ],
        name: "addPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "alpaca",
        outputs: [
            {
                internalType: "contract AlpacaToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "alpacaPerBlock",
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
        name: "bonusEndBlock",
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
        name: "bonusLockUpBps",
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
        name: "bonusMultiplier",
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
                name: "_for",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "devaddr",
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
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "emergencyWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_lastRewardBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_currentBlock",
                type: "uint256",
            },
        ],
        name: "getMultiplier",
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
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "harvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_stakeToken",
                type: "address",
            },
        ],
        name: "isDuplicatedPool",
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
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "manualMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "massUpdatePools",
        outputs: [],
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
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "pendingAlpaca",
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
        name: "poolInfo",
        outputs: [
            {
                internalType: "address",
                name: "stakeToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lastRewardBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "accAlpacaPerShare",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "accAlpacaPerShareTilBonusEnd",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_alpacaPerBlock",
                type: "uint256",
            },
        ],
        name: "setAlpacaPerBlock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_bonusMultiplier",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_bonusEndBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_bonusLockUpBps",
                type: "uint256",
            },
        ],
        name: "setBonus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_devaddr",
                type: "address",
            },
        ],
        name: "setDev",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        name: "setPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startBlock",
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
        name: "totalAllocPoint",
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
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "updatePool",
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
                name: "",
                type: "address",
            },
        ],
        name: "userInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "rewardDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bonusDebt",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "fundedBy",
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
                name: "_for",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "withdrawAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516200272038038062002720833981810160405260c081101561003557600080fd5b508051602082015160408301516060840151608085015160a0909501519394929391929091600061006d6001600160e01b0361010c16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001805560006005819055600a55600280546001600160a01b039788166001600160a01b0319918216179091556003805496909716951694909417909455600491909155600792909255600655600b55610110565b3390565b61260080620001206000396000f3fe608060405234801561001057600080fd5b506004361061016a5760003560e01c8063081e3eda1461016f5780630efe6a8b146101895780631526fe27146101bd57806317caf6f11461020f5780631aed65531461021757806320f33d591461021f57806346ca6bea1461022757806348cd4cb1146102525780634c8f70fd1461025a57806351eb05a6146102775780635312ea8e14610294578063630b5ba1146102b1578063715018a6146102b95780637abceffd146102c15780638da5cb5b146102f55780638dbb1e3a1461031957806393f1a40b1461033c57806394443b731461039757806394faab23146103c3578063a8b973a1146103cb578063b03df69d146103d3578063b5c5f6721461040d578063cbdec1fc1461043f578063cc6dbc2714610447578063d477f05f14610473578063d49e77cd14610499578063ddc63262146104a1578063e4c5ff46146104be578063f2fde38b146104ea578063fa5be8f814610510575b600080fd5b610177610539565b60408051918252519081900360200190f35b6101bb6004803603606081101561019f57600080fd5b506001600160a01b03813516906020810135906040013561053f565b005b6101da600480360360208110156101d357600080fd5b503561078a565b604080516001600160a01b03909616865260208601949094528484019290925260608401526080830152519081900360a00190f35b6101776107d2565b6101776107d8565b6101776107de565b6101bb6004803603606081101561023d57600080fd5b508035906020810135906040013515156107e4565b6101776108bf565b6101bb6004803603602081101561027057600080fd5b50356108c5565b6101bb6004803603602081101561028d57600080fd5b503561092c565b6101bb600480360360208110156102aa57600080fd5b5035610d44565b6101bb610e9b565b6101bb610ebe565b6101bb600480360360608110156102d757600080fd5b508035906001600160a01b0360208201351690604001351515610f58565b6102fd6111b7565b604080516001600160a01b039092168252519081900360200190f35b6101776004803603604081101561032f57600080fd5b50803590602001356111c6565b6103686004803603604081101561035257600080fd5b50803590602001356001600160a01b0316611244565b604080519485526020850193909352838301919091526001600160a01b03166060830152519081900360800190f35b610177600480360360408110156103ad57600080fd5b50803590602001356001600160a01b031661127f565b6102fd6113f5565b610177611404565b6103f9600480360360208110156103e957600080fd5b50356001600160a01b031661140a565b604080519115158252519081900360200190f35b6101bb6004803603606081101561042357600080fd5b506001600160a01b038135169060208101359060400135611470565b6101776114cf565b6101bb6004803603604081101561045d57600080fd5b506001600160a01b0381351690602001356114d5565b6101bb6004803603602081101561048957600080fd5b50356001600160a01b0316611558565b6102fd6115c5565b6101bb600480360360208110156104b757600080fd5b50356115d4565b6101bb600480360360408110156104d457600080fd5b506001600160a01b0381351690602001356116c1565b6101bb6004803603602081101561050057600080fd5b50356001600160a01b0316611794565b6101bb6004803603606081101561052657600080fd5b5080359060208101359060400135611884565b60085490565b60026001541415610585576040805162461bcd60e51b815260206004820152601f60248201526000805160206124d4833981519152604482015290519081900360640190fd5b600260018190555060006008838154811061059c57fe5b600091825260208083208684526009825260408085206001600160a01b03808b168752935290932060038101546005909302909301935016156106245760038101546001600160a01b03163314610624576040805162461bcd60e51b81526020600482015260076024820152663130b21039b7b360c91b604482015290519081900360640190fd5b81546001600160a01b031661067e576040805162461bcd60e51b815260206004820152601b60248201527a19195c1bdcda5d0e881b9bdd081858d8d95c1d0819195c1bdcda5d602a1b604482015290519081900360640190fd5b6106878461092c565b80541561069857610698858561199b565b60038101546001600160a01b03166106bf576003810180546001600160a01b031916331790555b81546106dc906001600160a01b031633308663ffffffff611bf316565b80546106ee908463ffffffff611c5316565b808255600383015461071d9164e8d4a5100091610711919063ffffffff611cab16565b9063ffffffff611d0416565b6001820155600482015481546107439164e8d4a51000916107119163ffffffff611cab16565b6002820155604080518481529051859133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a3505060018055505050565b6008818154811061079757fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909185565b600a5481565b60065481565b60045481565b6107ec611d68565b6001600160a01b03166107fd6111b7565b6001600160a01b031614610846576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b61084e610e9b565b610891826108856008868154811061086257fe5b906000526020600020906005020160010154600a54611d6c90919063ffffffff16565b9063ffffffff611c5316565b600a8190555081600884815481106108a557fe5b906000526020600020906005020160010181905550505050565b600b5481565b6108cd611d68565b6001600160a01b03166108de6111b7565b6001600160a01b031614610927576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b600455565b60006008828154811061093b57fe5b906000526020600020906005020190508060020154431161095c5750610d41565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156109a657600080fd5b505afa1580156109ba573d6000803e3d6000fd5b505050506040513d60208110156109d057600080fd5b50519050806109e6575043600290910155610d41565b60006109f68360020154436111c6565b90506000610a29600a546107118660010154610a1d60045487611cab90919063ffffffff16565b9063ffffffff611cab16565b6002546003549192506001600160a01b03908116916340c10f199116610a5684600a63ffffffff611d0416565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610aa557600080fd5b505af1158015610ab9573d6000803e3d6000fd5b5050600254604080516340c10f1960e01b81523060048201526024810186905290516001600160a01b0390921693506340c10f19925060448082019260009290919082900301818387803b158015610b1057600080fd5b505af1158015610b24573d6000803e3d6000fd5b50505050610b58610b478461071164e8d4a5100085611cab90919063ffffffff16565b60038601549063ffffffff611c5316565b60038501556006544311610c0f576002546003546007546001600160a01b039283169263282d3fdf921690610b9d90620186a09061071190879063ffffffff611cab16565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610bec57600080fd5b505af1158015610c00573d6000803e3d6000fd5b50505060038501546004860155505b60065443118015610c2557506006548460020154105b15610d33576000610c5f600a546107118760010154610a1d600454610a1d600554610a1d8d60020154600654611d6c90919063ffffffff16565b6002546003546007549293506001600160a01b039182169263282d3fdf9290911690610c9590620186a090610711908790611cab565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610ce457600080fd5b505af1158015610cf8573d6000803e3d6000fd5b50505050610d2c610d1b8561071164e8d4a5100085611cab90919063ffffffff16565b60048701549063ffffffff611c5316565b6004860155505b438460020181905550505050505b50565b60026001541415610d8a576040805162461bcd60e51b815260206004820152601f60248201526000805160206124d4833981519152604482015290519081900360640190fd5b6002600181905550600060088281548110610da157fe5b600091825260208083208584526009825260408085203380875293529093206003810154600590930290930193506001600160a01b039190911614610e1b576040805162461bcd60e51b815260206004820152600b60248201526a37b7363c90333ab73232b960a91b604482015290519081900360640190fd5b80548254610e3c916001600160a01b0390911690339063ffffffff611dc916565b80546040805191825251849133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a36000808255600180830191909155600390910180546001600160a01b031916905580555050565b60085460005b81811015610eba57610eb28161092c565b600101610ea1565b5050565b610ec6611d68565b6001600160a01b0316610ed76111b7565b6001600160a01b031614610f20576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b600080546040516001600160a01b0390911690600080516020612581833981519152908390a3600080546001600160a01b0319169055565b610f60611d68565b6001600160a01b0316610f716111b7565b6001600160a01b031614610fba576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b8015610fc857610fc8610e9b565b6001600160a01b03821661101e576040805162461bcd60e51b815260206004820152601860248201527730b2321d103737ba1039ba30b5b2aa37b5b2b71030b2323960411b604482015290519081900360640190fd5b6110278261140a565b1561106f576040805162461bcd60e51b815260206004820152601360248201527206164643a207374616b65546f6b656e2064757606c1b604482015290519081900360640190fd5b6000600b54431161108257600b54611084565b435b600a5490915061109a908563ffffffff611c5316565b600a556040805160a0810182526001600160a01b039485168152602081019586529081019182526000606082018181526080830182815260088054600181018255935292517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3600590930292830180546001600160a01b031916919097161790955594517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee486015590517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee585015591517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee684015550517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee790910155565b6000546001600160a01b031690565b600060065482116111ef576005546111e890610a1d848663ffffffff611d6c16565b905061123e565b6006548310611208576111e8828463ffffffff611d6c16565b61123b61122060065484611d6c90919063ffffffff16565b610885600554610a1d87600654611d6c90919063ffffffff16565b90505b92915050565b60096020908152600092835260408084209091529082529020805460018201546002830154600390930154919290916001600160a01b031684565b6000806008848154811061128f57fe5b600091825260208083208784526009825260408085206001600160a01b0389811687529084528186206005959095029092016003810154815483516370a0823160e01b815230600482015293519298509596909590949316926370a082319260248082019391829003018186803b15801561130957600080fd5b505afa15801561131d573d6000803e3d6000fd5b505050506040513d602081101561133357600080fd5b505160028501549091504311801561134a57508015155b156113b657600061135f8560020154436111c6565b90506000611386600a546107118860010154610a1d60045487611cab90919063ffffffff16565b90506113b16113a4846107118464e8d4a5100063ffffffff611cab16565b859063ffffffff611c5316565b935050505b6113ea83600101546113de64e8d4a51000610711868860000154611cab90919063ffffffff16565b9063ffffffff611d6c16565b979650505050505050565b6002546001600160a01b031681565b60055481565b600854600090815b8181101561146457836001600160a01b03166008828154811061143157fe5b60009182526020909120600590910201546001600160a01b0316141561145c5760019250505061146b565b600101611412565b5060009150505b919050565b600260015414156114b6576040805162461bcd60e51b815260206004820152601f60248201526000805160206124d4833981519152604482015290519081900360640190fd5b60026001556114c6838383611e20565b50506001805550565b60075481565b6002600154141561151b576040805162461bcd60e51b815260206004820152601f60248201526000805160206124d4833981519152604482015290519081900360640190fd5b600260015560008181526009602090815260408083206001600160a01b03861684529091529020546115509083908390611e20565b505060018055565b6003546001600160a01b031633146115a3576040805162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b031681565b6002600154141561161a576040805162461bcd60e51b815260206004820152601f60248201526000805160206124d4833981519152604482015290519081900360640190fd5b600260018190555060006008828154811061163157fe5b600091825260208083208584526009825260408085203386529092529220600590910290910191506116628361092c565b61166c338461199b565b6003820154815461168d9164e8d4a51000916107119163ffffffff611cab16565b6001820155600482015481546116b39164e8d4a51000916107119163ffffffff611cab16565b600290910155505060018055565b6116c9611d68565b6001600160a01b03166116da6111b7565b6001600160a01b031614611723576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b60025460408051637262ffa360e11b81526001600160a01b038581166004830152602482018590529151919092169163e4c5ff4691604480830192600092919082900301818387803b15801561177857600080fd5b505af115801561178c573d6000803e3d6000fd5b505050505050565b61179c611d68565b6001600160a01b03166117ad6111b7565b6001600160a01b0316146117f6576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b6001600160a01b03811661183b5760405162461bcd60e51b81526004018080602001828103825260268152602001806124f46026913960400191505060405180910390fd5b600080546040516001600160a01b038085169392169160008051602061258183398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b61188c611d68565b6001600160a01b031661189d6111b7565b6001600160a01b0316146118e6576040805162461bcd60e51b81526020600482018190526024820152600080516020612561833981519152604482015290519081900360640190fd5b438211611938576040805162461bcd60e51b815260206004820152601b60248201527a736574426f6e75733a2062616420626f6e7573456e64426c6f636b60281b604482015290519081900360640190fd5b6001831161198d576040805162461bcd60e51b815260206004820152601d60248201527f736574426f6e75733a2062616420626f6e75734d756c7469706c696572000000604482015290519081900360640190fd5b600592909255600655600755565b6000600882815481106119aa57fe5b600091825260208083208584526009825260408085206001600160a01b03891686529092529220805460059092029092019250611a23576040805162461bcd60e51b81526020600482015260126024820152711b9bdd1a1a5b99c81d1bc81a185c9d995cdd60721b604482015290519081900360640190fd5b6000611a5182600101546113de64e8d4a5100061071187600301548760000154611cab90919063ffffffff16565b600254604080516370a0823160e01b815230600482015290519293506001600160a01b03909116916370a0823191602480820192602092909190829003018186803b158015611a9f57600080fd5b505afa158015611ab3573d6000803e3d6000fd5b505050506040513d6020811015611ac957600080fd5b5051811115611b17576040805162461bcd60e51b8152602060048201526015602482015274777466206e6f7420656e6f75676820616c7061636160581b604482015290519081900360640190fd5b6000611b4583600201546113de64e8d4a5100061071188600401548860000154611cab90919063ffffffff16565b9050611b518683611fea565b6002546007546001600160a01b039091169063282d3fdf908890611b84906127109061071190879063ffffffff611cab16565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611bd357600080fd5b505af1158015611be7573d6000803e3d6000fd5b50505050505050505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611c4d90859061220e565b50505050565b60008282018381101561123b576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b600082611cba5750600061123e565b82820282848281611cc757fe5b041461123b5760405162461bcd60e51b81526004018080602001828103825260218152602001806125406021913960400191505060405180910390fd5b6000808211611d57576040805162461bcd60e51b815260206004820152601a602482015279536166654d6174683a206469766973696f6e206279207a65726f60301b604482015290519081900360640190fd5b818381611d6057fe5b049392505050565b3390565b600082821115611dc3576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611e1b90849061220e565b505050565b600060088381548110611e2f57fe5b600091825260208083208684526009825260408085206001600160a01b03808b1687529352909320600381015460059093029093019350163314611ea8576040805162461bcd60e51b815260206004820152600b60248201526a37b7363c90333ab73232b960a91b604482015290519081900360640190fd5b8054831115611ef3576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b611efc8461092c565b611f06858561199b565b8054611f18908463ffffffff611d6c16565b8082556003830154611f3b9164e8d4a5100091610711919063ffffffff611cab16565b600182015560048201548154611f619164e8d4a51000916107119163ffffffff611cab16565b60028201558054611f7f576003810180546001600160a01b03191690555b81546001600160a01b031615611fab578154611fab906001600160a01b0316338563ffffffff611dc916565b80546040805191825251859133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a35050505050565b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561203557600080fd5b505afa158015612049573d6000803e3d6000fd5b505050506040513d602081101561205f57600080fd5b505190508082111561213f576002546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b1580156120c157600080fd5b505af11580156120d5573d6000803e3d6000fd5b505050506040513d60208110156120eb57600080fd5b505161213a576040805162461bcd60e51b81526020600482015260196024820152786661696c656420746f207472616e7366657220414c5041434160381b604482015290519081900360640190fd5b611e1b565b6002546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561219557600080fd5b505af11580156121a9573d6000803e3d6000fd5b505050506040513d60208110156121bf57600080fd5b5051611e1b576040805162461bcd60e51b81526020600482015260196024820152786661696c656420746f207472616e7366657220414c5041434160381b604482015290519081900360640190fd5b6060612263826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122bf9092919063ffffffff16565b805190915015611e1b5780806020019051602081101561228257600080fd5b5051611e1b5760405162461bcd60e51b815260040180806020018281038252602a8152602001806125a1602a913960400191505060405180910390fd5b60606122ce84846000856122d8565b90505b9392505050565b6060824710156123195760405162461bcd60e51b815260040180806020018281038252602681526020018061251a6026913960400191505060405180910390fd5b61232285612429565b612373576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106123b25780518252601f199092019160209182019101612393565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612414576040519150601f19603f3d011682016040523d82523d6000602084013e612419565b606091505b50915091506113ea82828661242f565b3b151590565b6060831561243e5750816122d1565b82511561244e5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612498578181015183820152602001612480565b50505050905090810190601f1680156124c55780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5265656e7472616e637947756172643a207265656e7472616e742063616c6c004f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122080fa773eb3e82230869ab22575ddcbb1feefffe5c1c06a9991517f1e2c2a71e664736f6c63430006060033";
