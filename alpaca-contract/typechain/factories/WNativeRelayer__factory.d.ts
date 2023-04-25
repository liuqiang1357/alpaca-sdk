import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WNativeRelayer } from "../WNativeRelayer";
export declare class WNativeRelayer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_wnative: string, overrides?: Overrides): Promise<WNativeRelayer>;
    getDeployTransaction(_wnative: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): WNativeRelayer;
    connect(signer: Signer): WNativeRelayer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WNativeRelayer;
}
