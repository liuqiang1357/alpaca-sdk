import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StrategyLiquidate } from "../StrategyLiquidate";
export declare class StrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StrategyLiquidate;
    connect(signer: Signer): StrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategyLiquidate;
}
