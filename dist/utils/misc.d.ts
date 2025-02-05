/**
 * Inspects a property value if null or undefined returns.
 * If true returns the default value otherwise returns the value itself.
 * @param value the boolean, null or undefined value to be inspected.
 * @param def the default value to be returned if value is true.
 */
/**
 * Generates a cheap unique ID.
 *
 * @param radix the numberic value used to convert to strings.
 */
export declare function uniqid(radix?: number): string;
/**
 * Simple debounce function used when submitting requests.
 *
 * @param func the callback function to be called
 * @param delay the delay to debounce (default: 200
 * ms)
 */
export declare function debounce<T>(func: (...args: T[]) => unknown, delay?: number): typeof func;
