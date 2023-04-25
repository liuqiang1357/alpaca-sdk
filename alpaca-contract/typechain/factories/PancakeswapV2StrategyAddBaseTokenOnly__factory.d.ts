import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyAddBaseTokenOnly } from "../PancakeswapV2StrategyAddBaseTokenOnly";
export declare class PancakeswapV2StrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyAddBaseTokenOnly;
    connect(signer: Signer): PancakeswapV2StrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyAddBaseTokenOnly;
}
