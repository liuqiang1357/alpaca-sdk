import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyPartialCloseMinimizeTrading } from "../WaultSwapRestrictedStrategyPartialCloseMinimizeTrading";
export declare class WaultSwapRestrictedStrategyPartialCloseMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyPartialCloseMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyPartialCloseMinimizeTrading;
    connect(signer: Signer): WaultSwapRestrictedStrategyPartialCloseMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyPartialCloseMinimizeTrading;
}
