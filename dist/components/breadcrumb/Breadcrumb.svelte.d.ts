import type { Snippet } from 'svelte';
import type { Size, ThemeColor, RoundedSize, ShadowSize } from '../../theme/types.js';
export interface BreadcrumbProps {
    full?: boolean;
    generate?: boolean;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
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
declare const Breadcrumb: $$__sveltets_2_IsomorphicComponent<BreadcrumbProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Breadcrumb = InstanceType<typeof Breadcrumb>;
export default Breadcrumb;
