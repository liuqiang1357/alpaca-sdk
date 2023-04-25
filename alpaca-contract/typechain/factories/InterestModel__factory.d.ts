import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { InterestModel } from "../InterestModel";
export declare class InterestModel__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): InterestModel;
}
