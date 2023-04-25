import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IManager, IManagerInterface } from "../IManager";
export declare class IManager__factory {
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
    static createInterface(): IManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IManager;
}
