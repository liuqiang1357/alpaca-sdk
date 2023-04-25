"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StablePairKillBufferThreshold = exports.DefaultKillBufferThreshold = exports.FarmingPoolConfig = exports.FarmingAssetType = void 0;
const _1 = require(".");
const domain_1 = require("../shared/domain");
const constants_1 = require("@ethersproject/constants");
const maybe_1 = require("../utils/maybe");
var FarmingAssetType;
(function (FarmingAssetType) {
    FarmingAssetType["SingleAsset"] = "SINGLE_ASSET";
    FarmingAssetType["LPAsset"] = "LP_ASSET";
})(FarmingAssetType = exports.FarmingAssetType || (exports.FarmingAssetType = {}));
class FarmingPoolConfig extends domain_1.ValueObject {
    isSingleAsset() {
        return this._isSingleAsset(this.props);
    }
    get name() {
        const { baseToken, farmingToken } = this.configs[0].worker.tokenPair;
        return this.isSingleAsset()
            ? `${this.props.dex.name} ${farmingToken.displaySymbol}Maxi`
            : `${this.props.dex.name} ${farmingToken.displaySymbol}-${baseToken.displaySymbol}`;
    }
    _isSingleAsset(props) {
        return 'singleAssetAddress' in props;
    }
    get isDataReady() {
        return false;
    }
    get assetType() {
        if (this.isSingleAsset())
            return FarmingAssetType.SingleAsset;
        return FarmingAssetType.LPAsset;
    }
    get configs() {
        return this.props.configs;
    }
    get key() {
        return this.props.key;
    }
    get dex() {
        return this.props.dex;
    }
    get dexFee() {
        // TODO : make this optional
        return this.props.dex.fee;
    }
    get lpAddress() {
        if (this.isSingleAsset())
            return constants_1.AddressZero;
        return new _1.LPRoute(this.props.lpRoute).getLPPaths(this.dex.key)[0];
    }
    get maybeLpAddress() {
        let lpAddress;
        try {
            lpAddress = this.lpAddress;
        }
        catch (err) {
            lpAddress = null;
        }
        return maybe_1.Maybe.of(lpAddress);
    }
    get maybeFeaturePool() {
        return maybe_1.Maybe.of(this.props.featurePool);
    }
    get pId() {
        return this.props.pId;
    }
    get isFeatured() {
        return this.props.isFeatured;
    }
    get isNew() {
        return this.props.isNew;
    }
    get tags() {
        return this.props.tags;
    }
    get isWarn() {
        return this.props.isWarn;
    }
    get allowOpenPosition() {
        return this.props.allowOpenPosition;
    }
    get allowClosePosition() {
        return this.props.allowClosePosition;
    }
    get allowPartialClosePosition() {
        return this.props.allowPartialClosePosition;
    }
    get allowAdjustPosition() {
        return this.props.allowAdjustPosition;
    }
    get allowBorrowMoreAdjustPosition() {
        return this.props.allowBorrowMoreAdjustPosition;
    }
    get allowForceAddCollateralPosition() {
        return this.props.allowForceAddCollateralPosition;
    }
    get singleAssetAddress() {
        if (!this.isSingleAsset())
            return constants_1.AddressZero;
        return this.props.singleAssetAddress;
    }
    get singleAssetPoolName() {
        if (!this.isSingleAsset())
            return '';
        return this.props.singleAssetPoolName;
    }
}
exports.FarmingPoolConfig = FarmingPoolConfig;
exports.DefaultKillBufferThreshold = {
    greenZone: 8.0,
    yellowZone: 5.0,
};
exports.StablePairKillBufferThreshold = {
    greenZone: 6.0,
    yellowZone: 3.0,
};
