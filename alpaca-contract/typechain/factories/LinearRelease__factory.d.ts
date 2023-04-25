import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { LinearRelease } from "../LinearRelease";
export declare class LinearRelease__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_token: string, _lockupBps: BigNumberish, _fairLaunch: string, _startReleaseBlock: BigNumberish, _endReleaseBlock: BigNumberish, overrides?: Overrides): Promise<LinearRelease>;
    getDeployTransaction(_token: string, _lockupBps: BigNumberish, _fairLaunch: string, _startReleaseBlock: BigNumberish, _endReleaseBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): LinearRelease;
    connect(signer: Signer): LinearRelease__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LinearRelease;
}
