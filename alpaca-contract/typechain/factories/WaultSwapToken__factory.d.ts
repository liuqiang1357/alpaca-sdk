import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapToken } from "../WaultSwapToken";
export declare class WaultSwapToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapToken;
    connect(signer: Signer): WaultSwapToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapToken;
}
