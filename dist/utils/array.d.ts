/**
 * If undefined empty array is returned otherwise the array or value wrapped as array is.
 *
 * @param value the value to inspect as any array.
 * @param clean when true and is array clean any undefined.
 */
export declare function ensureArray<T = any>(value?: null | T | T[], clean?: boolean): T[];
