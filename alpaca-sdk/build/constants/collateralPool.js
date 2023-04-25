import { BigNumber } from 'ethers';
import { isMainnet } from '../utils/view';
import { IbBUSDCollateralPoolAdapterAddress, IbUSDTCollateralPoolAdapterAddress, IbWBNBCollateralPoolAdapterAddress, } from './ausdContracts';
import { mapTokenProfiles } from './tokenProfile';
import { mapVault } from './vault';
export const collateralPools = isMainnet()
    ? [
        {
            key: 'ib-busd',
            name: 'BUSD',
            poolId: 'ibBUSD',
            vault: mapVault['busd'],
            adpaterAddress: IbBUSDCollateralPoolAdapterAddress,
            collateralToken: mapVault['busd'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
        {
            key: 'ib-usdt',
            name: 'USDT',
            poolId: 'ibUSDT',
            vault: mapVault['usdt'],
            adpaterAddress: IbUSDTCollateralPoolAdapterAddress,
            collateralToken: mapVault['usdt'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
        {
            key: 'ib-bnb',
            name: 'BNB',
            poolId: 'ibWBNB',
            vault: mapVault['bnb'],
            adpaterAddress: IbWBNBCollateralPoolAdapterAddress,
            collateralToken: mapVault['bnb'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
    ]
    : [
        {
            key: 'ib-busd',
            name: 'BUSD',
            poolId: 'ibBUSD',
            vault: mapVault['busd'],
            adpaterAddress: IbBUSDCollateralPoolAdapterAddress,
            collateralToken: mapVault['busd'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
        {
            key: 'ib-usdt',
            name: 'USDT',
            poolId: 'ibUSDT',
            vault: mapVault['usdt'],
            adpaterAddress: IbUSDTCollateralPoolAdapterAddress,
            collateralToken: mapVault['usdt'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
        {
            key: 'ib-bnb',
            name: 'BNB',
            poolId: 'ibWBNB',
            vault: mapVault['bnb'],
            adpaterAddress: IbWBNBCollateralPoolAdapterAddress,
            collateralToken: mapVault['bnb'].vaultToken,
            stablecoinToken: mapTokenProfiles['ausd'],
            rewardToken: mapTokenProfiles['alpaca'],
            safeMaxBufferBps: BigNumber.from(250),
        },
    ];
