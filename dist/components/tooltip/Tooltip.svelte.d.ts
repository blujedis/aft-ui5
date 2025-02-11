import type { Snippet } from 'svelte';
import { type PopperProps } from '../popper/Popper.svelte';
import { type ConfigProps } from '../../theme/build.svelte.js';
import { type RoundedSize, type Size, type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type TooltipProps = PopperProps & {
    elevation?: ConfigProps['elevation'];
    rounded?: RoundedSize | false;
    size?: Size;
    theme?: ThemeColor;
    variant?: 'untyled' | 'filled' | 'soft' | 'outlined';
    children: Snippet;
};
export declare const TooltipSize: {
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
declare const Tooltip: $$__sveltets_2_IsomorphicComponent<PopperProps & {
    elevation?: ConfigProps["elevation"];
    rounded?: RoundedSize | false;
    size?: Size;
    theme?: ThemeColor;
    variant?: "untyled" | "filled" | "soft" | "outlined";
    children: Snippet;
} & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "visible">;
type Tooltip = InstanceType<typeof Tooltip>;
export default Tooltip;
