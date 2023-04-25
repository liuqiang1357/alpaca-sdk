import { BigNumber } from '@ethersproject/bignumber';
import { MaxUint256, WeiPerEther } from '@ethersproject/constants';
import { formatEther, parseEther } from '@ethersproject/units';
const NegativeMaxUint256 = BigNumber.from(`-${MaxUint256.toString()}`);
export function convertToEther(value, tokenDecimal) {
    return value.mul(WeiPerEther).div(BigNumber.from(10).pow(tokenDecimal));
}
export function parseFloatToBigNumber(float) {
    if (float === Infinity) {
        return MaxUint256;
    }
    if (float === -Infinity) {
        return NegativeMaxUint256;
    }
    const floatString = float.toString();
    if (floatString.includes('e')) {
        const [valString, expString] = floatString.split('e');
        const valBigNumber = parseEther(valString);
        const expInt = parseInt(expString);
        if (expInt >= 0) {
            return valBigNumber.mul(BigNumber.from(10).pow(expInt));
        }
        else {
            return valBigNumber.div(BigNumber.from(10).pow(-expInt));
        }
    }
    else {
        return parseEther(float.toFixed(6));
    }
}
export function parseBigNumberToFloat(num) {
    return parseFloat(formatEther(num));
}
