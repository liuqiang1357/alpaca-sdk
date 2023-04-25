export declare function setWithExpiry(key: string, value: any, ttl: number): void;
export declare function getWithExpiry<T>(key: string): T | null;
export declare function shouldComponentBeHidden(comoponentName: string): boolean;
export declare function setVisibilityPersistently(comoponentName: string, hidden: boolean): void;
