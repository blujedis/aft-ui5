
export type ThemeColor = keyof typeof FontColor;

export type FocusType = keyof typeof focusTypeMap;

export type AriaSelectType = keyof typeof ariaSelectedMap;

export enum Size {
  unstyled = '',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xl2 = 'xl2',
}

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
  none = 'ring-0',
  sm = 'ring-1',
  md = 'ring-2',
  lg = 'ring',
  xl = 'ring-4',
  xl2 = 'ring-8'
}

export enum RingOffset {
  unstyled = '',
  inset = 'ring-inset',
  none = 'ring-offset-0',
  one = 'ring-offset-1',
  two = 'ring-offset-2',
  three = 'ring-offset-[3px]',
  four = 'ring-offset-4',
  eight = 'ring-offset-8'
}

export const Placeholder = {
  unstyled: '',
  primary: '',
  secondary: '',
  tertiary: '',
  danger: '',
  warning: '',
  success: '',
  info: '',
  light: '',
  dark: '',
  white: '',
  black: '',
};

export enum RingColor {
  unstyled = '',
  primary = 'ring-primary-500 dark:ring-primary-500',
  secondary = 'ring-secondary-500 dark:ring-secondary-500',
  tertiary = 'ring-tertiary-500 dark:ring-tertiary-500',
  danger = 'ring-danger-500 dark:ring-danger-500',
  warning = 'ring-warning-500 dark:ring-warning-500',
  success = 'ring-success-500 dark:ring-success-500',
  info = 'ring-info-500 dark:ring-info-500',
  light = 'ring-frame-200 dark:ring-frame-400',
  dark = 'ring-frame-500 dark:ring-frame-600',
  white = 'ring-white dark:ring-white',
  black = 'ring-gray-800 dark:ring-gray-900',
}

export enum RingColorHover {
  unstyled = '',
  primary = 'hover:ring-primary-600 dark:hover:ring-primary-600',
  secondary = 'hover:ring-secondary-600 dark:hover:ring-secondary-600',
  tertiary = 'hover:ring-tertiary-600 dark:hover:ring-tertiary-600',
  danger = 'hover:ring-danger-600 dark:hover:ring-danger-600',
  warning = 'hover:ring-warning-600 dark:hover:ring-warning-600',
  success = 'hover:ring-success-600 dark:hover:ring-success-600',
  info = 'hover:ring-info-600 dark:hover:ring-info-600',
  light = 'hover:ring-frame-300 dark:hover:ring-frame-500',
  dark = 'hover:ring-frame-600 dark:hover:ring-frame-700',
  white = 'hover:ring-gray-200 dark:hover:ring-gray-200',
  black = 'hover:ring-black dark:hover:ring-black',
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
  light = 'border-frame-200 dark:border-frame-400',
  dark = 'border-frame-500 dark:border-frame-600',
  white = 'border-white dark:border-white',
  black = 'border-gray-800 dark:border-gray-900',
}

export enum BorderColorHover {
  unstyled = '',
  primary = 'hover:border-primary-600 dark:hover:border-primary-600',
  secondary = 'hover:border-secondary-600 dark:hover:border-secondary-600',
  tertiary = 'hover:border-tertiary-600 dark:hover:border-tertiary-600',
  danger = 'hover:border-danger-600 dark:hover:border-danger-600',
  warning = 'hover:border-warning-600 dark:hover:border-warning-600',
  success = 'hover:border-success-600 dark:hover:border-success-600',
  info = 'hover:border-info-600 dark:hover:border-info-600',
  light = 'hover:border-frame-300 dark:hover:border-frame-500',
  dark = 'hover:border-frame-600 dark:hover:border-frame-700',
  white = 'hover:border-gray-200 dark:hover:border-gray-200',
  black = 'hover:border-black dark:hover:border-black',
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
  light = 'divide-frame-200 dark:divide-frame-400',
  dark = 'divide-frame-500 dark:divide-frame-600',
  white = 'divide-white dark:divide-white',
  black = 'divide-gray-800 dark:divide-gray-900',
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
  eight = 'outline-offset-8'
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
  xss = 'text-[10px]',
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
  primary = 'text-primary-500 dark:text-primary-200',
  secondary = 'text-secondary-500 dark:text-secondary-200',
  tertiary = 'text-tertiary-500 dark:text-tertiary-200',
  danger = 'text-danger-500 dark:text-danger-200',
  warning = 'text-warning-500 dark:text-warning-200',
  success = 'text-success-500 dark:text-success-200',
  info = 'text-info-500 dark:text-info-200',
  light = 'text-frame-500 dark:text-frame-200',
  dark = 'text-frame-600 dark:text-frame-200 ',
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
  light = 'hover:text-frame-600 dark:hover:text-frame-300',
  dark = 'hover:text-frame-700 dark:hover:text-frame-300 ',
  white = 'hover:text-gray-100 dark:hover:text-gray-100',
  black = 'hover:text-gray-900 dark:hover:text-gray-900'
}

