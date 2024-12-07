import type { Component } from 'svelte';
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
declare const VariantList: $$__sveltets_2_IsomorphicComponent<{
    variants?: any[];
    modifiers?: string[];
    key?: string;
    component: Component<any>;
    props?: Record<string, unknown>;
    icon?: string;
    image?: string;
    label?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type VariantList = InstanceType<typeof VariantList>;
export default VariantList;
