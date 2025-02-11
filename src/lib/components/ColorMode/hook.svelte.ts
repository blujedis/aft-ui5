import { browser } from '$app/environment';
import type { Snippet } from 'svelte';
import theme from '$lib/theme/theme.svelte.js';
import { type ThemeInternal } from '$lib/theme/types.js';

export type ColorModeChildProps = {
  isDark: () => boolean;
  set: (dark: boolean) => void;
  toggle: () => boolean
};

export type ColorModeProps = {
  initial?: 'light' | 'dark' | 'auto';
  children?: Snippet<[ColorModeChildProps]>;
};

const key = 'darkmode';
const hasKey = browser && localStorage.getItem(key);
const prefersDark =
  (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) || false;


function getRoot() {
  if (typeof document === 'undefined') return null;
  return document.documentElement;
}

function setStorageValue(value: boolean) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}

function applyMode(value: boolean) {
  const root = getRoot();
  if (!root) return;
  if (value) root.classList.add('dark');
  else root.classList.remove('dark');
  (theme as ThemeInternal).dark = value;
  setStorageValue(value);
}

function set(isLight = true) {
  const root = getRoot();
  if (!root) return;
  (theme as ThemeInternal).dark = !isLight;
  applyMode(theme.dark);
}

function toggle() {
  const root = getRoot();
  if (!root) return theme.dark;
  const nextValue = !theme.dark;
  applyMode(nextValue);
  return nextValue;
}

function init(mode?: 'auto' | 'light' | 'dark') {
  if (typeof mode === 'undefined')
    return theme.dark;
  if ((mode !== 'auto' && !hasKey) || !hasKey) {
    if (mode !== 'auto') set(mode === 'dark');
    else set(prefersDark);
  }
  return theme.dark;
}

function isDark() { // must be func or you get prev val.
  return theme.dark;
}


export {
  isDark,
  init,
  set,
  toggle
};