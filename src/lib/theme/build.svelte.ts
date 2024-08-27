import theme from './theme.svelte.js';
import { clsxm, joinStyles } from '$lib/utils/string.js';

import {
  type FocusType,
  type ThemeColor,
  RingColorFocus,
  FocusTypes
} from './types.js';
import type { ClassArray, ClassValue } from 'clsx';
import { Animate, DropShadow, FontSize, JustifyContent, OutlineOffset, OutlineWidth, Rounded, Shadow } from './constants.js';

export type ConfigProps = {
  animate?: keyof typeof Animate;
  styles?: string | null | false | (string | null | false)[];
  disabled?: boolean;
  dropShadow?: keyof typeof DropShadow | false;
  fontSize?: keyof typeof FontSize;
  focusType?: FocusType;
  focusTheme?: ThemeColor | false;
  focusWidth?: keyof typeof OutlineWidth | false;
  focusOffset?: keyof typeof OutlineOffset | false;
  focusRingColor?: ThemeColor | false;
  full?: boolean;
  justify?: keyof typeof JustifyContent;
  node?: HTMLElement;
  rounded?: keyof typeof Rounded | false;
  shadow?: keyof typeof Shadow | false;
  prepend?: ClassValue | ClassArray[],
  classes?: ClassValue | ClassArray[],
  append?: ClassValue | ClassArray[],
};

export function buildClass(props: ConfigProps) {

  const {
    animate,
    disabled,
    dropShadow,
    fontSize,
    focusType = 'focus',
    focusWidth = theme.settings.focusWidth,
    focusOffset = 'sm',
    focusTheme,
    focusRingColor,
    full,
    justify,
    rounded,
    shadow,
    prepend,
    classes,
    append
  } = props;

  return clsxm(
    prepend,

    focusType && focusTheme && FocusTypes[focusType][focusTheme],
    focusWidth && focusType && OutlineWidth[focusWidth],
    focusOffset && focusType && OutlineOffset[focusOffset],
    focusRingColor && RingColorFocus[focusRingColor],

    fontSize && FontSize[fontSize],
    animate && Animate[animate],
    disabled && theme.options.disabled,
    disabled && 'pointer-events-none',
    full && 'w-full',
    justify && JustifyContent[justify],
    theme.settings.shadow && dropShadow && DropShadow[dropShadow],
    theme.settings.rounded && Rounded[rounded || 'unstyled'],
    theme.settings.shadow && Shadow[shadow || 'unstyled'],
    theme.options.transition,

    classes,

    append
  );

}

export function buildStyle(styles: string | null | false | (string | null | false)[], append: string) {
  return joinStyles(styles, append);
}