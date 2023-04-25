import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MdexRouter } from "../MdexRouter";
export declare class MdexRouter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _WBNB: string, overrides?: Overrides): Promise<MdexRouter>;
    getDeployTransaction(_factory: string, _WBNB: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MdexRouter;
    connect(signer: Signer): MdexRouter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MdexRouter;
}
