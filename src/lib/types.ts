import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLTag = keyof SvelteHTMLElements
export type ElementProps<K extends HTMLTag> = SvelteHTMLElements[K];
export type ElementPropsWithType<K extends HTMLTag, T = unknown> = ElementProps<K> & T;
export type PropsWithoutChildren<P extends Record<string, unknown>> = Omit<P, 'children'>;

export type ThemeColor = 'frame' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'info' | 'white' | 'dark' | 'unstyled';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2';

export enum Rounded {
  unstyled = '',
  none = 'rounded-none',
  xs = 'rounded-xs',
  sm = 'rounded-sm',
  md = 'rounded-md',
  lg = 'rounded-lg',
  xl = 'rounded-xl',
  xl2 = 'rounded-xl2',
  full = 'rounded-full',
}

export enum Ring {
  unstyled = '',
  inset = 'ring-inset',
  none = 'ring-0',
  sm = 'ring-1',
  md = 'ring-2',
  lg = 'ring-3',
  xl = 'ring-4',
  xl2 = 'ring-8'
}

export enum RingOffset {
  unstyled = '',
  none = 'ring-offset-0',
  sm = 'ring-offset-1',
  md = 'ring-offset-2',
  lg = 'ring-offset-4',
  xl = 'ring-offset-8'
}

export enum GlobalOptions {
  transition = 'transition motion-reduce:transition-none',
}

export interface ThemeOptions {
  offset: keyof typeof RingOffset;
  rounded: keyof typeof Rounded;
  transitioned: boolean;
}