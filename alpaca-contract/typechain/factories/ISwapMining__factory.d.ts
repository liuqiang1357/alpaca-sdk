import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapMining } from "../ISwapMining";
export declare class ISwapMining__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapMining;
}
