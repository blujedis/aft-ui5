/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Inspects a property value if null or undefined returns.
 * If true returns the default value otherwise returns the value itself. 
 * @param value the boolean, null or undefined value to be inspected.
 * @param def the default value to be returned if value is true.
 */
export function boolToValue(value: string | boolean | undefined | null, def: any) {
  if (value === true) return def;
  return value; // if falsey or a string.
}