export enum ForeColorText {
  unstyled = '',
  primary = 'text-primary-500 dark:text-primary-200',
  secondary = 'text-secondary-500 dark:text-secondary-200',
  tertiary = 'text-tertiary-500 dark:text-tertiary-200',
  danger = 'text-danger-500 dark:text-danger-200',
  warning = 'text-warning-500 dark:text-warning-200',
  success = 'text-success-500 dark:text-success-200',
  info = 'text-info-500 dark:text-info-200',
  light = 'text-frame-500 dark:text-frame-200',
  dark = 'text-frame-600 dark:text-frame-200 ',
  white = 'text-gray-600 dark:text-white',
  black = 'text-gray-800 dark:text-gray-50'
}

export enum ForeColorTextHover {
  unstyled = '',
  primary = 'hover:text-primary-600 dark:hover:text-primary-300',
  secondary = 'hover:text-secondary-600 dark:hover:text-secondary-300',
  tertiary = 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
  danger = 'hover:text-danger-600 dark:hover:text-danger-300',
  warning = 'hover:text-warning-600 dark:hover:text-warning-300',
  success = 'hover:text-success-600 dark:hover:text-success-300',
  info = 'hover:text-info-600 dark:hover:text-info-300',
  light = 'hover:text-frame-600 dark:hover:text-frame-300',
  dark = 'hover:text-frame-700 dark:hover:text-frame-300 ',
  white = 'hover:text-gray-700 dark:hover:text-gray-100',
  black = 'hover:text-black dark:hover:text-gray-100'
}

export enum ForeColorFilled {
  unstyled = '',
  primary = 'text-primary-50 dark:text-primary-50',
  secondary = 'text-secondary-50 dark:text-secondary-50',
  tertiary = 'text-tertiary-50 dark:text-tertiary-50',
  danger = 'text-danger-50 dark:text-danger-50',
  warning = 'text-warning-50 dark:text-warning-50',
  success = 'text-success-50 dark:text-success-50',
  info = 'text-info-50 dark:text-info-50',
  light = 'text-frame-500 dark:text-frame-800',
  dark = 'text-frame-50 dark:text-frame-50 ',
  white = 'text-gray-600 dark:text-gray-600',
  black = 'text-gray-50 dark:text-gray-50'
}

export enum ForeColorFilledHover {
  unstyled = '',
  primary = 'hover:text-primary-100 dark:hover:text-primary-100',
  secondary = 'hover:text-secondary-100 dark:hover:text-secondary-100',
  tertiary = 'hover:text-tertiary-100 dark:hover:text-tertiary-100',
  danger = 'hover:text-danger-100 dark:hover:text-danger-100',
  warning = 'hover:text-warning-100 dark:hover:text-warning-100',
  success = 'hover:text-success-100 dark:hover:text-success-100',
  info = 'hover:text-info-100 dark:hover:text-info-100',
  light = 'hover:text-frame-600 dark:hover:text-frame-900',
  dark = 'hover:text-frame-100 dark:hover:text-frame-100 ',
  white = 'hover:text-gray-700 dark:hover:text-gray-700',
  black = 'hover:text-gray-100 dark:hover:text-gray-100'
}

