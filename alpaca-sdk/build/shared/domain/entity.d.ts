export declare type UniqueEntityID = string | number;
export declare abstract class AbstractEntity<T> {
    protected readonly _id: UniqueEntityID;
    readonly props: T;
    constructor(props: T, id: UniqueEntityID);
    equals(object?: AbstractEntity<T>): boolean;
}
