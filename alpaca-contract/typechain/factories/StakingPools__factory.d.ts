import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StakingPools } from "../StakingPools";
export declare class StakingPools__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StakingPools>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StakingPools;
    connect(signer: Signer): StakingPools__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPools;
}
