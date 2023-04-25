import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockAggregatorV3 } from "../MockAggregatorV3";
export declare class MockAggregatorV3__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_price: BigNumberish, _decimals: BigNumberish, overrides?: Overrides): Promise<MockAggregatorV3>;
    getDeployTransaction(_price: BigNumberish, _decimals: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockAggregatorV3;
    connect(signer: Signer): MockAggregatorV3__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAggregatorV3;
}
