import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Shield } from "../Shield";
export declare class Shield__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, _fairLaunchV1: string, overrides?: Overrides): Promise<Shield>;
    getDeployTransaction(_owner: string, _fairLaunchV1: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Shield;
    connect(signer: Signer): Shield__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Shield;
}
