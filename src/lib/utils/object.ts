export function cleanObj<T extends Record<string, unknown>, K extends keyof T>(
  obj = {} as T,
  exclude = [] as K[]
): Partial<Omit<T, K>> {
  return Object.entries(obj as object).reduce((a, [key, val]) => {
    if (exclude.includes(key as K)) return a;
    if (typeof val !== 'undefined') a[key as keyof T] = val as never;
    return a;
  }, {} as Partial<T>);
}