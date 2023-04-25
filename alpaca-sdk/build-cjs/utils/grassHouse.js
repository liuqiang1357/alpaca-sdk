"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWeeklyRewardIndex = exports.findRewardEndTime = exports.findRewardStartTime = void 0;
const constants_1 = require("../constants");
const entity_1 = require("../entity");
function findRewardStartTime(gh) {
    if (gh.weeklyReward.length === 0)
        return null;
    return gh.weeklyReward[0].startTime;
}
exports.findRewardStartTime = findRewardStartTime;
function findRewardEndTime(gh) {
    if (gh.weeklyReward.length === 0)
        return null;
    return gh.weeklyReward[gh.weeklyReward.length - 1].endTime;
}
exports.findRewardEndTime = findRewardEndTime;
function findWeeklyRewardIndex(grassHousePool, timestamp) {
    if (grassHousePool.type === entity_1.GrassHouseType.DefaultGrassHouse) {
        const rewardStartTime = grassHousePool.weeklyReward[0].startTime;
        // timestamp should be rewardFirstWeek  - 7 days
        if (timestamp >= rewardStartTime - constants_1.SECONDS_IN_WEEK && timestamp < rewardStartTime)
            return 0;
    }
    return grassHousePool.weeklyReward.findIndex((weeklyReward) => timestamp >= weeklyReward.startTime && timestamp <= weeklyReward.endTime);
}
exports.findWeeklyRewardIndex = findWeeklyRewardIndex;
