import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapWorker } from "../PancakeswapWorker";
export declare class PancakeswapWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapWorker>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapWorker;
    connect(signer: Signer): PancakeswapWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapWorker;
}
