export interface PaginatorOptions {
    rows?: number;
    current?: number;
    displayed?: number;
    buttons?: number;
    ellipsis?: boolean;
}
export interface Paginator extends PaginatorOptions {
    rows: number;
    totalPages: number;
    firstPage: number;
    lastPage: number;
    firstIndex: number;
    lastIndex: number;
    firstRecord: number;
    lastRecord: number;
    pages: (string | number)[];
    pagesRaw: number[];
    nextPage: number;
    prevPage: number;
    range: string;
}
export declare function getParam(params: URLSearchParams, param?: string, def?: number): number;
export declare function getUrl(url?: string, page?: string | number, param?: string): string;
export declare function paginator(options?: PaginatorOptions): Paginator;
