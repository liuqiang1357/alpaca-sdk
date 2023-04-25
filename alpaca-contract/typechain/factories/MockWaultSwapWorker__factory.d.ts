import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockWaultSwapWorker } from "../MockWaultSwapWorker";
export declare class MockWaultSwapWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): Promise<MockWaultSwapWorker>;
    getDeployTransaction(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockWaultSwapWorker;
    connect(signer: Signer): MockWaultSwapWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockWaultSwapWorker;
}
