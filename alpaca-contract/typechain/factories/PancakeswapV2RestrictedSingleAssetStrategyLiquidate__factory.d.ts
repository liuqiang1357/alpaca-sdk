import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyLiquidate } from "../PancakeswapV2RestrictedSingleAssetStrategyLiquidate";
export declare class PancakeswapV2RestrictedSingleAssetStrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyLiquidate;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyLiquidate;
}
