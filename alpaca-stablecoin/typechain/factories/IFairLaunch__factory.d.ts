import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFairLaunch, IFairLaunchInterface } from "../IFairLaunch";
export declare class IFairLaunch__factory {
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
    static createInterface(): IFairLaunchInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFairLaunch;
}
