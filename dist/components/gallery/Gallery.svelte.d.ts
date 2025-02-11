import type { ElementProps, KeysOfSource } from '../../types.js';
import type { Snippet } from 'svelte';
export interface GalleryProps {
    cols?: KeysOfSource<typeof GalleryCols>;
    gap?: KeysOfSource<typeof GalleryGap>;
    children: Snippet;
}
declare const GalleryCols: {
    unstyled: string;
    none: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    12: string;
};
declare const GalleryGap: {
    unstyled: string;
    1: string;
    2: string;
    4: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
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
declare const Gallery: $$__sveltets_2_IsomorphicComponent<GalleryProps & ElementProps<"div">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Gallery = InstanceType<typeof Gallery>;
export default Gallery;
