import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StronkAlpacaRelayer } from "../StronkAlpacaRelayer";
export declare class StronkAlpacaRelayer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_alpacaAddress: string, _userAddress: string, overrides?: Overrides): Promise<StronkAlpacaRelayer>;
    getDeployTransaction(_alpacaAddress: string, _userAddress: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): StronkAlpacaRelayer;
    connect(signer: Signer): StronkAlpacaRelayer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StronkAlpacaRelayer;
}
