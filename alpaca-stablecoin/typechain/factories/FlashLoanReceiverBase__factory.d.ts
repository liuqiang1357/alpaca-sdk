import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { FlashLoanReceiverBase, FlashLoanReceiverBaseInterface } from "../FlashLoanReceiverBase";
export declare class FlashLoanReceiverBase__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    })[];
    static createInterface(): FlashLoanReceiverBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlashLoanReceiverBase;
}
