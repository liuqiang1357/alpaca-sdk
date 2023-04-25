import { BigNumber } from 'ethers';
import { PancakeMasterChef } from '@alpaca-finance/alpaca-contract/typechain/PancakeMasterChef';
import { WexMaster } from '@alpaca-finance/alpaca-contract/typechain/WexMaster';
import { BSCPool } from '@alpaca-finance/alpaca-contract/typechain/BSCPool';
import { PairInfo, Dex, IFarmingConfig } from '../entity';
import { Provider } from '@ethersproject/providers';
import { WorkerConfig } from '@alpaca-finance/alpaca-contract/typechain/WorkerConfig';
import { IWorker } from '@alpaca-finance/alpaca-contract/typechain/IWorker';
import { UniswapV2Pair } from '@alpaca-finance/alpaca-contract/typechain/UniswapV2Pair';
import { IContractCall } from '../libs/batchContractCaller';
import { Route, Token } from '@alpaca-finance/pancakeswap-sdk';
export declare type IGenericMasterChef = PancakeMasterChef | WexMaster | BSCPool;
export declare function getFarmRewardPerBlock(masterChef: IGenericMasterChef, blockNumber?: number): Promise<BigNumber>;
export declare function getFarmRewardPerBlockContractCall(dex: Dex, blockNumber: number, provider: Provider): IContractCall;
export declare function getPoolInfo(masterChef: IGenericMasterChef, poolId: number): Promise<{
    lpToken: string;
    allocPoint: BigNumber;
    lastRewardBlock: BigNumber;
    accRewardPerShare: BigNumber;
}>;
export declare function getPoolInfoContractCall(dex: Dex, poolId: number, provider: Provider): IContractCall;
export declare function getGenericMasterChefContract(dex: Dex, provider: Provider): IGenericMasterChef;
export declare function getUserInfo(masterChef: IGenericMasterChef, poolId: number, workerAddress: string): Promise<{
    amount: BigNumber;
    rewardDebt: BigNumber;
}>;
export declare function getMasterChef(_dex: Dex, _provider: Provider): IGenericMasterChef;
export declare function resolveReservePair(reserve0: BigNumber, reserve1: BigNumber, token0: string, token1: string, baseTokenAddress: string): [BigNumber, BigNumber, string, string];
export declare function getMaxLeverage(worker: IWorker, workerConfig: WorkerConfig, farmingConfig: IFarmingConfig): Promise<BigNumber>;
export declare function getPairInfo(lpToken: UniswapV2Pair, provider: Provider, blockNumber?: number): Promise<PairInfo>;
export declare function getPairInfoByLpAddress(lpAddress: string, provider: Provider, blockNumber?: number): Promise<PairInfo>;
/**
 * @export
 * @param {string} inputTokenAddress
 * @param {Array<string>} lpPairAddresses
 * @param {(Signer | Provider)} provider
 * @return {*}  {Promise<
 *   [
 *     Route,
 *     Token,
 *     Token,
 *     Array<{
 *       tokenIn: number
 *       tokenOut: number
 *     }>,
 *   ]
 * >}
 * @description input lpPairAddresses and inputTokenAddress, it will resolve the correct multi route path from tokenIn to tokenOut seamlessly
 * similar to getRouteAndTokens
 */
export declare function asyncGetRouteAndTokensFromLpAddresses(inputTokenAddress: string, lpPairAddresses: Array<string>, provider: Provider, blockNumber?: number): Promise<[
    Route,
    Token,
    Token,
    Array<{
        tokenIn: number;
        tokenOut: number;
    }>
]>;
