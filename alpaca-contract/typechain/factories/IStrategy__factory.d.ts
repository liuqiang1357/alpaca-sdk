import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStrategy } from "../IStrategy";
export declare class IStrategy__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStrategy;
}
