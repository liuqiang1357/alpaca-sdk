import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapFactory } from "../WaultSwapFactory";
export declare class WaultSwapFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<WaultSwapFactory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapFactory;
    connect(signer: Signer): WaultSwapFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapFactory;
}
