import type { ariaSelectMap, focusMap } from './constants.js';

export type ThemeColor = 'frame' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'info' | 'white' | 'black' | 'unstyled';

export type Size = 'unstyled' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2';

export type FocusType = keyof typeof focusMap;

export type AriaSelectType = keyof typeof ariaSelectMap;

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
  lg = 'ring',
  xl = 'ring-4',
  xl2 = 'ring-8'
}

export enum RingOffset {
  unstyled = '',
  none = 'ring-offset-0',
  one = 'ring-offset-1',
  two = 'ring-offset-2',
  three = 'ring-offset-[3px]',
  four = 'ring-offset-4',
  eight = 'ring-offset-8'
}

export enum RingColor {
  unstyled = '',
  primary = 'ring-primary-500 dark:ring-primary-500',
  secondary = 'ring-secondary-500 dark:ring-secondary-500',
  tertiary = 'ring-tertiary-500 dark:ring-tertiary-500',
  danger = 'ring-danger-500 dark:ring-danger-500',
  warning = 'ring-warning-500 dark:ring-warning-500',
  success = 'ring-success-500 dark:ring-success-500',
  info = 'ring-info-500 dark:ring-info-500',
  frame = 'ring-frame-100 dark:ring-frame-600',
  white = 'ring-white dark:ring-white',
  black = 'ring-black dark:ring-black',
}

export enum BorderColor {
  unstyled = '',
  primary = 'border-primary-500 dark:border-primary-500',
  secondary = 'border-secondary-500 dark:border-secondary-500',
  tertiary = 'border-tertiary-500 dark:border-tertiary-500',
  danger = 'border-danger-500 dark:border-danger-500',
  warning = 'border-warning-500 dark:border-warning-500',
  success = 'border-success-500 dark:border-success-500',
  info = 'border-info-500 dark:border-info-500',
  frame = 'border-frame-100 dark:border-frame-600',
  white = 'border-white dark:border-white',
  black = 'border-black dark:border-black',
}

export enum DivideColor {
  unstyled = '',
  primary = 'divide-primary-500 dark:divide-primary-500',
  secondary = 'divide-secondary-500 dark:divide-secondary-500',
  tertiary = 'divide-tertiary-500 dark:divide-tertiary-500',
  danger = 'divide-danger-500 dark:divide-danger-500',
  warning = 'divide-warning-500 dark:divide-warning-500',
  success = 'divide-success-500 dark:divide-success-500',
  info = 'divide-info-500 dark:divide-info-500',
  frame = 'divide-frame-100 dark:divide-frame-600',
  white = 'divide-white dark:divide-white',
  black = 'divide-black dark:divide-black',
}

export enum Outline {
  unstyled = '',
  none = 'outline-0',
  sm = 'outline-1',
  md = 'outline-2',
  lg = 'outline-[3px]',
  xl = 'outline-4',
  xl2 = 'outline-8'
}

export enum OutlineOffset {
  unstyled = '',
  none = 'outline-offset-0',
  one = 'outline-offset-1',
  two = 'outline-offset-2',
  three = 'outline-offset-[3px]',
  four = 'outline-offset-4',
  eight= 'outline-offset-8'
}

export enum Border {
  unstyled = '',
  transparent = 'border-transparent',
  hidden = 'border-hidden',
  none = 'border-0',
  xs = 'border',
  sm = 'border-2',
  md = 'border-4',
  lg = 'border-6',
  xl = 'border-8',
  xl2 = 'border-10'
}

export enum Shadow {
  unstyled = '',
  inner = 'shadow-inner',
  none = 'shadow-none',
  xs = 'shadow-xs',
  sm = 'shadow',
  md = 'shadow-md',
  lg = 'shadow-lg',
  xl = 'shadow-xl',
  xl2 = 'shadow-2xl'
}

