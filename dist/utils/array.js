/**
 * If undefined empty array is returned otherwise the array or value wrapped as array is.
 *
 * @param value the value to inspect as any array.
 * @param clean when true and is array clean any undefined.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ensureArray(value, clean = true) {
    if (typeof value === 'undefined' || value === null || value === '')
        return [];
    if (Array.isArray(value))
        return (clean ? value.filter((v) => typeof v !== 'undefined') : value);
    return [value];
}
