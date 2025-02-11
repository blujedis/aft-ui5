import type { ElementProps } from '../../types.js';
import type { Snippet } from 'svelte';
export interface SelectGroupProps {
    disabled?: boolean;
    label: string;
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
declare const SelectGroup: $$__sveltets_2_IsomorphicComponent<SelectGroupProps & ElementProps<"optgroup">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type SelectGroup = InstanceType<typeof SelectGroup>;
export default SelectGroup;
