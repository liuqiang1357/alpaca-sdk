import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading } from "../PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading";
export declare class PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyWithdrawMinimizeTrading;
}
