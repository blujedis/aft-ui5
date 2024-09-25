import type { Animate, DropShadow, Elevation, FontSize, JustifyContent, OutlineOffset, OutlineWidth, Rounded, Shadow } from './constants.js';

export type FocusType = keyof typeof FocusTypes;
export type FocusWidth = keyof typeof OutlineWidth;
export type FocusOffset = keyof typeof OutlineOffset;
export type SelectedType = keyof typeof SelectedTypes;
export type ThemeColor = keyof typeof FontColor;
export type ThemeShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ElevationSize = keyof typeof Elevation;
export type FontSizes = keyof typeof FontSize;
export type DropShadowSize = keyof typeof DropShadow;
export type AnimateType = keyof typeof Animate;
export type Size = 'unstyled' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2';
export type JustifyContentType = keyof typeof JustifyContent;
export type RoundedSize = keyof typeof Rounded;
export type ShadowSize = keyof typeof Shadow;

export const build = ['alert', 'avatar', 'badge', 'breadcrumb', 'button', 'card', 'checkbox', 'disclosure', 'divider', 'drawer', 'dropdown', 'flushed', 'icon', 'image', 'indicator', 'input', 'kbd', 'label', 'modal', 'notifications', 'pager', 'popover', 'progress', 'radio', 'range', 'rating', 'select', 'spinner', 'stack', 'switch', 'textarea', 'tooltip'];

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
};

export const FillColor = {
  unstyled: '',
  primary: 'text-primary-500 dark:text-primary-500',
  secondary: 'text-secondary-500 dark:text-secondary-500',
  tertiary: 'text-tertiary-500 dark:text-tertiary-500',
  danger: 'text-danger-500 dark:text-danger-500',
  warning: 'text-warning-500 dark:text-warning-500',
  success: 'text-success-500 dark:text-success-500',
  info: 'text-info-500 dark:text-info-500',
  light: 'text-frame-400 dark:text-frame-400',
  dark: 'text-frame-700 dark:text-frame-700 ',
  white: 'text-white dark:text-white',
};

export const FillColorHover = {
  unstyled: '',
  primary: 'hover:text-primary-600 dark:hover:text-primary-600',
  secondary: 'hover:text-secondary-600 dark:hover:text-secondary-600',
  tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-600',
  danger: 'hover:text-danger-600 dark:hover:text-danger-600',
  warning: 'hover:text-warning-600 dark:hover:text-warning-600',
  success: 'hover:text-success-600 dark:hover:text-success-600',
  info: 'hover:text-info-600 dark:hover:text-info-600',
  light: 'hover:text-frame-500 dark:hover:text-frame-500',
  dark: 'hover:text-frame-800 dark:hover:text-frame-800 ',
  white: 'hover:text-frame-100 dark:hover:text-frame-100',
};

export const FillColorSoft = {
  unstyled: '',
  primary: 'text-primary-300 dark:text-primary-700',
  secondary: 'text-secondary-300 dark:text-secondary-700',
  tertiary: 'text-tertiary-300 dark:text-tertiary-700',
  danger: 'text-danger-300 dark:text-danger-700',
  warning: 'text-warning-300 dark:text-warning-700',
  success: 'text-success-300 dark:text-success-700',
  info: 'text-info-300 dark:text-info-700',
  light: 'text-frame-200 dark:text-frame-600',
  dark: 'text-frame-500 dark:text-frame-700 ',
  white: 'text-white dark:text-white',
};

export const FillColorSoftHover = {
  unstyled: '',
  primary: 'hover:text-primary-400 dark:hover:text-primary-800',
  secondary: 'hover:text-secondary-400 dark:hover:text-secondary-800',
  tertiary: 'hover:text-tertiary-400 dark:hover:text-tertiary-800',
  danger: 'hover:text-danger-400 dark:hover:text-danger-800',
  warning: 'hover:text-warning-400 dark:hover:text-warning-800',
  success: 'hover:text-success-400 dark:hover:text-success-800',
  info: 'hover:text-info-400 dark:hover:text-info-800',
  light: 'hover:text-frame-300 dark:hover:text-frame-700',
  dark: 'hover:text-frame-600 dark:hover:text-frame-800 ',
  white: 'hover:text-frame-200 dark:hover:text-frame-200',
};

export const ProgressFillColor = {
  unstyled: '',
  primary: 'fill-primary-500 dark:fill-primary-500',
  secondary: 'fill-secondary-500 dark:fill-secondary-500',
  tertiary: 'fill-tertiary-500 dark:fill-tertiary-500',
  danger: 'fill-danger-500 dark:fill-danger-500',
  warning: 'fill-warning-500 dark:fill-warning-500',
  success: 'fill-success-500 dark:fill-success-500',
  info: 'fill-info-500 dark:fill-info-500',
  light: 'fill-frame-400 dark:fill-frame-400',
  dark: 'fill-frame-700 dark:fill-frame-700 ',
  white: 'fill-white dark:fill-white',
};

export const StrokeColor = {
  unstyled: '',
  primary: 'stroke-primary-500 dark:stroke-primary-500',
  secondary: 'stroke-secondary-500 dark:stroke-secondary-500',
  tertiary: 'stroke-tertiary-500 dark:stroke-tertiary-500',
  danger: 'stroke-danger-500 dark:stroke-danger-500',
  warning: 'stroke-warning-500 dark:stroke-warning-500',
  success: 'stroke-success-500 dark:stroke-success-500',
  info: 'stroke-info-500 dark:stroke-info-500',
  light: 'stroke-frame-400 dark:stroke-frame-400',
  dark: 'stroke-frame-700 dark:stroke-frame-700 ',
  white: 'stroke-white dark:stroke-white',
};

export const StrokeColorHover = {
  unstyled: '',
  primary: 'hover:stroke-primary-600 dark:hover:stroke-primary-600',
  secondary: 'hover:stroke-secondary-600 dark:hover:stroke-secondary-600',
  tertiary: 'hover:stroke-tertiary-600 dark:hover:stroke-tertiary-600',
  danger: 'hover:stroke-danger-600 dark:hover:stroke-danger-600',
  warning: 'hover:stroke-warning-600 dark:hover:stroke-warning-600',
  success: 'hover:stroke-success-600 dark:hover:stroke-success-600',
  info: 'hover:stroke-info-600 dark:hover:stroke-info-600',
  light: 'hover:stroke-frame-500 dark:hover:stroke-frame-500',
  dark: 'hover:stroke-frame-800 dark:hover:stroke-frame-800 ',
  white: 'hover:stroke-frame-100 dark:hover:stroke-frame-100',
};

