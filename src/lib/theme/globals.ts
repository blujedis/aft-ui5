import { BgColor, type GlobalOptions, type GlobalSettings, type ThemeColor } from './types.js';

export const colors = Object.keys(BgColor) as ThemeColor[];

export const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

export const options: GlobalOptions = {
  border: 'border-frame-300 dark:border-frame-600',
  card: 'body-light dark:bg-frame-700',
  disabled: 'opacity-50 pointer-events-none',
  divide: 'divide-frame-200 dark:divide-frame-600',
  input: 'bg-frame-50 dark:bg-frame-400/5 hover:bg-[rgb(var(--bg-light))] dark:hover:bg-[rgb(var(--bg-dark))] focus:bg-[rgb(var(--bg-light))] dark:focus:bg-[rgb(var(--bg-dark))]',
  placeholder: 'text-frame-500 dark:text-frame-400',
  ring: 'ring-frame-200 dark:ring-frame-600',
  transition: 'transition motion-reduce:transition-none',
};
export const settings: GlobalSettings = {
  focusWidth: 'lg',
  focusOffset: 'none',
  prose: true,
  rounded: true,
  shadow: true,
};
