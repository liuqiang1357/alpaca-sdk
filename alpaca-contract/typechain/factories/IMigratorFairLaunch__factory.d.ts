import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMigratorFairLaunch } from "../IMigratorFairLaunch";
export declare class IMigratorFairLaunch__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMigratorFairLaunch;
}
