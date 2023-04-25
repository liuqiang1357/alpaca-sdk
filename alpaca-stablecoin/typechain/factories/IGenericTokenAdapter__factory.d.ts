import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGenericTokenAdapter, IGenericTokenAdapterInterface } from "../IGenericTokenAdapter";
export declare class IGenericTokenAdapter__factory {
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
    static createInterface(): IGenericTokenAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGenericTokenAdapter;
}
