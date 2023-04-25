import { AbstractEntity } from '../shared/domain';
export class Vault extends AbstractEntity {
    constructor(props) {
        super(props, props.address);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this.props.name;
    }
    get address() {
        return this.props.address;
    }
}
