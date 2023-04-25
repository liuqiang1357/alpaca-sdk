import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapWorker } from "../WaultSwapWorker";
export declare class WaultSwapWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapWorker>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapWorker;
    connect(signer: Signer): WaultSwapWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapWorker;
}
