import { LPRoute } from '.';
import { ValueObject } from '../shared/domain';
import { AddressZero } from '@ethersproject/constants';
import { Maybe } from '../utils/maybe';
export var FarmingAssetType;
(function (FarmingAssetType) {
    FarmingAssetType["SingleAsset"] = "SINGLE_ASSET";
    FarmingAssetType["LPAsset"] = "LP_ASSET";
})(FarmingAssetType || (FarmingAssetType = {}));
export class FarmingPoolConfig extends ValueObject {
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
            return AddressZero;
        return new LPRoute(this.props.lpRoute).getLPPaths(this.dex.key)[0];
    }
    get maybeLpAddress() {
        let lpAddress;
        try {
            lpAddress = this.lpAddress;
        }
        catch (err) {
            lpAddress = null;
        }
        return Maybe.of(lpAddress);
    }
    get maybeFeaturePool() {
        return Maybe.of(this.props.featurePool);
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
            return AddressZero;
        return this.props.singleAssetAddress;
    }
    get singleAssetPoolName() {
        if (!this.isSingleAsset())
            return '';
        return this.props.singleAssetPoolName;
    }
}
export const DefaultKillBufferThreshold = {
    greenZone: 8.0,
    yellowZone: 5.0,
};
export const StablePairKillBufferThreshold = {
    greenZone: 6.0,
    yellowZone: 3.0,
};
