import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WexMaster } from "../WexMaster";
export declare class WexMaster__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_wex: string, _wexPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): Promise<WexMaster>;
    getDeployTransaction(_wex: string, _wexPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): WexMaster;
    connect(signer: Signer): WexMaster__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WexMaster;
}
