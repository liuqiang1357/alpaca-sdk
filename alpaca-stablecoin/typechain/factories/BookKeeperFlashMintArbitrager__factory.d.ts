import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BookKeeperFlashMintArbitrager, BookKeeperFlashMintArbitragerInterface } from "../BookKeeperFlashMintArbitrager";
declare type BookKeeperFlashMintArbitragerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BookKeeperFlashMintArbitrager__factory extends ContractFactory {
    constructor(...args: BookKeeperFlashMintArbitragerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BookKeeperFlashMintArbitrager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BookKeeperFlashMintArbitrager;
    connect(signer: Signer): BookKeeperFlashMintArbitrager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506113cb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063715018a6146100675780638da5cb5b14610071578063acb5546814610095578063c4d66de814610131578063e9cbd82214610157578063f2fde38b1461015f575b600080fd5b61006f610185565b005b61007961021f565b604080516001600160a01b039092168252519081900360200190f35b61011f600480360360808110156100ab57600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b8111156100e157600080fd5b8201836020820111156100f357600080fd5b803590602001918460018302840111600160201b8311171561011457600080fd5b50909250905061022e565b60408051918252519081900360200190f35b61006f6004803603602081101561014757600080fd5b50356001600160a01b0316610bcd565b610079610c93565b61006f6004803603602081101561017557600080fd5b50356001600160a01b0316610ca2565b61018d610d93565b6001600160a01b031661019e61021f565b6001600160a01b0316146101e7576040805162461bcd60e51b81526020600482018190526024820152600080516020611356833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b031690600080516020611376833981519152908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b60006102386112e1565b8383606081101561024857600080fd5b506040818101356001600160a01b039081168483015260208084013582169085015291359091168252805160028082526060828101909352816020016020820280368337505060655482519293506001600160a01b0316918391506000906102ac57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508160200151816001815181106102de57fe5b6001600160a01b03909216602092830291909101909101526000676765c793fa10079d601b1b8804905082604001516001600160a01b03166346a311d36040518163ffffffff1660e01b815260040160206040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d602081101561036f57600080fd5b5051604080516371d9c99560e11b815290516001600160a01b039092169163e3b3932a916004808201926020929091908290030181600087803b1580156103b557600080fd5b505af11580156103c9573d6000803e3d6000fd5b505050506040513d60208110156103df57600080fd5b505160408085015181516346a311d360e01b815291516001600160a01b0393841693639b19251a939216916346a311d3916004808301926020929190829003018186803b15801561042f57600080fd5b505afa158015610443573d6000803e3d6000fd5b505050506040513d602081101561045957600080fd5b5051604080516001600160e01b031960e085901b1681526001600160a01b03909216600483015251602480830192600092919082900301818387803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b5050505082604001516001600160a01b03166346a311d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156104f657600080fd5b505afa15801561050a573d6000803e3d6000fd5b505050506040513d602081101561052057600080fd5b50516040805160006020828101829052835180840382018152838501948590526331f0926560e01b909452306044840181815260648501889052606060848601908152865160a487015286516001600160a01b03909816976331f092659793968a9694959394929360c49091019290860191908190849084905b838110156105b257818101518382015260200161059a565b50505050905090810190601f1680156105df5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561060057600080fd5b505af1158015610614573d6000803e3d6000fd5b50505050600061063084602001516001600160a01b0316610d97565b845160655491925061064e916001600160a01b031690600019610e18565b83600001516001600160a01b03166338ed17398360008630426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156106d75781810151838201526020016106bf565b505050509050019650505050505050600060405180830381600087803b15801561070057600080fd5b505af1158015610714573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561073d57600080fd5b8101908080516040519392919084600160201b82111561075c57600080fd5b90830190602082018581111561077157600080fd5b82518660208202830111600160201b8211171561078d57600080fd5b82525081516020918201928201910280838360005b838110156107ba5781810151838201526020016107a2565b5050505091909101604052505086516065546107e594506001600160a01b0316925090506000610e18565b60006107fd85602001516001600160a01b0316610d97565b905061088285604001516001600160a01b031663e723b9776040518163ffffffff1660e01b815260040160206040518083038186803b15801561083f57600080fd5b505afa158015610853573d6000803e3d6000fd5b505050506040513d602081101561086957600080fd5b505160208701516001600160a01b031690600019610e18565b60408501516001600160a01b03166340853dce306108a08486610f71565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b5050505061098085604001516001600160a01b031663e723b9776040518163ffffffff1660e01b815260040160206040518083038186803b15801561093e57600080fd5b505afa158015610952573d6000803e3d6000fd5b505050506040513d602081101561096857600080fd5b505160208701516001600160a01b0316906000610e18565b610a1e85604001516001600160a01b03166346a311d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156109c057600080fd5b505afa1580156109d4573d6000803e3d6000fd5b505050506040513d60208110156109ea57600080fd5b5051610a0b610a048c676765c793fa10079d601b1b610fce565b8690611032565b6065546001600160a01b03169190610e18565b84604001516001600160a01b03166346a311d36040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d6020811015610a8557600080fd5b50516001600160a01b03166349bdc2b833610ab5610aae8d676765c793fa10079d601b1b610fce565b8790611032565b6000604051602001808281526020019150506040516020818303038152906040526040518463ffffffff1660e01b815260040180846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b37578181015183820152602001610b1f565b50505050905090810190601f168015610b645780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610b8557600080fd5b505af1158015610b99573d6000803e3d6000fd5b507f0a749ded14b97653a44d6e6b0b8342c23ed955e329d919b01a4ee7ef7907f64c9e9d5050505050505050505050505050565b600054610100900460ff1680610be65750610be6611091565b80610bf4575060005460ff16155b610c2f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611328602e913960400191505060405180910390fd5b600054610100900460ff16158015610c5a576000805460ff1961ff0019909116610100171660011790555b610c626110a2565b606580546001600160a01b0319166001600160a01b0384161790558015610c8f576000805461ff00191690555b5050565b6065546001600160a01b031681565b610caa610d93565b6001600160a01b0316610cbb61021f565b6001600160a01b031614610d04576040805162461bcd60e51b81526020600482018190526024820152600080516020611356833981519152604482015290519081900360640190fd5b6001600160a01b038116610d495760405162461bcd60e51b81526004018080602001828103825260268152602001806113026026913960400191505060405180910390fd5b6033546040516001600160a01b0380841692169060008051602061137683398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610de657600080fd5b505afa158015610dfa573d6000803e3d6000fd5b505050506040513d6020811015610e1057600080fd5b505192915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b60208310610e955780518252601f199092019160209182019101610e76565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ef7576040519150601f19603f3d011682016040523d82523d6000602084013e610efc565b606091505b5091509150818015610f2a575080511580610f2a5750808060200190516020811015610f2757600080fd5b50515b610f6a576040805162461bcd60e51b815260206004820152600c60248201526b2173616665417070726f766560a01b604482015290519081900360640190fd5b5050505050565b600082821115610fc8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611021576040805162461bcd60e51b815260206004820152601a602482015279536166654d6174683a206469766973696f6e206279207a65726f60301b604482015290519081900360640190fd5b81838161102a57fe5b049392505050565b60008282018381101561108a576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b600061109c30611154565b15905090565b600054610100900460ff16806110bb57506110bb611091565b806110c9575060005460ff16155b6111045760405162461bcd60e51b815260040180806020018281038252602e815260200180611328602e913960400191505060405180910390fd5b600054610100900460ff1615801561112f576000805460ff1961ff0019909116610100171660011790555b61113761115a565b61113f6111fa565b8015611151576000805461ff00191690555b50565b3b151590565b600054610100900460ff16806111735750611173611091565b80611181575060005460ff16155b6111bc5760405162461bcd60e51b815260040180806020018281038252602e815260200180611328602e913960400191505060405180910390fd5b600054610100900460ff1615801561113f576000805460ff1961ff0019909116610100171660011790558015611151576000805461ff001916905550565b600054610100900460ff16806112135750611213611091565b80611221575060005460ff16155b61125c5760405162461bcd60e51b815260040180806020018281038252602e815260200180611328602e913960400191505060405180910390fd5b600054610100900460ff16158015611287576000805460ff1961ff0019909116610100171660011790555b6000611291610d93565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020611376833981519152908290a3508015611151576000805461ff001916905550565b60408051606081018252600080825260208201819052918101919091529056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a264697066735822122049eb4e6d82bf544bf88b5c719d35021db638fc4386bfcda4dcb1a4380b7f937064736f6c634300060c0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): BookKeeperFlashMintArbitragerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BookKeeperFlashMintArbitrager;
}
export {};