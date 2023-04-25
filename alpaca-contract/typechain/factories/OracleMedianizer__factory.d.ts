import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { OracleMedianizer } from "../OracleMedianizer";
export declare class OracleMedianizer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OracleMedianizer>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OracleMedianizer;
    connect(signer: Signer): OracleMedianizer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleMedianizer;
}
