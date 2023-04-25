import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWBNB, IWBNBInterface } from "../IWBNB";
export declare class IWBNB__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IWBNBInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWBNB;
}
