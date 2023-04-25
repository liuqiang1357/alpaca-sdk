import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyLiquidate } from "../PancakeswapV2RestrictedStrategyLiquidate";
export declare class PancakeswapV2RestrictedStrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyLiquidate;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyLiquidate;
}
