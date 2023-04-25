import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAuthority, IAuthorityInterface } from "../IAuthority";
export declare class IAuthority__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IAuthorityInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAuthority;
}
