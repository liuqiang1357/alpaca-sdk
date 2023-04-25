import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPositionHandler, IPositionHandlerInterface } from "../IPositionHandler";
export declare class IPositionHandler__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPositionHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPositionHandler;
}
