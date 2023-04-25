import { BigNumber, BigNumberish } from 'ethers';
export declare const WeiPerBln: BigNumber;
export declare const WeiPerWad: BigNumber;
export declare const WeiPerRay: BigNumber;
export declare const WeiPerRad: BigNumber;
export declare function formatWad(wei: BigNumberish): string;
export declare function parseWad(wad: string): BigNumber;
export declare function formatRay(wei: BigNumberish): string;
export declare function parseRay(ray: string): BigNumber;
export declare function formatRad(wei: BigNumberish): string;
export declare function parseRad(rad: string): BigNumber;