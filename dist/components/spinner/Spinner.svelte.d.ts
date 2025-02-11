import { type ThemeColor } from '../../theme/types.js';
export type LoaderProps = {
    size?: number | keyof typeof LoaderSize;
    speed?: 'slow' | 'medium' | 'fast';
    theme?: ThemeColor;
    trackSize?: number | keyof typeof LoaderSize;
    distance?: number;
};
declare const LoaderSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xl2: number;
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
declare const Spinner: $$__sveltets_2_IsomorphicComponent<LoaderProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Spinner = InstanceType<typeof Spinner>;
export default Spinner;
