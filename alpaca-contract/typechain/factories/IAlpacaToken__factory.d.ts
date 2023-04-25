import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAlpacaToken } from "../IAlpacaToken";
export declare class IAlpacaToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IAlpacaToken;
}
