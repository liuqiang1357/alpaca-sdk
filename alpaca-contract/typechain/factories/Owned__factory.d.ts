import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Owned } from "../Owned";
export declare class Owned__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, overrides?: Overrides): Promise<Owned>;
    getDeployTransaction(_owner: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Owned;
    connect(signer: Signer): Owned__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Owned;
}
