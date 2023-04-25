import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SwapMining } from "../SwapMining";
export declare class SwapMining__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_mdx: string, _factory: string, _oracle: string, _router: string, _targetToken: string, _mdxPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): Promise<SwapMining>;
    getDeployTransaction(_mdx: string, _factory: string, _oracle: string, _router: string, _targetToken: string, _mdxPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): SwapMining;
    connect(signer: Signer): SwapMining__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapMining;
}
