import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { UniswapV2Pair } from "../UniswapV2Pair";
export declare class UniswapV2Pair__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<UniswapV2Pair>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): UniswapV2Pair;
    connect(signer: Signer): UniswapV2Pair__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Pair;
}
