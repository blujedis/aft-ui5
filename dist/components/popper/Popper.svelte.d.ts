import type { Placement, Middleware } from '@floating-ui/dom';
import { type Snippet } from 'svelte';
import type { AriaRole } from 'svelte/elements';
import type { ElementProps } from '../../types.js';
export type PopperEvent = 'hover' | 'click' | 'focus' | 'touch' | 'none';
export interface PopperApi {
    triggers: HTMLElement[];
    panel: HTMLElement;
    open: (e?: Event) => void;
    close: (e?: Event) => void;
}
export interface PopperProps {
    api?: PopperApi;
    abortable?: boolean;
    active?: boolean;
    arrow?: boolean;
    arrowClass?: ClassValue | ClassValue[];
    arrowPlacement?: 'start' | 'end' | 'auto';
    arrowOffset?: number;
    border?: number;
    escapable?: boolean;
    event?: PopperEvent;
    middleware?: Middleware[];
    offset?: number;
    placement?: Placement;
    role?: AriaRole;
    strategy?: 'absolute' | 'fixed';
    target?: string | HTMLElement;
    trigger?: string;
    visible?: boolean;
    onClosed?: () => any;
    children: Snippet;
}
import type { ClassValue } from 'clsx';
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
declare const Popper: $$__sveltets_2_IsomorphicComponent<PopperProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "visible" | "api">;
type Popper = InstanceType<typeof Popper>;
export default Popper;
