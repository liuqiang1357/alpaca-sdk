import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeRouter02, IPancakeRouter02Interface } from "../IPancakeRouter02";
export declare class IPancakeRouter02__factory {
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
    static createInterface(): IPancakeRouter02Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeRouter02;
}
