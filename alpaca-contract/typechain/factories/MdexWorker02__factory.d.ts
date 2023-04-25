import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexWorker02 } from "../MdexWorker02";
export declare class MdexWorker02__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexWorker02>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexWorker02;
    connect(signer: Signer): MdexWorker02__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexWorker02;
}
