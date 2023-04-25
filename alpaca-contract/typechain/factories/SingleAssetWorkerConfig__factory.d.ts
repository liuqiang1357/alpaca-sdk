import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SingleAssetWorkerConfig } from "../SingleAssetWorkerConfig";
export declare class SingleAssetWorkerConfig__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SingleAssetWorkerConfig>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SingleAssetWorkerConfig;
    connect(signer: Signer): SingleAssetWorkerConfig__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SingleAssetWorkerConfig;
}