export const StrokeColorSoft = {
  unstyled: '',
  primary: 'stroke-primary-300 dark:stroke-primary-700',
  secondary: 'stroke-secondary-300 dark:stroke-secondary-700',
  tertiary: 'stroke-tertiary-300 dark:stroke-tertiary-700',
  danger: 'stroke-danger-300 dark:stroke-danger-700',
  warning: 'stroke-warning-300 dark:stroke-warning-700',
  success: 'stroke-success-300 dark:stroke-success-700',
  info: 'stroke-info-300 dark:stroke-info-700',
  light: 'stroke-frame-200 dark:stroke-frame-600',
  dark: 'stroke-frame-500 dark:stroke-frame-700 ',
  white: 'stroke-white dark:stroke-white',
};

export const StrokeColorSoftHover = {
  unstyled: '',
  primary: 'hover:stroke-primary-400 dark:hover:stroke-primary-800',
  secondary: 'hover:stroke-secondary-400 dark:hover:stroke-secondary-800',
  tertiary: 'hover:stroke-tertiary-400 dark:hover:stroke-tertiary-800',
  danger: 'hover:stroke-danger-400 dark:hover:stroke-danger-800',
  warning: 'hover:stroke-warning-400 dark:hover:stroke-warning-800',
  success: 'hover:stroke-success-400 dark:hover:stroke-success-800',
  info: 'hover:stroke-info-400 dark:hover:stroke-info-800',
  light: 'hover:stroke-frame-300 dark:hover:stroke-frame-700',
  dark: 'hover:stroke-frame-600 dark:hover:stroke-frame-800 ',
  white: 'hover:stroke-frame-200 dark:hover:stroke-frame-200',
};


export const FontColor = {
  unstyled: '',
  primary: 'text-primary-500 dark:text-primary-500',
  secondary: 'text-secondary-500 dark:text-secondary-500',
  tertiary: 'text-tertiary-500 dark:text-tertiary-500',
  danger: 'text-danger-500 dark:text-danger-500',
  warning: 'text-warning-500 dark:text-warning-500',
  success: 'text-success-500 dark:text-success-500',
  info: 'text-info-500 dark:text-info-500',
  light: 'text-frame-200 dark:text-frame-200',
  dark: 'text-frame-700 dark:text-frame-700 ',
  white: 'text-white dark:text-white',
};

export const FontColorHover = {
  unstyled: '',
  primary: 'hover:text-primary-600 dark:hover:text-primary-600',
  secondary: 'hover:text-secondary-600 dark:hover:text-secondary-600',
  tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-600',
  danger: 'hover:text-danger-600 dark:hover:text-danger-600',
  warning: 'hover:text-warning-600 dark:hover:text-warning-600',
  success: 'hover:text-success-600 dark:hover:text-success-600',
  info: 'hover:text-info-600 dark:hover:text-info-600',
  light: 'hover:text-frame-300 dark:hover:text-frame-300',
  dark: 'hover:text-frame-800 dark:hover:text-frame-800 ',
  white: 'hover:text-frame-100 dark:hover:text-frame-100',
};

export const ForeColorOutline = {
  unstyled: '',
  primary: 'text-primary-500 dark:text-primary-300',
  secondary: 'text-secondary-500 dark:text-secondary-300',
  tertiary: 'text-tertiary-500 dark:text-tertiary-300',
  danger: 'text-danger-500 dark:text-danger-300',
  warning: 'text-warning-500 dark:text-warning-300',
  success: 'text-success-500 dark:text-success-300',
  info: 'text-info-500 dark:text-info-300',
  light: 'text-frame-600 dark:text-frame-200',
  dark: 'text-frame-700 dark:text-frame-200 ',
  white: 'text-white dark:text-white',
};

export const ForeColorOutlineHover = {
  unstyled: '',
  primary: 'hover:text-primary-600 dark:hover:text-primary-400',
  secondary: 'hover:text-secondary-600 dark:hover:text-secondary-400',
  tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-400',
  danger: 'hover:text-danger-600 dark:hover:text-danger-400',
  warning: 'hover:text-warning-600 dark:hover:text-warning-400',
  success: 'hover:text-success-600 dark:hover:text-success-400',
  info: 'hover:text-info-600 dark:hover:text-info-400',
  light: 'hover:text-frame-700 dark:hover:text-frame-200',
  dark: 'hover:text-frame-800 dark:hover:text-frame-300 ',
  white: 'hover:text-frame-100 dark:hover:text-frame-100',
};

export const ForeColorFilled = {
  unstyled: '',
  primary: 'text-primary-50 dark:text-primary-50',
  secondary: 'text-secondary-50 dark:text-secondary-50',
  tertiary: 'text-tertiary-50 dark:text-tertiary-50',
  danger: 'text-danger-50 dark:text-danger-50',
  warning: 'text-warning-50 dark:text-warning-50',
  success: 'text-success-50 dark:text-success-50',
  info: 'text-info-50 dark:text-info-50',
  light: 'text-frame-600 dark:text-frame-700',
  dark: 'text-frame-50 dark:text-frame-50 ',
  white: 'text-frame-600 dark:text-frame-600',
};

export const ForeColorFilledHover = {
  unstyled: '',
  primary: 'hover:text-primary-100 dark:hover:text-primary-100',
  secondary: 'hover:text-secondary-100 dark:hover:text-secondary-100',
  tertiary: 'hover:text-tertiary-100 dark:hover:text-tertiary-100',
  danger: 'hover:text-danger-100 dark:hover:text-danger-100',
  warning: 'hover:text-warning-100 dark:hover:text-warning-100',
  success: 'hover:text-success-100 dark:hover:text-success-100',
  info: 'hover:text-info-100 dark:hover:text-info-100',
  light: 'hover:text-frame-700 dark:hover:text-frame-800',
  dark: 'hover:text-frame-100 dark:hover:text-frame-100 ',
  white: 'hover:text-frame-700 dark:hover:text-frame-700',
};

