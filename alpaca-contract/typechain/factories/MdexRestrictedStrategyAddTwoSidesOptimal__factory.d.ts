import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyAddTwoSidesOptimal } from "../MdexRestrictedStrategyAddTwoSidesOptimal";
export declare class MdexRestrictedStrategyAddTwoSidesOptimal__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyAddTwoSidesOptimal>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyAddTwoSidesOptimal;
    connect(signer: Signer): MdexRestrictedStrategyAddTwoSidesOptimal__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyAddTwoSidesOptimal;
}