export enum ForeColorSoft {
  unstyled = '',
  primary = 'text-primary-500 dark:text-primary-200',
  secondary = 'text-secondary-500 dark:text-secondary-200',
  tertiary = 'text-tertiary-500 dark:text-tertiary-200',
  danger = 'text-danger-500 dark:text-danger-200',
  warning = 'text-warning-500 dark:text-warning-200',
  success = 'text-success-500 dark:text-success-200',
  info = 'text-info-500 dark:text-info-200',
  light = 'text-frame-500 dark:text-frame-200',
  dark = 'text-frame-600 dark:text-frame-200 ',
  white = 'text-gray-600 dark:text-gray-600',
  black = 'text-gray-50 dark:text-gray-50'
}

export enum ForeColorSoftHover {
  unstyled = '',
  primary = 'hover:text-primary-600 dark:hover:text-primary-300',
  secondary = 'hover:text-secondary-600 dark:hover:text-secondary-300',
  tertiary = 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
  danger = 'hover:text-danger-600 dark:hover:text-danger-300',
  warning = 'hover:text-warning-600 dark:hover:text-warning-300',
  success = 'hover:text-success-600 dark:hover:text-success-300',
  info = 'hover:text-info-600 dark:hover:text-info-300',
  light = 'hover:text-frame-600 dark:hover:text-frame-300',
  dark = 'hover:text-frame-700 dark:hover:text-frame-300 ',
  white = 'hover:text-gray-700 dark:hover:text-gray-700',
  black = 'hover:text-gray-100 dark:hover:text-gray-100'
}

export enum ForeColorGhost {
  unstyled = '',
  primary = 'text-primary-500 dark:text-primary-200',
  secondary = 'text-secondary-500 dark:text-secondary-200',
  tertiary = 'text-tertiary-500 dark:text-tertiary-200',
  danger = 'text-danger-500 dark:text-danger-200',
  warning = 'text-warning-500 dark:text-warning-200',
  success = 'text-success-500 dark:text-success-200',
  info = 'text-info-500 dark:text-info-200',
  light = 'text-frame-500 dark:text-frame-200',
  dark = 'text-frame-600 dark:text-frame-200 ',
  white = 'text-gray-600 dark:text-white',
  black = 'text-white dark:text-gray-300'
}

export enum ForeColorGhostHover {
  unstyled = '',
  primary = 'hover:text-primary-600 dark:hover:text-primary-300',
  secondary = 'hover:text-secondary-600 dark:hover:text-secondary-300',
  tertiary = 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
  danger = 'hover:text-danger-600 dark:hover:text-danger-300',
  warning = 'hover:text-warning-600 dark:hover:text-warning-300',
  success = 'hover:text-success-600 dark:hover:text-success-300',
  info = 'hover:text-info-600 dark:hover:text-info-300',
  light = 'hover:text-frame-600 dark:hover:text-frame-300',
  dark = 'hover:text-frame-700 dark:hover:text-frame-300 ',
  white = 'hover:text-gray-700 dark:hover:text-gray-700',
  black = 'hover:text-gray-50 dark:hover:text-gray-400'
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
  light = 'bg-frame-200 dark:bg-frame-400',
  dark = 'bg-frame-500 dark:bg-frame-600 ',
  white = 'bg-white dark:bg-white',
  black = 'bg-gray-800 dark:bg-gray-900',
}

export enum BgColorHover {
  unstyled = '',
  primary = 'hover:bg-primary-600 dark:hover:bg-primary-600',
  secondary = 'hover:bg-secondary-600 dark:hover:bg-secondary-600',
  tertiary = 'hover:bg-tertiary-600 dark:hover:bg-tertiary-600',
  danger = 'hover:bg-danger-600 dark:hover:bg-danger-600',
  warning = 'hover:bg-warning-600 dark:hover:bg-warning-600',
  success = 'hover:bg-success-600 dark:hover:bg-success-600',
  info = 'hover:bg-info-600 dark:hover:bg-info-600',
  light = 'hover:bg-frame-300 dark:hover:bg-frame-500',
  dark = 'hover:bg-frame-600 dark:hover:bg-frame-700 ',
  white = 'hover:bg-gray-200 dark:hover:bg-gray-200',
  black = 'hover:bg-black dark:hover:bg-black',
}

