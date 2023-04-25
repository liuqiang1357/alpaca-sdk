import { AbstractEntity } from '../shared/domain';
import { LPRoute } from '.';
import { AddressZero } from '@ethersproject/constants';
export class Worker extends AbstractEntity {
    constructor(props) {
        super(props, props.address);
    }
    get id() {
        return this._id;
    }
    get tokenPair() {
        return this.props.tokenPair;
    }
    get name() {
        return this.props.dex.name;
    }
    get address() {
        return this.props.address;
    }
    get dex() {
        return this.props.dex;
    }
    isSingleAsset() {
        return this._isSingleAsset(this.props);
    }
    _isSingleAsset(props) {
        return 'lpRoute' in props;
    }
    get singleAssetLPAddresses() {
        if (!this.isSingleAsset())
            return [AddressZero];
        return new LPRoute(this.props.lpRoute).getLPPaths(this.dex.key);
    }
}
