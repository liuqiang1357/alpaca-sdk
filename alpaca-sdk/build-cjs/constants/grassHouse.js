"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grassHousePools = void 0;
const units_1 = require("@ethersproject/units");
const luxon_1 = require("luxon");
const entity_1 = require("../entity");
const xAlpacaContract_1 = require("./xAlpacaContract");
const tokenProfile_1 = require("./tokenProfile");
const view_1 = require("../utils/view");
const alpacaGrassHouse = {
    name: 'Alpaca',
    address: xAlpacaContract_1.AlpacaGrassHouseAddress,
    rewardToken: tokenProfile_1.mapTokenProfiles.alpaca,
    projectSiteUrl: 'https://app.alpacafinance.org',
    weeklyReward: [],
    type: entity_1.GrassHouseType.AlpacaGrassHouse,
};
const scientixGrassHouse = {
    name: 'Scientix',
    address: xAlpacaContract_1.ScientixGrassHouseAddress,
    rewardToken: tokenProfile_1.mapTokenProfiles.scix,
    projectSiteUrl: 'https://scientix.finance',
    weeklyReward: [],
    type: entity_1.GrassHouseType.ScientixGrassHouse,
};
// Theta Arena StartTime : Thu Dec 23 2021 00:00:00 GMT+0000
const thetaAreanaStartTime = luxon_1.DateTime.fromSeconds(1640217600);
const thetaAreanaRewardList = ['3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50', '3652.50'];
const thetaArenaGrassHouse = {
    name: 'Thetan Arena',
    address: xAlpacaContract_1.DefaultGrazingRangeAddress('THG'),
    rewardToken: tokenProfile_1.mapTokenProfiles.thg,
    projectSiteUrl: 'https://thetanarena.com',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-41-welcoming-thg-to-the-herd-f67e1e87ff0b',
    weeklyReward: thetaAreanaRewardList.map((reward, index) => {
        return {
            startTime: thetaAreanaStartTime.plus({ week: index }).toSeconds(),
            endTime: thetaAreanaStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: units_1.parseEther(reward),
        };
    }),
    type: entity_1.GrassHouseType.DefaultGrassHouse,
};
// PAYB StartTime : Thu Dec 30 2021 00:00:00 GMT+0000
const payBSwapStartTime = luxon_1.DateTime.fromSeconds(1640822400);
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
    address: xAlpacaContract_1.DefaultGrazingRangeAddress('PAYB'),
    rewardToken: tokenProfile_1.mapTokenProfiles.payb,
    projectSiteUrl: 'https://paybswap.finance',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-42-welcoming-payb-to-the-herd-af250ddb9ebd',
    weeklyReward: payBSwapRewardList.map((reward, index) => {
        return {
            startTime: payBSwapStartTime.plus({ week: index }).toSeconds(),
            endTime: payBSwapStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: units_1.parseEther(reward),
        };
    }),
    type: entity_1.GrassHouseType.DefaultGrassHouse,
};
// LandShare StartTime : Thu Jan 06 2022 00:00:00 GMT+0000
const landShareStartTime = luxon_1.DateTime.fromSeconds(1641427200);
const landShareRewardList = ['2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25', '2631.25'];
const landShareGrassHouse = {
    name: 'LandShare',
    address: xAlpacaContract_1.DefaultGrazingRangeAddress('LAND'),
    rewardToken: tokenProfile_1.mapTokenProfiles.land,
    projectSiteUrl: 'https://landshare.io',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-43-welcoming-land-to-the-herd-d7a149a82a43',
    weeklyReward: landShareRewardList.map((reward, index) => {
        return {
            startTime: landShareStartTime.plus({ week: index }).toSeconds(),
            endTime: landShareStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: units_1.parseEther(reward),
        };
    }),
    type: entity_1.GrassHouseType.DefaultGrassHouse,
};
// 175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000	175,150.000
// 2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688	2,929.688
// HighStreet StartTime : Thu Jan 13 2022 00:00:00 GMT+0000
const highStreetStartTime = luxon_1.DateTime.fromSeconds(1642032000);
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
    address: xAlpacaContract_1.DefaultGrazingRangeAddress('HIGH'),
    rewardToken: tokenProfile_1.mapTokenProfiles.high,
    projectSiteUrl: 'https://www.highstreet.market/',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-44-welcoming-high-to-the-herd-94cd82e79503',
    weeklyReward: highStreetRewardList.map((reward, index) => {
        return {
            startTime: highStreetStartTime.plus({ week: index }).toSeconds(),
            endTime: highStreetStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: units_1.parseEther(reward),
        };
    }),
    type: entity_1.GrassHouseType.DefaultGrassHouse,
};
// Delta Thetha StartTime : Thu Jan 13 2022 00:00:00 GMT+0000
const deltaThethaStartTime = luxon_1.DateTime.fromSeconds(1642032000);
const deltaThethaRewardList = ['175150', '175150', '175150', '175150', '175150', '175150', '175150', '175150'];
const deltaThethaGrassHouse = {
    name: 'Delta Thetha',
    address: xAlpacaContract_1.DefaultGrazingRangeAddress('DLTA'),
    rewardToken: tokenProfile_1.mapTokenProfiles.dlta,
    projectSiteUrl: 'https://deltatheta.tech/',
    mediumUrl: 'https://medium.com/alpaca-finance/grazing-range-pool-45-welcoming-dlta-to-the-herd-4bdaf0e64345',
    weeklyReward: deltaThethaRewardList.map((reward, index) => {
        return {
            startTime: deltaThethaStartTime.plus({ week: index }).toSeconds(),
            endTime: deltaThethaStartTime.plus({ week: index + 1 }).toSeconds(),
            rewardAmount: units_1.parseEther(reward),
        };
    }),
    type: entity_1.GrassHouseType.DefaultGrassHouse,
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
exports.grassHousePools = view_1.isMainnet() ? grassHousePoolsMainnet : grassHousePoolsTestnet;
