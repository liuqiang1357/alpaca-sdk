import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeERC20 } from "../IPancakeERC20";
export declare class IPancakeERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeERC20;
}
