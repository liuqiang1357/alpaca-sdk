import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDetailedERC20 } from "../IDetailedERC20";
export declare class IDetailedERC20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IDetailedERC20;
}
