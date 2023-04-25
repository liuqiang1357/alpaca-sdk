import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockFairLaunch } from "../MockFairLaunch";
export declare class MockFairLaunch__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_alpaca: string, _proxyToken: string, overrides?: Overrides): Promise<MockFairLaunch>;
    getDeployTransaction(_alpaca: string, _proxyToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockFairLaunch;
    connect(signer: Signer): MockFairLaunch__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockFairLaunch;
}