export enum BgColorGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-primary-600 dark:group-hover:bg-primary-600',
  secondary = 'group-hover:bg-secondary-600 dark:group-hover:bg-secondary-600',
  tertiary = 'group-hover:bg-tertiary-600 dark:group-hover:bg-tertiary-600',
  danger = 'group-hover:bg-danger-600 dark:group-hover:bg-danger-600',
  warning = 'group-hover:bg-warning-600 dark:group-hover:bg-warning-600',
  success = 'group-hover:bg-success-600 dark:group-hover:bg-success-600',
  info = 'group-hover:bg-info-600 dark:group-hover:bg-info-600',
  light = 'group-hover:bg-frame-300 dark:group-hover:bg-frame-500',
  dark = 'group-hover:bg-frame-600 dark:group-hover:bg-frame-700 ',
  white = 'group-hover:bg-gray-200 dark:group-hover:bg-gray-200',
  black = 'group-hover:bg-black dark:group-hover:bg-black',
}

export enum BgColorSoft {
  unstyled = '',
  primary = 'bg-primary-100 dark:bg-primary-800',
  secondary = 'bg-secondary-100 dark:bg-secondary-800',
  tertiary = 'bg-tertiary-100 dark:bg-tertiary-800',
  danger = 'bg-danger-100 dark:bg-danger-800',
  warning = 'bg-warning-100 dark:bg-warning-800',
  success = 'bg-success-100 dark:bg-success-800',
  info = 'bg-info-100 dark:bg-info-800',
  light = 'bg-frame-100 dark:bg-frame-700',
  dark = 'bg-frame-300 dark:bg-frame-900 ',
  white = 'bg-white dark:bg-white',
  black = 'bg-gray-800 dark:bg-gray-900',
}

export enum BgColorSoftHover {
  unstyled = '',
  primary = 'hover:bg-primary-200 dark:hover:bg-primary-900',
  secondary = 'hover:bg-secondary-200 dark:hover:bg-secondary-900',
  tertiary = 'hover:bg-tertiary-200 dark:hover:bg-tertiary-900',
  danger = 'hover:bg-danger-200 dark:hover:bg-danger-900',
  warning = 'hover:bg-warning-200 dark:hover:bg-warning-900',
  success = 'hover:bg-success-200 dark:hover:bg-success-900',
  info = 'hover:bg-info-200 dark:hover:bg-info-900',
  light = 'hover:bg-frame-200 dark:hover:bg-frame-700/80',
  dark = 'hover:bg-frame-400 dark:hover:bg-frame-900/50 ',
  white = 'hover:bg-gray-200 dark:hover:bg-gray-200',
  black = 'hover:bg-black dark:hover:bg-black',
}

export enum BgColorGhostHover {
  unstyled = '',
  primary = 'hover:bg-primary-100 dark:hover:bg-primary-800',
  secondary = 'hover:bg-secondary-100 dark:hover:bg-secondary-800',
  tertiary = 'hover:bg-tertiary-100 dark:hover:bg-tertiary-800',
  danger = 'hover:bg-danger-100 dark:hover:bg-danger-800',
  warning = 'hover:bg-warning-100 dark:hover:bg-warning-800',
  success = 'hover:bg-success-100 dark:hover:bg-success-800',
  info = 'hover:bg-info-100 dark:hover:bg-info-800',
  light = 'hover:bg-frame-100 dark:hover:bg-frame-700',
  dark = 'hover:bg-frame-300 dark:hover:bg-frame-900 ',
  white = 'hover:bg-white dark:hover:bg-white',
  black = 'hover:bg-gray-800 dark:hover:bg-gray-900',
}