export const ForeColorSoft = {
  unstyled: '',
  primary: 'text-primary-500 dark:text-primary-300',
  secondary: 'text-secondary-500 dark:text-secondary-300',
  tertiary: 'text-tertiary-500 dark:text-tertiary-300',
  danger: 'text-danger-500 dark:text-danger-300',
  warning: 'text-warning-500 dark:text-warning-300',
  success: 'text-success-500 dark:text-success-300',
  info: 'text-info-500 dark:text-info-300',
  light: 'text-frame-600 dark:text-frame-200',
  dark: 'text-frame-50 dark:text-frame-200 ',
  white: 'text-frame-600 dark:text-frame-600',
};

export const ForeColorSoftHover = {
  unstyled: '',
  primary: 'hover:text-primary-600 dark:hover:text-primary-400',
  secondary: 'hover:text-secondary-600 dark:hover:text-secondary-400',
  tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-400',
  danger: 'hover:text-danger-600 dark:hover:text-danger-400',
  warning: 'hover:text-warning-600 dark:hover:text-warning-400',
  success: 'hover:text-success-600 dark:hover:text-success-400',
  info: 'hover:text-info-600 dark:hover:text-info-400',
  light: 'hover:text-frame-700 dark:hover:text-frame-300',
  dark: 'hover:text-frame-100 dark:hover:text-frame-300 ',
  white: 'hover:text-frame-700 dark:hover:text-frame-700',
};

export const ForeColorGhost = {
  unstyled: '',
  primary: 'text-primary-500 dark:text-primary-300',
  secondary: 'text-secondary-500 dark:text-secondary-300',
  tertiary: 'text-tertiary-500 dark:text-tertiary-300',
  danger: 'text-danger-500 dark:text-danger-300',
  warning: 'text-warning-500 dark:text-warning-300',
  success: 'text-success-500 dark:text-success-300',
  info: 'text-info-500 dark:text-info-300',
  light: 'text-frame-600 dark:text-frame-200',
  dark: 'text-frame-700 dark:text-frame-200 ',
  white: 'text-white dark:text-white',
};

export const ForeColorGhostHover = {
  unstyled: '',
  primary: 'hover:text-primary-600 dark:hover:text-primary-400',
  secondary: 'hover:text-secondary-600 dark:hover:text-secondary-400',
  tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-400',
  danger: 'hover:text-danger-600 dark:hover:text-danger-400',
  warning: 'hover:text-warning-600 dark:hover:text-warning-400',
  success: 'hover:text-success-600 dark:hover:text-success-400',
  info: 'hover:text-info-600 dark:hover:text-info-400',
  light: 'hover:text-frame-700 dark:hover:text-frame-200',
  dark: 'hover:text-frame-50 dark:hover:text-frame-300 ',
  white: 'hover:text-frame-700 dark:hover:text-frame-700',
};

export const ForeColorSelected = {
  unstyled: '',
  primary: 'aria-selected:text-primary-500 dark:aria-selected:text-primary-300',
  secondary: 'aria-selected:text-secondary-500 dark:aria-selected:text-secondary-300',
  tertiary: 'aria-selected:text-tertiary-500 dark:aria-selected:text-tertiary-300',
  danger: 'aria-selected:text-danger-500 dark:aria-selected:text-danger-300',
  warning: 'aria-selected:text-warning-500 dark:aria-selected:text-warning-300',
  success: 'aria-selected:text-success-500 dark:aria-selected:text-success-300',
  info: 'aria-selected:text-info-500 dark:aria-selected:text-info-300',
  light: 'aria-selected:text-frame-600 dark:aria-selected:text-frame-200',
  dark: 'aria-selected:text-frame-700 dark:aria-selected:text-frame-200 ',
  white: 'aria-selected:text-white dark:aria-selected:text-white',
};

export const ForeColorCurrent = {
  unstyled: '',
  primary: 'aria-[current="page"]:text-primary-500 dark:aria-[current="page"]:text-primary-300',
  secondary: 'aria-[current="page"]:text-secondary-500 dark:aria-[current="page"]:text-secondary-300',
  tertiary: 'aria-[current="page"]:text-tertiary-500 dark:aria-[current="page"]:text-tertiary-300',
  danger: 'aria-[current="page"]:text-danger-500 dark:aria-[current="page"]:text-danger-300',
  warning: 'aria-[current="page"]:text-warning-500 dark:aria-[current="page"]:text-warning-300',
  success: 'aria-[current="page"]:text-success-500 dark:aria-[current="page"]:text-success-300',
  info: 'aria-[current="page"]:text-info-500 dark:aria-[current="page"]:text-info-300',
  light: 'aria-[current="page"]:text-frame-600 dark:aria-[current="page"]:text-frame-200',
  dark: 'aria-[current="page"]:text-frame-700 dark:aria-[current="page"]:text-frame-200 ',
  white: 'aria-[current="page"]:text-white dark:aria-[current="page"]:text-white',
};

export const BgColor = {
  unstyled: '',
  primary: 'bg-primary-500 dark:bg-primary-500',
  secondary: 'bg-secondary-500 dark:bg-secondary-500',
  tertiary: 'bg-tertiary-500 dark:bg-tertiary-500',
  danger: 'bg-danger-500 dark:bg-danger-500',
  warning: 'bg-warning-500 dark:bg-warning-500',
  success: 'bg-success-500 dark:bg-success-500',
  info: 'bg-info-500 dark:bg-info-500',
  light: 'bg-frame-100 dark:bg-frame-300',
  dark: 'bg-frame-700 dark:bg-frame-700 ',
  white: 'bg-white dark:bg-white',
};

export const BgColorHint = {
  unstyled: '',
  primary: 'bg-primary-50/60 dark:bg-primary-400/5',
  secondary: 'bg-secondary-50/60 dark:bg-secondary-400/5',
  tertiary: 'bg-tertiary-50/60 dark:bg-tertiary-400/5',
  danger: 'bg-danger-50/60 dark:bg-danger-400/5',
  warning: 'bg-warning-50/60 dark:bg-warning-400/5',
  success: 'bg-success-50/60 dark:bg-success-400/5',
  info: 'bg-info-50/60 dark:bg-info-400/5',
  light: 'bg-frame-50 dark:bg-frame-400/5',
  dark: 'bg-frame-50 dark:bg-frame-400/5 ',
  white: 'bg-frame-50 dark:bg-white/5',
};

