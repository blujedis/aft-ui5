import { type FocusType, type Size, type ThemeColor } from '../../theme/types.js';
import type { Snippet } from 'svelte';
import type { IconifyIcon } from '@iconify/svelte';
import type { ElementProps } from '../../types.js';
export interface BreadcrumbItemProps {
    readonly index?: number;
    label?: string;
    focusType: FocusType;
    focusTheme: ThemeColor;
    home?: boolean;
    href?: string;
    icon?: string | IconifyIcon;
    sronly?: string;
    selected?: boolean;
    separator?: string | IconifyIcon;
    size?: Size;
    theme?: ThemeColor;
    children?: Snippet;
}
export declare const BreadcrumbMargins: {
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
declare const BreadcrumbItem: $$__sveltets_2_IsomorphicComponent<BreadcrumbItemProps & ElementProps<"a">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type BreadcrumbItem = InstanceType<typeof BreadcrumbItem>;
export default BreadcrumbItem;
