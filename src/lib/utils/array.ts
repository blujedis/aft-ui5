
/**
 * If undefined empty array is returned otherwise the array or value wrapped as array is.
 *
 * @param value the value to inspect as any array.
 * @param clean when true and is array clean any undefined.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ensureArray<T = any>(value?: null | T | T[], clean = true) {
  if (typeof value === 'undefined' || value === null || value === '') return [] as T[];
  if (Array.isArray(value))
    return (clean ? value.filter((v) => typeof v !== 'undefined') : value) as T[];
  return [value] as T[];
}
