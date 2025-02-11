import { type ColorModeProps } from './hook.svelte.js';
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
declare const ColorModeInit: $$__sveltets_2_IsomorphicComponent<ColorModeProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ColorModeInit = InstanceType<typeof ColorModeInit>;
export default ColorModeInit;
