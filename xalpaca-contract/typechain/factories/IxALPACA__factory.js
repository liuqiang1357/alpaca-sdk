"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IxALPACA__factory = void 0;
const ethers_1 = require("ethers");
class IxALPACA__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IxALPACA__factory = IxALPACA__factory;
const _abi = [
    {
        inputs: [],
        name: "checkpoint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "epoch",
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
                name: "_epoch",
                type: "uint256",
            },
        ],
        name: "pointHistory",
        outputs: [
            {
                components: [
                    {
                        internalType: "int128",
                        name: "bias",
                        type: "int128",
                    },
                    {
                        internalType: "int128",
                        name: "slope",
                        type: "int128",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256",
                    },
                ],
                internalType: "struct Point",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "userPointEpoch",
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
                name: "_user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_epoch",
                type: "uint256",
            },
        ],
        name: "userPointHistory",
        outputs: [
            {
                components: [
                    {
                        internalType: "int128",
                        name: "bias",
                        type: "int128",
                    },
                    {
                        internalType: "int128",
                        name: "slope",
                        type: "int128",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256",
                    },
                ],
                internalType: "struct Point",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
