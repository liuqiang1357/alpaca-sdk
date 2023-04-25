import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWexMaster } from "../IWexMaster";
export declare class IWexMaster__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWexMaster;
}