export const BgColorHover = {
  unstyled: '',
  primary: 'hover:bg-primary-600 dark:hover:bg-primary-600',
  secondary: 'hover:bg-secondary-600 dark:hover:bg-secondary-600',
  tertiary: 'hover:bg-tertiary-600 dark:hover:bg-tertiary-600',
  danger: 'hover:bg-danger-600 dark:hover:bg-danger-600',
  warning: 'hover:bg-warning-600 dark:hover:bg-warning-600',
  success: 'hover:bg-success-600 dark:hover:bg-success-600',
  info: 'hover:bg-info-600 dark:hover:bg-info-600',
  light: 'hover:bg-frame-200 dark:hover:bg-frame-400',
  dark: 'hover:bg-frame-800 dark:hover:bg-frame-800 ',
  white: 'hover:bg-frame-200 dark:hover:bg-frame-200',
};

export const BgColorGroupHover = {
  unstyled: '',
  primary: 'group-hover:bg-primary-600 dark:group-hover:bg-primary-600',
  secondary: 'group-hover:bg-secondary-600 dark:group-hover:bg-secondary-600',
  tertiary: 'group-hover:bg-tertiary-600 dark:group-hover:bg-tertiary-600',
  danger: 'group-hover:bg-danger-600 dark:group-hover:bg-danger-600',
  warning: 'group-hover:bg-warning-600 dark:group-hover:bg-warning-600',
  success: 'group-hover:bg-success-600 dark:group-hover:bg-success-600',
  info: 'group-hover:bg-info-600 dark:group-hover:bg-info-600',
  light: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-400',
  dark: 'group-hover:bg-frame-800 dark:group-hover:bg-frame-800 ',
  white: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-200',
};

export const BorderColorGroupHover = {
  unstyled: '',
  primary: 'group-hover:border-primary-600 dark:group-hover:border-primary-600',
  secondary: 'group-hover:border-secondary-600 dark:group-hover:border-secondary-600',
  tertiary: 'group-hover:border-tertiary-600 dark:group-hover:border-tertiary-600',
  danger: 'group-hover:border-danger-600 dark:group-hover:border-danger-600',
  warning: 'group-hover:border-warning-600 dark:group-hover:border-warning-600',
  success: 'group-hover:border-success-600 dark:group-hover:border-success-600',
  info: 'group-hover:border-info-600 dark:group-hover:border-info-600',
  light: 'group-hover:border-frame-200 dark:group-hover:border-frame-400',
  dark: 'group-hover:border-frame-800 dark:group-hover:border-frame-800 ',
  white: 'group-hover:border-frame-200 dark:group-hover:border-frame-200',
};


export const BgColorSoft = {
  unstyled: '',
  primary: 'bg-primary-100 dark:bg-primary-700',
  secondary: 'bg-secondary-100 dark:bg-secondary-700',
  tertiary: 'bg-tertiary-100 dark:bg-tertiary-700',
  danger: 'bg-danger-100 dark:bg-danger-700',
  warning: 'bg-warning-100 dark:bg-warning-700',
  success: 'bg-success-100 dark:bg-success-700',
  info: 'bg-info-100 dark:bg-info-700',
  light: 'bg-frame-100 dark:bg-frame-500',
  dark: 'bg-frame-500 dark:bg-frame-700 ',
  white: 'bg-white dark:bg-white',
};

export const BgColorSoftHover = {
  unstyled: '',
  primary: 'hover:bg-primary-200 dark:hover:bg-primary-800',
  secondary: 'hover:bg-secondary-200 dark:hover:bg-secondary-800',
  tertiary: 'hover:bg-tertiary-200 dark:hover:bg-tertiary-800',
  danger: 'hover:bg-danger-200 dark:hover:bg-danger-800',
  warning: 'hover:bg-warning-200 dark:hover:bg-warning-800',
  success: 'hover:bg-success-200 dark:hover:bg-success-800',
  info: 'hover:bg-info-200 dark:hover:bg-info-800',
  light: 'hover:bg-frame-200 dark:hover:bg-frame-600',
  dark: 'hover:bg-frame-600 dark:hover:bg-frame-800 ',
  white: 'hover:bg-frame-200 dark:hover:bg-frame-200',
};

export const BgColorGhostHover = {
  unstyled: '',
  primary: 'hover:bg-primary-100 dark:hover:bg-primary-700',
  secondary: 'hover:bg-secondary-100 dark:hover:bg-secondary-700',
  tertiary: 'hover:bg-tertiary-100 dark:hover:bg-tertiary-700',
  danger: 'hover:bg-danger-100 dark:hover:bg-danger-700',
  warning: 'hover:bg-warning-100 dark:hover:bg-warning-700',
  success: 'hover:bg-success-100 dark:hover:bg-success-700',
  info: 'hover:bg-info-100 dark:hover:bg-info-700',
  light: 'hover:bg-frame-100 dark:hover:bg-frame-500',
  dark: 'hover:bg-frame-500 dark:hover:bg-frame-700 ',
  white: 'hover:bg-white dark:hover:bg-white',
};

export const BgColorSoftGroupHover = {
  unstyled: '',
  primary: 'group-hover:bg-primary-200 dark:group-hover:bg-primary-800',
  secondary: 'group-hover:bg-secondary-200 dark:group-hover:bg-secondary-800',
  tertiary: 'group-hover:bg-tertiary-200 dark:group-hover:bg-tertiary-800',
  danger: 'group-hover:bg-danger-200 dark:group-hover:bg-danger-800',
  warning: 'group-hover:bg-warning-200 dark:group-hover:bg-warning-800',
  success: 'group-hover:bg-success-200 dark:group-hover:bg-success-800',
  info: 'group-hover:bg-info-200 dark:group-hover:bg-info-800',
  light: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-600',
  dark: 'group-hover:bg-frame-600 dark:group-hover:bg-frame-800 ',
  white: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-200',
};

