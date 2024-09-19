import theme from './theme.svelte.js';
import { clsxm, joinStyles } from '$lib/utils/string.js';

import {
  type FocusType,
  type ThemeColor,
  RingColorFocus,
  FocusTypes,
  type FocusWidth,
  type DropShadowSize,
  type ElevationSize,
  type AnimateType,
  type RoundedSize,
  type ShadowSize,
  type JustifyContentType,
  type FontSizes,
  type FocusOffset,
} from './types.js';
import type { ClassArray, ClassValue } from 'clsx';
import { Animate, DropShadow, Elevation, FontSize, JustifyContent, OutlineOffset, OutlineWidth, Rounded, Shadow } from './constants.js';

export type ConfigProps = {
  animate?: AnimateType;
  disabled?: boolean | null;
  dropShadow?: DropShadowSize | false;
  elevation?: ElevationSize;
  fontSize?: FontSizes;
  focusType?: FocusType;
  focusTheme?: ThemeColor | false;
  focusWidth?: FocusWidth | false;
  focusOffset?: FocusOffset | false;
  focusRingColor?: ThemeColor | false;
  full?: boolean;
  justify?: JustifyContentType;
  node?: HTMLElement;
  rounded?: RoundedSize | false;
  shadow?: ShadowSize | false;
  transition?: boolean | string;
  styles?: string | null | false | (string | null | false)[];
  prepend?: ClassValue | ClassArray[],
  classes?: ClassValue | ClassArray[],
  append?: ClassValue | ClassArray[],
};

export function buildClass(props: ConfigProps) {

  const {
    animate,
    disabled,
    dropShadow,
    elevation,
    fontSize,
    focusType,
    focusWidth = theme.settings.focusWidth,
    focusOffset = theme.settings.focusOffset,
    focusTheme,
    focusRingColor,
    full,
    justify,
    rounded,
    shadow,
    transition = false,
    prepend,
    classes,
    append
  } = props;

  return clsxm(
    prepend,

    focusType && focusTheme && FocusTypes[focusType] && FocusTypes[focusType][focusTheme || 'primary'],
    focusWidth && focusType && OutlineWidth[focusWidth],
    focusOffset && focusType && OutlineOffset[focusOffset],
    focusType && focusRingColor && RingColorFocus[focusRingColor],

    fontSize && FontSize[fontSize],
    animate && Animate[animate],
    disabled && theme.options.disabled,
    disabled && 'pointer-events-none',
    full && 'w-full',
    justify && JustifyContent[justify],
    theme.settings.shadow && dropShadow && DropShadow[dropShadow],
    theme.settings.rounded && Rounded[rounded || 'unstyled'],
    theme.settings.shadow && Shadow[shadow || 'unstyled'],
    theme.settings.shadow && Elevation[elevation || 'unstyled'],
    transition && theme.options.transition,
    classes,
    append
  );

}

export function buildStyle(styles: string | null | false | (string | null | false)[], append: string) {
  return joinStyles(styles, append);
}