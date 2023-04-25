import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { AlpacaFeeder } from "../AlpacaFeeder";
export declare class AlpacaFeeder__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<AlpacaFeeder>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): AlpacaFeeder;
    connect(signer: Signer): AlpacaFeeder__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AlpacaFeeder;
}
