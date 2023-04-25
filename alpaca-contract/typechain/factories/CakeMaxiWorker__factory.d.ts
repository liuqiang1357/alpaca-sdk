import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeMaxiWorker } from "../CakeMaxiWorker";
export declare class CakeMaxiWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CakeMaxiWorker>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeMaxiWorker;
    connect(signer: Signer): CakeMaxiWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeMaxiWorker;
}
