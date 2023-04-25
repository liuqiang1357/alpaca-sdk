import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProxyRegistry, IProxyRegistryInterface } from "../IProxyRegistry";
export declare class IProxyRegistry__factory {
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
    static createInterface(): IProxyRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyRegistry;
}
