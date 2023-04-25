"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minBigNumber = exports.indexOfMaxBigNumber = exports.maxBigNumber = void 0;
function maxBigNumber(...nums) {
    if (nums.length === 0) {
        throw new Error('maxBigNumber: nums is empty');
    }
    return nums[indexOfMaxBigNumber(...nums)];
}
exports.maxBigNumber = maxBigNumber;
function indexOfMaxBigNumber(...nums) {
    if (nums.length === 0) {
        throw new Error('indexOfMaxBigNumber: nums is empty');
    }
    let max = nums[0];
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num.gt(max)) {
            max = num;
            maxIndex = i;
        }
    }
    return maxIndex;
}
exports.indexOfMaxBigNumber = indexOfMaxBigNumber;
function minBigNumber(...nums) {
    if (nums.length === 0) {
        throw new Error('minBigNumber: nums is empty');
    }
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num.lt(min)) {
            min = num;
        }
    }
    return min;
}
exports.minBigNumber = minBigNumber;
