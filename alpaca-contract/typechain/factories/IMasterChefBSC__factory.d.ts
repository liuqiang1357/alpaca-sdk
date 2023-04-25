import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMasterChefBSC } from "../IMasterChefBSC";
export declare class IMasterChefBSC__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMasterChefBSC;
}
