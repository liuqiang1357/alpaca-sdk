import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISystemDebtEngine, ISystemDebtEngineInterface } from "../ISystemDebtEngine";
export declare class ISystemDebtEngine__factory {
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
    static createInterface(): ISystemDebtEngineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISystemDebtEngine;
}
