import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { GrassHouse } from "../GrassHouse";
export declare class GrassHouse__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<GrassHouse>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): GrassHouse;
    connect(signer: Signer): GrassHouse__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GrassHouse;
}
