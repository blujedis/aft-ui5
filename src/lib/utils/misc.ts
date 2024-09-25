/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Inspects a property value if null or undefined returns.
 * If true returns the default value otherwise returns the value itself. 
 * @param value the boolean, null or undefined value to be inspected.
 * @param def the default value to be returned if value is true.
 */
// export function truthyOrDefault(value: any, def?: any) {
//   if (value) return value;
//   return def;
// }

/**
 * Generates a cheap unique ID.
 *
 * @param radix the numberic value used to convert to strings.
 */
export function uniqid(radix = 16) {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(radix);
}

/**
 * Simple debounce function used when submitting requests.
 *
 * @param func the callback function to be called
 * @param delay the delay to debounce (default: 200
 * ms)
 */
export function debounce<T>(func: (...args: T[]) => unknown, delay = 200): typeof func {
  let timeout: number | NodeJS.Timeout;
  return function (...args: T[]) {
    clearTimeout(timeout as number);
    timeout = setTimeout(() => func(...args), delay);
  };
}