export enum BgColorSoftGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-primary-200 dark:group-hover:bg-primary-900',
  secondary = 'group-hover:bg-secondary-200 dark:group-hover:bg-secondary-900',
  tertiary = 'group-hover:bg-tertiary-200 dark:group-hover:bg-tertiary-900',
  danger = 'group-hover:bg-danger-200 dark:group-hover:bg-danger-900',
  warning = 'group-hover:bg-warning-200 dark:group-hover:bg-warning-900',
  success = 'group-hover:bg-success-200 dark:group-hover:bg-success-900',
  info = 'group-hover:bg-info-200 dark:group-hover:bg-info-900',
  light = 'group-hover:bg-frame-200 dark:group-hover:bg-frame-700/80',
  dark = 'group-hover:bg-frame-400 dark:group-hover:bg-frame-900/50 ',
  white = 'group-hover:bg-gray-200 dark:group-hover:bg-gray-200',
  black = 'group-hover:bg-black dark:group-hover:bg-black',
}

export enum BgColorSelected {
  unstyled = '',
  primary = 'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-500',
  secondary = 'aria-selected:bg-secondary-500 dark:aria-selected:bg-secondary-500',
  tertiary = 'aria-selected:bg-tertiary-500 dark:aria-selected:bg-tertiary-500',
  danger = 'aria-selected:bg-danger-500 dark:aria-selected:bg-danger-500',
  warning = 'aria-selected:bg-warning-500 dark:aria-selected:bg-warning-500',
  success = 'aria-selected:bg-success-500 dark:aria-selected:bg-success-500',
  info = 'aria-selected:bg-info-500 dark:aria-selected:bg-info-500',
  light = 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-400',
  dark = 'aria-selected:bg-frame-500 dark:aria-selected:bg-frame-600 ',
  white = 'aria-selected:bg-white dark:aria-selected:bg-white',
  black = 'aria-selected:bg-gray-800 dark:aria-selected:bg-gray-900',
}

export enum BgColorExpanded {
  unstyled = '',
  primary = 'aria-expanded:bg-primary-500 dark:aria-expanded:bg-primary-500',
  secondary = 'aria-expanded:bg-secondary-500 dark:aria-expanded:bg-secondary-500',
  tertiary = 'aria-expanded:bg-tertiary-500 dark:aria-expanded:bg-tertiary-500',
  danger = 'aria-expanded:bg-danger-500 dark:aria-expanded:bg-danger-500',
  warning = 'aria-expanded:bg-warning-500 dark:aria-expanded:bg-warning-500',
  success = 'aria-expanded:bg-success-500 dark:aria-expanded:bg-success-500',
  info = 'aria-expanded:bg-info-500 dark:aria-expanded:bg-info-500',
  light = 'aria-expanded:bg-frame-200 dark:aria-expanded:bg-frame-400',
  dark = 'aria-expanded:bg-frame-500 dark:aria-expanded:bg-frame-600 ',
  white = 'aria-expanded:bg-white dark:aria-expanded:bg-white',
  black = 'aria-expanded:bg-gray-800 dark:aria-expanded:bg-gray-900',
}

export enum BgColorChecked {
  unstyled = '',
  primary = 'aria-checked:bg-primary-500 dark:aria-checked:bg-primary-500',
  secondary = 'aria-checked:bg-secondary-500 dark:aria-checked:bg-secondary-500',
  tertiary = 'aria-checked:bg-tertiary-500 dark:aria-checked:bg-tertiary-500',
  danger = 'aria-checked:bg-danger-500 dark:aria-checked:bg-danger-500',
  warning = 'aria-checked:bg-warning-500 dark:aria-checked:bg-warning-500',
  success = 'aria-checked:bg-success-500 dark:aria-checked:bg-success-500',
  info = 'aria-checked:bg-info-500 dark:aria-checked:bg-info-500',
  light = 'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-400',
  dark = 'aria-checked:bg-frame-500 dark:aria-checked:bg-frame-600 ',
  white = 'aria-checked:bg-white dark:aria-checked:bg-white',
  black = 'aria-checked:bg-gray-800 dark:aria-checked:bg-gray-900',
}

