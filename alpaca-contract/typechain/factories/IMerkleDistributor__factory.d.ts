import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMerkleDistributor } from "../IMerkleDistributor";
export declare class IMerkleDistributor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMerkleDistributor;
}
