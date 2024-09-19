/* eslint-disable @typescript-eslint/no-explicit-any */
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

/**
 * Picks properties from object returning new partial object.
 *
 * @param obj the object to pick values from.
 * @param keys the keys to be picked.
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj = {} as T,
  keys = [] as K[]
) {
  if (!keys.length) return obj;
  return keys.reduce(
    (a, c) => {
      if (typeof obj[c] !== 'undefined') a[c] = obj[c];
      return a;
    },
    {} as Record<K, T[K]>
  );
}

/**
 * Omits keys from an object.
 *
 * @param obj the object to omit properties from.
 * @param keys the keys to be omitted.
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj = {} as T,
  keys = [] as K[]
) {
  type Key = Exclude<keyof T, K>;
  if (!keys.length) return obj;
  return Object.keys(obj).reduce(
    (a, c) => {
      if (keys.includes(c as Extract<K, string>)) return a;
      a[c as Key] = obj[c] as any;
      return a;
    },
    {} as Record<Key, T[Key]>
  );
}

/**
 * Clones an object using JSON.parse/JSON.stringify.
 *
 * @param obj the object you wish to clone.
 */
export function simpleClone<T extends Record<string, unknown>>(obj: T): T {
  try {
    return JSON.parse(JSON.stringify(obj)) as T;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (ex) {
    return obj;
  }
}

/**
 * Converts FormData to simple object literal.
 *
 * @param formData the FormData instance to convert to object.
 */
export function formToObject<T extends Record<string, unknown>>(formData: FormData) {
  const obj = {} as T;
  for (const [prop, value] of Object.entries(formData)) {
    obj[prop as keyof T] = value;
  }
  return obj as T;
}


export function serializeError(err: Error & Record<string, any> | Record<string, any>, strinigfy = false as boolean | 'pretty' | 'condensed') {
  const result = {} as Record<string, any>;
  for (const key of Object.getOwnPropertyNames(err)) {
    const val = err[key as keyof typeof err];
    if (val !== null && !Array.isArray(val) && typeof val === 'object') {
      result[key] = serializeError(val);
    }
    else {
      result[key] = val;
    }
  }
  if (!strinigfy) return result;
  let args = [] as any[];
  if (strinigfy === 'pretty')
    args = [...args, null, 2]
  return JSON.stringify(result, ...args);
}
