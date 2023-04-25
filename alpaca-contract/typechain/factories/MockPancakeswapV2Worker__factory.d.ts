import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockPancakeswapV2Worker } from "../MockPancakeswapV2Worker";
export declare class MockPancakeswapV2Worker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): Promise<MockPancakeswapV2Worker>;
    getDeployTransaction(_lpToken: string, _baseToken: string, _farmingToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockPancakeswapV2Worker;
    connect(signer: Signer): MockPancakeswapV2Worker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPancakeswapV2Worker;
}
