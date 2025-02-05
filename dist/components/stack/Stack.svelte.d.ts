import { type ElementProps } from '../../types.js';
import { type Snippet } from 'svelte';
import { type Size } from '../../theme/types.js';
export type StackProps = {
    size?: Size;
    vertical?: boolean;
    children: Snippet<[]>;
} & ElementProps<'div'>;
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
declare const Stack: $$__sveltets_2_IsomorphicComponent<StackProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Stack = InstanceType<typeof Stack>;
export default Stack;
