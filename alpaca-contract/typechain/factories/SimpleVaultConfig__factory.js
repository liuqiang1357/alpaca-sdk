"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleVaultConfig__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class SimpleVaultConfig__factory extends contracts_1.ContractFactory {
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
exports.SimpleVaultConfig__factory = SimpleVaultConfig__factory;
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
        inputs: [
            {
                internalType: "address",
                name: "worker",
                type: "address",
            },
        ],
        name: "acceptDebt",
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
                name: "",
                type: "address",
            },
        ],
        name: "approvedAddStrategies",
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
        name: "getFairLaunchAddr",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getInterestRate",
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
        name: "getKillBps",
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
        name: "getKillTreasuryBps",
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
        name: "getReservePoolBps",
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
        name: "getTreasuryAddr",
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
        name: "getWNativeRelayer",
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
        name: "getWrappedNativeAddr",
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
                name: "_minDebtSize",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_interestRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_reservePoolBps",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_killBps",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_getWrappedNativeAddr",
                type: "address",
            },
            {
                internalType: "address",
                name: "_getWNativeRelayer",
                type: "address",
            },
            {
                internalType: "address",
                name: "_getFairLaunchAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_getKillTreasuryBps",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_treasury",
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
        name: "interestRate",
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
                name: "worker",
                type: "address",
            },
        ],
        name: "isWorker",
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
                name: "worker",
                type: "address",
            },
        ],
        name: "isWorkerReserveConsistent",
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
                name: "worker",
                type: "address",
            },
        ],
        name: "isWorkerStable",
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
                name: "worker",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "killFactor",
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
        name: "minDebtSize",
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
                internalType: "address",
                name: "worker",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "rawKillFactor",
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
                internalType: "address[]",
                name: "addStrats",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "ok",
                type: "bool",
            },
        ],
        name: "setApprovedAddStrategy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_minDebtSize",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_interestRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_reservePoolBps",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_killBps",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_getWrappedNativeAddr",
                type: "address",
            },
            {
                internalType: "address",
                name: "_getWNativeRelayer",
                type: "address",
            },
            {
                internalType: "address",
                name: "_getFairLaunchAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_getKillTreasuryBps",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_treasury",
                type: "address",
            },
        ],
        name: "setParams",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "callers",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "ok",
                type: "bool",
            },
        ],
        name: "setWhitelistedCallers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "callers",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "ok",
                type: "bool",
            },
        ],
        name: "setWhitelistedLiquidators",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "worker",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_isWorker",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "_acceptDebt",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "_workFactor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_killFactor",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_isStable",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "_isReserveConsistent",
                type: "bool",
            },
        ],
        name: "setWorker",
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
    {
        inputs: [],
        name: "treasury",
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
                name: "",
                type: "address",
            },
        ],
        name: "whitelistedCallers",
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
                name: "",
                type: "address",
            },
        ],
        name: "whitelistedLiquidators",
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
                name: "worker",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "workFactor",
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
        name: "workers",
        outputs: [
            {
                internalType: "bool",
                name: "isWorker",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "acceptDebt",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "workFactor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "killFactor",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "isStable",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "isReserveConsistent",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611392806100206000396000f3fe608060405234801561001057600080fd5b50600436106101745760003560e01c80620237f014610179578063044d6d6f146101b357806304df1f5e146101d757806309956f66146101f15780631246144b146101f957806313f6321b1461025b57806314735d8a146102875780631bb8c61d146102f7578063205eea7714610367578063238d19ed146103d757806328ae433e146103fd5780634048a257146104055780634f69476a1461025b57806361d027b314610464578063715018a61461046c5780637c3a00fd14610474578063862602431461047c5780638da5cb5b146104dc57806398cb0614146104e4578063aa1566451461050a578063ad58e57314610530578063bb6a0e041461055c578063bfbbd53f14610582578063c6dfa13f1461058a578063d1783fa8146105ad578063d9ed3def146105b5578063e1ed4286146105db578063ec1d9e8e146105e3578063ef3bac5e14610635578063f2fde38b1461063d578063ffc97ce914610663575b600080fd5b61019f6004803603602081101561018f57600080fd5b50356001600160a01b0316610689565b604080519115158252519081900360200190f35b6101bb610704565b604080516001600160a01b039092168252519081900360200190f35b6101df610744565b60408051918252519081900360200190f35b6101df61074a565b610259600480360361012081101561021057600080fd5b508035906020810135906040810135906060810135906001600160a01b03608082013581169160a081013582169160c082013581169160e0810135916101009091013516610750565b005b6101df6004803603604081101561027157600080fd5b506001600160a01b038135169060200135610814565b6102596004803603604081101561029d57600080fd5b810190602081018135600160201b8111156102b757600080fd5b8201836020820111156102c957600080fd5b803590602001918460208302840111600160201b831117156102ea57600080fd5b919350915035151561088b565b6102596004803603604081101561030d57600080fd5b810190602081018135600160201b81111561032757600080fd5b82018360208201111561033957600080fd5b803590602001918460208302840111600160201b8311171561035a57600080fd5b919350915035151561093e565b6102596004803603604081101561037d57600080fd5b810190602081018135600160201b81111561039757600080fd5b8201836020820111156103a957600080fd5b803590602001918460208302840111600160201b831117156103ca57600080fd5b91935091503515156109eb565b61019f600480360360208110156103ed57600080fd5b50356001600160a01b0316610a98565b6101df610aad565b61042b6004803603602081101561041b57600080fd5b50356001600160a01b0316610ab3565b604080519615158752941515602087015285850193909352606085019190915215156080840152151560a0830152519081900360c00190f35b6101bb610af0565b610259610aff565b6101df610b8f565b610259600480360361012081101561049357600080fd5b508035906020810135906040810135906060810135906001600160a01b03608082013581169160a081013582169160c082013581169160e0810135916101009091013516610b95565b6101bb610c5b565b61019f600480360360208110156104fa57600080fd5b50356001600160a01b0316610c6a565b61019f6004803603602081101561052057600080fd5b50356001600160a01b0316610ce3565b6101df6004803603604081101561054657600080fd5b506001600160a01b038135169060200135610d01565b61019f6004803603602081101561057257600080fd5b50356001600160a01b0316610d78565b6101bb610d9e565b6101df600480360360408110156105a057600080fd5b5080359060200135610dad565b6101bb610db5565b61019f600480360360208110156105cb57600080fd5b50356001600160a01b0316610dc4565b6101df610dd9565b610259600480360360e08110156105f957600080fd5b506001600160a01b03813516906020810135151590604081013515159060608101359060808101359060a081013515159060c001351515610ddf565b6101bb610eda565b6102596004803603602081101561065357600080fd5b50356001600160a01b0316610ee9565b61019f6004803603602081101561067957600080fd5b50356001600160a01b0316610fd0565b6001600160a01b0381166000908152609b602052604081205460ff166106e05760405162461bcd60e51b815260040180806020018281038252602781526020018061130b6027913960400191505060405180910390fd5b506001600160a01b03166000908152609b6020526040902054610100900460ff1690565b60a1546000906001600160a01b0316156107295760a1546001600160a01b031661073f565b73c44f82b07ab3e691f826951a6e335e1bc1bb0b515b905090565b60a05481565b60995481565b600054610100900460ff16806107695750610769610fe5565b80610777575060005460ff16155b6107b25760405162461bcd60e51b815260040180806020018281038252602e8152602001806112dd602e913960400191505060405180910390fd5b600054610100900460ff161580156107dd576000805460ff1961ff0019909116610100171660011790555b6107e5610feb565b6107f68a8a8a8a8a8a8a8a8a610b95565b8015610808576000805461ff00191690555b50505050505050505050565b6001600160a01b0382166000908152609b602052604081205460ff1661086b5760405162461bcd60e51b81526004018080602001828103825260278152602001806112766027913960400191505060405180910390fd5b50506001600160a01b03166000908152609b602052604090206002015490565b61089361109d565b6065546001600160a01b039081169116146108e3576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b60005b82811015610938578160a260008686858181106108ff57fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff19169115159190911790556001016108e6565b50505050565b61094661109d565b6065546001600160a01b03908116911614610996576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b60005b828110156109385781609f60008686858181106109b257fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff1916911515919091179055600101610999565b6109f361109d565b6065546001600160a01b03908116911614610a43576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b60005b82811015610938578160a36000868685818110610a5f57fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff1916911515919091179055600101610a46565b60a26020526000908152604090205460ff1681565b609a5481565b609b60205260009081526040902080546001820154600283015460039093015460ff80841694610100948590048216949092808316929190041686565b60a1546001600160a01b031681565b610b0761109d565b6065546001600160a01b03908116911614610b57576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b6065546040516000916001600160a01b0316906000805160206112bd833981519152908390a3606580546001600160a01b0319169055565b60985481565b610b9d61109d565b6065546001600160a01b03908116911614610bed576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b609798909855609896909655609994909455609a92909255609c80546001600160a01b03199081166001600160a01b0393841617909155609d8054821693831693909317909255609e805483169382169390931790925560a09290925560a180549092169216919091179055565b6065546001600160a01b031690565b6001600160a01b0381166000908152609b602052604081205460ff16610cc15760405162461bcd60e51b815260040180806020018281038252602b815260200180611332602b913960400191505060405180910390fd5b506001600160a01b03166000908152609b602052604090206003015460ff1690565b6001600160a01b03166000908152609b602052604090205460ff1690565b6001600160a01b0382166000908152609b602052604081205460ff16610d585760405162461bcd60e51b81526004018080602001828103825260278152602001806112296027913960400191505060405180910390fd5b50506001600160a01b03166000908152609b602052604090206001015490565b6001600160a01b03166000908152609b6020526040902060030154610100900460ff1690565b609e546001600160a01b031681565b505060985490565b609d546001600160a01b031681565b60a36020526000908152604090205460ff1681565b60975481565b610de761109d565b6065546001600160a01b03908116911614610e37576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b6040805160c08101825296151587529415156020808801918252878701958652606088019485529215156080880190815291151560a088019081526001600160a01b039098166000908152609b90935294909120945185549451151561010090810261ff001992151560ff199788161783161787559351600187015591516002860155516003909401805495511515909202931515949092169390931716179055565b609c546001600160a01b031681565b610ef161109d565b6065546001600160a01b03908116911614610f41576040805162461bcd60e51b8152602060048201819052602482015260008051602061129d833981519152604482015290519081900360640190fd5b6001600160a01b038116610f865760405162461bcd60e51b81526004018080602001828103825260268152602001806112506026913960400191505060405180910390fd5b6065546040516001600160a01b038084169216906000805160206112bd83398151915290600090a3606580546001600160a01b0319166001600160a01b0392909216919091179055565b609f6020526000908152604090205460ff1681565b303b1590565b600054610100900460ff16806110045750611004610fe5565b80611012575060005460ff16155b61104d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112dd602e913960400191505060405180910390fd5b600054610100900460ff16158015611078576000805460ff1961ff0019909116610100171660011790555b6110806110a1565b611088611141565b801561109a576000805461ff00191690555b50565b3390565b600054610100900460ff16806110ba57506110ba610fe5565b806110c8575060005460ff16155b6111035760405162461bcd60e51b815260040180806020018281038252602e8152602001806112dd602e913960400191505060405180910390fd5b600054610100900460ff16158015611088576000805460ff1961ff001990911661010017166001179055801561109a576000805461ff001916905550565b600054610100900460ff168061115a575061115a610fe5565b80611168575060005460ff16155b6111a35760405162461bcd60e51b815260040180806020018281038252602e8152602001806112dd602e913960400191505060405180910390fd5b600054610100900460ff161580156111ce576000805460ff1961ff0019909116610100171660011790555b60006111d861109d565b606580546001600160a01b0319166001600160a01b038316908117909155604051919250906000906000805160206112bd833981519152908290a350801561109a576000805461ff00191690555056fe53696d706c655661756c74436f6e6669673a3a776f726b466163746f723a3a2021776f726b65724f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737353696d706c655661756c74436f6e6669673a3a6b696c6c466163746f723a3a2021776f726b65724f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656453696d706c655661756c74436f6e6669673a3a616363657074446562743a3a2021776f726b657253696d706c655661756c74436f6e6669673a3a6973576f726b6572537461626c653a3a2021776f726b6572a26469706673582212207aa9a705c6fb28f6dde6c7337535bf804d21780065f8236f57710638c8ef4b8f64736f6c63430006060033";