import type { ElementProps } from '../../types.js';
import { type Snippet } from 'svelte';
import type { PopperEvent } from '../popper/Popper.svelte';
export interface DropdownGroupConfig {
    event: PopperEvent;
    last?: HTMLElement | null;
}
export interface DropdownGroupContext {
    getActive: (active?: boolean) => string[];
    setActive: (id: string) => any;
    hasActive: (id: string) => boolean;
    delActive: (id: string) => any;
    setConf: (id: string, conf: Partial<DropdownGroupConfig>) => any;
    getConf: (id: string) => DropdownGroupConfig;
}
export interface DropdownGroupProps {
    group?: string[];
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
declare const DropdownGroup: $$__sveltets_2_IsomorphicComponent<DropdownGroupProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "group">;
type DropdownGroup = InstanceType<typeof DropdownGroup>;
export default DropdownGroup;
