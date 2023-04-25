import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { IMasterChef } from "../IMasterChef";
export declare class IMasterChef__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<IMasterChef>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): IMasterChef;
    connect(signer: Signer): IMasterChef__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): IMasterChef;
}
