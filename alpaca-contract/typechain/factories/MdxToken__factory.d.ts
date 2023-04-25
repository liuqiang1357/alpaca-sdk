import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdxToken } from "../MdxToken";
export declare class MdxToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdxToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdxToken;
    connect(signer: Signer): MdxToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdxToken;
}
