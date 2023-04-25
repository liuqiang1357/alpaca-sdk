import { Duration } from 'luxon';
export declare type SubGraphMetaWrapper = {
    _meta: SubGraphMeta;
};
export declare type SubGraphMeta = {
    block: SubGraphBlock;
};
export declare type SubGraphBlock = {
    hash: string;
    number: number;
};
export declare type SubGraphStatus = {
    subGraphOk: boolean;
    currentBlock: number;
    subgraphLastSyncBlock: number;
    blockDelay: number;
    approxDelay: Duration;
    doulblingApproxDelay: Duration;
};
