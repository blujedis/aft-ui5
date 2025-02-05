import { type ElementProps } from '../../types.js';
import { type Snippet } from 'svelte';
import { type Size, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
export type AvatarProps = {
    hoverable?: boolean;
    mode?: 'icon' | 'image';
    removable?: boolean;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    stacked?: boolean;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'filled' | 'soft' | 'outlined';
    children: Snippet<[{
        rounded?: RoundedSize | false;
        size?: Size;
    }]>;
} & Omit<ElementProps<'span'>, 'children'>;
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
declare const Avatar: $$__sveltets_2_IsomorphicComponent<AvatarProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Avatar = InstanceType<typeof Avatar>;
export default Avatar;
