import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyPartialCloseLiquidate } from "../PancakeswapV2StrategyPartialCloseLiquidate";
export declare class PancakeswapV2StrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyPartialCloseLiquidate;
    connect(signer: Signer): PancakeswapV2StrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyPartialCloseLiquidate;
}
