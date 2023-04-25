import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FairLaunch } from "../FairLaunch";
export declare class FairLaunch__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_alpaca: string, _devaddr: string, _alpacaPerBlock: BigNumberish, _startBlock: BigNumberish, _bonusLockupBps: BigNumberish, _bonusEndBlock: BigNumberish, overrides?: Overrides): Promise<FairLaunch>;
    getDeployTransaction(_alpaca: string, _devaddr: string, _alpacaPerBlock: BigNumberish, _startBlock: BigNumberish, _bonusLockupBps: BigNumberish, _bonusEndBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): FairLaunch;
    connect(signer: Signer): FairLaunch__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FairLaunch;
}
