import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakePair } from "../IPancakePair";
export declare class IPancakePair__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakePair;
}
