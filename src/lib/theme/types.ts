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

export enum FontSize {
  unstyled = '',
  xss = 'text-[10px] leading-3',
  xs = 'text-xs',
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
  xl = 'text-xl',
  xl2 = 'text-2xl',
  xl3 = 'text-3xl',
  xl4 = 'text-4xl',
  xl5 = 'text-5xl',
  xl6 = 'text-6xl',
  xl7 = 'text-7xl',
  xl8 = 'text-8xl',
  xl9 = 'text-9xl'
}

export interface GlobalOptions {
  ringOffset: keyof typeof RingOffset;
  rounded: keyof typeof Rounded;
  transitioned: boolean | string;
}