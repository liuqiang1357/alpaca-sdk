import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAccessControlConfig, IAccessControlConfigInterface } from "../IAccessControlConfig";
export declare class IAccessControlConfig__factory {
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
    static createInterface(): IAccessControlConfigInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccessControlConfig;
}
