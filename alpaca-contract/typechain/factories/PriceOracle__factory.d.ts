import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PriceOracle } from "../PriceOracle";
export declare class PriceOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): PriceOracle;
}
