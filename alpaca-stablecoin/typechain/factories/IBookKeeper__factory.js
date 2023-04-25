"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBookKeeper__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "accessControlConfig",
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
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "stabilityFeeRecipient",
                type: "address",
            },
            {
                internalType: "int256",
                name: "debtAccumulatedRate",
                type: "int256",
            },
        ],
        name: "accrueStabilityFee",
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
                internalType: "address",
                name: "ownerAddress",
                type: "address",
            },
            {
                internalType: "int256",
                name: "amount",
                type: "int256",
            },
        ],
        name: "addCollateral",
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
                internalType: "address",
                name: "positionAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "collateralOwner",
                type: "address",
            },
            {
                internalType: "address",
                name: "stablecoinOwner",
                type: "address",
            },
            {
                internalType: "int256",
                name: "collateralValue",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "debtShare",
                type: "int256",
            },
        ],
        name: "adjustPosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "toBeBlacklistedAddress",
                type: "address",
            },
        ],
        name: "blacklist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "collateralPoolConfig",
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
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
            },
        ],
        name: "collateralToken",
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
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "positionAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "collateralCreditor",
                type: "address",
            },
            {
                internalType: "address",
                name: "stablecoinDebtor",
                type: "address",
            },
            {
                internalType: "int256",
                name: "collateralAmount",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "debtShare",
                type: "int256",
            },
        ],
        name: "confiscatePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "mintUnbackedStablecoin",
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
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "moveCollateral",
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
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "int256",
                name: "collateralAmount",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "debtShare",
                type: "int256",
            },
        ],
        name: "movePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "moveStablecoin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "positionAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "whitelistedAddress",
                type: "address",
            },
        ],
        name: "positionWhitelist",
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
                name: "collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "positionAddress",
                type: "address",
            },
        ],
        name: "positions",
        outputs: [
            {
                internalType: "uint256",
                name: "lockedCollateral",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "debtShare",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "settleSystemBadDebt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
            },
        ],
        name: "stablecoin",
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
                name: "ownerAddress",
                type: "address",
            },
        ],
        name: "systemBadDebt",
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
        inputs: [],
        name: "totalStablecoinIssued",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "toBeWhitelistedAddress",
                type: "address",
            },
        ],
        name: "whitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IBookKeeper__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBookKeeper__factory = IBookKeeper__factory;
IBookKeeper__factory.abi = _abi;
