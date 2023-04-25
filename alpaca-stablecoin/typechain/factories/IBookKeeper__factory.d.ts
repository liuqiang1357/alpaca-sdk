import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBookKeeper, IBookKeeperInterface } from "../IBookKeeper";
export declare class IBookKeeper__factory {
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
    static createInterface(): IBookKeeperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBookKeeper;
}
