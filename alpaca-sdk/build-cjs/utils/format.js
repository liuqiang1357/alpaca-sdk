"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBigNumberToFloat = exports.parseFloatToBigNumber = exports.convertToEther = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const constants_1 = require("@ethersproject/constants");
const units_1 = require("@ethersproject/units");
const NegativeMaxUint256 = bignumber_1.BigNumber.from(`-${constants_1.MaxUint256.toString()}`);
function convertToEther(value, tokenDecimal) {
    return value.mul(constants_1.WeiPerEther).div(bignumber_1.BigNumber.from(10).pow(tokenDecimal));
}
exports.convertToEther = convertToEther;
function parseFloatToBigNumber(float) {
    if (float === Infinity) {
        return constants_1.MaxUint256;
    }
    if (float === -Infinity) {
        return NegativeMaxUint256;
    }
    const floatString = float.toString();
    if (floatString.includes('e')) {
        const [valString, expString] = floatString.split('e');
        const valBigNumber = units_1.parseEther(valString);
        const expInt = parseInt(expString);
        if (expInt >= 0) {
            return valBigNumber.mul(bignumber_1.BigNumber.from(10).pow(expInt));
        }
        else {
            return valBigNumber.div(bignumber_1.BigNumber.from(10).pow(-expInt));
        }
    }
    else {
        return units_1.parseEther(float.toFixed(6));
    }
}
exports.parseFloatToBigNumber = parseFloatToBigNumber;
function parseBigNumberToFloat(num) {
    return parseFloat(units_1.formatEther(num));
}
exports.parseBigNumberToFloat = parseBigNumberToFloat;
