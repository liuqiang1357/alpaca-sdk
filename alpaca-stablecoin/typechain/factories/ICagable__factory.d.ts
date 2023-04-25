import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICagable, ICagableInterface } from "../ICagable";
export declare class ICagable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ICagableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICagable;
}
