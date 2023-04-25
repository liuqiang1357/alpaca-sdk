import { ethers } from 'ethers';
export function compare(address0, address1) {
    return address0.toLowerCase() === address1.toLowerCase();
}
export function getCreate2Address(factoryAddress, [tokenA, tokenB], initHashCode) {
    const [token0, token1] = tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA];
    const create2Inputs = [
        '0xff',
        factoryAddress,
        ethers.utils.keccak256(ethers.utils.solidityPack(['address', 'address'], [token0, token1])),
        initHashCode,
    ];
    const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join('')}`;
    return ethers.utils.getAddress(`0x${ethers.utils.keccak256(sanitizedInputs).slice(-40)}`);
}
