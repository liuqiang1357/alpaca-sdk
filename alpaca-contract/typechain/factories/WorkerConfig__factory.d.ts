import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WorkerConfig } from "../WorkerConfig";
export declare class WorkerConfig__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WorkerConfig>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WorkerConfig;
    connect(signer: Signer): WorkerConfig__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WorkerConfig;
}
