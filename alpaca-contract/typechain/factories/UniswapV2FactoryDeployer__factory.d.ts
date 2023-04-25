import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { UniswapV2FactoryDeployer } from "../UniswapV2FactoryDeployer";
export declare class UniswapV2FactoryDeployer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<UniswapV2FactoryDeployer>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): UniswapV2FactoryDeployer;
    connect(signer: Signer): UniswapV2FactoryDeployer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2FactoryDeployer;
}
