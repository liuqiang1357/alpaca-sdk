import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { AlpacaToken } from "../AlpacaToken";
export declare class AlpacaToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_startReleaseBlock: BigNumberish, _endReleaseBlock: BigNumberish, overrides?: Overrides): Promise<AlpacaToken>;
    getDeployTransaction(_startReleaseBlock: BigNumberish, _endReleaseBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): AlpacaToken;
    connect(signer: Signer): AlpacaToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AlpacaToken;
}
