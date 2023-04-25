"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEntity = void 0;
const isEntity = (v) => {
    return v instanceof AbstractEntity;
};
class AbstractEntity {
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
    equals(object) {
        if (object == null || object == undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id === object._id;
    }
}
exports.AbstractEntity = AbstractEntity;
