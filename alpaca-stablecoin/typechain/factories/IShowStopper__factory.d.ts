import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IShowStopper, IShowStopperInterface } from "../IShowStopper";
export declare class IShowStopper__factory {
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
    static createInterface(): IShowStopperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IShowStopper;
}
