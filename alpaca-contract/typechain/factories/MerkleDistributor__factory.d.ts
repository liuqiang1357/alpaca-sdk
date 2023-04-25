import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MerkleDistributor } from "../MerkleDistributor";
export declare class MerkleDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(token_: string, merkleRoot_: BytesLike, overrides?: Overrides): Promise<MerkleDistributor>;
    getDeployTransaction(token_: string, merkleRoot_: BytesLike, overrides?: Overrides): TransactionRequest;
    attach(address: string): MerkleDistributor;
    connect(signer: Signer): MerkleDistributor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleDistributor;
}
