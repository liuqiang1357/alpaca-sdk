import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStablecoinAdapter, IStablecoinAdapterInterface } from "../IStablecoinAdapter";
export declare class IStablecoinAdapter__factory {
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
    static createInterface(): IStablecoinAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStablecoinAdapter;
}
