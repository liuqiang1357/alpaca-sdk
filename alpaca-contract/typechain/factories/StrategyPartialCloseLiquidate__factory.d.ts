import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StrategyPartialCloseLiquidate } from "../StrategyPartialCloseLiquidate";
export declare class StrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StrategyPartialCloseLiquidate;
    connect(signer: Signer): StrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategyPartialCloseLiquidate;
}
