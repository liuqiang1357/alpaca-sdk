import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2StrategyWithdrawMinimizeTrading } from "../PancakeswapV2StrategyWithdrawMinimizeTrading";
export declare class PancakeswapV2StrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2StrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2StrategyWithdrawMinimizeTrading;
    connect(signer: Signer): PancakeswapV2StrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2StrategyWithdrawMinimizeTrading;
}
