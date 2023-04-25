"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory extends contracts_1.ContractFactory {
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
exports.PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory = PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory;
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
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
        name: "okWorkers",
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
        inputs: [
            {
                internalType: "address[]",
                name: "workers",
                type: "address[]",
            },
            {
                internalType: "bool",
                name: "isOk",
                type: "bool",
            },
        ],
        name: "setWorkersOk",
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
        name: "wNative",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b506113ff806100206000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c80632d68efc914610093578063715018a6146100b75780637c5bdf49146100c15780638da5cb5b14610131578063b61d27f614610139578063c45a0155146101bc578063c4d66de8146101c4578063f2fde38b146101ea578063f887ea4014610210578063fa82647814610218575b600080fd5b61009b610252565b604080516001600160a01b039092168252519081900360200190f35b6100bf610261565b005b6100bf600480360360408110156100d757600080fd5b810190602081018135600160201b8111156100f157600080fd5b82018360208201111561010357600080fd5b803590602001918460208302840111600160201b8311171561012457600080fd5b91935091503515156102f1565b61009b6103a4565b6100bf6004803603606081101561014f57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561017e57600080fd5b82018360208201111561019057600080fd5b803590602001918460018302840111600160201b831117156101b157600080fd5b5090925090506103b3565b61009b6108d8565b6100bf600480360360208110156101da57600080fd5b50356001600160a01b03166108e7565b6100bf6004803603602081101561020057600080fd5b50356001600160a01b0316610aae565b61009b610b95565b61023e6004803603602081101561022e57600080fd5b50356001600160a01b0316610ba4565b604080519115158252519081900360200190f35b60cb546001600160a01b031681565b610269610bb9565b6065546001600160a01b039081169116146102b9576040805162461bcd60e51b8152602060048201819052602482015260008051602061128e833981519152604482015290519081900360640190fd5b6065546040516000916001600160a01b0316906000805160206112ae833981519152908390a3606580546001600160a01b0319169055565b6102f9610bb9565b6065546001600160a01b03908116911614610349576040805162461bcd60e51b8152602060048201819052602482015260008051602061128e833981519152604482015290519081900360640190fd5b60005b8281101561039e578160cc600086868581811061036557fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff191691151591909117905560010161034c565b50505050565b6065546001600160a01b031690565b33600090815260cc602052604090205460ff166104015760405162461bcd60e51b815260040180806020018281038252605f81526020018061136b605f913960600191505060405180910390fd5b60975460ff16610458576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6097805460ff1916905560008282602081101561047457600080fd5b506040805163c55dae6360e01b81529051913592503391600091839163c55dae6391600480820192602092909190829003018186803b1580156104b657600080fd5b505afa1580156104ca573d6000803e3d6000fd5b505050506040513d60208110156104e057600080fd5b50516040805163ad24dce760e01b815290519192506000916001600160a01b0385169163ad24dce7916004808301926020929190829003018186803b15801561052857600080fd5b505afa15801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b505160ca54909150610579906001600160a01b03848116911660001963ffffffff610bbd16565b600061058d836001600160a01b0316610d16565b905060ca60009054906101000a90046001600160a01b03166001600160a01b03166338ed1739826000876001600160a01b031663555b37be6040518163ffffffff1660e01b815260040160006040518083038186803b1580156105ef57600080fd5b505afa158015610603573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561062c57600080fd5b8101908080516040519392919084600160201b82111561064b57600080fd5b90830190602082018581111561066057600080fd5b82518660208202830111600160201b8211171561067c57600080fd5b82525081516020918201928201910280838360005b838110156106a9578181015183820152602001610691565b5050505090500160405250505030426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b83811015610731578181015183820152602001610719565b505050509050019650505050505050600060405180830381600087803b15801561075a57600080fd5b505af115801561076e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561079757600080fd5b8101908080516040519392919084600160201b8211156107b657600080fd5b9083019060208201858111156107cb57600080fd5b82518660208202830111600160201b821117156107e757600080fd5b82525081516020918201928201910280838360005b838110156108145781810151838201526020016107fc565b505050509050016040525050505084610835836001600160a01b0316610d16565b10156108725760405162461bcd60e51b815260040180806020018281038252606f8152602001806112fc606f913960800191505060405180910390fd5b61089f33610888846001600160a01b0316610d16565b6001600160a01b038516919063ffffffff610d9216565b60ca546108c0906001600160a01b038581169116600063ffffffff610bbd16565b50506097805460ff1916600117905550505050505050565b60c9546001600160a01b031681565b600054610100900460ff16806109005750610900610ee5565b8061090e575060005460ff16155b6109495760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff16158015610974576000805460ff1961ff0019909116610100171660011790555b61097c610eeb565b610984610f9d565b816001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b1580156109bd57600080fd5b505afa1580156109d1573d6000803e3d6000fd5b505050506040513d60208110156109e757600080fd5b505160c980546001600160a01b039283166001600160a01b03199182161790915560ca80549285169290911682179055604080516315ab88c960e31b8152905163ad5c464891600480820192602092909190829003018186803b158015610a4d57600080fd5b505afa158015610a61573d6000803e3d6000fd5b505050506040513d6020811015610a7757600080fd5b505160cb80546001600160a01b0319166001600160a01b039092169190911790558015610aaa576000805461ff00191690555b5050565b610ab6610bb9565b6065546001600160a01b03908116911614610b06576040805162461bcd60e51b8152602060048201819052602482015260008051602061128e833981519152604482015290519081900360640190fd5b6001600160a01b038116610b4b5760405162461bcd60e51b81526004018080602001828103825260268152602001806112686026913960400191505060405180910390fd5b6065546040516001600160a01b038084169216906000805160206112ae83398151915290600090a3606580546001600160a01b0319166001600160a01b0392909216919091179055565b60ca546001600160a01b031681565b60cc6020526000908152604090205460ff1681565b3390565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310610c3a5780518252601f199092019160209182019101610c1b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610c9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ca1565b606091505b5091509150818015610ccf575080511580610ccf5750808060200190516020811015610ccc57600080fd5b50515b610d0f576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610d6057600080fd5b505afa158015610d74573d6000803e3d6000fd5b505050506040513d6020811015610d8a57600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610e0f5780518252601f199092019160209182019101610df0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610e71576040519150601f19603f3d011682016040523d82523d6000602084013e610e76565b606091505b5091509150818015610ea4575080511580610ea45750808060200190516020811015610ea157600080fd5b50515b610d0f576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b303b1590565b600054610100900460ff1680610f045750610f04610ee5565b80610f12575060005460ff16155b610f4d5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff16158015610f78576000805460ff1961ff0019909116610100171660011790555b610f80611032565b610f886110d2565b8015610f9a576000805461ff00191690555b50565b600054610100900460ff1680610fb65750610fb6610ee5565b80610fc4575060005460ff16155b610fff5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff1615801561102a576000805460ff1961ff0019909116610100171660011790555b610f886111b9565b600054610100900460ff168061104b575061104b610ee5565b80611059575060005460ff16155b6110945760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff16158015610f88576000805460ff1961ff0019909116610100171660011790558015610f9a576000805461ff001916905550565b600054610100900460ff16806110eb57506110eb610ee5565b806110f9575060005460ff16155b6111345760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff1615801561115f576000805460ff1961ff0019909116610100171660011790555b6000611169610bb9565b606580546001600160a01b0319166001600160a01b038316908117909155604051919250906000906000805160206112ae833981519152908290a3508015610f9a576000805461ff001916905550565b600054610100900460ff16806111d257506111d2610ee5565b806111e0575060005460ff16155b61121b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112ce602e913960400191505060405180910390fd5b600054610100900460ff16158015611246576000805460ff1961ff0019909116610100171660011790555b6097805460ff191660011790558015610f9a576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656450616e63616b657377617056325265737472696374656453696e676c654173736574537472617465677941646442617365546f6b656e4f6e6c793a3a657865637574653a3a20696e73756666696369656e74206661726d696e67546f6b656e20616d6f756e7420726563656976656450616e63616b657377617056325265737472696374656453696e676c654173736574537472617465677941646442617365546f6b656e4f6e6c793a3a6f6e6c7957686974656c6973746564576f726b6572733a3a2062616420776f726b6572a26469706673582212202d251dbbc4d6667dbc8ffe12b7c62a440508176f624eaf5b7297a0bfe990f36864736f6c63430006060033";