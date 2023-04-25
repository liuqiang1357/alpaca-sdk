import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapRouter02 } from "../IWaultSwapRouter02";
export declare class IWaultSwapRouter02__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapRouter02;
}
