import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAuthTokenAdapter, IAuthTokenAdapterInterface } from "../IAuthTokenAdapter";
export declare class IAuthTokenAdapter__factory {
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
    static createInterface(): IAuthTokenAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAuthTokenAdapter;
}
