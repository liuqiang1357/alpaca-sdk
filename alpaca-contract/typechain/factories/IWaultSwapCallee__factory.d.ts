import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapCallee } from "../IWaultSwapCallee";
export declare class IWaultSwapCallee__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapCallee;
}
