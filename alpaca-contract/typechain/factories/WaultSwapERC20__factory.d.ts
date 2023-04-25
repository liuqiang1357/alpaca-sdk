import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapERC20 } from "../WaultSwapERC20";
export declare class WaultSwapERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<WaultSwapERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapERC20;
    connect(signer: Signer): WaultSwapERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapERC20;
}
