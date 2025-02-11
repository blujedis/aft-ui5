import theme from './theme.svelte.js';
import { clsxm, joinStyles } from '../utils/string.js';
import { RingColorFocus, FocusTypes, } from './types.js';
import { Animate, DropShadow, Elevation, FontSize, JustifyContent, OutlineOffset, OutlineWidth, Rounded, Shadow } from './constants.js';
export function buildClass(props) {
    const { animate, disabled, dropShadow, elevation, fontSize, focusType, focusWidth = theme.settings.focusWidth, focusOffset = theme.settings.focusOffset, focusTheme, focusRingColor, full, justify, rounded, shadow, transition = false, prepend, classes, append } = props;
    return clsxm(prepend, focusType && focusTheme && FocusTypes[focusType] && FocusTypes[focusType][focusTheme || 'primary'], focusWidth && focusType && OutlineWidth[focusWidth], focusOffset && focusType && OutlineOffset[focusOffset], focusType && focusRingColor && RingColorFocus[focusRingColor], fontSize && FontSize[fontSize], animate && Animate[animate], disabled && theme.options.disabled, disabled && 'pointer-events-none', full && 'w-full', justify && JustifyContent[justify], theme.settings.shadow && dropShadow && DropShadow[dropShadow], theme.settings.rounded && Rounded[rounded || 'unstyled'], theme.settings.shadow && Shadow[shadow || 'unstyled'], theme.settings.shadow && Elevation[elevation || 'unstyled'], transition && theme.options.transition, classes, append);
}
export function buildStyle(styles, append) {
    return joinStyles(styles, append);
}
