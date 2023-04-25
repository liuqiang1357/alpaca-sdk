import { BytesLike } from 'ethers';
import { Result } from 'ethers/lib/utils';
import { Multicall } from '@alpaca-finance/alpaca-contract/typechain/Multicall';
export interface IContractCall {
    contract: IEthersContract;
    functionName: string;
    params?: any[];
}
export interface IBatchContractCallOptions {
    multicallCap?: number;
}
export interface ICallData {
    target: string;
    callData: string;
}
export declare type IEthersContract = {
    address: string;
    functions: {
        [name: string]: IEthersContractFunction;
    };
    interface: IEtherInterface;
};
export declare type IEthersContractFunction<T = any> = (...args: Array<any>) => Promise<T>;
export declare type IEtherInterface = {
    encodeFunctionData: (functionFragment: any, values?: any) => string;
    decodeFunctionResult: (functionFragment: any, data: BytesLike) => Result;
};
export declare class BatchContractCaller {
    private contractCalls;
    multicallCap: number;
    constructor(contractCalls: IContractCall[], options?: IBatchContractCallOptions);
    addCall(...contractCalls: IContractCall[]): void;
    /**
     * The conventional Promise.all call, in case that Multicall has not been deployed yet
     */
    call<T extends unknown[]>(blockNumber?: number): Promise<T>;
    /**
     * Do multicall in one request
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    multicallOnce<T extends unknown[]>(multicall: Multicall, blockNumber?: number): Promise<T>;
    /**
     * Do multicall by chunking IContractCall into small peices and make multiple multicall requests
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    multicall<T extends unknown[]>(multicall: Multicall, blockNumber?: number): Promise<T>;
    /**
     * Build ICallData array, make multicall request, and map the result into a proper format
     * @param contractCalls - an array of IContractCalls
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    private _multicall;
}
