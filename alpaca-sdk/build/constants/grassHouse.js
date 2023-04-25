import { parseEther } from '@ethersproject/units';
import { DateTime } from 'luxon';
import { GrassHouseType } from '../entity';
import { AlpacaGrassHouseAddress, DefaultGrazingRangeAddress, ScientixGrassHouseAddress } from './xAlpacaContract';
import { mapTokenProfiles } from './tokenProfile';
import { isMainnet } from '../utils/view';
const alpacaGrassHouse = {
    name: 'Alpaca',
    address: AlpacaGrassHouseAddress,
    rewardToken: mapTokenProfiles.alpaca,
    projectSiteUrl: 'https://app.alpacafinance.org',
    weeklyReward: [],
    type: GrassHouseType.AlpacaGrassHouse,
};
const scientixGrassHouse = {
    name: 'Scientix',
    address: ScientixGrassHouseAddress,
    rewardToken: mapTokenProfiles.scix,
    projectSiteUrl: 'https://scientix.finance',
    weeklyReward: [],
    type: GrassHouseType.ScientixGrassHouse,
};
// Theta Arena StartTime : Thu Dec 23 2021 00:00:00 GMT+0000
const thetaAreanaStartTime = DateTime.fromSeconds(1640217600);
const thetaAreanaRewardList = ['3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50'];
const thetaArenaGrassHouse = {
    name: 'Thetan Arena',
    address: DefaultGrazingRangeAddress('THG'),
    rewardToken: mapTokenProfiles.thg,
    projectSiteUrl: 'https://thetanarena.com',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-41-welcoming-thg-to-the-herd-f67e1e87ff0b',
    weeklyReward: thetaAreanaRewardList.map((reward, index) => {
        return {
            startTime: thetaAreanaStartTime.plus({ week: index }).toSeconds(),
            endTime: thetaAreanaStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: parseEther(reward),
        };
    }),
    type: GrassHouseType.DefaultGrassHouse,
};
// PAYB StartTime : Thu Dec 30 2021 00:00:00 GMT+0000
const payBSwapStartTime = DateTime.fromSeconds(1640822400);
const payBSwapRewardList = [
    '2265000.00',
    '2265000.00',
    '2265000.00',
    '2265000.00',
    '2265000.00',
    '2265000.00',
    '2265000.00',
    '2265000.00',
];
const payBSwapGrassHouse = {
    name: 'PayBSwap',
    address: DefaultGrazingRangeAddress('PAYB'),
    rewardToken: mapTokenProfiles.payb,
    projectSiteUrl: 'https://paybswap.finance',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-42-welcoming-payb-to-the-herd-af250ddb9ebd',
    weeklyReward: payBSwapRewardList.map((reward, index) => {
        return {
            startTime: payBSwapStartTime.plus({ week: index }).toSeconds(),
            endTime: payBSwapStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: parseEther(reward),
        };
    }),
    type: GrassHouseType.DefaultGrassHouse,
};
// LandShare StartTime : Thu Jan 06 2022 00:00:00 GMT+0000
const landShareStartTime = DateTime.fromSeconds(1641427200);
const landShareRewardList = ['2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25'];
const landShareGrassHouse = {
    name: 'LandShare',
    address: DefaultGrazingRangeAddress('LAND'),
    rewardToken: mapTokenProfiles.land,
    projectSiteUrl: 'https://landshare.io',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-43-welcoming-land-to-the-herd-d7a149a82a43',
    weeklyReward: landShareRewardList.map((reward, index) => {
        return {
            startTime: landShareStartTime.plus({ week: index }).toSeconds(),
            endTime: landShareStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: parseEther(reward),
        };
    }),
    type: GrassHouseType.DefaultGrassHouse,
};
// 175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000
// 2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688
// HighStreet StartTime : Thu Jan 13 2022 00:00:00 GMT+0000
const highStreetStartTime = DateTime.fromSeconds(1642032000);
const highStreetRewardList = [
    '2929.688',
    '2929.688',
    '2929.688',
    '2929.688',
    '2929.688',
    '2929.688',
    '2929.688',
    '2929.688',
];
const highStreetGrassHouse = {
    name: 'HighStreet',
    address: DefaultGrazingRangeAddress('HIGH'),
    rewardToken: mapTokenProfiles.high,
    projectSiteUrl: 'https://www.highstreet.market/',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-44-welcoming-high-to-the-herd-94cd82e79503',
    weeklyReward: highStreetRewardList.map((reward, index) => {
        return {
            startTime: highStreetStartTime.plus({ week: index }).toSeconds(),
            endTime: highStreetStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: parseEther(reward),
        };
    }),
    type: GrassHouseType.DefaultGrassHouse,
};
// Delta Thetha StartTime : Thu Jan 13 2022 00:00:00 GMT+0000
const deltaThethaStartTime = DateTime.fromSeconds(1642032000);
const deltaThethaRewardList = ['175150', '175150', '175150', '175150', '175150', '175150', '175150', '175150'];
const deltaThethaGrassHouse = {
    name: 'Delta Thetha',
    address: DefaultGrazingRangeAddress('DLTA'),
    rewardToken: mapTokenProfiles.dlta,
    projectSiteUrl: 'https://deltatheta.tech/',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-45-welcoming-dlta-to-the-herd-4bdaf0e64345',
    weeklyReward: deltaThethaRewardList.map((reward, index) => {
        return {
            startTime: deltaThethaStartTime.plus({ week: index }).toSeconds(),
            endTime: deltaThethaStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: parseEther(reward),
        };
    }),
    type: GrassHouseType.DefaultGrassHouse,
};
const grassHousePoolsMainnet = [
    alpacaGrassHouse,
    scientixGrassHouse,
    // put new ending gr after this
    deltaThethaGrassHouse,
    highStreetGrassHouse,
    landShareGrassHouse,
    payBSwapGrassHouse,
    thetaArenaGrassHouse,
];
const grassHousePoolsTestnet = [alpacaGrassHouse];
export const grassHousePools = isMainnet() ? grassHousePoolsMainnet : grassHousePoolsTestnet;