export enum BgColorCurrent {
  unstyled = '',
  primary = 'aria-[current="page"]:bg-primary-500 dark:aria-[current="page"]:bg-primary-500',
  secondary = 'aria-[current="page"]:bg-secondary-500 dark:aria-[current="page"]:bg-secondary-500',
  tertiary = 'aria-[current="page"]:bg-tertiary-500 dark:aria-[current="page"]:bg-tertiary-500',
  danger = 'aria-[current="page"]:bg-danger-500 dark:aria-[current="page"]:bg-danger-500',
  warning = 'aria-[current="page"]:bg-warning-500 dark:aria-[current="page"]:bg-warning-500',
  success = 'aria-[current="page"]:bg-success-500 dark:aria-[current="page"]:bg-success-500',
  info = 'aria-[current="page"]:bg-info-500 dark:aria-[current="page"]:bg-info-500',
  light = 'aria-[current="page"]:bg-frame-200 dark:aria-[current="page"]:bg-frame-400',
  dark = 'aria-[current="page"]:bg-frame-500 dark:aria-[current="page"]:bg-frame-600 ',
  white = 'aria-[current="page"]:bg-white dark:aria-[current="page"]:bg-white',
  black = 'aria-[current="page"]:bg-gray-800 dark:aria-[current="page"]:bg-gray-900',
}

export enum OutlineColorFocus {
  unstyled = '',
  primary = 'focus:outline-primary-500/70 dark:focus:outline-primary-500/70',
  secondary = 'focus:outline-secondary-500/70 dark:focus:outline-secondary-500/70',
  tertiary = 'focus:outline-tertiary-500/70 dark:focus:outline-tertiary-500/70',
  danger = 'focus:outline-danger-500/70 dark:focus:outline-danger-500/70',
  warning = 'focus:outline-warning-500/70 dark:focus:outline-warning-500/70',
  success = 'focus:outline-success-500/70 dark:focus:outline-success-500/70',
  info = 'focus:outline-info-500/70 dark:focus:outline-info-500/70',
  light = 'focus:outline-frame-500/70 dark:focus:outline-frame-500/70',
  dark = 'focus:outline-frame-500/70 dark:focus:outline-frame-500/70 ',
  white = 'focus:outline-white/70 dark:focus:outline-white/70',
  black = 'focus:outline-black/70 dark:focus:outline-black/70',
}

export enum OutlineColorFocusVisible {
  unstyled = '',
  primary = 'focus-visible:outline-primary-500/70 dark:focus-visible:outline-primary-500/70',
  secondary = 'focus-visible:outline-secondary-500/70 dark:focus-visible:outline-secondary-500/70',
  tertiary = 'focus-visible:outline-tertiary-500/70 dark:focus-visible:outline-tertiary-500/70',
  danger = 'focus-visible:outline-danger-500/70 dark:focus-visible:outline-danger-500/70',
  warning = 'focus-visible:outline-warning-500/70 dark:focus-visible:outline-warning-500/70',
  success = 'focus-visible:outline-success-500/70 dark:focus-visible:outline-success-500/70',
  info = 'focus-visible:outline-info-500/70 dark:focus-visible:outline-info-500/70',
  light = 'focus-visible:outline-frame-500/70 dark:focus-visible:outline-frame-500/70',
  dark = 'focus-visible:outline-frame-500/70 dark:focus-visible:outline-frame-500/70 ',
  white = 'focus-visible:outline-white/70 dark:focus-visible:outline-white/70',
  black = 'focus-visible:outline-black/70 dark:focus-visible:outline-black/70',
}

export enum OutlineColorFocusGroup {
  unstyled = '',
  primary = 'group-focus:outline-primary-500/70 dark:group-focus:outline-primary-500/70',
  secondary = 'group-focus:outline-secondary-500/70 dark:group-focus:outline-secondary-500/70',
  tertiary = 'group-focus:outline-tertiary-500/70 dark:group-focus:outline-tertiary-500/70',
  danger = 'group-focus:outline-danger-500/70 dark:group-focus:outline-danger-500/70',
  warning = 'group-focus:outline-warning-500/70 dark:group-focus:outline-warning-500/70',
  success = 'group-focus:outline-success-500/70 dark:group-focus:outline-success-500/70',
  info = 'group-focus:outline-info-500/70 dark:group-focus:outline-info-500/70',
  light = 'group-focus:outline-frame-500/70 dark:group-focus:outline-frame-500/70',
  dark = 'group-focus:outline-frame-500/70 dark:group-focus:outline-frame-500/70 ',
  white = 'group-focus:outline-white/70 dark:group-focus:outline-white/70',
  black = 'group-focus:outline-black/70 dark:group-focus:outline-black/70',
}

