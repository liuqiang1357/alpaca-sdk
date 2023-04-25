"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreate2Address = exports.compare = void 0;
const ethers_1 = require("ethers");
function compare(address0, address1) {
    return address0.toLowerCase() === address1.toLowerCase();
}
exports.compare = compare;
function getCreate2Address(factoryAddress, [tokenA, tokenB], initHashCode) {
    const [token0, token1] = tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA];
    const create2Inputs = [
        '0xff',
        factoryAddress,
        ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.solidityPack(['address', 'address'], [token0, token1])),
        initHashCode,
    ];
    const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join('')}`;
    return ethers_1.ethers.utils.getAddress(`0x${ethers_1.ethers.utils.keccak256(sanitizedInputs).slice(-40)}`);
}
exports.getCreate2Address = getCreate2Address;
