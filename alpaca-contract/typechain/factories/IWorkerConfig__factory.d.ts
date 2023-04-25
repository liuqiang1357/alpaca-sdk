import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWorkerConfig } from "../IWorkerConfig";
export declare class IWorkerConfig__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWorkerConfig;
}
