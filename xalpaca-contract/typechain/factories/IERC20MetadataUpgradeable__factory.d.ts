import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC20MetadataUpgradeable } from "../IERC20MetadataUpgradeable";
export declare class IERC20MetadataUpgradeable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20MetadataUpgradeable;
}
