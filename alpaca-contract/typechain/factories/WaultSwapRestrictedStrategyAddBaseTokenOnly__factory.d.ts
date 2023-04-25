import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRestrictedStrategyAddBaseTokenOnly } from "../WaultSwapRestrictedStrategyAddBaseTokenOnly";
export declare class WaultSwapRestrictedStrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapRestrictedStrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRestrictedStrategyAddBaseTokenOnly;
    connect(signer: Signer): WaultSwapRestrictedStrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRestrictedStrategyAddBaseTokenOnly;
}
