import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyPartialCloseMinimizeTrading } from "../MdexRestrictedStrategyPartialCloseMinimizeTrading";
export declare class MdexRestrictedStrategyPartialCloseMinimizeTrading__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyPartialCloseMinimizeTrading>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyPartialCloseMinimizeTrading;
    connect(signer: Signer): MdexRestrictedStrategyPartialCloseMinimizeTrading__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyPartialCloseMinimizeTrading;
}
