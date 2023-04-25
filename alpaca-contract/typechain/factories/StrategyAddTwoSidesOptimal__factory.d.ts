import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StrategyAddTwoSidesOptimal } from "../StrategyAddTwoSidesOptimal";
export declare class StrategyAddTwoSidesOptimal__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StrategyAddTwoSidesOptimal>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StrategyAddTwoSidesOptimal;
    connect(signer: Signer): StrategyAddTwoSidesOptimal__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategyAddTwoSidesOptimal;
}
