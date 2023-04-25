import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexPair } from "../MdexPair";
export declare class MdexPair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexPair>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexPair;
    connect(signer: Signer): MdexPair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexPair;
}
