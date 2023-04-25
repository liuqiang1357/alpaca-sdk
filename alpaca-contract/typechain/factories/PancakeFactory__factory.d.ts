import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeFactory } from "../PancakeFactory";
export declare class PancakeFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<PancakeFactory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeFactory;
    connect(signer: Signer): PancakeFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeFactory;
}
