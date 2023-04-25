"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPRoute = exports.createLPRoute = void 0;
const domain_1 = require("../shared/domain");
const lpPair_1 = require("../constants/lpPair");
function createLPRoute(path) {
    return {
        token0: path[0],
        token1: path[path.length - 1],
        path,
    };
}
exports.createLPRoute = createLPRoute;
class LPRoute extends domain_1.ValueObject {
    constructor(props) {
        super(props);
    }
    getLPPaths(dex) {
        const returner = [];
        for (let i = 1; i < this.props.path.length; i++) {
            returner.push(lpPair_1.safeGetLPAddressLPPair(dex, this.props.path[i].symbol, this.props.path[i - 1].symbol));
        }
        return returner;
    }
}
exports.LPRoute = LPRoute;
