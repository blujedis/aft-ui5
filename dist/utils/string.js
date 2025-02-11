import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ensureArray } from './array.js';
import {} from '../theme/types.js';
import { colors, shades } from '../theme/globals.js';
export function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
/**
 * When string match uses index of or includes
 * otherwise use RegExp with .test().
 */
export function pageIsActive(page, match) {
    let pathname = page.url.pathname.replace(/^\//, '');
    if (!pathname)
        return false;
    if (typeof match === 'string') {
        if (pathname.includes('-'))
            pathname = pathname.split('-')[0];
        return match.startsWith(pathname);
    }
    return match.test(pathname);
}
/**
 * Combines class names then processes for duplicates with Tailwind merge util.
 *
 * @param args class values to be processed
 */
export function clsxm(...args) {
    const classes = clsx(...args);
    return twMerge(classes);
}
export function toColorVar(key, value) {
    const [prefix, opacity] = value.split('/');
    const cleaned = prefix.replace(/^--color-/, '');
    if (!['#', 'rgb', 'hsl'].some((v) => value.startsWith(v))) {
        // statically defined color.
        if (opacity) {
            // note using rgba(var(--some-color), 0.2) won't work use "/"
            const alpha = opacity.includes('.') ? opacity : Number(opacity) / 100;
            value = `rgba(var(--color-${cleaned})/${alpha})`;
        }
        else {
            value = `rgb(var(--color-${cleaned}))`;
        }
    }
    return `${key}: ${value};`;
}
export function joinStyles(styles, append) {
    let result = ensureArray(styles)
        .filter((v) => typeof v === 'string')
        .map((v) => v.replace(/;$/, '') + ';')
        .join(' ');
    if (append)
        result = result + ' ' + append;
    return result.trim();
}
/**
 * Verifies that value is a known theme color.
 *
 * @param color the color to verify as theme color.
 */
export function isThemeColor(color) {
    const [name, shade] = (color || '').replace(/^(--|--color)/, '').split('-');
    const normalizedShade = typeof shade === 'undefined' ? 500 : parseInt(shade);
    const hasColor = colors.includes(name.toLowerCase());
    const hasShade = shades.includes(normalizedShade);
    if (hasShade && hasColor)
        return color;
    return null;
}
/**
 * Gets a normalized color value.
 *
 * @param color the color to normalize.
 * @param def a default fallback value.
 * @param opacity optional opacity to be applied when theme color is used.
 */
export function getColor(color, def, opacity) {
    const themeColor = isThemeColor(color);
    if (themeColor)
        return opacity
            ? `rgb(var(--color-${themeColor})/${opacity})`
            : `rgb(var(--color-${themeColor}))`;
    if (color === null || typeof color === 'undefined' || typeof color !== 'string')
        return def || '';
    return color; // we get here it's some string perhaps a named color?
}
