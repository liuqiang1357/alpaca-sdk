import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBookKeeperFlashBorrower, IBookKeeperFlashBorrowerInterface } from "../IBookKeeperFlashBorrower";
export declare class IBookKeeperFlashBorrower__factory {
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
    static createInterface(): IBookKeeperFlashBorrowerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBookKeeperFlashBorrower;
}
