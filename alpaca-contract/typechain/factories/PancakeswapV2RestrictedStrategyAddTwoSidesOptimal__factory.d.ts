import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyAddTwoSidesOptimal } from "../PancakeswapV2RestrictedStrategyAddTwoSidesOptimal";
export declare class PancakeswapV2RestrictedStrategyAddTwoSidesOptimal__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyAddTwoSidesOptimal>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyAddTwoSidesOptimal;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyAddTwoSidesOptimal__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyAddTwoSidesOptimal;
}
