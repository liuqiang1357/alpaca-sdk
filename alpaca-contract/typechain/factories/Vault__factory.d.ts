import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Vault } from "../Vault";
export declare class Vault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Vault>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Vault;
    connect(signer: Signer): Vault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Vault;
}
