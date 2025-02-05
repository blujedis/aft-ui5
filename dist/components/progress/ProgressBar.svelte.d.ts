import { type RoundedSize, type ShadowSize, type ThemeColor } from '../../theme/types.js';
import type { Snippet } from 'svelte';
import type { ElementProps } from '../../types.js';
export type ProgressTweenedOptions<T extends number = any> = {
    delay?: number;
    duration?: number | ((from: T, to: T) => number);
    easing?: (t: number) => number;
    interpolate?: (a: T, b: T) => (t: number) => T;
};
export type ProgressBarProps<T extends number = any> = ProgressTweenedOptions<T> & {
    animate?: boolean;
    max?: number;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: keyof typeof ProgressBarSizes;
    theme?: ThemeColor;
    value?: T;
    children?: Snippet;
};
declare const ProgressBarSizes: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
};
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const ProgressBar: $$__sveltets_2_IsomorphicComponent<ProgressTweenedOptions<any> & {
    animate?: boolean;
    max?: number;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: keyof typeof ProgressBarSizes;
    theme?: ThemeColor;
    value?: any;
    children?: Snippet;
} & ElementProps<"progress">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "value">;
type ProgressBar = InstanceType<typeof ProgressBar>;
export default ProgressBar;
