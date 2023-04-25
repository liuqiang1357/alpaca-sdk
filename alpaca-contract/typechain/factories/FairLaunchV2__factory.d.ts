import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FairLaunchV2 } from "../FairLaunchV2";
export declare class FairLaunchV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_FAIR_LAUNCH_V1: string, _alpaca: string, _MASTER_PID: BigNumberish, overrides?: Overrides): Promise<FairLaunchV2>;
    getDeployTransaction(_FAIR_LAUNCH_V1: string, _alpaca: string, _MASTER_PID: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): FairLaunchV2;
    connect(signer: Signer): FairLaunchV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FairLaunchV2;
}
