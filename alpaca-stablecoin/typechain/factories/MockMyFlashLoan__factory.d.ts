import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockMyFlashLoan, MockMyFlashLoanInterface } from "../MockMyFlashLoan";
declare type MockMyFlashLoanConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockMyFlashLoan__factory extends ContractFactory {
    constructor(...args: MockMyFlashLoanConstructorParams);
    deploy(_flash: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockMyFlashLoan>;
    getDeployTransaction(_flash: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockMyFlashLoan;
    connect(signer: Signer): MockMyFlashLoan__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516102fe3803806102fe8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610299806100656000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806323e30c8b1461005c5780638237e53814610101578063acb5546814610109578063d336c82d14610193578063e4d25b6a146101b7575b600080fd5b6100ef600480360360a081101561007257600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156100b157600080fd5b8201836020820111156100c357600080fd5b803590602001918460018302840111600160201b831117156100e457600080fd5b5090925090506101bf565b60408051918252519081900360200190f35b6100ef6101d8565b6100ef6004803603608081101561011f57600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561015557600080fd5b82018360208201111561016757600080fd5b803590602001918460018302840111600160201b8311171561018857600080fd5b5090925090506101ea565b61019b610202565b604080516001600160a01b039092168252519081900360200190f35b6100ef610211565b6000805160206102248339815191529695505050505050565b60008051602061022483398151915281565b60008051602061024483398151915295945050505050565b6000546001600160a01b031681565b6000805160206102448339815191528156fe439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd90a749ded14b97653a44d6e6b0b8342c23ed955e329d919b01a4ee7ef7907f64ca264697066735822122096245b8e85db088d7923929e815c35c452e00f4e2e5b542b760cbcc1866f7d0e64736f6c634300060c0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MockMyFlashLoanInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockMyFlashLoan;
}
export {};
