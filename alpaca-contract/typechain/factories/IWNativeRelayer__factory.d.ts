import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWNativeRelayer } from "../IWNativeRelayer";
export declare class IWNativeRelayer__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWNativeRelayer;
}
