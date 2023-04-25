import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStablecoin, IStablecoinInterface } from "../IStablecoin";
export declare class IStablecoin__factory {
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
    static createInterface(): IStablecoinInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStablecoin;
}
