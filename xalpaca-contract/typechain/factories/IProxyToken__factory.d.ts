import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProxyToken } from "../IProxyToken";
export declare class IProxyToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyToken;
}
