export declare type RestrictedKeyRecord<KeyT extends PropertyKey, valueT> = {
    [Key in KeyT]: valueT;
};
