import { type ElementProps } from '../../types.js';
import { Animate } from '../../theme/constants.js';
import { type Size, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
export type IndicatorProps = {
    animate?: Exclude<keyof typeof Animate, 'spin'>;
    offset?: boolean;
    placement?: keyof typeof IndicatorPlacement;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
    text?: string | number;
    variant?: 'unstyled' | 'filled' | 'soft';
} & ElementProps<'span'>;
declare const IndicatorPlacement: {
    'top-left': string;
    'top-center': string;
    'top-right': string;
    'center-left': string;
    center: string;
    'center-right': string;
    'bottom-left': string;
    'bottom-center': string;
    'bottom-right': string;
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
declare const Indicator: $$__sveltets_2_IsomorphicComponent<IndicatorProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Indicator = InstanceType<typeof Indicator>;
export default Indicator;
