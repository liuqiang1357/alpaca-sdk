import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiToken } from "../SushiToken";
export declare class SushiToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SushiToken>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiToken;
    connect(signer: Signer): SushiToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiToken;
}
