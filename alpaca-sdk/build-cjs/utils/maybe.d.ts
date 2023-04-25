import { ValueObject } from '../shared/domain';
export declare enum MaybeType {
    Just = "maybe-type__just",
    Nothing = "maybe-type__nothing"
}
export interface Just<T> {
    type: typeof MaybeType.Just;
    value: T;
}
export interface Nothing {
    type: typeof MaybeType.Nothing;
}
/**
 *
 *
 * @export
 * @class Maybe
 * @extends {(ValueObject<Just<T> | Nothing>)}
 * @template T
 * @description a Maybe monad for lifing a valut to be a type Maybe<T> with function to flatmap( flatmap and get value)
 */
export declare class Maybe<T> extends ValueObject<Just<T> | Nothing> {
    static of<V>(value: V | undefined | null): Maybe<V>;
    flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R>;
    get type(): MaybeType;
    get value(): T;
    get unsafeValue(): T | undefined;
    get isJust(): boolean;
}
export declare const Nothing: () => Nothing;
export declare const Just: <T>(value: T) => Just<T>;
export declare function maybeWithDefault<T>(m: Maybe<T>, defaultVal: T): T;
export declare function maybeWithDefaultUndefined<T>(m: Maybe<T>): T | undefined;
