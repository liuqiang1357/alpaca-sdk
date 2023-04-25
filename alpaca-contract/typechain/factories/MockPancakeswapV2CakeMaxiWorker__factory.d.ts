import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockPancakeswapV2CakeMaxiWorker } from "../MockPancakeswapV2CakeMaxiWorker";
export declare class MockPancakeswapV2CakeMaxiWorker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_baseToken: string, _farmingToken: string, _path: string[], _rewardPath: string[], overrides?: Overrides): Promise<MockPancakeswapV2CakeMaxiWorker>;
    getDeployTransaction(_baseToken: string, _farmingToken: string, _path: string[], _rewardPath: string[], overrides?: Overrides): TransactionRequest;
    attach(address: string): MockPancakeswapV2CakeMaxiWorker;
    connect(signer: Signer): MockPancakeswapV2CakeMaxiWorker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPancakeswapV2CakeMaxiWorker;
}
