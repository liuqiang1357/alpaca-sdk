import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeFactory } from "../IPancakeFactory";
export declare class IPancakeFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeFactory;
}
