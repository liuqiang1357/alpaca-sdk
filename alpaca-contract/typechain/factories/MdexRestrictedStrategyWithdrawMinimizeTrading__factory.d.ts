import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyWithdrawMinimizeTrading } from "../MdexRestrictedStrategyWithdrawMinimizeTrading";
export declare class MdexRestrictedStrategyWithdrawMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyWithdrawMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyWithdrawMinimizeTrading;
    connect(signer: Signer): MdexRestrictedStrategyWithdrawMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyWithdrawMinimizeTrading;
}
