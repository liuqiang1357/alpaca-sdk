"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILiquidationStrategy__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "positionDebtShare",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "positionCollateralAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "positionAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "debtShareToBeLiquidated",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxDebtShareToBeLiquidated",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_liquidatorAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "collateralRecipient",
                type: "address",
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
];
class ILiquidationStrategy__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ILiquidationStrategy__factory = ILiquidationStrategy__factory;
ILiquidationStrategy__factory.abi = _abi;
