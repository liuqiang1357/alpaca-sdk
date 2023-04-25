import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2WorkerMigrate } from "../PancakeswapV2WorkerMigrate";
export declare class PancakeswapV2WorkerMigrate__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2WorkerMigrate>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2WorkerMigrate;
    connect(signer: Signer): PancakeswapV2WorkerMigrate__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2WorkerMigrate;
}
