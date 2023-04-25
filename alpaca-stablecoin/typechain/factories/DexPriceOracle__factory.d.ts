import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DexPriceOracle, DexPriceOracleInterface } from "../DexPriceOracle";
declare type DexPriceOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DexPriceOracle__factory extends ContractFactory {
    constructor(...args: DexPriceOracleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DexPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DexPriceOracle;
    connect(signer: Signer): DexPriceOracle__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610609806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063ac41865a14610046578063b8d8fbb41461008d578063c4d66de8146100b1575b600080fd5b6100746004803603604081101561005c57600080fd5b506001600160a01b03813581169160200135166100d9565b6040805192835260208301919091528051918290030190f35b61009561016d565b604080516001600160a01b039092168252519081900360200190f35b6100d7600480360360208110156100c757600080fd5b50356001600160a01b0316610182565b005b600080826001600160a01b0316846001600160a01b031614156101115750670de0b6b3a764000090506001600160401b034216610166565b600080548190610131906201000090046001600160a01b03168787610247565b909250905060006101548261014e85670de0b6b3a764000061031a565b9061037c565b9450506001600160401b034216925050505b9250929050565b6000546201000090046001600160a01b031681565b600054610100900460ff168061019b575061019b6103e0565b806101a9575060005460ff16155b6101e45760405162461bcd60e51b815260040180806020018281038252602e815260200180610585602e913960400191505060405180910390fd5b600054610100900460ff1615801561020f576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610243576000805461ff00191690555b5050565b600080600061025685856103f1565b5090506102648686866104c7565b506000806102738888886104c7565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156102ab57600080fd5b505afa1580156102bf573d6000803e3d6000fd5b505050506040513d60608110156102d557600080fd5b5080516020909101516001600160701b0391821693501690506001600160a01b038781169084161461030857808261030b565b81815b90999098509650505050505050565b60008261032957506000610376565b8282028284828161033657fe5b04146103735760405162461bcd60e51b81526004018080602001828103825260218152602001806105b36021913960400191505060405180910390fd5b90505b92915050565b60008082116103cf576040805162461bcd60e51b815260206004820152601a602482015279536166654d6174683a206469766973696f6e206279207a65726f60301b604482015290519081900360640190fd5b8183816103d857fe5b049392505050565b60006103eb3061055b565b15905090565b600080826001600160a01b0316846001600160a01b031614156104455760405162461bcd60e51b81526004018080602001828103825260238152602001806105626023913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610465578284610468565b83835b90925090506001600160a01b038216610166576040805162461bcd60e51b815260206004820152601c60248201527b50616e63616b654c6962726172793a205a45524f5f4144445245535360201b604482015290519081900360640190fd5b6000836001600160a01b031663e6a4390584846040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561052757600080fd5b505afa15801561053b573d6000803e3d6000fd5b505050506040513d602081101561055157600080fd5b5051949350505050565b3b15159056fe50616e63616b654c6962726172793a204944454e544943414c5f414444524553534553496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212208a6ecdbbc97a58c44ab632a9736dec461268b69db0f2aec58f589fc193b4b50164736f6c634300060c0033";
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
    static createInterface(): DexPriceOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DexPriceOracle;
}
export {};
