"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRad = exports.formatRad = exports.parseRay = exports.formatRay = exports.parseWad = exports.formatWad = exports.WeiPerRad = exports.WeiPerRay = exports.WeiPerWad = exports.WeiPerBln = void 0;
const units_1 = require("@ethersproject/units");
const ethers_1 = require("ethers");
const BlnPrecision = 9;
const WadPrecision = 18;
const RayPrecision = 27;
const RadPrecision = 45;
exports.WeiPerBln = ethers_1.BigNumber.from(`1${'0'.repeat(BlnPrecision)}`);
exports.WeiPerWad = ethers_1.BigNumber.from(`1${'0'.repeat(WadPrecision)}`);
exports.WeiPerRay = ethers_1.BigNumber.from(`1${'0'.repeat(RayPrecision)}`);
exports.WeiPerRad = ethers_1.BigNumber.from(`1${'0'.repeat(RadPrecision)}`);
function formatWad(wei) {
    return units_1.formatUnits(wei, WadPrecision);
}
exports.formatWad = formatWad;
function parseWad(wad) {
    return units_1.parseUnits(wad, WadPrecision);
}
exports.parseWad = parseWad;
function formatRay(wei) {
    return units_1.formatUnits(wei, RayPrecision);
}
exports.formatRay = formatRay;
function parseRay(ray) {
    return units_1.parseUnits(ray, RayPrecision);
}
exports.parseRay = parseRay;
function formatRad(wei) {
    return units_1.formatUnits(wei, RadPrecision);
}
exports.formatRad = formatRad;
function parseRad(rad) {
    return units_1.parseUnits(rad, RadPrecision);
}
exports.parseRad = parseRad;
