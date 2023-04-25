"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaStablecoin__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "guy",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OWNER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_usr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_usr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getRoleMember",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleMemberCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_usr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_src",
                type: "address",
            },
            {
                internalType: "address",
                name: "_dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "move",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_usr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "pull",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_usr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "push",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_src",
                type: "address",
            },
            {
                internalType: "address",
                name: "_dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506115f1806100206000396000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c806306fdde031461014e578063095ea7b3146101cb57806318160ddd1461020b57806323b872dd14610225578063248a9ca31461025b5780632f2ff15d14610278578063313ce567146102a657806336568abe146102c457806340c10f19146102f05780634cd88b761461031c57806354fd4d501461044557806370a082311461044d5780637ecebe00146104735780639010d07c1461049957806391d14854146104d857806395d89b41146105045780639dc29fac1461050c578063a217fddf14610538578063a9059cbb14610540578063b753a98c1461056c578063bb35783b14610598578063ca15c873146105ce578063d5391393146105eb578063d547741f146105f3578063dd62ed3e1461061f578063e58378bb14610538578063f2d5d56b1461064d575b600080fd5b610156610679565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610190578181015183820152602001610178565b50505050905090810190601f1680156101bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f7600480360360408110156101e157600080fd5b506001600160a01b038135169060200135610707565b604080519115158252519081900360200190f35b61021361076e565b60408051918252519081900360200190f35b6101f76004803603606081101561023b57600080fd5b506001600160a01b03813581169160208101359091169060400135610774565b6102136004803603602081101561027157600080fd5b5035610964565b6102a46004803603604081101561028e57600080fd5b50803590602001356001600160a01b0316610979565b005b6102ae6109e5565b6040805160ff9092168252519081900360200190f35b6102a4600480360360408110156102da57600080fd5b50803590602001356001600160a01b03166109ea565b6102a46004803603604081101561030657600080fd5b506001600160a01b038135169060200135610a4b565b6102a46004803603604081101561033257600080fd5b810190602081018135600160201b81111561034c57600080fd5b82018360208201111561035e57600080fd5b803590602001918460018302840111600160201b8311171561037f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103d157600080fd5b8201836020820111156103e357600080fd5b803590602001918460018302840111600160201b8311171561040457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b21945050505050565b610156610c00565b6102136004803603602081101561046357600080fd5b50356001600160a01b0316610c1d565b6102136004803603602081101561048957600080fd5b50356001600160a01b0316610c2f565b6104bc600480360360408110156104af57600080fd5b5080359060200135610c41565b604080516001600160a01b039092168252519081900360200190f35b6101f7600480360360408110156104ee57600080fd5b50803590602001356001600160a01b0316610c60565b610156610c78565b6102a46004803603604081101561052257600080fd5b506001600160a01b038135169060200135610cd3565b610213610ea1565b6101f76004803603604081101561055657600080fd5b506001600160a01b038135169060200135610ea6565b6102a46004803603604081101561058257600080fd5b506001600160a01b038135169060200135610eb3565b6102a4600480360360608110156105ae57600080fd5b506001600160a01b03813581169160208101359091169060400135610ebe565b610213600480360360208110156105e457600080fd5b5035610ecf565b610213610ee6565b6102a46004803603604081101561060957600080fd5b50803590602001356001600160a01b0316610ef8565b6102136004803603604081101561063557600080fd5b506001600160a01b0381358116916020013516610f51565b6102a46004803603604081101561066357600080fd5b506001600160a01b038135169060200135610f6e565b6065805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106ff5780601f106106d4576101008083540402835291602001916106ff565b820191906000526020600020905b8154815290600101906020018083116106e257829003601f168201915b505050505081565b3360008181526069602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60675481565b6001600160a01b0383166000908152606860205260408120548211156107cb5760405162461bcd60e51b81526004018080602001828103825260258152602001806114ca6025913960400191505060405180910390fd5b6001600160a01b038416331480159061080957506001600160a01b038416600090815260696020908152604080832033845290915290205460001914155b156108c3576001600160a01b03841660009081526069602090815260408083203384529091529020548211156108705760405162461bcd60e51b81526004018080602001828103825260278152602001806114746027913960400191505060405180910390fd5b6001600160a01b038416600090815260696020908152604080832033845290915290205461089e9083610f79565b6001600160a01b03851660009081526069602090815260408083203384529091529020555b6001600160a01b0384166000908152606860205260409020546108e69083610f79565b6001600160a01b0380861660009081526068602052604080822093909355908516815220546109159083610f89565b6001600160a01b03808516600081815260686020908152604091829020949094558051868152905191939288169260008051602061156d83398151915292918290030190a35060019392505050565b60009081526033602052604090206002015490565b60008281526033602052604090206002015461099c90610997610f99565b610c60565b6109d75760405162461bcd60e51b815260040180806020018281038252602f81526020018061149b602f913960400191505060405180910390fd5b6109e18282610f9d565b5050565b601281565b6109f2610f99565b6001600160a01b0316816001600160a01b031614610a415760405162461bcd60e51b815260040180806020018281038252602f81526020018061158d602f913960400191505060405180910390fd5b6109e18282611006565b610a6360008051602061154d83398151915233610c60565b610aa2576040805162461bcd60e51b815260206004820152600b60248201526a216d696e746572526f6c6560a81b604482015290519081900360640190fd5b6001600160a01b038216600090815260686020526040902054610ac59082610f89565b6001600160a01b038316600090815260686020526040902055606754610aeb9082610f89565b6067556040805182815290516001600160a01b0384169160009160008051602061156d8339815191529181900360200190a35050565b600054610100900460ff1680610b3a5750610b3a61106f565b80610b48575060005460ff16155b610b835760405162461bcd60e51b815260040180806020018281038252602e81526020018061151f602e913960400191505060405180910390fd5b600054610100900460ff16158015610bae576000805460ff1961ff0019909116610100171660011790555b610bb6611080565b8251610bc99060659060208601906113be565b508151610bdd9060669060208501906113be565b50610be96000336109d7565b8015610bfb576000805461ff00191690555b505050565b604051806040016040528060018152602001603160f81b81525081565b60686020526000908152604090205481565b606a6020526000908152604090205481565b6000828152603360205260408120610c599083611132565b9392505050565b6000828152603360205260408120610c59908361113e565b6066805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106ff5780601f106106d4576101008083540402835291602001916106ff565b6001600160a01b038216600090815260686020526040902054811115610d2a5760405162461bcd60e51b81526004018080602001828103825260258152602001806114ca6025913960400191505060405180910390fd5b6001600160a01b0382163314801590610d6857506001600160a01b038216600090815260696020908152604080832033845290915290205460001914155b15610e22576001600160a01b0382166000908152606960209081526040808320338452909152902054811115610dcf5760405162461bcd60e51b81526004018080602001828103825260278152602001806114746027913960400191505060405180910390fd5b6001600160a01b0382166000908152606960209081526040808320338452909152902054610dfd9082610f79565b6001600160a01b03831660009081526069602090815260408083203384529091529020555b6001600160a01b038216600090815260686020526040902054610e459082610f79565b6001600160a01b038316600090815260686020526040902055606754610e6b9082610f79565b6067556040805182815290516000916001600160a01b0385169160008051602061156d8339815191529181900360200190a35050565b600081565b6000610c59338484610774565b610bfb338383610774565b610ec9838383610774565b50505050565b600081815260336020526040812061076890611153565b60008051602061154d83398151915281565b600082815260336020526040902060020154610f1690610997610f99565b610a415760405162461bcd60e51b81526004018080602001828103825260308152602001806114ef6030913960400191505060405180910390fd5b606960209081526000928352604080842090915290825290205481565b610bfb823383610774565b8082038281111561076857600080fd5b8082018281101561076857600080fd5b3390565b6000828152603360205260409020610fb5908261115e565b156109e157610fc2610f99565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260336020526040902061101e9082611173565b156109e15761102b610f99565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600061107a30611188565b15905090565b600054610100900460ff1680611099575061109961106f565b806110a7575060005460ff16155b6110e25760405162461bcd60e51b815260040180806020018281038252602e81526020018061151f602e913960400191505060405180910390fd5b600054610100900460ff1615801561110d576000805460ff1961ff0019909116610100171660011790555b61111561118e565b61111d61118e565b801561112f576000805461ff00191690555b50565b6000610c59838361122e565b6000610c59836001600160a01b038416611292565b6000610768826112aa565b6000610c59836001600160a01b0384166112ae565b6000610c59836001600160a01b0384166112f8565b3b151590565b600054610100900460ff16806111a757506111a761106f565b806111b5575060005460ff16155b6111f05760405162461bcd60e51b815260040180806020018281038252602e81526020018061151f602e913960400191505060405180910390fd5b600054610100900460ff1615801561111d576000805460ff1961ff001990911661010017166001179055801561112f576000805461ff001916905550565b815460009082106112705760405162461bcd60e51b81526004018080602001828103825260228152602001806114526022913960400191505060405180910390fd5b82600001828154811061127f57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60006112ba8383611292565b6112f057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610768565b506000610768565b600081815260018301602052604081205480156113b4578354600019808301919081019060009087908390811061132b57fe5b906000526020600020015490508087600001848154811061134857fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061137857fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610768565b6000915050610768565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113ff57805160ff191683800117855561142c565b8280016001018555821561142c579182015b8281111561142c578251825591602001919060010190611411565b5061143892915061143c565b5090565b5b80821115611438576000815560010161143d56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416c70616361537461626c65636f696e2f696e73756666696369656e742d616c6c6f77616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416c70616361537461626c65636f696e2f696e73756666696369656e742d62616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65649f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220e91caa55f70dccbffb5e253ffd9b0cb477783528f0b5c4156a3fe492af77b1f064736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class AlpacaStablecoin__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AlpacaStablecoin__factory = AlpacaStablecoin__factory;
AlpacaStablecoin__factory.bytecode = _bytecode;
AlpacaStablecoin__factory.abi = _abi;
