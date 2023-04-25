import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlpacaFairLaunch, IAlpacaFairLaunchInterface } from "../IAlpacaFairLaunch";
export declare class IAlpacaFairLaunch__factory {
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
    static createInterface(): IAlpacaFairLaunchInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlpacaFairLaunch;
}
