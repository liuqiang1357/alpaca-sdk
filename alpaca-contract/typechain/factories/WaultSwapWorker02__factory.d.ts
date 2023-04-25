import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapWorker02 } from "../WaultSwapWorker02";
export declare class WaultSwapWorker02__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapWorker02>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapWorker02;
    connect(signer: Signer): WaultSwapWorker02__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapWorker02;
}
