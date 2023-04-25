import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyLiquidate } from "../PancakeswapV2StrategyLiquidate";
export declare class PancakeswapV2StrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyLiquidate;
    connect(signer: Signer): PancakeswapV2StrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyLiquidate;
}
