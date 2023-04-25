import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BSCPool } from "../BSCPool";
export declare class BSCPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_mdx: string, _mdxPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): Promise<BSCPool>;
    getDeployTransaction(_mdx: string, _mdxPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): BSCPool;
    connect(signer: Signer): BSCPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BSCPool;
}
