import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { OwnableUpgradeSafe } from "../OwnableUpgradeSafe";
export declare class OwnableUpgradeSafe__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OwnableUpgradeSafe>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OwnableUpgradeSafe;
    connect(signer: Signer): OwnableUpgradeSafe__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableUpgradeSafe;
}
