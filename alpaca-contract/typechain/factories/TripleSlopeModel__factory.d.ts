import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TripleSlopeModel } from "../TripleSlopeModel";
export declare class TripleSlopeModel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TripleSlopeModel>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TripleSlopeModel;
    connect(signer: Signer): TripleSlopeModel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TripleSlopeModel;
}
