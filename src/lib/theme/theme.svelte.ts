import { type GlobalOptions } from './types.js';
import cn from 'classnames';

// type Argument = string | number | boolean | undefined | null | Record<string, unknown>;


export type Theme = typeof _theme;

const globals: GlobalOptions = {
  focusOffset: 'none',
  rounded: 'unstyled',
  transition: 'transition motion-reduce:transition-none',
};

const _theme = $state(globals);

export function updateTheme<T extends Theme>(theme = {} as Partial<T>) {
  for (const k in theme) {
    if (typeof theme[k] === 'undefined') continue;
    (_theme as T)[k] = { ...(_theme as T)[k], ...theme[k] };
  }
  return _theme;
}

export function classNames(args: cn.ArgumentArray, removes = [] as string[]) {
  const classes = cn(...args);
  if (!removes.length) return classes;
  return classes.split(' ').filter(c => !removes.find(r => c.startsWith(r))).join(' ');
}


export default _theme;