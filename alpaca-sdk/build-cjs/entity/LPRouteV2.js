"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPRouteV2 = void 0;
const domain_1 = require("../shared/domain");
const address_1 = require("../utils/address");
class LPRouteV2 extends domain_1.ValueObject {
    constructor(props, mapTokenProfiles) {
        super(props);
        this.mapTokenProfiles = mapTokenProfiles;
    }
    getLPPaths() {
        const returner = [];
        for (let i = 1; i < this.props.path.length; i++) {
            let token0, token1;
            if (typeof this.props.path[i] === 'string') {
                token0 = this.mapTokenProfiles[this.props.path[i - 1]].address;
                token1 = this.mapTokenProfiles[this.props.path[i]].address;
            }
            else {
                token1 = this.props.path[i].address;
                token0 = this.props.path[i - 1].address;
            }
            returner.push(address_1.getCreate2Address(this.props.factoryAddress, [token1, token0], this.props.initCodePairHash));
        }
        return returner;
    }
}
exports.LPRouteV2 = LPRouteV2;
