import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2Worker02 } from "../PancakeswapV2Worker02";
export declare class PancakeswapV2Worker02__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2Worker02>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2Worker02;
    connect(signer: Signer): PancakeswapV2Worker02__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2Worker02;
}
