"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdexRestrictedStrategyAddTwoSidesOptimal__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MdexRestrictedStrategyAddTwoSidesOptimal__factory extends contracts_1.ContractFactory {
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
exports.MdexRestrictedStrategyAddTwoSidesOptimal__factory = MdexRestrictedStrategyAddTwoSidesOptimal__factory;
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "worker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isOk",
                type: "bool",
            },
        ],
        name: "SetWorkerOk",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "caller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "WithdrawTradingRewards",
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
                internalType: "contract IMdexFactory",
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
                internalType: "uint256[]",
                name: "pIds",
                type: "uint256[]",
            },
        ],
        name: "getMiningRewards",
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
                internalType: "contract IMdexRouter",
                name: "_router",
                type: "address",
            },
            {
                internalType: "contract IVault",
                name: "_vault",
                type: "address",
            },
            {
                internalType: "address",
                name: "_mdx",
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
        name: "mdx",
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
                internalType: "contract IMdexRouter",
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
        name: "vault",
        outputs: [
            {
                internalType: "contract IVault",
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
                name: "to",
                type: "address",
            },
        ],
        name: "withdrawTradingRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506120e9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c80635672ab55146100b457806368646601146100d8578063715018a6146101005780637c5bdf49146101085780638da5cb5b14610178578063b61d27f614610180578063c0c53b8b14610203578063c45a01551461023b578063e635ff7f14610243578063f2fde38b146102c3578063f887ea40146102e9578063fa826478146102f1578063fbfa77cf1461032b575b600080fd5b6100bc610333565b604080516001600160a01b039092168252519081900360200190f35b6100fe600480360360208110156100ee57600080fd5b50356001600160a01b0316610342565b005b6100fe61051b565b6100fe6004803603604081101561011e57600080fd5b810190602081018135600160201b81111561013857600080fd5b82018360208201111561014a57600080fd5b803590602001918460208302840111600160201b8311171561016b57600080fd5b91935091503515156105ab565b6100bc6106ba565b6100fe6004803603606081101561019657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156101c557600080fd5b8201836020820111156101d757600080fd5b803590602001918460018302840111600160201b831117156101f857600080fd5b5090925090506106c9565b6100fe6004803603606081101561021957600080fd5b506001600160a01b038135811691602081013582169160409091013516610f90565b6100bc6110f0565b6102b16004803603602081101561025957600080fd5b810190602081018135600160201b81111561027357600080fd5b82018360208201111561028557600080fd5b803590602001918460208302840111600160201b831117156102a657600080fd5b5090925090506110ff565b60408051918252519081900360200190f35b6100fe600480360360208110156102d957600080fd5b50356001600160a01b0316611235565b6100bc61131c565b6103176004803603602081101561030757600080fd5b50356001600160a01b031661132b565b604080519115158252519081900360200190f35b6100bc611340565b60cb546001600160a01b031681565b61034a61134f565b6065546001600160a01b0390811691161461039a576040805162461bcd60e51b81526020600482018190526024820152600080516020611ff3833981519152604482015290519081900360640190fd5b60cb546000906103b2906001600160a01b0316611353565b905060ca60009054906101000a90046001600160a01b03166001600160a01b0316634e5eda116040518163ffffffff1660e01b815260040160206040518083038186803b15801561040257600080fd5b505afa158015610416573d6000803e3d6000fd5b505050506040513d602081101561042c57600080fd5b505160408051635c396e8760e11b815290516001600160a01b039092169163b872dd0e9160048082019260009290919082900301818387803b15801561047157600080fd5b505af1158015610485573d6000803e3d6000fd5b505060cb54600092506104b3915083906104a7906001600160a01b0316611353565b9063ffffffff6113d116565b60cb549091506104d3906001600160a01b0316848363ffffffff61141a16565b604080516001600160a01b038516815260208101839052815133927fd0173ead42278d1aee1773625dc73198c4780fd70b86cf8f3f0cf7dd7336905b928290030190a2505050565b61052361134f565b6065546001600160a01b03908116911614610573576040805162461bcd60e51b81526020600482018190526024820152600080516020611ff3833981519152604482015290519081900360640190fd5b6065546040516000916001600160a01b031690600080516020612013833981519152908390a3606580546001600160a01b0319169055565b6105b361134f565b6065546001600160a01b03908116911614610603576040805162461bcd60e51b81526020600482018190526024820152600080516020611ff3833981519152604482015290519081900360640190fd5b60005b828110156106b4578160cd600086868581811061061f57fe5b602090810292909201356001600160a01b0316835250810191909152604001600020805460ff1916911515919091179055337fc1f5c543a36e7fce4feae5d89dc1c3f47a3be58369b8029f2c7765ce3db8dff785858481811061067e57fe5b60408051602092830294909401356001600160a01b031684528715159184019190915280519283900301919050a2600101610606565b50505050565b6065546001600160a01b031690565b33600090815260cd602052604090205460ff166107175760405162461bcd60e51b815260040180806020018281038252604d815260200180611f85604d913960600191505060405180910390fd5b60975460ff1661076e576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6097805460ff191690556000808383604081101561078b57600080fd5b506040805163c55dae6360e01b815290518235945060209283013593503392600092849263c55dae6392600480840193919291829003018186803b1580156107d257600080fd5b505afa1580156107e6573d6000803e3d6000fd5b505050506040513d60208110156107fc57600080fd5b50516040805163ad24dce760e01b815290519192506000916001600160a01b0385169163ad24dce7916004808301926020929190829003018186803b15801561084457600080fd5b505afa158015610858573d6000803e3d6000fd5b505050506040513d602081101561086e57600080fd5b505160c9546040805163e6a4390560e01b81526001600160a01b03808516600483015286811660248301529151939450600093919092169163e6a43905916044808301926020929190829003018186803b1580156108cb57600080fd5b505afa1580156108df573d6000803e3d6000fd5b505050506040513d60208110156108f557600080fd5b505160ca5490915061091c906001600160a01b03858116911660001963ffffffff61157416565b60ca5461093e906001600160a01b03848116911660001963ffffffff61157416565b60cc54604080516324a3335b60e11b81526001600160a01b038581166004830152602482018a90529151919092169163494666b691604480830192600092919082900301818387803b15801561099357600080fd5b505af11580156109a7573d6000803e3d6000fd5b5050505060006109bf846001600160a01b0316611353565b9050600080600080856001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610a0057600080fd5b505afa158015610a14573d6000803e3d6000fd5b505050506040513d6060811015610a2a57600080fd5b50805160209182015160408051630dfe168160e01b815290516001600160701b03938416965092909116935060009283926001600160a01b03808e1693908c1692630dfe168192600480840193829003018186803b158015610a8b57600080fd5b505afa158015610a9f573d6000803e3d6000fd5b505050506040513d6020811015610ab557600080fd5b50516001600160a01b031614610acc578284610acf565b83835b60c95460408051634c2fc06f60e01b81526001600160a01b038d811660048301529151949650929450600093911691634c2fc06f916024808301926020929190829003018186803b158015610b2357600080fd5b505afa158015610b37573d6000803e3d6000fd5b505050506040513d6020811015610b4d57600080fd5b50519050610b6f88610b676001600160a01b038d16611353565b8585856116c6565b9097509550606094506002935060009250610b88915050565b50604051908082528060200260200182016040528015610bb2578160200160208202803683370190505b50905081610bc1578686610bc4565b85875b82600081518110610bd157fe5b6020026020010183600181518110610be557fe5b6001600160a01b039384166020918202929092010152911690528215610d7d5760ca546040516338ed173960e01b8152600481018581526000602483018190523060648401819052426084850181905260a060448601908152875160a487015287516001600160a01b03909716966338ed1739968b968a9594939092909160c40190602080880191028083838b5b83811015610c8b578181015183820152602001610c73565b505050509050019650505050505050600060405180830381600087803b158015610cb457600080fd5b505af1158015610cc8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610cf157600080fd5b8101908080516040519392919084600160201b821115610d1057600080fd5b908301906020820185811115610d2557600080fd5b82518660208202830111600160201b82111715610d4157600080fd5b82525081516020918201928201910280838360005b83811015610d6e578181015183820152602001610d56565b50505050905001604052505050505b60ca546000906001600160a01b039081169063e8e33700908a908a90610da4908316611353565b610db68c6001600160a01b0316611353565b604080516001600160e01b031960e088901b1681526001600160a01b0395861660048201529390941660248401526044830191909152606482015260006084820181905260a482018190523060c48301524260e483015291516101048083019360609383900390910190829087803b158015610e3157600080fd5b505af1158015610e45573d6000803e3d6000fd5b505050506040513d6060811015610e5b57600080fd5b5060400151905089811015610ea15760405162461bcd60e51b81526004018080602001828103825260538152602001806120616053913960600191505060405180910390fd5b604080516370a0823160e01b81523060048201529051610f309133916001600160a01b038a16916370a08231916024808301926020929190829003018186803b158015610eed57600080fd5b505afa158015610f01573d6000803e3d6000fd5b505050506040513d6020811015610f1757600080fd5b50516001600160a01b038916919063ffffffff61141a16565b60ca54610f51906001600160a01b038981169116600063ffffffff61157416565b60ca54610f72906001600160a01b038a81169116600063ffffffff61157416565b50506097805460ff1916600117905550505050505050505050505050565b600054610100900460ff1680610fa95750610fa9611724565b80610fb7575060005460ff16155b610ff25760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff1615801561101d576000805460ff1961ff0019909116610100171660011790555b61102561172a565b61102d6117dc565b836001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561106657600080fd5b505afa15801561107a573d6000803e3d6000fd5b505050506040513d602081101561109057600080fd5b505160c980546001600160a01b03199081166001600160a01b039384161790915560ca8054821687841617905560cc8054821686841617905560cb805490911691841691909117905580156106b4576000805461ff001916905550505050565b60c9546001600160a01b031681565b60008060ca60009054906101000a90046001600160a01b03166001600160a01b0316634e5eda116040518163ffffffff1660e01b815260040160206040518083038186803b15801561115057600080fd5b505afa158015611164573d6000803e3d6000fd5b505050506040513d602081101561117a57600080fd5b505190506000805b8481101561122a576000836001600160a01b0316639fb08cb78888858181106111a757fe5b905060200201356040518263ffffffff1660e01b815260040180828152602001915050604080518083038186803b1580156111e157600080fd5b505afa1580156111f5573d6000803e3d6000fd5b505050506040513d604081101561120b57600080fd5b5051905061121f838263ffffffff61187116565b925050600101611182565b509150505b92915050565b61123d61134f565b6065546001600160a01b0390811691161461128d576040805162461bcd60e51b81526020600482018190526024820152600080516020611ff3833981519152604482015290519081900360640190fd5b6001600160a01b0381166112d25760405162461bcd60e51b8152600401808060200182810382526026815260200180611f5f6026913960400191505060405180910390fd5b6065546040516001600160a01b0380841692169060008051602061201383398151915290600090a3606580546001600160a01b0319166001600160a01b0392909216919091179055565b60ca546001600160a01b031681565b60cd6020526000908152604090205460ff1681565b60cc546001600160a01b031681565b3390565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b15801561139d57600080fd5b505afa1580156113b1573d6000803e3d6000fd5b505050506040513d60208110156113c757600080fd5b505190505b919050565b600061141383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118c9565b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106114975780518252601f199092019160209182019101611478565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114f9576040519150601f19603f3d011682016040523d82523d6000602084013e6114fe565b606091505b509150915081801561152c57508051158061152c575080806020019051602081101561152957600080fd5b50515b61156d576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b5050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b602083106115f15780518252601f1990920191602091820191016115d2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611653576040519150601f19603f3d011682016040523d82523d6000602084013e611658565b606091505b5091509150818015611686575080511580611686575080806020019051602081101561168357600080fd5b50515b61156d576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b6000806116d9868663ffffffff61196016565b6116e9888663ffffffff61196016565b10611706576116fb87878787876119b9565b91506000905061171a565b61171386888688876119b9565b9150600190505b9550959350505050565b303b1590565b600054610100900460ff16806117435750611743611724565b80611751575060005460ff16155b61178c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff161580156117b7576000805460ff1961ff0019909116610100171660011790555b6117bf611b45565b6117c7611be5565b80156117d9576000805461ff00191690555b50565b600054610100900460ff16806117f557506117f5611724565b80611803575060005460ff16155b61183e5760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff16158015611869576000805460ff1961ff0019909116610100171660011790555b6117c7611ccc565b600082820183811015611413576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b600081848411156119585760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561191d578181015183820152602001611905565b50505050905090810190601f16801561194a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008261196f5750600061122f565b8282028284828161197c57fe5b04146114135760405162461bcd60e51b8152600401808060200182810382526021815260200180611fd26021913960400191505060405180910390fd5b60006119cb858563ffffffff61196016565b6119db878563ffffffff61196016565b1015611a19576040805162461bcd60e51b815260206004820152600860248201526714995d995c9cd95960c21b604482015290519081900360640190fd5b6000611a2d6127108463ffffffff6113d116565b90506000611a5386611a47614e208763ffffffff6113d116565b9063ffffffff61196016565b90506000611a7a611a6a898963ffffffff61196016565b6104a78b8963ffffffff61196016565b90506000611ab388611a47611a958c8b63ffffffff61187116565b611aa78661271063ffffffff61196016565b9063ffffffff611d7a16565b90506000611acc6004611a47878563ffffffff61196016565b90506000611af8611af383611ae7888063ffffffff61196016565b9063ffffffff61187116565b611db9565b90506000611b0c828763ffffffff6113d116565b90506000611b2188600263ffffffff61196016565b9050611b33828263ffffffff611d7a16565b9e9d5050505050505050505050505050565b600054610100900460ff1680611b5e5750611b5e611724565b80611b6c575060005460ff16155b611ba75760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff161580156117c7576000805460ff1961ff00199091166101001716600117905580156117d9576000805461ff001916905550565b600054610100900460ff1680611bfe5750611bfe611724565b80611c0c575060005460ff16155b611c475760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff16158015611c72576000805460ff1961ff0019909116610100171660011790555b6000611c7c61134f565b606580546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020612013833981519152908290a35080156117d9576000805461ff001916905550565b600054610100900460ff1680611ce55750611ce5611724565b80611cf3575060005460ff16155b611d2e5760405162461bcd60e51b815260040180806020018281038252602e815260200180612033602e913960400191505060405180910390fd5b600054610100900460ff16158015611d59576000805460ff1961ff0019909116610100171660011790555b6097805460ff1916600117905580156117d9576000805461ff001916905550565b600061141383836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250611ef9565b600081611dc8575060006113cc565b816001600160801b8210611de15760809190911c9060401b5b600160401b8210611df75760409190911c9060201b5b600160201b8210611e0d5760209190911c9060101b5b620100008210611e225760109190911c9060081b5b6101008210611e365760089190911c9060041b5b60108210611e495760049190911c9060021b5b60088210611e555760011b5b6001818581611e6057fe5b048201901c90506001818581611e7257fe5b048201901c90506001818581611e8457fe5b048201901c90506001818581611e9657fe5b048201901c90506001818581611ea857fe5b048201901c90506001818581611eba57fe5b048201901c90506001818581611ecc57fe5b048201901c90506000818581611ede57fe5b049050808210611eee5780611ef0565b815b95945050505050565b60008183611f485760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561191d578181015183820152602001611905565b506000838581611f5457fe5b049594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734d64657852657374726963746564537472617465677941646454776f53696465734f7074696d616c3a3a6f6e6c7957686974656c6973746564576f726b6572733a3a2062616420776f726b6572536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644d64657852657374726963746564537472617465677941646454776f53696465734f7074696d616c3a3a657865637574653a3a20696e73756666696369656e74204c5020746f6b656e73207265636569766564a264697066735822122084bd62d1fb53f72d31535fac306d17bcfae61c3fbf287618ec152a52382aea2064736f6c63430006060033";
