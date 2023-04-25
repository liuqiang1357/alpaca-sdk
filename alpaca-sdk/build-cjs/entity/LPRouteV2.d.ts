import { IMapTokenProfiles, ITokenProfile, TokenSymbol } from '.';
import { ValueObject } from '../shared/domain';
export interface ILPRouteV2 {
    token0: ITokenProfile | TokenSymbol;
    token1: ITokenProfile | TokenSymbol;
    path: Array<ITokenProfile | TokenSymbol>;
    factoryAddress: string;
    initCodePairHash: string;
}
export declare class LPRouteV2 extends ValueObject<ILPRouteV2> {
    private mapTokenProfiles;
    constructor(props: ILPRouteV2, mapTokenProfiles: IMapTokenProfiles);
    getLPPaths(): Array<string>;
}
