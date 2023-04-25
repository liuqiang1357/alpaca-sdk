import { SECONDS_IN_WEEK } from '../constants';
import { GrassHouseType } from '../entity';
export function findRewardStartTime(gh) {
    if (gh.weeklyReward.length === 0)
        return null;
    return gh.weeklyReward[0].startTime;
}
export function findRewardEndTime(gh) {
    if (gh.weeklyReward.length === 0)
        return null;
    return gh.weeklyReward[gh.weeklyReward.length - 1].endTime;
}
export function findWeeklyRewardIndex(grassHousePool, timestamp) {
    if (grassHousePool.type === GrassHouseType.DefaultGrassHouse) {
        const rewardStartTime = grassHousePool.weeklyReward[0].startTime;
        // timestamp should be rewardFirstWeek  - 7 days
        if (timestamp >= rewardStartTime - SECONDS_IN_WEEK && timestamp < rewardStartTime)
            return 0;
    }
    return grassHousePool.weeklyReward.findIndex((weeklyReward) => timestamp >= weeklyReward.startTime && timestamp <= weeklyReward.endTime);
}
