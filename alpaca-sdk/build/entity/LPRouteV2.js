import { ValueObject } from '../shared/domain';
import { getCreate2Address } from '../utils/address';
export class LPRouteV2 extends ValueObject {
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
            returner.push(getCreate2Address(this.props.factoryAddress, [token1, token0], this.props.initCodePairHash));
        }
        return returner;
    }
}
