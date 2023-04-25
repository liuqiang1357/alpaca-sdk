import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WETH } from "../WETH";
export declare class WETH__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WETH>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WETH;
    connect(signer: Signer): WETH__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH;
}
