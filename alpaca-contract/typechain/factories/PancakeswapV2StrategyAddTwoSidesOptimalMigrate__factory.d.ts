import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyAddTwoSidesOptimalMigrate } from "../PancakeswapV2StrategyAddTwoSidesOptimalMigrate";
export declare class PancakeswapV2StrategyAddTwoSidesOptimalMigrate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyAddTwoSidesOptimalMigrate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyAddTwoSidesOptimalMigrate;
    connect(signer: Signer): PancakeswapV2StrategyAddTwoSidesOptimalMigrate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyAddTwoSidesOptimalMigrate;
}
