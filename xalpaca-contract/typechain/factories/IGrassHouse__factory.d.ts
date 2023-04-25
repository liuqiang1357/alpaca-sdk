import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGrassHouse } from "../IGrassHouse";
export declare class IGrassHouse__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IGrassHouse;
}
