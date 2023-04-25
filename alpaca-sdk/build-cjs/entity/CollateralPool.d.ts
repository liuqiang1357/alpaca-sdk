import { BigNumber } from 'ethers';
import { IVault } from '../entity';
import { ITokenProfile } from './TokenProfile';
export interface CollateralPool {
    key: string;
    name: string;
    poolId: string;
    vault: IVault;
    adpaterAddress: string;
    collateralToken: ITokenProfile;
    stablecoinToken: ITokenProfile;
    rewardToken: ITokenProfile;
    safeMaxBufferBps: BigNumber;
}
