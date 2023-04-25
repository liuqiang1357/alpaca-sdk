import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockBeneficialVault } from "../MockBeneficialVault";
export declare class MockBeneficialVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockBeneficialVault>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockBeneficialVault;
    connect(signer: Signer): MockBeneficialVault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockBeneficialVault;
}
