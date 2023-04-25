import { GrassHousePool } from '../entity';
export declare function findRewardStartTime(gh: GrassHousePool): number | null;
export declare function findRewardEndTime(gh: GrassHousePool): number | null;
export declare function findWeeklyRewardIndex(grassHousePool: GrassHousePool, timestamp: number): number;
