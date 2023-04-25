import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { XALPACA } from "../XALPACA";
export declare class XALPACA__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<XALPACA>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): XALPACA;
    connect(signer: Signer): XALPACA__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): XALPACA;
}
