import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyAddTwoSidesOptimal } from "../WaultSwapRestrictedStrategyAddTwoSidesOptimal";
export declare class WaultSwapRestrictedStrategyAddTwoSidesOptimal__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyAddTwoSidesOptimal>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyAddTwoSidesOptimal;
    connect(signer: Signer): WaultSwapRestrictedStrategyAddTwoSidesOptimal__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyAddTwoSidesOptimal;
}
