import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IswapV2Callee } from "../IswapV2Callee";
export declare class IswapV2Callee__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IswapV2Callee;
}
