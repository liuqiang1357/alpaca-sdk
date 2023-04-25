"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const domain_1 = require("../shared/domain");
const _1 = require(".");
const constants_1 = require("@ethersproject/constants");
class Worker extends domain_1.AbstractEntity {
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
            return [constants_1.AddressZero];
        return new _1.LPRoute(this.props.lpRoute).getLPPaths(this.dex.key);
    }
}
exports.Worker = Worker;
