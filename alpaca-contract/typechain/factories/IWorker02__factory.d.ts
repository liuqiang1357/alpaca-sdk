import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWorker02 } from "../IWorker02";
export declare class IWorker02__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IWorker02;
}
