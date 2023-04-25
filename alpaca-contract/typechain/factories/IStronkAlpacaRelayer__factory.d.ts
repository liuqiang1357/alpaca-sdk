import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStronkAlpacaRelayer } from "../IStronkAlpacaRelayer";
export declare class IStronkAlpacaRelayer__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStronkAlpacaRelayer;
}
