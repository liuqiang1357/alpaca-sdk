"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICollateralPoolConfig__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "collateralPools",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "totalDebtShare",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "debtAccumulatedRate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "priceWithSafetyMargin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "debtCeiling",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "debtFloor",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "priceFeed",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidationRatio",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "stabilityFeeRate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastAccumulationTime",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "adapter",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "closeFactorBps",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidatorIncentiveBps",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "treasuryFeesBps",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "strategy",
                        type: "address",
                    },
                ],
                internalType: "struct ICollateralPoolConfig.CollateralPool",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getAdapter",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getCloseFactorBps",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getCollateralPoolInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "debtAccumulatedRate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "totalDebtShare",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "debtCeiling",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "priceWithSafetyMargin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "debtFloor",
                        type: "uint256",
                    },
                ],
                internalType: "struct ICollateralPoolConfig.CollateralPoolInfo",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getDebtAccumulatedRate",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getDebtCeiling",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getDebtFloor",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getLastAccumulationTime",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getLiquidationRatio",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getLiquidatorIncentiveBps",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getPriceFeed",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getPriceWithSafetyMargin",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getStabilityFeeRate",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getStrategy",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getTotalDebtShare",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "getTreasuryFeesBps",
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
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_debtAccumulatedRate",
                type: "uint256",
            },
        ],
        name: "setDebtAccumulatedRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "priceWithSafetyMargin",
                type: "uint256",
            },
        ],
        name: "setPriceWithSafetyMargin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_totalDebtShare",
                type: "uint256",
            },
        ],
        name: "setTotalDebtShare",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
        ],
        name: "updateLastAccumulationTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ICollateralPoolConfig__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICollateralPoolConfig__factory = ICollateralPoolConfig__factory;
ICollateralPoolConfig__factory.abi = _abi;
