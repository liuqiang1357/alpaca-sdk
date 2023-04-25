import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMdexSwapMining } from "../IMdexSwapMining";
export declare class IMdexSwapMining__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMdexSwapMining;
}
