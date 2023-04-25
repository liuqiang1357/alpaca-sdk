import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyLiquidate } from "../WaultSwapRestrictedStrategyLiquidate";
export declare class WaultSwapRestrictedStrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyLiquidate;
    connect(signer: Signer): WaultSwapRestrictedStrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyLiquidate;
}
