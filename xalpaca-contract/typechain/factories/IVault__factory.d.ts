import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVault } from "../IVault";
export declare class IVault__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IVault;
}
