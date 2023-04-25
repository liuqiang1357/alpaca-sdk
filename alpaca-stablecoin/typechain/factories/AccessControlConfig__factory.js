"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlConfig__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
        inputs: [],
        name: "ADAPTER_ROLE",
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
        name: "BOOK_KEEPER_ROLE",
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
        name: "COLLATERAL_MANAGER_ROLE",
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
        name: "GOV_ROLE",
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
        name: "LIQUIDATION_ENGINE_ROLE",
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
        name: "MINTABLE_ROLE",
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
        inputs: [],
        name: "POSITION_MANAGER_ROLE",
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
        name: "PRICE_ORACLE_ROLE",
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
        name: "SHOW_STOPPER_ROLE",
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
        name: "STABILITY_FEE_COLLECTOR_ROLE",
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
        inputs: [],
        name: "initialize",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610b83806100206000396000f3fe608060405234801561001057600080fd5b50600436106100fc5760003560e01c806302a882e61461010157806308e45bc51461011b5780632386880014610123578063248a9ca31461012b5780632e718ab7146101485780632f2ff15d1461015057806336568abe1461017e5780636792166f146101aa5780636e19aa59146101b25780638129fc1c146101ba5780639010d07c146101c257806391d1485414610201578063a217fddf14610241578063b536818a14610249578063b998902f14610251578063ca15c87314610259578063d547741f14610276578063d7a47a69146102a2578063e58378bb14610241578063e8ff193d146102aa575b600080fd5b6101096102b2565b60408051918252519081900360200190f35b6101096102d6565b6101096102fa565b6101096004803603602081101561014157600080fd5b503561031e565b610109610333565b61017c6004803603604081101561016657600080fd5b50803590602001356001600160a01b0316610357565b005b61017c6004803603604081101561019457600080fd5b50803590602001356001600160a01b03166103c3565b610109610424565b610109610448565b61017c61046c565b6101e5600480360360408110156101d857600080fd5b5080359060200135610521565b604080516001600160a01b039092168252519081900360200190f35b61022d6004803603604081101561021757600080fd5b50803590602001356001600160a01b0316610542565b604080519115158252519081900360200190f35b61010961055a565b61010961055f565b610109610583565b6101096004803603602081101561026f57600080fd5b50356105a7565b61017c6004803603604081101561028c57600080fd5b50803590602001356001600160a01b03166105be565b610109610617565b61010961063b565b7fdbeb657137b1822b3d5418bea6fd641226d964b4c3871ef23546db262225887181565b7f79dc86561fc62d7eb9a727d180af689d208d86aa03e0931051e770b97b8f8fac81565b7f515cd6857d3fa5ea767894c7605f2a1266baaf48168f41fb0ae14a219567d6a481565b60009081526033602052604090206002015490565b7f85e8f2d6819d6b24108062d87ea08f54651bcb8960d98062d3faf96e7873b8b981565b60008281526033602052604090206002015461037a9061037561065f565b610542565b6103b55760405162461bcd60e51b815260040180806020018281038252602f815260200180610a92602f913960400191505060405180910390fd5b6103bf8282610663565b5050565b6103cb61065f565b6001600160a01b0316816001600160a01b03161461041a5760405162461bcd60e51b815260040180806020018281038252602f815260200180610b1f602f913960400191505060405180910390fd5b6103bf82826106cc565b7f1cf2b81dce95f0e7b91e95903f9b70bc58c33207c55b6b0bc3ba3d0522942e3181565b7f6af7a8f7f9ca95b722bc4d8832aeefb2b4e004a3a488a8f38b84605fa58e809b81565b600054610100900460ff16806104855750610485610735565b80610493575060005460ff16155b6104ce5760405162461bcd60e51b815260040180806020018281038252602e815260200180610af1602e913960400191505060405180910390fd5b600054610100900460ff161580156104f9576000805460ff1961ff0019909116610100171660011790555b610501610746565b61050c6000336103b5565b801561051e576000805461ff00191690555b50565b600082815260336020526040812061053990836107e3565b90505b92915050565b600082815260336020526040812061053990836107ef565b600081565b7f0603f2636f0ca34ae3ea5a23bb826e2bd2ffd59fb1c01edc1ba10fba2899d1ba81565b7f1337d7d57528a8879766fdf2d0456253114c66c4fc263c97168bfdb007c64c6681565b600081815260336020526040812061053c90610804565b6000828152603360205260409020600201546105dc9061037561065f565b61041a5760405162461bcd60e51b8152600401808060200182810382526030815260200180610ac16030913960400191505060405180910390fd5b7fa5b93761cdcf4730aa6f4ed2fccea400435617d3fb902128f8d4cf7f6265b30681565b7f73cc1824a5ac1764c2e141cf3615a9dcb73677c4e5be5154addc88d3e0cc148081565b3390565b600082815260336020526040902061067b908261080f565b156103bf5761068861065f565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526033602052604090206106e49082610824565b156103bf576106f161065f565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600061074030610839565b15905090565b600054610100900460ff168061075f575061075f610735565b8061076d575060005460ff16155b6107a85760405162461bcd60e51b815260040180806020018281038252602e815260200180610af1602e913960400191505060405180910390fd5b600054610100900460ff161580156107d3576000805460ff1961ff0019909116610100171660011790555b6107db61083f565b61050c61083f565b600061053983836108df565b6000610539836001600160a01b038416610943565b600061053c8261095b565b6000610539836001600160a01b03841661095f565b6000610539836001600160a01b0384166109a9565b3b151590565b600054610100900460ff16806108585750610858610735565b80610866575060005460ff16155b6108a15760405162461bcd60e51b815260040180806020018281038252602e815260200180610af1602e913960400191505060405180910390fd5b600054610100900460ff1615801561050c576000805460ff1961ff001990911661010017166001179055801561051e576000805461ff001916905550565b815460009082106109215760405162461bcd60e51b8152600401808060200182810382526022815260200180610a706022913960400191505060405180910390fd5b82600001828154811061093057fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b600061096b8383610943565b6109a15750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561053c565b50600061053c565b60008181526001830160205260408120548015610a6557835460001980830191908101906000908790839081106109dc57fe5b90600052602060002001549050808760000184815481106109f957fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080610a2957fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061053c565b600091505061053c56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a26469706673582212200149c3b35fe3b41c3715cc044fea8403006736e528bc524bf8a0387ea37c76cc64736f6c634300060c0033";
const isSuperArgs = (xs) => xs.length > 1;
class AccessControlConfig__factory extends ethers_1.ContractFactory {
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
exports.AccessControlConfig__factory = AccessControlConfig__factory;
AccessControlConfig__factory.bytecode = _bytecode;
AccessControlConfig__factory.abi = _abi;
