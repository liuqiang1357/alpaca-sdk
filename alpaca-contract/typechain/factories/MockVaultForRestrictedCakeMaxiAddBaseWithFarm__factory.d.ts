import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockVaultForRestrictedCakeMaxiAddBaseWithFarm } from "../MockVaultForRestrictedCakeMaxiAddBaseWithFarm";
export declare class MockVaultForRestrictedCakeMaxiAddBaseWithFarm__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockVaultForRestrictedCakeMaxiAddBaseWithFarm>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockVaultForRestrictedCakeMaxiAddBaseWithFarm;
    connect(signer: Signer): MockVaultForRestrictedCakeMaxiAddBaseWithFarm__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVaultForRestrictedCakeMaxiAddBaseWithFarm;
}
