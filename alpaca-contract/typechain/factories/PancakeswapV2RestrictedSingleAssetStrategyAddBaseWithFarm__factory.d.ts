import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm } from "../PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm";
export declare class PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyAddBaseWithFarm;
}
