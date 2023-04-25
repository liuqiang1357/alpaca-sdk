import { DateTime } from 'luxon';
import { BigNumber } from '@ethersproject/bignumber';
export declare type HodlProcessStep = 0 | 1 | 2 | 3 | 4;
export declare type StronkVaultPageData = {
    userAlpacaBalance: BigNumber;
    userLockedAlpacaBalance: BigNumber;
    userStronkAlpacaBalance: BigNumber;
    relayerLockedBalance: BigNumber;
    convertingBalance: BigNumber;
    lockEndDate: DateTime;
    currentStage: HodlProcessStep;
    relayerAddress: string;
    hodlPeriodExpired: boolean;
};
export declare type StronkAlpacaData = {
    lockEndDate: DateTime;
};
