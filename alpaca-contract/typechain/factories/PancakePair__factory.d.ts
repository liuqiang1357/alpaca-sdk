import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakePair } from "../PancakePair";
export declare class PancakePair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakePair>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakePair;
    connect(signer: Signer): PancakePair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakePair;
}
