import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRestrictedStrategyLiquidate } from "../MdexRestrictedStrategyLiquidate";
export declare class MdexRestrictedStrategyLiquidate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexRestrictedStrategyLiquidate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRestrictedStrategyLiquidate;
    connect(signer: Signer): MdexRestrictedStrategyLiquidate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRestrictedStrategyLiquidate;
}
