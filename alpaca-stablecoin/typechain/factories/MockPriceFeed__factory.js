"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPriceFeed__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "peekPrice",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
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
        name: "readPrice",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5060b18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063140d27201460375780637e91400f146056575b600080fd5b603d606e565b6040805192835290151560208301528051918290030190f35b605c6076565b60408051918252519081900360200190f35b600060019091565b60009056fea26469706673582212205655ae5b5cca6d079913156fc15cb29b21dbc04c69b2d6300a7f87d89d07fe9c64736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class MockPriceFeed__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
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
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockPriceFeed__factory = MockPriceFeed__factory;
MockPriceFeed__factory.bytecode = _bytecode;
MockPriceFeed__factory.abi = _abi;