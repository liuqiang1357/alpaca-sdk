import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeMaxiWorker02 } from "../CakeMaxiWorker02";
export declare class CakeMaxiWorker02__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CakeMaxiWorker02>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeMaxiWorker02;
    connect(signer: Signer): CakeMaxiWorker02__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeMaxiWorker02;
}
