import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyPartialCloseLiquidate } from "../PancakeswapV2RestrictedStrategyPartialCloseLiquidate";
export declare class PancakeswapV2RestrictedStrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyPartialCloseLiquidate;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyPartialCloseLiquidate;
}
