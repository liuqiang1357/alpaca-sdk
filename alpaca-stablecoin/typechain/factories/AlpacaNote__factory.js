"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaNote__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: true,
        inputs: [
            {
                indexed: true,
                internalType: "bytes4",
                name: "sig",
                type: "bytes4",
            },
            {
                indexed: true,
                internalType: "address",
                name: "guy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "foo",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "bar",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "fax",
                type: "bytes",
            },
        ],
        name: "LogNote",
        type: "event",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122085527ed7be6c8dc121d4368cb8aa568bd631c9976b90a70b4feb535a4aa317ac64736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class AlpacaNote__factory extends ethers_1.ContractFactory {
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
exports.AlpacaNote__factory = AlpacaNote__factory;
AlpacaNote__factory.bytecode = _bytecode;
AlpacaNote__factory.abi = _abi;
