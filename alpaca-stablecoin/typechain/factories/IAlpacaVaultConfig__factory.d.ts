import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlpacaVaultConfig, IAlpacaVaultConfigInterface } from "../IAlpacaVaultConfig";
export declare class IAlpacaVaultConfig__factory {
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
    static createInterface(): IAlpacaVaultConfigInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlpacaVaultConfig;
}
