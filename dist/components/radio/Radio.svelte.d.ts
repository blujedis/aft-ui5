import type { ElementProps } from '../../types.js';
import { type FocusType, type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
export interface RadioProps {
    disabled?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    group?: any;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
}
export declare const RadioSize: {
    unstyled: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
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
declare const Radio: $$__sveltets_2_IsomorphicComponent<RadioProps & Omit<ElementProps<"input">, "size">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "group" | "theme">;
type Radio = InstanceType<typeof Radio>;
export default Radio;
