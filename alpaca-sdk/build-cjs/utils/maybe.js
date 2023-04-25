"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeWithDefaultUndefined = exports.maybeWithDefault = exports.Just = exports.Nothing = exports.Maybe = exports.MaybeType = void 0;
const domain_1 = require("../shared/domain");
var MaybeType;
(function (MaybeType) {
    MaybeType["Just"] = "maybe-type__just";
    MaybeType["Nothing"] = "maybe-type__nothing";
})(MaybeType = exports.MaybeType || (exports.MaybeType = {}));
/**
 *
 *
 * @export
 * @class Maybe
 * @extends {(ValueObject<Just<T> | Nothing>)}
 * @template T
 * @description a Maybe monad for lifing a valut to be a type Maybe<T> with function to flatmap( flatmap and get value)
 */
class Maybe extends domain_1.ValueObject {
    static of(value) {
        return value === undefined || value === null ? new Maybe(exports.Nothing()) : new Maybe(exports.Just(value));
    }
    flatMap(f) {
        if (this.props.type === MaybeType.Nothing) {
            return new Maybe(exports.Nothing());
        }
        else {
            return f(this.props.value);
        }
    }
    get type() {
        return this.props.type;
    }
    get value() {
        if (this.isJust)
            return this.props.value;
        throw new Error('Maybe: invalid value call');
    }
    get unsafeValue() {
        if (this.isJust)
            return this.props.value;
        return undefined;
    }
    get isJust() {
        return this.props.type === MaybeType.Just;
    }
}
exports.Maybe = Maybe;
const Nothing = () => ({
    type: MaybeType.Nothing,
});
exports.Nothing = Nothing;
const Just = (value) => ({
    type: MaybeType.Just,
    value,
});
exports.Just = Just;
function maybeWithDefault(m, defaultVal) {
    switch (m.type) {
        case MaybeType.Nothing:
            return defaultVal;
        case MaybeType.Just:
            return m.value;
    }
}
exports.maybeWithDefault = maybeWithDefault;
function maybeWithDefaultUndefined(m) {
    return maybeWithDefault(m, undefined);
}
exports.maybeWithDefaultUndefined = maybeWithDefaultUndefined;
