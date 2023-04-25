export interface Pagination {
    page: number;
    size: number;
}
export interface ISorting {
    key: string;
    displayName: string;
    field: string;
    direction: 'ASC' | 'DESC';
}
export interface INoSorting {
    key: string;
    displayName: string;
}
export declare function isISorting(sort: ISorting | INoSorting): sort is ISorting;
