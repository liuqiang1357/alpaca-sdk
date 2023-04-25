import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlpacaNote, AlpacaNoteInterface } from "../AlpacaNote";
declare type AlpacaNoteConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AlpacaNote__factory extends ContractFactory {
    constructor(...args: AlpacaNoteConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AlpacaNote>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AlpacaNote;
    connect(signer: Signer): AlpacaNote__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122085527ed7be6c8dc121d4368cb8aa568bd631c9976b90a70b4feb535a4aa317ac64736f6c634300060c0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): AlpacaNoteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AlpacaNote;
}
export {};
