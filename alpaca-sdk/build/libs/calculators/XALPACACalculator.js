var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { XALPACA__factory } from '@alpaca-finance/xalpaca-contract/typechain/factories/XALPACA__factory';
import { XALPACAAddress } from '../../constants/xAlpacaContract';
import { getTokenPrice } from '../getPrice';
import { mapTokenProfiles } from '../../constants/tokenProfile';
import { WeiPerWad } from '../../utils/unit';
export class XALPACACalculator {
    constructor(_provider) {
        this.provider = _provider;
    }
    getTotalAlpacaLockInUSD() {
        return __awaiter(this, void 0, void 0, function* () {
            const xALPACA = XALPACA__factory.connect(XALPACAAddress, this.provider);
            const totalAlpacaLock = yield xALPACA.supply();
            const alpacaPrice = yield getTokenPrice(mapTokenProfiles.alpaca, this.provider);
            return totalAlpacaLock.mul(alpacaPrice).div(WeiPerWad);
        });
    }
}
