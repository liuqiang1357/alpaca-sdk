import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyAddTwoSidesOptimal } from "../PancakeswapV2StrategyAddTwoSidesOptimal";
export declare class PancakeswapV2StrategyAddTwoSidesOptimal__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyAddTwoSidesOptimal>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyAddTwoSidesOptimal;
    connect(signer: Signer): PancakeswapV2StrategyAddTwoSidesOptimal__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyAddTwoSidesOptimal;
}
