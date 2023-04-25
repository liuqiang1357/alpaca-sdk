import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PositionHandler, PositionHandlerInterface } from "../PositionHandler";
declare type PositionHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PositionHandler__factory extends ContractFactory {
    constructor(...args: PositionHandlerConstructorParams);
    deploy(_bookKeeper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PositionHandler>;
    getDeployTransaction(_bookKeeper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PositionHandler;
    connect(signer: Signer): PositionHandler__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060405160db38038060db83398181016040526020811015602f57600080fd5b505160408051634d8c928d60e11b815233600482015290516001600160a01b03831691639b19251a91602480830192600092919082900301818387803b158015607757600080fd5b505af1158015608a573d6000803e3d6000fd5b5050505050603f80609c6000396000f3fe6080604052600080fdfea26469706673582212209004034dee5cdddfbbce767345f04d7e39bc7dd683ca291ec464efc93fa197a564736f6c634300060c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PositionHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionHandler;
}
export {};
