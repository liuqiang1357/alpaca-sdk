/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structrual property.
 */
export class ValueObject {
    constructor(props) {
        const baseProps = Object.assign({}, props);
        this.props = baseProps;
    }
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}
