import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWorker } from "../IWorker";
export declare class IWorker__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWorker;
}
