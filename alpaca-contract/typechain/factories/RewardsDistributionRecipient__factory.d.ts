import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RewardsDistributionRecipient } from "../RewardsDistributionRecipient";
export declare class RewardsDistributionRecipient__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsDistributionRecipient;
}
