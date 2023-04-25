import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading } from "../PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading";
export declare class PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyWithdrawMinimizeTrading;
}
