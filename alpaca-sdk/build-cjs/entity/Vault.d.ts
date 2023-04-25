import { AbstractEntity, UniqueEntityID } from '../shared/domain';
import { ITokenProfile } from '.';
export interface IVault {
    key: string;
    name: string;
    address: string;
    tokenAddress: string;
    tripleSlopeModelAddress: string;
    poolId: number;
    baseToken: ITokenProfile;
    vaultToken: ITokenProfile;
    debtToken: ITokenProfile;
}
export declare type IVaults = Array<IVault>;
export declare class Vault extends AbstractEntity<IVault> {
    constructor(props: IVault);
    get id(): UniqueEntityID;
    get name(): string;
    get address(): string;
}
export declare type IMapVaults = Record<string, IVault>;
