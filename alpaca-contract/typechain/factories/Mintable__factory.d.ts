import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Mintable } from "../Mintable";
export declare class Mintable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Mintable;
}
