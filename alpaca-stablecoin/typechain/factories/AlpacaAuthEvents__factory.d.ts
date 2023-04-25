import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlpacaAuthEvents, AlpacaAuthEventsInterface } from "../AlpacaAuthEvents";
declare type AlpacaAuthEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AlpacaAuthEvents__factory extends ContractFactory {
    constructor(...args: AlpacaAuthEventsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AlpacaAuthEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AlpacaAuthEvents;
    connect(signer: Signer): AlpacaAuthEvents__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212205fcbd8dcac8ee7d71d671040a870f65240918e99b32d9fa28b80815c20b4f8c464736f6c634300060c0033";
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
    static createInterface(): AlpacaAuthEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AlpacaAuthEvents;
}
export {};
