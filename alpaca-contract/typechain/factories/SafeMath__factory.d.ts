import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SafeMath } from "../SafeMath";
export declare class SafeMath__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SafeMath>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SafeMath;
    connect(signer: Signer): SafeMath__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeMath;
}
