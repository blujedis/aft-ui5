import { type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
import type { Snippet } from 'svelte';
export interface DividerProps {
    vertical?: boolean;
    content?: 'start' | 'end' | 'center' | 'none';
    theme?: ThemeColor;
    children?: Snippet;
}
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
declare const Divider: $$__sveltets_2_IsomorphicComponent<DividerProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Divider = InstanceType<typeof Divider>;
export default Divider;
