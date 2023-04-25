import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFairLaunchV1 } from "../IFairLaunchV1";
export declare class IFairLaunchV1__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFairLaunchV1;
}
