import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockProxyToken } from "../MockProxyToken";
export declare class MockProxyToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockProxyToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockProxyToken;
    connect(signer: Signer): MockProxyToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockProxyToken;
}