export enum OutlineColorFocusWithin {
  unstyled = '',
  primary = 'focus-within:outline-primary-500/70 dark:focus-within:outline-primary-500/70',
  secondary = 'focus-within:outline-secondary-500/70 dark:focus-within:outline-secondary-500/70',
  tertiary = 'focus-within:outline-tertiary-500/70 dark:focus-within:outline-tertiary-500/70',
  danger = 'focus-within:outline-danger-500/70 dark:focus-within:outline-danger-500/70',
  warning = 'focus-within:outline-warning-500/70 dark:focus-within:outline-warning-500/70',
  success = 'focus-within:outline-success-500/70 dark:focus-within:outline-success-500/70',
  info = 'focus-within:outline-info-500/70 dark:focus-within:outline-info-500/70',
  light = 'focus-within:outline-frame-500/70 dark:focus-within:outline-frame-500/70',
  dark = 'focus-within:outline-frame-500/70 dark:focus-within:outline-frame-500/70 ',
  white = 'focus-within:outline-white/70 dark:focus-within:outline-white/70',
  black = 'focus-within:outline-black/70 dark:focus-within:outline-black/70',
}

export enum OutlineColorFocusPeer {
  unstyled = '',
  primary = 'peer-focus:outline-primary-500/70 dark:peer-focus:outline-primary-500/70',
  secondary = 'peer-focus:outline-secondary-500/70 dark:peer-focus:outline-secondary-500/70',
  tertiary = 'peer-focus:outline-tertiary-500/70 dark:peer-focus:outline-tertiary-500/70',
  danger = 'peer-focus:outline-danger-500/70 dark:peer-focus:outline-danger-500/70',
  warning = 'peer-focus:outline-warning-500/70 dark:peer-focus:outline-warning-500/70',
  success = 'peer-focus:outline-success-500/70 dark:peer-focus:outline-success-500/70',
  info = 'peer-focus:outline-info-500/70 dark:peer-focus:outline-info-500/70',
  light = 'peer-focus:outline-frame-500/70 dark:peer-focus:outline-frame-500/70',
  dark = 'peer-focus:outline-frame-500/70 dark:peer-focus:outline-frame-500/70 ',
  white = 'peer-focus:outline-white/70 dark:peer-focus:outline-white/70',
  black = 'peer-focus:outline-black/70 dark:peer-focus:outline-black/70',
}






export enum FieldPaddingY {
  unstyled = '',
  xs = 'py-0.5',
  sm = 'py-1',
  md = 'py-1.5',
  lg = 'py-2',
  xl = 'py-2.5',
  xl2 = 'py-3'
}

export enum FieldPaddingX {
  unstyled = '',
  xs = 'px-2',
  sm = 'px-2.5',
  md = 'px-3',
  lg = 'px-3.5',
  xl = 'px-5',
  xl2 = 'px-6'
}

export enum ButtonPaddingX {
  unstyled = '',
  xs = 'px-3',
  sm = 'px-3.5',
  md = 'px-5',
  lg = 'px-6',
  xl = 'px-7',
  xl2 = 'px-8'
}

export enum ButtonFontSize {
  unstyled = '',
  xs = FontSize.xs,
  sm = FontSize.sm,
  md = FontSize.sm,
  lg = FontSize.md,
  xl = FontSize.lg,
  xl2 = FontSize.xl
}

export const focusTypeMap = {
  unstyled: Placeholder,
  focus: OutlineColorFocus,
  visible: OutlineColorFocusVisible,
  within: OutlineColorFocusWithin,
  group: OutlineColorFocusGroup,
  peer: OutlineColorFocusPeer
};

export const ariaSelectedMap = {
  unstyled: Placeholder,
  selected: BgColorSelected,
  expanded: BgColorExpanded,
  checked: BgColorChecked,
  current: BgColorCurrent
};

export interface GlobalOptions {
  focusOffset: keyof typeof RingOffset;
  rounded: keyof typeof Rounded;
  transition: boolean | string;
}

export const colors = Object.keys(BgColor) as ThemeColor[];