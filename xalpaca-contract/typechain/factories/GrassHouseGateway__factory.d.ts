import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { GrassHouseGateway } from "../GrassHouseGateway";
export declare class GrassHouseGateway__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<GrassHouseGateway>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): GrassHouseGateway;
    connect(signer: Signer): GrassHouseGateway__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GrassHouseGateway;
}
