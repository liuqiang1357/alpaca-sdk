"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collateralPools = void 0;
const ethers_1 = require("ethers");
const view_1 = require("../utils/view");
const ausdContracts_1 = require("./ausdContracts");
const tokenProfile_1 = require("./tokenProfile");
const vault_1 = require("./vault");
exports.collateralPools = view_1.isMainnet()
    ? [
        {
            key: 'ib-busd',
            name: 'BUSD',
            poolId: 'ibBUSD',
            vault: vault_1.mapVault['busd'],
            adpaterAddress: ausdContracts_1.IbBUSDCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['busd'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
        {
            key: 'ib-usdt',
            name: 'USDT',
            poolId: 'ibUSDT',
            vault: vault_1.mapVault['usdt'],
            adpaterAddress: ausdContracts_1.IbUSDTCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['usdt'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
        {
            key: 'ib-bnb',
            name: 'BNB',
            poolId: 'ibWBNB',
            vault: vault_1.mapVault['bnb'],
            adpaterAddress: ausdContracts_1.IbWBNBCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['bnb'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
    ]
    : [
        {
            key: 'ib-busd',
            name: 'BUSD',
            poolId: 'ibBUSD',
            vault: vault_1.mapVault['busd'],
            adpaterAddress: ausdContracts_1.IbBUSDCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['busd'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
        {
            key: 'ib-usdt',
            name: 'USDT',
            poolId: 'ibUSDT',
            vault: vault_1.mapVault['usdt'],
            adpaterAddress: ausdContracts_1.IbUSDTCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['usdt'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
        {
            key: 'ib-bnb',
            name: 'BNB',
            poolId: 'ibWBNB',
            vault: vault_1.mapVault['bnb'],
            adpaterAddress: ausdContracts_1.IbWBNBCollateralPoolAdapterAddress,
            collateralToken: vault_1.mapVault['bnb'].vaultToken,
            stablecoinToken: tokenProfile_1.mapTokenProfiles['ausd'],
            rewardToken: tokenProfile_1.mapTokenProfiles['alpaca'],
            safeMaxBufferBps: ethers_1.BigNumber.from(250),
        },
    ];
