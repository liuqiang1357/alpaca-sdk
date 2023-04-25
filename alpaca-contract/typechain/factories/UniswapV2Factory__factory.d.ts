import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { UniswapV2Factory } from "../UniswapV2Factory";
export declare class UniswapV2Factory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<UniswapV2Factory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): UniswapV2Factory;
    connect(signer: Signer): UniswapV2Factory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Factory;
}
