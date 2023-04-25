import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SyrupBar } from "../SyrupBar";
export declare class SyrupBar__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, overrides?: Overrides): Promise<SyrupBar>;
    getDeployTransaction(_cake: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SyrupBar;
    connect(signer: Signer): SyrupBar__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SyrupBar;
}
