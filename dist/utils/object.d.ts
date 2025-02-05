export declare function cleanObj<T extends Record<string, unknown>, K extends keyof T>(obj?: T, exclude?: K[]): Partial<Omit<T, K>>;
/**
 * Picks properties from object returning new partial object.
 *
 * @param obj the object to pick values from.
 * @param keys the keys to be picked.
 */
export declare function pick<T extends Record<string, unknown>, K extends keyof T>(obj?: T, keys?: K[]): Record<K, T[K]>;
/**
 * Omits keys from an object.
 *
 * @param obj the object to omit properties from.
 * @param keys the keys to be omitted.
 */
export declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj?: T, keys?: K[]): Record<Exclude<keyof T, K>, T[Exclude<keyof T, K>]>;
/**
 * Clones an object using JSON.parse/JSON.stringify.
 *
 * @param obj the object you wish to clone.
 */
export declare function simpleClone<T extends Record<string, unknown>>(obj: T): T;
/**
 * Converts FormData to simple object literal.
 *
 * @param formData the FormData instance to convert to object.
 */
export declare function formToObject<T extends Record<string, unknown>>(formData: FormData): T;
export declare function serializeError(err: Error & Record<string, any> | Record<string, any>, strinigfy?: boolean | "pretty" | "condensed"): string | Record<string, any>;
