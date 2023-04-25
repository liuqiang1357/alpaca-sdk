import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICollateralPoolConfig, ICollateralPoolConfigInterface } from "../ICollateralPoolConfig";
export declare class ICollateralPoolConfig__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
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
    })[];
    static createInterface(): ICollateralPoolConfigInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICollateralPoolConfig;
}
