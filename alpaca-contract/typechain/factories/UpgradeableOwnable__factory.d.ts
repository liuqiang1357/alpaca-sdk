import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { UpgradeableOwnable } from "../UpgradeableOwnable";
export declare class UpgradeableOwnable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableOwnable;
}
