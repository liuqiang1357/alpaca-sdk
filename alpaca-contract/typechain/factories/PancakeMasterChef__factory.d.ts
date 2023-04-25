import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PancakeMasterChef } from "../PancakeMasterChef";
export declare class PancakeMasterChef__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, _syrup: string, _devaddr: string, _cakePerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): Promise<PancakeMasterChef>;
    getDeployTransaction(_cake: string, _syrup: string, _devaddr: string, _cakePerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): PancakeMasterChef;
    connect(signer: Signer): PancakeMasterChef__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PancakeMasterChef;
}
