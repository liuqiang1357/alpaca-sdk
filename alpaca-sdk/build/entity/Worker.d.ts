import { AbstractEntity, UniqueEntityID } from '../shared/domain';
import { ITokenProfilePair, IStrategyAddress, Dex, ILPRoute } from '.';
export interface IBaseWorker {
    key: string;
    dex: Dex;
    tokenPair: ITokenProfilePair;
    active: boolean;
    address: string;
    strategyAddress: IStrategyAddress;
    workerConfigAddress: string;
}
export declare type ILPWorker = IBaseWorker;
export interface ISingleAssetWorker extends IBaseWorker {
    lpRoute: ILPRoute;
}
export declare type IWorker = ISingleAssetWorker | ILPWorker;
export declare type IWorkers = Array<IWorker>;
export declare class Worker extends AbstractEntity<IWorker> {
    constructor(props: IWorker);
    get id(): UniqueEntityID;
    get tokenPair(): ITokenProfilePair;
    get name(): string;
    get address(): string;
    get dex(): Dex;
    isSingleAsset(): boolean;
    protected _isSingleAsset(props: IWorker): props is ISingleAssetWorker;
    get singleAssetLPAddresses(): Array<string>;
}
export declare type IMapWorker = Record<string, IWorker>;
