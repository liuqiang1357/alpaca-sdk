import { ITokenProfile, TokenSymbol, ILPRouteV2 } from '.';
export declare class ILPRouteV2Factory {
    static createILPRouteV2(path: Array<ITokenProfile | TokenSymbol>, factoryAddress: string): ILPRouteV2 | undefined;
    static createILPFromPcsV1Route(path: Array<ITokenProfile | TokenSymbol>): ILPRouteV2;
    static createILPFromPcsV2Route(path: Array<ITokenProfile | TokenSymbol>): ILPRouteV2;
    static createILPFromWsRoute(path: Array<ITokenProfile | TokenSymbol>): ILPRouteV2;
    static createILPFromAsRoute(path: Array<ITokenProfile | TokenSymbol>): ILPRouteV2;
    static createILPFromMdxRoute(path: Array<ITokenProfile | TokenSymbol>): ILPRouteV2;
    private static resolveInitCodePairHash;
}
