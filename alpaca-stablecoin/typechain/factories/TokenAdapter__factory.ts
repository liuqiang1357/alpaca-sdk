/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenAdapter, TokenAdapterInterface } from "../TokenAdapter";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "LogCage",
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
    name: "collateralToken",
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
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
        name: "collateralPoolId_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "collateralToken_",
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
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "int256",
        name: "collateralValue",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "debtShare",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onAdjustPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onMoveCollateral",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d40806100206000396000f3fe6080604052600436106100b85760003560e01c8063313ce567146100bd57806331f09265146100e45780633f4ba83a1461017657806349bdc2b81461018b5780635c975abb1461020e57806369245009146102375780638456cb591461024c578063957aa58c146102615780639944361614610276578063b2016bd414610311578063d26b3e6e14610342578063d63b23b214610385578063dca07dc51461039a578063e3b3932a146103af578063f77c4036146103c4575b600080fd5b3480156100c957600080fd5b506100d2610464565b60408051918252519081900360200190f35b3480156100f057600080fd5b506101746004803603606081101561010757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561013657600080fd5b82018360208201111561014857600080fd5b803590602001918460018302840111600160201b8311171561016957600080fd5b50909250905061046a565b005b34801561018257600080fd5b506101746105ea565b610174600480360360608110156101a157600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156101d057600080fd5b8201836020820111156101e257600080fd5b803590602001918460018302840111600160201b8311171561020357600080fd5b509092509050610882565b34801561021a57600080fd5b50610223610a47565b604080519115158252519081900360200190f35b34801561024357600080fd5b50610174610a50565b34801561025857600080fd5b50610174610d51565b34801561026d57600080fd5b506100d2610fe6565b34801561028257600080fd5b506101746004803603608081101561029957600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156102d357600080fd5b8201836020820111156102e557600080fd5b803590602001918460018302840111600160201b8311171561030657600080fd5b509092509050610fec565b34801561031d57600080fd5b5061032661103e565b604080516001600160a01b039092168252519081900360200190f35b34801561034e57600080fd5b506101746004803603606081101561036557600080fd5b506001600160a01b0381358116916020810135916040909101351661104d565b34801561039157600080fd5b506101746111fe565b3480156103a657600080fd5b506100d26114fe565b3480156103bb57600080fd5b50610326611504565b3480156103d057600080fd5b50610174600480360360a08110156103e757600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561042657600080fd5b82018360208201111561043857600080fd5b803590602001918460018302840111600160201b8311171561045957600080fd5b509092509050611513565b609a5481565b600260655414156104b0576040805162461bcd60e51b815260206004820152601f6024820152600080516020611c9d833981519152604482015290519081900360640190fd5b60026065556104bd610a47565b15610502576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600160ff1b8310610552576040805162461bcd60e51b8152602060048201526015602482015274546f6b656e416461707465722f6f766572666c6f7760581b604482015290519081900360640190fd5b6097546098546040805163694ac93d60e11b815260048101929092523360248301526000868103604484015290516001600160a01b039093169263d295927a92606480820193929182900301818387803b1580156105af57600080fd5b505af11580156105c3573d6000803e3d6000fd5b50506099546105df92506001600160a01b031690508585611566565b505060016065555050565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561062f57600080fd5b505afa158015610643573d6000803e3d6000fd5b505050506040513d602081101561065957600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b1580156106a757600080fd5b505afa1580156106bb573d6000803e3d6000fd5b505050506040513d60208110156106d157600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561071657600080fd5b505afa15801561072a573d6000803e3d6000fd5b505050506040513d602081101561074057600080fd5b50518061082c5750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561079057600080fd5b505afa1580156107a4573d6000803e3d6000fd5b505050506040513d60208110156107ba57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b1580156107ff57600080fd5b505afa158015610813573d6000803e3d6000fd5b505050506040513d602081101561082957600080fd5b50515b610877576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b61087f6116c0565b50565b600260655414156108c8576040805162461bcd60e51b815260206004820152601f6024820152600080516020611c9d833981519152604482015290519081900360640190fd5b60026065556108d5610a47565b1561091a576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b609b54600114610969576040805162461bcd60e51b8152602060048201526015602482015274546f6b656e416461707465722f6e6f742d6c69766560581b604482015290519081900360640190fd5b60008312156109b7576040805162461bcd60e51b8152602060048201526015602482015274546f6b656e416461707465722f6f766572666c6f7760581b604482015290519081900360640190fd5b6097546098546040805163694ac93d60e11b815260048101929092526001600160a01b03878116602484015260448301879052905192169163d295927a9160648082019260009290919082900301818387803b158015610a1657600080fd5b505af1158015610a2a573d6000803e3d6000fd5b50506099546105df92506001600160a01b03169050333086611760565b60335460ff1690565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610a9557600080fd5b505afa158015610aa9573d6000803e3d6000fd5b505050506040513d6020811015610abf57600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b158015610b0d57600080fd5b505afa158015610b21573d6000803e3d6000fd5b505050506040513d6020811015610b3757600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610b7c57600080fd5b505afa158015610b90573d6000803e3d6000fd5b505050506040513d6020811015610ba657600080fd5b505180610c925750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b158015610bf657600080fd5b505afa158015610c0a573d6000803e3d6000fd5b505050506040513d6020811015610c2057600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610c6557600080fd5b505afa158015610c79573d6000803e3d6000fd5b505050506040513d6020811015610c8f57600080fd5b50515b610cd1576040805162461bcd60e51b815260206004820152601f6024820152600080516020611cbd833981519152604482015290519081900360640190fd5b609b54600114610d20576040805162461bcd60e51b8152602060048201526015602482015274546f6b656e416461707465722f6e6f742d6c69766560581b604482015290519081900360640190fd5b6000609b8190556040517fbf689b4aae670d200b1d2b971ace2e0c3bef88a9c5e93f36705c7b86eab630b99190a150565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b158015610d9657600080fd5b505afa158015610daa573d6000803e3d6000fd5b505050506040513d6020811015610dc057600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b158015610e0e57600080fd5b505afa158015610e22573d6000803e3d6000fd5b505050506040513d6020811015610e3857600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610e7d57600080fd5b505afa158015610e91573d6000803e3d6000fd5b505050506040513d6020811015610ea757600080fd5b505180610f935750806001600160a01b03166391d14854826001600160a01b031663b536818a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ef757600080fd5b505afa158015610f0b573d6000803e3d6000fd5b505050506040513d6020811015610f2157600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b158015610f6657600080fd5b505afa158015610f7a573d6000803e3d6000fd5b505050506040513d6020811015610f9057600080fd5b50515b610fde576040805162461bcd60e51b815260206004820152601760248201527621286f776e6572526f6c65206f7220676f76526f6c652960481b604482015290519081900360640190fd5b61087f6118c7565b609b5481565b60026065541415611032576040805162461bcd60e51b815260206004820152601f6024820152600080516020611c9d833981519152604482015290519081900360640190fd5b50506001606555505050565b6099546001600160a01b031681565b600054610100900460ff1680611066575061106661194a565b80611074575060005460ff16155b6110af5760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff161580156110da576000805460ff1961ff0019909116610100171660011790555b6110e261195b565b6110ea611a0c565b6001609b55609780546001600160a01b038087166001600160a01b031992831617909255609885905560998054858416921691909117908190556040805163313ce56760e01b81529051919092169163313ce567916004828101926020929190829003018186803b15801561115e57600080fd5b505afa158015611172573d6000803e3d6000fd5b505050506040513d602081101561118857600080fd5b505160ff16609a8190556012146111e6576040805162461bcd60e51b815260206004820152601f60248201527f546f6b656e416461707465722f6261642d746f6b656e2d646563696d616c7300604482015290519081900360640190fd5b80156111f8576000805461ff00191690555b50505050565b6097546040805163c8cc243f60e01b815290516000926001600160a01b03169163c8cc243f916004808301926020929190829003018186803b15801561124357600080fd5b505afa158015611257573d6000803e3d6000fd5b505050506040513d602081101561126d57600080fd5b50516040805163e58378bb60e01b815290519192506001600160a01b038316916391d1485491839163e58378bb91600480820192602092909190829003018186803b1580156112bb57600080fd5b505afa1580156112cf573d6000803e3d6000fd5b505050506040513d60208110156112e557600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561132a57600080fd5b505afa15801561133e573d6000803e3d6000fd5b505050506040513d602081101561135457600080fd5b5051806114405750806001600160a01b03166391d14854826001600160a01b031663d7a47a696040518163ffffffff1660e01b815260040160206040518083038186803b1580156113a457600080fd5b505afa1580156113b8573d6000803e3d6000fd5b505050506040513d60208110156113ce57600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252336024830152516044808301926020929190829003018186803b15801561141357600080fd5b505afa158015611427573d6000803e3d6000fd5b505050506040513d602081101561143d57600080fd5b50515b61147f576040805162461bcd60e51b815260206004820152601f6024820152600080516020611cbd833981519152604482015290519081900360640190fd5b609b54156114cd576040805162461bcd60e51b8152602060048201526016602482015275151bdad95b9059185c1d195c8bdb9bdd0b58d859d95960521b604482015290519081900360640190fd5b6001609b556040517f1868a6ced217213f36be87ba9aee25cde5381b42e85c8f88e73b18772c0bd07390600090a150565b60985481565b6097546001600160a01b031681565b60026065541415611559576040805162461bcd60e51b815260206004820152601f6024820152600080516020611c9d833981519152604482015290519081900360640190fd5b5050600160655550505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106115e35780518252601f1990920191602091820191016115c4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611645576040519150601f19603f3d011682016040523d82523d6000602084013e61164a565b606091505b5091509150818015611678575080511580611678575080806020019051602081101561167557600080fd5b50515b6116b9576040805162461bcd60e51b815260206004820152600d60248201526c10b9b0b332aa3930b739b332b960991b604482015290519081900360640190fd5b5050505050565b6116c8610a47565b611710576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611743611aa1565b604080516001600160a01b039092168252519081900360200190a1565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106117e55780518252601f1990920191602091820191016117c6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611847576040519150601f19603f3d011682016040523d82523d6000602084013e61184c565b606091505b509150915081801561187a57508051158061187a575080806020019051602081101561187757600080fd5b50515b6118bf576040805162461bcd60e51b815260206004820152601160248201527021736166655472616e7366657246726f6d60781b604482015290519081900360640190fd5b505050505050565b6118cf610a47565b15611914576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611743611aa1565b600061195530611aa5565b15905090565b600054610100900460ff1680611974575061197461194a565b80611982575060005460ff16155b6119bd5760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff161580156119e8576000805460ff1961ff0019909116610100171660011790555b6119f0611aab565b6119f8611b4b565b801561087f576000805461ff001916905550565b600054610100900460ff1680611a255750611a2561194a565b80611a33575060005460ff16155b611a6e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff16158015611a99576000805460ff1961ff0019909116610100171660011790555b6119f8611bf6565b3390565b3b151590565b600054610100900460ff1680611ac45750611ac461194a565b80611ad2575060005460ff16155b611b0d5760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff161580156119f8576000805460ff1961ff001990911661010017166001179055801561087f576000805461ff001916905550565b600054610100900460ff1680611b645750611b6461194a565b80611b72575060005460ff16155b611bad5760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff16158015611bd8576000805460ff1961ff0019909116610100171660011790555b6033805460ff19169055801561087f576000805461ff001916905550565b600054610100900460ff1680611c0f5750611c0f61194a565b80611c1d575060005460ff16155b611c585760405162461bcd60e51b815260040180806020018281038252602e815260200180611cdd602e913960400191505060405180910390fd5b600054610100900460ff16158015611c83576000805460ff1961ff0019909116610100171660011790555b6001606555801561087f576000805461ff00191690555056fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c0021286f776e6572526f6c65206f722073686f7753746f70706572526f6c652900496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a2646970667358221220306e034b163b8a6ad19a8c93c3f764fa60825c0e3754df42a63a1bf09ed13f0064736f6c634300060c0033";

type TokenAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenAdapter__factory extends ContractFactory {
  constructor(...args: TokenAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenAdapter> {
    return super.deploy(overrides || {}) as Promise<TokenAdapter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenAdapter {
    return super.attach(address) as TokenAdapter;
  }
  connect(signer: Signer): TokenAdapter__factory {
    return super.connect(signer) as TokenAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAdapterInterface {
    return new utils.Interface(_abi) as TokenAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenAdapter {
    return new Contract(address, _abi, signerOrProvider) as TokenAdapter;
  }
}