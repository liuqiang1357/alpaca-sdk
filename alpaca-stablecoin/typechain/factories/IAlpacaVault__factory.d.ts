import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlpacaVault, IAlpacaVaultInterface } from "../IAlpacaVault";
export declare class IAlpacaVault__factory {
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
    static createInterface(): IAlpacaVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlpacaVault;
}
