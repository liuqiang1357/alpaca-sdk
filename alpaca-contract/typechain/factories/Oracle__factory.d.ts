import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Oracle } from "../Oracle";
export declare class Oracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(factory_: string, overrides?: Overrides): Promise<Oracle>;
    getDeployTransaction(factory_: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Oracle;
    connect(signer: Signer): Oracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Oracle;
}
