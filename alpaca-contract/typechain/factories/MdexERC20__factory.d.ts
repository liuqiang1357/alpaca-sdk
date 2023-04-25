import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexERC20 } from "../MdexERC20";
export declare class MdexERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MdexERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexERC20;
    connect(signer: Signer): MdexERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexERC20;
}
