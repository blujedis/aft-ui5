import type { Snippet } from 'svelte';
import type { ElementProps } from '../../types.js';
import { type ConfigProps } from '../../theme/build.svelte.js';
import { type RatingItemProps } from './RatingItem.svelte';
export type RatingStoreValue = {
    active: number;
    readonly: boolean;
    value: number;
    selected: number;
};
export type RatingContext = {
    state: () => RatingStoreValue;
    props: Omit<RatingItemProps, 'index'>;
    handleCleanup: (e: Event) => void;
};
export interface RatingMethods {
    index: number;
    onmouseover: (index: number, e: MouseEvent) => any;
    onmouseleave: (index: number, e: MouseEvent) => any;
    onclick: (index: number, e: MouseEvent) => any;
}
export type RatingProps = Omit<RatingItemProps, 'index'> & {
    arrowable?: boolean;
    hoverable?: boolean;
    count?: number;
    readonly?: boolean;
    dropShadow?: ConfigProps['dropShadow'];
    value?: number;
    updatable?: boolean;
    children?: Snippet<[RatingMethods]>;
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
declare const Rating: $$__sveltets_2_IsomorphicComponent<Omit<RatingItemProps, "index"> & {
    arrowable?: boolean;
    hoverable?: boolean;
    count?: number;
    readonly?: boolean;
    dropShadow?: ConfigProps["dropShadow"];
    value?: number;
    updatable?: boolean;
    children?: Snippet<[RatingMethods]>;
} & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type Rating = InstanceType<typeof Rating>;
export default Rating;
