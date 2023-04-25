import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LiquidationEngine, LiquidationEngineInterface } from "../LiquidationEngine";
declare type LiquidationEngineConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiquidationEngine__factory extends ContractFactory {
    constructor(...args: LiquidationEngineConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LiquidationEngine>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LiquidationEngine;
    connect(signer: Signer): LiquidationEngine__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506120fb806100206000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c80631ebce5931461009357806328e49a42146100a85780633f4ba83a146100c6578063485cc955146100ce5780635c975abb146100e157806369245009146100f65780638456cb59146100fe578063957aa58c14610106578063d63b23b21461011b578063e3b3932a14610123575b600080fd5b6100a66100a1366004611adf565b61012b565b005b6100b0610972565b6040516100bd9190611bb1565b60405180910390f35b6100a6610981565b6100a66100dc366004611a6f565b610c09565b6100e9610dcb565b6040516100bd9190611bc5565b6100a6610dd4565b6100a66110a4565b61010e611329565b6040516100bd9190611bd0565b6100a661132f565b6100b06115fd565b600260655414156101575760405162461bcd60e51b815260040161014e90612042565b60405180910390fd5b6002606555610164610dcb565b156101815760405162461bcd60e51b815260040161014e90611e8b565b6099546001146101a35760405162461bcd60e51b815260040161014e90611c9f565b846101c05760405162461bcd60e51b815260040161014e90611e02565b836101dd5760405162461bcd60e51b815260040161014e90611d07565b6101e56119f3565b609754604051630a76216560e21b81526001600160a01b03909116906329d8859490610217908b908b90600401611bd9565b604080518083038186803b15801561022e57600080fd5b505afa158015610242573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102669190611b8e565b60208301528152610275611a29565b609760009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b1580156102c357600080fd5b505afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb9190611a53565b6001600160a01b03166328c84bbd8a6040518263ffffffff1660e01b81526004016103269190611bd0565b60206040518083038186803b15801561033e57600080fd5b505afa158015610352573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103769190611a53565b6001600160a01b0390811682526097546040805163d868246160e01b81529051919092169163d8682461916004808301926020929190829003018186803b1580156103c057600080fd5b505afa1580156103d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f89190611a53565b6001600160a01b0316638c492d078a6040518263ffffffff1660e01b81526004016104239190611bd0565b60206040518083038186803b15801561043b57600080fd5b505afa15801561044f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104739190611ac7565b6020808301919091526097546040805163d868246160e01b815290516001600160a01b039092169263d868246192600480840193829003018186803b1580156104bb57600080fd5b505afa1580156104cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f39190611a53565b6001600160a01b031663a09b0fe08a6040518263ffffffff1660e01b815260040161051e9190611bd0565b60206040518083038186803b15801561053657600080fd5b505afa15801561054a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056e9190611ac7565b604082015280516001600160a01b03811661059b5760405162461bcd60e51b815260040161014e90611dc0565b600082602001511180156105cf5750604082015160208401516105bd9161160c565b602083015184516105cd9161160c565b105b6105eb5760405162461bcd60e51b815260040161014e90612000565b60975460985460405163b4ac08bb60e01b81526001600160a01b039283169263b4ac08bb9261061f92911690600401611bb1565b60206040518083038186803b15801561063757600080fd5b505afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f9190611ac7565b836040018181525050806001600160a01b03166316d8d2918b856020015186600001518d8d8d338e8e8e6040518b63ffffffff1660e01b81526004016106be9a99989796959493929190611c25565b600060405180830381600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b5050609754604051630a76216560e21b81526001600160a01b0390911692506329d885949150610722908d908d90600401611bd9565b604080518083038186803b15801561073957600080fd5b505afa15801561074d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107719190611b8e565b6080850181905260608501919091526020840151116107a25760405162461bcd60e51b815260040161014e90611eb5565b6107cb82604001516107c58560800151866020015161164f90919063ffffffff16565b9061160c565b60a08401819052604080850151609754609854925163b4ac08bb60e01b8152610866936001600160a01b039283169263b4ac08bb926108109290911690600401611bb1565b60206040518083038186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190611ac7565b9061164f565b10156108845760405162461bcd60e51b815260040161014e90611efa565b606083015115801561089a575060008360800151115b1561096157600160ff1b8360800151106108c65760405162461bcd60e51b815260040161014e90611cd3565b609760009054906101000a90046001600160a01b03166001600160a01b031663b1df25948b8b8c609860009054906101000a90046001600160a01b0316600089608001516000036040518763ffffffff1660e01b815260040161092e96959493929190611bf0565b600060405180830381600087803b15801561094857600080fd5b505af115801561095c573d6000803e3d6000fd5b505050505b505060016065555050505050505050565b6098546001600160a01b031681565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b1580156109c657600080fd5b505afa1580156109da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fe9190611a53565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a4857600080fd5b505afa158015610a5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a809190611ac7565b336040518363ffffffff1660e01b8152600401610a9e929190611bd9565b60206040518083038186803b158015610ab657600080fd5b505afa158015610aca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aee9190611aa7565b80610be25750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b3c57600080fd5b505afa158015610b50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b749190611ac7565b336040518363ffffffff1660e01b8152600401610b92929190611bd9565b60206040518083038186803b158015610baa57600080fd5b505afa158015610bbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be29190611aa7565b610bfe5760405162461bcd60e51b815260040161014e90611fcf565b610c06611677565b50565b600054610100900460ff1680610c225750610c226116e5565b80610c30575060005460ff16155b610c4c5760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff16158015610c77576000805460ff1961ff0019909116610100171660011790555b610c7f6116f6565b610c87611788565b826001600160a01b0316636f3a3bfc6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610cc257600080fd5b505af1158015610cd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfa9190611ac7565b5082609760006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816001600160a01b0316632a608d5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d939190611ac7565b50609880546001600160a01b0319166001600160a01b03841617905560016099558015610dc6576000805461ff00191690555b505050565b60335460ff1690565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610e1957600080fd5b505afa158015610e2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e519190611a53565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e9b57600080fd5b505afa158015610eaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed39190611ac7565b336040518363ffffffff1660e01b8152600401610ef1929190611bd9565b60206040518083038186803b158015610f0957600080fd5b505afa158015610f1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f419190611aa7565b806110355750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b158015610f8f57600080fd5b505afa158015610fa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc79190611ac7565b336040518363ffffffff1660e01b8152600401610fe5929190611bd9565b60206040518083038186803b158015610ffd57600080fd5b505afa158015611011573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110359190611aa7565b6110515760405162461bcd60e51b815260040161014e90612079565b6099546001146110735760405162461bcd60e51b815260040161014e90611c9f565b600060998190556040517fbf689b4aae670d200b1d2b971ace2e0c3bef88a9c5e93f36705c7b86eab630b99190a150565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b1580156110e957600080fd5b505afa1580156110fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111219190611a53565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116b57600080fd5b505afa15801561117f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a39190611ac7565b336040518363ffffffff1660e01b81526004016111c1929190611bd9565b60206040518083038186803b1580156111d957600080fd5b505afa1580156111ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112119190611aa7565b806113055750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561125f57600080fd5b505afa158015611273573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112979190611ac7565b336040518363ffffffff1660e01b81526004016112b5929190611bd9565b60206040518083038186803b1580156112cd57600080fd5b505afa1580156112e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113059190611aa7565b6113215760405162461bcd60e51b815260040161014e90611fcf565b610c066117fe565b60995481565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561137457600080fd5b505afa158015611388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ac9190611a53565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156113f657600080fd5b505afa15801561140a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142e9190611ac7565b336040518363ffffffff1660e01b815260040161144c929190611bd9565b60206040518083038186803b15801561146457600080fd5b505afa158015611478573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149c9190611aa7565b806115905750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b1580156114ea57600080fd5b505afa1580156114fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115229190611ac7565b336040518363ffffffff1660e01b8152600401611540929190611bd9565b60206040518083038186803b15801561155857600080fd5b505afa15801561156c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115909190611aa7565b6115ac5760405162461bcd60e51b815260040161014e90612079565b609954156115cc5760405162461bcd60e51b815260040161014e90611d8b565b60016099556040517f1868a6ced217213f36be87ba9aee25cde5381b42e85c8f88e73b18772c0bd07390600090a150565b6097546001600160a01b031681565b60008261161b57506000611649565b8282028284828161162857fe5b04146116465760405162461bcd60e51b815260040161014e90611f8e565b90505b92915050565b6000828211156116715760405162461bcd60e51b815260040161014e90611e54565b50900390565b61167f610dcb565b61169b5760405162461bcd60e51b815260040161014e90611d5d565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6116ce611855565b6040516116db9190611bb1565b60405180910390a1565b60006116f030611859565b15905090565b600054610100900460ff168061170f575061170f6116e5565b8061171d575060005460ff16155b6117395760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff16158015611764576000805460ff1961ff0019909116610100171660011790555b61176c61185f565b6117746118e0565b8015610c06576000805461ff001916905550565b600054610100900460ff16806117a157506117a16116e5565b806117af575060005460ff16155b6117cb5760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff161580156117f6576000805460ff1961ff0019909116610100171660011790555b61177461196c565b611806610dcb565b156118235760405162461bcd60e51b815260040161014e90611e8b565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116ce5b3390565b3b151590565b600054610100900460ff168061187857506118786116e5565b80611886575060005460ff16155b6118a25760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff16158015611774576000805460ff1961ff0019909116610100171660011790558015610c06576000805461ff001916905550565b600054610100900460ff16806118f957506118f96116e5565b80611907575060005460ff16155b6119235760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff1615801561194e576000805460ff1961ff0019909116610100171660011790555b6033805460ff191690558015610c06576000805461ff001916905550565b600054610100900460ff168061198557506119856116e5565b80611993575060005460ff16155b6119af5760405162461bcd60e51b815260040161014e90611f40565b600054610100900460ff161580156119da576000805460ff1961ff0019909116610100171660011790555b60016065558015610c06576000805461ff001916905550565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b600060208284031215611a64578081fd5b8151611646816120b0565b60008060408385031215611a81578081fd5b8235611a8c816120b0565b91506020830135611a9c816120b0565b809150509250929050565b600060208284031215611ab8578081fd5b81518015158114611646578182fd5b600060208284031215611ad8578081fd5b5051919050565b600080600080600080600060c0888a031215611af9578283fd5b873596506020880135611b0b816120b0565b955060408801359450606088013593506080880135611b29816120b0565b925060a08801356001600160401b0380821115611b44578384fd5b818a0191508a601f830112611b57578384fd5b813581811115611b65578485fd5b8b6020828501011115611b76578485fd5b60208301945080935050505092959891949750929550565b60008060408385031215611ba0578182fd5b505080516020909101519092909150565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b9586526001600160a01b039485166020870152928416604086015292166060840152608083019190915260a082015260c00190565b8a8152602081018a9052604081018990526001600160a01b0388811660608301526080820188905260a0820187905285811660c0830152841660e0820152610120610100820181905281018290526000610140838582850137828401810191909152601f909201601f191601019998505050505050505050565b6020808252601a90820152794c69717569646174696f6e456e67696e652f6e6f742d6c69766560301b604082015260600190565b6020808252601a90820152794c69717569646174696f6e456e67696e652f6f766572666c6f7760301b604082015260600190565b60208082526036908201527f4c69717569646174696f6e456e67696e652f7a65726f2d6d61782d646562742d6040820152751d985b1d594b5d1bcb58994b5b1a5c5d5a59185d195960521b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b6020808252601b908201527a131a5c5d5a59185d1a5bdb915b99da5b994bdb9bdd0b58d859d959602a1b604082015260600190565b60208082526022908201527f4c69717569646174696f6e456e67696e652f6e6f742d7365742d737472617465604082015261677960f01b606082015260800190565b60208082526032908201527f4c69717569646174696f6e456e67696e652f7a65726f2d646562742d76616c75604082015271194b5d1bcb58994b5b1a5c5d5a59185d195960721b606082015260800190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526025908201527f4c69717569646174696f6e456e67696e652f646562742d6e6f742d6c6971756960408201526419185d195960da1b606082015260800190565b60208082526026908201527f4c69717569646174696f6e456e67696e652f7061796d656e742d6e6f742d726560408201526518d95a5d995960d21b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526017908201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604082015260600190565b60208082526022908201527f4c69717569646174696f6e456e67696e652f706f736974696f6e2d69732d7361604082015261666560f01b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6020808252601f908201527f21286f776e6572526f6c65206f722073686f7753746f70706572526f6c652900604082015260600190565b6001600160a01b0381168114610c0657600080fdfea2646970667358221220348e4e7aa5d13e89ff68c0ebafc014fe52b32dafb09c61db940e8d2b52b51a7d64736f6c634300060c0033";
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
    static createInterface(): LiquidationEngineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiquidationEngine;
}
export {};
