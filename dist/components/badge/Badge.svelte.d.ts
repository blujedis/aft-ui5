import { type ElementProps } from '../../types.js';
import { type Size, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
export type BadgeProps = {
    full?: boolean;
    hoverable?: boolean;
    removable?: boolean;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
    children: Snippet<[]>;
} & ElementProps<'span'>;
import type { Snippet } from 'svelte';
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
declare const Badge: $$__sveltets_2_IsomorphicComponent<BadgeProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Badge = InstanceType<typeof Badge>;
export default Badge;
