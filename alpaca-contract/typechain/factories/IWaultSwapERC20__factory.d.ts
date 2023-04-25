import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWaultSwapERC20 } from "../IWaultSwapERC20";
export declare class IWaultSwapERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWaultSwapERC20;
}
