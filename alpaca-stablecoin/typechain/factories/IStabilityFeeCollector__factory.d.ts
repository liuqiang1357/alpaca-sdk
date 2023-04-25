import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStabilityFeeCollector, IStabilityFeeCollectorInterface } from "../IStabilityFeeCollector";
export declare class IStabilityFeeCollector__factory {
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
    static createInterface(): IStabilityFeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStabilityFeeCollector;
}
