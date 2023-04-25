import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StronkAlpaca } from "../StronkAlpaca";
export declare class StronkAlpaca__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_alpacaAddress: string, _hodlableStartBlock: BigNumberish, _hodlableEndBlock: BigNumberish, _lockEndBlock: BigNumberish, overrides?: Overrides): Promise<StronkAlpaca>;
    getDeployTransaction(_alpacaAddress: string, _hodlableStartBlock: BigNumberish, _hodlableEndBlock: BigNumberish, _lockEndBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): StronkAlpaca;
    connect(signer: Signer): StronkAlpaca__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StronkAlpaca;
}
