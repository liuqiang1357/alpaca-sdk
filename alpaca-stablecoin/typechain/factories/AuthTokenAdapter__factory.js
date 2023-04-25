"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenAdapter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [],
        name: "LogCage",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "urn",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "msgSender",
                type: "address",
            },
        ],
        name: "LogDeposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "LogUncage",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
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
        name: "LogWithdraw",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
        name: "WHITELISTED",
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
        name: "bookKeeper",
        outputs: [
            {
                internalType: "contract IBookKeeper",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "collateralPoolId",
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
        name: "decimals",
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
                name: "_urn",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_msgSender",
                type: "address",
            },
        ],
        name: "deposit",
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
                internalType: "address",
                name: "_bookKeeper",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_collateralPoolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "live",
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
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
        name: "token",
        outputs: [
            {
                internalType: "contract IToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "uncage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_guy",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_wad",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50612392806100206000396000f3fe608060405234801561001057600080fd5b50600436106101125760003560e01c80630b71f11614610117578063248a9ca3146101315780632f2ff15d1461014e578063313ce5671461017c57806336568abe146101845780633f4ba83a146101b05780635c975abb146101b857806369245009146101d45780638456cb59146101dc5780639010d07c146101e457806391d1485414610223578063957aa58c1461024f578063a217fddf14610257578063ca15c8731461025f578063d26b3e6e1461027c578063d547741f146102b2578063d63b23b2146102de578063dca07dc5146102e6578063e3b3932a146102ee578063f3fef3a3146102f6578063f45346dc14610322578063fc0c546a14610358575b600080fd5b61011f610360565b60408051918252519081900360200190f35b61011f6004803603602081101561014757600080fd5b5035610372565b61017a6004803603604081101561016457600080fd5b50803590602001356001600160a01b0316610387565b005b61011f6103f3565b61017a6004803603604081101561019a57600080fd5b50803590602001356001600160a01b03166103f9565b61017a61045a565b6101c06106f2565b604080519115158252519081900360200190f35b61017a6106fb565b61017a610a00565b610207600480360360408110156101fa57600080fd5b5080359060200135610c95565b604080516001600160a01b039092168252519081900360200190f35b6101c06004803603604081101561023957600080fd5b50803590602001356001600160a01b0316610cb6565b61011f610cce565b61011f610cd4565b61011f6004803603602081101561027557600080fd5b5035610cd9565b61017a6004803603606081101561029257600080fd5b506001600160a01b03813581169160208101359160409091013516610cf0565b61017a600480360360408110156102c857600080fd5b50803590602001356001600160a01b0316610f3c565b61017a610f95565b61011f611299565b61020761129f565b61017a6004803603604081101561030c57600080fd5b506001600160a01b0381351690602001356112ae565b61017a6004803603606081101561033857600080fd5b506001600160a01b03813581169160208101359160409091013516611476565b61020761170a565b60008051602061230e83398151915281565b60009081526065602052604090206002015490565b6000828152606560205260409020600201546103aa906103a5611719565b610cb6565b6103e55760405162461bcd60e51b815260040180806020018281038252602f815260200180612221602f913960400191505060405180910390fd5b6103ef828261171d565b5050565b60cc5481565b610401611719565b6001600160a01b0316816001600160a01b0316146104505760405162461bcd60e51b815260040180806020018281038252602f81526020018061232e602f913960400191505060405180910390fd5b6103ef8282611786565b60c9546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561049f57600080fd5b505afa1580156104b3573d6000803e3d6000fd5b505050506040513d60208110156104c957600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b15801561051757600080fd5b505afa15801561052b573d6000803e3d6000fd5b505050506040513d602081101561054157600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561058657600080fd5b505afa15801561059a573d6000803e3d6000fd5b505050506040513d60208110156105b057600080fd5b50518061069c5750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561060057600080fd5b505afa158015610614573d6000803e3d6000fd5b505050506040513d602081101561062a57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561066f57600080fd5b505afa158015610683573d6000803e3d6000fd5b505050506040513d602081101561069957600080fd5b50515b6106e7576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b6106ef6117ef565b50565b60335460ff1690565b60c9546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561074057600080fd5b505afa158015610754573d6000803e3d6000fd5b505050506040513d602081101561076a57600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b1580156107b857600080fd5b505afa1580156107cc573d6000803e3d6000fd5b505050506040513d60208110156107e257600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561082757600080fd5b505afa15801561083b573d6000803e3d6000fd5b505050506040513d602081101561085157600080fd5b50518061093d5750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a157600080fd5b505afa1580156108b5573d6000803e3d6000fd5b505050506040513d60208110156108cb57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561091057600080fd5b505afa158015610924573d6000803e3d6000fd5b505050506040513d602081101561093a57600080fd5b50515b61097c576040805162461bcd60e51b815260206004820152601f60248201526000805160206122a0833981519152604482015290519081900360640190fd5b60cd546001146109cf576040805162461bcd60e51b815260206004820152601960248201527841757468546f6b656e416461707465722f6e6f742d6c69766560381b604482015290519081900360640190fd5b600060cd8190556040517fbf689b4aae670d200b1d2b971ace2e0c3bef88a9c5e93f36705c7b86eab630b99190a150565b60c9546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610a4557600080fd5b505afa158015610a59573d6000803e3d6000fd5b505050506040513d6020811015610a6f57600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b158015610abd57600080fd5b505afa158015610ad1573d6000803e3d6000fd5b505050506040513d6020811015610ae757600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610b2c57600080fd5b505afa158015610b40573d6000803e3d6000fd5b505050506040513d6020811015610b5657600080fd5b505180610c425750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d6020811015610bd057600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610c1557600080fd5b505afa158015610c29573d6000803e3d6000fd5b505050506040513d6020811015610c3f57600080fd5b50515b610c8d576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b6106ef61188f565b6000828152606560205260408120610cad9083611912565b90505b92915050565b6000828152606560205260408120610cad908361191e565b60cd5481565b600081565b6000818152606560205260408120610cb090611933565b600054610100900460ff1680610d095750610d0961193e565b80610d17575060005460ff16155b610d525760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff16158015610d7d576000805460ff1961ff0019909116610100171660011790555b610d8561194f565b610d8d611a00565b610d95611a9d565b60cb80546001600160a01b0319166001600160a01b0384169081179091556040805163313ce56760e01b8152905163313ce56791600480820192602092909190829003018186803b158015610de957600080fd5b505afa158015610dfd573d6000803e3d6000fd5b505050506040513d6020811015610e1357600080fd5b505160ff1660cc55600160cd5560c980546001600160a01b0319166001600160a01b03868116919091179182905560ca8590556040805163c8cc243f60e01b81529051610f24939092169163c8cc243f91600481810192602092909190829003018186803b158015610e8457600080fd5b505afa158015610e98573d6000803e3d6000fd5b505050506040513d6020811015610eae57600080fd5b50516040805163e58378bb60e01b815290516001600160a01b039092169163e58378bb91600480820192602092909190829003018186803b158015610ef257600080fd5b505afa158015610f06573d6000803e3d6000fd5b505050506040513d6020811015610f1c57600080fd5b5051336103e5565b8015610f36576000805461ff00191690555b50505050565b600082815260656020526040902060020154610f5a906103a5611719565b6104505760405162461bcd60e51b81526004018080602001828103825260308152602001806122706030913960400191505060405180910390fd5b60c9546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610fda57600080fd5b505afa158015610fee573d6000803e3d6000fd5b505050506040513d602081101561100457600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b15801561105257600080fd5b505afa158015611066573d6000803e3d6000fd5b505050506040513d602081101561107c57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b1580156110c157600080fd5b505afa1580156110d5573d6000803e3d6000fd5b505050506040513d60208110156110eb57600080fd5b5051806111d75750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b15801561113b57600080fd5b505afa15801561114f573d6000803e3d6000fd5b505050506040513d602081101561116557600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b1580156111aa57600080fd5b505afa1580156111be573d6000803e3d6000fd5b505050506040513d60208110156111d457600080fd5b50515b611216576040805162461bcd60e51b815260206004820152601f60248201526000805160206122a0833981519152604482015290519081900360640190fd5b60cd5415611268576040805162461bcd60e51b815260206004820152601a602482015279105d5d1a151bdad95b9059185c1d195c8bdb9bdd0b58d859d95960321b604482015290519081900360640190fd5b600160cd556040517f1868a6ced217213f36be87ba9aee25cde5381b42e85c8f88e73b18772c0bd07390600090a150565b60ca5481565b60c9546001600160a01b031681565b600260975414156112f4576040805162461bcd60e51b815260206004820152601f6024820152600080516020612250833981519152604482015290519081900360640190fd5b60026097556113016106f2565b15611346576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600061135a8260cc54601203600a0a611b32565b905060008112156113a0576040805162461bcd60e51b815260206004820152601960248201526000805160206122c0833981519152604482015290519081900360640190fd5b60c95460ca546040805163694ac93d60e11b815260048101929092523360248301526000848103604484015290516001600160a01b039093169263d295927a92606480820193929182900301818387803b1580156113fd57600080fd5b505af1158015611411573d6000803e3d6000fd5b505060cb5461142d92506001600160a01b031690508484611b8c565b6040805183815290516001600160a01b038516917f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708919081900360200190a25050600160975550565b600260975414156114bc576040805162461bcd60e51b815260206004820152601f6024820152600080516020612250833981519152604482015290519081900360640190fd5b60026097556114c96106f2565b1561150e576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61152660008051602061230e83398151915233610cb6565b611577576040805162461bcd60e51b815260206004820181905260248201527f41757468546f6b656e416461707465722f6e6f742d77686974656c6973746564604482015290519081900360640190fd5b60cd546001146115ca576040805162461bcd60e51b815260206004820152601960248201527841757468546f6b656e416461707465722f6e6f742d6c69766560381b604482015290519081900360640190fd5b60006115de8360cc54601203600a0a611b32565b90506000811215611624576040805162461bcd60e51b815260206004820152601960248201526000805160206122c0833981519152604482015290519081900360640190fd5b60c95460ca546040805163694ac93d60e11b815260048101929092526001600160a01b03878116602484015260448301859052905192169163d295927a9160648082019260009290919082900301818387803b15801561168357600080fd5b505af1158015611697573d6000803e3d6000fd5b505060cb546116b492506001600160a01b03169050833086611ce6565b816001600160a01b0316846001600160a01b03167f7235702039c95755efa35aa4a8208920cc347a1a3685c13ef9ef6dedc2859be1856040518082815260200191505060405180910390a3505060016097555050565b60cb546001600160a01b031681565b3390565b60008281526065602052604090206117359082611e4d565b156103ef57611742611719565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260656020526040902061179e9082611e62565b156103ef576117ab611719565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6117f76106f2565b61183f576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611872611719565b604080516001600160a01b039092168252519081900360200190a1565b6118976106f2565b156118dc576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611872611719565b6000610cad8383611e77565b6000610cad836001600160a01b038416611edb565b6000610cb082611ef3565b600061194930611ef7565b15905090565b600054610100900460ff1680611968575061196861193e565b80611976575060005460ff16155b6119b15760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff161580156119dc576000805460ff1961ff0019909116610100171660011790555b6119e4611efd565b6119ec611f9d565b80156106ef576000805461ff001916905550565b600054610100900460ff1680611a195750611a1961193e565b80611a27575060005460ff16155b611a625760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611a8d576000805460ff1961ff0019909116610100171660011790555b611a95611efd565b6119ec611efd565b600054610100900460ff1680611ab65750611ab661193e565b80611ac4575060005460ff16155b611aff5760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff16158015611b2a576000805460ff1961ff0019909116610100171660011790555b6119ec612048565b6000811580611b4d57505080820282828281611b4a57fe5b04145b610cb0576040805162461bcd60e51b815260206004820152601960248201526000805160206122c0833981519152604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310611c095780518252601f199092019160209182019101611bea565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611c6b576040519150601f19603f3d011682016040523d82523d6000602084013e611c70565b606091505b5091509150818015611c9e575080511580611c9e5750808060200190516020811015611c9b57600080fd5b50515b611cdf576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b5050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b60208310611d6b5780518252601f199092019160209182019101611d4c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611dcd576040519150601f19603f3d011682016040523d82523d6000602084013e611dd2565b606091505b5091509150818015611e00575080511580611e005750808060200190516020811015611dfd57600080fd5b50515b611e45576040805162461bcd60e51b815260206004820152601160248201527021736166655472616e7366657246726f6d60781b604482015290519081900360640190fd5b505050505050565b6000610cad836001600160a01b0384166120ee565b6000610cad836001600160a01b038416612138565b81546000908210611eb95760405162461bcd60e51b81526004018080602001828103825260228152602001806121ff6022913960400191505060405180910390fd5b826000018281548110611ec857fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b3b151590565b600054610100900460ff1680611f165750611f1661193e565b80611f24575060005460ff16155b611f5f5760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff161580156119ec576000805460ff1961ff00199091166101001716600117905580156106ef576000805461ff001916905550565b600054610100900460ff1680611fb65750611fb661193e565b80611fc4575060005460ff16155b611fff5760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff1615801561202a576000805460ff1961ff0019909116610100171660011790555b6033805460ff1916905580156106ef576000805461ff001916905550565b600054610100900460ff1680612061575061206161193e565b8061206f575060005460ff16155b6120aa5760405162461bcd60e51b815260040180806020018281038252602e8152602001806122e0602e913960400191505060405180910390fd5b600054610100900460ff161580156120d5576000805460ff1961ff0019909116610100171660011790555b600160975580156106ef576000805461ff001916905550565b60006120fa8383611edb565b61213057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610cb0565b506000610cb0565b600081815260018301602052604081205480156121f4578354600019808301919081019060009087908390811061216b57fe5b906000526020600020015490508087600001848154811061218857fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806121b857fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610cb0565b6000915050610cb056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e745265656e7472616e637947756172643a207265656e7472616e742063616c6c00416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6521286f776e6572526f6c65206f722073686f7753746f70706572526f6c65290041757468546f6b656e416461707465722f6f766572666c6f7700000000000000496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564e799c73ff785ac053943f5d98452f7fa0bcf54da67826fc217d6094dec75c5ee416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220df509a892db0a4b349a5089edcf4aeedc3ebeef38d8e34620d1a5969d86456b964736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class AuthTokenAdapter__factory extends ethers_1.ContractFactory {
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
exports.AuthTokenAdapter__factory = AuthTokenAdapter__factory;
AuthTokenAdapter__factory.bytecode = _bytecode;
AuthTokenAdapter__factory.abi = _abi;
