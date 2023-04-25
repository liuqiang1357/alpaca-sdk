import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockStakingRewards } from "../MockStakingRewards";
export declare class MockStakingRewards__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, overrides?: Overrides): Promise<MockStakingRewards>;
    getDeployTransaction(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockStakingRewards;
    connect(signer: Signer): MockStakingRewards__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockStakingRewards;
}
