import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBookKeeperFlashLender, IBookKeeperFlashLenderInterface } from "../IBookKeeperFlashLender";
export declare class IBookKeeperFlashLender__factory {
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
    static createInterface(): IBookKeeperFlashLenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBookKeeperFlashLender;
}
