/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShowStopper, ShowStopperInterface } from "../ShowStopper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralPoolId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "positionAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtShare",
        type: "uint256",
      },
    ],
    name: "LogAccumulateBadDebt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogAccumulateStablecoin",
    type: "event",
  },
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
        internalType: "bytes32",
        name: "collateralPoolId",
        type: "bytes32",
      },
    ],
    name: "LogCageCollateralPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralPoolId",
        type: "bytes32",
      },
    ],
    name: "LogFinalizeCashPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LogFinalizeDebt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralPoolId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "positionAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockedCollateral",
        type: "uint256",
      },
    ],
    name: "LogRedeemLockedCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralPoolId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRedeemStablecoin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_bookKeeper",
        type: "address",
      },
    ],
    name: "LogSetBookKeeper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_cageCoolDown",
        type: "uint256",
      },
    ],
    name: "LogSetCageCoolDown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_liquidationEngine",
        type: "address",
      },
    ],
    name: "LogSetLiquidationEngine",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
    ],
    name: "LogSetPriceOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_systemDebtEngine",
        type: "address",
      },
    ],
    name: "LogSetSystemDebtEngine",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_collateralPoolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_positionAddress",
        type: "address",
      },
    ],
    name: "accumulateBadDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "accumulateStablecoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "badDebtAccumulator",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_collateralPoolId",
        type: "bytes32",
      },
    ],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cageCoolDown",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "cagePrice",
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
    name: "cagedTimestamp",
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
    name: "debt",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "finalCashPrice",
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
        name: "_collateralPoolId",
        type: "bytes32",
      },
    ],
    name: "finalizeCashPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bookKeeper",
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
    name: "liquidationEngine",
    outputs: [
      {
        internalType: "contract ILiquidationEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract IPriceOracle",
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
        name: "_collateralPoolId",
        type: "bytes32",
      },
      {
        internalType: "contract IGenericTokenAdapter",
        name: "_adapter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralReceiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "redeemLockedCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_collateralPoolId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeemStablecoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "redeemedStablecoinAmount",
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
        name: "_bookKeeper",
        type: "address",
      },
    ],
    name: "setBookKeeper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cageCoolDown",
        type: "uint256",
      },
    ],
    name: "setCageCoolDown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidationEngine",
        type: "address",
      },
    ],
    name: "setLiquidationEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_systemDebtEngine",
        type: "address",
      },
    ],
    name: "setSystemDebtEngine",
    outputs: [],
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
    name: "stablecoinAccumulator",
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
    name: "systemDebtEngine",
    outputs: [
      {
        internalType: "contract ISystemDebtEngine",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "totalDebtShare",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612dfd806100206000396000f3fe608060405234801561001057600080fd5b506004361061015e5760003560e01c80621a0fda1461016357806307d8bd881461018c578063094ad0cb146101a15780630c91102d146101b45780630dca59c1146101c75780632630c12f146101cf578063267750c1146101e457806328e49a42146101f75780633b4a5210146101ff57806340a29d181461020757806344bf3c721461021a5780634d298abd14610222578063530e784f1461023557806359836333146102485780635c975abb1461025b5780636920c9cb14610270578063692450091461027857806372bac359146102805780637e0972f51461029357806385571989146102a6578063957aa58c146102b9578063acb5f847146102c1578063b5a297b1146102c9578063be0c4a11146102dc578063bfb934c4146102ef578063c4d66de814610302578063e2702fdc14610315578063e3b3932a14610328578063f25e7ee514610330575b600080fd5b6101766101713660046126a2565b610343565b60405161018391906128ff565b60405180910390f35b61019f61019a3660046126a2565b610355565b005b61019f6101af366004612731565b6105d6565b61019f6101c2366004612701565b6108df565b610176610ae9565b6101d7610aef565b6040516101839190612851565b6101766101f2366004612731565b610afe565b6101d7610b1b565b610176610b2a565b61019f61021536600461280d565b610b30565b6101d7610cad565b61019f6102303660046126a2565b610cbc565b61019f6102433660046126a2565b610eb4565b61019f610256366004612760565b6110ac565b610263611371565b60405161018391906128f4565b61019f61137a565b61019f61153e565b61017661028e366004612701565b6118b0565b61019f6102a13660046126a2565b6118c2565b61019f6102b4366004612701565b611aba565b610176611be0565b610176611be6565b61019f6102d7366004612701565b611bec565b6101766102ea366004612701565b611dce565b6101766102fd366004612701565b611de0565b61019f6103103660046126a2565b611df2565b61019f610323366004612701565b611f12565b6101d761242f565b61017661033e366004612701565b61243e565b60716020526000908152604090205481565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561039a57600080fd5b505afa1580156103ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d291906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041c57600080fd5b505afa158015610430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104549190612719565b336040518363ffffffff1660e01b8152600401610472929190612908565b60206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c291906126e1565b6104e75760405162461bcd60e51b81526004016104de906129aa565b60405180910390fd5b6069546001146105095760405162461bcd60e51b81526004016104de90612c31565b816001600160a01b0316636f3a3bfc6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561054457600080fd5b505af1158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190612719565b50606580546001600160a01b0319166001600160a01b03841617905560405133907f2dbdc2d9ab1d00dae4c8616a09875d464749cf2b95c105a3e590740214eed3b7906105ca908590612851565b60405180910390a25050565b6000828152606d60205260409020546106015760405162461bcd60e51b81526004016104de90612a17565b6065546040805163d868246160e01b815290516000926001600160a01b03169163d8682461916004808301926020929190829003018186803b15801561064657600080fd5b505afa15801561065a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067e91906126c5565b6001600160a01b031663a09b0fe0846040518263ffffffff1660e01b81526004016106a991906128ff565b60206040518083038186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f99190612719565b606554604051630a76216560e21b815291925060009182916001600160a01b0316906329d88594906107319088908890600401612908565b604080518083038186803b15801561074857600080fd5b505afa15801561075c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610780919061282e565b9150915060006107a76107938386612450565b6000888152606d6020526040902054612450565b905060006107b58483612477565b6000888152606e60205260409020549091506107da906107d58484612492565b6124a2565b6000888152606e6020526040902055600160ff1b811080156107ff5750600160ff1b83105b61081b5760405162461bcd60e51b81526004016104de90612d06565b606554606754604051632c77c96560e21b81526001600160a01b039283169263b1df259492610860928c928c923092911690600089810391908c900390600401612944565b600060405180830381600087803b15801561087a57600080fd5b505af115801561088e573d6000803e3d6000fd5b50505050856001600160a01b0316877f293e4e60f641b49922533fbeeac17db015a503c90dbb303eb7a873cf88d9539f83866040516108ce929190612d64565b60405180910390a350505050505050565b606c546108fe5760405162461bcd60e51b81526004016104de90612ca6565b6000818152607060205260409020541561092a5760405162461bcd60e51b81526004016104de90612b61565b6065546040805163d868246160e01b815290516000926001600160a01b03169163d8682461916004808301926020929190829003018186803b15801561096f57600080fd5b505afa158015610983573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a791906126c5565b6001600160a01b031663a09b0fe0836040518263ffffffff1660e01b81526004016109d291906128ff565b60206040518083038186803b1580156109ea57600080fd5b505afa1580156109fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a229190612719565b6000838152606f602052604081205491925090610a5790610a439084612450565b6000858152606d6020526040902054612450565b9050676765c793fa10079d601b1b606c5481610a6f57fe5b04610aa1610a9083606e600088815260200190815260200160002054612492565b676765c793fa10079d601b1b6124b2565b81610aa857fe5b600085815260706020526040808220939092049092555184917fe3784a448612e2ede1104caa7905e411b93502dd4dc33d032bf343c5917b43c891a2505050565b606c5481565b6068546001600160a01b031681565b607260209081526000928352604080842090915290825290205481565b6067546001600160a01b031681565b606b5481565b80610b4d5760405162461bcd60e51b81526004016104de90612979565b600082815260706020526040902054610b785760405162461bcd60e51b81526004016104de906129ce565b6065546000838152607060205260409020546001600160a01b039091169063b5d9932990849030903390610bad908790612450565b6040518563ffffffff1660e01b8152600401610bcc949392919061291f565b600060405180830381600087803b158015610be657600080fd5b505af1158015610bfa573d6000803e3d6000fd5b5050506000838152607260209081526040808320338452909152902054610c229150826124a2565b6000838152607260209081526040808320338452808352818420859055607183529220549190521015610c675760405162461bcd60e51b81526004016104de90612a5a565b336001600160a01b0316827f276115163114a9fc56b72ce487409e28a2d9dc521d5edb93623d4ae286c5485383604051610ca191906128ff565b60405180910390a35050565b6066546001600160a01b031681565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610d0157600080fd5b505afa158015610d15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3991906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d8357600080fd5b505afa158015610d97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbb9190612719565b336040518363ffffffff1660e01b8152600401610dd9929190612908565b60206040518083038186803b158015610df157600080fd5b505afa158015610e05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2991906126e1565b610e455760405162461bcd60e51b81526004016104de906129aa565b606954600114610e675760405162461bcd60e51b81526004016104de90612c31565b606680546001600160a01b0319166001600160a01b03841617905560405133907f599e6dd25180262019a2297440c3ca5d90e3fdb763a03e04e1ab11bb0ead154b906105ca908590612851565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610ef957600080fd5b505afa158015610f0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3191906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f7b57600080fd5b505afa158015610f8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb39190612719565b336040518363ffffffff1660e01b8152600401610fd1929190612908565b60206040518083038186803b158015610fe957600080fd5b505afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102191906126e1565b61103d5760405162461bcd60e51b81526004016104de906129aa565b60695460011461105f5760405162461bcd60e51b81526004016104de90612c31565b606880546001600160a01b0319166001600160a01b03841617905560405133907f23a4a5c78e3d84f844d749b85830c9b1f4c9d4c036c10b4a2343afb46f0f0fe8906105ca908590612851565b606954156110cc5760405162461bcd60e51b81526004016104de90612d34565b6001600160a01b038416331480611164575060655460405163d9ea915560e01b81526001600160a01b039091169063d9ea9155906111109087903390600401612889565b60206040518083038186803b15801561112857600080fd5b505afa15801561113c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111609190612719565b6001145b6111805760405162461bcd60e51b81526004016104de90612cd5565b606554604051630a76216560e21b815260009182916001600160a01b03909116906329d88594906111b7908b908a90600401612908565b604080518083038186803b1580156111ce57600080fd5b505afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611206919061282e565b915091508060001461122a5760405162461bcd60e51b81526004016104de90612bac565b600160ff1b821061124d5760405162461bcd60e51b81526004016104de90612d06565b606554606754604051632c77c96560e21b81526001600160a01b039283169263b1df25949261128d928d928c928c9291169060008a810391600401612944565b600060405180830381600087803b1580156112a757600080fd5b505af11580156112bb573d6000803e3d6000fd5b5050604051634ca21b0b60e11b81526001600160a01b038a169250639944361691506112f3908990899087908a908a906004016128a3565b600060405180830381600087803b15801561130d57600080fd5b505af1158015611321573d6000803e3d6000fd5b50505050846001600160a01b0316887ff2ac336db333e2ae75aa12cd2daa676109d3c95bf5b1cd3a952048f7f799cffb8460405161135f91906128ff565b60405180910390a35050505050505050565b60335460ff1690565b6069541561139a5760405162461bcd60e51b81526004016104de90612d34565b606c54156113ba5760405162461bcd60e51b81526004016104de90612b2e565b60655460675460405163b4ac08bb60e01b81526001600160a01b039283169263b4ac08bb926113ee92911690600401612851565b60206040518083038186803b15801561140657600080fd5b505afa15801561141a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143e9190612719565b1561145b5760405162461bcd60e51b81526004016104de90612ab1565b611469606a54606b546124a2565b4210156114885760405162461bcd60e51b81526004016104de90612c5f565b606560009054906101000a90046001600160a01b03166001600160a01b0316636f3a3bfc6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156114d857600080fd5b505af11580156114ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115109190612719565b606c556040517f0e3725bc56837c9af795ff76d008a9b5e8d0c95f11f3df03ff9c9225370b4bd290600090a1565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561158357600080fd5b505afa158015611597573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115bb91906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561160557600080fd5b505afa158015611619573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163d9190612719565b336040518363ffffffff1660e01b815260040161165b929190612908565b60206040518083038186803b15801561167357600080fd5b505afa158015611687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ab91906126e1565b6116c75760405162461bcd60e51b81526004016104de906129aa565b6069546001146116e95760405162461bcd60e51b81526004016104de90612c31565b6000606981905542606a5560655460408051636924500960e01b815290516001600160a01b039092169263692450099260048084019382900301818387803b15801561173457600080fd5b505af1158015611748573d6000803e3d6000fd5b50505050606660009054906101000a90046001600160a01b03166001600160a01b031663692450096040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561179c57600080fd5b505af11580156117b0573d6000803e3d6000fd5b50505050606760009054906101000a90046001600160a01b03166001600160a01b031663692450096040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561180457600080fd5b505af1158015611818573d6000803e3d6000fd5b50505050606860009054906101000a90046001600160a01b03166001600160a01b031663692450096040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561186c57600080fd5b505af1158015611880573d6000803e3d6000fd5b50506040517fbf689b4aae670d200b1d2b971ace2e0c3bef88a9c5e93f36705c7b86eab630b9925060009150a150565b606e6020526000908152604090205481565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561190757600080fd5b505afa15801561191b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193f91906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561198957600080fd5b505afa15801561199d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c19190612719565b336040518363ffffffff1660e01b81526004016119df929190612908565b60206040518083038186803b1580156119f757600080fd5b505afa158015611a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2f91906126e1565b611a4b5760405162461bcd60e51b81526004016104de906129aa565b606954600114611a6d5760405162461bcd60e51b81526004016104de90612c31565b606780546001600160a01b0319166001600160a01b03841617905560405133907f28c02b7fb4c1c94c7b73df5dd0863593970575d3a1faf5271e73ee27155c4021906105ca908590612851565b80611ad75760405162461bcd60e51b81526004016104de90612979565b606c54611af65760405162461bcd60e51b81526004016104de90612ca6565b6065546067546001600160a01b0391821691638c15785491339116611b2685676765c793fa10079d601b1b6124b2565b6040518463ffffffff1660e01b8152600401611b4493929190612865565b600060405180830381600087803b158015611b5e57600080fd5b505af1158015611b72573d6000803e3d6000fd5b505033600090815260716020526040902054611b9192509050826124a2565b33600081815260716020526040908190209290925590517fc50ee2f6bfb3dfbf11848560b2f455c3b655a6046bd89eda50b5b2ffcd6fc1f990611bd59084906128ff565b60405180910390a250565b60695481565b606a5481565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015611c3157600080fd5b505afa158015611c45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6991906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015611cb357600080fd5b505afa158015611cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ceb9190612719565b336040518363ffffffff1660e01b8152600401611d09929190612908565b60206040518083038186803b158015611d2157600080fd5b505afa158015611d35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d5991906126e1565b611d755760405162461bcd60e51b81526004016104de906129aa565b606954600114611d975760405162461bcd60e51b81526004016104de90612c31565b606b82905560405133907f0fbe15c55a6ffa7c9d38f88af449a911fad669e3c5de3215a833fb9fa53b7e5c906105ca9085906128ff565b606f6020526000908152604090205481565b606d6020526000908152604090205481565b600054610100900460ff1680611e0b5750611e0b6124d6565b80611e19575060005460ff16155b611e355760405162461bcd60e51b81526004016104de90612be3565b600054610100900460ff16158015611e60576000805460ff1961ff0019909116610100171660011790555b611e686124e7565b816001600160a01b0316636f3a3bfc6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611ea357600080fd5b505af1158015611eb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611edb9190612719565b50606580546001600160a01b0319166001600160a01b03841617905560016069558015611f0e576000805461ff00191690555b5050565b6065546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015611f5757600080fd5b505afa158015611f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8f91906126c5565b9050806001600160a01b03166391d14854826001600160a01b031663e58378bb6040518163ffffffff1660e01b815260040160206040518083038186803b158015611fd957600080fd5b505afa158015611fed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120119190612719565b336040518363ffffffff1660e01b815260040161202f929190612908565b60206040518083038186803b15801561204757600080fd5b505afa15801561205b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207f91906126e1565b61209b5760405162461bcd60e51b81526004016104de906129aa565b606954156120bb5760405162461bcd60e51b81526004016104de90612d34565b6000828152606d6020526040902054156120e75760405162461bcd60e51b81526004016104de90612ae7565b6065546040805163d868246160e01b815290516000926001600160a01b03169163d8682461916004808301926020929190829003018186803b15801561212c57600080fd5b505afa158015612140573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061216491906126c5565b6001600160a01b0316637a8bd02e846040518263ffffffff1660e01b815260040161218f91906128ff565b60206040518083038186803b1580156121a757600080fd5b505afa1580156121bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121df9190612719565b90506000606560009054906101000a90046001600160a01b03166001600160a01b031663d86824616040518163ffffffff1660e01b815260040160206040518083038186803b15801561223157600080fd5b505afa158015612245573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061226991906126c5565b6001600160a01b0316638c0adf62856040518263ffffffff1660e01b815260040161229491906128ff565b60206040518083038186803b1580156122ac57600080fd5b505afa1580156122c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e491906126c5565b6000858152606f602090815260409182902085905560685482516313a3dd4f60e31b8152925193945084936123ee936001600160a01b0390921692639d1eea789260048082019391829003018186803b15801561234057600080fd5b505afa158015612354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123789190612719565b826001600160a01b0316637e91400f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156123b157600080fd5b505afa1580156123c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123e99190612719565b61257a565b6000868152606d602052604080822092909255905186917fbd1c95632282a2358063f487ff1e4525000d7c339f7afebf6744f972d0a98ba191a25050505050565b6065546001600160a01b031681565b60706020526000908152604090205481565b6000676765c793fa10079d601b1b61246884846124b2565b8161246f57fe5b049392505050565b6000818311156124875781612489565b825b90505b92915050565b8082038281111561248c57600080fd5b8181018281101561248c57600080fd5b60008115806124cd575050808202828282816124ca57fe5b04145b61248c57600080fd5b60006124e13061258f565b15905090565b600054610100900460ff168061250057506125006124d6565b8061250e575060005460ff16155b61252a5760405162461bcd60e51b81526004016104de90612be3565b600054610100900460ff16158015612555576000805460ff1961ff0019909116610100171660011790555b61255d612595565b612565612616565b8015612577576000805461ff00191690555b50565b60008161246884670de0b6b3a76400006124b2565b3b151590565b600054610100900460ff16806125ae57506125ae6124d6565b806125bc575060005460ff16155b6125d85760405162461bcd60e51b81526004016104de90612be3565b600054610100900460ff16158015612565576000805460ff1961ff0019909116610100171660011790558015612577576000805461ff001916905550565b600054610100900460ff168061262f575061262f6124d6565b8061263d575060005460ff16155b6126595760405162461bcd60e51b81526004016104de90612be3565b600054610100900460ff16158015612684576000805460ff1961ff0019909116610100171660011790555b6033805460ff191690558015612577576000805461ff001916905550565b6000602082840312156126b3578081fd5b81356126be81612d72565b9392505050565b6000602082840312156126d6578081fd5b81516126be81612d72565b6000602082840312156126f2578081fd5b815180151581146126be578182fd5b600060208284031215612712578081fd5b5035919050565b60006020828403121561272a578081fd5b5051919050565b60008060408385031215612743578081fd5b82359150602083013561275581612d72565b809150509250929050565b60008060008060008060a08789031215612778578182fd5b86359550602087013561278a81612d72565b9450604087013561279a81612d72565b935060608701356127aa81612d72565b925060808701356001600160401b03808211156127c5578384fd5b818901915089601f8301126127d8578384fd5b8135818111156127e6578485fd5b8a60208285010111156127f7578485fd5b6020830194508093505050509295509295509295565b6000806040838503121561281f578182fd5b50508035926020909101359150565b60008060408385031215612840578182fd5b505080516020909101519092909150565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a084013781830160a090810191909152601f909201601f19160101949350505050565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b9384526001600160a01b03928316602085015291166040830152606082015260800190565b9586526001600160a01b039485166020870152928416604086015292166060840152608083019190915260a082015260c00190565b60208082526017908201527653686f7753746f707065722f616d6f756e742d7a65726f60481b604082015260600190565b6020808252600a9082015269216f776e6572526f6c6560b01b604082015260600190565b6020808252603b90820152600080516020612da883398151915260408201527a1b185d195c985b0b5c1bdbdb0b5a590b5b9bdd0b5919599a5b9959602a1b606082015260800190565b6020808252603590820152600080516020612d888339815191526040820152741b0b5c1bdbdb0b5a590b5b9bdd0b5919599a5b9959605a1b606082015260800190565b60208082526037908201527f53686f7753746f707065722f696e73756666696369656e742d737461626c65636040820152766f696e2d616363756d756c61746f722d62616c616e636560481b606082015260800190565b6020808252601c908201527b53686f7753746f707065722f737572706c75732d6e6f742d7a65726f60201b604082015260600190565b6020808252603990820152600080516020612d888339815191526040820152781b0b5c1bdbdb0b5a590b585b1c9958591e4b5919599a5b9959603a1b606082015260800190565b60208082526019908201527853686f7753746f707065722f646562742d6e6f742d7a65726f60381b604082015260600190565b6020808252603f90820152600080516020612da883398151915260408201527f6c61746572616c2d706f6f6c2d69642d616c72656164792d646566696e656400606082015260800190565b6020808252601e908201527f53686f7753746f707065722f6465627453686172652d6e6f742d7a65726f0000604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526014908201527353686f7753746f707065722f6e6f742d6c69766560601b604082015260600190565b60208082526027908201527f53686f7753746f707065722f636167652d636f6f6c2d646f776e2d6e6f742d666040820152661a5b9a5cda195960ca1b606082015260800190565b60208082526015908201527453686f7753746f707065722f646562742d7a65726f60581b604082015260600190565b60208082526017908201527614da1bddd4dd1bdc1c195c8bdb9bdd0b585b1b1bddd959604a1b604082015260600190565b60208082526014908201527353686f7753746f707065722f6f766572666c6f7760601b604082015260600190565b60208082526016908201527553686f7753746f707065722f7374696c6c2d6c69766560501b604082015260600190565b918252602082015260400190565b6001600160a01b038116811461257757600080fdfe53686f7753746f707065722f636167652d70726963652d636f6c6c617465726153686f7753746f707065722f66696e616c2d636173682d70726963652d636f6ca2646970667358221220c878a0e13db7f208d52f3a123297b9a07110be4fc7a71af6dd2d46e8dea1c1db64736f6c634300060c0033";

type ShowStopperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShowStopperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShowStopper__factory extends ContractFactory {
  constructor(...args: ShowStopperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShowStopper> {
    return super.deploy(overrides || {}) as Promise<ShowStopper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShowStopper {
    return super.attach(address) as ShowStopper;
  }
  connect(signer: Signer): ShowStopper__factory {
    return super.connect(signer) as ShowStopper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShowStopperInterface {
    return new utils.Interface(_abi) as ShowStopperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShowStopper {
    return new Contract(address, _abi, signerOrProvider) as ShowStopper;
  }
}
