import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ProxyToken } from "../ProxyToken";
export declare class ProxyToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ProxyToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ProxyToken;
    connect(signer: Signer): ProxyToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyToken;
}
