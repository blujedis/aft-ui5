import { type Snippet } from 'svelte';
import type { ElementProps } from '../../types.js';
import { type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
export type PagerVariant = 'unstyled' | 'filled' | 'soft' | 'text';
export interface PagerContext {
    rounded: RoundedSize;
    size: Size;
    theme: ThemeColor;
    variant: PagerVariant;
}
export type PagerProps = {
    rounded?: RoundedSize;
    shadow?: ShadowSize;
    size?: Size;
    theme?: ThemeColor;
    variant?: PagerVariant;
    previous?: boolean | Snippet;
    children?: Snippet;
    next?: boolean | Snippet;
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
declare const Pager: $$__sveltets_2_IsomorphicComponent<PagerProps & ElementProps<"nav">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Pager = InstanceType<typeof Pager>;
export default Pager;
