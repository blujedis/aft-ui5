import { type Size } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type RatingItemProps = {
    background?: string;
    fill?: string;
    index: number;
    size?: Size;
    stroked?: boolean;
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
declare const RatingItem: $$__sveltets_2_IsomorphicComponent<RatingItemProps & ElementProps<"button">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "fill">;
type RatingItem = InstanceType<typeof RatingItem>;
export default RatingItem;
