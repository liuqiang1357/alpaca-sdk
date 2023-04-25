import { parseEther } from 'ethers/lib/utils';
import { ValueObject } from '../shared/domain';
export const tradingFeeDataNotAvailable = null;
export class TradingFee extends ValueObject {
    constructor(props) {
        super(props);
    }
    get lpAddress() {
        return this.props.lpAddress.toLowerCase();
    }
    get dailyTradingFeesAPR() {
        return parseEther(this.props.dailyTradingFeesApr);
    }
}
