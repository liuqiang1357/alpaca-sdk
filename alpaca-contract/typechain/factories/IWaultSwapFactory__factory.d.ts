import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapFactory } from "../IWaultSwapFactory";
export declare class IWaultSwapFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapFactory;
}
