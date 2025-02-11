import type { ElementProps } from '../../types.js';
import type { Snippet } from 'svelte';
import type { RoundedSize } from '../../theme/types.js';
import { type ConfigProps } from '../../theme/build.svelte.js';
export interface CardProps {
    horizontal?: boolean;
    href?: string;
    image?: string | Snippet<[{
        classes: string;
    }]>;
    reverse?: boolean;
    rounded?: RoundedSize | false;
    elevation?: ConfigProps['elevation'];
    size?: keyof typeof CardSize;
    spacing?: boolean;
    children: Snippet;
}
declare const CardSize: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    full: string;
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
declare const Card: $$__sveltets_2_IsomorphicComponent<CardProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Card = InstanceType<typeof Card>;
export default Card;
