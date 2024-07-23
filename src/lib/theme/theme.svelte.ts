import { type GlobalOptions } from './types.js';

export type Theme = typeof _theme;

const globals: GlobalOptions = {
  ringOffset: 'unstyled',
  rounded: 'unstyled',
  transitioned: 'transition motion-reduce:transition-none',
};

const _theme = $state(globals);

export function updateTheme<T extends Theme>(theme = {} as Partial<T>) {
  for (const k in theme) {
    if (typeof theme[k] === 'undefined') continue;
    (_theme as T)[k] = { ...(_theme as T)[k], ...theme[k] };
  }
  return _theme;
}

export function pickDefined(value: unknown, fallback: unknown, allowFalseyFallback = false) {
  if (typeof value !== 'undefined')
    return value;
  if (typeof fallback === 'undefined' && !allowFalseyFallback)
    throw new Error(`Cannot use fallback value: "${fallback}"`);
  return fallback;
}

export default _theme;