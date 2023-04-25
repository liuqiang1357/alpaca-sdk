/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlpacaNote, AlpacaNoteInterface } from "../AlpacaNote";

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "foo",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "bar",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fax",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122085527ed7be6c8dc121d4368cb8aa568bd631c9976b90a70b4feb535a4aa317ac64736f6c634300060c0033";

type AlpacaNoteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlpacaNoteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlpacaNote__factory extends ContractFactory {
  constructor(...args: AlpacaNoteConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlpacaNote> {
    return super.deploy(overrides || {}) as Promise<AlpacaNote>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlpacaNote {
    return super.attach(address) as AlpacaNote;
  }
  connect(signer: Signer): AlpacaNote__factory {
    return super.connect(signer) as AlpacaNote__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlpacaNoteInterface {
    return new utils.Interface(_abi) as AlpacaNoteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlpacaNote {
    return new Contract(address, _abi, signerOrProvider) as AlpacaNote;
  }
}
