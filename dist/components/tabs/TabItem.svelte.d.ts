import { type Snippet } from 'svelte';
import type { TabsVariant } from './Tabs.svelte';
import { type RoundedSize, type Size, type ThemeColor } from '../../theme/types.js';
export interface TabItemProps {
    href?: string;
    label: string;
    rounded?: RoundedSize;
    selected?: boolean;
    size?: Size;
    theme?: ThemeColor;
    variant?: TabsVariant;
    trigger?: Snippet;
    children: Snippet;
}
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
declare const TabItem: $$__sveltets_2_IsomorphicComponent<TabItemProps & ElementProps<never>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type TabItem = InstanceType<typeof TabItem>;
export default TabItem;
