"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeswapV2StrategyWithdrawMinimizeTrading__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class PancakeswapV2StrategyWithdrawMinimizeTrading__factory extends contracts_1.ContractFactory {
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
exports.PancakeswapV2StrategyWithdrawMinimizeTrading__factory = PancakeswapV2StrategyWithdrawMinimizeTrading__factory;
const _abi = [
    {
        inputs: [
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
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IPancakeFactory",
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
                internalType: "contract IPancakeRouter02",
                name: "_router",
                type: "address",
            },
            {
                internalType: "contract IWETH",
                name: "_wbnb",
                type: "address",
            },
            {
                internalType: "contract IWNativeRelayer",
                name: "_wNativeRelayer",
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
        name: "router",
        outputs: [
            {
                internalType: "contract IPancakeRouter02",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "wNativeRelayer",
        outputs: [
            {
                internalType: "contract IWNativeRelayer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "wbnb",
        outputs: [
            {
                internalType: "contract IWETH",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611287806100206000396000f3fe6080604052600436106100595760003560e01c80638d72647e14610065578063b61d27f614610096578063c0c53b8b14610128578063c45a01551461016d578063d13a35e614610182578063f887ea401461019757610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a6101ac565b604080516001600160a01b039092168252519081900360200190f35b3480156100a257600080fd5b50610126600480360360608110156100b957600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156100e857600080fd5b8201836020820111156100fa57600080fd5b803590602001918460018302840111600160201b8311171561011b57600080fd5b5090925090506101bb565b005b34801561013457600080fd5b506101266004803603606081101561014b57600080fd5b506001600160a01b03813581169160208101358216916040909101351661092f565b34801561017957600080fd5b5061007a610a88565b34801561018e57600080fd5b5061007a610a97565b3480156101a357600080fd5b5061007a610aa6565b6067546001600160a01b031681565b60335460ff16610212576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6033805460ff19169055600080808484606081101561023057600080fd5b506065546040805163e6a4390560e01b81526020808501356001600160a01b039081166004840181905286358216602485018190528551909a5090985093909501359550600094939093169263e6a4390592604480840193829003018186803b15801561029c57600080fd5b505afa1580156102b0573d6000803e3d6000fd5b505050506040513d60208110156102c657600080fd5b50516066546040805163095ea7b360e01b81526001600160a01b039283166004820152600019602482015290519293509083169163095ea7b3916044808201926020929091908290030181600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b505050506040513d602081101561034c57600080fd5b50516103895760405162461bcd60e51b81526004018080602001828103825260528152602001806112006052913960600191505060405180910390fd5b6066546103ab906001600160a01b03858116911660001963ffffffff610ab516565b606654604080516370a0823160e01b815230600482015290516001600160a01b039283169263baa2abde92889288928716916370a08231916024808301926020929190829003018186803b15801561040257600080fd5b505afa158015610416573d6000803e3d6000fd5b505050506040513d602081101561042c57600080fd5b5051604080516001600160e01b031960e087901b1681526001600160a01b0394851660048201529290931660248301526044820152600060648201819052608482018190523060a48301524260c4830152825160e480840194939192918390030190829087803b15801561049f57600080fd5b505af11580156104b3573d6000803e3d6000fd5b505050506040513d60408110156104c957600080fd5b5050604080516002808252606080830184529260208301908036833701905050905083816000815181106104f957fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061052757fe5b6001600160a01b03928316602091820292909201015260009061054b908716610c0e565b9050808911156106fb5760006105678a8363ffffffff610c8a16565b6066549091506001600160a01b0390811690638803dbee90839061058c908a16610c0e565b8630426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156106085781810151838201526020016105f0565b505050509050019650505050505050600060405180830381600087803b15801561063157600080fd5b505af1158015610645573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561066e57600080fd5b8101908080516040519392919084600160201b82111561068d57600080fd5b9083019060208201858111156106a257600080fd5b82518660208202830111600160201b821117156106be57600080fd5b82525081516020918201928201910280838360005b838110156106eb5781810151838201526020016106d3565b5050505090500160405250505050505b600061070f876001600160a01b0316610c0e565b905061072b6001600160a01b038816338363ffffffff610cd316565b600061073f876001600160a01b0316610c0e565b9050858110156107805760405162461bcd60e51b815260040180806020018281038252605c81526020018061111d605c913960600191505060405180910390fd5b8015610833576067546001600160a01b0388811691161415610828576068546107b49088906001600160a01b031683610cd3565b60685460408051632e1a7d4d60e01b81526004810184905290516001600160a01b0390921691632e1a7d4d9160248082019260009290919082900301818387803b15801561080157600080fd5b505af1158015610815573d6000803e3d6000fd5b505050506108238c82610e26565b610833565b610833878d83610cd3565b6066546040805163095ea7b360e01b81526001600160a01b03928316600482015260006024820181905291519288169263095ea7b392604480840193602093929083900390910190829087803b15801561088c57600080fd5b505af11580156108a0573d6000803e3d6000fd5b505050506040513d60208110156108b657600080fd5b50516108f35760405162461bcd60e51b81526004018080602001828103825260598152602001806111a76059913960600191505060405180910390fd5b606654610914906001600160a01b038981169116600063ffffffff610ab516565b50506033805460ff1916600117905550505050505050505050565b600054610100900460ff16806109485750610948610f27565b80610956575060005460ff16155b6109915760405162461bcd60e51b815260040180806020018281038252602e815260200180611179602e913960400191505060405180910390fd5b600054610100900460ff161580156109bc576000805460ff1961ff0019909116610100171660011790555b6109c4610f2d565b836001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b1580156109fd57600080fd5b505afa158015610a11573d6000803e3d6000fd5b505050506040513d6020811015610a2757600080fd5b5051606580546001600160a01b03199081166001600160a01b0393841617909155606680548216878416179055606780548216868416179055606880549091169184169190911790558015610a82576000805461ff00191690555b50505050565b6065546001600160a01b031681565b6068546001600160a01b031681565b6066546001600160a01b031681565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310610b325780518252601f199092019160209182019101610b13565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b94576040519150601f19603f3d011682016040523d82523d6000602084013e610b99565b606091505b5091509150818015610bc7575080511580610bc75750808060200190516020811015610bc457600080fd5b50515b610c07576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610c5857600080fd5b505afa158015610c6c573d6000803e3d6000fd5b505050506040513d6020811015610c8257600080fd5b505192915050565b6000610ccc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610fd7565b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610d505780518252601f199092019160209182019101610d31565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610db2576040519150601f19603f3d011682016040523d82523d6000602084013e610db7565b606091505b5091509150818015610de5575080511580610de55750808060200190516020811015610de257600080fd5b50515b610c07576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b60208310610e725780518252601f199092019160209182019101610e53565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610ed4576040519150601f19603f3d011682016040523d82523d6000602084013e610ed9565b606091505b5050905080610f22576040805162461bcd60e51b815260206004820152601060248201526f042e6c2cccaa8e4c2dce6cccae48aa8960831b604482015290519081900360640190fd5b505050565b303b1590565b600054610100900460ff1680610f465750610f46610f27565b80610f54575060005460ff16155b610f8f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611179602e913960400191505060405180910390fd5b600054610100900460ff16158015610fba576000805460ff1961ff0019909116610100171660011790555b610fc261106e565b8015610fd4576000805461ff00191690555b50565b600081848411156110665760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561102b578181015183820152602001611013565b50505050905090810190601f1680156110585780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600054610100900460ff16806110875750611087610f27565b80611095575060005460ff16155b6110d05760405162461bcd60e51b815260040180806020018281038252602e815260200180611179602e913960400191505060405180910390fd5b600054610100900460ff161580156110fb576000805460ff1961ff0019909116610100171660011790555b6033805460ff191660011790558015610fd4576000805461ff00191690555056fe50616e63616b65737761705632537472617465677957697468647261774d696e696d697a6554726164696e673a3a657865637574653a3a20696e73756666696369656e74206661726d696e6720746f6b656e73207265636569766564436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656450616e63616b65737761705632537472617465677957697468647261774d696e696d697a6554726164696e673a3a657865637574653a3a20756e61626c6520746f207265736574206c7020746f6b656e20617070726f76616c50616e63616b65737761705632537472617465677957697468647261774d696e696d697a6554726164696e673a3a657865637574653a3a206661696c656420746f20617070726f7665204c5020746f6b656ea264697066735822122042805f9dde8d4731386aa7a86e3f4178c2c3b506c995d2870a11ea9fb8e3772164736f6c63430006060033";
