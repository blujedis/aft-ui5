import { browser } from '$app/environment';
import { globals } from './constants.js';

export type Theme = typeof currentTheme;

const currentTheme = $state({
  dark: (browser && JSON.parse(localStorage.getItem('darkmode') || 'false')) || false,
  globals
});

export function updateTheme<T extends Theme>(theme = {} as Partial<T>) {
  for (const k in theme) {
    if (typeof theme[k] === 'undefined') continue;
    (currentTheme as T)[k] = { ...(currentTheme as T)[k], ...theme[k] };
  }
  return currentTheme;
}

// export function classNames(args: cn.ArgumentArray, removes = [] as string[]) {
//   const classes = cn(...args);
//   if (!removes.length) return classes;
//   return classes.split(' ').filter(c => !removes.find(r => c.startsWith(r))).join(' ');
// }

export default currentTheme;