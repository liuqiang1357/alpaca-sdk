import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockFlashLendingCallee, MockFlashLendingCalleeInterface } from "../MockFlashLendingCallee";
declare type MockFlashLendingCalleeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockFlashLendingCallee__factory extends ContractFactory {
    constructor(...args: MockFlashLendingCalleeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockFlashLendingCallee>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockFlashLendingCallee;
    connect(signer: Signer): MockFlashLendingCallee__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060f08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063af7bd14214602d575b600080fd5b60b160048036036080811015604157600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b811115607657600080fd5b820183602082011115608757600080fd5b803590602001918460018302840111600160201b8311171560a757600080fd5b50909250905060b3565b005b505050505056fea26469706673582212208407c767e400cd74f499a83988add4332a3887c49d0accff15f70dcbca0a365b64736f6c634300060c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockFlashLendingCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockFlashLendingCallee;
}
export {};
