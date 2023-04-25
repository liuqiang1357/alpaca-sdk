import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ReentrancyGuard } from "../ReentrancyGuard";
export declare class ReentrancyGuard__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuard;
}
