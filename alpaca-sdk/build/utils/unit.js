import { formatUnits, parseUnits } from '@ethersproject/units';
import { BigNumber } from 'ethers';
const BlnPrecision = 9;
const WadPrecision = 18;
const RayPrecision = 27;
const RadPrecision = 45;
export const WeiPerBln = BigNumber.from(`1${'0'.repeat(BlnPrecision)}`);
export const WeiPerWad = BigNumber.from(`1${'0'.repeat(WadPrecision)}`);
export const WeiPerRay = BigNumber.from(`1${'0'.repeat(RayPrecision)}`);
export const WeiPerRad = BigNumber.from(`1${'0'.repeat(RadPrecision)}`);
export function formatWad(wei) {
    return formatUnits(wei, WadPrecision);
}
export function parseWad(wad) {
    return parseUnits(wad, WadPrecision);
}
export function formatRay(wei) {
    return formatUnits(wei, RayPrecision);
}
export function parseRay(ray) {
    return parseUnits(ray, RayPrecision);
}
export function formatRad(wei) {
    return formatUnits(wei, RadPrecision);
}
export function parseRad(rad) {
    return parseUnits(rad, RadPrecision);
}
