import { type ThemeColor } from '../../theme/types.js';
import type { IconProps as IconifyIconProps } from '@iconify/svelte';
import Icon from '@iconify/svelte';
export type IconRotate = 0 | 45 | 90 | 180 | -45 | -90 | -180;
export type IconProps = Omit<IconifyIconProps, 'rotate'> & {
    rotate?: 'unstyled' | IconRotate;
    class?: string | null;
    hoverable?: boolean;
    size?: keyof typeof IconSize;
    theme?: ThemeColor;
    stroke?: ThemeColor;
    variant?: 'unstyled' | 'filled' | 'soft';
};
export declare const iconVariants: IconProps["variant"][];
export declare const IconSize: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    full: string;
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
declare const Icon: $$__sveltets_2_IsomorphicComponent<IconProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "rotate">;
type Icon = InstanceType<typeof Icon>;
export default Icon;
