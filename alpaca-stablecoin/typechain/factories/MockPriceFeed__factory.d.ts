import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockPriceFeed, MockPriceFeedInterface } from "../MockPriceFeed";
declare type MockPriceFeedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockPriceFeed__factory extends ContractFactory {
    constructor(...args: MockPriceFeedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockPriceFeed>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockPriceFeed;
    connect(signer: Signer): MockPriceFeed__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060b18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063140d27201460375780637e91400f146056575b600080fd5b603d606e565b6040805192835290151560208301528051918290030190f35b605c6076565b60408051918252519081900360200190f35b600060019091565b60009056fea26469706673582212205655ae5b5cca6d079913156fc15cb29b21dbc04c69b2d6300a7f87d89d07fe9c64736f6c634300060c0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockPriceFeedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPriceFeed;
}
export {};
