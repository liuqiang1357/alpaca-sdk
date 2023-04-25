import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITimeLock, ITimeLockInterface } from "../ITimeLock";
export declare class ITimeLock__factory {
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
    static createInterface(): ITimeLockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITimeLock;
}
