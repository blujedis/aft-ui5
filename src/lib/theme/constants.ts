import { type GlobalOptions, type GlobalSettings } from './types.js';

export const Animate = {
  unstyled: '',
  none: 'animate-none',
  bounce: 'motion-safe:animate-bounce',
  ping: 'motion-safe:animate-ping',
  pulse: 'motion-safe:animate-pulse',
  spin: 'motion-safe:animate-spin'
};

export const Rounded = {
  unstyled: '',
  none: 'rounded-none',
  xs: 'rounded-xs',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  xl2: 'rounded-2xl',
  full: 'rounded-full',
}

export const Shadow = {
  unstyled: '',
  inner: 'shadow-inner',
  none: 'shadow-none',
  xs: 'shadow-xs',
  sm: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  xl2: 'shadow-2xl'
};

export const DropShadow = {
  unstyled: '',
  none: 'drop-shadow-none',
  xs: 'drop-shadow-xs',
  sm: 'drop-shadow',
  md: 'drop-shadow-md',
  lg: 'drop-shadow-lg',
  xl: 'drop-shadow-xl',
  xl2: 'drop-shadow-2xl'
};

export const JustifyContent = {
  unstyled: '',
  normal: 'justify-normal',
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch'
};

export const FontSize = {
  unstyled: '',
  xss: 'text-[10px]',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  xl2: 'text-2xl',
  xl3: 'text-3xl',
  xl4: 'text-4xl',
  xl5: 'text-5xl',
  xl6: 'text-6xl',
  xl7: 'text-7xl',
  xl8: 'text-8xl',
  xl9: 'text-9xl'
};

export const FontLeading = {
  unstyled: '',
  none: 'leading-none',
  xs: 'leading-3',
  sm: 'leading-4',
  md: 'leading-5',
  lg: 'leading-6',
  xl: 'leading-7',
  xl2: 'leading-8',
  xl3: 'leading-9',
  xl4: 'leading-10',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose'
};

export const FieldFontSize = {
  unstyled: '',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-md',
  xl: 'text-lg',
  xl2: 'text-xl',
};

export const FieldPaddingY = {
  unstyled: '',
  xs: 'py-0.5',
  sm: 'py-1',
  md: 'py-1.5',
  lg: 'py-2',
  xl: 'py-2.5',
  xl2: 'py-3'
};

export const FieldPaddingX = {
  unstyled: '',
  xs: 'px-2',
  sm: 'px-2.5',
  md: 'px-3',
  lg: 'px-3.5',
  xl: 'px-5',
  xl2: 'px-6'
};

export const OutlineWidth = {
  unstyled: '',
  none: 'focus:outline-0',
  xs: 'focus:outline-1',
  sm: 'focus:outline-1',
  md: 'focus:outline-2',
  lg: 'focus:outline-[3px]',
  xl: 'focus:outline-4',
  xl2: 'focus:outline-8'
};

export const OutlineOffset = {
  unstyled: '',
  none: 'focus:outline-offset-0',
  xs: 'focus:outline-offset-1',
  sm: 'focus:outline-offset-1',
  md: 'focus:outline-offset-2',
  lg: 'focus:outline-offset-[3px]',
  xl: 'focus:outline-offset-4',
  xl2: 'focus:outline-offset-8'
};

export const Border = {
  unstyled: '',
  transparent: 'border-transparent',
  hidden: 'border-hidden',
  none: 'border-0',
  xs: 'border',
  sm: 'border-2',
  md: 'border-4',
  lg: 'border-6',
  xl: 'border-8',
  xl2: 'border-10'
};


export const RingWidth = {
  unstyled: '',
  none: 'ring-0',
  sm: 'ring-1',
  md: 'ring-2',
  lg: 'ring',
  xl: 'ring-4',
  xl2: 'ring-8'
};

export const RingOffset = {
  unstyled: '',
  inset: 'ring-inset',
  none: 'ring-offset-0',
  xs: 'ring-offset-1',
  sm: 'ring-offset-1',
  md: 'ring-offset-2',
  lg: 'ring-offset-[3px]',
  xl: 'ring-offset-4',
  xl2: 'ring-offset-8'
};

export const options: GlobalOptions = {
  disabled: 'opacity-50 pointer-events-none',
  divide: 'divide-frame-200 dark:divide-frame-700',
  ring: 'ring-frame-200 dark:ring-frame-700',
  border: 'border-frame-200 dark:border-frame-700',
  card: 'body-bg-light dark:bg-frame-700',
  input: 'bg-frame-50 dark:bg-frame-400/5 hover:bg-[rgb(var(--bg-light))] dark:hover:bg-[rgb(var(--bg-dark))]  focus:bg-[rgb(var(--bg-light))] dark:focus:bg-[rgb(var(--bg-dark))]',
  transition: 'transition motion-reduce:transition-none',
};

export const settings: GlobalSettings = {
  focusWidth: 'lg',
  focusOffset: 'md',
  prose: true,
  rounded: true,
  shadow: true,
};

