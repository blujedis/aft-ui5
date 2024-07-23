import { type ThemeOptions } from './types.js';

let _options = $state<ThemeOptions>({ offset: 'md', rounded: 'unstyled', transitioned: true });

export function setOptions(options: ThemeOptions) {
  _options = { ...options };
}

export function updateOptions(options: Partial<ThemeOptions>) {
  _options = { ..._options, ...options };
}

// export function pickOption<T, K extends keyof T>(Obj: T, compare: keyof T | null, option: keyof T) {
//   const key = typeof compare === 'undefined' || compare === null ? option : compare;
//   return Obj[key];
// }

export default {
  options: _options,
  set: setOptions,
  update: updateOptions,
 // pick: pickOption
};