export const BgColorSelected = {
  unstyled: '',
  primary: 'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-500',
  secondary: 'aria-selected:bg-secondary-500 dark:aria-selected:bg-secondary-500',
  tertiary: 'aria-selected:bg-tertiary-500 dark:aria-selected:bg-tertiary-500',
  danger: 'aria-selected:bg-danger-500 dark:aria-selected:bg-danger-500',
  warning: 'aria-selected:bg-warning-500 dark:aria-selected:bg-warning-500',
  success: 'aria-selected:bg-success-500 dark:aria-selected:bg-success-500',
  info: 'aria-selected:bg-info-500 dark:aria-selected:bg-info-500',
  light: 'aria-selected:bg-frame-300 dark:aria-selected:bg-frame-400',
  dark: 'aria-selected:bg-frame-700 dark:aria-selected:bg-frame-700 ',
  white: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-200',
};

export const BgColorDropSelected = {
  unstyled: '',
  primary: 'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-500',
  secondary: 'aria-selected:bg-secondary-500 dark:aria-selected:bg-secondary-500',
  tertiary: 'aria-selected:bg-tertiary-500 dark:aria-selected:bg-tertiary-500',
  danger: 'aria-selected:bg-danger-500 dark:aria-selected:bg-danger-500',
  warning: 'aria-selected:bg-warning-500 dark:aria-selected:bg-warning-500',
  success: 'aria-selected:bg-success-500 dark:aria-selected:bg-success-500',
  info: 'aria-selected:bg-info-500 dark:aria-selected:bg-info-500',
  light: 'aria-selected:bg-frame-300 dark:aria-selected:bg-frame-400',
  dark: 'aria-selected:bg-frame-700 dark:aria-selected:bg-frame-700 ',
  white: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-200',
};

export const BgColorSoftSelected = {
  unstyled: '',
  primary: 'aria-selected:bg-primary-200 dark:aria-selected:bg-primary-800',
  secondary: 'aria-selected:bg-secondary-200 dark:aria-selected:bg-secondary-800',
  tertiary: 'aria-selected:bg-tertiary-200 dark:aria-selected:bg-tertiary-800',
  danger: 'aria-selected:bg-danger-200 dark:aria-selected:bg-danger-800',
  warning: 'aria-selected:bg-warning-200 dark:aria-selected:bg-warning-800',
  success: 'aria-selected:bg-success-200 dark:aria-selected:bg-success-800',
  info: 'aria-selected:bg-info-200 dark:aria-selected:bg-info-800',
  light: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-600',
  dark: 'aria-selected:bg-frame-600 dark:aria-selected:bg-frame-800 ',
  white: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-200',
};

export const BgColorSoftDropSelected = {
  unstyled: '',
  primary: 'aria-selected:bg-primary-100 dark:aria-selected:bg-primary-800',
  secondary: 'aria-selected:bg-secondary-100 dark:aria-selected:bg-secondary-800',
  tertiary: 'aria-selected:bg-tertiary-100 dark:aria-selected:bg-tertiary-800',
  danger: 'aria-selected:bg-danger-100 dark:aria-selected:bg-danger-800',
  warning: 'aria-selected:bg-warning-100 dark:aria-selected:bg-warning-800',
  success: 'aria-selected:bg-success-100 dark:aria-selected:bg-success-800',
  info: 'aria-selected:bg-info-100 dark:aria-selected:bg-info-800',
  light: 'aria-selected:bg-frame-300 dark:aria-selected:bg-frame-400',
  dark: 'aria-selected:bg-frame-700 dark:aria-selected:bg-frame-700 ',
  white: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-200',
};

export const BgColorExpanded = {
  unstyled: '',
  primary: 'aria-expanded:bg-primary-500 dark:aria-expanded:bg-primary-500',
  secondary: 'aria-expanded:bg-secondary-500 dark:aria-expanded:bg-secondary-500',
  tertiary: 'aria-expanded:bg-tertiary-500 dark:aria-expanded:bg-tertiary-500',
  danger: 'aria-expanded:bg-danger-500 dark:aria-expanded:bg-danger-500',
  warning: 'aria-expanded:bg-warning-500 dark:aria-expanded:bg-warning-500',
  success: 'aria-expanded:bg-success-500 dark:aria-expanded:bg-success-500',
  info: 'aria-expanded:bg-info-500 dark:aria-expanded:bg-info-500',
  light: 'aria-expanded:bg-frame-300 dark:aria-expanded:bg-frame-400',
  dark: 'aria-expanded:bg-frame-700 dark:aria-expanded:bg-frame-700 ',
  white: 'aria-expanded:bg-frame-200 dark:aria-expanded:bg-frame-200',
};

export const BgColorSoftExpanded = {
  unstyled: '',
  primary: 'aria-expanded:bg-primary-200 dark:aria-expanded:bg-primary-800',
  secondary: 'aria-expanded:bg-secondary-200 dark:aria-expanded:bg-secondary-800',
  tertiary: 'aria-expanded:bg-tertiary-200 dark:aria-expanded:bg-tertiary-800',
  danger: 'aria-expanded:bg-danger-200 dark:aria-expanded:bg-danger-800',
  warning: 'aria-expanded:bg-warning-200 dark:aria-expanded:bg-warning-800',
  success: 'aria-expanded:bg-success-200 dark:aria-expanded:bg-success-800',
  info: 'aria-expanded:bg-info-200 dark:aria-expanded:bg-info-800',
  light: 'aria-expanded:bg-frame-200 dark:aria-expanded:bg-frame-600',
  dark: 'aria-expanded:bg-frame-600 dark:aria-expanded:bg-frame-800 ',
  white: 'aria-expanded:bg-frame-200 dark:aria-expanded:bg-frame-200',
};


export const BgColorChecked = {
  unstyled: '',
  primary: 'aria-checked:bg-primary-500 dark:aria-checked:bg-primary-500',
  secondary: 'aria-checked:bg-secondary-500 dark:aria-checked:bg-secondary-500',
  tertiary: 'aria-checked:bg-tertiary-500 dark:aria-checked:bg-tertiary-500',
  danger: 'aria-checked:bg-danger-500 dark:aria-checked:bg-danger-500',
  warning: 'aria-checked:bg-warning-500 dark:aria-checked:bg-warning-500',
  success: 'aria-checked:bg-success-500 dark:aria-checked:bg-success-500',
  info: 'aria-checked:bg-info-500 dark:aria-checked:bg-info-500',
  light: 'aria-checked:bg-frame-300 dark:aria-checked:bg-frame-400',
  dark: 'aria-checked:bg-frame-700 dark:aria-checked:bg-frame-700 ',
  white: 'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-200',
};

