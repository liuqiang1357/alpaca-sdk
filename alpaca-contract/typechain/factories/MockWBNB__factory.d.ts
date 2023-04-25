import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockWBNB } from "../MockWBNB";
export declare class MockWBNB__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockWBNB>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockWBNB;
    connect(signer: Signer): MockWBNB__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockWBNB;
}
