import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFairLaunch } from "../IFairLaunch";
export declare class IFairLaunch__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFairLaunch;
}
