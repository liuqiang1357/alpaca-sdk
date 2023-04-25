import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockMdexWorker } from "../MockMdexWorker";
export declare class MockMdexWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): Promise<MockMdexWorker>;
    getDeployTransaction(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockMdexWorker;
    connect(signer: Signer): MockMdexWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockMdexWorker;
}
