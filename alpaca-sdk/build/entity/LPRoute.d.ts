import { ITokenProfile, IDexKey } from '.';
import { ValueObject } from '../shared/domain';
export declare type tokenAddress = string;
export interface ILPRoute {
    token0: ITokenProfile;
    token1: ITokenProfile;
    path: Array<ITokenProfile>;
}
export declare function createLPRoute(path: Array<ITokenProfile>): ILPRoute;
export declare class LPRoute extends ValueObject<ILPRoute> {
    constructor(props: ILPRoute);
    getLPPaths(dex: IDexKey): Array<string>;
}
