import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FixedPointMath } from "../FixedPointMath";
export declare class FixedPointMath__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<FixedPointMath>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): FixedPointMath;
    connect(signer: Signer): FixedPointMath__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedPointMath;
}
