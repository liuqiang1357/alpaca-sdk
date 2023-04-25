import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Interface, ERC20InterfaceInterface } from "../ERC20Interface";
export declare class ERC20Interface__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC20InterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Interface;
}
