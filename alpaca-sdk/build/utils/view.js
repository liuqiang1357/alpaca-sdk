export function isItamWeek1RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK1_REWARD_ACTIVE === 'true';
}
export function isItamWeek2RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK2_REWARD_ACTIVE === 'true';
}
export function isItamWeek3RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK3_REWARD_ACTIVE === 'true';
}
export function isItamWeek4RewardActive() {
    return process.env.REACT_APP_ITAM_WEEK4_REWARD_ACTIVE === 'true';
}
export function isProd() {
    return process.env.REACT_APP_CUSTOM_ENV === 'prod' || process.env.ENV === 'prod';
}
export function isMainnet() {
    return (process.env.REACT_APP_CUSTOM_ENV === 'prod' ||
        process.env.REACT_APP_CUSTOM_ENV === 'stg' ||
        process.env.ENV === 'prod' ||
        process.env.ENV === 'stg');
}
