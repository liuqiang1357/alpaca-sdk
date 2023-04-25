import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeRouterV2 } from "../PancakeRouterV2";
export declare class PancakeRouterV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _WETH: string, overrides?: Overrides): Promise<PancakeRouterV2>;
    getDeployTransaction(_factory: string, _WETH: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeRouterV2;
    connect(signer: Signer): PancakeRouterV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeRouterV2;
}
