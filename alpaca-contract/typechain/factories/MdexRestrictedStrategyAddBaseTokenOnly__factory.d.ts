import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyAddBaseTokenOnly } from "../MdexRestrictedStrategyAddBaseTokenOnly";
export declare class MdexRestrictedStrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyAddBaseTokenOnly;
    connect(signer: Signer): MdexRestrictedStrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyAddBaseTokenOnly;
}