export const BgColorSoftChecked = {
  unstyled: '',
  primary: 'aria-checked:bg-primary-200 dark:aria-checked:bg-primary-800',
  secondary: 'aria-checked:bg-secondary-200 dark:aria-checked:bg-secondary-800',
  tertiary: 'aria-checked:bg-tertiary-200 dark:aria-checked:bg-tertiary-800',
  danger: 'aria-checked:bg-danger-200 dark:aria-checked:bg-danger-800',
  warning: 'aria-checked:bg-warning-200 dark:aria-checked:bg-warning-800',
  success: 'aria-checked:bg-success-200 dark:aria-checked:bg-success-800',
  info: 'aria-checked:bg-info-200 dark:aria-checked:bg-info-800',
  light: 'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-600',
  dark: 'aria-checked:bg-frame-600 dark:aria-checked:bg-frame-800 ',
  white: 'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-200',
};


export const BgColorCurrent = {
  unstyled: '',
  primary: 'aria-[current="page"]:bg-primary-500 dark:aria-[current="page"]:bg-primary-500',
  secondary: 'aria-[current="page"]:bg-secondary-500 dark: aria - [current = "page"]: bg- secondary-500',
  tertiary: 'aria-[current="page"]:bg-tertiary-500 dark: aria - [current = "page"]: bg - tertiary-500',
  danger: 'aria-[current="page"]:bg-danger-500 dark:aria-[current="page"]:bg-danger-500',
  warning: 'aria-[current="page"]:bg-warning-500 dark:aria-[current="page"]:bg-warning-500',
  success: 'aria-[current="page"]:bg-success-500 dark:aria-[current="page"]:bg-success-500',
  info: 'aria-[current="page"]:bg-info-500 dark:aria-[current="page"]:bg-info-500',
  light: 'aria-[current="page"]:bg-frame-300 dark:aria-[current="page"]:bg-frame-400',
  dark: 'aria-[current="page"]:bg-frame-700 dark:aria-[current="page"]:bg-frame-700 ',
  white: 'aria-[current="page"]:bg-frame-200 dark:aria-[current="page"]:bg-frame-200',
};

export const BgColorSoftCurrent = {
  unstyled: '',
  primary: 'aria-[current="page"]:bg-primary-200 dark: aria - [current = "page"]: bg- primary-800',
  secondary: 'aria-[current="page"]:bg-secondary-200 dark: aria - [current = "page"]: bg - secondary-800',
  tertiary: 'aria-[current="page"]:bg-tertiary-200 dark: aria - [current = "page"]: bg - tertiary-800',
  danger: 'aria-[current="page"]:bg-danger-200 dark: aria - [current = "page"]: bg - danger-800',
  warning: 'aria-[current="page"]:bg-warning-200 dark: aria - [current = "page"]: bg - warning-800',
  success: 'aria-[current="page"]:bg-success-200 dark: aria - [current = "page"]: bg - success-800',
  info: 'aria-[current="page"]:bg-info-200 dark:aria-[current="page"]:bg-info-800',
  light: 'aria-[current="page"]:bg-frame-200 dark: aria - [current = "page"]: bg - frame-600',
  dark: 'aria-[current="page"]:bg-frame-600 dark:aria-[current="page"]:bg-frame-800 ',
  white: 'aria-[current="page"]:bg-frame-200 dark: aria - [current = "page"]: bg - frame-200',
};


export const RingColor = {
  unstyled: '',
  primary: 'ring-primary-500 dark:ring-primary-500',
  secondary: 'ring-secondary-500 dark:ring-secondary-500',
  tertiary: 'ring-tertiary-500 dark:ring-tertiary-500',
  danger: 'ring-danger-500 dark:ring-danger-500',
  warning: 'ring-warning-500 dark:ring-warning-500',
  success: 'ring-success-500 dark:ring-success-500',
  info: 'ring-info-500 dark:ring-info-500',
  light: 'ring-frame-300 dark:ring-frame-400',
  dark: 'ring-frame-600 dark:ring-frame-700',
  white: 'ring-white dark:ring-white',
};

export const RingColorFocus = {
  unstyled: '',
  primary: 'focus:ring-primary-500 dark:focus:ring-primary-500',
  secondary: 'focus:ring-secondary-500 dark:focus:ring-secondary-500',
  tertiary: 'focus:ring-tertiary-500 dark:focus:ring-tertiary-500',
  danger: 'focus:ring-danger-500 dark:focus:ring-danger-500',
  warning: 'focus:ring-warning-500 dark:focus:ring-warning-500',
  success: 'focus:ring-success-500 dark:focus:ring-success-500',
  info: 'focus:ring-info-500 dark:focus:ring-info-500',
  light: 'focus:ring-frame-300 dark:focus:ring-frame-400',
  dark: 'focus:ring-frame-600 dark:focus:ring-frame-700',
  white: 'focus:ring-white dark:focus:ring-white',
};

export const RingColorHover = {
  unstyled: '',
  primary: 'hover:ring-primary-600 dark:hover:ring-primary-600',
  secondary: 'hover:ring-secondary-600 dark:hover:ring-secondary-600',
  tertiary: 'hover:ring-tertiary-600 dark:hover:ring-tertiary-600',
  danger: 'hover:ring-danger-600 dark:hover:ring-danger-600',
  warning: 'hover:ring-warning-600 dark:hover:ring-warning-600',
  success: 'hover:ring-success-600 dark:hover:ring-success-600',
  info: 'hover:ring-info-600 dark:hover:ring-info-600',
  light: 'hover:ring-frame-400 dark:hover:ring-frame-500',
  dark: 'hover:ring-frame-700 dark:hover:ring-frame-800',
  white: 'hover:ring-frame-200 dark:hover:ring-frame-200',
};

export const BorderColor = {
  unstyled: '',
  primary: 'border-primary-500 dark:border-primary-500',
  secondary: 'border-secondary-500 dark:border-secondary-500',
  tertiary: 'border-tertiary-500 dark:border-tertiary-500',
  danger: 'border-danger-500 dark:border-danger-500',
  warning: 'border-warning-500 dark:border-warning-500',
  success: 'border-success-500 dark:border-success-500',
  info: 'border-info-500 dark:border-info-500',
  light: 'border-frame-300 dark:border-frame-400',
  dark: 'border-frame-600 dark:border-frame-700',
  white: 'border-white dark:border-white',
};

