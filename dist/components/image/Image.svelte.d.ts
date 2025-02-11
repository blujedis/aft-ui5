import { type ElementProps } from '../../types.js';
export type ImageStackProps = {
    aspect?: keyof typeof ImageAspect;
    lazy?: boolean;
    rounded?: RoundedSize | false;
    grow?: 'horizontal' | 'veritical' | 'h' | 'v';
    size?: keyof typeof ImageSize;
} & ElementProps<'img'>;
export declare const ImageSize: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    xl3: string;
    xl4: string;
    xl5: string;
    xl6: string;
    min: string;
    max: string;
    fit: string;
    full: string;
    auto: string;
    '1/4': string;
    '1/2': string;
    '1/3': string;
    '2/3': string;
    '3/4': string;
};
export declare const ImageAspect: {
    unstyled: string;
    auto: string;
    square: string;
    video: string;
};
import type { RoundedSize } from '../../theme/types.js';
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
declare const Image: $$__sveltets_2_IsomorphicComponent<ImageStackProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Image = InstanceType<typeof Image>;
export default Image;
