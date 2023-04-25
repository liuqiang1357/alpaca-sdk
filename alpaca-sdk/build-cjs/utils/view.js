"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMainnet = exports.isProd = exports.isItamWeek4RewardActive = exports.isItamWeek3RewardActive = exports.isItamWeek2RewardActive = exports.isItamWeek1RewardActive = void 0;
function isItamWeek1RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK1_REWARD_ACTIVE === 'true';
}
exports.isItamWeek1RewardActive = isItamWeek1RewardActive;
function isItamWeek2RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK2_REWARD_ACTIVE === 'true';
}
exports.isItamWeek2RewardActive = isItamWeek2RewardActive;
function isItamWeek3RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK3_REWARD_ACTIVE === 'true';
}
exports.isItamWeek3RewardActive = isItamWeek3RewardActive;
function isItamWeek4RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK4_REWARD_ACTIVE === 'true';
}
exports.isItamWeek4RewardActive = isItamWeek4RewardActive;
function isProd() {
    return process.env.REACT_APP_CUSTOM_ENV === 'prod' || process.env.ENV === 'prod';
}
exports.isProd = isProd;
function isMainnet() {
    return (process.env.REACT_APP_CUSTOM_ENV === 'prod' ||
        process.env.REACT_APP_CUSTOM_ENV === 'stg' ||
        process.env.ENV === 'prod' ||
        process.env.ENV === 'stg');
}
exports.isMainnet = isMainnet;
