import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBEP20 } from "../IBEP20";
export declare class IBEP20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IBEP20;
}
