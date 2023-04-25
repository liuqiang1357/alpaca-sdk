import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StrategyAddBaseTokenOnly } from "../StrategyAddBaseTokenOnly";
export declare class StrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StrategyAddBaseTokenOnly;
    connect(signer: Signer): StrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategyAddBaseTokenOnly;
}
