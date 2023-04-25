import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { IBSCPool } from "../IBSCPool";
export declare class IBSCPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<IBSCPool>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): IBSCPool;
    connect(signer: Signer): IBSCPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): IBSCPool;
}
