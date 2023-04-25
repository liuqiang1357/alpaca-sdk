import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockVaultForRestrictedAddTwosideOptimalStrat } from "../MockVaultForRestrictedAddTwosideOptimalStrat";
export declare class MockVaultForRestrictedAddTwosideOptimalStrat__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockVaultForRestrictedAddTwosideOptimalStrat>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockVaultForRestrictedAddTwosideOptimalStrat;
    connect(signer: Signer): MockVaultForRestrictedAddTwosideOptimalStrat__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVaultForRestrictedAddTwosideOptimalStrat;
}
