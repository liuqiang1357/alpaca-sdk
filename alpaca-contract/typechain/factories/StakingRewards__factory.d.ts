import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { StakingRewards } from "../StakingRewards";
export declare class StakingRewards__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, overrides?: Overrides): Promise<StakingRewards>;
    getDeployTransaction(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): StakingRewards;
    connect(signer: Signer): StakingRewards__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingRewards;
}
