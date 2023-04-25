import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { IPancakeMasterChef } from "../IPancakeMasterChef";
export declare class IPancakeMasterChef__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<IPancakeMasterChef>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): IPancakeMasterChef;
    connect(signer: Signer): IPancakeMasterChef__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeMasterChef;
}
