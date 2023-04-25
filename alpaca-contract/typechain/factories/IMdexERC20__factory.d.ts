import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMdexERC20 } from "../IMdexERC20";
export declare class IMdexERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMdexERC20;
}
