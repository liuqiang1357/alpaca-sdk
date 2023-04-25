import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2Worker } from "../PancakeswapV2Worker";
export declare class PancakeswapV2Worker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2Worker>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2Worker;
    connect(signer: Signer): PancakeswapV2Worker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2Worker;
}
