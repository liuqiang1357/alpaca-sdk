"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILiquidationEngine__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_positionAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_debtShareToBeLiquidated",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maxDebtShareToBeLiquidated",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_collateralRecipient",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "live",
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
];
class ILiquidationEngine__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ILiquidationEngine__factory = ILiquidationEngine__factory;
ILiquidationEngine__factory.abi = _abi;
