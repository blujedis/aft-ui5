import { browser } from '$app/environment';
import { globals } from './constants.js';
import { type Theme } from './types.js';

const currentTheme = $state({
  dark: (browser && JSON.parse(localStorage.getItem('darkmode') || 'false')) || false,
  globals
}) as Theme;


export function updateTheme<T extends Theme>(theme = {} as Partial<T>) {
  for (const k in theme) {
    if (typeof theme[k] === 'undefined') continue;
    const curVal = (currentTheme as T)[k];
    const nextVal = theme[k];
    if (typeof curVal === 'object' && typeof nextVal !== 'object')
      throw new Error(`Type mismatch for prop ${k}`);
    if (typeof curVal === 'object' && typeof nextVal === 'object' && !Array.isArray(curVal) && !Array.isArray(nextVal)) {
      (currentTheme as T)[k] = { ...(currentTheme as T)[k], ...theme[k] };
    }
    else {
      (currentTheme as T)[k] = theme[k];
    }
  }
  return currentTheme;
}

export default currentTheme;