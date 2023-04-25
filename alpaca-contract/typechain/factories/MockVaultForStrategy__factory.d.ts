import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockVaultForStrategy } from "../MockVaultForStrategy";
export declare class MockVaultForStrategy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockVaultForStrategy>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockVaultForStrategy;
    connect(signer: Signer): MockVaultForStrategy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVaultForStrategy;
}
