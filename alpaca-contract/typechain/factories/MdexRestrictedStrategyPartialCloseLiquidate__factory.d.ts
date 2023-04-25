import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyPartialCloseLiquidate } from "../MdexRestrictedStrategyPartialCloseLiquidate";
export declare class MdexRestrictedStrategyPartialCloseLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyPartialCloseLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyPartialCloseLiquidate;
    connect(signer: Signer): MdexRestrictedStrategyPartialCloseLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyPartialCloseLiquidate;
}
