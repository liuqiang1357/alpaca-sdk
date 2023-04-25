import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockContractContext } from "../MockContractContext";
export declare class MockContractContext__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockContractContext>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockContractContext;
    connect(signer: Signer): MockContractContext__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockContractContext;
}
