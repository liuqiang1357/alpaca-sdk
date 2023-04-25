import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlpacaOracle, IAlpacaOracleInterface } from "../IAlpacaOracle";
export declare class IAlpacaOracle__factory {
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
    static createInterface(): IAlpacaOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlpacaOracle;
}
