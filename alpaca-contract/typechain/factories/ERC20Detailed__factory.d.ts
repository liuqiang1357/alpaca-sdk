import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Detailed } from "../ERC20Detailed";
export declare class ERC20Detailed__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Detailed;
}
