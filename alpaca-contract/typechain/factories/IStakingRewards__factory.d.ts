import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakingRewards } from "../IStakingRewards";
export declare class IStakingRewards__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStakingRewards;
}
