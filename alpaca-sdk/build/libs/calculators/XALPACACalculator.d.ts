import { Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
export declare class XALPACACalculator {
    private provider;
    constructor(_provider: Provider);
    getTotalAlpacaLockInUSD(): Promise<BigNumber>;
}
