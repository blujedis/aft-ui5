import { type Snippet } from 'svelte';
import { type Writable } from 'svelte/store';
import { type FocusType, type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type TabsVariant = 'unstyled' | 'pills' | 'tabs' | 'grouped' | 'text';
export interface TabsContext {
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    rounded: RoundedSize;
    shadow: ShadowSize;
    size: Size;
    theme: ThemeColor;
    variant: TabsVariant;
    selected: Writable<{
        label: string;
        node: HTMLElement;
    }>;
}
export interface TabsProps {
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    full?: boolean;
    param?: string;
    rounded?: RoundedSize;
    shadow?: ShadowSize;
    size?: Size;
    theme?: ThemeColor;
    variant?: TabsVariant;
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
declare const Tabs: $$__sveltets_2_IsomorphicComponent<TabsProps & ElementProps<"ul">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Tabs = InstanceType<typeof Tabs>;
export default Tabs;
