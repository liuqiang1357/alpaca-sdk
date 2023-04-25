import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMdexFactory } from "../IMdexFactory";
export declare class IMdexFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMdexFactory;
}
