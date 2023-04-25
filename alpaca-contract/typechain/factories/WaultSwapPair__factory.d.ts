import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapPair } from "../WaultSwapPair";
export declare class WaultSwapPair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapPair>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapPair;
    connect(signer: Signer): WaultSwapPair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapPair;
}
