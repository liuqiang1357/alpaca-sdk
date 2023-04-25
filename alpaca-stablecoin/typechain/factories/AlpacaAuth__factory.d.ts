import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlpacaAuth, AlpacaAuthInterface } from "../AlpacaAuth";
declare type AlpacaAuthConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AlpacaAuth__factory extends ContractFactory {
    constructor(...args: AlpacaAuthConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AlpacaAuth>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AlpacaAuth;
    connect(signer: Signer): AlpacaAuth__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26103688061005e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af4035146100515780637a9e5e4b146100795780638da5cb5b1461009f578063bf7e214f146100c3575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100cb565b005b6100776004803603602081101561008f57600080fd5b50356001600160a01b031661017d565b6100a761022b565b604080516001600160a01b039092168252519081900360200190f35b6100a761023a565b6100e1336000356001600160e01b031916610249565b61012d576040805162461bcd60e51b8152602060048201526018602482015277185b1c1858d84b585d5d1a0b5d5b985d5d1a1bdc9a5e995960421b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b610193336000356001600160e01b031916610249565b6101df576040805162461bcd60e51b8152602060048201526018602482015277185b1c1858d84b585d5d1a0b5d5b985d5d1a1bdc9a5e995960421b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6001546001600160a01b031681565b6000546001600160a01b031681565b60006001600160a01b0383163014156102645750600161032c565b6001546001600160a01b03848116911614156102825750600161032c565b6000546001600160a01b031661029a5750600061032c565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b1580156102fd57600080fd5b505afa158015610311573d6000803e3d6000fd5b505050506040513d602081101561032757600080fd5b505190505b9291505056fea264697066735822122067660ae28172d266a4b93ceec56a7cf263a0ae67470905db0441e3f0ceb92cd464736f6c634300060c0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): AlpacaAuthInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AlpacaAuth;
}
export {};
