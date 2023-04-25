import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFlashLendingCallee, IFlashLendingCalleeInterface } from "../IFlashLendingCallee";
export declare class IFlashLendingCallee__factory {
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
    static createInterface(): IFlashLendingCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashLendingCallee;
}