export const BorderColorHover = {
  unstyled: '',
  primary: 'hover:border-primary-600 dark:hover:border-primary-600',
  secondary: 'hover:border-secondary-600 dark:hover:border-secondary-600',
  tertiary: 'hover:border-tertiary-600 dark:hover:border-tertiary-600',
  danger: 'hover:border-danger-600 dark:hover:border-danger-600',
  warning: 'hover:border-warning-600 dark:hover:border-warning-600',
  success: 'hover:border-success-600 dark:hover:border-success-600',
  info: 'hover:border-info-600 dark:hover:border-info-600',
  light: 'hover:border-frame-400 dark:hover:border-frame-500',
  dark: 'hover:border-frame-700 dark:hover:border-frame-800',
  white: 'hover:border-frame-200 dark:hover:border-frame-200',
};

export const DivideColor = {
  unstyled: '',
  primary: 'divide-primary-500 dark:divide-primary-500',
  secondary: 'divide-secondary-500 dark:divide-secondary-500',
  tertiary: 'divide-tertiary-500 dark:divide-tertiary-500',
  danger: 'divide-danger-500 dark:divide-danger-500',
  warning: 'divide-warning-500 dark:divide-warning-500',
  success: 'divide-success-500 dark:divide-success-500',
  info: 'divide-info-500 dark:divide-info-500',
  light: 'divide-frame-200 dark:divide-frame-200',
  dark: 'divide-frame-700 dark:divide-frame-700',
  white: 'divide-white dark:divide-white',
};

export const DivideBeforeColor = {
  unstyled: '',
  primary: 'before:bg-primary-500 dark:before:bg-primary-500',
  secondary: 'before:bg-secondary-500 dark:before:bg-secondary-500',
  tertiary: 'before:bg-tertiary-500 dark:before:bg-tertiary-500',
  danger: 'before:bg-danger-500 dark:before:bg-danger-500',
  warning: 'before:bg-warning-500 dark:before:bg-warning-500',
  success: 'before:bg-success-500 dark:before:bg-success-500',
  info: 'before:bg-info-500 dark:before:bg-info-500',
  light: 'before:bg-frame-200 dark:before:bg-frame-200',
  dark: 'before:bg-frame-700 dark:before:bg-frame-700',
  white: 'before:bg-white dark:before:bg-white',
};

export const DivideAfterColor = {
  unstyled: '',
  primary: 'after:bg-primary-500 dark:after:bg-primary-500',
  secondary: 'after:bg-secondary-500 dark:after:bg-secondary-500',
  tertiary: 'after:bg-tertiary-500 dark:after:bg-tertiary-500',
  danger: 'after:bg-danger-500 dark:after:bg-danger-500',
  warning: 'after:bg-warning-500 dark:after:bg-warning-500',
  success: 'after:bg-success-500 dark:after:bg-success-500',
  info: 'after:bg-info-500 dark:after:bg-info-500',
  light: 'after:bg-frame-200 dark:after:bg-frame-200',
  dark: 'after:bg-frame-700 dark:after:bg-frame-700',
  white: 'after:bg-white dark:after:bg-white',
};



export const OutlineColorFocus = {
  unstyled: '',
  primary: 'focus:outline-primary-500/40 dark:focus:outline-primary-500/40',
  secondary: 'focus:outline-secondary-500/40 dark:focus:outline-secondary-500/40',
  tertiary: 'focus:outline-tertiary-500/40 dark:focus:outline-tertiary-500/40',
  danger: 'focus:outline-danger-500/40 dark:focus:outline-danger-500/40',
  warning: 'focus:outline-warning-500/40 dark:focus:outline-warning-500/40',
  success: 'focus:outline-success-500/40 dark:focus:outline-success-500/40',
  info: 'focus:outline-info-500/40 dark:focus:outline-info-500/40',
  light: 'focus:outline-frame-500/40 dark:focus:outline-frame-500/40',
  dark: 'focus:outline-frame-500/40 dark:focus:outline-frame-500/40 ',
  white: 'focus:outline-white/40 dark:focus:outline-white/40',
};

export const OutlineColorFocusVisible = {
  unstyled: '',
  primary: 'focus-visible:outline-primary-500/40 dark:focus-visible:outline-primary-500/40',
  secondary: 'focus-visible:outline-secondary-500/40 dark:focus-visible:outline-secondary-500/40',
  tertiary: 'focus-visible:outline-tertiary-500/40 dark:focus-visible:outline-tertiary-500/40',
  danger: 'focus-visible:outline-danger-500/40 dark:focus-visible:outline-danger-500/40',
  warning: 'focus-visible:outline-warning-500/40 dark: focus - visible: outline- warning-500/40',
  success: 'focus-visible:outline-success-500/40 dark: focus - visible: outline - success-500/40',
  info: 'focus-visible:outline-info-500/40 dark:focus-visible:outline-info-500/40',
  light: 'focus-visible:outline-frame-500/40 dark:focus-visible:outline-frame-500/40',
  dark: 'focus-visible:outline-frame-500/40 dark:focus-visible:outline-frame-500/40 ',
  white: 'focus-visible:outline-white/40 dark:focus-visible:outline-white/40',
};

export const OutlineColorFocusGroup = {
  unstyled: '',
  primary: 'group-focus:outline-primary-500/40 dark:group-focus:outline-primary-500/40',
  secondary: 'group-focus:outline-secondary-500/40 dark:group-focus:outline-secondary-500/40',
  tertiary: 'group-focus:outline-tertiary-500/40 dark:group-focus:outline-tertiary-500/40',
  danger: 'group-focus:outline-danger-500/40 dark:group-focus:outline-danger-500/40',
  warning: 'group-focus:outline-warning-500/40 dark:group-focus:outline-warning-500/40',
  success: 'group-focus:outline-success-500/40 dark:group-focus:outline-success-500/40',
  info: 'group-focus:outline-info-500/40 dark:group-focus:outline-info-500/40',
  light: 'group-focus:outline-frame-500/40 dark:group-focus:outline-frame-500/40',
  dark: 'group-focus:outline-frame-500/40 dark:group-focus:outline-frame-500/40 ',
  white: 'group-focus:outline-white/40 dark:group-focus:outline-white/40',
};

