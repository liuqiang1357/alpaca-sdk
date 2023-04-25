"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFairLaunch__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MockFairLaunch__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_alpaca, _proxyToken, overrides) {
        return super.deploy(_alpaca, _proxyToken, overrides || {});
    }
    getDeployTransaction(_alpaca, _proxyToken, overrides) {
        return super.getDeployTransaction(_alpaca, _proxyToken, overrides || {});
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
exports.MockFairLaunch__factory = MockFairLaunch__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_alpaca",
                type: "address",
            },
            {
                internalType: "address",
                name: "_proxyToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "DEFAULT_HARVEST_AMOUNT",
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
                name: "_stakeToken",
                type: "address",
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
        name: "proxyToken",
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
const _bytecode = "0x608060405234801561001057600080fd5b50604051610a3c380380610a3c83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b61097e806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394faab231161005b57806394faab2314610134578063cc6dbc2714610147578063d914cd4b1461015a578063ddc632621461028257600080fd5b80630efe6a8b1461008d5780631526fe27146100a25780634faaefae146100ec57806377cf99d914610117575b600080fd5b6100a061009b366004610886565b610295565b005b6100b56100b03660046108db565b6102e1565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a0015b60405180910390f35b6001546100ff906001600160a01b031681565b6040516001600160a01b0390911681526020016100e3565b610126678ac7230489e8000081565b6040519081526020016100e3565b6000546100ff906001600160a01b031681565b6100a061015536600461085c565b61032c565b6100a061016836600461083a565b6040805160a0810182526001600160a01b039283168152600060208201818152928201818152606083018281526080840183815260028054600181018255945293517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600590940293840180546001600160a01b031916919097161790955592517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad083015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad182015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad290910155565b6100a06102903660046108db565b6103b3565b6001546102ac906001600160a01b03168483610478565b6001546102c4906001600160a01b0316843084610582565b6001546102dc906001600160a01b0316846000610478565b505050565b600281815481106102f157600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909185565b600154600090610344906001600160a01b031661069a565b11156103af57600154610369906001600160a01b0316836103648261069a565b610478565b600154610397908390610384906001600160a01b031661069a565b6001546001600160a01b0316919061071a565b6001546103af906001600160a01b0316836000610478565b5050565b6000546103c8906001600160a01b031661069a565b678ac7230489e80000111561041c5760405162461bcd60e51b8152602060048201526015602482015274777466206e6f7420656e6f75676820616c7061636160581b60448201526064015b60405180910390fd5b60005461043b906001600160a01b031633678ac7230489e80000610478565b60005461045a906001600160a01b031633678ac7230489e8000061071a565b60008054610475916001600160a01b03909116903390610478565b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b17905291516000928392908716916104d4919061090d565b6000604051808303816000865af19150503d8060008114610511576040519150601f19603f3d011682016040523d82523d6000602084013e610516565b606091505b509150915081801561054057508051158061054057508080602001905181019061054091906108b9565b61057b5760405162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b6044820152606401610413565b5050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916105e6919061090d565b6000604051808303816000865af19150503d8060008114610623576040519150601f19603f3d011682016040523d82523d6000602084013e610628565b606091505b509150915081801561065257508051158061065257508080602001905181019061065291906108b9565b6106925760405162461bcd60e51b815260206004820152601160248201527021736166655472616e7366657246726f6d60781b6044820152606401610413565b505050505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b1580156106dc57600080fd5b505afa1580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071491906108f4565b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610776919061090d565b6000604051808303816000865af19150503d80600081146107b3576040519150601f19603f3d011682016040523d82523d6000602084013e6107b8565b606091505b50915091508180156107e25750805115806107e25750808060200190518101906107e291906108b9565b61057b5760405162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b6044820152606401610413565b80356001600160a01b038116811461083557600080fd5b919050565b60006020828403121561084c57600080fd5b6108558261081e565b9392505050565b6000806040838503121561086f57600080fd5b6108788361081e565b946020939093013593505050565b60008060006060848603121561089b57600080fd5b6108a48461081e565b95602085013595506040909401359392505050565b6000602082840312156108cb57600080fd5b8151801515811461085557600080fd5b6000602082840312156108ed57600080fd5b5035919050565b60006020828403121561090657600080fd5b5051919050565b6000825160005b8181101561092e5760208186018101518583015201610914565b8181111561093d576000828501525b50919091019291505056fea2646970667358221220e176863b97c1a335042bdce086bea100fbfdbc7f7bf87a296219663a9188e75d64736f6c63430008070033";