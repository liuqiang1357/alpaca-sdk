"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = void 0;
const domain_1 = require("../shared/domain");
class Vault extends domain_1.AbstractEntity {
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
exports.Vault = Vault;
