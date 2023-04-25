import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockPancakeFactory } from "../MockPancakeFactory";
export declare class MockPancakeFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<MockPancakeFactory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockPancakeFactory;
    connect(signer: Signer): MockPancakeFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPancakeFactory;
}
