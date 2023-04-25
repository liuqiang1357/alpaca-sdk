import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly } from "../PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly";
export declare class PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly;
    connect(signer: Signer): PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedSingleAssetStrategyAddBaseTokenOnly;
}
