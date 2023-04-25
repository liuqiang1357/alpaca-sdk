import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMintableERC20 } from "../IMintableERC20";
export declare class IMintableERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMintableERC20;
}
