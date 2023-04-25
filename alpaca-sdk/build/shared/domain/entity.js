const isEntity = (v) => {
    return v instanceof AbstractEntity;
};
export class AbstractEntity {
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
