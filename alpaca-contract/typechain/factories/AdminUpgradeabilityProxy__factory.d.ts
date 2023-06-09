import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, PayableOverrides } from "@ethersproject/contracts";
import type { AdminUpgradeabilityProxy } from "../AdminUpgradeabilityProxy";
export declare class AdminUpgradeabilityProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_logic: string, _admin: string, _data: BytesLike, overrides?: PayableOverrides): Promise<AdminUpgradeabilityProxy>;
    getDeployTransaction(_logic: string, _admin: string, _data: BytesLike, overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): AdminUpgradeabilityProxy;
    connect(signer: Signer): AdminUpgradeabilityProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AdminUpgradeabilityProxy;
}
