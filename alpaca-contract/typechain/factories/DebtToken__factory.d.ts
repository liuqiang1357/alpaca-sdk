import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { DebtToken } from "../DebtToken";
export declare class DebtToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<DebtToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): DebtToken;
    connect(signer: Signer): DebtToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DebtToken;
}
