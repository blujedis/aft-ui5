import type { Snippet } from 'svelte';
import { type FocusType, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export interface SwitchProps {
    checked?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    focusOffset?: Size | 'none';
    shadow?: ShadowSize | false;
    size?: Size;
    sronly?: string;
    theme?: ThemeColor;
    children?: Snippet;
}
export declare const SwitchButtonSize: {
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
declare const Switch: $$__sveltets_2_IsomorphicComponent<SwitchProps & Omit<ElementProps<"input">, "class">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "checked">;
type Switch = InstanceType<typeof Switch>;
export default Switch;
