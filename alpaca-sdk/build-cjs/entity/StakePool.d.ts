import { BigNumber } from '@ethersproject/bignumber';
import { ITokenProfile, ILpTokenProfile } from '../entity';
export declare enum StakingPoolV2Key {
    IbALPACA = "ib-alpaca",
    IbWBNB = "ib-wbnb",
    IbBUSD = "ib-busd",
    IbUSDT = "ib-usdt",
    IbTUSD = "ib-tusd",
    IbBTCB = "ib-btcb",
    IbETH = "ib-eth",
    IbUSDC = "ib-usdc",
    DebtALPACA = "debt-alpaca",
    DebtBNB = "debt-bnb",
    DebtBUSD = "debt-busd",
    DebtUSDT = "debt-usdt",
    DebtTUSD = "debt-tusd",
    DebtBTCB = "debt-btcb",
    DebtETH = "debt-eth",
    DebtUSDC = "debt-usdc",
    SAlpaca = "s-alpaca",
    ALPACAWBNBLpV2 = "alpaca-wbnb-lp-v2",
    ALPACAWBNBLpV1 = "alpaca-wbnb-lp-v1",
    AUSDBUSDLp = "ausd-busd-lp"
}
export declare type IStakePoolV2 = {
    key: StakingPoolV2Key;
    name: string;
    poolId: number;
    stakingToken: ITokenProfile | ILpTokenProfile;
};
export declare type StakePool = {
    key: string;
    name: string;
    iconO: string;
    iconT: string;
    unit: string;
    underlyingUnit?: string;
    isNew: boolean;
    lpGuide: string;
    linkInfo: string;
    linkToAddLiquidity: string;
    isBaseTokenNative: boolean;
    isLp: boolean;
    isIb: boolean;
    isSingleTokenDeriveValueFromLP: boolean;
    isLegacyLPToken: boolean;
    derivingLpAddress: string | null;
    isDebt: boolean;
    baseTokenAddress: string | null;
    stakingTokenAddress: string;
    isStakingTokenNativeIb: boolean;
    poolId: number;
    getPriceInUSD: () => Promise<BigNumber>;
};
export interface StakePoolDataRow extends StakePool {
    approveNeeded: boolean;
    userBalance?: BigNumber;
    stakedBalance?: BigNumber;
    underlyingStakedBalance?: BigNumber;
    pendingAlpaca?: BigNumber;
    apy: BigNumber;
    yearlyApr: BigNumber;
    convertIbToAmount?: (input: BigNumber) => BigNumber;
}
export declare type UserAlpacaToken = {
    userAlpacaToken: BigNumber;
    userLockedAlpacaToken: BigNumber;
    userClaimableAlpacaToken: BigNumber;
};
