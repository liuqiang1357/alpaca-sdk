import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockAlpacaOracle, MockAlpacaOracleInterface } from "../MockAlpacaOracle";
declare type MockAlpacaOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockAlpacaOracle__factory extends ContractFactory {
    constructor(...args: MockAlpacaOracleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockAlpacaOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockAlpacaOracle;
    connect(signer: Signer): MockAlpacaOracle__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060b08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ac41865a14602d575b600080fd5b605860048036036040811015604157600080fd5b506001600160a01b03813581169160200135166071565b6040805192835260208301919091528051918290030190f35b5060009182915056fea26469706673582212201421d6e72d766c693ad1ad74dba739b9cfa27dfe7af864ec67380f80f32d87df64736f6c634300060c0033";
    static readonly abi: {
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
    }[];
    static createInterface(): MockAlpacaOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAlpacaOracle;
}
export {};
