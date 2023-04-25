import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading } from "../PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading";
export declare class PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyPartialCloseMinimizeTrading;
}
