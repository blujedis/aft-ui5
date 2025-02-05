import type { Snippet } from 'svelte';
import type { ProgressTweenedOptions } from './ProgressBar.svelte';
import { type ThemeColor, type ShadowSize } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type ProgressCircleProps = {
    animate?: boolean;
    max?: number;
    shadow?: ShadowSize | false;
    size?: keyof typeof ProgressCircleSize | number;
    text?: boolean | string;
    textUnit?: string;
    theme?: ThemeColor;
    trackSize?: keyof typeof ProgressCircleSize | number;
    value?: number;
    children?: Snippet;
} & ProgressTweenedOptions;
declare const ProgressCircleSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xl2: number;
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
declare const ProgressCircle: $$__sveltets_2_IsomorphicComponent<{
    animate?: boolean;
    max?: number;
    shadow?: ShadowSize | false;
    size?: keyof typeof ProgressCircleSize | number;
    text?: boolean | string;
    textUnit?: string;
    theme?: ThemeColor;
    trackSize?: keyof typeof ProgressCircleSize | number;
    value?: number;
    children?: Snippet;
} & ProgressTweenedOptions & ElementProps<"svg">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "value">;
type ProgressCircle = InstanceType<typeof ProgressCircle>;
export default ProgressCircle;