export enum DropShadow {
  unstyled = '',
  none = 'drop-shadow-none',
  xs = 'drop-shadow-xs',
  sm = 'drop-shadow',
  md = 'drop-shadow-md',
  lg = 'drop-shadow-lg',
  xl = 'drop-shadow-xl',
  xl2 = 'drop-shadow-2xl'
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

export enum FontWeight {
  unstyled = 'unstyled',
  thin = 'font-thin',
  extralight = 'font-extralight',
  light = 'font-light',
  normal = 'font-normal',
  medium = 'font-medium',
  semibold = 'font-semibold',
  bold = 'font-bold',
  extrabold = 'font-extrabold',
  black = 'font-black'
}

export enum FontLeading {
  unstyled = '',
  none = 'leading-none',
  xs = 'leading-3',
  sm = 'leading-4',
  md = 'leading-5',
  lg = 'leading-6',
  xl = 'leading-7',
  xl2 = 'leading-8',
  xl3 = 'leading-9',
  xl4 = 'leading-10',
  tight = 'leading-tight',
  snug = 'leading-snug',
  normal = 'leading-normal',
  relaxed = 'leading-relaxed',
  loose = 'leading-loose'
}

export enum FontColor {
  unstyled = '',
  primary = 'text-primary-600 dark:text-primary-300',
  secondary = 'text-secondary-600 dark:text-secondary-300',
  tertiary = 'text-tertiary-600 dark:text-tertiary-300',
  danger = 'text-danger-600 dark:text-danger-300',
  warning = 'text-warning-600 dark:text-warning-300',
  success = 'text-success-600 dark:text-success-300',
  info = 'text-info-600 dark:text-info-300',
  white = 'text-white dark:text-white',
  black = 'text-black dark:text-black'
}

export enum FontColorHover {
  unstyled = '',
  primary = 'hover:text-primary-600 dark:hover:text-primary-300',
  secondary = 'hover:text-secondary-600 dark:hover:text-secondary-300',
  tertiary = 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
  danger = 'hover:text-danger-600 dark:hover:text-danger-300',
  warning = 'hover:text-warning-600 dark:hover:text-warning-300',
  success = 'hover:text-success-600 dark:hover:text-success-300',
  info = 'hover:text-info-600 dark:hover:text-info-300',
  white = 'hover:text-gray-50 dark:hover:text-gray-50',
  black = 'hover:text-gray-900 dark:hover-text-gray-950'
}

export enum BgColor {
  unstyled = '',
  primary = 'bg-primary-500 dark:bg-primary-500',
  secondary = 'bg-secondary-500 dark:bg-secondary-500',
  tertiary = 'bg-tertiary-500 dark:bg-tertiary-500',
  danger = 'bg-danger-500 dark:bg-danger-500',
  warning = 'bg-warning-500 dark:bg-warning-500',
  success = 'bg-success-500 dark:bg-success-500',
  info = 'bg-info-500 dark:bg-info-500',
  white = 'bg-white dark:bg-white',
  black = 'bg-black dark:bg-black'
}

export enum BgColorHover {
  unstyled = '',
  primary = 'hover:bg-primary-600 dark:hover:bg-primary-600 group-hover:bg-primary-600 dark:group-hover:bg-primary-600',
  secondary = 'hover:bg-secondary-600 dark:hover:bg-secondary-600 group-hover:bg-secondary-600 dark:group-hover:bg-secondary-600',
  tertiary = 'hover:bg-tertiary-600 dark:hover:bg-tertiary-600 group-hover:bg-tertiary-600 dark:group-hover:bg-tertiary-600',
  danger = 'hover:bg-danger-600 dark:hover:bg-danger-600 group-hover:bg-danger-600 dark:group-hover:bg-danger-600',
  warning = 'hover:bg-warning-600 dark:hover:bg-warning-600 group-hover:bg-warning-600 dark:group-hover:bg-warning-600',
  success = 'hover:bg-success-600 dark:hover:bg-success-600 group-hover:bg-success-600 dark:group-hover:bg-success-600',
  info = 'hover:bg-info-600 dark:hover:bg-info-600 group-hover:bg-info-600 dark:group-hover:bg-info-600',
  white = 'hover:bg-gray-50 group-hover:bg-gray-50 dark:hover-bg-gray-50 dark:group-hover:bg-gray-50',
  black = 'hover:bg-gray-950 group-hover:bg-gray-950 dark:hover:bg-gray-950 dark:group-hover:bg-gray-950'
}

export enum BgColorSoft {
  unstyled = '',
  primary = 'bg-primary-100 dark:bg-primary-900',
  secondary = 'bg-secondary-100 dark:bg-secondary-900',
  tertiary = 'bg-tertiary-100 dark:bg-tertiary-900',
  danger = 'bg-danger-100 dark:bg-danger-900',
  warning = 'bg-warning-100 dark:bg-warning-900',
  success = 'bg-success-100 dark:bg-success-900',
  info = 'bg-info-100 dark:bg-info-900',
  white = 'bg-white dark:bg-white',
  black = 'bg-black dark:bg-black'
}

export enum BgColorSoftHover {
  unstyled = '',
  primary = 'hover:bg-primary-100 dark:hover:bg-primary-900 group-hover:bg-primary-100 dark:group-hover:bg-primary-900',
  secondary = 'hover:bg-secondary-100 dark:hover:bg-secondary-900 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-900',
  tertiary = 'hover:bg-tertiary-100 dark:hover:bg-tertiary-900 group-hover:bg-tertiary-100 dark:group-hover:bg-tertiary-900',
  danger = 'hover:bg-danger-100 dark:hover:bg-danger-900 group-hover:bg-danger-100 dark:group-hover:bg-danger-900',
  warning = 'hover:bg-warning-100 dark:hover:bg-warning-900 group-hover:bg-warning-100 dark:group-hover:bg-warning-900',
  success = 'hover:bg-success-100 dark:hover:bg-success-900 group-hover:bg-success-100 dark:group-hover:bg-success-900',
  info = 'hover:bg-info-100 dark:hover:bg-info-900 group-hover:bg-info-100 dark:group-hover:bg-info-900',
  white = 'hover:bg-gray-50 group-hover:bg-gray-50 dark:hover-bg-gray-50 dark:group-hover:bg-gray-50',
  black = 'hover:bg-gray-950 group-hover:bg-gray-950 dark:hover:bg-gray-950 dark:group-hover:bg-gray-950'
}

export enum BgColorSelected {
  unstyled = '',
  primary = 'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-500 aria-expanded:bg-primary-500 dark:aria-expanded:bg-primary-500 aria-checked:bg-primary-500 dark:aria-checked:bg-primary-500 aria-[current="page"]:bg-primary-500 dark:aria-[current="page"]:bg-primary-500',

