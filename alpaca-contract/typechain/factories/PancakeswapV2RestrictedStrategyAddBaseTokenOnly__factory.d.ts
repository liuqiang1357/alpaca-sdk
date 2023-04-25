import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeswapV2RestrictedStrategyAddBaseTokenOnly } from "../PancakeswapV2RestrictedStrategyAddBaseTokenOnly";
export declare class PancakeswapV2RestrictedStrategyAddBaseTokenOnly__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeswapV2RestrictedStrategyAddBaseTokenOnly>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeswapV2RestrictedStrategyAddBaseTokenOnly;
    connect(signer: Signer): PancakeswapV2RestrictedStrategyAddBaseTokenOnly__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapV2RestrictedStrategyAddBaseTokenOnly;
}
