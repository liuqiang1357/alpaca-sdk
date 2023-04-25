import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeCallee } from "../IPancakeCallee";
export declare class IPancakeCallee__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeCallee;
}
