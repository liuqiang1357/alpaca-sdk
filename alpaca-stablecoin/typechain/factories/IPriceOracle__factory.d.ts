import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPriceOracle, IPriceOracleInterface } from "../IPriceOracle";
export declare class IPriceOracle__factory {
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
    static createInterface(): IPriceOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPriceOracle;
}
