import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ERC20UpgradeSafe } from "../ERC20UpgradeSafe";
export declare class ERC20UpgradeSafe__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ERC20UpgradeSafe>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC20UpgradeSafe;
    connect(signer: Signer): ERC20UpgradeSafe__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20UpgradeSafe;
}
