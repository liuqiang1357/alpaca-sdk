import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SimpleVaultConfig } from "../SimpleVaultConfig";
export declare class SimpleVaultConfig__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SimpleVaultConfig>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SimpleVaultConfig;
    connect(signer: Signer): SimpleVaultConfig__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SimpleVaultConfig;
}