export const OutlineColorFocusWithin = {
  unstyled: '',
  primary: 'focus-within:outline-primary-500/40 dark:focus-within:outline-primary-500/40',
  secondary: 'focus-within:outline-secondary-500/40 dark: focus - within: outline- secondary-500/40',
  tertiary: 'focus-within:outline-tertiary-500/40 dark: focus - within: outline - tertiary-500/40',
  danger: 'focus-within:outline-danger-500/40 dark:focus-within:outline-danger-500/40',
  warning: 'focus-within:outline-warning-500/40 dark:focus-within:outline-warning-500/40',
  success: 'focus-within:outline-success-500/40 dark:focus-within:outline-success-500/40',
  info: 'focus-within:outline-info-500/40 dark:focus-within:outline-info-500/40',
  light: 'focus-within:outline-frame-500/40 dark:focus-within:outline-frame-500/40',
  dark: 'focus-within:outline-frame-500/40 dark:focus-within:outline-frame-500/40 ',
  white: 'focus-within:outline-white/40 dark:focus-within:outline-white/40',
};

export const OutlineColorFocusPeer = {
  unstyled: '',
  primary: 'peer-focus:outline-primary-500/40 dark:peer-focus:outline-primary-500/40',
  secondary: 'peer-focus:outline-secondary-500/40 dark: peer - focus: outline- secondary-500/40',
  tertiary: 'peer-focus:outline-tertiary-500/40 dark:peer-focus:outline-tertiary-500/40',
  danger: 'peer-focus:outline-danger-500/40 dark:peer-focus:outline-danger-500/40',
  warning: 'peer-focus:outline-warning-500/40 dark:peer-focus:outline-warning-500/40',
  success: 'peer-focus:outline-success-500/40 dark:peer-focus:outline-success-500/40',
  info: 'peer-focus:outline-info-500/40 dark:peer-focus:outline-info-500/40',
  light: 'peer-focus:outline-frame-500/40 dark:peer-focus:outline-frame-500/40',
  dark: 'peer-focus:outline-frame-500/40 dark:peer-focus:outline-frame-500/40 ',
  white: 'peer-focus:outline-white/40 dark:peer-focus:outline-white/40',
};

export const MozillaProgressBarBg ={
  unstyled: '',
  primary: '[&::-moz-progress-bar]:bg-primary-500 dark:[&::-moz-progress-bar]:bg-primary-500',
  secondary: '[&::-moz-progress-bar]:bg-secondary-500 dark:[&::-moz-progress-bar]:bg-secondary-500',
  tertiary: '[&::-moz-progress-bar]:bg-tertiary-500 dark:[&::-moz-progress-bar]:bg-tertiary-500',
  danger: '[&::-moz-progress-bar]:bg-danger-500 dark:[&::-moz-progress-bar]:bg-danger-500',
  warning: '[&::-moz-progress-1ar]:bg-warning-500 dark:[&::-moz-progress-bar]:bg-info-500',
  success: '[&::-moz-progress-bar]:bg-success-500 dark:[&::-moz-progress-bar]:bg-info-500',
  info: '[&::-moz-progress-bar]:bg-info-500 dark:[&::-moz-progress-bar]:bg-info-500',
  light: '[&::-moz-progress-bar]:bg-frame-400 dark:[&::-moz-progress-bar]:bg-frame-400',
  dark:  '[&::-moz-progress-bar]:bg-frame-600 dark:[&::-moz-progress-bar]:bg-frame-700',
  white: '[&::-moz-progress-bar]:bg-white dark:[&::-moz-progress-bar]:bg-white'
};

export const WebkitProgressValue ={
  unstyled: '',
  primary: '[&::-webkit-progress-value]:bg-primary-500 dark:[&::-webkit-progress-value]:bg-primary-500',
  secondary: '[&::-webkit-progress-value]:bg-secondary-500 dark:[&::-webkit-progress-value]:bg-secondary-500',
  tertiary: '[&::-webkit-progress-value]:bg-tertiary-500 dark:[&::-webkit-progress-value]:bg-tertiary-500',
  danger: '[&::-webkit-progress-value]:bg-danger-500 dark:[&::-webkit-progress-value]:bg-danger-500',
  warning: '[&::-webkit-progress-value]:bg-warning-500 dark:[&::-webkit-progress-value]:bg-warning-500',
  success: '[&::-webkit-progress-value]:bg-success-500 dark:[&::-webkit-progress-value]:bg-success-500',
  info: '[&::-webkit-progress-value]:bg-info-500 dark:[&::-webkit-progress-value]:bg-info-500',
  light: '[&::-webkit-progress-value]:bg-frame-400 dark:[&::-webkit-progress-value]:bg-frame-400',
  dark: '[&::-webkit-progress-value]:bg-frame-600 dark:[&::-webkit-progress-value]:bg-frame-700',
  white: '[&::-webkit-progress-value]:bg-white dark:[&::-webkit-progress-value]:bg-white'
};

export const FocusTypes = {
  unstyled: Placeholder,
  focus: OutlineColorFocus,
  visible: OutlineColorFocusVisible,
  within: OutlineColorFocusWithin,
  group: OutlineColorFocusGroup,
  peer: OutlineColorFocusPeer
};

export const SelectedTypes = {
  unstyled: Placeholder,
  selected: BgColorSelected,
  expanded: BgColorExpanded,
  checked: BgColorChecked,
  current: BgColorCurrent
};

export const SelectedSoftTypes = {
  unstyled: Placeholder,
  selected: BgColorSoftSelected,
  expanded: BgColorSoftExpanded,
  checked: BgColorSoftChecked,
  current: BgColorSoftCurrent
};

export interface GlobalSettings {
  focusWidth: Size | 'none';
  focusOffset?: Size | 'none';
  prose: boolean; // when true enable prose for content (requries typography plugin)
  rounded: boolean; // when true rounding are permitted.
  shadow: boolean; // when true shadows are permitted.
};

export interface GlobalOptions {
  border: string;
  card: string;
  disabled: string;
  divide: string;
  placeholder: string;
  ring: string;
  input: string;
  transition: string;
}

export interface Theme {
  readonly dark: boolean;
  settings: GlobalSettings;
  options: GlobalOptions;
}

export type ThemeInternal = Theme & { dark: boolean };


