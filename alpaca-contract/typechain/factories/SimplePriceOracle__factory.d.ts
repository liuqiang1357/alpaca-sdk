import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SimplePriceOracle } from "../SimplePriceOracle";
export declare class SimplePriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SimplePriceOracle>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SimplePriceOracle;
    connect(signer: Signer): SimplePriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SimplePriceOracle;
}
