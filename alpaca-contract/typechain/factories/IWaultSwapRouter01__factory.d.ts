import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapRouter01 } from "../IWaultSwapRouter01";
export declare class IWaultSwapRouter01__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapRouter01;
}
