import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading } from "../PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading";
export declare class PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyPartialCloseMinimizeTrading;
}
