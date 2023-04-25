import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMdx } from "../IMdx";
export declare class IMdx__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMdx;
}
