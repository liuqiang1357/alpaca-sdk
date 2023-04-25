import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ChainLinkPriceOracle } from "../ChainLinkPriceOracle";
export declare class ChainLinkPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ChainLinkPriceOracle>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ChainLinkPriceOracle;
    connect(signer: Signer): ChainLinkPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainLinkPriceOracle;
}
