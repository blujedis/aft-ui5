import { type ShadowSize } from '../../theme/types.js';
import type { Snippet } from 'svelte';
import { type FlyParams } from 'svelte/transition';
export type DrawerProps = {
    abortable?: boolean;
    backdrop?: boolean;
    escapable?: boolean;
    flyParams?: FlyParams | [FlyParams, FlyParams];
    position?: 'left' | 'right';
    shadow?: ShadowSize | false;
    size?: keyof typeof DrawerSizeMap;
    speed?: keyof typeof DrawerSpeedMap;
    visible?: boolean | number;
    children: Snippet<[{
        close: (...args: any[]) => any;
    }]>;
};
declare const DrawerSizeMap: {
    unstyled: string;
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    xl3: string;
    xl4: string;
};
declare const DrawerSpeedMap: {
    unstyled: number;
    slow: number;
    medium: number;
    fast: number;
};
import type { ElementProps } from '../../types.js';
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
declare const Drawer: $$__sveltets_2_IsomorphicComponent<DrawerProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "visible">;
type Drawer = InstanceType<typeof Drawer>;
export default Drawer;
