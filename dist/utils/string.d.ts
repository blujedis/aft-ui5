import type { Page } from '@sveltejs/kit';
import type { ClassValue } from 'clsx';
export declare function capitalize(value: string): string;
/**
 * When string match uses index of or includes
 * otherwise use RegExp with .test().
 */
export declare function pageIsActive(page: Page<Record<string, string>, string | null>, match: string | RegExp): boolean;
/**
 * Combines class names then processes for duplicates with Tailwind merge util.
 *
 * @param args class values to be processed
 */
export declare function clsxm(...args: ClassValue[]): string;
export declare function toColorVar(key: string, value: string): string;
export declare function joinStyles(styles: string | false | null | (string | false | null)[], append?: string): string;
/**
 * Verifies that value is a known theme color.
 *
 * @param color the color to verify as theme color.
 */
export declare function isThemeColor(color: string): string | null;
/**
 * Gets a normalized color value.
 *
 * @param color the color to normalize.
 * @param def a default fallback value.
 * @param opacity optional opacity to be applied when theme color is used.
 */
export declare function getColor(color: string, def?: string, opacity?: string): string;
