import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILiquidationStrategy, ILiquidationStrategyInterface } from "../ILiquidationStrategy";
export declare class ILiquidationStrategy__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ILiquidationStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidationStrategy;
}
