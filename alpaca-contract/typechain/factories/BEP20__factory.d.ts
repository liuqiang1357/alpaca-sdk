import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BEP20 } from "../BEP20";
export declare class BEP20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, overrides?: Overrides): Promise<BEP20>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): BEP20;
    connect(signer: Signer): BEP20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BEP20;
}
