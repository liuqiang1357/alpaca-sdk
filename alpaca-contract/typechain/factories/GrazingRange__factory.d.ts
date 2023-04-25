import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { GrazingRange } from "../GrazingRange";
export declare class GrazingRange__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<GrazingRange>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): GrazingRange;
    connect(signer: Signer): GrazingRange__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GrazingRange;
}
