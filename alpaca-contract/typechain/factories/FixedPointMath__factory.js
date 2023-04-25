"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPointMath__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class FixedPointMath__factory extends contracts_1.ContractFactory {
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
exports.FixedPointMath__factory = FixedPointMath__factory;
const _abi = [
    {
        inputs: [],
        name: "DECIMALS",
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
        name: "SCALAR",
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
const _bytecode = "0x60a7610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80632e0f26251460425780636bf301a414605a575b600080fd5b60486060565b60408051918252519081900360200190f35b60486065565b601281565b670de0b6b3a76400008156fea264697066735822122067f245b85b2f79835604d325f483622f30da670c87f8024b284525b366636d3364736f6c634300060c0033";