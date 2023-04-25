import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyWithdrawMinimizeTrading } from "../WaultSwapRestrictedStrategyWithdrawMinimizeTrading";
export declare class WaultSwapRestrictedStrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyWithdrawMinimizeTrading;
    connect(signer: Signer): WaultSwapRestrictedStrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyWithdrawMinimizeTrading;
}
