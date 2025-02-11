import type { Snippet } from 'svelte';
import { type PopperProps } from '../popper/Popper.svelte';
import { type ConfigProps } from '../../theme/build.svelte.js';
import { type RoundedSize, type Size } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type PopoverProps = Omit<PopperProps, 'children'> & {
    elevation?: ConfigProps['elevation'];
    flush?: boolean;
    rounded?: RoundedSize | false;
    size?: Size;
    title?: string;
    children: Snippet<[{
        close: (e?: Event) => any;
    }]>;
};
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
declare const Popover: $$__sveltets_2_IsomorphicComponent<Omit<PopperProps, "children"> & {
    elevation?: ConfigProps["elevation"];
    flush?: boolean;
    rounded?: RoundedSize | false;
    size?: Size;
    title?: string;
    children: Snippet<[{
        close: (e?: Event) => any;
    }]>;
} & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "visible">;
type Popover = InstanceType<typeof Popover>;
export default Popover;