  secondary = 'aria-selected:bg-secondary-500 dark:aria-selected:bg-secondary-500 aria-expanded:bg-secondary-500 dark:aria-expanded:bg-secondary-500 aria-checked:bg-secondary-500 dark:aria-checked:bg-secondary-500 aria-[current="page"]:bg-secondary-500 dark:aria-[current="page"]:bg-secondary-500',

  tertiary = 'aria-selected:bg-tertiary-500 dark:aria-selected:bg-tertiary-500 aria-expanded:bg-tertiary-500 dark:aria-expanded:bg-tertiary-500 aria-checked:bg-tertiary-500 dark:aria-checked:bg-tertiary-500 aria-[current="page"]:bg-tertiary-500 dark:aria-[current="page"]:bg-tertiary-500',

  danger = 'aria-selected:bg-danger-500 dark:aria-selected:bg-danger-500 aria-expanded:bg-danger-500 dark:aria-expanded:bg-danger-500 aria-checked:bg-danger-500 dark:aria-checked:bg-danger-500 aria-[current="page"]:bg-danger-500 dark:aria-[current="page"]:bg-danger-500',

  warning = 'aria-selected:bg-warning-500 dark:aria-selected:bg-warning-500 aria-expanded:bg-warning-500 dark:aria-expanded:bg-warning-500 aria-checked:bg-warning-500 dark:aria-checked:bg-warning-500 aria-[current="page"]:bg-warning-500 dark:aria-[current="page"]:bg-warning-500',

  success = 'aria-selected:bg-success-500 dark:aria-selected:bg-success-500 aria-expanded:bg-success-500 dark:aria-expanded:bg-success-500 aria-checked:bg-success-500 dark:aria-checked:bg-success-500 aria-[current="page"]:bg-success-500 dark:aria-[current="page"]:bg-success-500',

