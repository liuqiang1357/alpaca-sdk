import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeRouter } from "../PancakeRouter";
export declare class PancakeRouter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _WETH: string, overrides?: Overrides): Promise<PancakeRouter>;
    getDeployTransaction(_factory: string, _WETH: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeRouter;
    connect(signer: Signer): PancakeRouter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeRouter;
}
