import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Interface } from "../ERC20Interface";
export declare class ERC20Interface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Interface;
}
