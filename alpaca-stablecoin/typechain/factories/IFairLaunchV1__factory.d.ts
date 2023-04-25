import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFairLaunchV1, IFairLaunchV1Interface } from "../IFairLaunchV1";
export declare class IFairLaunchV1__factory {
    static readonly abi: ({
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
    } | {
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
    })[];
    static createInterface(): IFairLaunchV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFairLaunchV1;
}
