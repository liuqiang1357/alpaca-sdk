import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockPancakePair } from "../MockPancakePair";
export declare class MockPancakePair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockPancakePair>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockPancakePair;
    connect(signer: Signer): MockPancakePair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPancakePair;
}
