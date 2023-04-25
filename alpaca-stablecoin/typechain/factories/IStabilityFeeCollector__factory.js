"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStabilityFeeCollector__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "collect",
        outputs: [
            {
                internalType: "uint256",
                name: "debtAccumulatedRate",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IStabilityFeeCollector__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStabilityFeeCollector__factory = IStabilityFeeCollector__factory;
IStabilityFeeCollector__factory.abi = _abi;
