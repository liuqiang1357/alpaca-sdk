import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StrategyWithdrawMinimizeTrading } from "../StrategyWithdrawMinimizeTrading";
export declare class StrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StrategyWithdrawMinimizeTrading;
    connect(signer: Signer): StrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategyWithdrawMinimizeTrading;
}
