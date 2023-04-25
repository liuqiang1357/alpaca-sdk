import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeERC20 } from "../PancakeERC20";
export declare class PancakeERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PancakeERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeERC20;
    connect(signer: Signer): PancakeERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeERC20;
}
