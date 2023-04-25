import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStdReference, IStdReferenceInterface } from "../IStdReference";
export declare class IStdReference__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IStdReferenceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStdReference;
}
