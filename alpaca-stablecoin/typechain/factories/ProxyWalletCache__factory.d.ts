import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyWalletCache, ProxyWalletCacheInterface } from "../ProxyWalletCache";
declare type ProxyWalletCacheConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyWalletCache__factory extends ContractFactory {
    constructor(...args: ProxyWalletCacheConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ProxyWalletCache>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProxyWalletCache;
    connect(signer: Signer): ProxyWalletCache__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610242806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637ed0c3b21461003b5780638bf4515c146100fb575b600080fd5b6100df6004803603602081101561005157600080fd5b810190602081018135600160201b81111561006b57600080fd5b82018360208201111561007d57600080fd5b803590602001918460018302840111600160201b8311171561009e57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061019f945050505050565b604080516001600160a01b039092168252519081900360200190f35b6100df6004803603602081101561011157600080fd5b810190602081018135600160201b81111561012b57600080fd5b82018360208201111561013d57600080fd5b803590602001918460018302840111600160201b8311171561015e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ea945050505050565b60008151602083016000f09050803b156001811461003657508151602092830120600090815291829052604090912080546001600160a01b0319166001600160a01b03831617905590565b805160209182012060009081529081905260409020546001600160a01b03169056fea2646970667358221220ac2ab1746fdbb1950b5da32cf16589874e935b1d250f703a25f4dc366844beeb64736f6c634300060c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ProxyWalletCacheInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyWalletCache;
}
export {};
