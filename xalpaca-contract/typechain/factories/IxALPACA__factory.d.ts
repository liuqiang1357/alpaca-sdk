import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IxALPACA } from "../IxALPACA";
export declare class IxALPACA__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IxALPACA;
}
