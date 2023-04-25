import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StabilityFeeCollector, StabilityFeeCollectorInterface } from "../StabilityFeeCollector";
declare type StabilityFeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StabilityFeeCollector__factory extends ContractFactory {
    constructor(...args: StabilityFeeCollectorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StabilityFeeCollector>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StabilityFeeCollector;
    connect(signer: Signer): StabilityFeeCollector__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506119b0806100206000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c806328e49a42146100935780633f4ba83a146100b1578063485cc955146100bb578063497777d5146100ce5780635c975abb146100ee578063796a39bb146101035780637e0972f5146101165780638456cb5914610129578063a985bdcf14610131578063e3b3932a14610139575b600080fd5b61009b610141565b6040516100a8919061164e565b60405180910390f35b6100b9610150565b005b6100b96100c93660046115c6565b6103e1565b6100e16100dc36600461161e565b6104cf565b6040516100a8919061166d565b6100f6610532565b6040516100a89190611662565b6100b961011136600461161e565b61053b565b6100b9610124366004611587565b610767565b6100b9610963565b6100e1610be8565b61009b610bee565b6098546001600160a01b031681565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561019557600080fd5b505afa1580156101a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cd91906115aa565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190611636565b336040518363ffffffff1660e01b815260040161026d929190611676565b60206040518083038186803b15801561028557600080fd5b505afa158015610299573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102bd91906115fe565b806103b15750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030b57600080fd5b505afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190611636565b336040518363ffffffff1660e01b8152600401610361929190611676565b60206040518083038186803b15801561037957600080fd5b505afa15801561038d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b191906115fe565b6103d65760405162461bcd60e51b81526004016103cd906118a9565b60405180910390fd5b6103de610bfd565b50565b600054610100900460ff16806103fa57506103fa610c6b565b80610408575060005460ff16155b6104245760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff1615801561044f576000805460ff1961ff0019909116610100171660011790555b610457610c7c565b61045f610d0e565b609780546001600160a01b0319166001600160a01b0385811691909117909155821661049d5760405162461bcd60e51b81526004016103cd90611911565b609880546001600160a01b0319166001600160a01b03841617905580156104ca576000805461ff00191690555b505050565b60006104d9610532565b156104f65760405162461bcd60e51b81526004016103cd90611831565b600260655414156105195760405162461bcd60e51b81526004016103cd906118da565b600260655561052782610d84565b600160655592915050565b60335460ff1690565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561058057600080fd5b505afa158015610594573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b891906115aa565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561060257600080fd5b505afa158015610616573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063a9190611636565b336040518363ffffffff1660e01b8152600401610658929190611676565b60206040518083038186803b15801561067057600080fd5b505afa158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a891906115fe565b6106c45760405162461bcd60e51b81526004016103cd906116ac565b8115806106dc5750676765c793fa10079d601b1b8210155b6106f85760405162461bcd60e51b81526004016103cd9061173f565b6b033b2e3d523e808a07fcdc0b8211156107245760405162461bcd60e51b81526004016103cd9061178f565b609982905560405133907f86f297ca1817ba3695e4c5b0c81901d82dac7eb4343b99299b29c39fa2f685fa9061075b90859061166d565b60405180910390a25050565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b1580156107ac57600080fd5b505afa1580156107c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e491906115aa565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561082e57600080fd5b505afa158015610842573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108669190611636565b336040518363ffffffff1660e01b8152600401610884929190611676565b60206040518083038186803b15801561089c57600080fd5b505afa1580156108b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d491906115fe565b6108f05760405162461bcd60e51b81526004016103cd906116ac565b6001600160a01b0382166109165760405162461bcd60e51b81526004016103cd90611911565b609880546001600160a01b0319166001600160a01b03841617905560405133907f28c02b7fb4c1c94c7b73df5dd0863593970575d3a1faf5271e73ee27155c40219061075b90859061164e565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b1580156109a857600080fd5b505afa1580156109bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e091906115aa565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2a57600080fd5b505afa158015610a3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a629190611636565b336040518363ffffffff1660e01b8152600401610a80929190611676565b60206040518083038186803b158015610a9857600080fd5b505afa158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad091906115fe565b80610bc45750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1e57600080fd5b505afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b569190611636565b336040518363ffffffff1660e01b8152600401610b74929190611676565b60206040518083038186803b158015610b8c57600080fd5b505afa158015610ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc491906115fe565b610be05760405162461bcd60e51b81526004016103cd906118a9565b6103de61126b565b60995481565b6097546001600160a01b031681565b610c05610532565b610c215760405162461bcd60e51b81526004016103cd90611711565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610c546112c2565b604051610c61919061164e565b60405180910390a1565b6000610c76306112c6565b15905090565b600054610100900460ff1680610c955750610c95610c6b565b80610ca3575060005460ff16155b610cbf5760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff16158015610cea576000805460ff1961ff0019909116610100171660011790555b610cf26112cc565b610cfa61134d565b80156103de576000805461ff001916905550565b600054610100900460ff1680610d275750610d27610c6b565b80610d35575060005460ff16155b610d515760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff16158015610d7c576000805460ff1961ff0019909116610100171660011790555b610cfa6113d9565b600080609760009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b158015610dd557600080fd5b505afa158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0d91906115aa565b6001600160a01b031663a09b0fe0846040518263ffffffff1660e01b8152600401610e38919061166d565b60206040518083038186803b158015610e5057600080fd5b505afa158015610e64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e889190611636565b90506000609760009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b158015610eda57600080fd5b505afa158015610eee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1291906115aa565b6001600160a01b0316631fea158d856040518263ffffffff1660e01b8152600401610f3d919061166d565b60206040518083038186803b158015610f5557600080fd5b505afa158015610f69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8d9190611636565b90506000609760009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b158015610fdf57600080fd5b505afa158015610ff3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101791906115aa565b6001600160a01b031663bbd112a5866040518263ffffffff1660e01b8152600401611042919061166d565b60206040518083038186803b15801561105a57600080fd5b505afa15801561106e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110929190611636565b9050804210156110b45760405162461bcd60e51b81526004016103cd906116d0565b6098546001600160a01b03166110dc5760405162461bcd60e51b81526004016103cd906117e1565b6111086111026110ee60995485611460565b834203676765c793fa10079d601b1b611476565b84611534565b6097546098549195506001600160a01b03908116916390d53639918891166111308888611569565b6040518463ffffffff1660e01b815260040161114e9392919061168d565b600060405180830381600087803b15801561116857600080fd5b505af115801561117c573d6000803e3d6000fd5b50505050609760009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b1580156111ce57600080fd5b505afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120691906115aa565b6001600160a01b031663e73eb92e866040518263ffffffff1660e01b8152600401611231919061166d565b600060405180830381600087803b15801561124b57600080fd5b505af115801561125f573d6000803e3d6000fd5b50505050505050919050565b611273610532565b156112905760405162461bcd60e51b81526004016103cd90611831565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c545b3390565b3b151590565b600054610100900460ff16806112e557506112e5610c6b565b806112f3575060005460ff16155b61130f5760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff16158015610cfa576000805460ff1961ff00199091166101001716600117905580156103de576000805461ff001916905550565b600054610100900460ff16806113665750611366610c6b565b80611374575060005460ff16155b6113905760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff161580156113bb576000805460ff1961ff0019909116610100171660011790555b6033805460ff1916905580156103de576000805461ff001916905550565b600054610100900460ff16806113f257506113f2610c6b565b80611400575060005460ff16155b61141c5760405162461bcd60e51b81526004016103cd9061185b565b600054610100900460ff16158015611447576000805460ff1961ff0019909116610100171660011790555b600160655580156103de576000805461ff001916905550565b8181018281101561147057600080fd5b92915050565b60008380156115165760018416801561149157859250611495565b8392505b50600283046002850494505b84156115105785860286878204146114b857600080fd5b818101818110156114c857600080fd5b85900496505060018516156115055785830283878204141587151516156114ee57600080fd5b818101818110156114fe57600080fd5b8590049350505b6002850494506114a1565b5061152c565b838015611526576000925061152a565b8392505b505b509392505050565b81810281158061154c57508282828161154957fe5b04145b61155557600080fd5b676765c793fa10079d601b1b900492915050565b8082036000831280159061157e575060008212155b61147057600080fd5b600060208284031215611598578081fd5b81356115a381611965565b9392505050565b6000602082840312156115bb578081fd5b81516115a381611965565b600080604083850312156115d8578081fd5b82356115e381611965565b915060208301356115f381611965565b809150509250929050565b60006020828403121561160f578081fd5b815180151581146115a3578182fd5b60006020828403121561162f578081fd5b5035919050565b600060208284031215611647578081fd5b5051919050565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b9283526001600160a01b03919091166020830152604082015260600190565b6020808252600a9082015269216f776e6572526f6c6560b01b604082015260600190565b60208082526021908201527f53746162696c697479466565436f6c6c6563746f722f696e76616c69642d6e6f6040820152607760f81b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b60208082526030908201527f53746162696c697479466565436f6c6c6563746f722f696e76616c69642d737460408201526f6162696c6974792d6665652d7261746560801b606082015260800190565b60208082526032908201527f53746162696c697479466565436f6c6c6563746f722f73746162696c6974792d6040820152716665652d726174652d746f6f2d6c6172676560701b606082015260800190565b60208082526030908201527f53746162696c697479466565436f6c6c6563746f722f73797374656d2d64656260408201526f1d0b595b99da5b994b5b9bdd0b5cd95d60821b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526017908201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526034908201527f53746162696c697479466565436f6c6c6563746f722f6261642d73797374656d6040820152732d646562742d656e67696e652d6164647265737360601b606082015260800190565b6001600160a01b03811681146103de57600080fdfea26469706673582212209a66084da4301df9ff06b282eeebb9fd1796e57804fd4e74d4875c0fe64f25b264736f6c634300060c0033";
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
    static createInterface(): StabilityFeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StabilityFeeCollector;
}
export {};