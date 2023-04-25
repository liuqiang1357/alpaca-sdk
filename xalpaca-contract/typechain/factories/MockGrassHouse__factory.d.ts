import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockGrassHouse } from "../MockGrassHouse";
export declare class MockGrassHouse__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_rewardToken: string, overrides?: Overrides): Promise<MockGrassHouse>;
    getDeployTransaction(_rewardToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockGrassHouse;
    connect(signer: Signer): MockGrassHouse__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockGrassHouse;
}
