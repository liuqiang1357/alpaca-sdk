import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILiquidityMiningMaster } from "../ILiquidityMiningMaster";
export declare class ILiquidityMiningMaster__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidityMiningMaster;
}
