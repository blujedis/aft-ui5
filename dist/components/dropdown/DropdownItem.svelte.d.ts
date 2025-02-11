import { type Size, type ThemeColor } from '../../theme/types.js';
import { type ElementProps } from '../../types.js';
import { type Snippet } from 'svelte';
import type { DropdownProps } from './Dropdown.svelte';
export interface DropdownItemProps {
    disabled?: boolean;
    href?: string;
    selected?: boolean;
    size?: Size;
    theme?: ThemeColor;
    value?: any;
    variant?: DropdownProps['variant'];
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
declare const DropdownItem: $$__sveltets_2_IsomorphicComponent<DropdownItemProps & ElementProps<never>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "selected">;
type DropdownItem = InstanceType<typeof DropdownItem>;
export default DropdownItem;
