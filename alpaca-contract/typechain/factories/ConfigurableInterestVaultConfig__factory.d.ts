import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ConfigurableInterestVaultConfig } from "../ConfigurableInterestVaultConfig";
export declare class ConfigurableInterestVaultConfig__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ConfigurableInterestVaultConfig>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ConfigurableInterestVaultConfig;
    connect(signer: Signer): ConfigurableInterestVaultConfig__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ConfigurableInterestVaultConfig;
}
