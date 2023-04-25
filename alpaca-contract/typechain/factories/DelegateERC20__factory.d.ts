import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DelegateERC20 } from "../DelegateERC20";
export declare class DelegateERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): DelegateERC20;
}
