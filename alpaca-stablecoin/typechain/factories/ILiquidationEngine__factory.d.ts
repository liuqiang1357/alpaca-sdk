import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILiquidationEngine, ILiquidationEngineInterface } from "../ILiquidationEngine";
export declare class ILiquidationEngine__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ILiquidationEngineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidationEngine;
}
