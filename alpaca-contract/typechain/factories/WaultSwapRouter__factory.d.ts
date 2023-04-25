import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WaultSwapRouter } from "../WaultSwapRouter";
export declare class WaultSwapRouter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _WETH: string, overrides?: Overrides): Promise<WaultSwapRouter>;
    getDeployTransaction(_factory: string, _WETH: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): WaultSwapRouter;
    connect(signer: Signer): WaultSwapRouter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WaultSwapRouter;
}
