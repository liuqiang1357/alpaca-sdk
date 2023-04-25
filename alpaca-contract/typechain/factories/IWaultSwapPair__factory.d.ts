import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapPair } from "../IWaultSwapPair";
export declare class IWaultSwapPair__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapPair;
}
