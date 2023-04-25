import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyPartialCloseLiquidate } from "../WaultSwapRestrictedStrategyPartialCloseLiquidate";
export declare class WaultSwapRestrictedStrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyPartialCloseLiquidate;
    connect(signer: Signer): WaultSwapRestrictedStrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyPartialCloseLiquidate;
}
