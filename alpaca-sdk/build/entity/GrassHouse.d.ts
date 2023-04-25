import { BigNumber } from 'ethers';
import { ITokenProfile } from './TokenProfile';
export declare enum GrassHouseType {
    AlpacaGrassHouse = 0,
    ScientixGrassHouse = 1,
    DefaultGrassHouse = 2
}
export interface GrassHouseWeeklyReward {
    startTime: number;
    endTime: number;
    rewardAmount: BigNumber;
}
export interface GrassHousePool {
    name: string;
    address: string;
    rewardToken: ITokenProfile;
    weeklyReward: GrassHouseWeeklyReward[];
    projectSiteUrl: string;
    mediumUrl?: string;
    type: GrassHouseType;
}
