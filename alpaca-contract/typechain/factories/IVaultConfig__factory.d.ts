import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVaultConfig } from "../IVaultConfig";
export declare class IVaultConfig__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IVaultConfig;
}
