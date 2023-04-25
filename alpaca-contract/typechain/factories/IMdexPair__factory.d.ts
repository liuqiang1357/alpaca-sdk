import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMdexPair } from "../IMdexPair";
export declare class IMdexPair__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMdexPair;
}
