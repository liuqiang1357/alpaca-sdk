import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeToken } from "../CakeToken";
export declare class CakeToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CakeToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeToken;
    connect(signer: Signer): CakeToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeToken;
}