  info = 'aria-selected:bg-info-500 dark:aria-selected:bg-info-500 aria-expanded:bg-info-500 dark:aria-expanded:bg-info-500 aria-checked:bg-info-500 dark:aria-checked:bg-info-500 aria-[current="page"]:bg-info-500 dark:aria-[current="page"]:bg-info-500',

  white = 'aria-selected:bg-gray-50 dark:aria-selected:bg-gray-50 aria-expanded:bg-gray-50 dark:aria-expanded:bg-gray-50 aria-checked:bg-gray-50 dark:aria-checked:bg-gray-50 aria-[current="page"]:bg-gray-50 dark:aria-[current="page"]:bg-gray-50',

  black = 'aria-selected:bg-gray-950 dark:aria-selected:bg-gray-950 aria-expanded:bg-gray-950 dark:aria-expanded:bg-gray-950 aria-checked:bg-gray-950 dark:aria-checked:bg-gray-950 aria-[current="page"]:bg-gray-950 dark:aria-[current="page"]:bg-gray-950'
}

export enum OutlineColorFocus {
  unstyled = '',
  

  primary = 'focus:outline-primary-500/70 dark:focus:outline-primary-500/70 focus-visible:outline-primary-500/70 dark:focus-visible:outline-primary-500/70 focus-within:outline-primary-500/70 dark:focus-within:outline-primary-500/70 peer-focus:outline-primary-500/70 dark:peer-focus:outline-primary-500/70',

  secondary = 'focus:outline-secondary-500/70 dark:focus:outline-secondary-500/70 focus-visible:outline-secondary-500/70 dark:focus-visible:outline-secondary-500/70 focus-within:outline-secondary-500/70 dark:focus-within:outline-secondary-500/70 peer-focus:outline-secondary-500/70 dark:peer-focus:outline-secondary-500/70',

  tertiary = 'focus:outline-tertiary-500/70 dark:focus:outline-tertiary-500/70 focus-visible:outline-tertiary-500/70 dark:focus-visible:outline-tertiary-500/70 focus-within:outline-tertiary-500/70 dark:focus-within:outline-tertiary-500/70 peer-focus:outline-tertiary-500/70 dark:peer-focus:outline-tertiary-500/70 ',

  danger = 'focus:outline-danger-500/70 dark:focus:outline-danger-500/70 focus-visible:outline-danger-500/70 dark:focus-visible:outline-danger-500/70 focus-within:outline-danger-500/70 dark:focus-within:outline-danger-500/70 peer-focus:outline-danger-500/70 dark:peer-focus:outline-danger-500/70 ',

  warning = 'focus:outline-warning-500/70 dark:focus:outline-warning-500/70 focus-visible:outline-warning-500/70 dark:focus-visible:outline-warning-500/70 focus-within:outline-warning-500/70 dark:focus-within:outline-warning-500/70 peer-focus:outline-warning-500/70 dark:peer-focus:outline-warning-500/70',

  success = 'focus:outline-success-500/70 dark:focus:outline-success-500/70 focus-visible:outline-success-500/70 dark:focus-visible:outline-success-500/70 focus-within:outline-success-500/70 dark:focus-within:outline-success-500/70 peer-focus:outline-success-500/70 dark:peer-focus:outline-success-500/70',

  info = 'focus:outline-info-500/70 dark:focus:outline-info-500/70 focus-visible:outline-info-500/70 dark:focus-visible:outline-info-500/70 focus-within:outline-info-500/70 dark:focus-within:outline-info-500/70 peer-focus:outline-info-500/70 dark:peer-focus:outline-info-500/70',

  white = 'focus:outline-white dark:focus:outline-white focus-visible:outline-white dark:focus-visible:outline-white focus-within:outline-white dark:focus-within:outline-white peer-focus:outline-white dark:peer-focus:outline-white',

  black = 'focus:outline-black dark:focus:outline-black focus-visible:outline-black dark:focus-visible:outline-black focus-within:outline-black dark:focus-within:outline-black peer-focus:outline-black dark:peer-focus:outline-black',
}

export interface GlobalOptions {
  focusOffset: keyof typeof RingOffset;
  rounded: keyof typeof Rounded;
  transition: boolean | string;
}