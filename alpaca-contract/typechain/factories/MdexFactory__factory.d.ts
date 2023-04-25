import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexFactory } from "../MdexFactory";
export declare class MdexFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<MdexFactory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexFactory;
    connect(signer: Signer): MdexFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexFactory;
}
