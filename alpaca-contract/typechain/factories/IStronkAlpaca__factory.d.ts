import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStronkAlpaca } from "../IStronkAlpaca";
export declare class IStronkAlpaca__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStronkAlpaca;
}
