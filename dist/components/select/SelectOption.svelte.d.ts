import type { ElementProps } from '../../types.js';
import type { Snippet } from 'svelte';
export interface SelectOptionProps {
    disabled?: boolean | null;
    placeholder?: boolean | null;
    selected?: boolean | null;
    size?: Size;
    theme?: ThemeColor;
    value: any;
    children: Snippet;
}
import type { Size, ThemeColor } from '../../theme/types.js';
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
declare const SelectOption: $$__sveltets_2_IsomorphicComponent<SelectOptionProps & Omit<ElementProps<"option">, "placeholder">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type SelectOption = InstanceType<typeof SelectOption>;
export default SelectOption;
