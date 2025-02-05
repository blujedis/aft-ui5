import { type ThemeColor } from '../../theme/types.js';
import type { Snippet } from 'svelte';
export interface FlushedProps {
    disabled?: boolean;
    focusTheme?: ThemeColor;
    group?: boolean;
    peer?: boolean;
    hoverable?: boolean;
    selected?: boolean;
    theme?: ThemeColor;
    children: Snippet;
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
declare const Flushed: $$__sveltets_2_IsomorphicComponent<FlushedProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Flushed = InstanceType<typeof Flushed>;
export default Flushed;
