import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWBNB } from "../IWBNB";
export declare class IWBNB__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWBNB;
}
