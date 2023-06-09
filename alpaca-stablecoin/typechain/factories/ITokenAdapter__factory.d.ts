import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITokenAdapter, ITokenAdapterInterface } from "../ITokenAdapter";
export declare class ITokenAdapter__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ITokenAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenAdapter;
}
