import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate } from "../PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate";
export declare class PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseLiquidate;
}
