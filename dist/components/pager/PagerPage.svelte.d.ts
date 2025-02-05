import { type Snippet } from 'svelte';
import { type PagerVariant } from './Pager.svelte';
import { type FocusType, type RoundedSize, type Size, type ThemeColor } from '../../theme/types.js';
export interface PagerPageProps {
    current?: boolean;
    disabled?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    focusOffset?: Size | 'none';
    rounded?: RoundedSize;
    size?: Size;
    theme?: ThemeColor;
    variant?: PagerVariant;
    children: Snippet;
}
export declare const PagerFlushedPadding: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
};
import type { ElementProps } from '../../types.js';
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
declare const PagerPage: $$__sveltets_2_IsomorphicComponent<PagerPageProps & ElementProps<"a" | "button">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PagerPage = InstanceType<typeof PagerPage>;
export default PagerPage;
