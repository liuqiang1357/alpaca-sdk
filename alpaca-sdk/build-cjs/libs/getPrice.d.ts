import { Provider } from '@ethersproject/providers';
import { BigNumber } from '@ethersproject/bignumber';
import { ITokenProfile, ILpTokenProfile } from '../entity';
export declare function getTokenPrice(token: ITokenProfile | ILpTokenProfile, provider: Provider, blockNumber?: number): Promise<BigNumber>;
