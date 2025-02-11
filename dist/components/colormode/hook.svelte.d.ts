import type { Snippet } from 'svelte';
export type ColorModeChildProps = {
    isDark: () => boolean;
    set: (dark: boolean) => void;
    toggle: () => boolean;
};
export type ColorModeProps = {
    initial?: 'light' | 'dark' | 'auto';
    children?: Snippet<[ColorModeChildProps]>;
};
declare function set(isLight?: boolean): void;
declare function toggle(): boolean;
declare function init(mode?: 'auto' | 'light' | 'dark'): boolean;
declare function isDark(): boolean;
export { isDark, init, set, toggle };
