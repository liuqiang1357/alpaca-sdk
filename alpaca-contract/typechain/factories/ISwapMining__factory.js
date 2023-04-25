"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISwapMining__factory = void 0;
const ethers_1 = require("ethers");
class ISwapMining__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISwapMining__factory = ISwapMining__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "address",
                name: "input",
                type: "address",
            },
            {
                internalType: "address",
                name: "output",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "swap",
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
];
