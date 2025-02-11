import { type ElementProps } from '../../types.js';
import { type Snippet } from 'svelte';
import type { IconifyIcon } from '@iconify/svelte';
import { type TransitionParams } from '../../utils/transitioner.js';
import { type NotificationPosition } from '../notifications/notifications.svelte.js';
import { type Size, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
export type AlertProps = {
    readonly key?: string;
    escapable?: boolean;
    icon?: boolean | string | IconifyIcon;
    position?: NotificationPosition | 'left' | 'right';
    removable?: boolean;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    theme?: ThemeColor | 'default';
    transition?: TransitionParams;
    size?: Size;
    variant?: 'unstyled' | 'filled' | 'soft';
    visible?: any;
    children: Snippet<[]>;
} & ElementProps<'div'>;
export declare const alertVariants: AlertProps["variant"][];
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
declare const Alert: $$__sveltets_2_IsomorphicComponent<AlertProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "visible">;
type Alert = InstanceType<typeof Alert>;
export default Alert;
