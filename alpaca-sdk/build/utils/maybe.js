import { ValueObject } from '../shared/domain';
export var MaybeType;
(function (MaybeType) {
    MaybeType["Just"] = "maybe-type__just";
    MaybeType["Nothing"] = "maybe-type__nothing";
})(MaybeType || (MaybeType = {}));
/**
 *
 *
 * @export
 * @class Maybe
 * @extends {(ValueObject<Just<T> | Nothing>)}
 * @template T
 * @description a Maybe monad for lifing a valut to be a type Maybe<T> with function to flatmap( flatmap and get value)
 */
export class Maybe extends ValueObject {
    static of(value) {
        return value === undefined || value === null ? new Maybe(Nothing()) : new Maybe(Just(value));
    }
    flatMap(f) {
        if (this.props.type === MaybeType.Nothing) {
            return new Maybe(Nothing());
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
export const Nothing = () => ({
    type: MaybeType.Nothing,
});
export const Just = (value) => ({
    type: MaybeType.Just,
    value,
});
export function maybeWithDefault(m, defaultVal) {
    switch (m.type) {
        case MaybeType.Nothing:
            return defaultVal;
        case MaybeType.Just:
            return m.value;
    }
}
export function maybeWithDefaultUndefined(m) {
    return maybeWithDefault(m, undefined);
}
