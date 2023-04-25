import { ValueObject } from '../shared/domain';
import { safeGetLPAddressLPPair } from '../constants/lpPair';
export function createLPRoute(path) {
    return {
        token0: path[0],
        token1: path[path.length - 1],
        path,
    };
}
export class LPRoute extends ValueObject {
    constructor(props) {
        super(props);
    }
    getLPPaths(dex) {
        const returner = [];
        for (let i = 1; i < this.props.path.length; i++) {
            returner.push(safeGetLPAddressLPPair(dex, this.props.path[i].symbol, this.props.path[i - 1].symbol));
        }
        return returner;
    }
}
